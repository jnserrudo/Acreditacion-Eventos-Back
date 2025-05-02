// import { PrismaClient } from '@prisma/client'; // <- LÍNEA ANTIGUA
// Al principio de eventoModel.js y participanteModel.js
import prisma from "../../src/config/prismaClient.js"; // Ajusta la ruta '../' si 'models' y 'config' están en el mismo nivel dentro de 'src' o 'backend'

import { Decimal } from "@prisma/client/runtime/library"; // Importa Decimal explícitamente

// Helper para convertir campos Decimal a String antes de enviar al frontend
const formatParticipant = (participant) => {
  if (!participant) return null;
  return {
    ...participant,
    // Asegura que montoPagado y precioEntrada sean strings o null
    montoPagado: participant.montoPagado?.toString() ?? "0.00", // Si es null, devuelve '0.00' (ya que tiene default)
    precioEntrada: participant.precioEntrada?.toString() ?? null, // Devuelve null si es null en DB
  };
};

export class ParticipanteModel {
  static getByEventoId = async (eventoId) => {
    if (isNaN(eventoId)) return []; // Devuelve array vacío si el ID no es válido
    try {
      const participantes = await prisma.participante.findMany({
        where: { eventoId: eventoId },
        orderBy: [
          // Ordenar por apellido y luego nombre
          { apellido: "asc" },
          { nombre: "asc" },
        ],
        // No incluimos 'evento' aquí para evitar redundancia
      });
      console.log("Participantes encontrados:", participantes);
      // Aplica formato a cada participante en la lista
      return participantes.map(formatParticipant);
    } catch (error) {
      console.error(
        `Error en ParticipanteModel.getByEventoId (eventoId: ${eventoId}):`,
        error
      );
      throw error;
    }
  };

  static create = async (data) => {
    try {
      // Convertir montos a Decimal o manejar null/undefined
      let montoDecimal = new Decimal(data.montoPagado ?? 0.0); // Usa default 0.00 si no viene
      let precioDecimal = null;
      if (
        data.precioEntrada !== undefined &&
        data.precioEntrada !== null &&
        data.precioEntrada !== ""
      ) {
        try {
          precioDecimal = new Decimal(data.precioEntrada);
        } catch (e) {
          throw new Error(
            `Formato de 'precioEntrada' inválido: ${data.precioEntrada}`
          );
        }
      }
      const nuevoParticipante = await prisma.participante.create({
        data: {
          eventoId: data.eventoId,
          nombre: data.nombre,
          apellido: data.apellido,
          dni: data.dni,
          numeroEntrada: data.numeroEntrada,
          telefono: data.telefono,
          correo: data.correo,
          medioPago: data.medioPago,
          rubro: data.rubro,
          acreditado: data.acreditado ?? false, // Default a false si no se especifica
          precioEntrada: precioDecimal,
          montoPagado: montoDecimal,
          // createdAt y updatedAt son automáticos
        },
      });
      console.log("Participante creado:", nuevoParticipante);

      // Prisma devuelve Decimal como objeto Decimal, puede que quieras convertirlo a string/number antes de enviar al front
      return formatParticipant(nuevoParticipante); // Devuelve formateado
    } catch (error) {
      console.error("Error en ParticipanteModel.create:", error);
      // Prisma lanzará P2002 (unique constraint) o P2003 (foreign key)
      // El controlador debería manejarlos.
      throw error;
    }
  };

  static acreditar = async (id) => {
    if (isNaN(id)) {
      // Lanzar error en lugar de devolver objeto para manejo consistente en controlador
      const error = new Error("ID de participante inválido.");
      error.status = 400; // Añadir status para el controlador
      throw error;
    }

    try {
      // 1. Obtener participante con los campos necesarios para la validación
      const participante = await prisma.participante.findUnique({
        where: { id: id },
        // Selecciona solo los campos necesarios para decidir
        select: {
          id: true,
          eventoId: true,
          nombre: true,
          apellido: true,
          montoPagado: true,
          precioEntrada: true,
          acreditado: true,
        },
      });

      // 2. Validar si existe
      if (!participante) {
        const error = new Error(`Participante con ID ${id} no encontrado.`);
        error.code = "P2025"; // Simular error Not Found de Prisma
        throw error;
      }

      // 3. Validar si ya está acreditado
      if (participante.acreditado) {
        const error = new Error("Participante ya está acreditado.");
        error.status = 409; // Conflict
        throw error;
      }

      // 4. Validar Pago Completo
      // Si precioEntrada es null O si montoPagado es menor que precioEntrada
      if (
        participante.precioEntrada === null ||
        participante.montoPagado.lt(participante.precioEntrada)
      ) {
        const precioFaltante = participante.precioEntrada
          ? participante.precioEntrada
              .minus(participante.montoPagado)
              .toString()
          : "Precio de Entrada no asignado";
        const error = new Error(
          `No se puede acreditar: Pago incompleto. Falta: $${precioFaltante}`
        );
        error.status = 402; // Payment Required
        throw error;
      }

      // 5. Si todas las validaciones pasan, acreditar
      const participanteAcreditado = await prisma.participante.update({
        where: { id: id },
        data: { acreditado: true },
      });
      // console.log("Participante acreditado:", participanteAcreditado); // Descomentar para debug
      return formatParticipant(participanteAcreditado); // Devuelve participante completo y formateado
    } catch (error) {
      console.error(`Error en ParticipanteModel.acreditar (id: ${id}):`, error);
      // Prisma lanza P2025 si el participante no existe.
      throw error;
    }
  };

  // --- NUEVO: Actualizar Monto Pagado (Cancelar Saldo) ---
  static cancelPendingAmount = async (id) => { // <--- Renombrada y ya no necesita montoFinal
    if (isNaN(id)) return null; // O lanzar error
    try {
      // 1. Obtener participante para saber su precioEntrada
      const participante = await prisma.participante.findUnique({
        where: { id: id },
        select: {
          precioEntrada: true,
          montoPagado: true,
          id: true,
          eventoId: true,
        }, // Selecciona campos necesarios
      });

      if (!participante) {
        const error = new Error(`P2025`);
        throw error;
      }

      // 2. VERIFICAR SI TIENE PRECIO ASIGNADO
      if (participante.precioEntrada === null) {
        throw new Error(
          "No se puede cancelar saldo: Asigne primero el 'Precio de Entrada' a este participante."
        );
      }

      // 3. Opcional: Verificar si ya está pagado (evita update innecesario)
      if (participante.montoPagado.gte(participante.precioEntrada)) {
        // gte = greater than or equal
        console.log(
          `Participante ${id} ya tiene el pago completo o excedido. No se actualiza monto.`
        );
        // Devuelve el participante actual formateado sin hacer update
        // Necesitamos volver a buscarlo para tener todos los campos para formatParticipant
        const currentFullParticipant = await prisma.participante.findUnique({
          where: { id },
        });
        return formatParticipant(currentFullParticipant);
      }

      // 4. Actualizar montoPagado al precioEntrada definido
      const participanteActualizado = await prisma.participante.update({
        where: { id: id },
        data: {
          montoPagado: participante.precioEntrada,
        },
      });
      return formatParticipant(participanteActualizado);
    } catch (error) {
      console.error(
        `Error en ParticipanteModel.cancelPendingAmount (id: ${id}):`,
        error
      );
      throw error;
    }
  };

// --- ACTUALIZAR PRECIO DE ENTRADA (Nuevo) ---
static updatePrecioEntrada = async (id, nuevoPrecio) => {
    if (isNaN(id)) return null; // O lanzar error
    let precioDecimal;
    try {
        // Permitir null para quitar precio, 0 para gratis, o número positivo
        if (nuevoPrecio === null || nuevoPrecio === undefined || nuevoPrecio === '') {
            precioDecimal = null; // Permite quitar el precio
        } else {
            const precioNum = parseFloat(nuevoPrecio);
            if (isNaN(precioNum) || precioNum < 0) {
                 throw new Error("El 'Precio de Entrada' debe ser un número válido (0 o mayor) o nulo.");
            }
            precioDecimal = new Decimal(nuevoPrecio);
        }
    } catch (e) {
        throw new Error("Formato de 'Precio de Entrada' inválido.");
    }

    try {
         const participanteActualizado = await prisma.participante.update({
             where: { id: id },
             data: { precioEntrada: precioDecimal } // Actualiza con Decimal o null
         });
         return formatParticipant(participanteActualizado);
    } catch (error) {
        console.error(`Error en updatePrecioEntrada (id: ${id}):`, error);
        throw error; // Relanza P2025 etc.
    }
};


  // --- NUEVO: Asignar Nueva Entrada ---
  static assignNuevaEntrada = async (id, nuevaEntradaValue) => {
    if (
      isNaN(id) ||
      typeof nuevaEntradaValue !== "string" ||
      !nuevaEntradaValue.trim()
    ) {
      // Podrías lanzar error o simplemente devolver null si los datos son inválidos
      throw new Error("ID de participante o valor de nueva entrada inválido.");
    }
    // OPCIONAL: Verificar si esa nuevaEntradaValue ya está asignada a OTRO participante en el MISMO evento
    // const participanteActual = await prisma.participante.findUnique({ where: { id } });
    // if (!participanteActual) throw new Error("Participante no encontrado."); // P2025 lo hará igual
    // const existing = await prisma.participante.findFirst({
    //    where: {
    //        eventoId: participanteActual.eventoId,
    //        nuevaEntrada: nuevaEntradaValue,
    //        NOT: { id: id } // Excluir al participante actual
    //    }
    // });
    // if (existing) {
    //    throw new Error(`La nueva entrada '${nuevaEntradaValue}' ya está asignada a otro participante en este evento.`);
    // }

    try {
      const participanteActualizado = await prisma.participante.update({
        where: { id: id },
        data: {
          nuevaEntrada: nuevaEntradaValue.trim(),
        },
      });
     return formatParticipant(participanteActualizado);
    } catch (error) {
      console.error(
        `Error en ParticipanteModel.assignNuevaEntrada (id: ${id}):`,
        error
      );
      // Manejar P2025 (Not Found)
      // Manejar P2002 si descomentaste el constraint unique para nuevaEntrada
      throw error;
    }
  };

  // --- BÚSQUEDA PARA ACREDITACIÓN (Ejemplo) ---
  // Busca por DNI O Nro Entrada DENTRO de un evento específico
  static findForAccreditation = async (eventoId, searchTerm) => {
    if (isNaN(eventoId) || !searchTerm) return null;
    try {
      const participante = await prisma.participante.findFirst({
        where: {
          eventoId: eventoId,
          OR: [
            // Busca si coincide con DNI O numeroEntrada
            { dni: searchTerm },
            { numeroEntrada: searchTerm },
          ],
        },
      });
      return formatParticipant(participante); // Devuelve el participante o null
    } catch (error) {
      console.error(
        `Error en ParticipanteModel.findForAccreditation (eventoId: ${eventoId}, term: ${searchTerm}):`,
        error
      );
      throw error;
    }
  };

  // Podrías añadir aquí findById, update, delete si fueran necesarios para participantes individuales.
}

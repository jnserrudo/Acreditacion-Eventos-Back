// backend/controllers/participanteController.js
import { ParticipanteModel } from "../models/participante.js";
// Importar herramientas para parsear Excel si implementas bulk
// import xlsx from 'xlsx';

export class ParticipanteController {
  static getByEventoId = async (req, res, next) => {
    try {
      const { eventoId } = req.params;
      const participantes = await ParticipanteModel.getByEventoId(
        parseInt(eventoId)
      );
      res.json(participantes);
    } catch (error) {
      next(error);
    }
  };

  static create = async (req, res, next) => {
    try {
      const { eventoId } = req.params;

      const participanteData = {
        ...req.body,
        eventoId: parseInt(eventoId), // Asegura que el eventoId esté y sea número
      };

      const io = req.io; // Asume que usas el middleware para pasar io


      // Aquí validación de participanteData (nombre, apellido, dni, numeroEntrada obligatorios)

      // --- Validación (como la tenías) ---
      if (
        !participanteData.nombre ||
        !participanteData.apellido ||
        !participanteData.dni ||
        !participanteData.numeroEntrada ||
        !participanteData.telefono ||
        
        !participanteData.medioPago ||
        !participanteData.rubro
      ) {
        // Ajusta según los campos *realmente* obligatorios ahora
        return res.status(400).json({ message: "Faltan campos obligatorios." });
      }

      const nuevoParticipante = await ParticipanteModel.create(
        participanteData
      );

      // --- EMITIR EVENTO WEBSOCKET ---
      // 1. Determina la sala correcta (basado en el eventoId del participante creado)
      const roomName = `event_${participanteData.eventoId}`;

      // 2. Emite el evento 'participant_created' a esa sala
      //    Enviando el objeto completo del participante creado
      io.to(roomName).emit('participant_created', nuevoParticipante);

      // 3. Loguea para verificar (opcional)
      console.log(`Emitido evento 'participant_created' a sala ${roomName} para participante ID ${nuevoParticipante.id}`);
      // -------------------------------

      res.status(201).json(nuevoParticipante);
    } catch (error) {
      // --- MANEJO DE ERRORES MEJORADO ---

      // Error: Evento no encontrado (FK constraint)
      if (
        error.code === "P2003" &&
        error.meta?.field_name?.includes("eventoId")
      ) {
        return res
          .status(404)
          .json({ message: `El evento especificado no fue encontrado.` });
      }

      // Error: Valor duplicado (Unique constraint)
      if (error.code === "P2002" && error.meta?.target) {
        const target = error.meta.target; // Campos que causaron el error
        let userMessage = "Error: Ya existe un registro con datos similares."; // Mensaje por defecto

        // Genera mensajes específicos basados en el campo duplicado
        if (
          target.includes("Participantes_correo_key") ||
          target.includes("correo")
        ) {
          userMessage = `El correo electrónico '${
            req.body.correo || ""
          }' ya está registrado. Por favor, use otro.`;
        } else if (
          target.includes("participante_unico_dni_por_evento") ||
          target.includes("dni")
        ) {
          userMessage = `El DNI '${
            req.body.dni || ""
          }' ya está registrado para este evento.`;
        } else if (
          target.includes("participante_unico_entrada_por_evento") ||
          target.includes("numeroEntrada")
        ) {
          userMessage = `El Número de Entrada '${
            req.body.numeroEntrada || ""
          }' ya está registrado para este evento.`;
        }
        // Devuelve error 409 (Conflict) con el mensaje específico
        return res.status(409).json({ message: userMessage });
      }

      // Si no es un error manejado específicamente, pasa al siguiente middleware
      next(error);
    }
  };

  // --- ACREDITACIÓN ---
  // --- ACREDITACIÓN (Modificado) ---
  static acreditar = async (req, res, next) => {
    const { id } = req.params; // ID del participante
    const io = req.io; // <-- Obtén la instancia io del request

    try {
      const participanteAcreditado = await ParticipanteModel.acreditar(
        parseInt(id)
      );

      if (participanteAcreditado) {
        // --- EMITIR EVENTO WEBSOCKET ---
        // 1. Determina la sala correcta (basado en el eventoId del participante actualizado)
        const roomName = `event_${participanteAcreditado.eventoId}`;

        // 2. Emite el evento 'participant_updated' a esa sala
        //    Enviando el objeto completo del participante actualizado
        io.to(roomName).emit("participant_updated", participanteAcreditado);

        // 3. Loguea para verificar (opcional)
        console.log(
          `Emitido evento 'participant_updated' a sala ${roomName} para participante ID ${id}`
        );
        // -------------------------------

        // 4. Responde al cliente original que hizo la petición PUT
        res.json(participanteAcreditado);
      } else {
        // El modelo ahora lanza error si no encuentra, este else no se alcanzaría
        // Mantenemos por si acaso, pero el catch lo manejará mejor
        res
          .status(404)
          .json({ message: `Participante con ID ${id} no encontrado.` });
      }
    } catch (error) {
      // Manejo de error P2025 (Not Found) de Prisma
      if (error.code === "P2025") {
        return res
          .status(404)
          .json({
            message: `Participante con ID ${req.params.id} no encontrado.`,
          });
      }
      // Pasa otros errores al manejador global
      next(error);
    }
  };
}

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

      // Aquí validación de participanteData (nombre, apellido, dni, numeroEntrada obligatorios)

      // --- Validación (como la tenías) ---
      if (
        !participanteData.nombre ||
        !participanteData.apellido ||
        !participanteData.dni ||
        !participanteData.numeroEntrada ||
        !participanteData.telefono ||
        !participanteData.correo ||
        !participanteData.medioPago ||
        !participanteData.rubro
      ) {
        // Ajusta según los campos *realmente* obligatorios ahora
        return res.status(400).json({ message: "Faltan campos obligatorios." });
      }

      const nuevoParticipante = await ParticipanteModel.create(
        participanteData
      );
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
  static acreditar = async (req, res, next) => {
    try {
      const { id } = req.params; // ID del participante
      const participanteAcreditado = await ParticipanteModel.acreditar(
        parseInt(id)
      );

      if (participanteAcreditado) {
        res.json(participanteAcreditado);
      } else {
        // Prisma lanzará P2025 si no lo encuentra
        res
          .status(404)
          .json({ message: `Participante con ID ${id} no encontrado.` });
      }
    } catch (error) {
      if (error.code === "P2025") {
        return res
          .status(404)
          .json({
            message: `Participante con ID ${req.params.id} no encontrado.`,
          });
      }
      next(error);
    }
  };
}

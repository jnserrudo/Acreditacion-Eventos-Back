// backend/controllers/eventoController.js
import { EventoModel } from "../models/evento.js";
// Importar validadores si usas (ej. Zod, express-validator)

export class EventoController {
    static getAll = async (req, res, next) => {
        try {
            const eventos = await EventoModel.getAll();
            res.json(eventos);
        } catch (error) {
            next(error); // Pasa el error al middleware de errores
        }
    };

    static getById = async (req, res, next) => {
        try {
            const { id } = req.params;
            const evento = await EventoModel.getById(parseInt(id)); // Asegura que ID sea número
            if (evento) {
                res.json(evento);
            } else {
                res.status(404).json({ message: "Evento no encontrado" });
            }
        } catch (error) {
            next(error);
        }
    };

    static create = async (req, res, next) => {
        try {
            // Aquí iría la validación del req.body (ej. usando Zod)
            // const validatedData = EventSchema.parse(req.body); // Ejemplo con Zod

            const nuevoEvento = await EventoModel.create(req.body); // Pasar datos validados
            res.status(201).json(nuevoEvento);
        } catch (error) {
            // Manejar errores de validación o de base de datos
            if (error.name === 'ZodError') { // Ejemplo si usas Zod
                 return res.status(400).json({ message: "Datos inválidos", errors: error.errors });
            }
            next(error);
        }
    };

    static update = async (req, res, next) => {
        try {
            const { id } = req.params;
            // Aquí iría la validación del req.body

            const eventoActualizado = await EventoModel.update(parseInt(id), req.body);
            if (eventoActualizado) {
                res.json(eventoActualizado);
            } else {
                 // El modelo podría devolver null o Prisma podría lanzar un error si no se encuentra
                 // Ajustar según cómo maneje el error el modelo
                res.status(404).json({ message: "Evento no encontrado para actualizar" });
            }
        } catch (error) {
             // Manejar P2025 de Prisma (Registro no encontrado)
             if (error.code === 'P2025') {
                  return res.status(404).json({ message: "Evento no encontrado para actualizar" });
             }
            next(error);
        }
    };

    static delete = async (req, res, next) => {
        try {
            const { id } = req.params;
            const eventoEliminado = await EventoModel.delete(parseInt(id));
            if (eventoEliminado) {
                 // Éxito, pero no se devuelve contenido
                res.status(204).send();
            } else {
                // Prisma lanzará error P2025 si no se encuentra, capturado abajo
                res.status(404).json({ message: "Evento no encontrado para eliminar" });
            }
        } catch (error) {
            // Manejar P2025 de Prisma (Registro no encontrado)
            if (error.code === 'P2025') {
                 return res.status(404).json({ message: "Evento no encontrado para eliminar" });
            }
            // Manejar error si onDelete no es Cascade y hay participantes
            if (error.code === 'P2014' || error.code === 'P2003') { // Foreign key constraint
                 return res.status(409).json({ message: "No se puede eliminar el evento porque tiene participantes asociados." });
            }
            next(error);
        }
    };
}
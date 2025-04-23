// backend/routes/eventoRoutes.js
import express from "express";
import { EventoController } from "../controllers/evento.js";
import { ParticipanteController } from "../controllers/participante.js";
// Importar middleware si necesitas (ej. para autenticación, validación, subida de archivos)
// import { uploadMiddleware } from '../middleware/uploadMiddleware.js';

export const eventoRouter = express.Router();

// --- Rutas CRUD para Eventos ---
eventoRouter.get('/', EventoController.getAll); // Obtener todos los eventos
eventoRouter.post('/', EventoController.create); // Crear un nuevo evento
eventoRouter.get('/:id', EventoController.getById); // Obtener un evento por ID
eventoRouter.put('/:id', EventoController.update); // Actualizar un evento por ID
eventoRouter.delete('/:id', EventoController.delete); // Eliminar un evento por ID

// --- Rutas para Participantes DENTRO de un Evento ---
eventoRouter.get('/:eventoId/participantes', ParticipanteController.getByEventoId); // Obtener participantes de un evento
eventoRouter.post('/:eventoId/participantes', ParticipanteController.create); // Añadir participante individual a un evento

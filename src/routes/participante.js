// backend/routes/participanteRoutes.js
import express from "express";
import { ParticipanteController } from "../controllers/participante.js";

export const participanteRouter = express.Router();

// Ruta para acreditar a un participante (se identifica por su propio ID)
participanteRouter.put('/:id/acreditar', ParticipanteController.acreditar);

// Podrías añadir otras rutas si fueran necesarias:
// participanteRouter.get('/:id', ParticipanteController.getById); // Obtener un participante específico por su ID (quizás no necesario)
// participanteRouter.delete('/:id', ParticipanteController.delete); // Eliminar un participante (quizás no necesario)
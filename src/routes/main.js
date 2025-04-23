// backend/routes/main.js
import express from "express";
import { eventoRouter } from "./evento.js";
import { participanteRouter } from "./participante.js";
// Importa otros routers si los necesitas (ej. autenticación)

export const router = express.Router();

// Monta las rutas de eventos bajo /eventos
router.use('/eventos', eventoRouter);

// Monta las rutas de participantes bajo /participantes
// (Principalmente para acciones como acreditar que no dependen directamente de un evento en la URL)
router.use('/participantes', participanteRouter);

// Ejemplo: router.use('/auth', authRouter);
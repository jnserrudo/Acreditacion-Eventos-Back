// backend/routes/participanteRoutes.js
import express from "express";
import { ParticipanteController } from "../controllers/participante.js";

export const participanteRouter = express.Router();

// Ruta para acreditar a un participante (se identifica por su propio ID)
participanteRouter.put('/:id/acreditar', ParticipanteController.acreditar);



// --- NUEVAS RUTAS ---
// Ruta para actualizar el monto pagado (ej. cancelar saldo)
//participanteRouter.put('/:id/cancelar-monto', ParticipanteController.updateMontoPagado);

// Ruta para cancelar saldo (usa el nuevo controlador)
participanteRouter.put('/:id/cancelar-saldo', ParticipanteController.cancelPendingAmount);


// Ruta para actualizar el precio de entrada
participanteRouter.put('/:id/precio-entrada', ParticipanteController.updatePrecioEntrada);
// (Ruta opcional para actualización masiva de precios)
// participanteRouter.put('/precios-entrada/batch', ParticipanteController.updateManyPreciosEntrada);


// Ruta para asignar una nueva entrada
participanteRouter.put('/:id/asignar-nueva-entrada', ParticipanteController.assignNuevaEntrada);
// --- FIN NUEVAS RUTAS ---


// Podrías añadir otras rutas si fueran necesarias:
// participanteRouter.get('/:id', ParticipanteController.getById); // Obtener un participante específico por su ID (quizás no necesario)
// participanteRouter.delete('/:id', ParticipanteController.delete); // Eliminar un participante (quizás no necesario)
// backend/controllers/participanteController.js
import { ParticipanteModel } from "../models/participante.js";
// Importar herramientas para parsear Excel si implementas bulk
// import xlsx from 'xlsx';

export class ParticipanteController {

    static getByEventoId = async (req, res, next) => {
        try {
            const { eventoId } = req.params;
            const participantes = await ParticipanteModel.getByEventoId(parseInt(eventoId));
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
                eventoId: parseInt(eventoId) // Asegura que el eventoId esté y sea número
            };

            // Aquí validación de participanteData (nombre, apellido, dni, numeroEntrada obligatorios)

            const nuevoParticipante = await ParticipanteModel.create(participanteData);
            res.status(201).json(nuevoParticipante);
        } catch (error) {
            // Manejar error si el eventoId no existe (Prisma P2003)
            if (error.code === 'P2003' && error.meta?.field_name?.includes('eventoId')) {
                return res.status(404).json({ message: `Evento con ID ${req.params.eventoId} no encontrado.` });
            }
            // Manejar error si el DNI o Nro Entrada ya existen para este evento (Prisma P2002)
            if (error.code === 'P2002' && error.meta?.target) {
                 if (error.meta.target.includes('dni')) {
                     return res.status(409).json({ message: `El DNI '${req.body.dni}' ya está registrado para este evento.` });
                 }
                 if (error.meta.target.includes('numeroEntrada')) {
                     return res.status(409).json({ message: `El Número de Entrada '${req.body.numeroEntrada}' ya está registrado para este evento.` });
                 }
            }
            next(error);
        }
    };

    // --- ACREDITACIÓN ---
    static acreditar = async (req, res, next) => {
        try {
            const { id } = req.params; // ID del participante
            const participanteAcreditado = await ParticipanteModel.acreditar(parseInt(id));

            if (participanteAcreditado) {
                res.json(participanteAcreditado);
            } else {
                // Prisma lanzará P2025 si no lo encuentra
                res.status(404).json({ message: `Participante con ID ${id} no encontrado.` });
            }
        } catch (error) {
             if (error.code === 'P2025') {
                 return res.status(404).json({ message: `Participante con ID ${req.params.id} no encontrado.` });
            }
            next(error);
        }
    };

    
}
// import { PrismaClient } from '@prisma/client'; // <- LÍNEA ANTIGUA
// Al principio de eventoModel.js y participanteModel.js
import prisma from '../../src/config/prismaClient.js'; // Ajusta la ruta '../' si 'models' y 'config' están en el mismo nivel dentro de 'src' o 'backend'


export class ParticipanteModel {

    static getByEventoId = async (eventoId) => {
        if (isNaN(eventoId)) return []; // Devuelve array vacío si el ID no es válido
        try {
            const participantes = await prisma.participante.findMany({
                where: { eventoId: eventoId },
                orderBy: [ // Ordenar por apellido y luego nombre
                    { apellido: 'asc' },
                    { nombre: 'asc' }
                ]
                // No incluimos 'evento' aquí para evitar redundancia
            });
            console.log("Participantes encontrados:", participantes);
            return participantes;
        } catch (error) {
            console.error(`Error en ParticipanteModel.getByEventoId (eventoId: ${eventoId}):`, error);
            throw error;
        }
    };

    static create = async (data) => {
        try {
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
                    acreditado: data.acreditado ?? false // Default a false si no se especifica
                    // createdAt y updatedAt son automáticos
                }
            });
            console.log("Participante creado:", nuevoParticipante);
            return nuevoParticipante;
        } catch (error) {
             console.error("Error en ParticipanteModel.create:", error);
             // Prisma lanzará P2002 (unique constraint) o P2003 (foreign key)
             // El controlador debería manejarlos.
            throw error;
        }
    };

    static acreditar = async (id) => {
         if (isNaN(id)) return null;
        try {
            const participanteActualizado = await prisma.participante.update({
                where: { id: id },
                data: {
                    acreditado: true // Establece acreditado a true
                }
            });
            console.log("Participante actualizado:", participanteActualizado);
            return participanteActualizado;
        } catch (error) {
             console.error(`Error en ParticipanteModel.acreditar (id: ${id}):`, error);
             // Prisma lanza P2025 si el participante no existe.
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
                    OR: [ // Busca si coincide con DNI O numeroEntrada
                        { dni: searchTerm },
                        { numeroEntrada: searchTerm }
                    ]
                }
            });
            return participante; // Devuelve el participante o null
         } catch (error) {
              console.error(`Error en ParticipanteModel.findForAccreditation (eventoId: ${eventoId}, term: ${searchTerm}):`, error);
              throw error;
         }
    }


    

    // Podrías añadir aquí findById, update, delete si fueran necesarios para participantes individuales.
}
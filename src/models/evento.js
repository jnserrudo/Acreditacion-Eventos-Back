// import { PrismaClient } from '@prisma/client'; // <- LÍNEA ANTIGUA

// Al principio de eventoModel.js y participanteModel.js
import prisma from '../../src/config/prismaClient.js'; // Ajusta la ruta '../' si 'models' y 'config' están en el mismo nivel dentro de 'src' o 'backend'
    
export class EventoModel {

    static getAll = async () => {
        try {
            // Podrías añadir ordenamiento o filtros si es necesario
            const eventos = await prisma.evento.findMany({
                orderBy: {
                    fecha: 'desc' // Ordenar por fecha descendente (más recientes primero)
                }
            });
            console.log("Eventos encontrados:", eventos);
            return eventos;
        } catch (error) {
            console.error("Error en EventoModel.getAll:", error);
            throw error; // Relanza el error para que el controlador lo maneje
        }
    };

    static getById = async (id) => {
        if (isNaN(id)) return null; // Validación básica
        try {
            const evento = await prisma.evento.findUnique({
                where: { id: id },
                 include: { // Opcional: incluir participantes si se necesita aquí
                 //   participantes: true
                 }
            });
            return evento; // Devuelve el evento o null si no se encuentra
        } catch (error) {
            console.error(`Error en EventoModel.getById (id: ${id}):`, error);
            throw error;
        }
    };

    static create = async (data) => {
        try {
            // Asegurarse que la fecha sea un objeto Date si viene como string
            if (data.fecha && typeof data.fecha === 'string') {
                data.fecha = new Date(data.fecha);
            } else if (!data.fecha) {
                data.fecha = null; // Asegurar null si no se provee
            }

            const nuevoEvento = await prisma.evento.create({
                data: {
                    nombre: data.nombre,
                    fecha: data.fecha,
                    lugar: data.lugar,
                    descripcion: data.descripcion,
                    // createdAt y updatedAt son automáticos
                }
            });
            console.log("Evento creado:", nuevoEvento);

            return nuevoEvento;
        } catch (error) {
            console.error("Error en EventoModel.create:", error);
            // Podrías añadir manejo específico para errores de Prisma aquí si es necesario
            throw error;
        }
    };

    static update = async (id, data) => {
         if (isNaN(id)) return null;
        try {
             // Asegurarse que la fecha sea un objeto Date si viene como string
            if (data.fecha && typeof data.fecha === 'string') {
                data.fecha = new Date(data.fecha);
            } else if (data.hasOwnProperty('fecha') && !data.fecha) {
                 // Si se envía 'fecha' explícitamente como null/undefined/""
                 data.fecha = null;
            }

            const eventoActualizado = await prisma.evento.update({
                where: { id: id },
                data: {
                    nombre: data.nombre,
                    fecha: data.fecha,
                    lugar: data.lugar,
                    descripcion: data.descripcion,
                    // updatedAt es automático
                }
            });
            console.log("Evento actualizado:", eventoActualizado);
            return eventoActualizado;
        } catch (error) {
            console.error(`Error en EventoModel.update (id: ${id}):`, error);
            // Prisma lanza P2025 si el registro no existe, el controlador lo maneja
            throw error;
        }
    };

    static delete = async (id) => {
         if (isNaN(id)) return null;
        try {
            const eventoEliminado = await prisma.evento.delete({
                where: { id: id }
            });
            console.log("Evento eliminado:", eventoEliminado);
            return eventoEliminado; // Devuelve el objeto eliminado
        } catch (error) {
             console.error(`Error en EventoModel.delete (id: ${id}):`, error);
             // Prisma lanza P2025 si no existe, o P2014/P2003 si hay FK constraints
             // El controlador debería manejar estos códigos.
            throw error;
        }
    };
}
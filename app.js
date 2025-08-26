// backend/server.js
import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { router as apiRouter } from './src/routes/main.js' // Importa el enrutador principal


import http from 'http'; // Importa módulo http nativo
import { Server } from 'socket.io'; // Importa Server de socket.io


// import { PrismaClient } from '@prisma/client'; // <- LÍNEA ANTIGUA

// Al principio de eventoModel.js y participanteModel.js
import prisma from './src/config/prismaClient.js'; // Ajusta la ruta '../' si 'models' y 'config' están en el mismo nivel dentro de 'src' o 'backend'


dotenv.config(); // Carga variables de .env

const app = express();
app.disable('x-powered-by'); // Buena práctica de seguridad


const server = http.createServer(app); // Crea servidor HTTP usando Express app


// --- Configuración CORS ---
// Define aquí los orígenes permitidos para tu frontend
const ACCEPTED_ORIGINS = [
    'http://localhost:5173', // Puerto común de Vite/React en desarrollo
    'http://localhost:5174', // Puerto común de Vite/React en desarrollo
    'http://localhost:3000', // Puerto común de Create React App
    'https://acreditacion-eventos.onrender.com', // URL de producción del frontend
    'https://acreditacion-eventos-back.onrender.com' // Por si hay redirecciones
];

// Configuración mejorada de CORS
const corsOptions = {
    origin: (origin, callback) => {
        // Permite peticiones sin origen (como aplicaciones móviles, curl, postman)
        if (!origin) return callback(null, true);
        
        if (ACCEPTED_ORIGINS.includes(origin)) {
            return callback(null, true);
        }
        return callback(new Error('No permitido por CORS'), false);
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    credentials: true,
    optionsSuccessStatus: 200 // Algunos navegadores antiguos tienen problemas con 204
};

app.use(cors(corsOptions)); // Aplica CORS a Express

// Configura Socket.IO con CORS
const io = new Server(server, {
    cors: {
        origin: ACCEPTED_ORIGINS,
        methods: ['GET', 'POST'],
        credentials: true
    }
});


// --- Middleware ---
app.use(json()); // Middleware para parsear JSON bodies



// --- Middleware para añadir io a cada request ---
app.use((req, res, next) => {
    req.io = io; // Adjunta la instancia io al objeto request
    next(); // Continúa con el siguiente middleware o ruta
});
// ----------------------------------------------



// --- Rutas Principales ---
app.use('/api', apiRouter); // Monta el enrutador principal bajo /api



// --- NUEVA RUTA HEALTH CHECK ---
/* app.get('/health', async (req, res, next) => {
    try {
        // Intenta una operación muy rápida y ligera en la DB
        await prisma.$queryRaw`SELECT 1`; // Query estándar para verificar conexión
        res.status(200).send('OK'); // Responde OK si la DB contesta
    } catch (dbError) {
        console.error("Health check fallido (DB Error):", dbError);
        res.status(503).send('Service Unavailable (DB Error)'); // Error si la DB falla
    }
}); */
// -----------------------------

// --- HEALTH CHECK SIMPLIFICADO (SIN DB QUERY) ---
app.get('/health', async (req, res, next) => {
    // Simplemente responde que el servidor Express está vivo
    res.status(200).send('OK - Service Alive');
});
// -----------------------------------------------


// --- Ruta Base de Verificación ---
app.get('/', (req, res) => {
  res.send('API de Acreditación Funcionando!');
});

// --- Manejo de Errores Global (MODIFICADO) ---
app.use((err, req, res, next) => {
    console.error("Error no manejado detectado:", err); // Loguea el error completo para tu análisis

    // Error de CORS (ya lo tenías)
    if (err.message === 'No permitido por CORS') {
        return res.status(403).json({ message: 'Acceso denegado por política de CORS.' });
    }

    // --- Identificar errores de pool de Prisma o límite de conexión ---
    // P2024: Timeout al obtener conexión del pool de Prisma
    if (err.code === 'P2024') {
        console.warn("Prisma P2024: Timeout obteniendo conexión del pool.");
        return res.status(503).json({ // 503 Service Unavailable
            message: 'El servidor está experimentando alta carga. Por favor, intente de nuevo en unos momentos.'
        });
    }

    // Error específico de MySQL 1226 (max_user_connections)
    // A veces Prisma lo envuelve, otras veces puede venir más directo.
    // El mensaje del error que pegaste (PrismaClientUnknownRequestError) contenía el string 'ERROR 42000 (1226)'
    if (err.message && err.message.includes('(1226)') && err.message.includes('max_user_connections')) {
        console.warn("MySQL Error 1226: Límite de max_user_connections alcanzado.");
        return res.status(503).json({ // 503 Service Unavailable
            message: 'El servidor de base de datos está saturado. Por favor, intente de nuevo en unos momentos.'
        });
    }
    // -----------------------------------------------------------------

    // Otros errores de Prisma conocidos que podrían indicar sobrecarga o problemas temporales
    // P1000: Authentication failed (poco probable aquí, pero por si acaso)
    // P1001: Can't reach database server
    // P1002: Database server reached but timed out
    if (err.code === 'P1000' || err.code === 'P1001' || err.code === 'P1002') {
        console.error(`Prisma DB Connection Error ${err.code}:`, err.message);
         return res.status(503).json({ message: 'Problema de conexión con la base de datos. Intente más tarde.' });
    }


    // Error genérico
    const statusCode = err.status || 500;
    const responseMessage = (statusCode === 500 && process.env.NODE_ENV === 'production')
        ? 'Ocurrió un error inesperado en el servidor.'
        : err.message || 'Error interno del servidor.';

    res.status(statusCode).json({ message: responseMessage });
});

// --- Manejo de Rutas No Encontradas (404) ---
// Debe ir DESPUÉS de todas tus rutas
app.use((req, res) => {
    res.status(404).json({ message: `No se encontró la ruta: ${req.method} ${req.originalUrl}` });
});




// --- Lógica de Socket.IO ---
io.on('connection', (socket) => {
    console.log('🟢 Un cliente se ha conectado:', socket.id);

    // Escuchar evento para unirse a una sala de evento específico
    socket.on('join_event_room', (eventoId) => {
        const roomName = `event_${eventoId}`;
        socket.join(roomName);
        console.log(`Cliente ${socket.id} se unió a la sala ${roomName}`);
    });

    // Escuchar evento para salir de una sala (al desmontar componente)
    socket.on('leave_event_room', (eventoId) => {
         const roomName = `event_${eventoId}`;
         socket.leave(roomName);
         console.log(`Cliente ${socket.id} salió de la sala ${roomName}`);
    });

    socket.on('disconnect', () => {
        console.log('🔴 Cliente desconectado:', socket.id);
        // Socket.IO maneja la salida de salas automáticamente al desconectar
    });
});
// --------------------------






// --- Puerto y Arranque del Servidor ---
const PORT = process.env.PORT ?? 3001; // Usa el puerto de Render o 3001 localmente

/* 
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
}); */


// ¡IMPORTANTE! Usa server.listen en lugar de app.listen
server.listen(PORT, () => {
    console.log(`Servidor (HTTP + WebSocket) escuchando en http://localhost:${PORT}`);
});



// --- Cierre Adecuado --- (Opcional pero bueno para producción)
const gracefulShutdown = async (signal) => {
    console.log(`\nRecibida señal ${signal}. Cerrando servidor...`);
    try {
        await prisma.$disconnect();
        console.log('Desconectado de la base de datos.');
        process.exit(0);
    } catch (e) {
        console.error('Error durante el cierre:', e);
        process.exit(1);
    }
};
process.on('SIGINT', () => gracefulShutdown('SIGINT'));
process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
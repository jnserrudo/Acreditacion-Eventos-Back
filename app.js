// backend/server.js
import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { router as apiRouter } from './src/routes/main.js' // Importa el enrutador principal

// import { PrismaClient } from '@prisma/client'; // <- LÍNEA ANTIGUA

// Al principio de eventoModel.js y participanteModel.js
import prisma from './src/config/prismaClient.js'; // Ajusta la ruta '../' si 'models' y 'config' están en el mismo nivel dentro de 'src' o 'backend'


dotenv.config(); // Carga variables de .env

const app = express();
app.disable('x-powered-by'); // Buena práctica de seguridad

// --- Configuración CORS ---
// Define aquí los orígenes permitidos para tu frontend
const ACCEPTED_ORIGINS = [
    'http://localhost:5173', // Puerto común de Vite/React en desarrollo
    'http://localhost:3000', // Puerto común de Create React App
    'https://acreditacion-eventos.onrender.com', // ¡IMPORTANTE! Añade la URL de tu frontend desplegado
    // Añade otros orígenes si es necesario
];

app.use(cors({
    origin: (origin, callback) => {
        // Permite solicitudes sin origen (ej. Postman, apps móviles, curl) Y orígenes aceptados
        if (!origin || ACCEPTED_ORIGINS.includes(origin)) {
            return callback(null, true);
        } else {
            console.warn(`Origen no permitido por CORS: ${origin}`);
            return callback(new Error('No permitido por CORS'));
        }
    },
    credentials: true // Permite cookies si las usaras en el futuro
}));

// --- Middleware ---
app.use(json()); // Middleware para parsear JSON bodies

// --- Rutas Principales ---
app.use('/api', apiRouter); // Monta el enrutador principal bajo /api

// --- Ruta Base de Verificación ---
app.get('/', (req, res) => {
  res.send('API de Acreditación Funcionando!');
});

// --- Manejo de Errores Básico ---
// Middleware para capturar errores de CORS específicamente
app.use((err, req, res, next) => {
    if (err && err.message === 'No permitido por CORS') {
        console.error(err.message);
        res.status(403).json({ message: 'Acceso denegado por política de CORS.' });
    } else if (err) { // Captura otros errores pasados por next(err)
        console.error("Error no manejado:", err);
        // Evita exponer detalles del error en producción
        const statusCode = err.status || 500;
        const message = process.env.NODE_ENV !== 'production' ? err.message : 'Error interno del servidor.';
        res.status(statusCode).json({ message });
    } else {
        // Si no hay error, pasa al siguiente middleware (podría ser un 404)
        next();
    }
});

// --- Manejo de Rutas No Encontradas (404) ---
// Debe ir DESPUÉS de todas tus rutas
app.use((req, res) => {
    res.status(404).json({ message: `No se encontró la ruta: ${req.method} ${req.originalUrl}` });
});


// --- Puerto y Arranque del Servidor ---
const PORT = process.env.PORT ?? 3001; // Usa el puerto de Render o 3001 localmente

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
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
// backend/config/prismaClient.js

// 1. Importa PrismaClient directamente desde la ruta donde se generó
//    Asegúrate que esta ruta sea correcta desde ESTE archivo (config/prismaClient.js)
//    hasta la carpeta de salida que definiste en schema.prisma (src/generated/prisma/)
import { PrismaClient } from '../../src/generated/prisma/index.js';
//   ^-- Si 'config' está en 'backend/', y 'src' está en la raíz del proyecto, esta ruta es correcta.
//       Si 'config' está en 'backend/src/', sería './generated/prisma/index.js'
//       Ajusta los '../' según tu estructura exacta.

// 2. Crea UNA ÚNICA instancia del cliente
const prisma = new PrismaClient({
  // Opcional: Configuración de Logs (muy útil en desarrollo)
  // Quita el comentario de las líneas que quieras ver:
  // log: [
  //   { emit: 'stdout', level: 'query' },  // Muestra las queries SQL
  //   { emit: 'stdout', level: 'info' },   // Información general de Prisma
  //   { emit: 'stdout', level: 'warn' },   // Advertencias
  //   { emit: 'stdout', level: 'error' },  // Errores
  // ],
});

// 3. Exporta la instancia para que otros módulos puedan usarla
export default prisma;

// Opcional: Exportar también tipos si los necesitas globalmente (menos común)
// export * from '../../src/generated/prisma/index.js';

Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/edge.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}





/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.EventoScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  fecha: 'fecha',
  lugar: 'lugar',
  descripcion: 'descripcion',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ParticipanteScalarFieldEnum = {
  id: 'id',
  eventoId: 'eventoId',
  nombre: 'nombre',
  apellido: 'apellido',
  dni: 'dni',
  numeroEntrada: 'numeroEntrada',
  telefono: 'telefono',
  correo: 'correo',
  medioPago: 'medioPago',
  rubro: 'rubro',
  montoPagado: 'montoPagado',
  precioEntrada: 'precioEntrada',
  nuevaEntrada: 'nuevaEntrada',
  medioPagoCancelacion: 'medioPagoCancelacion',
  acreditado: 'acreditado',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.EventoOrderByRelevanceFieldEnum = {
  nombre: 'nombre',
  lugar: 'lugar',
  descripcion: 'descripcion'
};

exports.Prisma.ParticipanteOrderByRelevanceFieldEnum = {
  nombre: 'nombre',
  apellido: 'apellido',
  dni: 'dni',
  numeroEntrada: 'numeroEntrada',
  telefono: 'telefono',
  correo: 'correo',
  medioPago: 'medioPago',
  rubro: 'rubro',
  nuevaEntrada: 'nuevaEntrada',
  medioPagoCancelacion: 'medioPagoCancelacion'
};


exports.Prisma.ModelName = {
  Evento: 'Evento',
  Participante: 'Participante'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\jnserrudo\\nahuel_dev\\Acreditacion Eventos -Back\\src\\generated\\prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "C:\\jnserrudo\\nahuel_dev\\Acreditacion Eventos -Back\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../../../prisma",
  "clientVersion": "6.6.0",
  "engineVersion": "f676762280b54cd07c770017ed3711ddde35f37a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": "mysql://uxscrvuyvnhl1f0q:wAPWMSPKkkTUsHXcBD05@bfvpdjfusuwkyalxduwa-mysql.services.clever-cloud.com:3306/bfvpdjfusuwkyalxduwa?connection_limit=3"
      }
    }
  },
  "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\ngenerator client {\n  provider = \"prisma-client-js\"\n  output   = \"../src/generated/prisma\"\n}\n\ndatasource db {\n  provider = \"mysql\"\n  url      = env(\"DATABASE_URL\")\n}\n\n// --- Modelo para Eventos (en Español) ---\nmodel Evento {\n  id          Int       @id @default(autoincrement())\n  nombre      String // Nombre del evento\n  fecha       DateTime? @db.Date // Fecha del evento (Opcional)\n  lugar       String? // Lugar del evento (Opcional)\n  descripcion String?   @db.Text // Descripción (Opcional)\n  createdAt   DateTime  @default(now()) @map(\"createdAt\") // Mapeado a createdAt en DB\n  updatedAt   DateTime  @updatedAt @map(\"updatedAt\") // Mapeado a updatedAt en DB\n\n  // Relación: Un evento tiene muchos participantes\n  participantes Participante[]\n\n  // Mapeo explícito al nombre de la tabla en la BD (buenas práctica)\n  @@map(\"Eventos\")\n}\n\n// --- Modelo para Participantes (en Español) ---\nmodel Participante {\n  id       Int @id @default(autoincrement())\n  eventoId Int // Clave foránea al evento\n\n  // Datos de la persona\n  nombre        String  @db.VarChar(150)\n  apellido      String  @db.VarChar(150)\n  dni           String  @db.VarChar(20)\n  numeroEntrada String  @map(\"numero_entrada\") @db.VarChar(50) // Mapeado explícito\n  telefono      String? @db.VarChar(30)\n  correo        String? //@unique // Correo único si se provee\n\n  // --- NUEVOS CAMPOS (como String y en Español) ---\n  medioPago String? @map(\"medio_pago\") @db.VarChar(50) // Medio de pago (Opcional, String)\n  rubro     String? @db.VarChar(100) // Rubro (Opcional, String)\n  // --- FIN NUEVOS CAMPOS ---\n\n  // --- NUEVOS CAMPOS DE PAGO ---\n  montoPagado Decimal? @default(0) @map(\"monto_pagado\") @db.Decimal(10, 2) // Decimal para dinero (10 dígitos total, 2 decimales). Opcional inicialmente? O default 0?\n  // --- FIN NUEVOS CAMPOS DE PAGO ---\n\n  precioEntrada Decimal? @map(\"precio_entrada\") @db.Decimal(10, 2) // <- NUEVO CAMPO (Obligatorio)\n\n  // --- NUEVO CAMPO PARA ENTRADA REASIGNADA ---\n  nuevaEntrada String? @map(\"nueva_entrada\") @db.VarChar(50) // String opcional para la nueva entrada\n  // --- FIN NUEVO CAMPO ENTRADA ---\n\n  // --- NUEVO CAMPO: Medio de Pago de Cancelación ---\n  medioPagoCancelacion String? @map(\"medio_pago_cancelacion\") @db.VarChar(50) // Opcional\n  // --- FIN ---\n\n  // Estado de acreditación\n  acreditado Boolean @default(false)\n\n  createdAt DateTime @default(now()) @map(\"createdAt\")\n  updatedAt DateTime @updatedAt @map(\"updatedAt\")\n\n  // Relación: Un participante pertenece a un evento\n  evento Evento @relation(fields: [eventoId], references: [id], onDelete: Cascade)\n\n  // Constraints únicos por evento\n  @@unique([eventoId, dni], name: \"participante_unico_dni_por_evento\")\n  @@unique([eventoId, numeroEntrada], name: \"participante_unico_entrada_por_evento\")\n  // Índices para búsquedas\n  @@index([dni])\n  @@index([numeroEntrada])\n  @@index([eventoId])\n  @@index([nuevaEntrada]) // Indexar nueva entrada si se busca por ella\n  @@index([precioEntrada]) // Indexar precio si se filtra/ordena por él\n  @@index([montoPagado]) // Indexar monto si se filtra/ordena por él\n  // Mapeo explícito al nombre de la tabla\n  @@map(\"Participantes\")\n}\n",
  "inlineSchemaHash": "5778a5e51bbe15684f464bd16190ca9aef9f0fa7955f42a95eef065c26d06874",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Evento\":{\"dbName\":\"Eventos\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lugar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descripcion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"participantes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Participante\",\"nativeType\":null,\"relationName\":\"EventoToParticipante\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Participante\":{\"dbName\":\"Participantes\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"eventoId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"150\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"apellido\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"150\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dni\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"numeroEntrada\",\"dbName\":\"numero_entrada\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"telefono\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"30\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"correo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"medioPago\",\"dbName\":\"medio_pago\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rubro\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"montoPagado\",\"dbName\":\"monto_pagado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"10\",\"2\"]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"precioEntrada\",\"dbName\":\"precio_entrada\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"10\",\"2\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nuevaEntrada\",\"dbName\":\"nueva_entrada\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"medioPagoCancelacion\",\"dbName\":\"medio_pago_cancelacion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"acreditado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"evento\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Evento\",\"nativeType\":null,\"relationName\":\"EventoToParticipante\",\"relationFromFields\":[\"eventoId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"eventoId\",\"dni\"],[\"eventoId\",\"numeroEntrada\"]],\"uniqueIndexes\":[{\"name\":\"participante_unico_dni_por_evento\",\"fields\":[\"eventoId\",\"dni\"]},{\"name\":\"participante_unico_entrada_por_evento\",\"fields\":[\"eventoId\",\"numeroEntrada\"]}],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)



/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Evento
 * 
 */
export type Evento = $Result.DefaultSelection<Prisma.$EventoPayload>
/**
 * Model Participante
 * 
 */
export type Participante = $Result.DefaultSelection<Prisma.$ParticipantePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Eventos
 * const eventos = await prisma.evento.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Eventos
   * const eventos = await prisma.evento.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.evento`: Exposes CRUD operations for the **Evento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Eventos
    * const eventos = await prisma.evento.findMany()
    * ```
    */
  get evento(): Prisma.EventoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.participante`: Exposes CRUD operations for the **Participante** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Participantes
    * const participantes = await prisma.participante.findMany()
    * ```
    */
  get participante(): Prisma.ParticipanteDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Evento: 'Evento',
    Participante: 'Participante'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "evento" | "participante"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Evento: {
        payload: Prisma.$EventoPayload<ExtArgs>
        fields: Prisma.EventoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          findFirst: {
            args: Prisma.EventoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          findMany: {
            args: Prisma.EventoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>[]
          }
          create: {
            args: Prisma.EventoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          createMany: {
            args: Prisma.EventoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EventoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          update: {
            args: Prisma.EventoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          deleteMany: {
            args: Prisma.EventoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EventoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          aggregate: {
            args: Prisma.EventoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvento>
          }
          groupBy: {
            args: Prisma.EventoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventoCountArgs<ExtArgs>
            result: $Utils.Optional<EventoCountAggregateOutputType> | number
          }
        }
      }
      Participante: {
        payload: Prisma.$ParticipantePayload<ExtArgs>
        fields: Prisma.ParticipanteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParticipanteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParticipanteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantePayload>
          }
          findFirst: {
            args: Prisma.ParticipanteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParticipanteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantePayload>
          }
          findMany: {
            args: Prisma.ParticipanteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantePayload>[]
          }
          create: {
            args: Prisma.ParticipanteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantePayload>
          }
          createMany: {
            args: Prisma.ParticipanteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ParticipanteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantePayload>
          }
          update: {
            args: Prisma.ParticipanteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantePayload>
          }
          deleteMany: {
            args: Prisma.ParticipanteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParticipanteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ParticipanteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantePayload>
          }
          aggregate: {
            args: Prisma.ParticipanteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParticipante>
          }
          groupBy: {
            args: Prisma.ParticipanteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParticipanteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParticipanteCountArgs<ExtArgs>
            result: $Utils.Optional<ParticipanteCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    evento?: EventoOmit
    participante?: ParticipanteOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type EventoCountOutputType
   */

  export type EventoCountOutputType = {
    participantes: number
  }

  export type EventoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participantes?: boolean | EventoCountOutputTypeCountParticipantesArgs
  }

  // Custom InputTypes
  /**
   * EventoCountOutputType without action
   */
  export type EventoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventoCountOutputType
     */
    select?: EventoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventoCountOutputType without action
   */
  export type EventoCountOutputTypeCountParticipantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipanteWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Evento
   */

  export type AggregateEvento = {
    _count: EventoCountAggregateOutputType | null
    _avg: EventoAvgAggregateOutputType | null
    _sum: EventoSumAggregateOutputType | null
    _min: EventoMinAggregateOutputType | null
    _max: EventoMaxAggregateOutputType | null
  }

  export type EventoAvgAggregateOutputType = {
    id: number | null
  }

  export type EventoSumAggregateOutputType = {
    id: number | null
  }

  export type EventoMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    fecha: Date | null
    lugar: string | null
    descripcion: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventoMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    fecha: Date | null
    lugar: string | null
    descripcion: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventoCountAggregateOutputType = {
    id: number
    nombre: number
    fecha: number
    lugar: number
    descripcion: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventoAvgAggregateInputType = {
    id?: true
  }

  export type EventoSumAggregateInputType = {
    id?: true
  }

  export type EventoMinAggregateInputType = {
    id?: true
    nombre?: true
    fecha?: true
    lugar?: true
    descripcion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventoMaxAggregateInputType = {
    id?: true
    nombre?: true
    fecha?: true
    lugar?: true
    descripcion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventoCountAggregateInputType = {
    id?: true
    nombre?: true
    fecha?: true
    lugar?: true
    descripcion?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EventoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Evento to aggregate.
     */
    where?: EventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Eventos
    **/
    _count?: true | EventoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventoMaxAggregateInputType
  }

  export type GetEventoAggregateType<T extends EventoAggregateArgs> = {
        [P in keyof T & keyof AggregateEvento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvento[P]>
      : GetScalarType<T[P], AggregateEvento[P]>
  }




  export type EventoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventoWhereInput
    orderBy?: EventoOrderByWithAggregationInput | EventoOrderByWithAggregationInput[]
    by: EventoScalarFieldEnum[] | EventoScalarFieldEnum
    having?: EventoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventoCountAggregateInputType | true
    _avg?: EventoAvgAggregateInputType
    _sum?: EventoSumAggregateInputType
    _min?: EventoMinAggregateInputType
    _max?: EventoMaxAggregateInputType
  }

  export type EventoGroupByOutputType = {
    id: number
    nombre: string
    fecha: Date | null
    lugar: string | null
    descripcion: string | null
    createdAt: Date
    updatedAt: Date
    _count: EventoCountAggregateOutputType | null
    _avg: EventoAvgAggregateOutputType | null
    _sum: EventoSumAggregateOutputType | null
    _min: EventoMinAggregateOutputType | null
    _max: EventoMaxAggregateOutputType | null
  }

  type GetEventoGroupByPayload<T extends EventoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventoGroupByOutputType[P]>
            : GetScalarType<T[P], EventoGroupByOutputType[P]>
        }
      >
    >


  export type EventoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    fecha?: boolean
    lugar?: boolean
    descripcion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    participantes?: boolean | Evento$participantesArgs<ExtArgs>
    _count?: boolean | EventoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evento"]>



  export type EventoSelectScalar = {
    id?: boolean
    nombre?: boolean
    fecha?: boolean
    lugar?: boolean
    descripcion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EventoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "fecha" | "lugar" | "descripcion" | "createdAt" | "updatedAt", ExtArgs["result"]["evento"]>
  export type EventoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participantes?: boolean | Evento$participantesArgs<ExtArgs>
    _count?: boolean | EventoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EventoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Evento"
    objects: {
      participantes: Prisma.$ParticipantePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      fecha: Date | null
      lugar: string | null
      descripcion: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["evento"]>
    composites: {}
  }

  type EventoGetPayload<S extends boolean | null | undefined | EventoDefaultArgs> = $Result.GetResult<Prisma.$EventoPayload, S>

  type EventoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventoCountAggregateInputType | true
    }

  export interface EventoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Evento'], meta: { name: 'Evento' } }
    /**
     * Find zero or one Evento that matches the filter.
     * @param {EventoFindUniqueArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventoFindUniqueArgs>(args: SelectSubset<T, EventoFindUniqueArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Evento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventoFindUniqueOrThrowArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventoFindUniqueOrThrowArgs>(args: SelectSubset<T, EventoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoFindFirstArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventoFindFirstArgs>(args?: SelectSubset<T, EventoFindFirstArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoFindFirstOrThrowArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventoFindFirstOrThrowArgs>(args?: SelectSubset<T, EventoFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Eventos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Eventos
     * const eventos = await prisma.evento.findMany()
     * 
     * // Get first 10 Eventos
     * const eventos = await prisma.evento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventoWithIdOnly = await prisma.evento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventoFindManyArgs>(args?: SelectSubset<T, EventoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Evento.
     * @param {EventoCreateArgs} args - Arguments to create a Evento.
     * @example
     * // Create one Evento
     * const Evento = await prisma.evento.create({
     *   data: {
     *     // ... data to create a Evento
     *   }
     * })
     * 
     */
    create<T extends EventoCreateArgs>(args: SelectSubset<T, EventoCreateArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Eventos.
     * @param {EventoCreateManyArgs} args - Arguments to create many Eventos.
     * @example
     * // Create many Eventos
     * const evento = await prisma.evento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventoCreateManyArgs>(args?: SelectSubset<T, EventoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Evento.
     * @param {EventoDeleteArgs} args - Arguments to delete one Evento.
     * @example
     * // Delete one Evento
     * const Evento = await prisma.evento.delete({
     *   where: {
     *     // ... filter to delete one Evento
     *   }
     * })
     * 
     */
    delete<T extends EventoDeleteArgs>(args: SelectSubset<T, EventoDeleteArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Evento.
     * @param {EventoUpdateArgs} args - Arguments to update one Evento.
     * @example
     * // Update one Evento
     * const evento = await prisma.evento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventoUpdateArgs>(args: SelectSubset<T, EventoUpdateArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Eventos.
     * @param {EventoDeleteManyArgs} args - Arguments to filter Eventos to delete.
     * @example
     * // Delete a few Eventos
     * const { count } = await prisma.evento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventoDeleteManyArgs>(args?: SelectSubset<T, EventoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Eventos
     * const evento = await prisma.evento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventoUpdateManyArgs>(args: SelectSubset<T, EventoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Evento.
     * @param {EventoUpsertArgs} args - Arguments to update or create a Evento.
     * @example
     * // Update or create a Evento
     * const evento = await prisma.evento.upsert({
     *   create: {
     *     // ... data to create a Evento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Evento we want to update
     *   }
     * })
     */
    upsert<T extends EventoUpsertArgs>(args: SelectSubset<T, EventoUpsertArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoCountArgs} args - Arguments to filter Eventos to count.
     * @example
     * // Count the number of Eventos
     * const count = await prisma.evento.count({
     *   where: {
     *     // ... the filter for the Eventos we want to count
     *   }
     * })
    **/
    count<T extends EventoCountArgs>(
      args?: Subset<T, EventoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Evento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventoAggregateArgs>(args: Subset<T, EventoAggregateArgs>): Prisma.PrismaPromise<GetEventoAggregateType<T>>

    /**
     * Group by Evento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventoGroupByArgs['orderBy'] }
        : { orderBy?: EventoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Evento model
   */
  readonly fields: EventoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Evento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    participantes<T extends Evento$participantesArgs<ExtArgs> = {}>(args?: Subset<T, Evento$participantesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Evento model
   */
  interface EventoFieldRefs {
    readonly id: FieldRef<"Evento", 'Int'>
    readonly nombre: FieldRef<"Evento", 'String'>
    readonly fecha: FieldRef<"Evento", 'DateTime'>
    readonly lugar: FieldRef<"Evento", 'String'>
    readonly descripcion: FieldRef<"Evento", 'String'>
    readonly createdAt: FieldRef<"Evento", 'DateTime'>
    readonly updatedAt: FieldRef<"Evento", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Evento findUnique
   */
  export type EventoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Evento to fetch.
     */
    where: EventoWhereUniqueInput
  }

  /**
   * Evento findUniqueOrThrow
   */
  export type EventoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Evento to fetch.
     */
    where: EventoWhereUniqueInput
  }

  /**
   * Evento findFirst
   */
  export type EventoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Evento to fetch.
     */
    where?: EventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Eventos.
     */
    cursor?: EventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Eventos.
     */
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[]
  }

  /**
   * Evento findFirstOrThrow
   */
  export type EventoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Evento to fetch.
     */
    where?: EventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Eventos.
     */
    cursor?: EventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Eventos.
     */
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[]
  }

  /**
   * Evento findMany
   */
  export type EventoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Eventos to fetch.
     */
    where?: EventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Eventos.
     */
    cursor?: EventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[]
  }

  /**
   * Evento create
   */
  export type EventoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * The data needed to create a Evento.
     */
    data: XOR<EventoCreateInput, EventoUncheckedCreateInput>
  }

  /**
   * Evento createMany
   */
  export type EventoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Eventos.
     */
    data: EventoCreateManyInput | EventoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Evento update
   */
  export type EventoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * The data needed to update a Evento.
     */
    data: XOR<EventoUpdateInput, EventoUncheckedUpdateInput>
    /**
     * Choose, which Evento to update.
     */
    where: EventoWhereUniqueInput
  }

  /**
   * Evento updateMany
   */
  export type EventoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Eventos.
     */
    data: XOR<EventoUpdateManyMutationInput, EventoUncheckedUpdateManyInput>
    /**
     * Filter which Eventos to update
     */
    where?: EventoWhereInput
    /**
     * Limit how many Eventos to update.
     */
    limit?: number
  }

  /**
   * Evento upsert
   */
  export type EventoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * The filter to search for the Evento to update in case it exists.
     */
    where: EventoWhereUniqueInput
    /**
     * In case the Evento found by the `where` argument doesn't exist, create a new Evento with this data.
     */
    create: XOR<EventoCreateInput, EventoUncheckedCreateInput>
    /**
     * In case the Evento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventoUpdateInput, EventoUncheckedUpdateInput>
  }

  /**
   * Evento delete
   */
  export type EventoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter which Evento to delete.
     */
    where: EventoWhereUniqueInput
  }

  /**
   * Evento deleteMany
   */
  export type EventoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Eventos to delete
     */
    where?: EventoWhereInput
    /**
     * Limit how many Eventos to delete.
     */
    limit?: number
  }

  /**
   * Evento.participantes
   */
  export type Evento$participantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participante
     */
    select?: ParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participante
     */
    omit?: ParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteInclude<ExtArgs> | null
    where?: ParticipanteWhereInput
    orderBy?: ParticipanteOrderByWithRelationInput | ParticipanteOrderByWithRelationInput[]
    cursor?: ParticipanteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipanteScalarFieldEnum | ParticipanteScalarFieldEnum[]
  }

  /**
   * Evento without action
   */
  export type EventoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
  }


  /**
   * Model Participante
   */

  export type AggregateParticipante = {
    _count: ParticipanteCountAggregateOutputType | null
    _avg: ParticipanteAvgAggregateOutputType | null
    _sum: ParticipanteSumAggregateOutputType | null
    _min: ParticipanteMinAggregateOutputType | null
    _max: ParticipanteMaxAggregateOutputType | null
  }

  export type ParticipanteAvgAggregateOutputType = {
    id: number | null
    eventoId: number | null
    montoPagado: Decimal | null
    precioEntrada: Decimal | null
  }

  export type ParticipanteSumAggregateOutputType = {
    id: number | null
    eventoId: number | null
    montoPagado: Decimal | null
    precioEntrada: Decimal | null
  }

  export type ParticipanteMinAggregateOutputType = {
    id: number | null
    eventoId: number | null
    nombre: string | null
    apellido: string | null
    dni: string | null
    numeroEntrada: string | null
    telefono: string | null
    correo: string | null
    medioPago: string | null
    rubro: string | null
    montoPagado: Decimal | null
    precioEntrada: Decimal | null
    nuevaEntrada: string | null
    medioPagoCancelacion: string | null
    acreditado: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParticipanteMaxAggregateOutputType = {
    id: number | null
    eventoId: number | null
    nombre: string | null
    apellido: string | null
    dni: string | null
    numeroEntrada: string | null
    telefono: string | null
    correo: string | null
    medioPago: string | null
    rubro: string | null
    montoPagado: Decimal | null
    precioEntrada: Decimal | null
    nuevaEntrada: string | null
    medioPagoCancelacion: string | null
    acreditado: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParticipanteCountAggregateOutputType = {
    id: number
    eventoId: number
    nombre: number
    apellido: number
    dni: number
    numeroEntrada: number
    telefono: number
    correo: number
    medioPago: number
    rubro: number
    montoPagado: number
    precioEntrada: number
    nuevaEntrada: number
    medioPagoCancelacion: number
    acreditado: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ParticipanteAvgAggregateInputType = {
    id?: true
    eventoId?: true
    montoPagado?: true
    precioEntrada?: true
  }

  export type ParticipanteSumAggregateInputType = {
    id?: true
    eventoId?: true
    montoPagado?: true
    precioEntrada?: true
  }

  export type ParticipanteMinAggregateInputType = {
    id?: true
    eventoId?: true
    nombre?: true
    apellido?: true
    dni?: true
    numeroEntrada?: true
    telefono?: true
    correo?: true
    medioPago?: true
    rubro?: true
    montoPagado?: true
    precioEntrada?: true
    nuevaEntrada?: true
    medioPagoCancelacion?: true
    acreditado?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParticipanteMaxAggregateInputType = {
    id?: true
    eventoId?: true
    nombre?: true
    apellido?: true
    dni?: true
    numeroEntrada?: true
    telefono?: true
    correo?: true
    medioPago?: true
    rubro?: true
    montoPagado?: true
    precioEntrada?: true
    nuevaEntrada?: true
    medioPagoCancelacion?: true
    acreditado?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParticipanteCountAggregateInputType = {
    id?: true
    eventoId?: true
    nombre?: true
    apellido?: true
    dni?: true
    numeroEntrada?: true
    telefono?: true
    correo?: true
    medioPago?: true
    rubro?: true
    montoPagado?: true
    precioEntrada?: true
    nuevaEntrada?: true
    medioPagoCancelacion?: true
    acreditado?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ParticipanteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Participante to aggregate.
     */
    where?: ParticipanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participantes to fetch.
     */
    orderBy?: ParticipanteOrderByWithRelationInput | ParticipanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParticipanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Participantes
    **/
    _count?: true | ParticipanteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParticipanteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParticipanteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParticipanteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParticipanteMaxAggregateInputType
  }

  export type GetParticipanteAggregateType<T extends ParticipanteAggregateArgs> = {
        [P in keyof T & keyof AggregateParticipante]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParticipante[P]>
      : GetScalarType<T[P], AggregateParticipante[P]>
  }




  export type ParticipanteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipanteWhereInput
    orderBy?: ParticipanteOrderByWithAggregationInput | ParticipanteOrderByWithAggregationInput[]
    by: ParticipanteScalarFieldEnum[] | ParticipanteScalarFieldEnum
    having?: ParticipanteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParticipanteCountAggregateInputType | true
    _avg?: ParticipanteAvgAggregateInputType
    _sum?: ParticipanteSumAggregateInputType
    _min?: ParticipanteMinAggregateInputType
    _max?: ParticipanteMaxAggregateInputType
  }

  export type ParticipanteGroupByOutputType = {
    id: number
    eventoId: number
    nombre: string
    apellido: string
    dni: string
    numeroEntrada: string
    telefono: string | null
    correo: string | null
    medioPago: string | null
    rubro: string | null
    montoPagado: Decimal | null
    precioEntrada: Decimal | null
    nuevaEntrada: string | null
    medioPagoCancelacion: string | null
    acreditado: boolean
    createdAt: Date
    updatedAt: Date
    _count: ParticipanteCountAggregateOutputType | null
    _avg: ParticipanteAvgAggregateOutputType | null
    _sum: ParticipanteSumAggregateOutputType | null
    _min: ParticipanteMinAggregateOutputType | null
    _max: ParticipanteMaxAggregateOutputType | null
  }

  type GetParticipanteGroupByPayload<T extends ParticipanteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParticipanteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParticipanteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParticipanteGroupByOutputType[P]>
            : GetScalarType<T[P], ParticipanteGroupByOutputType[P]>
        }
      >
    >


  export type ParticipanteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventoId?: boolean
    nombre?: boolean
    apellido?: boolean
    dni?: boolean
    numeroEntrada?: boolean
    telefono?: boolean
    correo?: boolean
    medioPago?: boolean
    rubro?: boolean
    montoPagado?: boolean
    precioEntrada?: boolean
    nuevaEntrada?: boolean
    medioPagoCancelacion?: boolean
    acreditado?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    evento?: boolean | EventoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participante"]>



  export type ParticipanteSelectScalar = {
    id?: boolean
    eventoId?: boolean
    nombre?: boolean
    apellido?: boolean
    dni?: boolean
    numeroEntrada?: boolean
    telefono?: boolean
    correo?: boolean
    medioPago?: boolean
    rubro?: boolean
    montoPagado?: boolean
    precioEntrada?: boolean
    nuevaEntrada?: boolean
    medioPagoCancelacion?: boolean
    acreditado?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ParticipanteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventoId" | "nombre" | "apellido" | "dni" | "numeroEntrada" | "telefono" | "correo" | "medioPago" | "rubro" | "montoPagado" | "precioEntrada" | "nuevaEntrada" | "medioPagoCancelacion" | "acreditado" | "createdAt" | "updatedAt", ExtArgs["result"]["participante"]>
  export type ParticipanteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evento?: boolean | EventoDefaultArgs<ExtArgs>
  }

  export type $ParticipantePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Participante"
    objects: {
      evento: Prisma.$EventoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      eventoId: number
      nombre: string
      apellido: string
      dni: string
      numeroEntrada: string
      telefono: string | null
      correo: string | null
      medioPago: string | null
      rubro: string | null
      montoPagado: Prisma.Decimal | null
      precioEntrada: Prisma.Decimal | null
      nuevaEntrada: string | null
      medioPagoCancelacion: string | null
      acreditado: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["participante"]>
    composites: {}
  }

  type ParticipanteGetPayload<S extends boolean | null | undefined | ParticipanteDefaultArgs> = $Result.GetResult<Prisma.$ParticipantePayload, S>

  type ParticipanteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParticipanteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParticipanteCountAggregateInputType | true
    }

  export interface ParticipanteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Participante'], meta: { name: 'Participante' } }
    /**
     * Find zero or one Participante that matches the filter.
     * @param {ParticipanteFindUniqueArgs} args - Arguments to find a Participante
     * @example
     * // Get one Participante
     * const participante = await prisma.participante.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParticipanteFindUniqueArgs>(args: SelectSubset<T, ParticipanteFindUniqueArgs<ExtArgs>>): Prisma__ParticipanteClient<$Result.GetResult<Prisma.$ParticipantePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Participante that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParticipanteFindUniqueOrThrowArgs} args - Arguments to find a Participante
     * @example
     * // Get one Participante
     * const participante = await prisma.participante.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParticipanteFindUniqueOrThrowArgs>(args: SelectSubset<T, ParticipanteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParticipanteClient<$Result.GetResult<Prisma.$ParticipantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Participante that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipanteFindFirstArgs} args - Arguments to find a Participante
     * @example
     * // Get one Participante
     * const participante = await prisma.participante.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParticipanteFindFirstArgs>(args?: SelectSubset<T, ParticipanteFindFirstArgs<ExtArgs>>): Prisma__ParticipanteClient<$Result.GetResult<Prisma.$ParticipantePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Participante that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipanteFindFirstOrThrowArgs} args - Arguments to find a Participante
     * @example
     * // Get one Participante
     * const participante = await prisma.participante.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParticipanteFindFirstOrThrowArgs>(args?: SelectSubset<T, ParticipanteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParticipanteClient<$Result.GetResult<Prisma.$ParticipantePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Participantes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipanteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Participantes
     * const participantes = await prisma.participante.findMany()
     * 
     * // Get first 10 Participantes
     * const participantes = await prisma.participante.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const participanteWithIdOnly = await prisma.participante.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParticipanteFindManyArgs>(args?: SelectSubset<T, ParticipanteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Participante.
     * @param {ParticipanteCreateArgs} args - Arguments to create a Participante.
     * @example
     * // Create one Participante
     * const Participante = await prisma.participante.create({
     *   data: {
     *     // ... data to create a Participante
     *   }
     * })
     * 
     */
    create<T extends ParticipanteCreateArgs>(args: SelectSubset<T, ParticipanteCreateArgs<ExtArgs>>): Prisma__ParticipanteClient<$Result.GetResult<Prisma.$ParticipantePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Participantes.
     * @param {ParticipanteCreateManyArgs} args - Arguments to create many Participantes.
     * @example
     * // Create many Participantes
     * const participante = await prisma.participante.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParticipanteCreateManyArgs>(args?: SelectSubset<T, ParticipanteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Participante.
     * @param {ParticipanteDeleteArgs} args - Arguments to delete one Participante.
     * @example
     * // Delete one Participante
     * const Participante = await prisma.participante.delete({
     *   where: {
     *     // ... filter to delete one Participante
     *   }
     * })
     * 
     */
    delete<T extends ParticipanteDeleteArgs>(args: SelectSubset<T, ParticipanteDeleteArgs<ExtArgs>>): Prisma__ParticipanteClient<$Result.GetResult<Prisma.$ParticipantePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Participante.
     * @param {ParticipanteUpdateArgs} args - Arguments to update one Participante.
     * @example
     * // Update one Participante
     * const participante = await prisma.participante.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParticipanteUpdateArgs>(args: SelectSubset<T, ParticipanteUpdateArgs<ExtArgs>>): Prisma__ParticipanteClient<$Result.GetResult<Prisma.$ParticipantePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Participantes.
     * @param {ParticipanteDeleteManyArgs} args - Arguments to filter Participantes to delete.
     * @example
     * // Delete a few Participantes
     * const { count } = await prisma.participante.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParticipanteDeleteManyArgs>(args?: SelectSubset<T, ParticipanteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipanteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Participantes
     * const participante = await prisma.participante.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParticipanteUpdateManyArgs>(args: SelectSubset<T, ParticipanteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Participante.
     * @param {ParticipanteUpsertArgs} args - Arguments to update or create a Participante.
     * @example
     * // Update or create a Participante
     * const participante = await prisma.participante.upsert({
     *   create: {
     *     // ... data to create a Participante
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Participante we want to update
     *   }
     * })
     */
    upsert<T extends ParticipanteUpsertArgs>(args: SelectSubset<T, ParticipanteUpsertArgs<ExtArgs>>): Prisma__ParticipanteClient<$Result.GetResult<Prisma.$ParticipantePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Participantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipanteCountArgs} args - Arguments to filter Participantes to count.
     * @example
     * // Count the number of Participantes
     * const count = await prisma.participante.count({
     *   where: {
     *     // ... the filter for the Participantes we want to count
     *   }
     * })
    **/
    count<T extends ParticipanteCountArgs>(
      args?: Subset<T, ParticipanteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParticipanteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Participante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipanteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParticipanteAggregateArgs>(args: Subset<T, ParticipanteAggregateArgs>): Prisma.PrismaPromise<GetParticipanteAggregateType<T>>

    /**
     * Group by Participante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipanteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParticipanteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParticipanteGroupByArgs['orderBy'] }
        : { orderBy?: ParticipanteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParticipanteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParticipanteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Participante model
   */
  readonly fields: ParticipanteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Participante.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParticipanteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    evento<T extends EventoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventoDefaultArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Participante model
   */
  interface ParticipanteFieldRefs {
    readonly id: FieldRef<"Participante", 'Int'>
    readonly eventoId: FieldRef<"Participante", 'Int'>
    readonly nombre: FieldRef<"Participante", 'String'>
    readonly apellido: FieldRef<"Participante", 'String'>
    readonly dni: FieldRef<"Participante", 'String'>
    readonly numeroEntrada: FieldRef<"Participante", 'String'>
    readonly telefono: FieldRef<"Participante", 'String'>
    readonly correo: FieldRef<"Participante", 'String'>
    readonly medioPago: FieldRef<"Participante", 'String'>
    readonly rubro: FieldRef<"Participante", 'String'>
    readonly montoPagado: FieldRef<"Participante", 'Decimal'>
    readonly precioEntrada: FieldRef<"Participante", 'Decimal'>
    readonly nuevaEntrada: FieldRef<"Participante", 'String'>
    readonly medioPagoCancelacion: FieldRef<"Participante", 'String'>
    readonly acreditado: FieldRef<"Participante", 'Boolean'>
    readonly createdAt: FieldRef<"Participante", 'DateTime'>
    readonly updatedAt: FieldRef<"Participante", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Participante findUnique
   */
  export type ParticipanteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participante
     */
    select?: ParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participante
     */
    omit?: ParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteInclude<ExtArgs> | null
    /**
     * Filter, which Participante to fetch.
     */
    where: ParticipanteWhereUniqueInput
  }

  /**
   * Participante findUniqueOrThrow
   */
  export type ParticipanteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participante
     */
    select?: ParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participante
     */
    omit?: ParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteInclude<ExtArgs> | null
    /**
     * Filter, which Participante to fetch.
     */
    where: ParticipanteWhereUniqueInput
  }

  /**
   * Participante findFirst
   */
  export type ParticipanteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participante
     */
    select?: ParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participante
     */
    omit?: ParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteInclude<ExtArgs> | null
    /**
     * Filter, which Participante to fetch.
     */
    where?: ParticipanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participantes to fetch.
     */
    orderBy?: ParticipanteOrderByWithRelationInput | ParticipanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Participantes.
     */
    cursor?: ParticipanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Participantes.
     */
    distinct?: ParticipanteScalarFieldEnum | ParticipanteScalarFieldEnum[]
  }

  /**
   * Participante findFirstOrThrow
   */
  export type ParticipanteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participante
     */
    select?: ParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participante
     */
    omit?: ParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteInclude<ExtArgs> | null
    /**
     * Filter, which Participante to fetch.
     */
    where?: ParticipanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participantes to fetch.
     */
    orderBy?: ParticipanteOrderByWithRelationInput | ParticipanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Participantes.
     */
    cursor?: ParticipanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Participantes.
     */
    distinct?: ParticipanteScalarFieldEnum | ParticipanteScalarFieldEnum[]
  }

  /**
   * Participante findMany
   */
  export type ParticipanteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participante
     */
    select?: ParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participante
     */
    omit?: ParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteInclude<ExtArgs> | null
    /**
     * Filter, which Participantes to fetch.
     */
    where?: ParticipanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participantes to fetch.
     */
    orderBy?: ParticipanteOrderByWithRelationInput | ParticipanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Participantes.
     */
    cursor?: ParticipanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participantes.
     */
    skip?: number
    distinct?: ParticipanteScalarFieldEnum | ParticipanteScalarFieldEnum[]
  }

  /**
   * Participante create
   */
  export type ParticipanteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participante
     */
    select?: ParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participante
     */
    omit?: ParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteInclude<ExtArgs> | null
    /**
     * The data needed to create a Participante.
     */
    data: XOR<ParticipanteCreateInput, ParticipanteUncheckedCreateInput>
  }

  /**
   * Participante createMany
   */
  export type ParticipanteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Participantes.
     */
    data: ParticipanteCreateManyInput | ParticipanteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Participante update
   */
  export type ParticipanteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participante
     */
    select?: ParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participante
     */
    omit?: ParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteInclude<ExtArgs> | null
    /**
     * The data needed to update a Participante.
     */
    data: XOR<ParticipanteUpdateInput, ParticipanteUncheckedUpdateInput>
    /**
     * Choose, which Participante to update.
     */
    where: ParticipanteWhereUniqueInput
  }

  /**
   * Participante updateMany
   */
  export type ParticipanteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Participantes.
     */
    data: XOR<ParticipanteUpdateManyMutationInput, ParticipanteUncheckedUpdateManyInput>
    /**
     * Filter which Participantes to update
     */
    where?: ParticipanteWhereInput
    /**
     * Limit how many Participantes to update.
     */
    limit?: number
  }

  /**
   * Participante upsert
   */
  export type ParticipanteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participante
     */
    select?: ParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participante
     */
    omit?: ParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteInclude<ExtArgs> | null
    /**
     * The filter to search for the Participante to update in case it exists.
     */
    where: ParticipanteWhereUniqueInput
    /**
     * In case the Participante found by the `where` argument doesn't exist, create a new Participante with this data.
     */
    create: XOR<ParticipanteCreateInput, ParticipanteUncheckedCreateInput>
    /**
     * In case the Participante was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParticipanteUpdateInput, ParticipanteUncheckedUpdateInput>
  }

  /**
   * Participante delete
   */
  export type ParticipanteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participante
     */
    select?: ParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participante
     */
    omit?: ParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteInclude<ExtArgs> | null
    /**
     * Filter which Participante to delete.
     */
    where: ParticipanteWhereUniqueInput
  }

  /**
   * Participante deleteMany
   */
  export type ParticipanteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Participantes to delete
     */
    where?: ParticipanteWhereInput
    /**
     * Limit how many Participantes to delete.
     */
    limit?: number
  }

  /**
   * Participante without action
   */
  export type ParticipanteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participante
     */
    select?: ParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participante
     */
    omit?: ParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const EventoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    fecha: 'fecha',
    lugar: 'lugar',
    descripcion: 'descripcion',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EventoScalarFieldEnum = (typeof EventoScalarFieldEnum)[keyof typeof EventoScalarFieldEnum]


  export const ParticipanteScalarFieldEnum: {
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

  export type ParticipanteScalarFieldEnum = (typeof ParticipanteScalarFieldEnum)[keyof typeof ParticipanteScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const EventoOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    lugar: 'lugar',
    descripcion: 'descripcion'
  };

  export type EventoOrderByRelevanceFieldEnum = (typeof EventoOrderByRelevanceFieldEnum)[keyof typeof EventoOrderByRelevanceFieldEnum]


  export const ParticipanteOrderByRelevanceFieldEnum: {
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

  export type ParticipanteOrderByRelevanceFieldEnum = (typeof ParticipanteOrderByRelevanceFieldEnum)[keyof typeof ParticipanteOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type EventoWhereInput = {
    AND?: EventoWhereInput | EventoWhereInput[]
    OR?: EventoWhereInput[]
    NOT?: EventoWhereInput | EventoWhereInput[]
    id?: IntFilter<"Evento"> | number
    nombre?: StringFilter<"Evento"> | string
    fecha?: DateTimeNullableFilter<"Evento"> | Date | string | null
    lugar?: StringNullableFilter<"Evento"> | string | null
    descripcion?: StringNullableFilter<"Evento"> | string | null
    createdAt?: DateTimeFilter<"Evento"> | Date | string
    updatedAt?: DateTimeFilter<"Evento"> | Date | string
    participantes?: ParticipanteListRelationFilter
  }

  export type EventoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    fecha?: SortOrderInput | SortOrder
    lugar?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    participantes?: ParticipanteOrderByRelationAggregateInput
    _relevance?: EventoOrderByRelevanceInput
  }

  export type EventoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EventoWhereInput | EventoWhereInput[]
    OR?: EventoWhereInput[]
    NOT?: EventoWhereInput | EventoWhereInput[]
    nombre?: StringFilter<"Evento"> | string
    fecha?: DateTimeNullableFilter<"Evento"> | Date | string | null
    lugar?: StringNullableFilter<"Evento"> | string | null
    descripcion?: StringNullableFilter<"Evento"> | string | null
    createdAt?: DateTimeFilter<"Evento"> | Date | string
    updatedAt?: DateTimeFilter<"Evento"> | Date | string
    participantes?: ParticipanteListRelationFilter
  }, "id">

  export type EventoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    fecha?: SortOrderInput | SortOrder
    lugar?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EventoCountOrderByAggregateInput
    _avg?: EventoAvgOrderByAggregateInput
    _max?: EventoMaxOrderByAggregateInput
    _min?: EventoMinOrderByAggregateInput
    _sum?: EventoSumOrderByAggregateInput
  }

  export type EventoScalarWhereWithAggregatesInput = {
    AND?: EventoScalarWhereWithAggregatesInput | EventoScalarWhereWithAggregatesInput[]
    OR?: EventoScalarWhereWithAggregatesInput[]
    NOT?: EventoScalarWhereWithAggregatesInput | EventoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Evento"> | number
    nombre?: StringWithAggregatesFilter<"Evento"> | string
    fecha?: DateTimeNullableWithAggregatesFilter<"Evento"> | Date | string | null
    lugar?: StringNullableWithAggregatesFilter<"Evento"> | string | null
    descripcion?: StringNullableWithAggregatesFilter<"Evento"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Evento"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Evento"> | Date | string
  }

  export type ParticipanteWhereInput = {
    AND?: ParticipanteWhereInput | ParticipanteWhereInput[]
    OR?: ParticipanteWhereInput[]
    NOT?: ParticipanteWhereInput | ParticipanteWhereInput[]
    id?: IntFilter<"Participante"> | number
    eventoId?: IntFilter<"Participante"> | number
    nombre?: StringFilter<"Participante"> | string
    apellido?: StringFilter<"Participante"> | string
    dni?: StringFilter<"Participante"> | string
    numeroEntrada?: StringFilter<"Participante"> | string
    telefono?: StringNullableFilter<"Participante"> | string | null
    correo?: StringNullableFilter<"Participante"> | string | null
    medioPago?: StringNullableFilter<"Participante"> | string | null
    rubro?: StringNullableFilter<"Participante"> | string | null
    montoPagado?: DecimalNullableFilter<"Participante"> | Decimal | DecimalJsLike | number | string | null
    precioEntrada?: DecimalNullableFilter<"Participante"> | Decimal | DecimalJsLike | number | string | null
    nuevaEntrada?: StringNullableFilter<"Participante"> | string | null
    medioPagoCancelacion?: StringNullableFilter<"Participante"> | string | null
    acreditado?: BoolFilter<"Participante"> | boolean
    createdAt?: DateTimeFilter<"Participante"> | Date | string
    updatedAt?: DateTimeFilter<"Participante"> | Date | string
    evento?: XOR<EventoScalarRelationFilter, EventoWhereInput>
  }

  export type ParticipanteOrderByWithRelationInput = {
    id?: SortOrder
    eventoId?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    dni?: SortOrder
    numeroEntrada?: SortOrder
    telefono?: SortOrderInput | SortOrder
    correo?: SortOrderInput | SortOrder
    medioPago?: SortOrderInput | SortOrder
    rubro?: SortOrderInput | SortOrder
    montoPagado?: SortOrderInput | SortOrder
    precioEntrada?: SortOrderInput | SortOrder
    nuevaEntrada?: SortOrderInput | SortOrder
    medioPagoCancelacion?: SortOrderInput | SortOrder
    acreditado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    evento?: EventoOrderByWithRelationInput
    _relevance?: ParticipanteOrderByRelevanceInput
  }

  export type ParticipanteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    participante_unico_dni_por_evento?: ParticipanteParticipante_unico_dni_por_eventoCompoundUniqueInput
    participante_unico_entrada_por_evento?: ParticipanteParticipante_unico_entrada_por_eventoCompoundUniqueInput
    AND?: ParticipanteWhereInput | ParticipanteWhereInput[]
    OR?: ParticipanteWhereInput[]
    NOT?: ParticipanteWhereInput | ParticipanteWhereInput[]
    eventoId?: IntFilter<"Participante"> | number
    nombre?: StringFilter<"Participante"> | string
    apellido?: StringFilter<"Participante"> | string
    dni?: StringFilter<"Participante"> | string
    numeroEntrada?: StringFilter<"Participante"> | string
    telefono?: StringNullableFilter<"Participante"> | string | null
    correo?: StringNullableFilter<"Participante"> | string | null
    medioPago?: StringNullableFilter<"Participante"> | string | null
    rubro?: StringNullableFilter<"Participante"> | string | null
    montoPagado?: DecimalNullableFilter<"Participante"> | Decimal | DecimalJsLike | number | string | null
    precioEntrada?: DecimalNullableFilter<"Participante"> | Decimal | DecimalJsLike | number | string | null
    nuevaEntrada?: StringNullableFilter<"Participante"> | string | null
    medioPagoCancelacion?: StringNullableFilter<"Participante"> | string | null
    acreditado?: BoolFilter<"Participante"> | boolean
    createdAt?: DateTimeFilter<"Participante"> | Date | string
    updatedAt?: DateTimeFilter<"Participante"> | Date | string
    evento?: XOR<EventoScalarRelationFilter, EventoWhereInput>
  }, "id" | "participante_unico_dni_por_evento" | "participante_unico_entrada_por_evento">

  export type ParticipanteOrderByWithAggregationInput = {
    id?: SortOrder
    eventoId?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    dni?: SortOrder
    numeroEntrada?: SortOrder
    telefono?: SortOrderInput | SortOrder
    correo?: SortOrderInput | SortOrder
    medioPago?: SortOrderInput | SortOrder
    rubro?: SortOrderInput | SortOrder
    montoPagado?: SortOrderInput | SortOrder
    precioEntrada?: SortOrderInput | SortOrder
    nuevaEntrada?: SortOrderInput | SortOrder
    medioPagoCancelacion?: SortOrderInput | SortOrder
    acreditado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ParticipanteCountOrderByAggregateInput
    _avg?: ParticipanteAvgOrderByAggregateInput
    _max?: ParticipanteMaxOrderByAggregateInput
    _min?: ParticipanteMinOrderByAggregateInput
    _sum?: ParticipanteSumOrderByAggregateInput
  }

  export type ParticipanteScalarWhereWithAggregatesInput = {
    AND?: ParticipanteScalarWhereWithAggregatesInput | ParticipanteScalarWhereWithAggregatesInput[]
    OR?: ParticipanteScalarWhereWithAggregatesInput[]
    NOT?: ParticipanteScalarWhereWithAggregatesInput | ParticipanteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Participante"> | number
    eventoId?: IntWithAggregatesFilter<"Participante"> | number
    nombre?: StringWithAggregatesFilter<"Participante"> | string
    apellido?: StringWithAggregatesFilter<"Participante"> | string
    dni?: StringWithAggregatesFilter<"Participante"> | string
    numeroEntrada?: StringWithAggregatesFilter<"Participante"> | string
    telefono?: StringNullableWithAggregatesFilter<"Participante"> | string | null
    correo?: StringNullableWithAggregatesFilter<"Participante"> | string | null
    medioPago?: StringNullableWithAggregatesFilter<"Participante"> | string | null
    rubro?: StringNullableWithAggregatesFilter<"Participante"> | string | null
    montoPagado?: DecimalNullableWithAggregatesFilter<"Participante"> | Decimal | DecimalJsLike | number | string | null
    precioEntrada?: DecimalNullableWithAggregatesFilter<"Participante"> | Decimal | DecimalJsLike | number | string | null
    nuevaEntrada?: StringNullableWithAggregatesFilter<"Participante"> | string | null
    medioPagoCancelacion?: StringNullableWithAggregatesFilter<"Participante"> | string | null
    acreditado?: BoolWithAggregatesFilter<"Participante"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Participante"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Participante"> | Date | string
  }

  export type EventoCreateInput = {
    nombre: string
    fecha?: Date | string | null
    lugar?: string | null
    descripcion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    participantes?: ParticipanteCreateNestedManyWithoutEventoInput
  }

  export type EventoUncheckedCreateInput = {
    id?: number
    nombre: string
    fecha?: Date | string | null
    lugar?: string | null
    descripcion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    participantes?: ParticipanteUncheckedCreateNestedManyWithoutEventoInput
  }

  export type EventoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lugar?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participantes?: ParticipanteUpdateManyWithoutEventoNestedInput
  }

  export type EventoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lugar?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participantes?: ParticipanteUncheckedUpdateManyWithoutEventoNestedInput
  }

  export type EventoCreateManyInput = {
    id?: number
    nombre: string
    fecha?: Date | string | null
    lugar?: string | null
    descripcion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lugar?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lugar?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipanteCreateInput = {
    nombre: string
    apellido: string
    dni: string
    numeroEntrada: string
    telefono?: string | null
    correo?: string | null
    medioPago?: string | null
    rubro?: string | null
    montoPagado?: Decimal | DecimalJsLike | number | string | null
    precioEntrada?: Decimal | DecimalJsLike | number | string | null
    nuevaEntrada?: string | null
    medioPagoCancelacion?: string | null
    acreditado?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    evento: EventoCreateNestedOneWithoutParticipantesInput
  }

  export type ParticipanteUncheckedCreateInput = {
    id?: number
    eventoId: number
    nombre: string
    apellido: string
    dni: string
    numeroEntrada: string
    telefono?: string | null
    correo?: string | null
    medioPago?: string | null
    rubro?: string | null
    montoPagado?: Decimal | DecimalJsLike | number | string | null
    precioEntrada?: Decimal | DecimalJsLike | number | string | null
    nuevaEntrada?: string | null
    medioPagoCancelacion?: string | null
    acreditado?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParticipanteUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    numeroEntrada?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    medioPago?: NullableStringFieldUpdateOperationsInput | string | null
    rubro?: NullableStringFieldUpdateOperationsInput | string | null
    montoPagado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    precioEntrada?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nuevaEntrada?: NullableStringFieldUpdateOperationsInput | string | null
    medioPagoCancelacion?: NullableStringFieldUpdateOperationsInput | string | null
    acreditado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evento?: EventoUpdateOneRequiredWithoutParticipantesNestedInput
  }

  export type ParticipanteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventoId?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    numeroEntrada?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    medioPago?: NullableStringFieldUpdateOperationsInput | string | null
    rubro?: NullableStringFieldUpdateOperationsInput | string | null
    montoPagado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    precioEntrada?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nuevaEntrada?: NullableStringFieldUpdateOperationsInput | string | null
    medioPagoCancelacion?: NullableStringFieldUpdateOperationsInput | string | null
    acreditado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipanteCreateManyInput = {
    id?: number
    eventoId: number
    nombre: string
    apellido: string
    dni: string
    numeroEntrada: string
    telefono?: string | null
    correo?: string | null
    medioPago?: string | null
    rubro?: string | null
    montoPagado?: Decimal | DecimalJsLike | number | string | null
    precioEntrada?: Decimal | DecimalJsLike | number | string | null
    nuevaEntrada?: string | null
    medioPagoCancelacion?: string | null
    acreditado?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParticipanteUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    numeroEntrada?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    medioPago?: NullableStringFieldUpdateOperationsInput | string | null
    rubro?: NullableStringFieldUpdateOperationsInput | string | null
    montoPagado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    precioEntrada?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nuevaEntrada?: NullableStringFieldUpdateOperationsInput | string | null
    medioPagoCancelacion?: NullableStringFieldUpdateOperationsInput | string | null
    acreditado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipanteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventoId?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    numeroEntrada?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    medioPago?: NullableStringFieldUpdateOperationsInput | string | null
    rubro?: NullableStringFieldUpdateOperationsInput | string | null
    montoPagado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    precioEntrada?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nuevaEntrada?: NullableStringFieldUpdateOperationsInput | string | null
    medioPagoCancelacion?: NullableStringFieldUpdateOperationsInput | string | null
    acreditado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ParticipanteListRelationFilter = {
    every?: ParticipanteWhereInput
    some?: ParticipanteWhereInput
    none?: ParticipanteWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ParticipanteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventoOrderByRelevanceInput = {
    fields: EventoOrderByRelevanceFieldEnum | EventoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EventoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    fecha?: SortOrder
    lugar?: SortOrder
    descripcion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EventoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    fecha?: SortOrder
    lugar?: SortOrder
    descripcion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    fecha?: SortOrder
    lugar?: SortOrder
    descripcion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EventoScalarRelationFilter = {
    is?: EventoWhereInput
    isNot?: EventoWhereInput
  }

  export type ParticipanteOrderByRelevanceInput = {
    fields: ParticipanteOrderByRelevanceFieldEnum | ParticipanteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ParticipanteParticipante_unico_dni_por_eventoCompoundUniqueInput = {
    eventoId: number
    dni: string
  }

  export type ParticipanteParticipante_unico_entrada_por_eventoCompoundUniqueInput = {
    eventoId: number
    numeroEntrada: string
  }

  export type ParticipanteCountOrderByAggregateInput = {
    id?: SortOrder
    eventoId?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    dni?: SortOrder
    numeroEntrada?: SortOrder
    telefono?: SortOrder
    correo?: SortOrder
    medioPago?: SortOrder
    rubro?: SortOrder
    montoPagado?: SortOrder
    precioEntrada?: SortOrder
    nuevaEntrada?: SortOrder
    medioPagoCancelacion?: SortOrder
    acreditado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParticipanteAvgOrderByAggregateInput = {
    id?: SortOrder
    eventoId?: SortOrder
    montoPagado?: SortOrder
    precioEntrada?: SortOrder
  }

  export type ParticipanteMaxOrderByAggregateInput = {
    id?: SortOrder
    eventoId?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    dni?: SortOrder
    numeroEntrada?: SortOrder
    telefono?: SortOrder
    correo?: SortOrder
    medioPago?: SortOrder
    rubro?: SortOrder
    montoPagado?: SortOrder
    precioEntrada?: SortOrder
    nuevaEntrada?: SortOrder
    medioPagoCancelacion?: SortOrder
    acreditado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParticipanteMinOrderByAggregateInput = {
    id?: SortOrder
    eventoId?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    dni?: SortOrder
    numeroEntrada?: SortOrder
    telefono?: SortOrder
    correo?: SortOrder
    medioPago?: SortOrder
    rubro?: SortOrder
    montoPagado?: SortOrder
    precioEntrada?: SortOrder
    nuevaEntrada?: SortOrder
    medioPagoCancelacion?: SortOrder
    acreditado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParticipanteSumOrderByAggregateInput = {
    id?: SortOrder
    eventoId?: SortOrder
    montoPagado?: SortOrder
    precioEntrada?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ParticipanteCreateNestedManyWithoutEventoInput = {
    create?: XOR<ParticipanteCreateWithoutEventoInput, ParticipanteUncheckedCreateWithoutEventoInput> | ParticipanteCreateWithoutEventoInput[] | ParticipanteUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: ParticipanteCreateOrConnectWithoutEventoInput | ParticipanteCreateOrConnectWithoutEventoInput[]
    createMany?: ParticipanteCreateManyEventoInputEnvelope
    connect?: ParticipanteWhereUniqueInput | ParticipanteWhereUniqueInput[]
  }

  export type ParticipanteUncheckedCreateNestedManyWithoutEventoInput = {
    create?: XOR<ParticipanteCreateWithoutEventoInput, ParticipanteUncheckedCreateWithoutEventoInput> | ParticipanteCreateWithoutEventoInput[] | ParticipanteUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: ParticipanteCreateOrConnectWithoutEventoInput | ParticipanteCreateOrConnectWithoutEventoInput[]
    createMany?: ParticipanteCreateManyEventoInputEnvelope
    connect?: ParticipanteWhereUniqueInput | ParticipanteWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ParticipanteUpdateManyWithoutEventoNestedInput = {
    create?: XOR<ParticipanteCreateWithoutEventoInput, ParticipanteUncheckedCreateWithoutEventoInput> | ParticipanteCreateWithoutEventoInput[] | ParticipanteUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: ParticipanteCreateOrConnectWithoutEventoInput | ParticipanteCreateOrConnectWithoutEventoInput[]
    upsert?: ParticipanteUpsertWithWhereUniqueWithoutEventoInput | ParticipanteUpsertWithWhereUniqueWithoutEventoInput[]
    createMany?: ParticipanteCreateManyEventoInputEnvelope
    set?: ParticipanteWhereUniqueInput | ParticipanteWhereUniqueInput[]
    disconnect?: ParticipanteWhereUniqueInput | ParticipanteWhereUniqueInput[]
    delete?: ParticipanteWhereUniqueInput | ParticipanteWhereUniqueInput[]
    connect?: ParticipanteWhereUniqueInput | ParticipanteWhereUniqueInput[]
    update?: ParticipanteUpdateWithWhereUniqueWithoutEventoInput | ParticipanteUpdateWithWhereUniqueWithoutEventoInput[]
    updateMany?: ParticipanteUpdateManyWithWhereWithoutEventoInput | ParticipanteUpdateManyWithWhereWithoutEventoInput[]
    deleteMany?: ParticipanteScalarWhereInput | ParticipanteScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ParticipanteUncheckedUpdateManyWithoutEventoNestedInput = {
    create?: XOR<ParticipanteCreateWithoutEventoInput, ParticipanteUncheckedCreateWithoutEventoInput> | ParticipanteCreateWithoutEventoInput[] | ParticipanteUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: ParticipanteCreateOrConnectWithoutEventoInput | ParticipanteCreateOrConnectWithoutEventoInput[]
    upsert?: ParticipanteUpsertWithWhereUniqueWithoutEventoInput | ParticipanteUpsertWithWhereUniqueWithoutEventoInput[]
    createMany?: ParticipanteCreateManyEventoInputEnvelope
    set?: ParticipanteWhereUniqueInput | ParticipanteWhereUniqueInput[]
    disconnect?: ParticipanteWhereUniqueInput | ParticipanteWhereUniqueInput[]
    delete?: ParticipanteWhereUniqueInput | ParticipanteWhereUniqueInput[]
    connect?: ParticipanteWhereUniqueInput | ParticipanteWhereUniqueInput[]
    update?: ParticipanteUpdateWithWhereUniqueWithoutEventoInput | ParticipanteUpdateWithWhereUniqueWithoutEventoInput[]
    updateMany?: ParticipanteUpdateManyWithWhereWithoutEventoInput | ParticipanteUpdateManyWithWhereWithoutEventoInput[]
    deleteMany?: ParticipanteScalarWhereInput | ParticipanteScalarWhereInput[]
  }

  export type EventoCreateNestedOneWithoutParticipantesInput = {
    create?: XOR<EventoCreateWithoutParticipantesInput, EventoUncheckedCreateWithoutParticipantesInput>
    connectOrCreate?: EventoCreateOrConnectWithoutParticipantesInput
    connect?: EventoWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EventoUpdateOneRequiredWithoutParticipantesNestedInput = {
    create?: XOR<EventoCreateWithoutParticipantesInput, EventoUncheckedCreateWithoutParticipantesInput>
    connectOrCreate?: EventoCreateOrConnectWithoutParticipantesInput
    upsert?: EventoUpsertWithoutParticipantesInput
    connect?: EventoWhereUniqueInput
    update?: XOR<XOR<EventoUpdateToOneWithWhereWithoutParticipantesInput, EventoUpdateWithoutParticipantesInput>, EventoUncheckedUpdateWithoutParticipantesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ParticipanteCreateWithoutEventoInput = {
    nombre: string
    apellido: string
    dni: string
    numeroEntrada: string
    telefono?: string | null
    correo?: string | null
    medioPago?: string | null
    rubro?: string | null
    montoPagado?: Decimal | DecimalJsLike | number | string | null
    precioEntrada?: Decimal | DecimalJsLike | number | string | null
    nuevaEntrada?: string | null
    medioPagoCancelacion?: string | null
    acreditado?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParticipanteUncheckedCreateWithoutEventoInput = {
    id?: number
    nombre: string
    apellido: string
    dni: string
    numeroEntrada: string
    telefono?: string | null
    correo?: string | null
    medioPago?: string | null
    rubro?: string | null
    montoPagado?: Decimal | DecimalJsLike | number | string | null
    precioEntrada?: Decimal | DecimalJsLike | number | string | null
    nuevaEntrada?: string | null
    medioPagoCancelacion?: string | null
    acreditado?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParticipanteCreateOrConnectWithoutEventoInput = {
    where: ParticipanteWhereUniqueInput
    create: XOR<ParticipanteCreateWithoutEventoInput, ParticipanteUncheckedCreateWithoutEventoInput>
  }

  export type ParticipanteCreateManyEventoInputEnvelope = {
    data: ParticipanteCreateManyEventoInput | ParticipanteCreateManyEventoInput[]
    skipDuplicates?: boolean
  }

  export type ParticipanteUpsertWithWhereUniqueWithoutEventoInput = {
    where: ParticipanteWhereUniqueInput
    update: XOR<ParticipanteUpdateWithoutEventoInput, ParticipanteUncheckedUpdateWithoutEventoInput>
    create: XOR<ParticipanteCreateWithoutEventoInput, ParticipanteUncheckedCreateWithoutEventoInput>
  }

  export type ParticipanteUpdateWithWhereUniqueWithoutEventoInput = {
    where: ParticipanteWhereUniqueInput
    data: XOR<ParticipanteUpdateWithoutEventoInput, ParticipanteUncheckedUpdateWithoutEventoInput>
  }

  export type ParticipanteUpdateManyWithWhereWithoutEventoInput = {
    where: ParticipanteScalarWhereInput
    data: XOR<ParticipanteUpdateManyMutationInput, ParticipanteUncheckedUpdateManyWithoutEventoInput>
  }

  export type ParticipanteScalarWhereInput = {
    AND?: ParticipanteScalarWhereInput | ParticipanteScalarWhereInput[]
    OR?: ParticipanteScalarWhereInput[]
    NOT?: ParticipanteScalarWhereInput | ParticipanteScalarWhereInput[]
    id?: IntFilter<"Participante"> | number
    eventoId?: IntFilter<"Participante"> | number
    nombre?: StringFilter<"Participante"> | string
    apellido?: StringFilter<"Participante"> | string
    dni?: StringFilter<"Participante"> | string
    numeroEntrada?: StringFilter<"Participante"> | string
    telefono?: StringNullableFilter<"Participante"> | string | null
    correo?: StringNullableFilter<"Participante"> | string | null
    medioPago?: StringNullableFilter<"Participante"> | string | null
    rubro?: StringNullableFilter<"Participante"> | string | null
    montoPagado?: DecimalNullableFilter<"Participante"> | Decimal | DecimalJsLike | number | string | null
    precioEntrada?: DecimalNullableFilter<"Participante"> | Decimal | DecimalJsLike | number | string | null
    nuevaEntrada?: StringNullableFilter<"Participante"> | string | null
    medioPagoCancelacion?: StringNullableFilter<"Participante"> | string | null
    acreditado?: BoolFilter<"Participante"> | boolean
    createdAt?: DateTimeFilter<"Participante"> | Date | string
    updatedAt?: DateTimeFilter<"Participante"> | Date | string
  }

  export type EventoCreateWithoutParticipantesInput = {
    nombre: string
    fecha?: Date | string | null
    lugar?: string | null
    descripcion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventoUncheckedCreateWithoutParticipantesInput = {
    id?: number
    nombre: string
    fecha?: Date | string | null
    lugar?: string | null
    descripcion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventoCreateOrConnectWithoutParticipantesInput = {
    where: EventoWhereUniqueInput
    create: XOR<EventoCreateWithoutParticipantesInput, EventoUncheckedCreateWithoutParticipantesInput>
  }

  export type EventoUpsertWithoutParticipantesInput = {
    update: XOR<EventoUpdateWithoutParticipantesInput, EventoUncheckedUpdateWithoutParticipantesInput>
    create: XOR<EventoCreateWithoutParticipantesInput, EventoUncheckedCreateWithoutParticipantesInput>
    where?: EventoWhereInput
  }

  export type EventoUpdateToOneWithWhereWithoutParticipantesInput = {
    where?: EventoWhereInput
    data: XOR<EventoUpdateWithoutParticipantesInput, EventoUncheckedUpdateWithoutParticipantesInput>
  }

  export type EventoUpdateWithoutParticipantesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lugar?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventoUncheckedUpdateWithoutParticipantesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lugar?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipanteCreateManyEventoInput = {
    id?: number
    nombre: string
    apellido: string
    dni: string
    numeroEntrada: string
    telefono?: string | null
    correo?: string | null
    medioPago?: string | null
    rubro?: string | null
    montoPagado?: Decimal | DecimalJsLike | number | string | null
    precioEntrada?: Decimal | DecimalJsLike | number | string | null
    nuevaEntrada?: string | null
    medioPagoCancelacion?: string | null
    acreditado?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParticipanteUpdateWithoutEventoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    numeroEntrada?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    medioPago?: NullableStringFieldUpdateOperationsInput | string | null
    rubro?: NullableStringFieldUpdateOperationsInput | string | null
    montoPagado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    precioEntrada?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nuevaEntrada?: NullableStringFieldUpdateOperationsInput | string | null
    medioPagoCancelacion?: NullableStringFieldUpdateOperationsInput | string | null
    acreditado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipanteUncheckedUpdateWithoutEventoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    numeroEntrada?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    medioPago?: NullableStringFieldUpdateOperationsInput | string | null
    rubro?: NullableStringFieldUpdateOperationsInput | string | null
    montoPagado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    precioEntrada?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nuevaEntrada?: NullableStringFieldUpdateOperationsInput | string | null
    medioPagoCancelacion?: NullableStringFieldUpdateOperationsInput | string | null
    acreditado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipanteUncheckedUpdateManyWithoutEventoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    numeroEntrada?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    medioPago?: NullableStringFieldUpdateOperationsInput | string | null
    rubro?: NullableStringFieldUpdateOperationsInput | string | null
    montoPagado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    precioEntrada?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nuevaEntrada?: NullableStringFieldUpdateOperationsInput | string | null
    medioPagoCancelacion?: NullableStringFieldUpdateOperationsInput | string | null
    acreditado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
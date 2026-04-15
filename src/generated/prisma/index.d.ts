
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Word
 * 
 */
export type Word = $Result.DefaultSelection<Prisma.$WordPayload>
/**
 * Model Player
 * 
 */
export type Player = $Result.DefaultSelection<Prisma.$PlayerPayload>
/**
 * Model DailyChallenge
 * 
 */
export type DailyChallenge = $Result.DefaultSelection<Prisma.$DailyChallengePayload>
/**
 * Model DailyEntry
 * 
 */
export type DailyEntry = $Result.DefaultSelection<Prisma.$DailyEntryPayload>
/**
 * Model ArcadeScore
 * 
 */
export type ArcadeScore = $Result.DefaultSelection<Prisma.$ArcadeScorePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Words
 * const words = await prisma.word.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Words
   * const words = await prisma.word.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.word`: Exposes CRUD operations for the **Word** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Words
    * const words = await prisma.word.findMany()
    * ```
    */
  get word(): Prisma.WordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.player`: Exposes CRUD operations for the **Player** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Players
    * const players = await prisma.player.findMany()
    * ```
    */
  get player(): Prisma.PlayerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dailyChallenge`: Exposes CRUD operations for the **DailyChallenge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyChallenges
    * const dailyChallenges = await prisma.dailyChallenge.findMany()
    * ```
    */
  get dailyChallenge(): Prisma.DailyChallengeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dailyEntry`: Exposes CRUD operations for the **DailyEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyEntries
    * const dailyEntries = await prisma.dailyEntry.findMany()
    * ```
    */
  get dailyEntry(): Prisma.DailyEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.arcadeScore`: Exposes CRUD operations for the **ArcadeScore** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArcadeScores
    * const arcadeScores = await prisma.arcadeScore.findMany()
    * ```
    */
  get arcadeScore(): Prisma.ArcadeScoreDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.7.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Word: 'Word',
    Player: 'Player',
    DailyChallenge: 'DailyChallenge',
    DailyEntry: 'DailyEntry',
    ArcadeScore: 'ArcadeScore'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "word" | "player" | "dailyChallenge" | "dailyEntry" | "arcadeScore"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Word: {
        payload: Prisma.$WordPayload<ExtArgs>
        fields: Prisma.WordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>
          }
          findFirst: {
            args: Prisma.WordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>
          }
          findMany: {
            args: Prisma.WordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>[]
          }
          create: {
            args: Prisma.WordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>
          }
          createMany: {
            args: Prisma.WordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>[]
          }
          delete: {
            args: Prisma.WordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>
          }
          update: {
            args: Prisma.WordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>
          }
          deleteMany: {
            args: Prisma.WordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>[]
          }
          upsert: {
            args: Prisma.WordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>
          }
          aggregate: {
            args: Prisma.WordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWord>
          }
          groupBy: {
            args: Prisma.WordGroupByArgs<ExtArgs>
            result: $Utils.Optional<WordGroupByOutputType>[]
          }
          count: {
            args: Prisma.WordCountArgs<ExtArgs>
            result: $Utils.Optional<WordCountAggregateOutputType> | number
          }
        }
      }
      Player: {
        payload: Prisma.$PlayerPayload<ExtArgs>
        fields: Prisma.PlayerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          findFirst: {
            args: Prisma.PlayerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          findMany: {
            args: Prisma.PlayerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[]
          }
          create: {
            args: Prisma.PlayerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          createMany: {
            args: Prisma.PlayerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlayerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[]
          }
          delete: {
            args: Prisma.PlayerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          update: {
            args: Prisma.PlayerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          deleteMany: {
            args: Prisma.PlayerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlayerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[]
          }
          upsert: {
            args: Prisma.PlayerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          aggregate: {
            args: Prisma.PlayerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayer>
          }
          groupBy: {
            args: Prisma.PlayerGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayerGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayerCountArgs<ExtArgs>
            result: $Utils.Optional<PlayerCountAggregateOutputType> | number
          }
        }
      }
      DailyChallenge: {
        payload: Prisma.$DailyChallengePayload<ExtArgs>
        fields: Prisma.DailyChallengeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyChallengeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyChallengePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyChallengeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyChallengePayload>
          }
          findFirst: {
            args: Prisma.DailyChallengeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyChallengePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyChallengeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyChallengePayload>
          }
          findMany: {
            args: Prisma.DailyChallengeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyChallengePayload>[]
          }
          create: {
            args: Prisma.DailyChallengeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyChallengePayload>
          }
          createMany: {
            args: Prisma.DailyChallengeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DailyChallengeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyChallengePayload>[]
          }
          delete: {
            args: Prisma.DailyChallengeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyChallengePayload>
          }
          update: {
            args: Prisma.DailyChallengeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyChallengePayload>
          }
          deleteMany: {
            args: Prisma.DailyChallengeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyChallengeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DailyChallengeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyChallengePayload>[]
          }
          upsert: {
            args: Prisma.DailyChallengeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyChallengePayload>
          }
          aggregate: {
            args: Prisma.DailyChallengeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyChallenge>
          }
          groupBy: {
            args: Prisma.DailyChallengeGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyChallengeGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyChallengeCountArgs<ExtArgs>
            result: $Utils.Optional<DailyChallengeCountAggregateOutputType> | number
          }
        }
      }
      DailyEntry: {
        payload: Prisma.$DailyEntryPayload<ExtArgs>
        fields: Prisma.DailyEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyEntryPayload>
          }
          findFirst: {
            args: Prisma.DailyEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyEntryPayload>
          }
          findMany: {
            args: Prisma.DailyEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyEntryPayload>[]
          }
          create: {
            args: Prisma.DailyEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyEntryPayload>
          }
          createMany: {
            args: Prisma.DailyEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DailyEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyEntryPayload>[]
          }
          delete: {
            args: Prisma.DailyEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyEntryPayload>
          }
          update: {
            args: Prisma.DailyEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyEntryPayload>
          }
          deleteMany: {
            args: Prisma.DailyEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DailyEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyEntryPayload>[]
          }
          upsert: {
            args: Prisma.DailyEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyEntryPayload>
          }
          aggregate: {
            args: Prisma.DailyEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyEntry>
          }
          groupBy: {
            args: Prisma.DailyEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyEntryCountArgs<ExtArgs>
            result: $Utils.Optional<DailyEntryCountAggregateOutputType> | number
          }
        }
      }
      ArcadeScore: {
        payload: Prisma.$ArcadeScorePayload<ExtArgs>
        fields: Prisma.ArcadeScoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArcadeScoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArcadeScorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArcadeScoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArcadeScorePayload>
          }
          findFirst: {
            args: Prisma.ArcadeScoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArcadeScorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArcadeScoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArcadeScorePayload>
          }
          findMany: {
            args: Prisma.ArcadeScoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArcadeScorePayload>[]
          }
          create: {
            args: Prisma.ArcadeScoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArcadeScorePayload>
          }
          createMany: {
            args: Prisma.ArcadeScoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArcadeScoreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArcadeScorePayload>[]
          }
          delete: {
            args: Prisma.ArcadeScoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArcadeScorePayload>
          }
          update: {
            args: Prisma.ArcadeScoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArcadeScorePayload>
          }
          deleteMany: {
            args: Prisma.ArcadeScoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArcadeScoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArcadeScoreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArcadeScorePayload>[]
          }
          upsert: {
            args: Prisma.ArcadeScoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArcadeScorePayload>
          }
          aggregate: {
            args: Prisma.ArcadeScoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArcadeScore>
          }
          groupBy: {
            args: Prisma.ArcadeScoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArcadeScoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArcadeScoreCountArgs<ExtArgs>
            result: $Utils.Optional<ArcadeScoreCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    word?: WordOmit
    player?: PlayerOmit
    dailyChallenge?: DailyChallengeOmit
    dailyEntry?: DailyEntryOmit
    arcadeScore?: ArcadeScoreOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type WordCountOutputType
   */

  export type WordCountOutputType = {
    dailyChallenges: number
  }

  export type WordCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dailyChallenges?: boolean | WordCountOutputTypeCountDailyChallengesArgs
  }

  // Custom InputTypes
  /**
   * WordCountOutputType without action
   */
  export type WordCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordCountOutputType
     */
    select?: WordCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WordCountOutputType without action
   */
  export type WordCountOutputTypeCountDailyChallengesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyChallengeWhereInput
  }


  /**
   * Count Type PlayerCountOutputType
   */

  export type PlayerCountOutputType = {
    dailyEntries: number
    arcadeScores: number
  }

  export type PlayerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dailyEntries?: boolean | PlayerCountOutputTypeCountDailyEntriesArgs
    arcadeScores?: boolean | PlayerCountOutputTypeCountArcadeScoresArgs
  }

  // Custom InputTypes
  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerCountOutputType
     */
    select?: PlayerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeCountDailyEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyEntryWhereInput
  }

  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeCountArcadeScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArcadeScoreWhereInput
  }


  /**
   * Count Type DailyChallengeCountOutputType
   */

  export type DailyChallengeCountOutputType = {
    entries: number
  }

  export type DailyChallengeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entries?: boolean | DailyChallengeCountOutputTypeCountEntriesArgs
  }

  // Custom InputTypes
  /**
   * DailyChallengeCountOutputType without action
   */
  export type DailyChallengeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyChallengeCountOutputType
     */
    select?: DailyChallengeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DailyChallengeCountOutputType without action
   */
  export type DailyChallengeCountOutputTypeCountEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyEntryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Word
   */

  export type AggregateWord = {
    _count: WordCountAggregateOutputType | null
    _avg: WordAvgAggregateOutputType | null
    _sum: WordSumAggregateOutputType | null
    _min: WordMinAggregateOutputType | null
    _max: WordMaxAggregateOutputType | null
  }

  export type WordAvgAggregateOutputType = {
    id: number | null
  }

  export type WordSumAggregateOutputType = {
    id: number | null
  }

  export type WordMinAggregateOutputType = {
    id: number | null
    word: string | null
    hint: string | null
    difficulty: string | null
    createdAt: Date | null
  }

  export type WordMaxAggregateOutputType = {
    id: number | null
    word: string | null
    hint: string | null
    difficulty: string | null
    createdAt: Date | null
  }

  export type WordCountAggregateOutputType = {
    id: number
    word: number
    hint: number
    difficulty: number
    createdAt: number
    _all: number
  }


  export type WordAvgAggregateInputType = {
    id?: true
  }

  export type WordSumAggregateInputType = {
    id?: true
  }

  export type WordMinAggregateInputType = {
    id?: true
    word?: true
    hint?: true
    difficulty?: true
    createdAt?: true
  }

  export type WordMaxAggregateInputType = {
    id?: true
    word?: true
    hint?: true
    difficulty?: true
    createdAt?: true
  }

  export type WordCountAggregateInputType = {
    id?: true
    word?: true
    hint?: true
    difficulty?: true
    createdAt?: true
    _all?: true
  }

  export type WordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Word to aggregate.
     */
    where?: WordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Words to fetch.
     */
    orderBy?: WordOrderByWithRelationInput | WordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Words from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Words.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Words
    **/
    _count?: true | WordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WordMaxAggregateInputType
  }

  export type GetWordAggregateType<T extends WordAggregateArgs> = {
        [P in keyof T & keyof AggregateWord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWord[P]>
      : GetScalarType<T[P], AggregateWord[P]>
  }




  export type WordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WordWhereInput
    orderBy?: WordOrderByWithAggregationInput | WordOrderByWithAggregationInput[]
    by: WordScalarFieldEnum[] | WordScalarFieldEnum
    having?: WordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WordCountAggregateInputType | true
    _avg?: WordAvgAggregateInputType
    _sum?: WordSumAggregateInputType
    _min?: WordMinAggregateInputType
    _max?: WordMaxAggregateInputType
  }

  export type WordGroupByOutputType = {
    id: number
    word: string
    hint: string | null
    difficulty: string
    createdAt: Date
    _count: WordCountAggregateOutputType | null
    _avg: WordAvgAggregateOutputType | null
    _sum: WordSumAggregateOutputType | null
    _min: WordMinAggregateOutputType | null
    _max: WordMaxAggregateOutputType | null
  }

  type GetWordGroupByPayload<T extends WordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WordGroupByOutputType[P]>
            : GetScalarType<T[P], WordGroupByOutputType[P]>
        }
      >
    >


  export type WordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    word?: boolean
    hint?: boolean
    difficulty?: boolean
    createdAt?: boolean
    dailyChallenges?: boolean | Word$dailyChallengesArgs<ExtArgs>
    _count?: boolean | WordCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["word"]>

  export type WordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    word?: boolean
    hint?: boolean
    difficulty?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["word"]>

  export type WordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    word?: boolean
    hint?: boolean
    difficulty?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["word"]>

  export type WordSelectScalar = {
    id?: boolean
    word?: boolean
    hint?: boolean
    difficulty?: boolean
    createdAt?: boolean
  }

  export type WordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "word" | "hint" | "difficulty" | "createdAt", ExtArgs["result"]["word"]>
  export type WordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dailyChallenges?: boolean | Word$dailyChallengesArgs<ExtArgs>
    _count?: boolean | WordCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Word"
    objects: {
      dailyChallenges: Prisma.$DailyChallengePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      word: string
      hint: string | null
      difficulty: string
      createdAt: Date
    }, ExtArgs["result"]["word"]>
    composites: {}
  }

  type WordGetPayload<S extends boolean | null | undefined | WordDefaultArgs> = $Result.GetResult<Prisma.$WordPayload, S>

  type WordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WordCountAggregateInputType | true
    }

  export interface WordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Word'], meta: { name: 'Word' } }
    /**
     * Find zero or one Word that matches the filter.
     * @param {WordFindUniqueArgs} args - Arguments to find a Word
     * @example
     * // Get one Word
     * const word = await prisma.word.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WordFindUniqueArgs>(args: SelectSubset<T, WordFindUniqueArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Word that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WordFindUniqueOrThrowArgs} args - Arguments to find a Word
     * @example
     * // Get one Word
     * const word = await prisma.word.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WordFindUniqueOrThrowArgs>(args: SelectSubset<T, WordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Word that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordFindFirstArgs} args - Arguments to find a Word
     * @example
     * // Get one Word
     * const word = await prisma.word.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WordFindFirstArgs>(args?: SelectSubset<T, WordFindFirstArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Word that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordFindFirstOrThrowArgs} args - Arguments to find a Word
     * @example
     * // Get one Word
     * const word = await prisma.word.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WordFindFirstOrThrowArgs>(args?: SelectSubset<T, WordFindFirstOrThrowArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Words that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Words
     * const words = await prisma.word.findMany()
     * 
     * // Get first 10 Words
     * const words = await prisma.word.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wordWithIdOnly = await prisma.word.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WordFindManyArgs>(args?: SelectSubset<T, WordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Word.
     * @param {WordCreateArgs} args - Arguments to create a Word.
     * @example
     * // Create one Word
     * const Word = await prisma.word.create({
     *   data: {
     *     // ... data to create a Word
     *   }
     * })
     * 
     */
    create<T extends WordCreateArgs>(args: SelectSubset<T, WordCreateArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Words.
     * @param {WordCreateManyArgs} args - Arguments to create many Words.
     * @example
     * // Create many Words
     * const word = await prisma.word.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WordCreateManyArgs>(args?: SelectSubset<T, WordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Words and returns the data saved in the database.
     * @param {WordCreateManyAndReturnArgs} args - Arguments to create many Words.
     * @example
     * // Create many Words
     * const word = await prisma.word.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Words and only return the `id`
     * const wordWithIdOnly = await prisma.word.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WordCreateManyAndReturnArgs>(args?: SelectSubset<T, WordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Word.
     * @param {WordDeleteArgs} args - Arguments to delete one Word.
     * @example
     * // Delete one Word
     * const Word = await prisma.word.delete({
     *   where: {
     *     // ... filter to delete one Word
     *   }
     * })
     * 
     */
    delete<T extends WordDeleteArgs>(args: SelectSubset<T, WordDeleteArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Word.
     * @param {WordUpdateArgs} args - Arguments to update one Word.
     * @example
     * // Update one Word
     * const word = await prisma.word.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WordUpdateArgs>(args: SelectSubset<T, WordUpdateArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Words.
     * @param {WordDeleteManyArgs} args - Arguments to filter Words to delete.
     * @example
     * // Delete a few Words
     * const { count } = await prisma.word.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WordDeleteManyArgs>(args?: SelectSubset<T, WordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Words.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Words
     * const word = await prisma.word.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WordUpdateManyArgs>(args: SelectSubset<T, WordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Words and returns the data updated in the database.
     * @param {WordUpdateManyAndReturnArgs} args - Arguments to update many Words.
     * @example
     * // Update many Words
     * const word = await prisma.word.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Words and only return the `id`
     * const wordWithIdOnly = await prisma.word.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WordUpdateManyAndReturnArgs>(args: SelectSubset<T, WordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Word.
     * @param {WordUpsertArgs} args - Arguments to update or create a Word.
     * @example
     * // Update or create a Word
     * const word = await prisma.word.upsert({
     *   create: {
     *     // ... data to create a Word
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Word we want to update
     *   }
     * })
     */
    upsert<T extends WordUpsertArgs>(args: SelectSubset<T, WordUpsertArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Words.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordCountArgs} args - Arguments to filter Words to count.
     * @example
     * // Count the number of Words
     * const count = await prisma.word.count({
     *   where: {
     *     // ... the filter for the Words we want to count
     *   }
     * })
    **/
    count<T extends WordCountArgs>(
      args?: Subset<T, WordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Word.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WordAggregateArgs>(args: Subset<T, WordAggregateArgs>): Prisma.PrismaPromise<GetWordAggregateType<T>>

    /**
     * Group by Word.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordGroupByArgs} args - Group by arguments.
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
      T extends WordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WordGroupByArgs['orderBy'] }
        : { orderBy?: WordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Word model
   */
  readonly fields: WordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Word.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dailyChallenges<T extends Word$dailyChallengesArgs<ExtArgs> = {}>(args?: Subset<T, Word$dailyChallengesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyChallengePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Word model
   */
  interface WordFieldRefs {
    readonly id: FieldRef<"Word", 'Int'>
    readonly word: FieldRef<"Word", 'String'>
    readonly hint: FieldRef<"Word", 'String'>
    readonly difficulty: FieldRef<"Word", 'String'>
    readonly createdAt: FieldRef<"Word", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Word findUnique
   */
  export type WordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * Filter, which Word to fetch.
     */
    where: WordWhereUniqueInput
  }

  /**
   * Word findUniqueOrThrow
   */
  export type WordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * Filter, which Word to fetch.
     */
    where: WordWhereUniqueInput
  }

  /**
   * Word findFirst
   */
  export type WordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * Filter, which Word to fetch.
     */
    where?: WordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Words to fetch.
     */
    orderBy?: WordOrderByWithRelationInput | WordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Words.
     */
    cursor?: WordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Words from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Words.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Words.
     */
    distinct?: WordScalarFieldEnum | WordScalarFieldEnum[]
  }

  /**
   * Word findFirstOrThrow
   */
  export type WordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * Filter, which Word to fetch.
     */
    where?: WordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Words to fetch.
     */
    orderBy?: WordOrderByWithRelationInput | WordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Words.
     */
    cursor?: WordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Words from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Words.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Words.
     */
    distinct?: WordScalarFieldEnum | WordScalarFieldEnum[]
  }

  /**
   * Word findMany
   */
  export type WordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * Filter, which Words to fetch.
     */
    where?: WordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Words to fetch.
     */
    orderBy?: WordOrderByWithRelationInput | WordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Words.
     */
    cursor?: WordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Words from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Words.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Words.
     */
    distinct?: WordScalarFieldEnum | WordScalarFieldEnum[]
  }

  /**
   * Word create
   */
  export type WordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * The data needed to create a Word.
     */
    data: XOR<WordCreateInput, WordUncheckedCreateInput>
  }

  /**
   * Word createMany
   */
  export type WordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Words.
     */
    data: WordCreateManyInput | WordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Word createManyAndReturn
   */
  export type WordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * The data used to create many Words.
     */
    data: WordCreateManyInput | WordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Word update
   */
  export type WordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * The data needed to update a Word.
     */
    data: XOR<WordUpdateInput, WordUncheckedUpdateInput>
    /**
     * Choose, which Word to update.
     */
    where: WordWhereUniqueInput
  }

  /**
   * Word updateMany
   */
  export type WordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Words.
     */
    data: XOR<WordUpdateManyMutationInput, WordUncheckedUpdateManyInput>
    /**
     * Filter which Words to update
     */
    where?: WordWhereInput
    /**
     * Limit how many Words to update.
     */
    limit?: number
  }

  /**
   * Word updateManyAndReturn
   */
  export type WordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * The data used to update Words.
     */
    data: XOR<WordUpdateManyMutationInput, WordUncheckedUpdateManyInput>
    /**
     * Filter which Words to update
     */
    where?: WordWhereInput
    /**
     * Limit how many Words to update.
     */
    limit?: number
  }

  /**
   * Word upsert
   */
  export type WordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * The filter to search for the Word to update in case it exists.
     */
    where: WordWhereUniqueInput
    /**
     * In case the Word found by the `where` argument doesn't exist, create a new Word with this data.
     */
    create: XOR<WordCreateInput, WordUncheckedCreateInput>
    /**
     * In case the Word was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WordUpdateInput, WordUncheckedUpdateInput>
  }

  /**
   * Word delete
   */
  export type WordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * Filter which Word to delete.
     */
    where: WordWhereUniqueInput
  }

  /**
   * Word deleteMany
   */
  export type WordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Words to delete
     */
    where?: WordWhereInput
    /**
     * Limit how many Words to delete.
     */
    limit?: number
  }

  /**
   * Word.dailyChallenges
   */
  export type Word$dailyChallengesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyChallenge
     */
    select?: DailyChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyChallenge
     */
    omit?: DailyChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyChallengeInclude<ExtArgs> | null
    where?: DailyChallengeWhereInput
    orderBy?: DailyChallengeOrderByWithRelationInput | DailyChallengeOrderByWithRelationInput[]
    cursor?: DailyChallengeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyChallengeScalarFieldEnum | DailyChallengeScalarFieldEnum[]
  }

  /**
   * Word without action
   */
  export type WordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
  }


  /**
   * Model Player
   */

  export type AggregatePlayer = {
    _count: PlayerCountAggregateOutputType | null
    _avg: PlayerAvgAggregateOutputType | null
    _sum: PlayerSumAggregateOutputType | null
    _min: PlayerMinAggregateOutputType | null
    _max: PlayerMaxAggregateOutputType | null
  }

  export type PlayerAvgAggregateOutputType = {
    id: number | null
  }

  export type PlayerSumAggregateOutputType = {
    id: number | null
  }

  export type PlayerMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
  }

  export type PlayerMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
  }

  export type PlayerCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    _all: number
  }


  export type PlayerAvgAggregateInputType = {
    id?: true
  }

  export type PlayerSumAggregateInputType = {
    id?: true
  }

  export type PlayerMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type PlayerMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type PlayerCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type PlayerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Player to aggregate.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Players
    **/
    _count?: true | PlayerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlayerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlayerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerMaxAggregateInputType
  }

  export type GetPlayerAggregateType<T extends PlayerAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayer[P]>
      : GetScalarType<T[P], AggregatePlayer[P]>
  }




  export type PlayerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerWhereInput
    orderBy?: PlayerOrderByWithAggregationInput | PlayerOrderByWithAggregationInput[]
    by: PlayerScalarFieldEnum[] | PlayerScalarFieldEnum
    having?: PlayerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerCountAggregateInputType | true
    _avg?: PlayerAvgAggregateInputType
    _sum?: PlayerSumAggregateInputType
    _min?: PlayerMinAggregateInputType
    _max?: PlayerMaxAggregateInputType
  }

  export type PlayerGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    _count: PlayerCountAggregateOutputType | null
    _avg: PlayerAvgAggregateOutputType | null
    _sum: PlayerSumAggregateOutputType | null
    _min: PlayerMinAggregateOutputType | null
    _max: PlayerMaxAggregateOutputType | null
  }

  type GetPlayerGroupByPayload<T extends PlayerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerGroupByOutputType[P]>
        }
      >
    >


  export type PlayerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    dailyEntries?: boolean | Player$dailyEntriesArgs<ExtArgs>
    arcadeScores?: boolean | Player$arcadeScoresArgs<ExtArgs>
    _count?: boolean | PlayerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["player"]>

  export type PlayerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["player"]>

  export type PlayerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["player"]>

  export type PlayerSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type PlayerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt", ExtArgs["result"]["player"]>
  export type PlayerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dailyEntries?: boolean | Player$dailyEntriesArgs<ExtArgs>
    arcadeScores?: boolean | Player$arcadeScoresArgs<ExtArgs>
    _count?: boolean | PlayerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlayerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PlayerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PlayerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Player"
    objects: {
      dailyEntries: Prisma.$DailyEntryPayload<ExtArgs>[]
      arcadeScores: Prisma.$ArcadeScorePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
    }, ExtArgs["result"]["player"]>
    composites: {}
  }

  type PlayerGetPayload<S extends boolean | null | undefined | PlayerDefaultArgs> = $Result.GetResult<Prisma.$PlayerPayload, S>

  type PlayerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlayerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayerCountAggregateInputType | true
    }

  export interface PlayerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Player'], meta: { name: 'Player' } }
    /**
     * Find zero or one Player that matches the filter.
     * @param {PlayerFindUniqueArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayerFindUniqueArgs>(args: SelectSubset<T, PlayerFindUniqueArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Player that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayerFindUniqueOrThrowArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayerFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Player that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindFirstArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayerFindFirstArgs>(args?: SelectSubset<T, PlayerFindFirstArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Player that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindFirstOrThrowArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayerFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayerFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Players
     * const players = await prisma.player.findMany()
     * 
     * // Get first 10 Players
     * const players = await prisma.player.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playerWithIdOnly = await prisma.player.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlayerFindManyArgs>(args?: SelectSubset<T, PlayerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Player.
     * @param {PlayerCreateArgs} args - Arguments to create a Player.
     * @example
     * // Create one Player
     * const Player = await prisma.player.create({
     *   data: {
     *     // ... data to create a Player
     *   }
     * })
     * 
     */
    create<T extends PlayerCreateArgs>(args: SelectSubset<T, PlayerCreateArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Players.
     * @param {PlayerCreateManyArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const player = await prisma.player.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayerCreateManyArgs>(args?: SelectSubset<T, PlayerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Players and returns the data saved in the database.
     * @param {PlayerCreateManyAndReturnArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const player = await prisma.player.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Players and only return the `id`
     * const playerWithIdOnly = await prisma.player.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlayerCreateManyAndReturnArgs>(args?: SelectSubset<T, PlayerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Player.
     * @param {PlayerDeleteArgs} args - Arguments to delete one Player.
     * @example
     * // Delete one Player
     * const Player = await prisma.player.delete({
     *   where: {
     *     // ... filter to delete one Player
     *   }
     * })
     * 
     */
    delete<T extends PlayerDeleteArgs>(args: SelectSubset<T, PlayerDeleteArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Player.
     * @param {PlayerUpdateArgs} args - Arguments to update one Player.
     * @example
     * // Update one Player
     * const player = await prisma.player.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayerUpdateArgs>(args: SelectSubset<T, PlayerUpdateArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Players.
     * @param {PlayerDeleteManyArgs} args - Arguments to filter Players to delete.
     * @example
     * // Delete a few Players
     * const { count } = await prisma.player.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayerDeleteManyArgs>(args?: SelectSubset<T, PlayerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Players
     * const player = await prisma.player.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayerUpdateManyArgs>(args: SelectSubset<T, PlayerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players and returns the data updated in the database.
     * @param {PlayerUpdateManyAndReturnArgs} args - Arguments to update many Players.
     * @example
     * // Update many Players
     * const player = await prisma.player.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Players and only return the `id`
     * const playerWithIdOnly = await prisma.player.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlayerUpdateManyAndReturnArgs>(args: SelectSubset<T, PlayerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Player.
     * @param {PlayerUpsertArgs} args - Arguments to update or create a Player.
     * @example
     * // Update or create a Player
     * const player = await prisma.player.upsert({
     *   create: {
     *     // ... data to create a Player
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Player we want to update
     *   }
     * })
     */
    upsert<T extends PlayerUpsertArgs>(args: SelectSubset<T, PlayerUpsertArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerCountArgs} args - Arguments to filter Players to count.
     * @example
     * // Count the number of Players
     * const count = await prisma.player.count({
     *   where: {
     *     // ... the filter for the Players we want to count
     *   }
     * })
    **/
    count<T extends PlayerCountArgs>(
      args?: Subset<T, PlayerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlayerAggregateArgs>(args: Subset<T, PlayerAggregateArgs>): Prisma.PrismaPromise<GetPlayerAggregateType<T>>

    /**
     * Group by Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerGroupByArgs} args - Group by arguments.
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
      T extends PlayerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayerGroupByArgs['orderBy'] }
        : { orderBy?: PlayerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlayerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Player model
   */
  readonly fields: PlayerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Player.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dailyEntries<T extends Player$dailyEntriesArgs<ExtArgs> = {}>(args?: Subset<T, Player$dailyEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    arcadeScores<T extends Player$arcadeScoresArgs<ExtArgs> = {}>(args?: Subset<T, Player$arcadeScoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArcadeScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Player model
   */
  interface PlayerFieldRefs {
    readonly id: FieldRef<"Player", 'Int'>
    readonly name: FieldRef<"Player", 'String'>
    readonly createdAt: FieldRef<"Player", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Player findUnique
   */
  export type PlayerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player findUniqueOrThrow
   */
  export type PlayerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player findFirst
   */
  export type PlayerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player findFirstOrThrow
   */
  export type PlayerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player findMany
   */
  export type PlayerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Players to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player create
   */
  export type PlayerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The data needed to create a Player.
     */
    data: XOR<PlayerCreateInput, PlayerUncheckedCreateInput>
  }

  /**
   * Player createMany
   */
  export type PlayerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Players.
     */
    data: PlayerCreateManyInput | PlayerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Player createManyAndReturn
   */
  export type PlayerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * The data used to create many Players.
     */
    data: PlayerCreateManyInput | PlayerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Player update
   */
  export type PlayerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The data needed to update a Player.
     */
    data: XOR<PlayerUpdateInput, PlayerUncheckedUpdateInput>
    /**
     * Choose, which Player to update.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player updateMany
   */
  export type PlayerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Players.
     */
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyInput>
    /**
     * Filter which Players to update
     */
    where?: PlayerWhereInput
    /**
     * Limit how many Players to update.
     */
    limit?: number
  }

  /**
   * Player updateManyAndReturn
   */
  export type PlayerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * The data used to update Players.
     */
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyInput>
    /**
     * Filter which Players to update
     */
    where?: PlayerWhereInput
    /**
     * Limit how many Players to update.
     */
    limit?: number
  }

  /**
   * Player upsert
   */
  export type PlayerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The filter to search for the Player to update in case it exists.
     */
    where: PlayerWhereUniqueInput
    /**
     * In case the Player found by the `where` argument doesn't exist, create a new Player with this data.
     */
    create: XOR<PlayerCreateInput, PlayerUncheckedCreateInput>
    /**
     * In case the Player was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayerUpdateInput, PlayerUncheckedUpdateInput>
  }

  /**
   * Player delete
   */
  export type PlayerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter which Player to delete.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player deleteMany
   */
  export type PlayerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Players to delete
     */
    where?: PlayerWhereInput
    /**
     * Limit how many Players to delete.
     */
    limit?: number
  }

  /**
   * Player.dailyEntries
   */
  export type Player$dailyEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyEntry
     */
    select?: DailyEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyEntry
     */
    omit?: DailyEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyEntryInclude<ExtArgs> | null
    where?: DailyEntryWhereInput
    orderBy?: DailyEntryOrderByWithRelationInput | DailyEntryOrderByWithRelationInput[]
    cursor?: DailyEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyEntryScalarFieldEnum | DailyEntryScalarFieldEnum[]
  }

  /**
   * Player.arcadeScores
   */
  export type Player$arcadeScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArcadeScore
     */
    select?: ArcadeScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArcadeScore
     */
    omit?: ArcadeScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArcadeScoreInclude<ExtArgs> | null
    where?: ArcadeScoreWhereInput
    orderBy?: ArcadeScoreOrderByWithRelationInput | ArcadeScoreOrderByWithRelationInput[]
    cursor?: ArcadeScoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArcadeScoreScalarFieldEnum | ArcadeScoreScalarFieldEnum[]
  }

  /**
   * Player without action
   */
  export type PlayerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
  }


  /**
   * Model DailyChallenge
   */

  export type AggregateDailyChallenge = {
    _count: DailyChallengeCountAggregateOutputType | null
    _avg: DailyChallengeAvgAggregateOutputType | null
    _sum: DailyChallengeSumAggregateOutputType | null
    _min: DailyChallengeMinAggregateOutputType | null
    _max: DailyChallengeMaxAggregateOutputType | null
  }

  export type DailyChallengeAvgAggregateOutputType = {
    id: number | null
    wordId: number | null
  }

  export type DailyChallengeSumAggregateOutputType = {
    id: number | null
    wordId: number | null
  }

  export type DailyChallengeMinAggregateOutputType = {
    id: number | null
    date: string | null
    wordId: number | null
  }

  export type DailyChallengeMaxAggregateOutputType = {
    id: number | null
    date: string | null
    wordId: number | null
  }

  export type DailyChallengeCountAggregateOutputType = {
    id: number
    date: number
    wordId: number
    _all: number
  }


  export type DailyChallengeAvgAggregateInputType = {
    id?: true
    wordId?: true
  }

  export type DailyChallengeSumAggregateInputType = {
    id?: true
    wordId?: true
  }

  export type DailyChallengeMinAggregateInputType = {
    id?: true
    date?: true
    wordId?: true
  }

  export type DailyChallengeMaxAggregateInputType = {
    id?: true
    date?: true
    wordId?: true
  }

  export type DailyChallengeCountAggregateInputType = {
    id?: true
    date?: true
    wordId?: true
    _all?: true
  }

  export type DailyChallengeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyChallenge to aggregate.
     */
    where?: DailyChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyChallenges to fetch.
     */
    orderBy?: DailyChallengeOrderByWithRelationInput | DailyChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyChallenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyChallenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyChallenges
    **/
    _count?: true | DailyChallengeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DailyChallengeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DailyChallengeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyChallengeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyChallengeMaxAggregateInputType
  }

  export type GetDailyChallengeAggregateType<T extends DailyChallengeAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyChallenge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyChallenge[P]>
      : GetScalarType<T[P], AggregateDailyChallenge[P]>
  }




  export type DailyChallengeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyChallengeWhereInput
    orderBy?: DailyChallengeOrderByWithAggregationInput | DailyChallengeOrderByWithAggregationInput[]
    by: DailyChallengeScalarFieldEnum[] | DailyChallengeScalarFieldEnum
    having?: DailyChallengeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyChallengeCountAggregateInputType | true
    _avg?: DailyChallengeAvgAggregateInputType
    _sum?: DailyChallengeSumAggregateInputType
    _min?: DailyChallengeMinAggregateInputType
    _max?: DailyChallengeMaxAggregateInputType
  }

  export type DailyChallengeGroupByOutputType = {
    id: number
    date: string
    wordId: number
    _count: DailyChallengeCountAggregateOutputType | null
    _avg: DailyChallengeAvgAggregateOutputType | null
    _sum: DailyChallengeSumAggregateOutputType | null
    _min: DailyChallengeMinAggregateOutputType | null
    _max: DailyChallengeMaxAggregateOutputType | null
  }

  type GetDailyChallengeGroupByPayload<T extends DailyChallengeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyChallengeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyChallengeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyChallengeGroupByOutputType[P]>
            : GetScalarType<T[P], DailyChallengeGroupByOutputType[P]>
        }
      >
    >


  export type DailyChallengeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    wordId?: boolean
    word?: boolean | WordDefaultArgs<ExtArgs>
    entries?: boolean | DailyChallenge$entriesArgs<ExtArgs>
    _count?: boolean | DailyChallengeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyChallenge"]>

  export type DailyChallengeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    wordId?: boolean
    word?: boolean | WordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyChallenge"]>

  export type DailyChallengeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    wordId?: boolean
    word?: boolean | WordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyChallenge"]>

  export type DailyChallengeSelectScalar = {
    id?: boolean
    date?: boolean
    wordId?: boolean
  }

  export type DailyChallengeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "wordId", ExtArgs["result"]["dailyChallenge"]>
  export type DailyChallengeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    word?: boolean | WordDefaultArgs<ExtArgs>
    entries?: boolean | DailyChallenge$entriesArgs<ExtArgs>
    _count?: boolean | DailyChallengeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DailyChallengeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    word?: boolean | WordDefaultArgs<ExtArgs>
  }
  export type DailyChallengeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    word?: boolean | WordDefaultArgs<ExtArgs>
  }

  export type $DailyChallengePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyChallenge"
    objects: {
      word: Prisma.$WordPayload<ExtArgs>
      entries: Prisma.$DailyEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: string
      wordId: number
    }, ExtArgs["result"]["dailyChallenge"]>
    composites: {}
  }

  type DailyChallengeGetPayload<S extends boolean | null | undefined | DailyChallengeDefaultArgs> = $Result.GetResult<Prisma.$DailyChallengePayload, S>

  type DailyChallengeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DailyChallengeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DailyChallengeCountAggregateInputType | true
    }

  export interface DailyChallengeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyChallenge'], meta: { name: 'DailyChallenge' } }
    /**
     * Find zero or one DailyChallenge that matches the filter.
     * @param {DailyChallengeFindUniqueArgs} args - Arguments to find a DailyChallenge
     * @example
     * // Get one DailyChallenge
     * const dailyChallenge = await prisma.dailyChallenge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyChallengeFindUniqueArgs>(args: SelectSubset<T, DailyChallengeFindUniqueArgs<ExtArgs>>): Prisma__DailyChallengeClient<$Result.GetResult<Prisma.$DailyChallengePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DailyChallenge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DailyChallengeFindUniqueOrThrowArgs} args - Arguments to find a DailyChallenge
     * @example
     * // Get one DailyChallenge
     * const dailyChallenge = await prisma.dailyChallenge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyChallengeFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyChallengeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyChallengeClient<$Result.GetResult<Prisma.$DailyChallengePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyChallenge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyChallengeFindFirstArgs} args - Arguments to find a DailyChallenge
     * @example
     * // Get one DailyChallenge
     * const dailyChallenge = await prisma.dailyChallenge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyChallengeFindFirstArgs>(args?: SelectSubset<T, DailyChallengeFindFirstArgs<ExtArgs>>): Prisma__DailyChallengeClient<$Result.GetResult<Prisma.$DailyChallengePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyChallenge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyChallengeFindFirstOrThrowArgs} args - Arguments to find a DailyChallenge
     * @example
     * // Get one DailyChallenge
     * const dailyChallenge = await prisma.dailyChallenge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyChallengeFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyChallengeFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyChallengeClient<$Result.GetResult<Prisma.$DailyChallengePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DailyChallenges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyChallengeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyChallenges
     * const dailyChallenges = await prisma.dailyChallenge.findMany()
     * 
     * // Get first 10 DailyChallenges
     * const dailyChallenges = await prisma.dailyChallenge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyChallengeWithIdOnly = await prisma.dailyChallenge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyChallengeFindManyArgs>(args?: SelectSubset<T, DailyChallengeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyChallengePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DailyChallenge.
     * @param {DailyChallengeCreateArgs} args - Arguments to create a DailyChallenge.
     * @example
     * // Create one DailyChallenge
     * const DailyChallenge = await prisma.dailyChallenge.create({
     *   data: {
     *     // ... data to create a DailyChallenge
     *   }
     * })
     * 
     */
    create<T extends DailyChallengeCreateArgs>(args: SelectSubset<T, DailyChallengeCreateArgs<ExtArgs>>): Prisma__DailyChallengeClient<$Result.GetResult<Prisma.$DailyChallengePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DailyChallenges.
     * @param {DailyChallengeCreateManyArgs} args - Arguments to create many DailyChallenges.
     * @example
     * // Create many DailyChallenges
     * const dailyChallenge = await prisma.dailyChallenge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyChallengeCreateManyArgs>(args?: SelectSubset<T, DailyChallengeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DailyChallenges and returns the data saved in the database.
     * @param {DailyChallengeCreateManyAndReturnArgs} args - Arguments to create many DailyChallenges.
     * @example
     * // Create many DailyChallenges
     * const dailyChallenge = await prisma.dailyChallenge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DailyChallenges and only return the `id`
     * const dailyChallengeWithIdOnly = await prisma.dailyChallenge.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DailyChallengeCreateManyAndReturnArgs>(args?: SelectSubset<T, DailyChallengeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyChallengePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DailyChallenge.
     * @param {DailyChallengeDeleteArgs} args - Arguments to delete one DailyChallenge.
     * @example
     * // Delete one DailyChallenge
     * const DailyChallenge = await prisma.dailyChallenge.delete({
     *   where: {
     *     // ... filter to delete one DailyChallenge
     *   }
     * })
     * 
     */
    delete<T extends DailyChallengeDeleteArgs>(args: SelectSubset<T, DailyChallengeDeleteArgs<ExtArgs>>): Prisma__DailyChallengeClient<$Result.GetResult<Prisma.$DailyChallengePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DailyChallenge.
     * @param {DailyChallengeUpdateArgs} args - Arguments to update one DailyChallenge.
     * @example
     * // Update one DailyChallenge
     * const dailyChallenge = await prisma.dailyChallenge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyChallengeUpdateArgs>(args: SelectSubset<T, DailyChallengeUpdateArgs<ExtArgs>>): Prisma__DailyChallengeClient<$Result.GetResult<Prisma.$DailyChallengePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DailyChallenges.
     * @param {DailyChallengeDeleteManyArgs} args - Arguments to filter DailyChallenges to delete.
     * @example
     * // Delete a few DailyChallenges
     * const { count } = await prisma.dailyChallenge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyChallengeDeleteManyArgs>(args?: SelectSubset<T, DailyChallengeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyChallenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyChallengeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyChallenges
     * const dailyChallenge = await prisma.dailyChallenge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyChallengeUpdateManyArgs>(args: SelectSubset<T, DailyChallengeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyChallenges and returns the data updated in the database.
     * @param {DailyChallengeUpdateManyAndReturnArgs} args - Arguments to update many DailyChallenges.
     * @example
     * // Update many DailyChallenges
     * const dailyChallenge = await prisma.dailyChallenge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DailyChallenges and only return the `id`
     * const dailyChallengeWithIdOnly = await prisma.dailyChallenge.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DailyChallengeUpdateManyAndReturnArgs>(args: SelectSubset<T, DailyChallengeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyChallengePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DailyChallenge.
     * @param {DailyChallengeUpsertArgs} args - Arguments to update or create a DailyChallenge.
     * @example
     * // Update or create a DailyChallenge
     * const dailyChallenge = await prisma.dailyChallenge.upsert({
     *   create: {
     *     // ... data to create a DailyChallenge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyChallenge we want to update
     *   }
     * })
     */
    upsert<T extends DailyChallengeUpsertArgs>(args: SelectSubset<T, DailyChallengeUpsertArgs<ExtArgs>>): Prisma__DailyChallengeClient<$Result.GetResult<Prisma.$DailyChallengePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DailyChallenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyChallengeCountArgs} args - Arguments to filter DailyChallenges to count.
     * @example
     * // Count the number of DailyChallenges
     * const count = await prisma.dailyChallenge.count({
     *   where: {
     *     // ... the filter for the DailyChallenges we want to count
     *   }
     * })
    **/
    count<T extends DailyChallengeCountArgs>(
      args?: Subset<T, DailyChallengeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyChallengeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyChallenge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyChallengeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DailyChallengeAggregateArgs>(args: Subset<T, DailyChallengeAggregateArgs>): Prisma.PrismaPromise<GetDailyChallengeAggregateType<T>>

    /**
     * Group by DailyChallenge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyChallengeGroupByArgs} args - Group by arguments.
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
      T extends DailyChallengeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyChallengeGroupByArgs['orderBy'] }
        : { orderBy?: DailyChallengeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DailyChallengeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyChallengeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyChallenge model
   */
  readonly fields: DailyChallengeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyChallenge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyChallengeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    word<T extends WordDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WordDefaultArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    entries<T extends DailyChallenge$entriesArgs<ExtArgs> = {}>(args?: Subset<T, DailyChallenge$entriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the DailyChallenge model
   */
  interface DailyChallengeFieldRefs {
    readonly id: FieldRef<"DailyChallenge", 'Int'>
    readonly date: FieldRef<"DailyChallenge", 'String'>
    readonly wordId: FieldRef<"DailyChallenge", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * DailyChallenge findUnique
   */
  export type DailyChallengeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyChallenge
     */
    select?: DailyChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyChallenge
     */
    omit?: DailyChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyChallengeInclude<ExtArgs> | null
    /**
     * Filter, which DailyChallenge to fetch.
     */
    where: DailyChallengeWhereUniqueInput
  }

  /**
   * DailyChallenge findUniqueOrThrow
   */
  export type DailyChallengeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyChallenge
     */
    select?: DailyChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyChallenge
     */
    omit?: DailyChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyChallengeInclude<ExtArgs> | null
    /**
     * Filter, which DailyChallenge to fetch.
     */
    where: DailyChallengeWhereUniqueInput
  }

  /**
   * DailyChallenge findFirst
   */
  export type DailyChallengeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyChallenge
     */
    select?: DailyChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyChallenge
     */
    omit?: DailyChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyChallengeInclude<ExtArgs> | null
    /**
     * Filter, which DailyChallenge to fetch.
     */
    where?: DailyChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyChallenges to fetch.
     */
    orderBy?: DailyChallengeOrderByWithRelationInput | DailyChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyChallenges.
     */
    cursor?: DailyChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyChallenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyChallenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyChallenges.
     */
    distinct?: DailyChallengeScalarFieldEnum | DailyChallengeScalarFieldEnum[]
  }

  /**
   * DailyChallenge findFirstOrThrow
   */
  export type DailyChallengeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyChallenge
     */
    select?: DailyChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyChallenge
     */
    omit?: DailyChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyChallengeInclude<ExtArgs> | null
    /**
     * Filter, which DailyChallenge to fetch.
     */
    where?: DailyChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyChallenges to fetch.
     */
    orderBy?: DailyChallengeOrderByWithRelationInput | DailyChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyChallenges.
     */
    cursor?: DailyChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyChallenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyChallenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyChallenges.
     */
    distinct?: DailyChallengeScalarFieldEnum | DailyChallengeScalarFieldEnum[]
  }

  /**
   * DailyChallenge findMany
   */
  export type DailyChallengeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyChallenge
     */
    select?: DailyChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyChallenge
     */
    omit?: DailyChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyChallengeInclude<ExtArgs> | null
    /**
     * Filter, which DailyChallenges to fetch.
     */
    where?: DailyChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyChallenges to fetch.
     */
    orderBy?: DailyChallengeOrderByWithRelationInput | DailyChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyChallenges.
     */
    cursor?: DailyChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyChallenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyChallenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyChallenges.
     */
    distinct?: DailyChallengeScalarFieldEnum | DailyChallengeScalarFieldEnum[]
  }

  /**
   * DailyChallenge create
   */
  export type DailyChallengeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyChallenge
     */
    select?: DailyChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyChallenge
     */
    omit?: DailyChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyChallengeInclude<ExtArgs> | null
    /**
     * The data needed to create a DailyChallenge.
     */
    data: XOR<DailyChallengeCreateInput, DailyChallengeUncheckedCreateInput>
  }

  /**
   * DailyChallenge createMany
   */
  export type DailyChallengeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyChallenges.
     */
    data: DailyChallengeCreateManyInput | DailyChallengeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyChallenge createManyAndReturn
   */
  export type DailyChallengeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyChallenge
     */
    select?: DailyChallengeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyChallenge
     */
    omit?: DailyChallengeOmit<ExtArgs> | null
    /**
     * The data used to create many DailyChallenges.
     */
    data: DailyChallengeCreateManyInput | DailyChallengeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyChallengeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyChallenge update
   */
  export type DailyChallengeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyChallenge
     */
    select?: DailyChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyChallenge
     */
    omit?: DailyChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyChallengeInclude<ExtArgs> | null
    /**
     * The data needed to update a DailyChallenge.
     */
    data: XOR<DailyChallengeUpdateInput, DailyChallengeUncheckedUpdateInput>
    /**
     * Choose, which DailyChallenge to update.
     */
    where: DailyChallengeWhereUniqueInput
  }

  /**
   * DailyChallenge updateMany
   */
  export type DailyChallengeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyChallenges.
     */
    data: XOR<DailyChallengeUpdateManyMutationInput, DailyChallengeUncheckedUpdateManyInput>
    /**
     * Filter which DailyChallenges to update
     */
    where?: DailyChallengeWhereInput
    /**
     * Limit how many DailyChallenges to update.
     */
    limit?: number
  }

  /**
   * DailyChallenge updateManyAndReturn
   */
  export type DailyChallengeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyChallenge
     */
    select?: DailyChallengeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyChallenge
     */
    omit?: DailyChallengeOmit<ExtArgs> | null
    /**
     * The data used to update DailyChallenges.
     */
    data: XOR<DailyChallengeUpdateManyMutationInput, DailyChallengeUncheckedUpdateManyInput>
    /**
     * Filter which DailyChallenges to update
     */
    where?: DailyChallengeWhereInput
    /**
     * Limit how many DailyChallenges to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyChallengeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyChallenge upsert
   */
  export type DailyChallengeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyChallenge
     */
    select?: DailyChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyChallenge
     */
    omit?: DailyChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyChallengeInclude<ExtArgs> | null
    /**
     * The filter to search for the DailyChallenge to update in case it exists.
     */
    where: DailyChallengeWhereUniqueInput
    /**
     * In case the DailyChallenge found by the `where` argument doesn't exist, create a new DailyChallenge with this data.
     */
    create: XOR<DailyChallengeCreateInput, DailyChallengeUncheckedCreateInput>
    /**
     * In case the DailyChallenge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyChallengeUpdateInput, DailyChallengeUncheckedUpdateInput>
  }

  /**
   * DailyChallenge delete
   */
  export type DailyChallengeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyChallenge
     */
    select?: DailyChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyChallenge
     */
    omit?: DailyChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyChallengeInclude<ExtArgs> | null
    /**
     * Filter which DailyChallenge to delete.
     */
    where: DailyChallengeWhereUniqueInput
  }

  /**
   * DailyChallenge deleteMany
   */
  export type DailyChallengeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyChallenges to delete
     */
    where?: DailyChallengeWhereInput
    /**
     * Limit how many DailyChallenges to delete.
     */
    limit?: number
  }

  /**
   * DailyChallenge.entries
   */
  export type DailyChallenge$entriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyEntry
     */
    select?: DailyEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyEntry
     */
    omit?: DailyEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyEntryInclude<ExtArgs> | null
    where?: DailyEntryWhereInput
    orderBy?: DailyEntryOrderByWithRelationInput | DailyEntryOrderByWithRelationInput[]
    cursor?: DailyEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyEntryScalarFieldEnum | DailyEntryScalarFieldEnum[]
  }

  /**
   * DailyChallenge without action
   */
  export type DailyChallengeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyChallenge
     */
    select?: DailyChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyChallenge
     */
    omit?: DailyChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyChallengeInclude<ExtArgs> | null
  }


  /**
   * Model DailyEntry
   */

  export type AggregateDailyEntry = {
    _count: DailyEntryCountAggregateOutputType | null
    _avg: DailyEntryAvgAggregateOutputType | null
    _sum: DailyEntrySumAggregateOutputType | null
    _min: DailyEntryMinAggregateOutputType | null
    _max: DailyEntryMaxAggregateOutputType | null
  }

  export type DailyEntryAvgAggregateOutputType = {
    id: number | null
    playerId: number | null
    challengeId: number | null
    attemptsUsed: number | null
    streak: number | null
  }

  export type DailyEntrySumAggregateOutputType = {
    id: number | null
    playerId: number | null
    challengeId: number | null
    attemptsUsed: number | null
    streak: number | null
  }

  export type DailyEntryMinAggregateOutputType = {
    id: number | null
    playerId: number | null
    challengeId: number | null
    won: boolean | null
    firstTry: boolean | null
    attemptsUsed: number | null
    streak: number | null
    createdAt: Date | null
  }

  export type DailyEntryMaxAggregateOutputType = {
    id: number | null
    playerId: number | null
    challengeId: number | null
    won: boolean | null
    firstTry: boolean | null
    attemptsUsed: number | null
    streak: number | null
    createdAt: Date | null
  }

  export type DailyEntryCountAggregateOutputType = {
    id: number
    playerId: number
    challengeId: number
    won: number
    firstTry: number
    attemptsUsed: number
    streak: number
    createdAt: number
    _all: number
  }


  export type DailyEntryAvgAggregateInputType = {
    id?: true
    playerId?: true
    challengeId?: true
    attemptsUsed?: true
    streak?: true
  }

  export type DailyEntrySumAggregateInputType = {
    id?: true
    playerId?: true
    challengeId?: true
    attemptsUsed?: true
    streak?: true
  }

  export type DailyEntryMinAggregateInputType = {
    id?: true
    playerId?: true
    challengeId?: true
    won?: true
    firstTry?: true
    attemptsUsed?: true
    streak?: true
    createdAt?: true
  }

  export type DailyEntryMaxAggregateInputType = {
    id?: true
    playerId?: true
    challengeId?: true
    won?: true
    firstTry?: true
    attemptsUsed?: true
    streak?: true
    createdAt?: true
  }

  export type DailyEntryCountAggregateInputType = {
    id?: true
    playerId?: true
    challengeId?: true
    won?: true
    firstTry?: true
    attemptsUsed?: true
    streak?: true
    createdAt?: true
    _all?: true
  }

  export type DailyEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyEntry to aggregate.
     */
    where?: DailyEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyEntries to fetch.
     */
    orderBy?: DailyEntryOrderByWithRelationInput | DailyEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyEntries
    **/
    _count?: true | DailyEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DailyEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DailyEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyEntryMaxAggregateInputType
  }

  export type GetDailyEntryAggregateType<T extends DailyEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyEntry[P]>
      : GetScalarType<T[P], AggregateDailyEntry[P]>
  }




  export type DailyEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyEntryWhereInput
    orderBy?: DailyEntryOrderByWithAggregationInput | DailyEntryOrderByWithAggregationInput[]
    by: DailyEntryScalarFieldEnum[] | DailyEntryScalarFieldEnum
    having?: DailyEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyEntryCountAggregateInputType | true
    _avg?: DailyEntryAvgAggregateInputType
    _sum?: DailyEntrySumAggregateInputType
    _min?: DailyEntryMinAggregateInputType
    _max?: DailyEntryMaxAggregateInputType
  }

  export type DailyEntryGroupByOutputType = {
    id: number
    playerId: number
    challengeId: number
    won: boolean
    firstTry: boolean
    attemptsUsed: number
    streak: number
    createdAt: Date
    _count: DailyEntryCountAggregateOutputType | null
    _avg: DailyEntryAvgAggregateOutputType | null
    _sum: DailyEntrySumAggregateOutputType | null
    _min: DailyEntryMinAggregateOutputType | null
    _max: DailyEntryMaxAggregateOutputType | null
  }

  type GetDailyEntryGroupByPayload<T extends DailyEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyEntryGroupByOutputType[P]>
            : GetScalarType<T[P], DailyEntryGroupByOutputType[P]>
        }
      >
    >


  export type DailyEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    challengeId?: boolean
    won?: boolean
    firstTry?: boolean
    attemptsUsed?: boolean
    streak?: boolean
    createdAt?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
    challenge?: boolean | DailyChallengeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyEntry"]>

  export type DailyEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    challengeId?: boolean
    won?: boolean
    firstTry?: boolean
    attemptsUsed?: boolean
    streak?: boolean
    createdAt?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
    challenge?: boolean | DailyChallengeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyEntry"]>

  export type DailyEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    challengeId?: boolean
    won?: boolean
    firstTry?: boolean
    attemptsUsed?: boolean
    streak?: boolean
    createdAt?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
    challenge?: boolean | DailyChallengeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyEntry"]>

  export type DailyEntrySelectScalar = {
    id?: boolean
    playerId?: boolean
    challengeId?: boolean
    won?: boolean
    firstTry?: boolean
    attemptsUsed?: boolean
    streak?: boolean
    createdAt?: boolean
  }

  export type DailyEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "playerId" | "challengeId" | "won" | "firstTry" | "attemptsUsed" | "streak" | "createdAt", ExtArgs["result"]["dailyEntry"]>
  export type DailyEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
    challenge?: boolean | DailyChallengeDefaultArgs<ExtArgs>
  }
  export type DailyEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
    challenge?: boolean | DailyChallengeDefaultArgs<ExtArgs>
  }
  export type DailyEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
    challenge?: boolean | DailyChallengeDefaultArgs<ExtArgs>
  }

  export type $DailyEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyEntry"
    objects: {
      player: Prisma.$PlayerPayload<ExtArgs>
      challenge: Prisma.$DailyChallengePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      playerId: number
      challengeId: number
      won: boolean
      firstTry: boolean
      attemptsUsed: number
      streak: number
      createdAt: Date
    }, ExtArgs["result"]["dailyEntry"]>
    composites: {}
  }

  type DailyEntryGetPayload<S extends boolean | null | undefined | DailyEntryDefaultArgs> = $Result.GetResult<Prisma.$DailyEntryPayload, S>

  type DailyEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DailyEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DailyEntryCountAggregateInputType | true
    }

  export interface DailyEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyEntry'], meta: { name: 'DailyEntry' } }
    /**
     * Find zero or one DailyEntry that matches the filter.
     * @param {DailyEntryFindUniqueArgs} args - Arguments to find a DailyEntry
     * @example
     * // Get one DailyEntry
     * const dailyEntry = await prisma.dailyEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyEntryFindUniqueArgs>(args: SelectSubset<T, DailyEntryFindUniqueArgs<ExtArgs>>): Prisma__DailyEntryClient<$Result.GetResult<Prisma.$DailyEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DailyEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DailyEntryFindUniqueOrThrowArgs} args - Arguments to find a DailyEntry
     * @example
     * // Get one DailyEntry
     * const dailyEntry = await prisma.dailyEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyEntryClient<$Result.GetResult<Prisma.$DailyEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyEntryFindFirstArgs} args - Arguments to find a DailyEntry
     * @example
     * // Get one DailyEntry
     * const dailyEntry = await prisma.dailyEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyEntryFindFirstArgs>(args?: SelectSubset<T, DailyEntryFindFirstArgs<ExtArgs>>): Prisma__DailyEntryClient<$Result.GetResult<Prisma.$DailyEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyEntryFindFirstOrThrowArgs} args - Arguments to find a DailyEntry
     * @example
     * // Get one DailyEntry
     * const dailyEntry = await prisma.dailyEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyEntryClient<$Result.GetResult<Prisma.$DailyEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DailyEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyEntries
     * const dailyEntries = await prisma.dailyEntry.findMany()
     * 
     * // Get first 10 DailyEntries
     * const dailyEntries = await prisma.dailyEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyEntryWithIdOnly = await prisma.dailyEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyEntryFindManyArgs>(args?: SelectSubset<T, DailyEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DailyEntry.
     * @param {DailyEntryCreateArgs} args - Arguments to create a DailyEntry.
     * @example
     * // Create one DailyEntry
     * const DailyEntry = await prisma.dailyEntry.create({
     *   data: {
     *     // ... data to create a DailyEntry
     *   }
     * })
     * 
     */
    create<T extends DailyEntryCreateArgs>(args: SelectSubset<T, DailyEntryCreateArgs<ExtArgs>>): Prisma__DailyEntryClient<$Result.GetResult<Prisma.$DailyEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DailyEntries.
     * @param {DailyEntryCreateManyArgs} args - Arguments to create many DailyEntries.
     * @example
     * // Create many DailyEntries
     * const dailyEntry = await prisma.dailyEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyEntryCreateManyArgs>(args?: SelectSubset<T, DailyEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DailyEntries and returns the data saved in the database.
     * @param {DailyEntryCreateManyAndReturnArgs} args - Arguments to create many DailyEntries.
     * @example
     * // Create many DailyEntries
     * const dailyEntry = await prisma.dailyEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DailyEntries and only return the `id`
     * const dailyEntryWithIdOnly = await prisma.dailyEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DailyEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, DailyEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DailyEntry.
     * @param {DailyEntryDeleteArgs} args - Arguments to delete one DailyEntry.
     * @example
     * // Delete one DailyEntry
     * const DailyEntry = await prisma.dailyEntry.delete({
     *   where: {
     *     // ... filter to delete one DailyEntry
     *   }
     * })
     * 
     */
    delete<T extends DailyEntryDeleteArgs>(args: SelectSubset<T, DailyEntryDeleteArgs<ExtArgs>>): Prisma__DailyEntryClient<$Result.GetResult<Prisma.$DailyEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DailyEntry.
     * @param {DailyEntryUpdateArgs} args - Arguments to update one DailyEntry.
     * @example
     * // Update one DailyEntry
     * const dailyEntry = await prisma.dailyEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyEntryUpdateArgs>(args: SelectSubset<T, DailyEntryUpdateArgs<ExtArgs>>): Prisma__DailyEntryClient<$Result.GetResult<Prisma.$DailyEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DailyEntries.
     * @param {DailyEntryDeleteManyArgs} args - Arguments to filter DailyEntries to delete.
     * @example
     * // Delete a few DailyEntries
     * const { count } = await prisma.dailyEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyEntryDeleteManyArgs>(args?: SelectSubset<T, DailyEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyEntries
     * const dailyEntry = await prisma.dailyEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyEntryUpdateManyArgs>(args: SelectSubset<T, DailyEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyEntries and returns the data updated in the database.
     * @param {DailyEntryUpdateManyAndReturnArgs} args - Arguments to update many DailyEntries.
     * @example
     * // Update many DailyEntries
     * const dailyEntry = await prisma.dailyEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DailyEntries and only return the `id`
     * const dailyEntryWithIdOnly = await prisma.dailyEntry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DailyEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, DailyEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DailyEntry.
     * @param {DailyEntryUpsertArgs} args - Arguments to update or create a DailyEntry.
     * @example
     * // Update or create a DailyEntry
     * const dailyEntry = await prisma.dailyEntry.upsert({
     *   create: {
     *     // ... data to create a DailyEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyEntry we want to update
     *   }
     * })
     */
    upsert<T extends DailyEntryUpsertArgs>(args: SelectSubset<T, DailyEntryUpsertArgs<ExtArgs>>): Prisma__DailyEntryClient<$Result.GetResult<Prisma.$DailyEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DailyEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyEntryCountArgs} args - Arguments to filter DailyEntries to count.
     * @example
     * // Count the number of DailyEntries
     * const count = await prisma.dailyEntry.count({
     *   where: {
     *     // ... the filter for the DailyEntries we want to count
     *   }
     * })
    **/
    count<T extends DailyEntryCountArgs>(
      args?: Subset<T, DailyEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DailyEntryAggregateArgs>(args: Subset<T, DailyEntryAggregateArgs>): Prisma.PrismaPromise<GetDailyEntryAggregateType<T>>

    /**
     * Group by DailyEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyEntryGroupByArgs} args - Group by arguments.
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
      T extends DailyEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyEntryGroupByArgs['orderBy'] }
        : { orderBy?: DailyEntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DailyEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyEntry model
   */
  readonly fields: DailyEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    player<T extends PlayerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlayerDefaultArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    challenge<T extends DailyChallengeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DailyChallengeDefaultArgs<ExtArgs>>): Prisma__DailyChallengeClient<$Result.GetResult<Prisma.$DailyChallengePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DailyEntry model
   */
  interface DailyEntryFieldRefs {
    readonly id: FieldRef<"DailyEntry", 'Int'>
    readonly playerId: FieldRef<"DailyEntry", 'Int'>
    readonly challengeId: FieldRef<"DailyEntry", 'Int'>
    readonly won: FieldRef<"DailyEntry", 'Boolean'>
    readonly firstTry: FieldRef<"DailyEntry", 'Boolean'>
    readonly attemptsUsed: FieldRef<"DailyEntry", 'Int'>
    readonly streak: FieldRef<"DailyEntry", 'Int'>
    readonly createdAt: FieldRef<"DailyEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DailyEntry findUnique
   */
  export type DailyEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyEntry
     */
    select?: DailyEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyEntry
     */
    omit?: DailyEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyEntryInclude<ExtArgs> | null
    /**
     * Filter, which DailyEntry to fetch.
     */
    where: DailyEntryWhereUniqueInput
  }

  /**
   * DailyEntry findUniqueOrThrow
   */
  export type DailyEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyEntry
     */
    select?: DailyEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyEntry
     */
    omit?: DailyEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyEntryInclude<ExtArgs> | null
    /**
     * Filter, which DailyEntry to fetch.
     */
    where: DailyEntryWhereUniqueInput
  }

  /**
   * DailyEntry findFirst
   */
  export type DailyEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyEntry
     */
    select?: DailyEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyEntry
     */
    omit?: DailyEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyEntryInclude<ExtArgs> | null
    /**
     * Filter, which DailyEntry to fetch.
     */
    where?: DailyEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyEntries to fetch.
     */
    orderBy?: DailyEntryOrderByWithRelationInput | DailyEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyEntries.
     */
    cursor?: DailyEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyEntries.
     */
    distinct?: DailyEntryScalarFieldEnum | DailyEntryScalarFieldEnum[]
  }

  /**
   * DailyEntry findFirstOrThrow
   */
  export type DailyEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyEntry
     */
    select?: DailyEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyEntry
     */
    omit?: DailyEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyEntryInclude<ExtArgs> | null
    /**
     * Filter, which DailyEntry to fetch.
     */
    where?: DailyEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyEntries to fetch.
     */
    orderBy?: DailyEntryOrderByWithRelationInput | DailyEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyEntries.
     */
    cursor?: DailyEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyEntries.
     */
    distinct?: DailyEntryScalarFieldEnum | DailyEntryScalarFieldEnum[]
  }

  /**
   * DailyEntry findMany
   */
  export type DailyEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyEntry
     */
    select?: DailyEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyEntry
     */
    omit?: DailyEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyEntryInclude<ExtArgs> | null
    /**
     * Filter, which DailyEntries to fetch.
     */
    where?: DailyEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyEntries to fetch.
     */
    orderBy?: DailyEntryOrderByWithRelationInput | DailyEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyEntries.
     */
    cursor?: DailyEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyEntries.
     */
    distinct?: DailyEntryScalarFieldEnum | DailyEntryScalarFieldEnum[]
  }

  /**
   * DailyEntry create
   */
  export type DailyEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyEntry
     */
    select?: DailyEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyEntry
     */
    omit?: DailyEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a DailyEntry.
     */
    data: XOR<DailyEntryCreateInput, DailyEntryUncheckedCreateInput>
  }

  /**
   * DailyEntry createMany
   */
  export type DailyEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyEntries.
     */
    data: DailyEntryCreateManyInput | DailyEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyEntry createManyAndReturn
   */
  export type DailyEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyEntry
     */
    select?: DailyEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyEntry
     */
    omit?: DailyEntryOmit<ExtArgs> | null
    /**
     * The data used to create many DailyEntries.
     */
    data: DailyEntryCreateManyInput | DailyEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyEntry update
   */
  export type DailyEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyEntry
     */
    select?: DailyEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyEntry
     */
    omit?: DailyEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a DailyEntry.
     */
    data: XOR<DailyEntryUpdateInput, DailyEntryUncheckedUpdateInput>
    /**
     * Choose, which DailyEntry to update.
     */
    where: DailyEntryWhereUniqueInput
  }

  /**
   * DailyEntry updateMany
   */
  export type DailyEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyEntries.
     */
    data: XOR<DailyEntryUpdateManyMutationInput, DailyEntryUncheckedUpdateManyInput>
    /**
     * Filter which DailyEntries to update
     */
    where?: DailyEntryWhereInput
    /**
     * Limit how many DailyEntries to update.
     */
    limit?: number
  }

  /**
   * DailyEntry updateManyAndReturn
   */
  export type DailyEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyEntry
     */
    select?: DailyEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyEntry
     */
    omit?: DailyEntryOmit<ExtArgs> | null
    /**
     * The data used to update DailyEntries.
     */
    data: XOR<DailyEntryUpdateManyMutationInput, DailyEntryUncheckedUpdateManyInput>
    /**
     * Filter which DailyEntries to update
     */
    where?: DailyEntryWhereInput
    /**
     * Limit how many DailyEntries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyEntryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyEntry upsert
   */
  export type DailyEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyEntry
     */
    select?: DailyEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyEntry
     */
    omit?: DailyEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the DailyEntry to update in case it exists.
     */
    where: DailyEntryWhereUniqueInput
    /**
     * In case the DailyEntry found by the `where` argument doesn't exist, create a new DailyEntry with this data.
     */
    create: XOR<DailyEntryCreateInput, DailyEntryUncheckedCreateInput>
    /**
     * In case the DailyEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyEntryUpdateInput, DailyEntryUncheckedUpdateInput>
  }

  /**
   * DailyEntry delete
   */
  export type DailyEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyEntry
     */
    select?: DailyEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyEntry
     */
    omit?: DailyEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyEntryInclude<ExtArgs> | null
    /**
     * Filter which DailyEntry to delete.
     */
    where: DailyEntryWhereUniqueInput
  }

  /**
   * DailyEntry deleteMany
   */
  export type DailyEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyEntries to delete
     */
    where?: DailyEntryWhereInput
    /**
     * Limit how many DailyEntries to delete.
     */
    limit?: number
  }

  /**
   * DailyEntry without action
   */
  export type DailyEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyEntry
     */
    select?: DailyEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyEntry
     */
    omit?: DailyEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyEntryInclude<ExtArgs> | null
  }


  /**
   * Model ArcadeScore
   */

  export type AggregateArcadeScore = {
    _count: ArcadeScoreCountAggregateOutputType | null
    _avg: ArcadeScoreAvgAggregateOutputType | null
    _sum: ArcadeScoreSumAggregateOutputType | null
    _min: ArcadeScoreMinAggregateOutputType | null
    _max: ArcadeScoreMaxAggregateOutputType | null
  }

  export type ArcadeScoreAvgAggregateOutputType = {
    id: number | null
    playerId: number | null
    points: number | null
  }

  export type ArcadeScoreSumAggregateOutputType = {
    id: number | null
    playerId: number | null
    points: number | null
  }

  export type ArcadeScoreMinAggregateOutputType = {
    id: number | null
    playerId: number | null
    points: number | null
    difficulty: string | null
    createdAt: Date | null
  }

  export type ArcadeScoreMaxAggregateOutputType = {
    id: number | null
    playerId: number | null
    points: number | null
    difficulty: string | null
    createdAt: Date | null
  }

  export type ArcadeScoreCountAggregateOutputType = {
    id: number
    playerId: number
    points: number
    difficulty: number
    createdAt: number
    _all: number
  }


  export type ArcadeScoreAvgAggregateInputType = {
    id?: true
    playerId?: true
    points?: true
  }

  export type ArcadeScoreSumAggregateInputType = {
    id?: true
    playerId?: true
    points?: true
  }

  export type ArcadeScoreMinAggregateInputType = {
    id?: true
    playerId?: true
    points?: true
    difficulty?: true
    createdAt?: true
  }

  export type ArcadeScoreMaxAggregateInputType = {
    id?: true
    playerId?: true
    points?: true
    difficulty?: true
    createdAt?: true
  }

  export type ArcadeScoreCountAggregateInputType = {
    id?: true
    playerId?: true
    points?: true
    difficulty?: true
    createdAt?: true
    _all?: true
  }

  export type ArcadeScoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArcadeScore to aggregate.
     */
    where?: ArcadeScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArcadeScores to fetch.
     */
    orderBy?: ArcadeScoreOrderByWithRelationInput | ArcadeScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArcadeScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArcadeScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArcadeScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArcadeScores
    **/
    _count?: true | ArcadeScoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArcadeScoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArcadeScoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArcadeScoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArcadeScoreMaxAggregateInputType
  }

  export type GetArcadeScoreAggregateType<T extends ArcadeScoreAggregateArgs> = {
        [P in keyof T & keyof AggregateArcadeScore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArcadeScore[P]>
      : GetScalarType<T[P], AggregateArcadeScore[P]>
  }




  export type ArcadeScoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArcadeScoreWhereInput
    orderBy?: ArcadeScoreOrderByWithAggregationInput | ArcadeScoreOrderByWithAggregationInput[]
    by: ArcadeScoreScalarFieldEnum[] | ArcadeScoreScalarFieldEnum
    having?: ArcadeScoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArcadeScoreCountAggregateInputType | true
    _avg?: ArcadeScoreAvgAggregateInputType
    _sum?: ArcadeScoreSumAggregateInputType
    _min?: ArcadeScoreMinAggregateInputType
    _max?: ArcadeScoreMaxAggregateInputType
  }

  export type ArcadeScoreGroupByOutputType = {
    id: number
    playerId: number
    points: number
    difficulty: string
    createdAt: Date
    _count: ArcadeScoreCountAggregateOutputType | null
    _avg: ArcadeScoreAvgAggregateOutputType | null
    _sum: ArcadeScoreSumAggregateOutputType | null
    _min: ArcadeScoreMinAggregateOutputType | null
    _max: ArcadeScoreMaxAggregateOutputType | null
  }

  type GetArcadeScoreGroupByPayload<T extends ArcadeScoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArcadeScoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArcadeScoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArcadeScoreGroupByOutputType[P]>
            : GetScalarType<T[P], ArcadeScoreGroupByOutputType[P]>
        }
      >
    >


  export type ArcadeScoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    points?: boolean
    difficulty?: boolean
    createdAt?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["arcadeScore"]>

  export type ArcadeScoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    points?: boolean
    difficulty?: boolean
    createdAt?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["arcadeScore"]>

  export type ArcadeScoreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    points?: boolean
    difficulty?: boolean
    createdAt?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["arcadeScore"]>

  export type ArcadeScoreSelectScalar = {
    id?: boolean
    playerId?: boolean
    points?: boolean
    difficulty?: boolean
    createdAt?: boolean
  }

  export type ArcadeScoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "playerId" | "points" | "difficulty" | "createdAt", ExtArgs["result"]["arcadeScore"]>
  export type ArcadeScoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }
  export type ArcadeScoreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }
  export type ArcadeScoreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }

  export type $ArcadeScorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArcadeScore"
    objects: {
      player: Prisma.$PlayerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      playerId: number
      points: number
      difficulty: string
      createdAt: Date
    }, ExtArgs["result"]["arcadeScore"]>
    composites: {}
  }

  type ArcadeScoreGetPayload<S extends boolean | null | undefined | ArcadeScoreDefaultArgs> = $Result.GetResult<Prisma.$ArcadeScorePayload, S>

  type ArcadeScoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArcadeScoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArcadeScoreCountAggregateInputType | true
    }

  export interface ArcadeScoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArcadeScore'], meta: { name: 'ArcadeScore' } }
    /**
     * Find zero or one ArcadeScore that matches the filter.
     * @param {ArcadeScoreFindUniqueArgs} args - Arguments to find a ArcadeScore
     * @example
     * // Get one ArcadeScore
     * const arcadeScore = await prisma.arcadeScore.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArcadeScoreFindUniqueArgs>(args: SelectSubset<T, ArcadeScoreFindUniqueArgs<ExtArgs>>): Prisma__ArcadeScoreClient<$Result.GetResult<Prisma.$ArcadeScorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ArcadeScore that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArcadeScoreFindUniqueOrThrowArgs} args - Arguments to find a ArcadeScore
     * @example
     * // Get one ArcadeScore
     * const arcadeScore = await prisma.arcadeScore.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArcadeScoreFindUniqueOrThrowArgs>(args: SelectSubset<T, ArcadeScoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArcadeScoreClient<$Result.GetResult<Prisma.$ArcadeScorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArcadeScore that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArcadeScoreFindFirstArgs} args - Arguments to find a ArcadeScore
     * @example
     * // Get one ArcadeScore
     * const arcadeScore = await prisma.arcadeScore.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArcadeScoreFindFirstArgs>(args?: SelectSubset<T, ArcadeScoreFindFirstArgs<ExtArgs>>): Prisma__ArcadeScoreClient<$Result.GetResult<Prisma.$ArcadeScorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArcadeScore that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArcadeScoreFindFirstOrThrowArgs} args - Arguments to find a ArcadeScore
     * @example
     * // Get one ArcadeScore
     * const arcadeScore = await prisma.arcadeScore.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArcadeScoreFindFirstOrThrowArgs>(args?: SelectSubset<T, ArcadeScoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArcadeScoreClient<$Result.GetResult<Prisma.$ArcadeScorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ArcadeScores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArcadeScoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArcadeScores
     * const arcadeScores = await prisma.arcadeScore.findMany()
     * 
     * // Get first 10 ArcadeScores
     * const arcadeScores = await prisma.arcadeScore.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const arcadeScoreWithIdOnly = await prisma.arcadeScore.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArcadeScoreFindManyArgs>(args?: SelectSubset<T, ArcadeScoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArcadeScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ArcadeScore.
     * @param {ArcadeScoreCreateArgs} args - Arguments to create a ArcadeScore.
     * @example
     * // Create one ArcadeScore
     * const ArcadeScore = await prisma.arcadeScore.create({
     *   data: {
     *     // ... data to create a ArcadeScore
     *   }
     * })
     * 
     */
    create<T extends ArcadeScoreCreateArgs>(args: SelectSubset<T, ArcadeScoreCreateArgs<ExtArgs>>): Prisma__ArcadeScoreClient<$Result.GetResult<Prisma.$ArcadeScorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ArcadeScores.
     * @param {ArcadeScoreCreateManyArgs} args - Arguments to create many ArcadeScores.
     * @example
     * // Create many ArcadeScores
     * const arcadeScore = await prisma.arcadeScore.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArcadeScoreCreateManyArgs>(args?: SelectSubset<T, ArcadeScoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ArcadeScores and returns the data saved in the database.
     * @param {ArcadeScoreCreateManyAndReturnArgs} args - Arguments to create many ArcadeScores.
     * @example
     * // Create many ArcadeScores
     * const arcadeScore = await prisma.arcadeScore.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ArcadeScores and only return the `id`
     * const arcadeScoreWithIdOnly = await prisma.arcadeScore.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArcadeScoreCreateManyAndReturnArgs>(args?: SelectSubset<T, ArcadeScoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArcadeScorePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ArcadeScore.
     * @param {ArcadeScoreDeleteArgs} args - Arguments to delete one ArcadeScore.
     * @example
     * // Delete one ArcadeScore
     * const ArcadeScore = await prisma.arcadeScore.delete({
     *   where: {
     *     // ... filter to delete one ArcadeScore
     *   }
     * })
     * 
     */
    delete<T extends ArcadeScoreDeleteArgs>(args: SelectSubset<T, ArcadeScoreDeleteArgs<ExtArgs>>): Prisma__ArcadeScoreClient<$Result.GetResult<Prisma.$ArcadeScorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ArcadeScore.
     * @param {ArcadeScoreUpdateArgs} args - Arguments to update one ArcadeScore.
     * @example
     * // Update one ArcadeScore
     * const arcadeScore = await prisma.arcadeScore.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArcadeScoreUpdateArgs>(args: SelectSubset<T, ArcadeScoreUpdateArgs<ExtArgs>>): Prisma__ArcadeScoreClient<$Result.GetResult<Prisma.$ArcadeScorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ArcadeScores.
     * @param {ArcadeScoreDeleteManyArgs} args - Arguments to filter ArcadeScores to delete.
     * @example
     * // Delete a few ArcadeScores
     * const { count } = await prisma.arcadeScore.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArcadeScoreDeleteManyArgs>(args?: SelectSubset<T, ArcadeScoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArcadeScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArcadeScoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArcadeScores
     * const arcadeScore = await prisma.arcadeScore.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArcadeScoreUpdateManyArgs>(args: SelectSubset<T, ArcadeScoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArcadeScores and returns the data updated in the database.
     * @param {ArcadeScoreUpdateManyAndReturnArgs} args - Arguments to update many ArcadeScores.
     * @example
     * // Update many ArcadeScores
     * const arcadeScore = await prisma.arcadeScore.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ArcadeScores and only return the `id`
     * const arcadeScoreWithIdOnly = await prisma.arcadeScore.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArcadeScoreUpdateManyAndReturnArgs>(args: SelectSubset<T, ArcadeScoreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArcadeScorePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ArcadeScore.
     * @param {ArcadeScoreUpsertArgs} args - Arguments to update or create a ArcadeScore.
     * @example
     * // Update or create a ArcadeScore
     * const arcadeScore = await prisma.arcadeScore.upsert({
     *   create: {
     *     // ... data to create a ArcadeScore
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArcadeScore we want to update
     *   }
     * })
     */
    upsert<T extends ArcadeScoreUpsertArgs>(args: SelectSubset<T, ArcadeScoreUpsertArgs<ExtArgs>>): Prisma__ArcadeScoreClient<$Result.GetResult<Prisma.$ArcadeScorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ArcadeScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArcadeScoreCountArgs} args - Arguments to filter ArcadeScores to count.
     * @example
     * // Count the number of ArcadeScores
     * const count = await prisma.arcadeScore.count({
     *   where: {
     *     // ... the filter for the ArcadeScores we want to count
     *   }
     * })
    **/
    count<T extends ArcadeScoreCountArgs>(
      args?: Subset<T, ArcadeScoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArcadeScoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArcadeScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArcadeScoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArcadeScoreAggregateArgs>(args: Subset<T, ArcadeScoreAggregateArgs>): Prisma.PrismaPromise<GetArcadeScoreAggregateType<T>>

    /**
     * Group by ArcadeScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArcadeScoreGroupByArgs} args - Group by arguments.
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
      T extends ArcadeScoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArcadeScoreGroupByArgs['orderBy'] }
        : { orderBy?: ArcadeScoreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArcadeScoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArcadeScoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArcadeScore model
   */
  readonly fields: ArcadeScoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArcadeScore.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArcadeScoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    player<T extends PlayerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlayerDefaultArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ArcadeScore model
   */
  interface ArcadeScoreFieldRefs {
    readonly id: FieldRef<"ArcadeScore", 'Int'>
    readonly playerId: FieldRef<"ArcadeScore", 'Int'>
    readonly points: FieldRef<"ArcadeScore", 'Int'>
    readonly difficulty: FieldRef<"ArcadeScore", 'String'>
    readonly createdAt: FieldRef<"ArcadeScore", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ArcadeScore findUnique
   */
  export type ArcadeScoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArcadeScore
     */
    select?: ArcadeScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArcadeScore
     */
    omit?: ArcadeScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArcadeScoreInclude<ExtArgs> | null
    /**
     * Filter, which ArcadeScore to fetch.
     */
    where: ArcadeScoreWhereUniqueInput
  }

  /**
   * ArcadeScore findUniqueOrThrow
   */
  export type ArcadeScoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArcadeScore
     */
    select?: ArcadeScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArcadeScore
     */
    omit?: ArcadeScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArcadeScoreInclude<ExtArgs> | null
    /**
     * Filter, which ArcadeScore to fetch.
     */
    where: ArcadeScoreWhereUniqueInput
  }

  /**
   * ArcadeScore findFirst
   */
  export type ArcadeScoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArcadeScore
     */
    select?: ArcadeScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArcadeScore
     */
    omit?: ArcadeScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArcadeScoreInclude<ExtArgs> | null
    /**
     * Filter, which ArcadeScore to fetch.
     */
    where?: ArcadeScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArcadeScores to fetch.
     */
    orderBy?: ArcadeScoreOrderByWithRelationInput | ArcadeScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArcadeScores.
     */
    cursor?: ArcadeScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArcadeScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArcadeScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArcadeScores.
     */
    distinct?: ArcadeScoreScalarFieldEnum | ArcadeScoreScalarFieldEnum[]
  }

  /**
   * ArcadeScore findFirstOrThrow
   */
  export type ArcadeScoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArcadeScore
     */
    select?: ArcadeScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArcadeScore
     */
    omit?: ArcadeScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArcadeScoreInclude<ExtArgs> | null
    /**
     * Filter, which ArcadeScore to fetch.
     */
    where?: ArcadeScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArcadeScores to fetch.
     */
    orderBy?: ArcadeScoreOrderByWithRelationInput | ArcadeScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArcadeScores.
     */
    cursor?: ArcadeScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArcadeScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArcadeScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArcadeScores.
     */
    distinct?: ArcadeScoreScalarFieldEnum | ArcadeScoreScalarFieldEnum[]
  }

  /**
   * ArcadeScore findMany
   */
  export type ArcadeScoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArcadeScore
     */
    select?: ArcadeScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArcadeScore
     */
    omit?: ArcadeScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArcadeScoreInclude<ExtArgs> | null
    /**
     * Filter, which ArcadeScores to fetch.
     */
    where?: ArcadeScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArcadeScores to fetch.
     */
    orderBy?: ArcadeScoreOrderByWithRelationInput | ArcadeScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArcadeScores.
     */
    cursor?: ArcadeScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArcadeScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArcadeScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArcadeScores.
     */
    distinct?: ArcadeScoreScalarFieldEnum | ArcadeScoreScalarFieldEnum[]
  }

  /**
   * ArcadeScore create
   */
  export type ArcadeScoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArcadeScore
     */
    select?: ArcadeScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArcadeScore
     */
    omit?: ArcadeScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArcadeScoreInclude<ExtArgs> | null
    /**
     * The data needed to create a ArcadeScore.
     */
    data: XOR<ArcadeScoreCreateInput, ArcadeScoreUncheckedCreateInput>
  }

  /**
   * ArcadeScore createMany
   */
  export type ArcadeScoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArcadeScores.
     */
    data: ArcadeScoreCreateManyInput | ArcadeScoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArcadeScore createManyAndReturn
   */
  export type ArcadeScoreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArcadeScore
     */
    select?: ArcadeScoreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArcadeScore
     */
    omit?: ArcadeScoreOmit<ExtArgs> | null
    /**
     * The data used to create many ArcadeScores.
     */
    data: ArcadeScoreCreateManyInput | ArcadeScoreCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArcadeScoreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArcadeScore update
   */
  export type ArcadeScoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArcadeScore
     */
    select?: ArcadeScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArcadeScore
     */
    omit?: ArcadeScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArcadeScoreInclude<ExtArgs> | null
    /**
     * The data needed to update a ArcadeScore.
     */
    data: XOR<ArcadeScoreUpdateInput, ArcadeScoreUncheckedUpdateInput>
    /**
     * Choose, which ArcadeScore to update.
     */
    where: ArcadeScoreWhereUniqueInput
  }

  /**
   * ArcadeScore updateMany
   */
  export type ArcadeScoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArcadeScores.
     */
    data: XOR<ArcadeScoreUpdateManyMutationInput, ArcadeScoreUncheckedUpdateManyInput>
    /**
     * Filter which ArcadeScores to update
     */
    where?: ArcadeScoreWhereInput
    /**
     * Limit how many ArcadeScores to update.
     */
    limit?: number
  }

  /**
   * ArcadeScore updateManyAndReturn
   */
  export type ArcadeScoreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArcadeScore
     */
    select?: ArcadeScoreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArcadeScore
     */
    omit?: ArcadeScoreOmit<ExtArgs> | null
    /**
     * The data used to update ArcadeScores.
     */
    data: XOR<ArcadeScoreUpdateManyMutationInput, ArcadeScoreUncheckedUpdateManyInput>
    /**
     * Filter which ArcadeScores to update
     */
    where?: ArcadeScoreWhereInput
    /**
     * Limit how many ArcadeScores to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArcadeScoreIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArcadeScore upsert
   */
  export type ArcadeScoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArcadeScore
     */
    select?: ArcadeScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArcadeScore
     */
    omit?: ArcadeScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArcadeScoreInclude<ExtArgs> | null
    /**
     * The filter to search for the ArcadeScore to update in case it exists.
     */
    where: ArcadeScoreWhereUniqueInput
    /**
     * In case the ArcadeScore found by the `where` argument doesn't exist, create a new ArcadeScore with this data.
     */
    create: XOR<ArcadeScoreCreateInput, ArcadeScoreUncheckedCreateInput>
    /**
     * In case the ArcadeScore was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArcadeScoreUpdateInput, ArcadeScoreUncheckedUpdateInput>
  }

  /**
   * ArcadeScore delete
   */
  export type ArcadeScoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArcadeScore
     */
    select?: ArcadeScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArcadeScore
     */
    omit?: ArcadeScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArcadeScoreInclude<ExtArgs> | null
    /**
     * Filter which ArcadeScore to delete.
     */
    where: ArcadeScoreWhereUniqueInput
  }

  /**
   * ArcadeScore deleteMany
   */
  export type ArcadeScoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArcadeScores to delete
     */
    where?: ArcadeScoreWhereInput
    /**
     * Limit how many ArcadeScores to delete.
     */
    limit?: number
  }

  /**
   * ArcadeScore without action
   */
  export type ArcadeScoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArcadeScore
     */
    select?: ArcadeScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArcadeScore
     */
    omit?: ArcadeScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArcadeScoreInclude<ExtArgs> | null
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


  export const WordScalarFieldEnum: {
    id: 'id',
    word: 'word',
    hint: 'hint',
    difficulty: 'difficulty',
    createdAt: 'createdAt'
  };

  export type WordScalarFieldEnum = (typeof WordScalarFieldEnum)[keyof typeof WordScalarFieldEnum]


  export const PlayerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type PlayerScalarFieldEnum = (typeof PlayerScalarFieldEnum)[keyof typeof PlayerScalarFieldEnum]


  export const DailyChallengeScalarFieldEnum: {
    id: 'id',
    date: 'date',
    wordId: 'wordId'
  };

  export type DailyChallengeScalarFieldEnum = (typeof DailyChallengeScalarFieldEnum)[keyof typeof DailyChallengeScalarFieldEnum]


  export const DailyEntryScalarFieldEnum: {
    id: 'id',
    playerId: 'playerId',
    challengeId: 'challengeId',
    won: 'won',
    firstTry: 'firstTry',
    attemptsUsed: 'attemptsUsed',
    streak: 'streak',
    createdAt: 'createdAt'
  };

  export type DailyEntryScalarFieldEnum = (typeof DailyEntryScalarFieldEnum)[keyof typeof DailyEntryScalarFieldEnum]


  export const ArcadeScoreScalarFieldEnum: {
    id: 'id',
    playerId: 'playerId',
    points: 'points',
    difficulty: 'difficulty',
    createdAt: 'createdAt'
  };

  export type ArcadeScoreScalarFieldEnum = (typeof ArcadeScoreScalarFieldEnum)[keyof typeof ArcadeScoreScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type WordWhereInput = {
    AND?: WordWhereInput | WordWhereInput[]
    OR?: WordWhereInput[]
    NOT?: WordWhereInput | WordWhereInput[]
    id?: IntFilter<"Word"> | number
    word?: StringFilter<"Word"> | string
    hint?: StringNullableFilter<"Word"> | string | null
    difficulty?: StringFilter<"Word"> | string
    createdAt?: DateTimeFilter<"Word"> | Date | string
    dailyChallenges?: DailyChallengeListRelationFilter
  }

  export type WordOrderByWithRelationInput = {
    id?: SortOrder
    word?: SortOrder
    hint?: SortOrderInput | SortOrder
    difficulty?: SortOrder
    createdAt?: SortOrder
    dailyChallenges?: DailyChallengeOrderByRelationAggregateInput
  }

  export type WordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    word?: string
    AND?: WordWhereInput | WordWhereInput[]
    OR?: WordWhereInput[]
    NOT?: WordWhereInput | WordWhereInput[]
    hint?: StringNullableFilter<"Word"> | string | null
    difficulty?: StringFilter<"Word"> | string
    createdAt?: DateTimeFilter<"Word"> | Date | string
    dailyChallenges?: DailyChallengeListRelationFilter
  }, "id" | "word">

  export type WordOrderByWithAggregationInput = {
    id?: SortOrder
    word?: SortOrder
    hint?: SortOrderInput | SortOrder
    difficulty?: SortOrder
    createdAt?: SortOrder
    _count?: WordCountOrderByAggregateInput
    _avg?: WordAvgOrderByAggregateInput
    _max?: WordMaxOrderByAggregateInput
    _min?: WordMinOrderByAggregateInput
    _sum?: WordSumOrderByAggregateInput
  }

  export type WordScalarWhereWithAggregatesInput = {
    AND?: WordScalarWhereWithAggregatesInput | WordScalarWhereWithAggregatesInput[]
    OR?: WordScalarWhereWithAggregatesInput[]
    NOT?: WordScalarWhereWithAggregatesInput | WordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Word"> | number
    word?: StringWithAggregatesFilter<"Word"> | string
    hint?: StringNullableWithAggregatesFilter<"Word"> | string | null
    difficulty?: StringWithAggregatesFilter<"Word"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Word"> | Date | string
  }

  export type PlayerWhereInput = {
    AND?: PlayerWhereInput | PlayerWhereInput[]
    OR?: PlayerWhereInput[]
    NOT?: PlayerWhereInput | PlayerWhereInput[]
    id?: IntFilter<"Player"> | number
    name?: StringFilter<"Player"> | string
    createdAt?: DateTimeFilter<"Player"> | Date | string
    dailyEntries?: DailyEntryListRelationFilter
    arcadeScores?: ArcadeScoreListRelationFilter
  }

  export type PlayerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    dailyEntries?: DailyEntryOrderByRelationAggregateInput
    arcadeScores?: ArcadeScoreOrderByRelationAggregateInput
  }

  export type PlayerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: PlayerWhereInput | PlayerWhereInput[]
    OR?: PlayerWhereInput[]
    NOT?: PlayerWhereInput | PlayerWhereInput[]
    createdAt?: DateTimeFilter<"Player"> | Date | string
    dailyEntries?: DailyEntryListRelationFilter
    arcadeScores?: ArcadeScoreListRelationFilter
  }, "id" | "name">

  export type PlayerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: PlayerCountOrderByAggregateInput
    _avg?: PlayerAvgOrderByAggregateInput
    _max?: PlayerMaxOrderByAggregateInput
    _min?: PlayerMinOrderByAggregateInput
    _sum?: PlayerSumOrderByAggregateInput
  }

  export type PlayerScalarWhereWithAggregatesInput = {
    AND?: PlayerScalarWhereWithAggregatesInput | PlayerScalarWhereWithAggregatesInput[]
    OR?: PlayerScalarWhereWithAggregatesInput[]
    NOT?: PlayerScalarWhereWithAggregatesInput | PlayerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Player"> | number
    name?: StringWithAggregatesFilter<"Player"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Player"> | Date | string
  }

  export type DailyChallengeWhereInput = {
    AND?: DailyChallengeWhereInput | DailyChallengeWhereInput[]
    OR?: DailyChallengeWhereInput[]
    NOT?: DailyChallengeWhereInput | DailyChallengeWhereInput[]
    id?: IntFilter<"DailyChallenge"> | number
    date?: StringFilter<"DailyChallenge"> | string
    wordId?: IntFilter<"DailyChallenge"> | number
    word?: XOR<WordScalarRelationFilter, WordWhereInput>
    entries?: DailyEntryListRelationFilter
  }

  export type DailyChallengeOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    wordId?: SortOrder
    word?: WordOrderByWithRelationInput
    entries?: DailyEntryOrderByRelationAggregateInput
  }

  export type DailyChallengeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    date?: string
    AND?: DailyChallengeWhereInput | DailyChallengeWhereInput[]
    OR?: DailyChallengeWhereInput[]
    NOT?: DailyChallengeWhereInput | DailyChallengeWhereInput[]
    wordId?: IntFilter<"DailyChallenge"> | number
    word?: XOR<WordScalarRelationFilter, WordWhereInput>
    entries?: DailyEntryListRelationFilter
  }, "id" | "date">

  export type DailyChallengeOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    wordId?: SortOrder
    _count?: DailyChallengeCountOrderByAggregateInput
    _avg?: DailyChallengeAvgOrderByAggregateInput
    _max?: DailyChallengeMaxOrderByAggregateInput
    _min?: DailyChallengeMinOrderByAggregateInput
    _sum?: DailyChallengeSumOrderByAggregateInput
  }

  export type DailyChallengeScalarWhereWithAggregatesInput = {
    AND?: DailyChallengeScalarWhereWithAggregatesInput | DailyChallengeScalarWhereWithAggregatesInput[]
    OR?: DailyChallengeScalarWhereWithAggregatesInput[]
    NOT?: DailyChallengeScalarWhereWithAggregatesInput | DailyChallengeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DailyChallenge"> | number
    date?: StringWithAggregatesFilter<"DailyChallenge"> | string
    wordId?: IntWithAggregatesFilter<"DailyChallenge"> | number
  }

  export type DailyEntryWhereInput = {
    AND?: DailyEntryWhereInput | DailyEntryWhereInput[]
    OR?: DailyEntryWhereInput[]
    NOT?: DailyEntryWhereInput | DailyEntryWhereInput[]
    id?: IntFilter<"DailyEntry"> | number
    playerId?: IntFilter<"DailyEntry"> | number
    challengeId?: IntFilter<"DailyEntry"> | number
    won?: BoolFilter<"DailyEntry"> | boolean
    firstTry?: BoolFilter<"DailyEntry"> | boolean
    attemptsUsed?: IntFilter<"DailyEntry"> | number
    streak?: IntFilter<"DailyEntry"> | number
    createdAt?: DateTimeFilter<"DailyEntry"> | Date | string
    player?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
    challenge?: XOR<DailyChallengeScalarRelationFilter, DailyChallengeWhereInput>
  }

  export type DailyEntryOrderByWithRelationInput = {
    id?: SortOrder
    playerId?: SortOrder
    challengeId?: SortOrder
    won?: SortOrder
    firstTry?: SortOrder
    attemptsUsed?: SortOrder
    streak?: SortOrder
    createdAt?: SortOrder
    player?: PlayerOrderByWithRelationInput
    challenge?: DailyChallengeOrderByWithRelationInput
  }

  export type DailyEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    playerId_challengeId?: DailyEntryPlayerIdChallengeIdCompoundUniqueInput
    AND?: DailyEntryWhereInput | DailyEntryWhereInput[]
    OR?: DailyEntryWhereInput[]
    NOT?: DailyEntryWhereInput | DailyEntryWhereInput[]
    playerId?: IntFilter<"DailyEntry"> | number
    challengeId?: IntFilter<"DailyEntry"> | number
    won?: BoolFilter<"DailyEntry"> | boolean
    firstTry?: BoolFilter<"DailyEntry"> | boolean
    attemptsUsed?: IntFilter<"DailyEntry"> | number
    streak?: IntFilter<"DailyEntry"> | number
    createdAt?: DateTimeFilter<"DailyEntry"> | Date | string
    player?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
    challenge?: XOR<DailyChallengeScalarRelationFilter, DailyChallengeWhereInput>
  }, "id" | "playerId_challengeId">

  export type DailyEntryOrderByWithAggregationInput = {
    id?: SortOrder
    playerId?: SortOrder
    challengeId?: SortOrder
    won?: SortOrder
    firstTry?: SortOrder
    attemptsUsed?: SortOrder
    streak?: SortOrder
    createdAt?: SortOrder
    _count?: DailyEntryCountOrderByAggregateInput
    _avg?: DailyEntryAvgOrderByAggregateInput
    _max?: DailyEntryMaxOrderByAggregateInput
    _min?: DailyEntryMinOrderByAggregateInput
    _sum?: DailyEntrySumOrderByAggregateInput
  }

  export type DailyEntryScalarWhereWithAggregatesInput = {
    AND?: DailyEntryScalarWhereWithAggregatesInput | DailyEntryScalarWhereWithAggregatesInput[]
    OR?: DailyEntryScalarWhereWithAggregatesInput[]
    NOT?: DailyEntryScalarWhereWithAggregatesInput | DailyEntryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DailyEntry"> | number
    playerId?: IntWithAggregatesFilter<"DailyEntry"> | number
    challengeId?: IntWithAggregatesFilter<"DailyEntry"> | number
    won?: BoolWithAggregatesFilter<"DailyEntry"> | boolean
    firstTry?: BoolWithAggregatesFilter<"DailyEntry"> | boolean
    attemptsUsed?: IntWithAggregatesFilter<"DailyEntry"> | number
    streak?: IntWithAggregatesFilter<"DailyEntry"> | number
    createdAt?: DateTimeWithAggregatesFilter<"DailyEntry"> | Date | string
  }

  export type ArcadeScoreWhereInput = {
    AND?: ArcadeScoreWhereInput | ArcadeScoreWhereInput[]
    OR?: ArcadeScoreWhereInput[]
    NOT?: ArcadeScoreWhereInput | ArcadeScoreWhereInput[]
    id?: IntFilter<"ArcadeScore"> | number
    playerId?: IntFilter<"ArcadeScore"> | number
    points?: IntFilter<"ArcadeScore"> | number
    difficulty?: StringFilter<"ArcadeScore"> | string
    createdAt?: DateTimeFilter<"ArcadeScore"> | Date | string
    player?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
  }

  export type ArcadeScoreOrderByWithRelationInput = {
    id?: SortOrder
    playerId?: SortOrder
    points?: SortOrder
    difficulty?: SortOrder
    createdAt?: SortOrder
    player?: PlayerOrderByWithRelationInput
  }

  export type ArcadeScoreWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ArcadeScoreWhereInput | ArcadeScoreWhereInput[]
    OR?: ArcadeScoreWhereInput[]
    NOT?: ArcadeScoreWhereInput | ArcadeScoreWhereInput[]
    playerId?: IntFilter<"ArcadeScore"> | number
    points?: IntFilter<"ArcadeScore"> | number
    difficulty?: StringFilter<"ArcadeScore"> | string
    createdAt?: DateTimeFilter<"ArcadeScore"> | Date | string
    player?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
  }, "id">

  export type ArcadeScoreOrderByWithAggregationInput = {
    id?: SortOrder
    playerId?: SortOrder
    points?: SortOrder
    difficulty?: SortOrder
    createdAt?: SortOrder
    _count?: ArcadeScoreCountOrderByAggregateInput
    _avg?: ArcadeScoreAvgOrderByAggregateInput
    _max?: ArcadeScoreMaxOrderByAggregateInput
    _min?: ArcadeScoreMinOrderByAggregateInput
    _sum?: ArcadeScoreSumOrderByAggregateInput
  }

  export type ArcadeScoreScalarWhereWithAggregatesInput = {
    AND?: ArcadeScoreScalarWhereWithAggregatesInput | ArcadeScoreScalarWhereWithAggregatesInput[]
    OR?: ArcadeScoreScalarWhereWithAggregatesInput[]
    NOT?: ArcadeScoreScalarWhereWithAggregatesInput | ArcadeScoreScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ArcadeScore"> | number
    playerId?: IntWithAggregatesFilter<"ArcadeScore"> | number
    points?: IntWithAggregatesFilter<"ArcadeScore"> | number
    difficulty?: StringWithAggregatesFilter<"ArcadeScore"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ArcadeScore"> | Date | string
  }

  export type WordCreateInput = {
    word: string
    hint?: string | null
    difficulty?: string
    createdAt?: Date | string
    dailyChallenges?: DailyChallengeCreateNestedManyWithoutWordInput
  }

  export type WordUncheckedCreateInput = {
    id?: number
    word: string
    hint?: string | null
    difficulty?: string
    createdAt?: Date | string
    dailyChallenges?: DailyChallengeUncheckedCreateNestedManyWithoutWordInput
  }

  export type WordUpdateInput = {
    word?: StringFieldUpdateOperationsInput | string
    hint?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyChallenges?: DailyChallengeUpdateManyWithoutWordNestedInput
  }

  export type WordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    word?: StringFieldUpdateOperationsInput | string
    hint?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyChallenges?: DailyChallengeUncheckedUpdateManyWithoutWordNestedInput
  }

  export type WordCreateManyInput = {
    id?: number
    word: string
    hint?: string | null
    difficulty?: string
    createdAt?: Date | string
  }

  export type WordUpdateManyMutationInput = {
    word?: StringFieldUpdateOperationsInput | string
    hint?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    word?: StringFieldUpdateOperationsInput | string
    hint?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerCreateInput = {
    name: string
    createdAt?: Date | string
    dailyEntries?: DailyEntryCreateNestedManyWithoutPlayerInput
    arcadeScores?: ArcadeScoreCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    dailyEntries?: DailyEntryUncheckedCreateNestedManyWithoutPlayerInput
    arcadeScores?: ArcadeScoreUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyEntries?: DailyEntryUpdateManyWithoutPlayerNestedInput
    arcadeScores?: ArcadeScoreUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyEntries?: DailyEntryUncheckedUpdateManyWithoutPlayerNestedInput
    arcadeScores?: ArcadeScoreUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
  }

  export type PlayerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyChallengeCreateInput = {
    date: string
    word: WordCreateNestedOneWithoutDailyChallengesInput
    entries?: DailyEntryCreateNestedManyWithoutChallengeInput
  }

  export type DailyChallengeUncheckedCreateInput = {
    id?: number
    date: string
    wordId: number
    entries?: DailyEntryUncheckedCreateNestedManyWithoutChallengeInput
  }

  export type DailyChallengeUpdateInput = {
    date?: StringFieldUpdateOperationsInput | string
    word?: WordUpdateOneRequiredWithoutDailyChallengesNestedInput
    entries?: DailyEntryUpdateManyWithoutChallengeNestedInput
  }

  export type DailyChallengeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    wordId?: IntFieldUpdateOperationsInput | number
    entries?: DailyEntryUncheckedUpdateManyWithoutChallengeNestedInput
  }

  export type DailyChallengeCreateManyInput = {
    id?: number
    date: string
    wordId: number
  }

  export type DailyChallengeUpdateManyMutationInput = {
    date?: StringFieldUpdateOperationsInput | string
  }

  export type DailyChallengeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    wordId?: IntFieldUpdateOperationsInput | number
  }

  export type DailyEntryCreateInput = {
    won?: boolean
    firstTry?: boolean
    attemptsUsed?: number
    streak?: number
    createdAt?: Date | string
    player: PlayerCreateNestedOneWithoutDailyEntriesInput
    challenge: DailyChallengeCreateNestedOneWithoutEntriesInput
  }

  export type DailyEntryUncheckedCreateInput = {
    id?: number
    playerId: number
    challengeId: number
    won?: boolean
    firstTry?: boolean
    attemptsUsed?: number
    streak?: number
    createdAt?: Date | string
  }

  export type DailyEntryUpdateInput = {
    won?: BoolFieldUpdateOperationsInput | boolean
    firstTry?: BoolFieldUpdateOperationsInput | boolean
    attemptsUsed?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player?: PlayerUpdateOneRequiredWithoutDailyEntriesNestedInput
    challenge?: DailyChallengeUpdateOneRequiredWithoutEntriesNestedInput
  }

  export type DailyEntryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    playerId?: IntFieldUpdateOperationsInput | number
    challengeId?: IntFieldUpdateOperationsInput | number
    won?: BoolFieldUpdateOperationsInput | boolean
    firstTry?: BoolFieldUpdateOperationsInput | boolean
    attemptsUsed?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyEntryCreateManyInput = {
    id?: number
    playerId: number
    challengeId: number
    won?: boolean
    firstTry?: boolean
    attemptsUsed?: number
    streak?: number
    createdAt?: Date | string
  }

  export type DailyEntryUpdateManyMutationInput = {
    won?: BoolFieldUpdateOperationsInput | boolean
    firstTry?: BoolFieldUpdateOperationsInput | boolean
    attemptsUsed?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyEntryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    playerId?: IntFieldUpdateOperationsInput | number
    challengeId?: IntFieldUpdateOperationsInput | number
    won?: BoolFieldUpdateOperationsInput | boolean
    firstTry?: BoolFieldUpdateOperationsInput | boolean
    attemptsUsed?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArcadeScoreCreateInput = {
    points: number
    difficulty: string
    createdAt?: Date | string
    player: PlayerCreateNestedOneWithoutArcadeScoresInput
  }

  export type ArcadeScoreUncheckedCreateInput = {
    id?: number
    playerId: number
    points: number
    difficulty: string
    createdAt?: Date | string
  }

  export type ArcadeScoreUpdateInput = {
    points?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player?: PlayerUpdateOneRequiredWithoutArcadeScoresNestedInput
  }

  export type ArcadeScoreUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    playerId?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArcadeScoreCreateManyInput = {
    id?: number
    playerId: number
    points: number
    difficulty: string
    createdAt?: Date | string
  }

  export type ArcadeScoreUpdateManyMutationInput = {
    points?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArcadeScoreUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    playerId?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DailyChallengeListRelationFilter = {
    every?: DailyChallengeWhereInput
    some?: DailyChallengeWhereInput
    none?: DailyChallengeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DailyChallengeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WordCountOrderByAggregateInput = {
    id?: SortOrder
    word?: SortOrder
    hint?: SortOrder
    difficulty?: SortOrder
    createdAt?: SortOrder
  }

  export type WordAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type WordMaxOrderByAggregateInput = {
    id?: SortOrder
    word?: SortOrder
    hint?: SortOrder
    difficulty?: SortOrder
    createdAt?: SortOrder
  }

  export type WordMinOrderByAggregateInput = {
    id?: SortOrder
    word?: SortOrder
    hint?: SortOrder
    difficulty?: SortOrder
    createdAt?: SortOrder
  }

  export type WordSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DailyEntryListRelationFilter = {
    every?: DailyEntryWhereInput
    some?: DailyEntryWhereInput
    none?: DailyEntryWhereInput
  }

  export type ArcadeScoreListRelationFilter = {
    every?: ArcadeScoreWhereInput
    some?: ArcadeScoreWhereInput
    none?: ArcadeScoreWhereInput
  }

  export type DailyEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArcadeScoreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlayerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type PlayerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PlayerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type PlayerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type PlayerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type WordScalarRelationFilter = {
    is?: WordWhereInput
    isNot?: WordWhereInput
  }

  export type DailyChallengeCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    wordId?: SortOrder
  }

  export type DailyChallengeAvgOrderByAggregateInput = {
    id?: SortOrder
    wordId?: SortOrder
  }

  export type DailyChallengeMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    wordId?: SortOrder
  }

  export type DailyChallengeMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    wordId?: SortOrder
  }

  export type DailyChallengeSumOrderByAggregateInput = {
    id?: SortOrder
    wordId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PlayerScalarRelationFilter = {
    is?: PlayerWhereInput
    isNot?: PlayerWhereInput
  }

  export type DailyChallengeScalarRelationFilter = {
    is?: DailyChallengeWhereInput
    isNot?: DailyChallengeWhereInput
  }

  export type DailyEntryPlayerIdChallengeIdCompoundUniqueInput = {
    playerId: number
    challengeId: number
  }

  export type DailyEntryCountOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    challengeId?: SortOrder
    won?: SortOrder
    firstTry?: SortOrder
    attemptsUsed?: SortOrder
    streak?: SortOrder
    createdAt?: SortOrder
  }

  export type DailyEntryAvgOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    challengeId?: SortOrder
    attemptsUsed?: SortOrder
    streak?: SortOrder
  }

  export type DailyEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    challengeId?: SortOrder
    won?: SortOrder
    firstTry?: SortOrder
    attemptsUsed?: SortOrder
    streak?: SortOrder
    createdAt?: SortOrder
  }

  export type DailyEntryMinOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    challengeId?: SortOrder
    won?: SortOrder
    firstTry?: SortOrder
    attemptsUsed?: SortOrder
    streak?: SortOrder
    createdAt?: SortOrder
  }

  export type DailyEntrySumOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    challengeId?: SortOrder
    attemptsUsed?: SortOrder
    streak?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ArcadeScoreCountOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    points?: SortOrder
    difficulty?: SortOrder
    createdAt?: SortOrder
  }

  export type ArcadeScoreAvgOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    points?: SortOrder
  }

  export type ArcadeScoreMaxOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    points?: SortOrder
    difficulty?: SortOrder
    createdAt?: SortOrder
  }

  export type ArcadeScoreMinOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    points?: SortOrder
    difficulty?: SortOrder
    createdAt?: SortOrder
  }

  export type ArcadeScoreSumOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    points?: SortOrder
  }

  export type DailyChallengeCreateNestedManyWithoutWordInput = {
    create?: XOR<DailyChallengeCreateWithoutWordInput, DailyChallengeUncheckedCreateWithoutWordInput> | DailyChallengeCreateWithoutWordInput[] | DailyChallengeUncheckedCreateWithoutWordInput[]
    connectOrCreate?: DailyChallengeCreateOrConnectWithoutWordInput | DailyChallengeCreateOrConnectWithoutWordInput[]
    createMany?: DailyChallengeCreateManyWordInputEnvelope
    connect?: DailyChallengeWhereUniqueInput | DailyChallengeWhereUniqueInput[]
  }

  export type DailyChallengeUncheckedCreateNestedManyWithoutWordInput = {
    create?: XOR<DailyChallengeCreateWithoutWordInput, DailyChallengeUncheckedCreateWithoutWordInput> | DailyChallengeCreateWithoutWordInput[] | DailyChallengeUncheckedCreateWithoutWordInput[]
    connectOrCreate?: DailyChallengeCreateOrConnectWithoutWordInput | DailyChallengeCreateOrConnectWithoutWordInput[]
    createMany?: DailyChallengeCreateManyWordInputEnvelope
    connect?: DailyChallengeWhereUniqueInput | DailyChallengeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DailyChallengeUpdateManyWithoutWordNestedInput = {
    create?: XOR<DailyChallengeCreateWithoutWordInput, DailyChallengeUncheckedCreateWithoutWordInput> | DailyChallengeCreateWithoutWordInput[] | DailyChallengeUncheckedCreateWithoutWordInput[]
    connectOrCreate?: DailyChallengeCreateOrConnectWithoutWordInput | DailyChallengeCreateOrConnectWithoutWordInput[]
    upsert?: DailyChallengeUpsertWithWhereUniqueWithoutWordInput | DailyChallengeUpsertWithWhereUniqueWithoutWordInput[]
    createMany?: DailyChallengeCreateManyWordInputEnvelope
    set?: DailyChallengeWhereUniqueInput | DailyChallengeWhereUniqueInput[]
    disconnect?: DailyChallengeWhereUniqueInput | DailyChallengeWhereUniqueInput[]
    delete?: DailyChallengeWhereUniqueInput | DailyChallengeWhereUniqueInput[]
    connect?: DailyChallengeWhereUniqueInput | DailyChallengeWhereUniqueInput[]
    update?: DailyChallengeUpdateWithWhereUniqueWithoutWordInput | DailyChallengeUpdateWithWhereUniqueWithoutWordInput[]
    updateMany?: DailyChallengeUpdateManyWithWhereWithoutWordInput | DailyChallengeUpdateManyWithWhereWithoutWordInput[]
    deleteMany?: DailyChallengeScalarWhereInput | DailyChallengeScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DailyChallengeUncheckedUpdateManyWithoutWordNestedInput = {
    create?: XOR<DailyChallengeCreateWithoutWordInput, DailyChallengeUncheckedCreateWithoutWordInput> | DailyChallengeCreateWithoutWordInput[] | DailyChallengeUncheckedCreateWithoutWordInput[]
    connectOrCreate?: DailyChallengeCreateOrConnectWithoutWordInput | DailyChallengeCreateOrConnectWithoutWordInput[]
    upsert?: DailyChallengeUpsertWithWhereUniqueWithoutWordInput | DailyChallengeUpsertWithWhereUniqueWithoutWordInput[]
    createMany?: DailyChallengeCreateManyWordInputEnvelope
    set?: DailyChallengeWhereUniqueInput | DailyChallengeWhereUniqueInput[]
    disconnect?: DailyChallengeWhereUniqueInput | DailyChallengeWhereUniqueInput[]
    delete?: DailyChallengeWhereUniqueInput | DailyChallengeWhereUniqueInput[]
    connect?: DailyChallengeWhereUniqueInput | DailyChallengeWhereUniqueInput[]
    update?: DailyChallengeUpdateWithWhereUniqueWithoutWordInput | DailyChallengeUpdateWithWhereUniqueWithoutWordInput[]
    updateMany?: DailyChallengeUpdateManyWithWhereWithoutWordInput | DailyChallengeUpdateManyWithWhereWithoutWordInput[]
    deleteMany?: DailyChallengeScalarWhereInput | DailyChallengeScalarWhereInput[]
  }

  export type DailyEntryCreateNestedManyWithoutPlayerInput = {
    create?: XOR<DailyEntryCreateWithoutPlayerInput, DailyEntryUncheckedCreateWithoutPlayerInput> | DailyEntryCreateWithoutPlayerInput[] | DailyEntryUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: DailyEntryCreateOrConnectWithoutPlayerInput | DailyEntryCreateOrConnectWithoutPlayerInput[]
    createMany?: DailyEntryCreateManyPlayerInputEnvelope
    connect?: DailyEntryWhereUniqueInput | DailyEntryWhereUniqueInput[]
  }

  export type ArcadeScoreCreateNestedManyWithoutPlayerInput = {
    create?: XOR<ArcadeScoreCreateWithoutPlayerInput, ArcadeScoreUncheckedCreateWithoutPlayerInput> | ArcadeScoreCreateWithoutPlayerInput[] | ArcadeScoreUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: ArcadeScoreCreateOrConnectWithoutPlayerInput | ArcadeScoreCreateOrConnectWithoutPlayerInput[]
    createMany?: ArcadeScoreCreateManyPlayerInputEnvelope
    connect?: ArcadeScoreWhereUniqueInput | ArcadeScoreWhereUniqueInput[]
  }

  export type DailyEntryUncheckedCreateNestedManyWithoutPlayerInput = {
    create?: XOR<DailyEntryCreateWithoutPlayerInput, DailyEntryUncheckedCreateWithoutPlayerInput> | DailyEntryCreateWithoutPlayerInput[] | DailyEntryUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: DailyEntryCreateOrConnectWithoutPlayerInput | DailyEntryCreateOrConnectWithoutPlayerInput[]
    createMany?: DailyEntryCreateManyPlayerInputEnvelope
    connect?: DailyEntryWhereUniqueInput | DailyEntryWhereUniqueInput[]
  }

  export type ArcadeScoreUncheckedCreateNestedManyWithoutPlayerInput = {
    create?: XOR<ArcadeScoreCreateWithoutPlayerInput, ArcadeScoreUncheckedCreateWithoutPlayerInput> | ArcadeScoreCreateWithoutPlayerInput[] | ArcadeScoreUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: ArcadeScoreCreateOrConnectWithoutPlayerInput | ArcadeScoreCreateOrConnectWithoutPlayerInput[]
    createMany?: ArcadeScoreCreateManyPlayerInputEnvelope
    connect?: ArcadeScoreWhereUniqueInput | ArcadeScoreWhereUniqueInput[]
  }

  export type DailyEntryUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<DailyEntryCreateWithoutPlayerInput, DailyEntryUncheckedCreateWithoutPlayerInput> | DailyEntryCreateWithoutPlayerInput[] | DailyEntryUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: DailyEntryCreateOrConnectWithoutPlayerInput | DailyEntryCreateOrConnectWithoutPlayerInput[]
    upsert?: DailyEntryUpsertWithWhereUniqueWithoutPlayerInput | DailyEntryUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: DailyEntryCreateManyPlayerInputEnvelope
    set?: DailyEntryWhereUniqueInput | DailyEntryWhereUniqueInput[]
    disconnect?: DailyEntryWhereUniqueInput | DailyEntryWhereUniqueInput[]
    delete?: DailyEntryWhereUniqueInput | DailyEntryWhereUniqueInput[]
    connect?: DailyEntryWhereUniqueInput | DailyEntryWhereUniqueInput[]
    update?: DailyEntryUpdateWithWhereUniqueWithoutPlayerInput | DailyEntryUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: DailyEntryUpdateManyWithWhereWithoutPlayerInput | DailyEntryUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: DailyEntryScalarWhereInput | DailyEntryScalarWhereInput[]
  }

  export type ArcadeScoreUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<ArcadeScoreCreateWithoutPlayerInput, ArcadeScoreUncheckedCreateWithoutPlayerInput> | ArcadeScoreCreateWithoutPlayerInput[] | ArcadeScoreUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: ArcadeScoreCreateOrConnectWithoutPlayerInput | ArcadeScoreCreateOrConnectWithoutPlayerInput[]
    upsert?: ArcadeScoreUpsertWithWhereUniqueWithoutPlayerInput | ArcadeScoreUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: ArcadeScoreCreateManyPlayerInputEnvelope
    set?: ArcadeScoreWhereUniqueInput | ArcadeScoreWhereUniqueInput[]
    disconnect?: ArcadeScoreWhereUniqueInput | ArcadeScoreWhereUniqueInput[]
    delete?: ArcadeScoreWhereUniqueInput | ArcadeScoreWhereUniqueInput[]
    connect?: ArcadeScoreWhereUniqueInput | ArcadeScoreWhereUniqueInput[]
    update?: ArcadeScoreUpdateWithWhereUniqueWithoutPlayerInput | ArcadeScoreUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: ArcadeScoreUpdateManyWithWhereWithoutPlayerInput | ArcadeScoreUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: ArcadeScoreScalarWhereInput | ArcadeScoreScalarWhereInput[]
  }

  export type DailyEntryUncheckedUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<DailyEntryCreateWithoutPlayerInput, DailyEntryUncheckedCreateWithoutPlayerInput> | DailyEntryCreateWithoutPlayerInput[] | DailyEntryUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: DailyEntryCreateOrConnectWithoutPlayerInput | DailyEntryCreateOrConnectWithoutPlayerInput[]
    upsert?: DailyEntryUpsertWithWhereUniqueWithoutPlayerInput | DailyEntryUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: DailyEntryCreateManyPlayerInputEnvelope
    set?: DailyEntryWhereUniqueInput | DailyEntryWhereUniqueInput[]
    disconnect?: DailyEntryWhereUniqueInput | DailyEntryWhereUniqueInput[]
    delete?: DailyEntryWhereUniqueInput | DailyEntryWhereUniqueInput[]
    connect?: DailyEntryWhereUniqueInput | DailyEntryWhereUniqueInput[]
    update?: DailyEntryUpdateWithWhereUniqueWithoutPlayerInput | DailyEntryUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: DailyEntryUpdateManyWithWhereWithoutPlayerInput | DailyEntryUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: DailyEntryScalarWhereInput | DailyEntryScalarWhereInput[]
  }

  export type ArcadeScoreUncheckedUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<ArcadeScoreCreateWithoutPlayerInput, ArcadeScoreUncheckedCreateWithoutPlayerInput> | ArcadeScoreCreateWithoutPlayerInput[] | ArcadeScoreUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: ArcadeScoreCreateOrConnectWithoutPlayerInput | ArcadeScoreCreateOrConnectWithoutPlayerInput[]
    upsert?: ArcadeScoreUpsertWithWhereUniqueWithoutPlayerInput | ArcadeScoreUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: ArcadeScoreCreateManyPlayerInputEnvelope
    set?: ArcadeScoreWhereUniqueInput | ArcadeScoreWhereUniqueInput[]
    disconnect?: ArcadeScoreWhereUniqueInput | ArcadeScoreWhereUniqueInput[]
    delete?: ArcadeScoreWhereUniqueInput | ArcadeScoreWhereUniqueInput[]
    connect?: ArcadeScoreWhereUniqueInput | ArcadeScoreWhereUniqueInput[]
    update?: ArcadeScoreUpdateWithWhereUniqueWithoutPlayerInput | ArcadeScoreUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: ArcadeScoreUpdateManyWithWhereWithoutPlayerInput | ArcadeScoreUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: ArcadeScoreScalarWhereInput | ArcadeScoreScalarWhereInput[]
  }

  export type WordCreateNestedOneWithoutDailyChallengesInput = {
    create?: XOR<WordCreateWithoutDailyChallengesInput, WordUncheckedCreateWithoutDailyChallengesInput>
    connectOrCreate?: WordCreateOrConnectWithoutDailyChallengesInput
    connect?: WordWhereUniqueInput
  }

  export type DailyEntryCreateNestedManyWithoutChallengeInput = {
    create?: XOR<DailyEntryCreateWithoutChallengeInput, DailyEntryUncheckedCreateWithoutChallengeInput> | DailyEntryCreateWithoutChallengeInput[] | DailyEntryUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: DailyEntryCreateOrConnectWithoutChallengeInput | DailyEntryCreateOrConnectWithoutChallengeInput[]
    createMany?: DailyEntryCreateManyChallengeInputEnvelope
    connect?: DailyEntryWhereUniqueInput | DailyEntryWhereUniqueInput[]
  }

  export type DailyEntryUncheckedCreateNestedManyWithoutChallengeInput = {
    create?: XOR<DailyEntryCreateWithoutChallengeInput, DailyEntryUncheckedCreateWithoutChallengeInput> | DailyEntryCreateWithoutChallengeInput[] | DailyEntryUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: DailyEntryCreateOrConnectWithoutChallengeInput | DailyEntryCreateOrConnectWithoutChallengeInput[]
    createMany?: DailyEntryCreateManyChallengeInputEnvelope
    connect?: DailyEntryWhereUniqueInput | DailyEntryWhereUniqueInput[]
  }

  export type WordUpdateOneRequiredWithoutDailyChallengesNestedInput = {
    create?: XOR<WordCreateWithoutDailyChallengesInput, WordUncheckedCreateWithoutDailyChallengesInput>
    connectOrCreate?: WordCreateOrConnectWithoutDailyChallengesInput
    upsert?: WordUpsertWithoutDailyChallengesInput
    connect?: WordWhereUniqueInput
    update?: XOR<XOR<WordUpdateToOneWithWhereWithoutDailyChallengesInput, WordUpdateWithoutDailyChallengesInput>, WordUncheckedUpdateWithoutDailyChallengesInput>
  }

  export type DailyEntryUpdateManyWithoutChallengeNestedInput = {
    create?: XOR<DailyEntryCreateWithoutChallengeInput, DailyEntryUncheckedCreateWithoutChallengeInput> | DailyEntryCreateWithoutChallengeInput[] | DailyEntryUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: DailyEntryCreateOrConnectWithoutChallengeInput | DailyEntryCreateOrConnectWithoutChallengeInput[]
    upsert?: DailyEntryUpsertWithWhereUniqueWithoutChallengeInput | DailyEntryUpsertWithWhereUniqueWithoutChallengeInput[]
    createMany?: DailyEntryCreateManyChallengeInputEnvelope
    set?: DailyEntryWhereUniqueInput | DailyEntryWhereUniqueInput[]
    disconnect?: DailyEntryWhereUniqueInput | DailyEntryWhereUniqueInput[]
    delete?: DailyEntryWhereUniqueInput | DailyEntryWhereUniqueInput[]
    connect?: DailyEntryWhereUniqueInput | DailyEntryWhereUniqueInput[]
    update?: DailyEntryUpdateWithWhereUniqueWithoutChallengeInput | DailyEntryUpdateWithWhereUniqueWithoutChallengeInput[]
    updateMany?: DailyEntryUpdateManyWithWhereWithoutChallengeInput | DailyEntryUpdateManyWithWhereWithoutChallengeInput[]
    deleteMany?: DailyEntryScalarWhereInput | DailyEntryScalarWhereInput[]
  }

  export type DailyEntryUncheckedUpdateManyWithoutChallengeNestedInput = {
    create?: XOR<DailyEntryCreateWithoutChallengeInput, DailyEntryUncheckedCreateWithoutChallengeInput> | DailyEntryCreateWithoutChallengeInput[] | DailyEntryUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: DailyEntryCreateOrConnectWithoutChallengeInput | DailyEntryCreateOrConnectWithoutChallengeInput[]
    upsert?: DailyEntryUpsertWithWhereUniqueWithoutChallengeInput | DailyEntryUpsertWithWhereUniqueWithoutChallengeInput[]
    createMany?: DailyEntryCreateManyChallengeInputEnvelope
    set?: DailyEntryWhereUniqueInput | DailyEntryWhereUniqueInput[]
    disconnect?: DailyEntryWhereUniqueInput | DailyEntryWhereUniqueInput[]
    delete?: DailyEntryWhereUniqueInput | DailyEntryWhereUniqueInput[]
    connect?: DailyEntryWhereUniqueInput | DailyEntryWhereUniqueInput[]
    update?: DailyEntryUpdateWithWhereUniqueWithoutChallengeInput | DailyEntryUpdateWithWhereUniqueWithoutChallengeInput[]
    updateMany?: DailyEntryUpdateManyWithWhereWithoutChallengeInput | DailyEntryUpdateManyWithWhereWithoutChallengeInput[]
    deleteMany?: DailyEntryScalarWhereInput | DailyEntryScalarWhereInput[]
  }

  export type PlayerCreateNestedOneWithoutDailyEntriesInput = {
    create?: XOR<PlayerCreateWithoutDailyEntriesInput, PlayerUncheckedCreateWithoutDailyEntriesInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutDailyEntriesInput
    connect?: PlayerWhereUniqueInput
  }

  export type DailyChallengeCreateNestedOneWithoutEntriesInput = {
    create?: XOR<DailyChallengeCreateWithoutEntriesInput, DailyChallengeUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: DailyChallengeCreateOrConnectWithoutEntriesInput
    connect?: DailyChallengeWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PlayerUpdateOneRequiredWithoutDailyEntriesNestedInput = {
    create?: XOR<PlayerCreateWithoutDailyEntriesInput, PlayerUncheckedCreateWithoutDailyEntriesInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutDailyEntriesInput
    upsert?: PlayerUpsertWithoutDailyEntriesInput
    connect?: PlayerWhereUniqueInput
    update?: XOR<XOR<PlayerUpdateToOneWithWhereWithoutDailyEntriesInput, PlayerUpdateWithoutDailyEntriesInput>, PlayerUncheckedUpdateWithoutDailyEntriesInput>
  }

  export type DailyChallengeUpdateOneRequiredWithoutEntriesNestedInput = {
    create?: XOR<DailyChallengeCreateWithoutEntriesInput, DailyChallengeUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: DailyChallengeCreateOrConnectWithoutEntriesInput
    upsert?: DailyChallengeUpsertWithoutEntriesInput
    connect?: DailyChallengeWhereUniqueInput
    update?: XOR<XOR<DailyChallengeUpdateToOneWithWhereWithoutEntriesInput, DailyChallengeUpdateWithoutEntriesInput>, DailyChallengeUncheckedUpdateWithoutEntriesInput>
  }

  export type PlayerCreateNestedOneWithoutArcadeScoresInput = {
    create?: XOR<PlayerCreateWithoutArcadeScoresInput, PlayerUncheckedCreateWithoutArcadeScoresInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutArcadeScoresInput
    connect?: PlayerWhereUniqueInput
  }

  export type PlayerUpdateOneRequiredWithoutArcadeScoresNestedInput = {
    create?: XOR<PlayerCreateWithoutArcadeScoresInput, PlayerUncheckedCreateWithoutArcadeScoresInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutArcadeScoresInput
    upsert?: PlayerUpsertWithoutArcadeScoresInput
    connect?: PlayerWhereUniqueInput
    update?: XOR<XOR<PlayerUpdateToOneWithWhereWithoutArcadeScoresInput, PlayerUpdateWithoutArcadeScoresInput>, PlayerUncheckedUpdateWithoutArcadeScoresInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DailyChallengeCreateWithoutWordInput = {
    date: string
    entries?: DailyEntryCreateNestedManyWithoutChallengeInput
  }

  export type DailyChallengeUncheckedCreateWithoutWordInput = {
    id?: number
    date: string
    entries?: DailyEntryUncheckedCreateNestedManyWithoutChallengeInput
  }

  export type DailyChallengeCreateOrConnectWithoutWordInput = {
    where: DailyChallengeWhereUniqueInput
    create: XOR<DailyChallengeCreateWithoutWordInput, DailyChallengeUncheckedCreateWithoutWordInput>
  }

  export type DailyChallengeCreateManyWordInputEnvelope = {
    data: DailyChallengeCreateManyWordInput | DailyChallengeCreateManyWordInput[]
    skipDuplicates?: boolean
  }

  export type DailyChallengeUpsertWithWhereUniqueWithoutWordInput = {
    where: DailyChallengeWhereUniqueInput
    update: XOR<DailyChallengeUpdateWithoutWordInput, DailyChallengeUncheckedUpdateWithoutWordInput>
    create: XOR<DailyChallengeCreateWithoutWordInput, DailyChallengeUncheckedCreateWithoutWordInput>
  }

  export type DailyChallengeUpdateWithWhereUniqueWithoutWordInput = {
    where: DailyChallengeWhereUniqueInput
    data: XOR<DailyChallengeUpdateWithoutWordInput, DailyChallengeUncheckedUpdateWithoutWordInput>
  }

  export type DailyChallengeUpdateManyWithWhereWithoutWordInput = {
    where: DailyChallengeScalarWhereInput
    data: XOR<DailyChallengeUpdateManyMutationInput, DailyChallengeUncheckedUpdateManyWithoutWordInput>
  }

  export type DailyChallengeScalarWhereInput = {
    AND?: DailyChallengeScalarWhereInput | DailyChallengeScalarWhereInput[]
    OR?: DailyChallengeScalarWhereInput[]
    NOT?: DailyChallengeScalarWhereInput | DailyChallengeScalarWhereInput[]
    id?: IntFilter<"DailyChallenge"> | number
    date?: StringFilter<"DailyChallenge"> | string
    wordId?: IntFilter<"DailyChallenge"> | number
  }

  export type DailyEntryCreateWithoutPlayerInput = {
    won?: boolean
    firstTry?: boolean
    attemptsUsed?: number
    streak?: number
    createdAt?: Date | string
    challenge: DailyChallengeCreateNestedOneWithoutEntriesInput
  }

  export type DailyEntryUncheckedCreateWithoutPlayerInput = {
    id?: number
    challengeId: number
    won?: boolean
    firstTry?: boolean
    attemptsUsed?: number
    streak?: number
    createdAt?: Date | string
  }

  export type DailyEntryCreateOrConnectWithoutPlayerInput = {
    where: DailyEntryWhereUniqueInput
    create: XOR<DailyEntryCreateWithoutPlayerInput, DailyEntryUncheckedCreateWithoutPlayerInput>
  }

  export type DailyEntryCreateManyPlayerInputEnvelope = {
    data: DailyEntryCreateManyPlayerInput | DailyEntryCreateManyPlayerInput[]
    skipDuplicates?: boolean
  }

  export type ArcadeScoreCreateWithoutPlayerInput = {
    points: number
    difficulty: string
    createdAt?: Date | string
  }

  export type ArcadeScoreUncheckedCreateWithoutPlayerInput = {
    id?: number
    points: number
    difficulty: string
    createdAt?: Date | string
  }

  export type ArcadeScoreCreateOrConnectWithoutPlayerInput = {
    where: ArcadeScoreWhereUniqueInput
    create: XOR<ArcadeScoreCreateWithoutPlayerInput, ArcadeScoreUncheckedCreateWithoutPlayerInput>
  }

  export type ArcadeScoreCreateManyPlayerInputEnvelope = {
    data: ArcadeScoreCreateManyPlayerInput | ArcadeScoreCreateManyPlayerInput[]
    skipDuplicates?: boolean
  }

  export type DailyEntryUpsertWithWhereUniqueWithoutPlayerInput = {
    where: DailyEntryWhereUniqueInput
    update: XOR<DailyEntryUpdateWithoutPlayerInput, DailyEntryUncheckedUpdateWithoutPlayerInput>
    create: XOR<DailyEntryCreateWithoutPlayerInput, DailyEntryUncheckedCreateWithoutPlayerInput>
  }

  export type DailyEntryUpdateWithWhereUniqueWithoutPlayerInput = {
    where: DailyEntryWhereUniqueInput
    data: XOR<DailyEntryUpdateWithoutPlayerInput, DailyEntryUncheckedUpdateWithoutPlayerInput>
  }

  export type DailyEntryUpdateManyWithWhereWithoutPlayerInput = {
    where: DailyEntryScalarWhereInput
    data: XOR<DailyEntryUpdateManyMutationInput, DailyEntryUncheckedUpdateManyWithoutPlayerInput>
  }

  export type DailyEntryScalarWhereInput = {
    AND?: DailyEntryScalarWhereInput | DailyEntryScalarWhereInput[]
    OR?: DailyEntryScalarWhereInput[]
    NOT?: DailyEntryScalarWhereInput | DailyEntryScalarWhereInput[]
    id?: IntFilter<"DailyEntry"> | number
    playerId?: IntFilter<"DailyEntry"> | number
    challengeId?: IntFilter<"DailyEntry"> | number
    won?: BoolFilter<"DailyEntry"> | boolean
    firstTry?: BoolFilter<"DailyEntry"> | boolean
    attemptsUsed?: IntFilter<"DailyEntry"> | number
    streak?: IntFilter<"DailyEntry"> | number
    createdAt?: DateTimeFilter<"DailyEntry"> | Date | string
  }

  export type ArcadeScoreUpsertWithWhereUniqueWithoutPlayerInput = {
    where: ArcadeScoreWhereUniqueInput
    update: XOR<ArcadeScoreUpdateWithoutPlayerInput, ArcadeScoreUncheckedUpdateWithoutPlayerInput>
    create: XOR<ArcadeScoreCreateWithoutPlayerInput, ArcadeScoreUncheckedCreateWithoutPlayerInput>
  }

  export type ArcadeScoreUpdateWithWhereUniqueWithoutPlayerInput = {
    where: ArcadeScoreWhereUniqueInput
    data: XOR<ArcadeScoreUpdateWithoutPlayerInput, ArcadeScoreUncheckedUpdateWithoutPlayerInput>
  }

  export type ArcadeScoreUpdateManyWithWhereWithoutPlayerInput = {
    where: ArcadeScoreScalarWhereInput
    data: XOR<ArcadeScoreUpdateManyMutationInput, ArcadeScoreUncheckedUpdateManyWithoutPlayerInput>
  }

  export type ArcadeScoreScalarWhereInput = {
    AND?: ArcadeScoreScalarWhereInput | ArcadeScoreScalarWhereInput[]
    OR?: ArcadeScoreScalarWhereInput[]
    NOT?: ArcadeScoreScalarWhereInput | ArcadeScoreScalarWhereInput[]
    id?: IntFilter<"ArcadeScore"> | number
    playerId?: IntFilter<"ArcadeScore"> | number
    points?: IntFilter<"ArcadeScore"> | number
    difficulty?: StringFilter<"ArcadeScore"> | string
    createdAt?: DateTimeFilter<"ArcadeScore"> | Date | string
  }

  export type WordCreateWithoutDailyChallengesInput = {
    word: string
    hint?: string | null
    difficulty?: string
    createdAt?: Date | string
  }

  export type WordUncheckedCreateWithoutDailyChallengesInput = {
    id?: number
    word: string
    hint?: string | null
    difficulty?: string
    createdAt?: Date | string
  }

  export type WordCreateOrConnectWithoutDailyChallengesInput = {
    where: WordWhereUniqueInput
    create: XOR<WordCreateWithoutDailyChallengesInput, WordUncheckedCreateWithoutDailyChallengesInput>
  }

  export type DailyEntryCreateWithoutChallengeInput = {
    won?: boolean
    firstTry?: boolean
    attemptsUsed?: number
    streak?: number
    createdAt?: Date | string
    player: PlayerCreateNestedOneWithoutDailyEntriesInput
  }

  export type DailyEntryUncheckedCreateWithoutChallengeInput = {
    id?: number
    playerId: number
    won?: boolean
    firstTry?: boolean
    attemptsUsed?: number
    streak?: number
    createdAt?: Date | string
  }

  export type DailyEntryCreateOrConnectWithoutChallengeInput = {
    where: DailyEntryWhereUniqueInput
    create: XOR<DailyEntryCreateWithoutChallengeInput, DailyEntryUncheckedCreateWithoutChallengeInput>
  }

  export type DailyEntryCreateManyChallengeInputEnvelope = {
    data: DailyEntryCreateManyChallengeInput | DailyEntryCreateManyChallengeInput[]
    skipDuplicates?: boolean
  }

  export type WordUpsertWithoutDailyChallengesInput = {
    update: XOR<WordUpdateWithoutDailyChallengesInput, WordUncheckedUpdateWithoutDailyChallengesInput>
    create: XOR<WordCreateWithoutDailyChallengesInput, WordUncheckedCreateWithoutDailyChallengesInput>
    where?: WordWhereInput
  }

  export type WordUpdateToOneWithWhereWithoutDailyChallengesInput = {
    where?: WordWhereInput
    data: XOR<WordUpdateWithoutDailyChallengesInput, WordUncheckedUpdateWithoutDailyChallengesInput>
  }

  export type WordUpdateWithoutDailyChallengesInput = {
    word?: StringFieldUpdateOperationsInput | string
    hint?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WordUncheckedUpdateWithoutDailyChallengesInput = {
    id?: IntFieldUpdateOperationsInput | number
    word?: StringFieldUpdateOperationsInput | string
    hint?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyEntryUpsertWithWhereUniqueWithoutChallengeInput = {
    where: DailyEntryWhereUniqueInput
    update: XOR<DailyEntryUpdateWithoutChallengeInput, DailyEntryUncheckedUpdateWithoutChallengeInput>
    create: XOR<DailyEntryCreateWithoutChallengeInput, DailyEntryUncheckedCreateWithoutChallengeInput>
  }

  export type DailyEntryUpdateWithWhereUniqueWithoutChallengeInput = {
    where: DailyEntryWhereUniqueInput
    data: XOR<DailyEntryUpdateWithoutChallengeInput, DailyEntryUncheckedUpdateWithoutChallengeInput>
  }

  export type DailyEntryUpdateManyWithWhereWithoutChallengeInput = {
    where: DailyEntryScalarWhereInput
    data: XOR<DailyEntryUpdateManyMutationInput, DailyEntryUncheckedUpdateManyWithoutChallengeInput>
  }

  export type PlayerCreateWithoutDailyEntriesInput = {
    name: string
    createdAt?: Date | string
    arcadeScores?: ArcadeScoreCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUncheckedCreateWithoutDailyEntriesInput = {
    id?: number
    name: string
    createdAt?: Date | string
    arcadeScores?: ArcadeScoreUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type PlayerCreateOrConnectWithoutDailyEntriesInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutDailyEntriesInput, PlayerUncheckedCreateWithoutDailyEntriesInput>
  }

  export type DailyChallengeCreateWithoutEntriesInput = {
    date: string
    word: WordCreateNestedOneWithoutDailyChallengesInput
  }

  export type DailyChallengeUncheckedCreateWithoutEntriesInput = {
    id?: number
    date: string
    wordId: number
  }

  export type DailyChallengeCreateOrConnectWithoutEntriesInput = {
    where: DailyChallengeWhereUniqueInput
    create: XOR<DailyChallengeCreateWithoutEntriesInput, DailyChallengeUncheckedCreateWithoutEntriesInput>
  }

  export type PlayerUpsertWithoutDailyEntriesInput = {
    update: XOR<PlayerUpdateWithoutDailyEntriesInput, PlayerUncheckedUpdateWithoutDailyEntriesInput>
    create: XOR<PlayerCreateWithoutDailyEntriesInput, PlayerUncheckedCreateWithoutDailyEntriesInput>
    where?: PlayerWhereInput
  }

  export type PlayerUpdateToOneWithWhereWithoutDailyEntriesInput = {
    where?: PlayerWhereInput
    data: XOR<PlayerUpdateWithoutDailyEntriesInput, PlayerUncheckedUpdateWithoutDailyEntriesInput>
  }

  export type PlayerUpdateWithoutDailyEntriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    arcadeScores?: ArcadeScoreUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateWithoutDailyEntriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    arcadeScores?: ArcadeScoreUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type DailyChallengeUpsertWithoutEntriesInput = {
    update: XOR<DailyChallengeUpdateWithoutEntriesInput, DailyChallengeUncheckedUpdateWithoutEntriesInput>
    create: XOR<DailyChallengeCreateWithoutEntriesInput, DailyChallengeUncheckedCreateWithoutEntriesInput>
    where?: DailyChallengeWhereInput
  }

  export type DailyChallengeUpdateToOneWithWhereWithoutEntriesInput = {
    where?: DailyChallengeWhereInput
    data: XOR<DailyChallengeUpdateWithoutEntriesInput, DailyChallengeUncheckedUpdateWithoutEntriesInput>
  }

  export type DailyChallengeUpdateWithoutEntriesInput = {
    date?: StringFieldUpdateOperationsInput | string
    word?: WordUpdateOneRequiredWithoutDailyChallengesNestedInput
  }

  export type DailyChallengeUncheckedUpdateWithoutEntriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    wordId?: IntFieldUpdateOperationsInput | number
  }

  export type PlayerCreateWithoutArcadeScoresInput = {
    name: string
    createdAt?: Date | string
    dailyEntries?: DailyEntryCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUncheckedCreateWithoutArcadeScoresInput = {
    id?: number
    name: string
    createdAt?: Date | string
    dailyEntries?: DailyEntryUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type PlayerCreateOrConnectWithoutArcadeScoresInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutArcadeScoresInput, PlayerUncheckedCreateWithoutArcadeScoresInput>
  }

  export type PlayerUpsertWithoutArcadeScoresInput = {
    update: XOR<PlayerUpdateWithoutArcadeScoresInput, PlayerUncheckedUpdateWithoutArcadeScoresInput>
    create: XOR<PlayerCreateWithoutArcadeScoresInput, PlayerUncheckedCreateWithoutArcadeScoresInput>
    where?: PlayerWhereInput
  }

  export type PlayerUpdateToOneWithWhereWithoutArcadeScoresInput = {
    where?: PlayerWhereInput
    data: XOR<PlayerUpdateWithoutArcadeScoresInput, PlayerUncheckedUpdateWithoutArcadeScoresInput>
  }

  export type PlayerUpdateWithoutArcadeScoresInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyEntries?: DailyEntryUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateWithoutArcadeScoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyEntries?: DailyEntryUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type DailyChallengeCreateManyWordInput = {
    id?: number
    date: string
  }

  export type DailyChallengeUpdateWithoutWordInput = {
    date?: StringFieldUpdateOperationsInput | string
    entries?: DailyEntryUpdateManyWithoutChallengeNestedInput
  }

  export type DailyChallengeUncheckedUpdateWithoutWordInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    entries?: DailyEntryUncheckedUpdateManyWithoutChallengeNestedInput
  }

  export type DailyChallengeUncheckedUpdateManyWithoutWordInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
  }

  export type DailyEntryCreateManyPlayerInput = {
    id?: number
    challengeId: number
    won?: boolean
    firstTry?: boolean
    attemptsUsed?: number
    streak?: number
    createdAt?: Date | string
  }

  export type ArcadeScoreCreateManyPlayerInput = {
    id?: number
    points: number
    difficulty: string
    createdAt?: Date | string
  }

  export type DailyEntryUpdateWithoutPlayerInput = {
    won?: BoolFieldUpdateOperationsInput | boolean
    firstTry?: BoolFieldUpdateOperationsInput | boolean
    attemptsUsed?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challenge?: DailyChallengeUpdateOneRequiredWithoutEntriesNestedInput
  }

  export type DailyEntryUncheckedUpdateWithoutPlayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    challengeId?: IntFieldUpdateOperationsInput | number
    won?: BoolFieldUpdateOperationsInput | boolean
    firstTry?: BoolFieldUpdateOperationsInput | boolean
    attemptsUsed?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyEntryUncheckedUpdateManyWithoutPlayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    challengeId?: IntFieldUpdateOperationsInput | number
    won?: BoolFieldUpdateOperationsInput | boolean
    firstTry?: BoolFieldUpdateOperationsInput | boolean
    attemptsUsed?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArcadeScoreUpdateWithoutPlayerInput = {
    points?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArcadeScoreUncheckedUpdateWithoutPlayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArcadeScoreUncheckedUpdateManyWithoutPlayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyEntryCreateManyChallengeInput = {
    id?: number
    playerId: number
    won?: boolean
    firstTry?: boolean
    attemptsUsed?: number
    streak?: number
    createdAt?: Date | string
  }

  export type DailyEntryUpdateWithoutChallengeInput = {
    won?: BoolFieldUpdateOperationsInput | boolean
    firstTry?: BoolFieldUpdateOperationsInput | boolean
    attemptsUsed?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player?: PlayerUpdateOneRequiredWithoutDailyEntriesNestedInput
  }

  export type DailyEntryUncheckedUpdateWithoutChallengeInput = {
    id?: IntFieldUpdateOperationsInput | number
    playerId?: IntFieldUpdateOperationsInput | number
    won?: BoolFieldUpdateOperationsInput | boolean
    firstTry?: BoolFieldUpdateOperationsInput | boolean
    attemptsUsed?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyEntryUncheckedUpdateManyWithoutChallengeInput = {
    id?: IntFieldUpdateOperationsInput | number
    playerId?: IntFieldUpdateOperationsInput | number
    won?: BoolFieldUpdateOperationsInput | boolean
    firstTry?: BoolFieldUpdateOperationsInput | boolean
    attemptsUsed?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
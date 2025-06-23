
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
 * Model APPLICATION
 * 
 */
export type APPLICATION = $Result.DefaultSelection<Prisma.$APPLICATIONPayload>
/**
 * Model COMMITTEE_REVIEW
 * 
 */
export type COMMITTEE_REVIEW = $Result.DefaultSelection<Prisma.$COMMITTEE_REVIEWPayload>
/**
 * Model DOCUMENT
 * 
 */
export type DOCUMENT = $Result.DefaultSelection<Prisma.$DOCUMENTPayload>
/**
 * Model ELIGIBILITY_CRITERIA
 * 
 */
export type ELIGIBILITY_CRITERIA = $Result.DefaultSelection<Prisma.$ELIGIBILITY_CRITERIAPayload>
/**
 * Model FAMILY_MEMBER
 * 
 */
export type FAMILY_MEMBER = $Result.DefaultSelection<Prisma.$FAMILY_MEMBERPayload>
/**
 * Model NOTIFICATION
 * 
 */
export type NOTIFICATION = $Result.DefaultSelection<Prisma.$NOTIFICATIONPayload>
/**
 * Model OTHER_FUNDING
 * 
 */
export type OTHER_FUNDING = $Result.DefaultSelection<Prisma.$OTHER_FUNDINGPayload>
/**
 * Model PAYMENT
 * 
 */
export type PAYMENT = $Result.DefaultSelection<Prisma.$PAYMENTPayload>
/**
 * Model SCHOLARSHIP
 * 
 */
export type SCHOLARSHIP = $Result.DefaultSelection<Prisma.$SCHOLARSHIPPayload>
/**
 * Model SCHOLARSHIP_PROVIDER
 * 
 */
export type SCHOLARSHIP_PROVIDER = $Result.DefaultSelection<Prisma.$SCHOLARSHIP_PROVIDERPayload>
/**
 * Model SIBLING_EDUCATION
 * 
 */
export type SIBLING_EDUCATION = $Result.DefaultSelection<Prisma.$SIBLING_EDUCATIONPayload>
/**
 * Model STUDENT
 * 
 */
export type STUDENT = $Result.DefaultSelection<Prisma.$STUDENTPayload>
/**
 * Model USER
 * 
 */
export type USER = $Result.DefaultSelection<Prisma.$USERPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const APPLICATION_status: {
  pending: 'pending',
  reviewed: 'reviewed',
  approved: 'approved',
  rejected: 'rejected'
};

export type APPLICATION_status = (typeof APPLICATION_status)[keyof typeof APPLICATION_status]


export const COMMITTEE_REVIEW_status: {
  read: 'read',
  unread: 'unread'
};

export type COMMITTEE_REVIEW_status = (typeof COMMITTEE_REVIEW_status)[keyof typeof COMMITTEE_REVIEW_status]


export const DOCUMENT_verification_status: {
  pending: 'pending',
  verified: 'verified',
  rejected: 'rejected'
};

export type DOCUMENT_verification_status = (typeof DOCUMENT_verification_status)[keyof typeof DOCUMENT_verification_status]


export const PAYMENT_status: {
  pending: 'pending',
  completed: 'completed',
  failed: 'failed'
};

export type PAYMENT_status = (typeof PAYMENT_status)[keyof typeof PAYMENT_status]


export const USER_role: {
  student: 'student',
  coordinator: 'coordinator',
  admin: 'admin'
};

export type USER_role = (typeof USER_role)[keyof typeof USER_role]


export const STUDENT_gender: {
  male: 'male',
  female: 'female',
  other: 'other'
};

export type STUDENT_gender = (typeof STUDENT_gender)[keyof typeof STUDENT_gender]

}

export type APPLICATION_status = $Enums.APPLICATION_status

export const APPLICATION_status: typeof $Enums.APPLICATION_status

export type COMMITTEE_REVIEW_status = $Enums.COMMITTEE_REVIEW_status

export const COMMITTEE_REVIEW_status: typeof $Enums.COMMITTEE_REVIEW_status

export type DOCUMENT_verification_status = $Enums.DOCUMENT_verification_status

export const DOCUMENT_verification_status: typeof $Enums.DOCUMENT_verification_status

export type PAYMENT_status = $Enums.PAYMENT_status

export const PAYMENT_status: typeof $Enums.PAYMENT_status

export type USER_role = $Enums.USER_role

export const USER_role: typeof $Enums.USER_role

export type STUDENT_gender = $Enums.STUDENT_gender

export const STUDENT_gender: typeof $Enums.STUDENT_gender

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more APPLICATIONS
 * const aPPLICATIONS = await prisma.aPPLICATION.findMany()
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
   * // Fetch zero or more APPLICATIONS
   * const aPPLICATIONS = await prisma.aPPLICATION.findMany()
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
   * `prisma.aPPLICATION`: Exposes CRUD operations for the **APPLICATION** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more APPLICATIONS
    * const aPPLICATIONS = await prisma.aPPLICATION.findMany()
    * ```
    */
  get aPPLICATION(): Prisma.APPLICATIONDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cOMMITTEE_REVIEW`: Exposes CRUD operations for the **COMMITTEE_REVIEW** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more COMMITTEE_REVIEWS
    * const cOMMITTEE_REVIEWS = await prisma.cOMMITTEE_REVIEW.findMany()
    * ```
    */
  get cOMMITTEE_REVIEW(): Prisma.COMMITTEE_REVIEWDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dOCUMENT`: Exposes CRUD operations for the **DOCUMENT** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DOCUMENTS
    * const dOCUMENTS = await prisma.dOCUMENT.findMany()
    * ```
    */
  get dOCUMENT(): Prisma.DOCUMENTDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eLIGIBILITY_CRITERIA`: Exposes CRUD operations for the **ELIGIBILITY_CRITERIA** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ELIGIBILITY_CRITERIA
    * const eLIGIBILITY_CRITERIA = await prisma.eLIGIBILITY_CRITERIA.findMany()
    * ```
    */
  get eLIGIBILITY_CRITERIA(): Prisma.ELIGIBILITY_CRITERIADelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fAMILY_MEMBER`: Exposes CRUD operations for the **FAMILY_MEMBER** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FAMILY_MEMBERS
    * const fAMILY_MEMBERS = await prisma.fAMILY_MEMBER.findMany()
    * ```
    */
  get fAMILY_MEMBER(): Prisma.FAMILY_MEMBERDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.nOTIFICATION`: Exposes CRUD operations for the **NOTIFICATION** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NOTIFICATIONS
    * const nOTIFICATIONS = await prisma.nOTIFICATION.findMany()
    * ```
    */
  get nOTIFICATION(): Prisma.NOTIFICATIONDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.oTHER_FUNDING`: Exposes CRUD operations for the **OTHER_FUNDING** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OTHER_FUNDINGS
    * const oTHER_FUNDINGS = await prisma.oTHER_FUNDING.findMany()
    * ```
    */
  get oTHER_FUNDING(): Prisma.OTHER_FUNDINGDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pAYMENT`: Exposes CRUD operations for the **PAYMENT** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PAYMENTS
    * const pAYMENTS = await prisma.pAYMENT.findMany()
    * ```
    */
  get pAYMENT(): Prisma.PAYMENTDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sCHOLARSHIP`: Exposes CRUD operations for the **SCHOLARSHIP** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SCHOLARSHIPS
    * const sCHOLARSHIPS = await prisma.sCHOLARSHIP.findMany()
    * ```
    */
  get sCHOLARSHIP(): Prisma.SCHOLARSHIPDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sCHOLARSHIP_PROVIDER`: Exposes CRUD operations for the **SCHOLARSHIP_PROVIDER** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SCHOLARSHIP_PROVIDERS
    * const sCHOLARSHIP_PROVIDERS = await prisma.sCHOLARSHIP_PROVIDER.findMany()
    * ```
    */
  get sCHOLARSHIP_PROVIDER(): Prisma.SCHOLARSHIP_PROVIDERDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sIBLING_EDUCATION`: Exposes CRUD operations for the **SIBLING_EDUCATION** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SIBLING_EDUCATIONS
    * const sIBLING_EDUCATIONS = await prisma.sIBLING_EDUCATION.findMany()
    * ```
    */
  get sIBLING_EDUCATION(): Prisma.SIBLING_EDUCATIONDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sTUDENT`: Exposes CRUD operations for the **STUDENT** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more STUDENTS
    * const sTUDENTS = await prisma.sTUDENT.findMany()
    * ```
    */
  get sTUDENT(): Prisma.STUDENTDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.uSER`: Exposes CRUD operations for the **USER** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more USERS
    * const uSERS = await prisma.uSER.findMany()
    * ```
    */
  get uSER(): Prisma.USERDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
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
    APPLICATION: 'APPLICATION',
    COMMITTEE_REVIEW: 'COMMITTEE_REVIEW',
    DOCUMENT: 'DOCUMENT',
    ELIGIBILITY_CRITERIA: 'ELIGIBILITY_CRITERIA',
    FAMILY_MEMBER: 'FAMILY_MEMBER',
    NOTIFICATION: 'NOTIFICATION',
    OTHER_FUNDING: 'OTHER_FUNDING',
    PAYMENT: 'PAYMENT',
    SCHOLARSHIP: 'SCHOLARSHIP',
    SCHOLARSHIP_PROVIDER: 'SCHOLARSHIP_PROVIDER',
    SIBLING_EDUCATION: 'SIBLING_EDUCATION',
    STUDENT: 'STUDENT',
    USER: 'USER'
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
      modelProps: "aPPLICATION" | "cOMMITTEE_REVIEW" | "dOCUMENT" | "eLIGIBILITY_CRITERIA" | "fAMILY_MEMBER" | "nOTIFICATION" | "oTHER_FUNDING" | "pAYMENT" | "sCHOLARSHIP" | "sCHOLARSHIP_PROVIDER" | "sIBLING_EDUCATION" | "sTUDENT" | "uSER"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      APPLICATION: {
        payload: Prisma.$APPLICATIONPayload<ExtArgs>
        fields: Prisma.APPLICATIONFieldRefs
        operations: {
          findUnique: {
            args: Prisma.APPLICATIONFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$APPLICATIONPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.APPLICATIONFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$APPLICATIONPayload>
          }
          findFirst: {
            args: Prisma.APPLICATIONFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$APPLICATIONPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.APPLICATIONFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$APPLICATIONPayload>
          }
          findMany: {
            args: Prisma.APPLICATIONFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$APPLICATIONPayload>[]
          }
          create: {
            args: Prisma.APPLICATIONCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$APPLICATIONPayload>
          }
          createMany: {
            args: Prisma.APPLICATIONCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.APPLICATIONDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$APPLICATIONPayload>
          }
          update: {
            args: Prisma.APPLICATIONUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$APPLICATIONPayload>
          }
          deleteMany: {
            args: Prisma.APPLICATIONDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.APPLICATIONUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.APPLICATIONUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$APPLICATIONPayload>
          }
          aggregate: {
            args: Prisma.APPLICATIONAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAPPLICATION>
          }
          groupBy: {
            args: Prisma.APPLICATIONGroupByArgs<ExtArgs>
            result: $Utils.Optional<APPLICATIONGroupByOutputType>[]
          }
          count: {
            args: Prisma.APPLICATIONCountArgs<ExtArgs>
            result: $Utils.Optional<APPLICATIONCountAggregateOutputType> | number
          }
        }
      }
      COMMITTEE_REVIEW: {
        payload: Prisma.$COMMITTEE_REVIEWPayload<ExtArgs>
        fields: Prisma.COMMITTEE_REVIEWFieldRefs
        operations: {
          findUnique: {
            args: Prisma.COMMITTEE_REVIEWFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$COMMITTEE_REVIEWPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.COMMITTEE_REVIEWFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$COMMITTEE_REVIEWPayload>
          }
          findFirst: {
            args: Prisma.COMMITTEE_REVIEWFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$COMMITTEE_REVIEWPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.COMMITTEE_REVIEWFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$COMMITTEE_REVIEWPayload>
          }
          findMany: {
            args: Prisma.COMMITTEE_REVIEWFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$COMMITTEE_REVIEWPayload>[]
          }
          create: {
            args: Prisma.COMMITTEE_REVIEWCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$COMMITTEE_REVIEWPayload>
          }
          createMany: {
            args: Prisma.COMMITTEE_REVIEWCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.COMMITTEE_REVIEWDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$COMMITTEE_REVIEWPayload>
          }
          update: {
            args: Prisma.COMMITTEE_REVIEWUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$COMMITTEE_REVIEWPayload>
          }
          deleteMany: {
            args: Prisma.COMMITTEE_REVIEWDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.COMMITTEE_REVIEWUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.COMMITTEE_REVIEWUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$COMMITTEE_REVIEWPayload>
          }
          aggregate: {
            args: Prisma.COMMITTEE_REVIEWAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCOMMITTEE_REVIEW>
          }
          groupBy: {
            args: Prisma.COMMITTEE_REVIEWGroupByArgs<ExtArgs>
            result: $Utils.Optional<COMMITTEE_REVIEWGroupByOutputType>[]
          }
          count: {
            args: Prisma.COMMITTEE_REVIEWCountArgs<ExtArgs>
            result: $Utils.Optional<COMMITTEE_REVIEWCountAggregateOutputType> | number
          }
        }
      }
      DOCUMENT: {
        payload: Prisma.$DOCUMENTPayload<ExtArgs>
        fields: Prisma.DOCUMENTFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DOCUMENTFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DOCUMENTPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DOCUMENTFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DOCUMENTPayload>
          }
          findFirst: {
            args: Prisma.DOCUMENTFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DOCUMENTPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DOCUMENTFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DOCUMENTPayload>
          }
          findMany: {
            args: Prisma.DOCUMENTFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DOCUMENTPayload>[]
          }
          create: {
            args: Prisma.DOCUMENTCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DOCUMENTPayload>
          }
          createMany: {
            args: Prisma.DOCUMENTCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DOCUMENTDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DOCUMENTPayload>
          }
          update: {
            args: Prisma.DOCUMENTUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DOCUMENTPayload>
          }
          deleteMany: {
            args: Prisma.DOCUMENTDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DOCUMENTUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DOCUMENTUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DOCUMENTPayload>
          }
          aggregate: {
            args: Prisma.DOCUMENTAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDOCUMENT>
          }
          groupBy: {
            args: Prisma.DOCUMENTGroupByArgs<ExtArgs>
            result: $Utils.Optional<DOCUMENTGroupByOutputType>[]
          }
          count: {
            args: Prisma.DOCUMENTCountArgs<ExtArgs>
            result: $Utils.Optional<DOCUMENTCountAggregateOutputType> | number
          }
        }
      }
      ELIGIBILITY_CRITERIA: {
        payload: Prisma.$ELIGIBILITY_CRITERIAPayload<ExtArgs>
        fields: Prisma.ELIGIBILITY_CRITERIAFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ELIGIBILITY_CRITERIAFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ELIGIBILITY_CRITERIAPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ELIGIBILITY_CRITERIAFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ELIGIBILITY_CRITERIAPayload>
          }
          findFirst: {
            args: Prisma.ELIGIBILITY_CRITERIAFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ELIGIBILITY_CRITERIAPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ELIGIBILITY_CRITERIAFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ELIGIBILITY_CRITERIAPayload>
          }
          findMany: {
            args: Prisma.ELIGIBILITY_CRITERIAFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ELIGIBILITY_CRITERIAPayload>[]
          }
          create: {
            args: Prisma.ELIGIBILITY_CRITERIACreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ELIGIBILITY_CRITERIAPayload>
          }
          createMany: {
            args: Prisma.ELIGIBILITY_CRITERIACreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ELIGIBILITY_CRITERIADeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ELIGIBILITY_CRITERIAPayload>
          }
          update: {
            args: Prisma.ELIGIBILITY_CRITERIAUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ELIGIBILITY_CRITERIAPayload>
          }
          deleteMany: {
            args: Prisma.ELIGIBILITY_CRITERIADeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ELIGIBILITY_CRITERIAUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ELIGIBILITY_CRITERIAUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ELIGIBILITY_CRITERIAPayload>
          }
          aggregate: {
            args: Prisma.ELIGIBILITY_CRITERIAAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateELIGIBILITY_CRITERIA>
          }
          groupBy: {
            args: Prisma.ELIGIBILITY_CRITERIAGroupByArgs<ExtArgs>
            result: $Utils.Optional<ELIGIBILITY_CRITERIAGroupByOutputType>[]
          }
          count: {
            args: Prisma.ELIGIBILITY_CRITERIACountArgs<ExtArgs>
            result: $Utils.Optional<ELIGIBILITY_CRITERIACountAggregateOutputType> | number
          }
        }
      }
      FAMILY_MEMBER: {
        payload: Prisma.$FAMILY_MEMBERPayload<ExtArgs>
        fields: Prisma.FAMILY_MEMBERFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FAMILY_MEMBERFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAMILY_MEMBERPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FAMILY_MEMBERFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAMILY_MEMBERPayload>
          }
          findFirst: {
            args: Prisma.FAMILY_MEMBERFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAMILY_MEMBERPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FAMILY_MEMBERFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAMILY_MEMBERPayload>
          }
          findMany: {
            args: Prisma.FAMILY_MEMBERFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAMILY_MEMBERPayload>[]
          }
          create: {
            args: Prisma.FAMILY_MEMBERCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAMILY_MEMBERPayload>
          }
          createMany: {
            args: Prisma.FAMILY_MEMBERCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FAMILY_MEMBERDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAMILY_MEMBERPayload>
          }
          update: {
            args: Prisma.FAMILY_MEMBERUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAMILY_MEMBERPayload>
          }
          deleteMany: {
            args: Prisma.FAMILY_MEMBERDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FAMILY_MEMBERUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FAMILY_MEMBERUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAMILY_MEMBERPayload>
          }
          aggregate: {
            args: Prisma.FAMILY_MEMBERAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFAMILY_MEMBER>
          }
          groupBy: {
            args: Prisma.FAMILY_MEMBERGroupByArgs<ExtArgs>
            result: $Utils.Optional<FAMILY_MEMBERGroupByOutputType>[]
          }
          count: {
            args: Prisma.FAMILY_MEMBERCountArgs<ExtArgs>
            result: $Utils.Optional<FAMILY_MEMBERCountAggregateOutputType> | number
          }
        }
      }
      NOTIFICATION: {
        payload: Prisma.$NOTIFICATIONPayload<ExtArgs>
        fields: Prisma.NOTIFICATIONFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NOTIFICATIONFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NOTIFICATIONPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NOTIFICATIONFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NOTIFICATIONPayload>
          }
          findFirst: {
            args: Prisma.NOTIFICATIONFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NOTIFICATIONPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NOTIFICATIONFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NOTIFICATIONPayload>
          }
          findMany: {
            args: Prisma.NOTIFICATIONFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NOTIFICATIONPayload>[]
          }
          create: {
            args: Prisma.NOTIFICATIONCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NOTIFICATIONPayload>
          }
          createMany: {
            args: Prisma.NOTIFICATIONCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NOTIFICATIONDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NOTIFICATIONPayload>
          }
          update: {
            args: Prisma.NOTIFICATIONUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NOTIFICATIONPayload>
          }
          deleteMany: {
            args: Prisma.NOTIFICATIONDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NOTIFICATIONUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NOTIFICATIONUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NOTIFICATIONPayload>
          }
          aggregate: {
            args: Prisma.NOTIFICATIONAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNOTIFICATION>
          }
          groupBy: {
            args: Prisma.NOTIFICATIONGroupByArgs<ExtArgs>
            result: $Utils.Optional<NOTIFICATIONGroupByOutputType>[]
          }
          count: {
            args: Prisma.NOTIFICATIONCountArgs<ExtArgs>
            result: $Utils.Optional<NOTIFICATIONCountAggregateOutputType> | number
          }
        }
      }
      OTHER_FUNDING: {
        payload: Prisma.$OTHER_FUNDINGPayload<ExtArgs>
        fields: Prisma.OTHER_FUNDINGFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OTHER_FUNDINGFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTHER_FUNDINGPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OTHER_FUNDINGFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTHER_FUNDINGPayload>
          }
          findFirst: {
            args: Prisma.OTHER_FUNDINGFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTHER_FUNDINGPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OTHER_FUNDINGFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTHER_FUNDINGPayload>
          }
          findMany: {
            args: Prisma.OTHER_FUNDINGFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTHER_FUNDINGPayload>[]
          }
          create: {
            args: Prisma.OTHER_FUNDINGCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTHER_FUNDINGPayload>
          }
          createMany: {
            args: Prisma.OTHER_FUNDINGCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OTHER_FUNDINGDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTHER_FUNDINGPayload>
          }
          update: {
            args: Prisma.OTHER_FUNDINGUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTHER_FUNDINGPayload>
          }
          deleteMany: {
            args: Prisma.OTHER_FUNDINGDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OTHER_FUNDINGUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OTHER_FUNDINGUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTHER_FUNDINGPayload>
          }
          aggregate: {
            args: Prisma.OTHER_FUNDINGAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOTHER_FUNDING>
          }
          groupBy: {
            args: Prisma.OTHER_FUNDINGGroupByArgs<ExtArgs>
            result: $Utils.Optional<OTHER_FUNDINGGroupByOutputType>[]
          }
          count: {
            args: Prisma.OTHER_FUNDINGCountArgs<ExtArgs>
            result: $Utils.Optional<OTHER_FUNDINGCountAggregateOutputType> | number
          }
        }
      }
      PAYMENT: {
        payload: Prisma.$PAYMENTPayload<ExtArgs>
        fields: Prisma.PAYMENTFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PAYMENTFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAYMENTPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PAYMENTFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAYMENTPayload>
          }
          findFirst: {
            args: Prisma.PAYMENTFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAYMENTPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PAYMENTFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAYMENTPayload>
          }
          findMany: {
            args: Prisma.PAYMENTFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAYMENTPayload>[]
          }
          create: {
            args: Prisma.PAYMENTCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAYMENTPayload>
          }
          createMany: {
            args: Prisma.PAYMENTCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PAYMENTDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAYMENTPayload>
          }
          update: {
            args: Prisma.PAYMENTUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAYMENTPayload>
          }
          deleteMany: {
            args: Prisma.PAYMENTDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PAYMENTUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PAYMENTUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAYMENTPayload>
          }
          aggregate: {
            args: Prisma.PAYMENTAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePAYMENT>
          }
          groupBy: {
            args: Prisma.PAYMENTGroupByArgs<ExtArgs>
            result: $Utils.Optional<PAYMENTGroupByOutputType>[]
          }
          count: {
            args: Prisma.PAYMENTCountArgs<ExtArgs>
            result: $Utils.Optional<PAYMENTCountAggregateOutputType> | number
          }
        }
      }
      SCHOLARSHIP: {
        payload: Prisma.$SCHOLARSHIPPayload<ExtArgs>
        fields: Prisma.SCHOLARSHIPFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SCHOLARSHIPFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SCHOLARSHIPPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SCHOLARSHIPFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SCHOLARSHIPPayload>
          }
          findFirst: {
            args: Prisma.SCHOLARSHIPFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SCHOLARSHIPPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SCHOLARSHIPFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SCHOLARSHIPPayload>
          }
          findMany: {
            args: Prisma.SCHOLARSHIPFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SCHOLARSHIPPayload>[]
          }
          create: {
            args: Prisma.SCHOLARSHIPCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SCHOLARSHIPPayload>
          }
          createMany: {
            args: Prisma.SCHOLARSHIPCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SCHOLARSHIPDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SCHOLARSHIPPayload>
          }
          update: {
            args: Prisma.SCHOLARSHIPUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SCHOLARSHIPPayload>
          }
          deleteMany: {
            args: Prisma.SCHOLARSHIPDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SCHOLARSHIPUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SCHOLARSHIPUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SCHOLARSHIPPayload>
          }
          aggregate: {
            args: Prisma.SCHOLARSHIPAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSCHOLARSHIP>
          }
          groupBy: {
            args: Prisma.SCHOLARSHIPGroupByArgs<ExtArgs>
            result: $Utils.Optional<SCHOLARSHIPGroupByOutputType>[]
          }
          count: {
            args: Prisma.SCHOLARSHIPCountArgs<ExtArgs>
            result: $Utils.Optional<SCHOLARSHIPCountAggregateOutputType> | number
          }
        }
      }
      SCHOLARSHIP_PROVIDER: {
        payload: Prisma.$SCHOLARSHIP_PROVIDERPayload<ExtArgs>
        fields: Prisma.SCHOLARSHIP_PROVIDERFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SCHOLARSHIP_PROVIDERFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SCHOLARSHIP_PROVIDERPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SCHOLARSHIP_PROVIDERFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SCHOLARSHIP_PROVIDERPayload>
          }
          findFirst: {
            args: Prisma.SCHOLARSHIP_PROVIDERFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SCHOLARSHIP_PROVIDERPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SCHOLARSHIP_PROVIDERFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SCHOLARSHIP_PROVIDERPayload>
          }
          findMany: {
            args: Prisma.SCHOLARSHIP_PROVIDERFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SCHOLARSHIP_PROVIDERPayload>[]
          }
          create: {
            args: Prisma.SCHOLARSHIP_PROVIDERCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SCHOLARSHIP_PROVIDERPayload>
          }
          createMany: {
            args: Prisma.SCHOLARSHIP_PROVIDERCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SCHOLARSHIP_PROVIDERDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SCHOLARSHIP_PROVIDERPayload>
          }
          update: {
            args: Prisma.SCHOLARSHIP_PROVIDERUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SCHOLARSHIP_PROVIDERPayload>
          }
          deleteMany: {
            args: Prisma.SCHOLARSHIP_PROVIDERDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SCHOLARSHIP_PROVIDERUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SCHOLARSHIP_PROVIDERUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SCHOLARSHIP_PROVIDERPayload>
          }
          aggregate: {
            args: Prisma.SCHOLARSHIP_PROVIDERAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSCHOLARSHIP_PROVIDER>
          }
          groupBy: {
            args: Prisma.SCHOLARSHIP_PROVIDERGroupByArgs<ExtArgs>
            result: $Utils.Optional<SCHOLARSHIP_PROVIDERGroupByOutputType>[]
          }
          count: {
            args: Prisma.SCHOLARSHIP_PROVIDERCountArgs<ExtArgs>
            result: $Utils.Optional<SCHOLARSHIP_PROVIDERCountAggregateOutputType> | number
          }
        }
      }
      SIBLING_EDUCATION: {
        payload: Prisma.$SIBLING_EDUCATIONPayload<ExtArgs>
        fields: Prisma.SIBLING_EDUCATIONFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SIBLING_EDUCATIONFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SIBLING_EDUCATIONPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SIBLING_EDUCATIONFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SIBLING_EDUCATIONPayload>
          }
          findFirst: {
            args: Prisma.SIBLING_EDUCATIONFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SIBLING_EDUCATIONPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SIBLING_EDUCATIONFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SIBLING_EDUCATIONPayload>
          }
          findMany: {
            args: Prisma.SIBLING_EDUCATIONFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SIBLING_EDUCATIONPayload>[]
          }
          create: {
            args: Prisma.SIBLING_EDUCATIONCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SIBLING_EDUCATIONPayload>
          }
          createMany: {
            args: Prisma.SIBLING_EDUCATIONCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SIBLING_EDUCATIONDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SIBLING_EDUCATIONPayload>
          }
          update: {
            args: Prisma.SIBLING_EDUCATIONUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SIBLING_EDUCATIONPayload>
          }
          deleteMany: {
            args: Prisma.SIBLING_EDUCATIONDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SIBLING_EDUCATIONUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SIBLING_EDUCATIONUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SIBLING_EDUCATIONPayload>
          }
          aggregate: {
            args: Prisma.SIBLING_EDUCATIONAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSIBLING_EDUCATION>
          }
          groupBy: {
            args: Prisma.SIBLING_EDUCATIONGroupByArgs<ExtArgs>
            result: $Utils.Optional<SIBLING_EDUCATIONGroupByOutputType>[]
          }
          count: {
            args: Prisma.SIBLING_EDUCATIONCountArgs<ExtArgs>
            result: $Utils.Optional<SIBLING_EDUCATIONCountAggregateOutputType> | number
          }
        }
      }
      STUDENT: {
        payload: Prisma.$STUDENTPayload<ExtArgs>
        fields: Prisma.STUDENTFieldRefs
        operations: {
          findUnique: {
            args: Prisma.STUDENTFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$STUDENTPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.STUDENTFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$STUDENTPayload>
          }
          findFirst: {
            args: Prisma.STUDENTFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$STUDENTPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.STUDENTFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$STUDENTPayload>
          }
          findMany: {
            args: Prisma.STUDENTFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$STUDENTPayload>[]
          }
          create: {
            args: Prisma.STUDENTCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$STUDENTPayload>
          }
          createMany: {
            args: Prisma.STUDENTCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.STUDENTDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$STUDENTPayload>
          }
          update: {
            args: Prisma.STUDENTUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$STUDENTPayload>
          }
          deleteMany: {
            args: Prisma.STUDENTDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.STUDENTUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.STUDENTUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$STUDENTPayload>
          }
          aggregate: {
            args: Prisma.STUDENTAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSTUDENT>
          }
          groupBy: {
            args: Prisma.STUDENTGroupByArgs<ExtArgs>
            result: $Utils.Optional<STUDENTGroupByOutputType>[]
          }
          count: {
            args: Prisma.STUDENTCountArgs<ExtArgs>
            result: $Utils.Optional<STUDENTCountAggregateOutputType> | number
          }
        }
      }
      USER: {
        payload: Prisma.$USERPayload<ExtArgs>
        fields: Prisma.USERFieldRefs
        operations: {
          findUnique: {
            args: Prisma.USERFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USERPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.USERFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USERPayload>
          }
          findFirst: {
            args: Prisma.USERFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USERPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.USERFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USERPayload>
          }
          findMany: {
            args: Prisma.USERFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USERPayload>[]
          }
          create: {
            args: Prisma.USERCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USERPayload>
          }
          createMany: {
            args: Prisma.USERCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.USERDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USERPayload>
          }
          update: {
            args: Prisma.USERUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USERPayload>
          }
          deleteMany: {
            args: Prisma.USERDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.USERUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.USERUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USERPayload>
          }
          aggregate: {
            args: Prisma.USERAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUSER>
          }
          groupBy: {
            args: Prisma.USERGroupByArgs<ExtArgs>
            result: $Utils.Optional<USERGroupByOutputType>[]
          }
          count: {
            args: Prisma.USERCountArgs<ExtArgs>
            result: $Utils.Optional<USERCountAggregateOutputType> | number
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
    aPPLICATION?: APPLICATIONOmit
    cOMMITTEE_REVIEW?: COMMITTEE_REVIEWOmit
    dOCUMENT?: DOCUMENTOmit
    eLIGIBILITY_CRITERIA?: ELIGIBILITY_CRITERIAOmit
    fAMILY_MEMBER?: FAMILY_MEMBEROmit
    nOTIFICATION?: NOTIFICATIONOmit
    oTHER_FUNDING?: OTHER_FUNDINGOmit
    pAYMENT?: PAYMENTOmit
    sCHOLARSHIP?: SCHOLARSHIPOmit
    sCHOLARSHIP_PROVIDER?: SCHOLARSHIP_PROVIDEROmit
    sIBLING_EDUCATION?: SIBLING_EDUCATIONOmit
    sTUDENT?: STUDENTOmit
    uSER?: USEROmit
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
   * Count Type APPLICATIONCountOutputType
   */

  export type APPLICATIONCountOutputType = {
    COMMITTEE_REVIEW: number
    DOCUMENT: number
    PAYMENT: number
  }

  export type APPLICATIONCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    COMMITTEE_REVIEW?: boolean | APPLICATIONCountOutputTypeCountCOMMITTEE_REVIEWArgs
    DOCUMENT?: boolean | APPLICATIONCountOutputTypeCountDOCUMENTArgs
    PAYMENT?: boolean | APPLICATIONCountOutputTypeCountPAYMENTArgs
  }

  // Custom InputTypes
  /**
   * APPLICATIONCountOutputType without action
   */
  export type APPLICATIONCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APPLICATIONCountOutputType
     */
    select?: APPLICATIONCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * APPLICATIONCountOutputType without action
   */
  export type APPLICATIONCountOutputTypeCountCOMMITTEE_REVIEWArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: COMMITTEE_REVIEWWhereInput
  }

  /**
   * APPLICATIONCountOutputType without action
   */
  export type APPLICATIONCountOutputTypeCountDOCUMENTArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DOCUMENTWhereInput
  }

  /**
   * APPLICATIONCountOutputType without action
   */
  export type APPLICATIONCountOutputTypeCountPAYMENTArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PAYMENTWhereInput
  }


  /**
   * Count Type FAMILY_MEMBERCountOutputType
   */

  export type FAMILY_MEMBERCountOutputType = {
    SIBLING_EDUCATION: number
  }

  export type FAMILY_MEMBERCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SIBLING_EDUCATION?: boolean | FAMILY_MEMBERCountOutputTypeCountSIBLING_EDUCATIONArgs
  }

  // Custom InputTypes
  /**
   * FAMILY_MEMBERCountOutputType without action
   */
  export type FAMILY_MEMBERCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAMILY_MEMBERCountOutputType
     */
    select?: FAMILY_MEMBERCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FAMILY_MEMBERCountOutputType without action
   */
  export type FAMILY_MEMBERCountOutputTypeCountSIBLING_EDUCATIONArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SIBLING_EDUCATIONWhereInput
  }


  /**
   * Count Type SCHOLARSHIPCountOutputType
   */

  export type SCHOLARSHIPCountOutputType = {
    APPLICATION: number
    ELIGIBILITY_CRITERIA: number
  }

  export type SCHOLARSHIPCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    APPLICATION?: boolean | SCHOLARSHIPCountOutputTypeCountAPPLICATIONArgs
    ELIGIBILITY_CRITERIA?: boolean | SCHOLARSHIPCountOutputTypeCountELIGIBILITY_CRITERIAArgs
  }

  // Custom InputTypes
  /**
   * SCHOLARSHIPCountOutputType without action
   */
  export type SCHOLARSHIPCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SCHOLARSHIPCountOutputType
     */
    select?: SCHOLARSHIPCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SCHOLARSHIPCountOutputType without action
   */
  export type SCHOLARSHIPCountOutputTypeCountAPPLICATIONArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: APPLICATIONWhereInput
  }

  /**
   * SCHOLARSHIPCountOutputType without action
   */
  export type SCHOLARSHIPCountOutputTypeCountELIGIBILITY_CRITERIAArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ELIGIBILITY_CRITERIAWhereInput
  }


  /**
   * Count Type SCHOLARSHIP_PROVIDERCountOutputType
   */

  export type SCHOLARSHIP_PROVIDERCountOutputType = {
    SCHOLARSHIP: number
  }

  export type SCHOLARSHIP_PROVIDERCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SCHOLARSHIP?: boolean | SCHOLARSHIP_PROVIDERCountOutputTypeCountSCHOLARSHIPArgs
  }

  // Custom InputTypes
  /**
   * SCHOLARSHIP_PROVIDERCountOutputType without action
   */
  export type SCHOLARSHIP_PROVIDERCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SCHOLARSHIP_PROVIDERCountOutputType
     */
    select?: SCHOLARSHIP_PROVIDERCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SCHOLARSHIP_PROVIDERCountOutputType without action
   */
  export type SCHOLARSHIP_PROVIDERCountOutputTypeCountSCHOLARSHIPArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SCHOLARSHIPWhereInput
  }


  /**
   * Count Type STUDENTCountOutputType
   */

  export type STUDENTCountOutputType = {
    APPLICATION: number
    FAMILY_MEMBER: number
    OTHER_FUNDING: number
    SIBLING_EDUCATION: number
  }

  export type STUDENTCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    APPLICATION?: boolean | STUDENTCountOutputTypeCountAPPLICATIONArgs
    FAMILY_MEMBER?: boolean | STUDENTCountOutputTypeCountFAMILY_MEMBERArgs
    OTHER_FUNDING?: boolean | STUDENTCountOutputTypeCountOTHER_FUNDINGArgs
    SIBLING_EDUCATION?: boolean | STUDENTCountOutputTypeCountSIBLING_EDUCATIONArgs
  }

  // Custom InputTypes
  /**
   * STUDENTCountOutputType without action
   */
  export type STUDENTCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the STUDENTCountOutputType
     */
    select?: STUDENTCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * STUDENTCountOutputType without action
   */
  export type STUDENTCountOutputTypeCountAPPLICATIONArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: APPLICATIONWhereInput
  }

  /**
   * STUDENTCountOutputType without action
   */
  export type STUDENTCountOutputTypeCountFAMILY_MEMBERArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FAMILY_MEMBERWhereInput
  }

  /**
   * STUDENTCountOutputType without action
   */
  export type STUDENTCountOutputTypeCountOTHER_FUNDINGArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OTHER_FUNDINGWhereInput
  }

  /**
   * STUDENTCountOutputType without action
   */
  export type STUDENTCountOutputTypeCountSIBLING_EDUCATIONArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SIBLING_EDUCATIONWhereInput
  }


  /**
   * Count Type USERCountOutputType
   */

  export type USERCountOutputType = {
    COMMITTEE_REVIEW: number
    NOTIFICATION: number
    STUDENT: number
  }

  export type USERCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    COMMITTEE_REVIEW?: boolean | USERCountOutputTypeCountCOMMITTEE_REVIEWArgs
    NOTIFICATION?: boolean | USERCountOutputTypeCountNOTIFICATIONArgs
    STUDENT?: boolean | USERCountOutputTypeCountSTUDENTArgs
  }

  // Custom InputTypes
  /**
   * USERCountOutputType without action
   */
  export type USERCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USERCountOutputType
     */
    select?: USERCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * USERCountOutputType without action
   */
  export type USERCountOutputTypeCountCOMMITTEE_REVIEWArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: COMMITTEE_REVIEWWhereInput
  }

  /**
   * USERCountOutputType without action
   */
  export type USERCountOutputTypeCountNOTIFICATIONArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NOTIFICATIONWhereInput
  }

  /**
   * USERCountOutputType without action
   */
  export type USERCountOutputTypeCountSTUDENTArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: STUDENTWhereInput
  }


  /**
   * Models
   */

  /**
   * Model APPLICATION
   */

  export type AggregateAPPLICATION = {
    _count: APPLICATIONCountAggregateOutputType | null
    _avg: APPLICATIONAvgAggregateOutputType | null
    _sum: APPLICATIONSumAggregateOutputType | null
    _min: APPLICATIONMinAggregateOutputType | null
    _max: APPLICATIONMaxAggregateOutputType | null
  }

  export type APPLICATIONAvgAggregateOutputType = {
    application_id: number | null
    student_id: number | null
    scholarship_id: number | null
    total_points: number | null
  }

  export type APPLICATIONSumAggregateOutputType = {
    application_id: number | null
    student_id: number | null
    scholarship_id: number | null
    total_points: number | null
  }

  export type APPLICATIONMinAggregateOutputType = {
    application_id: number | null
    student_id: number | null
    scholarship_id: number | null
    submission_date: Date | null
    status: $Enums.APPLICATION_status | null
    total_points: number | null
    reviewer_comments: string | null
    review_date: Date | null
  }

  export type APPLICATIONMaxAggregateOutputType = {
    application_id: number | null
    student_id: number | null
    scholarship_id: number | null
    submission_date: Date | null
    status: $Enums.APPLICATION_status | null
    total_points: number | null
    reviewer_comments: string | null
    review_date: Date | null
  }

  export type APPLICATIONCountAggregateOutputType = {
    application_id: number
    student_id: number
    scholarship_id: number
    submission_date: number
    status: number
    total_points: number
    reviewer_comments: number
    review_date: number
    _all: number
  }


  export type APPLICATIONAvgAggregateInputType = {
    application_id?: true
    student_id?: true
    scholarship_id?: true
    total_points?: true
  }

  export type APPLICATIONSumAggregateInputType = {
    application_id?: true
    student_id?: true
    scholarship_id?: true
    total_points?: true
  }

  export type APPLICATIONMinAggregateInputType = {
    application_id?: true
    student_id?: true
    scholarship_id?: true
    submission_date?: true
    status?: true
    total_points?: true
    reviewer_comments?: true
    review_date?: true
  }

  export type APPLICATIONMaxAggregateInputType = {
    application_id?: true
    student_id?: true
    scholarship_id?: true
    submission_date?: true
    status?: true
    total_points?: true
    reviewer_comments?: true
    review_date?: true
  }

  export type APPLICATIONCountAggregateInputType = {
    application_id?: true
    student_id?: true
    scholarship_id?: true
    submission_date?: true
    status?: true
    total_points?: true
    reviewer_comments?: true
    review_date?: true
    _all?: true
  }

  export type APPLICATIONAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which APPLICATION to aggregate.
     */
    where?: APPLICATIONWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of APPLICATIONS to fetch.
     */
    orderBy?: APPLICATIONOrderByWithRelationInput | APPLICATIONOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: APPLICATIONWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` APPLICATIONS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` APPLICATIONS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned APPLICATIONS
    **/
    _count?: true | APPLICATIONCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: APPLICATIONAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: APPLICATIONSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: APPLICATIONMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: APPLICATIONMaxAggregateInputType
  }

  export type GetAPPLICATIONAggregateType<T extends APPLICATIONAggregateArgs> = {
        [P in keyof T & keyof AggregateAPPLICATION]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAPPLICATION[P]>
      : GetScalarType<T[P], AggregateAPPLICATION[P]>
  }




  export type APPLICATIONGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: APPLICATIONWhereInput
    orderBy?: APPLICATIONOrderByWithAggregationInput | APPLICATIONOrderByWithAggregationInput[]
    by: APPLICATIONScalarFieldEnum[] | APPLICATIONScalarFieldEnum
    having?: APPLICATIONScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: APPLICATIONCountAggregateInputType | true
    _avg?: APPLICATIONAvgAggregateInputType
    _sum?: APPLICATIONSumAggregateInputType
    _min?: APPLICATIONMinAggregateInputType
    _max?: APPLICATIONMaxAggregateInputType
  }

  export type APPLICATIONGroupByOutputType = {
    application_id: number
    student_id: number | null
    scholarship_id: number | null
    submission_date: Date | null
    status: $Enums.APPLICATION_status | null
    total_points: number | null
    reviewer_comments: string | null
    review_date: Date | null
    _count: APPLICATIONCountAggregateOutputType | null
    _avg: APPLICATIONAvgAggregateOutputType | null
    _sum: APPLICATIONSumAggregateOutputType | null
    _min: APPLICATIONMinAggregateOutputType | null
    _max: APPLICATIONMaxAggregateOutputType | null
  }

  type GetAPPLICATIONGroupByPayload<T extends APPLICATIONGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<APPLICATIONGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof APPLICATIONGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], APPLICATIONGroupByOutputType[P]>
            : GetScalarType<T[P], APPLICATIONGroupByOutputType[P]>
        }
      >
    >


  export type APPLICATIONSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    application_id?: boolean
    student_id?: boolean
    scholarship_id?: boolean
    submission_date?: boolean
    status?: boolean
    total_points?: boolean
    reviewer_comments?: boolean
    review_date?: boolean
    STUDENT?: boolean | APPLICATION$STUDENTArgs<ExtArgs>
    SCHOLARSHIP?: boolean | APPLICATION$SCHOLARSHIPArgs<ExtArgs>
    COMMITTEE_REVIEW?: boolean | APPLICATION$COMMITTEE_REVIEWArgs<ExtArgs>
    DOCUMENT?: boolean | APPLICATION$DOCUMENTArgs<ExtArgs>
    PAYMENT?: boolean | APPLICATION$PAYMENTArgs<ExtArgs>
    _count?: boolean | APPLICATIONCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aPPLICATION"]>



  export type APPLICATIONSelectScalar = {
    application_id?: boolean
    student_id?: boolean
    scholarship_id?: boolean
    submission_date?: boolean
    status?: boolean
    total_points?: boolean
    reviewer_comments?: boolean
    review_date?: boolean
  }

  export type APPLICATIONOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"application_id" | "student_id" | "scholarship_id" | "submission_date" | "status" | "total_points" | "reviewer_comments" | "review_date", ExtArgs["result"]["aPPLICATION"]>
  export type APPLICATIONInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    STUDENT?: boolean | APPLICATION$STUDENTArgs<ExtArgs>
    SCHOLARSHIP?: boolean | APPLICATION$SCHOLARSHIPArgs<ExtArgs>
    COMMITTEE_REVIEW?: boolean | APPLICATION$COMMITTEE_REVIEWArgs<ExtArgs>
    DOCUMENT?: boolean | APPLICATION$DOCUMENTArgs<ExtArgs>
    PAYMENT?: boolean | APPLICATION$PAYMENTArgs<ExtArgs>
    _count?: boolean | APPLICATIONCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $APPLICATIONPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "APPLICATION"
    objects: {
      STUDENT: Prisma.$STUDENTPayload<ExtArgs> | null
      SCHOLARSHIP: Prisma.$SCHOLARSHIPPayload<ExtArgs> | null
      COMMITTEE_REVIEW: Prisma.$COMMITTEE_REVIEWPayload<ExtArgs>[]
      DOCUMENT: Prisma.$DOCUMENTPayload<ExtArgs>[]
      PAYMENT: Prisma.$PAYMENTPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      application_id: number
      student_id: number | null
      scholarship_id: number | null
      submission_date: Date | null
      status: $Enums.APPLICATION_status | null
      total_points: number | null
      reviewer_comments: string | null
      review_date: Date | null
    }, ExtArgs["result"]["aPPLICATION"]>
    composites: {}
  }

  type APPLICATIONGetPayload<S extends boolean | null | undefined | APPLICATIONDefaultArgs> = $Result.GetResult<Prisma.$APPLICATIONPayload, S>

  type APPLICATIONCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<APPLICATIONFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: APPLICATIONCountAggregateInputType | true
    }

  export interface APPLICATIONDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['APPLICATION'], meta: { name: 'APPLICATION' } }
    /**
     * Find zero or one APPLICATION that matches the filter.
     * @param {APPLICATIONFindUniqueArgs} args - Arguments to find a APPLICATION
     * @example
     * // Get one APPLICATION
     * const aPPLICATION = await prisma.aPPLICATION.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends APPLICATIONFindUniqueArgs>(args: SelectSubset<T, APPLICATIONFindUniqueArgs<ExtArgs>>): Prisma__APPLICATIONClient<$Result.GetResult<Prisma.$APPLICATIONPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one APPLICATION that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {APPLICATIONFindUniqueOrThrowArgs} args - Arguments to find a APPLICATION
     * @example
     * // Get one APPLICATION
     * const aPPLICATION = await prisma.aPPLICATION.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends APPLICATIONFindUniqueOrThrowArgs>(args: SelectSubset<T, APPLICATIONFindUniqueOrThrowArgs<ExtArgs>>): Prisma__APPLICATIONClient<$Result.GetResult<Prisma.$APPLICATIONPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first APPLICATION that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {APPLICATIONFindFirstArgs} args - Arguments to find a APPLICATION
     * @example
     * // Get one APPLICATION
     * const aPPLICATION = await prisma.aPPLICATION.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends APPLICATIONFindFirstArgs>(args?: SelectSubset<T, APPLICATIONFindFirstArgs<ExtArgs>>): Prisma__APPLICATIONClient<$Result.GetResult<Prisma.$APPLICATIONPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first APPLICATION that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {APPLICATIONFindFirstOrThrowArgs} args - Arguments to find a APPLICATION
     * @example
     * // Get one APPLICATION
     * const aPPLICATION = await prisma.aPPLICATION.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends APPLICATIONFindFirstOrThrowArgs>(args?: SelectSubset<T, APPLICATIONFindFirstOrThrowArgs<ExtArgs>>): Prisma__APPLICATIONClient<$Result.GetResult<Prisma.$APPLICATIONPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more APPLICATIONS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {APPLICATIONFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all APPLICATIONS
     * const aPPLICATIONS = await prisma.aPPLICATION.findMany()
     * 
     * // Get first 10 APPLICATIONS
     * const aPPLICATIONS = await prisma.aPPLICATION.findMany({ take: 10 })
     * 
     * // Only select the `application_id`
     * const aPPLICATIONWithApplication_idOnly = await prisma.aPPLICATION.findMany({ select: { application_id: true } })
     * 
     */
    findMany<T extends APPLICATIONFindManyArgs>(args?: SelectSubset<T, APPLICATIONFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$APPLICATIONPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a APPLICATION.
     * @param {APPLICATIONCreateArgs} args - Arguments to create a APPLICATION.
     * @example
     * // Create one APPLICATION
     * const APPLICATION = await prisma.aPPLICATION.create({
     *   data: {
     *     // ... data to create a APPLICATION
     *   }
     * })
     * 
     */
    create<T extends APPLICATIONCreateArgs>(args: SelectSubset<T, APPLICATIONCreateArgs<ExtArgs>>): Prisma__APPLICATIONClient<$Result.GetResult<Prisma.$APPLICATIONPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many APPLICATIONS.
     * @param {APPLICATIONCreateManyArgs} args - Arguments to create many APPLICATIONS.
     * @example
     * // Create many APPLICATIONS
     * const aPPLICATION = await prisma.aPPLICATION.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends APPLICATIONCreateManyArgs>(args?: SelectSubset<T, APPLICATIONCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a APPLICATION.
     * @param {APPLICATIONDeleteArgs} args - Arguments to delete one APPLICATION.
     * @example
     * // Delete one APPLICATION
     * const APPLICATION = await prisma.aPPLICATION.delete({
     *   where: {
     *     // ... filter to delete one APPLICATION
     *   }
     * })
     * 
     */
    delete<T extends APPLICATIONDeleteArgs>(args: SelectSubset<T, APPLICATIONDeleteArgs<ExtArgs>>): Prisma__APPLICATIONClient<$Result.GetResult<Prisma.$APPLICATIONPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one APPLICATION.
     * @param {APPLICATIONUpdateArgs} args - Arguments to update one APPLICATION.
     * @example
     * // Update one APPLICATION
     * const aPPLICATION = await prisma.aPPLICATION.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends APPLICATIONUpdateArgs>(args: SelectSubset<T, APPLICATIONUpdateArgs<ExtArgs>>): Prisma__APPLICATIONClient<$Result.GetResult<Prisma.$APPLICATIONPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more APPLICATIONS.
     * @param {APPLICATIONDeleteManyArgs} args - Arguments to filter APPLICATIONS to delete.
     * @example
     * // Delete a few APPLICATIONS
     * const { count } = await prisma.aPPLICATION.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends APPLICATIONDeleteManyArgs>(args?: SelectSubset<T, APPLICATIONDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more APPLICATIONS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {APPLICATIONUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many APPLICATIONS
     * const aPPLICATION = await prisma.aPPLICATION.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends APPLICATIONUpdateManyArgs>(args: SelectSubset<T, APPLICATIONUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one APPLICATION.
     * @param {APPLICATIONUpsertArgs} args - Arguments to update or create a APPLICATION.
     * @example
     * // Update or create a APPLICATION
     * const aPPLICATION = await prisma.aPPLICATION.upsert({
     *   create: {
     *     // ... data to create a APPLICATION
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the APPLICATION we want to update
     *   }
     * })
     */
    upsert<T extends APPLICATIONUpsertArgs>(args: SelectSubset<T, APPLICATIONUpsertArgs<ExtArgs>>): Prisma__APPLICATIONClient<$Result.GetResult<Prisma.$APPLICATIONPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of APPLICATIONS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {APPLICATIONCountArgs} args - Arguments to filter APPLICATIONS to count.
     * @example
     * // Count the number of APPLICATIONS
     * const count = await prisma.aPPLICATION.count({
     *   where: {
     *     // ... the filter for the APPLICATIONS we want to count
     *   }
     * })
    **/
    count<T extends APPLICATIONCountArgs>(
      args?: Subset<T, APPLICATIONCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], APPLICATIONCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a APPLICATION.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {APPLICATIONAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends APPLICATIONAggregateArgs>(args: Subset<T, APPLICATIONAggregateArgs>): Prisma.PrismaPromise<GetAPPLICATIONAggregateType<T>>

    /**
     * Group by APPLICATION.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {APPLICATIONGroupByArgs} args - Group by arguments.
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
      T extends APPLICATIONGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: APPLICATIONGroupByArgs['orderBy'] }
        : { orderBy?: APPLICATIONGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, APPLICATIONGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAPPLICATIONGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the APPLICATION model
   */
  readonly fields: APPLICATIONFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for APPLICATION.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__APPLICATIONClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    STUDENT<T extends APPLICATION$STUDENTArgs<ExtArgs> = {}>(args?: Subset<T, APPLICATION$STUDENTArgs<ExtArgs>>): Prisma__STUDENTClient<$Result.GetResult<Prisma.$STUDENTPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    SCHOLARSHIP<T extends APPLICATION$SCHOLARSHIPArgs<ExtArgs> = {}>(args?: Subset<T, APPLICATION$SCHOLARSHIPArgs<ExtArgs>>): Prisma__SCHOLARSHIPClient<$Result.GetResult<Prisma.$SCHOLARSHIPPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    COMMITTEE_REVIEW<T extends APPLICATION$COMMITTEE_REVIEWArgs<ExtArgs> = {}>(args?: Subset<T, APPLICATION$COMMITTEE_REVIEWArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$COMMITTEE_REVIEWPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    DOCUMENT<T extends APPLICATION$DOCUMENTArgs<ExtArgs> = {}>(args?: Subset<T, APPLICATION$DOCUMENTArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DOCUMENTPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    PAYMENT<T extends APPLICATION$PAYMENTArgs<ExtArgs> = {}>(args?: Subset<T, APPLICATION$PAYMENTArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PAYMENTPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the APPLICATION model
   */
  interface APPLICATIONFieldRefs {
    readonly application_id: FieldRef<"APPLICATION", 'Int'>
    readonly student_id: FieldRef<"APPLICATION", 'Int'>
    readonly scholarship_id: FieldRef<"APPLICATION", 'Int'>
    readonly submission_date: FieldRef<"APPLICATION", 'DateTime'>
    readonly status: FieldRef<"APPLICATION", 'APPLICATION_status'>
    readonly total_points: FieldRef<"APPLICATION", 'Int'>
    readonly reviewer_comments: FieldRef<"APPLICATION", 'String'>
    readonly review_date: FieldRef<"APPLICATION", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * APPLICATION findUnique
   */
  export type APPLICATIONFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APPLICATION
     */
    select?: APPLICATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the APPLICATION
     */
    omit?: APPLICATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: APPLICATIONInclude<ExtArgs> | null
    /**
     * Filter, which APPLICATION to fetch.
     */
    where: APPLICATIONWhereUniqueInput
  }

  /**
   * APPLICATION findUniqueOrThrow
   */
  export type APPLICATIONFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APPLICATION
     */
    select?: APPLICATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the APPLICATION
     */
    omit?: APPLICATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: APPLICATIONInclude<ExtArgs> | null
    /**
     * Filter, which APPLICATION to fetch.
     */
    where: APPLICATIONWhereUniqueInput
  }

  /**
   * APPLICATION findFirst
   */
  export type APPLICATIONFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APPLICATION
     */
    select?: APPLICATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the APPLICATION
     */
    omit?: APPLICATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: APPLICATIONInclude<ExtArgs> | null
    /**
     * Filter, which APPLICATION to fetch.
     */
    where?: APPLICATIONWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of APPLICATIONS to fetch.
     */
    orderBy?: APPLICATIONOrderByWithRelationInput | APPLICATIONOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for APPLICATIONS.
     */
    cursor?: APPLICATIONWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` APPLICATIONS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` APPLICATIONS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of APPLICATIONS.
     */
    distinct?: APPLICATIONScalarFieldEnum | APPLICATIONScalarFieldEnum[]
  }

  /**
   * APPLICATION findFirstOrThrow
   */
  export type APPLICATIONFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APPLICATION
     */
    select?: APPLICATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the APPLICATION
     */
    omit?: APPLICATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: APPLICATIONInclude<ExtArgs> | null
    /**
     * Filter, which APPLICATION to fetch.
     */
    where?: APPLICATIONWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of APPLICATIONS to fetch.
     */
    orderBy?: APPLICATIONOrderByWithRelationInput | APPLICATIONOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for APPLICATIONS.
     */
    cursor?: APPLICATIONWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` APPLICATIONS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` APPLICATIONS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of APPLICATIONS.
     */
    distinct?: APPLICATIONScalarFieldEnum | APPLICATIONScalarFieldEnum[]
  }

  /**
   * APPLICATION findMany
   */
  export type APPLICATIONFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APPLICATION
     */
    select?: APPLICATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the APPLICATION
     */
    omit?: APPLICATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: APPLICATIONInclude<ExtArgs> | null
    /**
     * Filter, which APPLICATIONS to fetch.
     */
    where?: APPLICATIONWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of APPLICATIONS to fetch.
     */
    orderBy?: APPLICATIONOrderByWithRelationInput | APPLICATIONOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing APPLICATIONS.
     */
    cursor?: APPLICATIONWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` APPLICATIONS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` APPLICATIONS.
     */
    skip?: number
    distinct?: APPLICATIONScalarFieldEnum | APPLICATIONScalarFieldEnum[]
  }

  /**
   * APPLICATION create
   */
  export type APPLICATIONCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APPLICATION
     */
    select?: APPLICATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the APPLICATION
     */
    omit?: APPLICATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: APPLICATIONInclude<ExtArgs> | null
    /**
     * The data needed to create a APPLICATION.
     */
    data?: XOR<APPLICATIONCreateInput, APPLICATIONUncheckedCreateInput>
  }

  /**
   * APPLICATION createMany
   */
  export type APPLICATIONCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many APPLICATIONS.
     */
    data: APPLICATIONCreateManyInput | APPLICATIONCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * APPLICATION update
   */
  export type APPLICATIONUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APPLICATION
     */
    select?: APPLICATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the APPLICATION
     */
    omit?: APPLICATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: APPLICATIONInclude<ExtArgs> | null
    /**
     * The data needed to update a APPLICATION.
     */
    data: XOR<APPLICATIONUpdateInput, APPLICATIONUncheckedUpdateInput>
    /**
     * Choose, which APPLICATION to update.
     */
    where: APPLICATIONWhereUniqueInput
  }

  /**
   * APPLICATION updateMany
   */
  export type APPLICATIONUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update APPLICATIONS.
     */
    data: XOR<APPLICATIONUpdateManyMutationInput, APPLICATIONUncheckedUpdateManyInput>
    /**
     * Filter which APPLICATIONS to update
     */
    where?: APPLICATIONWhereInput
    /**
     * Limit how many APPLICATIONS to update.
     */
    limit?: number
  }

  /**
   * APPLICATION upsert
   */
  export type APPLICATIONUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APPLICATION
     */
    select?: APPLICATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the APPLICATION
     */
    omit?: APPLICATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: APPLICATIONInclude<ExtArgs> | null
    /**
     * The filter to search for the APPLICATION to update in case it exists.
     */
    where: APPLICATIONWhereUniqueInput
    /**
     * In case the APPLICATION found by the `where` argument doesn't exist, create a new APPLICATION with this data.
     */
    create: XOR<APPLICATIONCreateInput, APPLICATIONUncheckedCreateInput>
    /**
     * In case the APPLICATION was found with the provided `where` argument, update it with this data.
     */
    update: XOR<APPLICATIONUpdateInput, APPLICATIONUncheckedUpdateInput>
  }

  /**
   * APPLICATION delete
   */
  export type APPLICATIONDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APPLICATION
     */
    select?: APPLICATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the APPLICATION
     */
    omit?: APPLICATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: APPLICATIONInclude<ExtArgs> | null
    /**
     * Filter which APPLICATION to delete.
     */
    where: APPLICATIONWhereUniqueInput
  }

  /**
   * APPLICATION deleteMany
   */
  export type APPLICATIONDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which APPLICATIONS to delete
     */
    where?: APPLICATIONWhereInput
    /**
     * Limit how many APPLICATIONS to delete.
     */
    limit?: number
  }

  /**
   * APPLICATION.STUDENT
   */
  export type APPLICATION$STUDENTArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the STUDENT
     */
    select?: STUDENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the STUDENT
     */
    omit?: STUDENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: STUDENTInclude<ExtArgs> | null
    where?: STUDENTWhereInput
  }

  /**
   * APPLICATION.SCHOLARSHIP
   */
  export type APPLICATION$SCHOLARSHIPArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SCHOLARSHIP
     */
    select?: SCHOLARSHIPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SCHOLARSHIP
     */
    omit?: SCHOLARSHIPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SCHOLARSHIPInclude<ExtArgs> | null
    where?: SCHOLARSHIPWhereInput
  }

  /**
   * APPLICATION.COMMITTEE_REVIEW
   */
  export type APPLICATION$COMMITTEE_REVIEWArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the COMMITTEE_REVIEW
     */
    select?: COMMITTEE_REVIEWSelect<ExtArgs> | null
    /**
     * Omit specific fields from the COMMITTEE_REVIEW
     */
    omit?: COMMITTEE_REVIEWOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: COMMITTEE_REVIEWInclude<ExtArgs> | null
    where?: COMMITTEE_REVIEWWhereInput
    orderBy?: COMMITTEE_REVIEWOrderByWithRelationInput | COMMITTEE_REVIEWOrderByWithRelationInput[]
    cursor?: COMMITTEE_REVIEWWhereUniqueInput
    take?: number
    skip?: number
    distinct?: COMMITTEE_REVIEWScalarFieldEnum | COMMITTEE_REVIEWScalarFieldEnum[]
  }

  /**
   * APPLICATION.DOCUMENT
   */
  export type APPLICATION$DOCUMENTArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DOCUMENT
     */
    select?: DOCUMENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DOCUMENT
     */
    omit?: DOCUMENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DOCUMENTInclude<ExtArgs> | null
    where?: DOCUMENTWhereInput
    orderBy?: DOCUMENTOrderByWithRelationInput | DOCUMENTOrderByWithRelationInput[]
    cursor?: DOCUMENTWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DOCUMENTScalarFieldEnum | DOCUMENTScalarFieldEnum[]
  }

  /**
   * APPLICATION.PAYMENT
   */
  export type APPLICATION$PAYMENTArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAYMENT
     */
    select?: PAYMENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAYMENT
     */
    omit?: PAYMENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAYMENTInclude<ExtArgs> | null
    where?: PAYMENTWhereInput
    orderBy?: PAYMENTOrderByWithRelationInput | PAYMENTOrderByWithRelationInput[]
    cursor?: PAYMENTWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PAYMENTScalarFieldEnum | PAYMENTScalarFieldEnum[]
  }

  /**
   * APPLICATION without action
   */
  export type APPLICATIONDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APPLICATION
     */
    select?: APPLICATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the APPLICATION
     */
    omit?: APPLICATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: APPLICATIONInclude<ExtArgs> | null
  }


  /**
   * Model COMMITTEE_REVIEW
   */

  export type AggregateCOMMITTEE_REVIEW = {
    _count: COMMITTEE_REVIEWCountAggregateOutputType | null
    _avg: COMMITTEE_REVIEWAvgAggregateOutputType | null
    _sum: COMMITTEE_REVIEWSumAggregateOutputType | null
    _min: COMMITTEE_REVIEWMinAggregateOutputType | null
    _max: COMMITTEE_REVIEWMaxAggregateOutputType | null
  }

  export type COMMITTEE_REVIEWAvgAggregateOutputType = {
    review_id: number | null
    application_id: number | null
    reviewer_id: number | null
    points_awarded: number | null
  }

  export type COMMITTEE_REVIEWSumAggregateOutputType = {
    review_id: number | null
    application_id: number | null
    reviewer_id: number | null
    points_awarded: number | null
  }

  export type COMMITTEE_REVIEWMinAggregateOutputType = {
    review_id: number | null
    application_id: number | null
    reviewer_id: number | null
    review_date: Date | null
    points_awarded: number | null
    comments: string | null
    status: $Enums.COMMITTEE_REVIEW_status | null
    is_read: boolean | null
  }

  export type COMMITTEE_REVIEWMaxAggregateOutputType = {
    review_id: number | null
    application_id: number | null
    reviewer_id: number | null
    review_date: Date | null
    points_awarded: number | null
    comments: string | null
    status: $Enums.COMMITTEE_REVIEW_status | null
    is_read: boolean | null
  }

  export type COMMITTEE_REVIEWCountAggregateOutputType = {
    review_id: number
    application_id: number
    reviewer_id: number
    review_date: number
    points_awarded: number
    comments: number
    status: number
    is_read: number
    _all: number
  }


  export type COMMITTEE_REVIEWAvgAggregateInputType = {
    review_id?: true
    application_id?: true
    reviewer_id?: true
    points_awarded?: true
  }

  export type COMMITTEE_REVIEWSumAggregateInputType = {
    review_id?: true
    application_id?: true
    reviewer_id?: true
    points_awarded?: true
  }

  export type COMMITTEE_REVIEWMinAggregateInputType = {
    review_id?: true
    application_id?: true
    reviewer_id?: true
    review_date?: true
    points_awarded?: true
    comments?: true
    status?: true
    is_read?: true
  }

  export type COMMITTEE_REVIEWMaxAggregateInputType = {
    review_id?: true
    application_id?: true
    reviewer_id?: true
    review_date?: true
    points_awarded?: true
    comments?: true
    status?: true
    is_read?: true
  }

  export type COMMITTEE_REVIEWCountAggregateInputType = {
    review_id?: true
    application_id?: true
    reviewer_id?: true
    review_date?: true
    points_awarded?: true
    comments?: true
    status?: true
    is_read?: true
    _all?: true
  }

  export type COMMITTEE_REVIEWAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which COMMITTEE_REVIEW to aggregate.
     */
    where?: COMMITTEE_REVIEWWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of COMMITTEE_REVIEWS to fetch.
     */
    orderBy?: COMMITTEE_REVIEWOrderByWithRelationInput | COMMITTEE_REVIEWOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: COMMITTEE_REVIEWWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` COMMITTEE_REVIEWS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` COMMITTEE_REVIEWS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned COMMITTEE_REVIEWS
    **/
    _count?: true | COMMITTEE_REVIEWCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: COMMITTEE_REVIEWAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: COMMITTEE_REVIEWSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: COMMITTEE_REVIEWMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: COMMITTEE_REVIEWMaxAggregateInputType
  }

  export type GetCOMMITTEE_REVIEWAggregateType<T extends COMMITTEE_REVIEWAggregateArgs> = {
        [P in keyof T & keyof AggregateCOMMITTEE_REVIEW]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCOMMITTEE_REVIEW[P]>
      : GetScalarType<T[P], AggregateCOMMITTEE_REVIEW[P]>
  }




  export type COMMITTEE_REVIEWGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: COMMITTEE_REVIEWWhereInput
    orderBy?: COMMITTEE_REVIEWOrderByWithAggregationInput | COMMITTEE_REVIEWOrderByWithAggregationInput[]
    by: COMMITTEE_REVIEWScalarFieldEnum[] | COMMITTEE_REVIEWScalarFieldEnum
    having?: COMMITTEE_REVIEWScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: COMMITTEE_REVIEWCountAggregateInputType | true
    _avg?: COMMITTEE_REVIEWAvgAggregateInputType
    _sum?: COMMITTEE_REVIEWSumAggregateInputType
    _min?: COMMITTEE_REVIEWMinAggregateInputType
    _max?: COMMITTEE_REVIEWMaxAggregateInputType
  }

  export type COMMITTEE_REVIEWGroupByOutputType = {
    review_id: number
    application_id: number | null
    reviewer_id: number | null
    review_date: Date | null
    points_awarded: number | null
    comments: string | null
    status: $Enums.COMMITTEE_REVIEW_status | null
    is_read: boolean | null
    _count: COMMITTEE_REVIEWCountAggregateOutputType | null
    _avg: COMMITTEE_REVIEWAvgAggregateOutputType | null
    _sum: COMMITTEE_REVIEWSumAggregateOutputType | null
    _min: COMMITTEE_REVIEWMinAggregateOutputType | null
    _max: COMMITTEE_REVIEWMaxAggregateOutputType | null
  }

  type GetCOMMITTEE_REVIEWGroupByPayload<T extends COMMITTEE_REVIEWGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<COMMITTEE_REVIEWGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof COMMITTEE_REVIEWGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], COMMITTEE_REVIEWGroupByOutputType[P]>
            : GetScalarType<T[P], COMMITTEE_REVIEWGroupByOutputType[P]>
        }
      >
    >


  export type COMMITTEE_REVIEWSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    review_id?: boolean
    application_id?: boolean
    reviewer_id?: boolean
    review_date?: boolean
    points_awarded?: boolean
    comments?: boolean
    status?: boolean
    is_read?: boolean
    APPLICATION?: boolean | COMMITTEE_REVIEW$APPLICATIONArgs<ExtArgs>
    USER?: boolean | COMMITTEE_REVIEW$USERArgs<ExtArgs>
  }, ExtArgs["result"]["cOMMITTEE_REVIEW"]>



  export type COMMITTEE_REVIEWSelectScalar = {
    review_id?: boolean
    application_id?: boolean
    reviewer_id?: boolean
    review_date?: boolean
    points_awarded?: boolean
    comments?: boolean
    status?: boolean
    is_read?: boolean
  }

  export type COMMITTEE_REVIEWOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"review_id" | "application_id" | "reviewer_id" | "review_date" | "points_awarded" | "comments" | "status" | "is_read", ExtArgs["result"]["cOMMITTEE_REVIEW"]>
  export type COMMITTEE_REVIEWInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    APPLICATION?: boolean | COMMITTEE_REVIEW$APPLICATIONArgs<ExtArgs>
    USER?: boolean | COMMITTEE_REVIEW$USERArgs<ExtArgs>
  }

  export type $COMMITTEE_REVIEWPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "COMMITTEE_REVIEW"
    objects: {
      APPLICATION: Prisma.$APPLICATIONPayload<ExtArgs> | null
      USER: Prisma.$USERPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      review_id: number
      application_id: number | null
      reviewer_id: number | null
      review_date: Date | null
      points_awarded: number | null
      comments: string | null
      status: $Enums.COMMITTEE_REVIEW_status | null
      is_read: boolean | null
    }, ExtArgs["result"]["cOMMITTEE_REVIEW"]>
    composites: {}
  }

  type COMMITTEE_REVIEWGetPayload<S extends boolean | null | undefined | COMMITTEE_REVIEWDefaultArgs> = $Result.GetResult<Prisma.$COMMITTEE_REVIEWPayload, S>

  type COMMITTEE_REVIEWCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<COMMITTEE_REVIEWFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: COMMITTEE_REVIEWCountAggregateInputType | true
    }

  export interface COMMITTEE_REVIEWDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['COMMITTEE_REVIEW'], meta: { name: 'COMMITTEE_REVIEW' } }
    /**
     * Find zero or one COMMITTEE_REVIEW that matches the filter.
     * @param {COMMITTEE_REVIEWFindUniqueArgs} args - Arguments to find a COMMITTEE_REVIEW
     * @example
     * // Get one COMMITTEE_REVIEW
     * const cOMMITTEE_REVIEW = await prisma.cOMMITTEE_REVIEW.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends COMMITTEE_REVIEWFindUniqueArgs>(args: SelectSubset<T, COMMITTEE_REVIEWFindUniqueArgs<ExtArgs>>): Prisma__COMMITTEE_REVIEWClient<$Result.GetResult<Prisma.$COMMITTEE_REVIEWPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one COMMITTEE_REVIEW that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {COMMITTEE_REVIEWFindUniqueOrThrowArgs} args - Arguments to find a COMMITTEE_REVIEW
     * @example
     * // Get one COMMITTEE_REVIEW
     * const cOMMITTEE_REVIEW = await prisma.cOMMITTEE_REVIEW.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends COMMITTEE_REVIEWFindUniqueOrThrowArgs>(args: SelectSubset<T, COMMITTEE_REVIEWFindUniqueOrThrowArgs<ExtArgs>>): Prisma__COMMITTEE_REVIEWClient<$Result.GetResult<Prisma.$COMMITTEE_REVIEWPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first COMMITTEE_REVIEW that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {COMMITTEE_REVIEWFindFirstArgs} args - Arguments to find a COMMITTEE_REVIEW
     * @example
     * // Get one COMMITTEE_REVIEW
     * const cOMMITTEE_REVIEW = await prisma.cOMMITTEE_REVIEW.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends COMMITTEE_REVIEWFindFirstArgs>(args?: SelectSubset<T, COMMITTEE_REVIEWFindFirstArgs<ExtArgs>>): Prisma__COMMITTEE_REVIEWClient<$Result.GetResult<Prisma.$COMMITTEE_REVIEWPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first COMMITTEE_REVIEW that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {COMMITTEE_REVIEWFindFirstOrThrowArgs} args - Arguments to find a COMMITTEE_REVIEW
     * @example
     * // Get one COMMITTEE_REVIEW
     * const cOMMITTEE_REVIEW = await prisma.cOMMITTEE_REVIEW.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends COMMITTEE_REVIEWFindFirstOrThrowArgs>(args?: SelectSubset<T, COMMITTEE_REVIEWFindFirstOrThrowArgs<ExtArgs>>): Prisma__COMMITTEE_REVIEWClient<$Result.GetResult<Prisma.$COMMITTEE_REVIEWPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more COMMITTEE_REVIEWS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {COMMITTEE_REVIEWFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all COMMITTEE_REVIEWS
     * const cOMMITTEE_REVIEWS = await prisma.cOMMITTEE_REVIEW.findMany()
     * 
     * // Get first 10 COMMITTEE_REVIEWS
     * const cOMMITTEE_REVIEWS = await prisma.cOMMITTEE_REVIEW.findMany({ take: 10 })
     * 
     * // Only select the `review_id`
     * const cOMMITTEE_REVIEWWithReview_idOnly = await prisma.cOMMITTEE_REVIEW.findMany({ select: { review_id: true } })
     * 
     */
    findMany<T extends COMMITTEE_REVIEWFindManyArgs>(args?: SelectSubset<T, COMMITTEE_REVIEWFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$COMMITTEE_REVIEWPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a COMMITTEE_REVIEW.
     * @param {COMMITTEE_REVIEWCreateArgs} args - Arguments to create a COMMITTEE_REVIEW.
     * @example
     * // Create one COMMITTEE_REVIEW
     * const COMMITTEE_REVIEW = await prisma.cOMMITTEE_REVIEW.create({
     *   data: {
     *     // ... data to create a COMMITTEE_REVIEW
     *   }
     * })
     * 
     */
    create<T extends COMMITTEE_REVIEWCreateArgs>(args: SelectSubset<T, COMMITTEE_REVIEWCreateArgs<ExtArgs>>): Prisma__COMMITTEE_REVIEWClient<$Result.GetResult<Prisma.$COMMITTEE_REVIEWPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many COMMITTEE_REVIEWS.
     * @param {COMMITTEE_REVIEWCreateManyArgs} args - Arguments to create many COMMITTEE_REVIEWS.
     * @example
     * // Create many COMMITTEE_REVIEWS
     * const cOMMITTEE_REVIEW = await prisma.cOMMITTEE_REVIEW.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends COMMITTEE_REVIEWCreateManyArgs>(args?: SelectSubset<T, COMMITTEE_REVIEWCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a COMMITTEE_REVIEW.
     * @param {COMMITTEE_REVIEWDeleteArgs} args - Arguments to delete one COMMITTEE_REVIEW.
     * @example
     * // Delete one COMMITTEE_REVIEW
     * const COMMITTEE_REVIEW = await prisma.cOMMITTEE_REVIEW.delete({
     *   where: {
     *     // ... filter to delete one COMMITTEE_REVIEW
     *   }
     * })
     * 
     */
    delete<T extends COMMITTEE_REVIEWDeleteArgs>(args: SelectSubset<T, COMMITTEE_REVIEWDeleteArgs<ExtArgs>>): Prisma__COMMITTEE_REVIEWClient<$Result.GetResult<Prisma.$COMMITTEE_REVIEWPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one COMMITTEE_REVIEW.
     * @param {COMMITTEE_REVIEWUpdateArgs} args - Arguments to update one COMMITTEE_REVIEW.
     * @example
     * // Update one COMMITTEE_REVIEW
     * const cOMMITTEE_REVIEW = await prisma.cOMMITTEE_REVIEW.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends COMMITTEE_REVIEWUpdateArgs>(args: SelectSubset<T, COMMITTEE_REVIEWUpdateArgs<ExtArgs>>): Prisma__COMMITTEE_REVIEWClient<$Result.GetResult<Prisma.$COMMITTEE_REVIEWPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more COMMITTEE_REVIEWS.
     * @param {COMMITTEE_REVIEWDeleteManyArgs} args - Arguments to filter COMMITTEE_REVIEWS to delete.
     * @example
     * // Delete a few COMMITTEE_REVIEWS
     * const { count } = await prisma.cOMMITTEE_REVIEW.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends COMMITTEE_REVIEWDeleteManyArgs>(args?: SelectSubset<T, COMMITTEE_REVIEWDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more COMMITTEE_REVIEWS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {COMMITTEE_REVIEWUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many COMMITTEE_REVIEWS
     * const cOMMITTEE_REVIEW = await prisma.cOMMITTEE_REVIEW.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends COMMITTEE_REVIEWUpdateManyArgs>(args: SelectSubset<T, COMMITTEE_REVIEWUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one COMMITTEE_REVIEW.
     * @param {COMMITTEE_REVIEWUpsertArgs} args - Arguments to update or create a COMMITTEE_REVIEW.
     * @example
     * // Update or create a COMMITTEE_REVIEW
     * const cOMMITTEE_REVIEW = await prisma.cOMMITTEE_REVIEW.upsert({
     *   create: {
     *     // ... data to create a COMMITTEE_REVIEW
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the COMMITTEE_REVIEW we want to update
     *   }
     * })
     */
    upsert<T extends COMMITTEE_REVIEWUpsertArgs>(args: SelectSubset<T, COMMITTEE_REVIEWUpsertArgs<ExtArgs>>): Prisma__COMMITTEE_REVIEWClient<$Result.GetResult<Prisma.$COMMITTEE_REVIEWPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of COMMITTEE_REVIEWS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {COMMITTEE_REVIEWCountArgs} args - Arguments to filter COMMITTEE_REVIEWS to count.
     * @example
     * // Count the number of COMMITTEE_REVIEWS
     * const count = await prisma.cOMMITTEE_REVIEW.count({
     *   where: {
     *     // ... the filter for the COMMITTEE_REVIEWS we want to count
     *   }
     * })
    **/
    count<T extends COMMITTEE_REVIEWCountArgs>(
      args?: Subset<T, COMMITTEE_REVIEWCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], COMMITTEE_REVIEWCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a COMMITTEE_REVIEW.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {COMMITTEE_REVIEWAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends COMMITTEE_REVIEWAggregateArgs>(args: Subset<T, COMMITTEE_REVIEWAggregateArgs>): Prisma.PrismaPromise<GetCOMMITTEE_REVIEWAggregateType<T>>

    /**
     * Group by COMMITTEE_REVIEW.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {COMMITTEE_REVIEWGroupByArgs} args - Group by arguments.
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
      T extends COMMITTEE_REVIEWGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: COMMITTEE_REVIEWGroupByArgs['orderBy'] }
        : { orderBy?: COMMITTEE_REVIEWGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, COMMITTEE_REVIEWGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCOMMITTEE_REVIEWGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the COMMITTEE_REVIEW model
   */
  readonly fields: COMMITTEE_REVIEWFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for COMMITTEE_REVIEW.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__COMMITTEE_REVIEWClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    APPLICATION<T extends COMMITTEE_REVIEW$APPLICATIONArgs<ExtArgs> = {}>(args?: Subset<T, COMMITTEE_REVIEW$APPLICATIONArgs<ExtArgs>>): Prisma__APPLICATIONClient<$Result.GetResult<Prisma.$APPLICATIONPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    USER<T extends COMMITTEE_REVIEW$USERArgs<ExtArgs> = {}>(args?: Subset<T, COMMITTEE_REVIEW$USERArgs<ExtArgs>>): Prisma__USERClient<$Result.GetResult<Prisma.$USERPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the COMMITTEE_REVIEW model
   */
  interface COMMITTEE_REVIEWFieldRefs {
    readonly review_id: FieldRef<"COMMITTEE_REVIEW", 'Int'>
    readonly application_id: FieldRef<"COMMITTEE_REVIEW", 'Int'>
    readonly reviewer_id: FieldRef<"COMMITTEE_REVIEW", 'Int'>
    readonly review_date: FieldRef<"COMMITTEE_REVIEW", 'DateTime'>
    readonly points_awarded: FieldRef<"COMMITTEE_REVIEW", 'Int'>
    readonly comments: FieldRef<"COMMITTEE_REVIEW", 'String'>
    readonly status: FieldRef<"COMMITTEE_REVIEW", 'COMMITTEE_REVIEW_status'>
    readonly is_read: FieldRef<"COMMITTEE_REVIEW", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * COMMITTEE_REVIEW findUnique
   */
  export type COMMITTEE_REVIEWFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the COMMITTEE_REVIEW
     */
    select?: COMMITTEE_REVIEWSelect<ExtArgs> | null
    /**
     * Omit specific fields from the COMMITTEE_REVIEW
     */
    omit?: COMMITTEE_REVIEWOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: COMMITTEE_REVIEWInclude<ExtArgs> | null
    /**
     * Filter, which COMMITTEE_REVIEW to fetch.
     */
    where: COMMITTEE_REVIEWWhereUniqueInput
  }

  /**
   * COMMITTEE_REVIEW findUniqueOrThrow
   */
  export type COMMITTEE_REVIEWFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the COMMITTEE_REVIEW
     */
    select?: COMMITTEE_REVIEWSelect<ExtArgs> | null
    /**
     * Omit specific fields from the COMMITTEE_REVIEW
     */
    omit?: COMMITTEE_REVIEWOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: COMMITTEE_REVIEWInclude<ExtArgs> | null
    /**
     * Filter, which COMMITTEE_REVIEW to fetch.
     */
    where: COMMITTEE_REVIEWWhereUniqueInput
  }

  /**
   * COMMITTEE_REVIEW findFirst
   */
  export type COMMITTEE_REVIEWFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the COMMITTEE_REVIEW
     */
    select?: COMMITTEE_REVIEWSelect<ExtArgs> | null
    /**
     * Omit specific fields from the COMMITTEE_REVIEW
     */
    omit?: COMMITTEE_REVIEWOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: COMMITTEE_REVIEWInclude<ExtArgs> | null
    /**
     * Filter, which COMMITTEE_REVIEW to fetch.
     */
    where?: COMMITTEE_REVIEWWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of COMMITTEE_REVIEWS to fetch.
     */
    orderBy?: COMMITTEE_REVIEWOrderByWithRelationInput | COMMITTEE_REVIEWOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for COMMITTEE_REVIEWS.
     */
    cursor?: COMMITTEE_REVIEWWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` COMMITTEE_REVIEWS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` COMMITTEE_REVIEWS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of COMMITTEE_REVIEWS.
     */
    distinct?: COMMITTEE_REVIEWScalarFieldEnum | COMMITTEE_REVIEWScalarFieldEnum[]
  }

  /**
   * COMMITTEE_REVIEW findFirstOrThrow
   */
  export type COMMITTEE_REVIEWFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the COMMITTEE_REVIEW
     */
    select?: COMMITTEE_REVIEWSelect<ExtArgs> | null
    /**
     * Omit specific fields from the COMMITTEE_REVIEW
     */
    omit?: COMMITTEE_REVIEWOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: COMMITTEE_REVIEWInclude<ExtArgs> | null
    /**
     * Filter, which COMMITTEE_REVIEW to fetch.
     */
    where?: COMMITTEE_REVIEWWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of COMMITTEE_REVIEWS to fetch.
     */
    orderBy?: COMMITTEE_REVIEWOrderByWithRelationInput | COMMITTEE_REVIEWOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for COMMITTEE_REVIEWS.
     */
    cursor?: COMMITTEE_REVIEWWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` COMMITTEE_REVIEWS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` COMMITTEE_REVIEWS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of COMMITTEE_REVIEWS.
     */
    distinct?: COMMITTEE_REVIEWScalarFieldEnum | COMMITTEE_REVIEWScalarFieldEnum[]
  }

  /**
   * COMMITTEE_REVIEW findMany
   */
  export type COMMITTEE_REVIEWFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the COMMITTEE_REVIEW
     */
    select?: COMMITTEE_REVIEWSelect<ExtArgs> | null
    /**
     * Omit specific fields from the COMMITTEE_REVIEW
     */
    omit?: COMMITTEE_REVIEWOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: COMMITTEE_REVIEWInclude<ExtArgs> | null
    /**
     * Filter, which COMMITTEE_REVIEWS to fetch.
     */
    where?: COMMITTEE_REVIEWWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of COMMITTEE_REVIEWS to fetch.
     */
    orderBy?: COMMITTEE_REVIEWOrderByWithRelationInput | COMMITTEE_REVIEWOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing COMMITTEE_REVIEWS.
     */
    cursor?: COMMITTEE_REVIEWWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` COMMITTEE_REVIEWS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` COMMITTEE_REVIEWS.
     */
    skip?: number
    distinct?: COMMITTEE_REVIEWScalarFieldEnum | COMMITTEE_REVIEWScalarFieldEnum[]
  }

  /**
   * COMMITTEE_REVIEW create
   */
  export type COMMITTEE_REVIEWCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the COMMITTEE_REVIEW
     */
    select?: COMMITTEE_REVIEWSelect<ExtArgs> | null
    /**
     * Omit specific fields from the COMMITTEE_REVIEW
     */
    omit?: COMMITTEE_REVIEWOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: COMMITTEE_REVIEWInclude<ExtArgs> | null
    /**
     * The data needed to create a COMMITTEE_REVIEW.
     */
    data?: XOR<COMMITTEE_REVIEWCreateInput, COMMITTEE_REVIEWUncheckedCreateInput>
  }

  /**
   * COMMITTEE_REVIEW createMany
   */
  export type COMMITTEE_REVIEWCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many COMMITTEE_REVIEWS.
     */
    data: COMMITTEE_REVIEWCreateManyInput | COMMITTEE_REVIEWCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * COMMITTEE_REVIEW update
   */
  export type COMMITTEE_REVIEWUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the COMMITTEE_REVIEW
     */
    select?: COMMITTEE_REVIEWSelect<ExtArgs> | null
    /**
     * Omit specific fields from the COMMITTEE_REVIEW
     */
    omit?: COMMITTEE_REVIEWOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: COMMITTEE_REVIEWInclude<ExtArgs> | null
    /**
     * The data needed to update a COMMITTEE_REVIEW.
     */
    data: XOR<COMMITTEE_REVIEWUpdateInput, COMMITTEE_REVIEWUncheckedUpdateInput>
    /**
     * Choose, which COMMITTEE_REVIEW to update.
     */
    where: COMMITTEE_REVIEWWhereUniqueInput
  }

  /**
   * COMMITTEE_REVIEW updateMany
   */
  export type COMMITTEE_REVIEWUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update COMMITTEE_REVIEWS.
     */
    data: XOR<COMMITTEE_REVIEWUpdateManyMutationInput, COMMITTEE_REVIEWUncheckedUpdateManyInput>
    /**
     * Filter which COMMITTEE_REVIEWS to update
     */
    where?: COMMITTEE_REVIEWWhereInput
    /**
     * Limit how many COMMITTEE_REVIEWS to update.
     */
    limit?: number
  }

  /**
   * COMMITTEE_REVIEW upsert
   */
  export type COMMITTEE_REVIEWUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the COMMITTEE_REVIEW
     */
    select?: COMMITTEE_REVIEWSelect<ExtArgs> | null
    /**
     * Omit specific fields from the COMMITTEE_REVIEW
     */
    omit?: COMMITTEE_REVIEWOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: COMMITTEE_REVIEWInclude<ExtArgs> | null
    /**
     * The filter to search for the COMMITTEE_REVIEW to update in case it exists.
     */
    where: COMMITTEE_REVIEWWhereUniqueInput
    /**
     * In case the COMMITTEE_REVIEW found by the `where` argument doesn't exist, create a new COMMITTEE_REVIEW with this data.
     */
    create: XOR<COMMITTEE_REVIEWCreateInput, COMMITTEE_REVIEWUncheckedCreateInput>
    /**
     * In case the COMMITTEE_REVIEW was found with the provided `where` argument, update it with this data.
     */
    update: XOR<COMMITTEE_REVIEWUpdateInput, COMMITTEE_REVIEWUncheckedUpdateInput>
  }

  /**
   * COMMITTEE_REVIEW delete
   */
  export type COMMITTEE_REVIEWDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the COMMITTEE_REVIEW
     */
    select?: COMMITTEE_REVIEWSelect<ExtArgs> | null
    /**
     * Omit specific fields from the COMMITTEE_REVIEW
     */
    omit?: COMMITTEE_REVIEWOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: COMMITTEE_REVIEWInclude<ExtArgs> | null
    /**
     * Filter which COMMITTEE_REVIEW to delete.
     */
    where: COMMITTEE_REVIEWWhereUniqueInput
  }

  /**
   * COMMITTEE_REVIEW deleteMany
   */
  export type COMMITTEE_REVIEWDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which COMMITTEE_REVIEWS to delete
     */
    where?: COMMITTEE_REVIEWWhereInput
    /**
     * Limit how many COMMITTEE_REVIEWS to delete.
     */
    limit?: number
  }

  /**
   * COMMITTEE_REVIEW.APPLICATION
   */
  export type COMMITTEE_REVIEW$APPLICATIONArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APPLICATION
     */
    select?: APPLICATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the APPLICATION
     */
    omit?: APPLICATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: APPLICATIONInclude<ExtArgs> | null
    where?: APPLICATIONWhereInput
  }

  /**
   * COMMITTEE_REVIEW.USER
   */
  export type COMMITTEE_REVIEW$USERArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USER
     */
    select?: USERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USER
     */
    omit?: USEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USERInclude<ExtArgs> | null
    where?: USERWhereInput
  }

  /**
   * COMMITTEE_REVIEW without action
   */
  export type COMMITTEE_REVIEWDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the COMMITTEE_REVIEW
     */
    select?: COMMITTEE_REVIEWSelect<ExtArgs> | null
    /**
     * Omit specific fields from the COMMITTEE_REVIEW
     */
    omit?: COMMITTEE_REVIEWOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: COMMITTEE_REVIEWInclude<ExtArgs> | null
  }


  /**
   * Model DOCUMENT
   */

  export type AggregateDOCUMENT = {
    _count: DOCUMENTCountAggregateOutputType | null
    _avg: DOCUMENTAvgAggregateOutputType | null
    _sum: DOCUMENTSumAggregateOutputType | null
    _min: DOCUMENTMinAggregateOutputType | null
    _max: DOCUMENTMaxAggregateOutputType | null
  }

  export type DOCUMENTAvgAggregateOutputType = {
    document_id: number | null
    application_id: number | null
  }

  export type DOCUMENTSumAggregateOutputType = {
    document_id: number | null
    application_id: number | null
  }

  export type DOCUMENTMinAggregateOutputType = {
    document_id: number | null
    application_id: number | null
    document_type: string | null
    file_name: string | null
    file_path: string | null
    upload_date: Date | null
    verification_status: $Enums.DOCUMENT_verification_status | null
  }

  export type DOCUMENTMaxAggregateOutputType = {
    document_id: number | null
    application_id: number | null
    document_type: string | null
    file_name: string | null
    file_path: string | null
    upload_date: Date | null
    verification_status: $Enums.DOCUMENT_verification_status | null
  }

  export type DOCUMENTCountAggregateOutputType = {
    document_id: number
    application_id: number
    document_type: number
    file_name: number
    file_path: number
    upload_date: number
    verification_status: number
    _all: number
  }


  export type DOCUMENTAvgAggregateInputType = {
    document_id?: true
    application_id?: true
  }

  export type DOCUMENTSumAggregateInputType = {
    document_id?: true
    application_id?: true
  }

  export type DOCUMENTMinAggregateInputType = {
    document_id?: true
    application_id?: true
    document_type?: true
    file_name?: true
    file_path?: true
    upload_date?: true
    verification_status?: true
  }

  export type DOCUMENTMaxAggregateInputType = {
    document_id?: true
    application_id?: true
    document_type?: true
    file_name?: true
    file_path?: true
    upload_date?: true
    verification_status?: true
  }

  export type DOCUMENTCountAggregateInputType = {
    document_id?: true
    application_id?: true
    document_type?: true
    file_name?: true
    file_path?: true
    upload_date?: true
    verification_status?: true
    _all?: true
  }

  export type DOCUMENTAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DOCUMENT to aggregate.
     */
    where?: DOCUMENTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DOCUMENTS to fetch.
     */
    orderBy?: DOCUMENTOrderByWithRelationInput | DOCUMENTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DOCUMENTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DOCUMENTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DOCUMENTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DOCUMENTS
    **/
    _count?: true | DOCUMENTCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DOCUMENTAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DOCUMENTSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DOCUMENTMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DOCUMENTMaxAggregateInputType
  }

  export type GetDOCUMENTAggregateType<T extends DOCUMENTAggregateArgs> = {
        [P in keyof T & keyof AggregateDOCUMENT]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDOCUMENT[P]>
      : GetScalarType<T[P], AggregateDOCUMENT[P]>
  }




  export type DOCUMENTGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DOCUMENTWhereInput
    orderBy?: DOCUMENTOrderByWithAggregationInput | DOCUMENTOrderByWithAggregationInput[]
    by: DOCUMENTScalarFieldEnum[] | DOCUMENTScalarFieldEnum
    having?: DOCUMENTScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DOCUMENTCountAggregateInputType | true
    _avg?: DOCUMENTAvgAggregateInputType
    _sum?: DOCUMENTSumAggregateInputType
    _min?: DOCUMENTMinAggregateInputType
    _max?: DOCUMENTMaxAggregateInputType
  }

  export type DOCUMENTGroupByOutputType = {
    document_id: number
    application_id: number | null
    document_type: string | null
    file_name: string | null
    file_path: string | null
    upload_date: Date | null
    verification_status: $Enums.DOCUMENT_verification_status | null
    _count: DOCUMENTCountAggregateOutputType | null
    _avg: DOCUMENTAvgAggregateOutputType | null
    _sum: DOCUMENTSumAggregateOutputType | null
    _min: DOCUMENTMinAggregateOutputType | null
    _max: DOCUMENTMaxAggregateOutputType | null
  }

  type GetDOCUMENTGroupByPayload<T extends DOCUMENTGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DOCUMENTGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DOCUMENTGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DOCUMENTGroupByOutputType[P]>
            : GetScalarType<T[P], DOCUMENTGroupByOutputType[P]>
        }
      >
    >


  export type DOCUMENTSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    document_id?: boolean
    application_id?: boolean
    document_type?: boolean
    file_name?: boolean
    file_path?: boolean
    upload_date?: boolean
    verification_status?: boolean
    APPLICATION?: boolean | DOCUMENT$APPLICATIONArgs<ExtArgs>
  }, ExtArgs["result"]["dOCUMENT"]>



  export type DOCUMENTSelectScalar = {
    document_id?: boolean
    application_id?: boolean
    document_type?: boolean
    file_name?: boolean
    file_path?: boolean
    upload_date?: boolean
    verification_status?: boolean
  }

  export type DOCUMENTOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"document_id" | "application_id" | "document_type" | "file_name" | "file_path" | "upload_date" | "verification_status", ExtArgs["result"]["dOCUMENT"]>
  export type DOCUMENTInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    APPLICATION?: boolean | DOCUMENT$APPLICATIONArgs<ExtArgs>
  }

  export type $DOCUMENTPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DOCUMENT"
    objects: {
      APPLICATION: Prisma.$APPLICATIONPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      document_id: number
      application_id: number | null
      document_type: string | null
      file_name: string | null
      file_path: string | null
      upload_date: Date | null
      verification_status: $Enums.DOCUMENT_verification_status | null
    }, ExtArgs["result"]["dOCUMENT"]>
    composites: {}
  }

  type DOCUMENTGetPayload<S extends boolean | null | undefined | DOCUMENTDefaultArgs> = $Result.GetResult<Prisma.$DOCUMENTPayload, S>

  type DOCUMENTCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DOCUMENTFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DOCUMENTCountAggregateInputType | true
    }

  export interface DOCUMENTDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DOCUMENT'], meta: { name: 'DOCUMENT' } }
    /**
     * Find zero or one DOCUMENT that matches the filter.
     * @param {DOCUMENTFindUniqueArgs} args - Arguments to find a DOCUMENT
     * @example
     * // Get one DOCUMENT
     * const dOCUMENT = await prisma.dOCUMENT.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DOCUMENTFindUniqueArgs>(args: SelectSubset<T, DOCUMENTFindUniqueArgs<ExtArgs>>): Prisma__DOCUMENTClient<$Result.GetResult<Prisma.$DOCUMENTPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DOCUMENT that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DOCUMENTFindUniqueOrThrowArgs} args - Arguments to find a DOCUMENT
     * @example
     * // Get one DOCUMENT
     * const dOCUMENT = await prisma.dOCUMENT.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DOCUMENTFindUniqueOrThrowArgs>(args: SelectSubset<T, DOCUMENTFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DOCUMENTClient<$Result.GetResult<Prisma.$DOCUMENTPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DOCUMENT that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DOCUMENTFindFirstArgs} args - Arguments to find a DOCUMENT
     * @example
     * // Get one DOCUMENT
     * const dOCUMENT = await prisma.dOCUMENT.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DOCUMENTFindFirstArgs>(args?: SelectSubset<T, DOCUMENTFindFirstArgs<ExtArgs>>): Prisma__DOCUMENTClient<$Result.GetResult<Prisma.$DOCUMENTPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DOCUMENT that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DOCUMENTFindFirstOrThrowArgs} args - Arguments to find a DOCUMENT
     * @example
     * // Get one DOCUMENT
     * const dOCUMENT = await prisma.dOCUMENT.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DOCUMENTFindFirstOrThrowArgs>(args?: SelectSubset<T, DOCUMENTFindFirstOrThrowArgs<ExtArgs>>): Prisma__DOCUMENTClient<$Result.GetResult<Prisma.$DOCUMENTPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DOCUMENTS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DOCUMENTFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DOCUMENTS
     * const dOCUMENTS = await prisma.dOCUMENT.findMany()
     * 
     * // Get first 10 DOCUMENTS
     * const dOCUMENTS = await prisma.dOCUMENT.findMany({ take: 10 })
     * 
     * // Only select the `document_id`
     * const dOCUMENTWithDocument_idOnly = await prisma.dOCUMENT.findMany({ select: { document_id: true } })
     * 
     */
    findMany<T extends DOCUMENTFindManyArgs>(args?: SelectSubset<T, DOCUMENTFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DOCUMENTPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DOCUMENT.
     * @param {DOCUMENTCreateArgs} args - Arguments to create a DOCUMENT.
     * @example
     * // Create one DOCUMENT
     * const DOCUMENT = await prisma.dOCUMENT.create({
     *   data: {
     *     // ... data to create a DOCUMENT
     *   }
     * })
     * 
     */
    create<T extends DOCUMENTCreateArgs>(args: SelectSubset<T, DOCUMENTCreateArgs<ExtArgs>>): Prisma__DOCUMENTClient<$Result.GetResult<Prisma.$DOCUMENTPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DOCUMENTS.
     * @param {DOCUMENTCreateManyArgs} args - Arguments to create many DOCUMENTS.
     * @example
     * // Create many DOCUMENTS
     * const dOCUMENT = await prisma.dOCUMENT.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DOCUMENTCreateManyArgs>(args?: SelectSubset<T, DOCUMENTCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DOCUMENT.
     * @param {DOCUMENTDeleteArgs} args - Arguments to delete one DOCUMENT.
     * @example
     * // Delete one DOCUMENT
     * const DOCUMENT = await prisma.dOCUMENT.delete({
     *   where: {
     *     // ... filter to delete one DOCUMENT
     *   }
     * })
     * 
     */
    delete<T extends DOCUMENTDeleteArgs>(args: SelectSubset<T, DOCUMENTDeleteArgs<ExtArgs>>): Prisma__DOCUMENTClient<$Result.GetResult<Prisma.$DOCUMENTPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DOCUMENT.
     * @param {DOCUMENTUpdateArgs} args - Arguments to update one DOCUMENT.
     * @example
     * // Update one DOCUMENT
     * const dOCUMENT = await prisma.dOCUMENT.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DOCUMENTUpdateArgs>(args: SelectSubset<T, DOCUMENTUpdateArgs<ExtArgs>>): Prisma__DOCUMENTClient<$Result.GetResult<Prisma.$DOCUMENTPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DOCUMENTS.
     * @param {DOCUMENTDeleteManyArgs} args - Arguments to filter DOCUMENTS to delete.
     * @example
     * // Delete a few DOCUMENTS
     * const { count } = await prisma.dOCUMENT.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DOCUMENTDeleteManyArgs>(args?: SelectSubset<T, DOCUMENTDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DOCUMENTS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DOCUMENTUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DOCUMENTS
     * const dOCUMENT = await prisma.dOCUMENT.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DOCUMENTUpdateManyArgs>(args: SelectSubset<T, DOCUMENTUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DOCUMENT.
     * @param {DOCUMENTUpsertArgs} args - Arguments to update or create a DOCUMENT.
     * @example
     * // Update or create a DOCUMENT
     * const dOCUMENT = await prisma.dOCUMENT.upsert({
     *   create: {
     *     // ... data to create a DOCUMENT
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DOCUMENT we want to update
     *   }
     * })
     */
    upsert<T extends DOCUMENTUpsertArgs>(args: SelectSubset<T, DOCUMENTUpsertArgs<ExtArgs>>): Prisma__DOCUMENTClient<$Result.GetResult<Prisma.$DOCUMENTPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DOCUMENTS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DOCUMENTCountArgs} args - Arguments to filter DOCUMENTS to count.
     * @example
     * // Count the number of DOCUMENTS
     * const count = await prisma.dOCUMENT.count({
     *   where: {
     *     // ... the filter for the DOCUMENTS we want to count
     *   }
     * })
    **/
    count<T extends DOCUMENTCountArgs>(
      args?: Subset<T, DOCUMENTCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DOCUMENTCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DOCUMENT.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DOCUMENTAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DOCUMENTAggregateArgs>(args: Subset<T, DOCUMENTAggregateArgs>): Prisma.PrismaPromise<GetDOCUMENTAggregateType<T>>

    /**
     * Group by DOCUMENT.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DOCUMENTGroupByArgs} args - Group by arguments.
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
      T extends DOCUMENTGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DOCUMENTGroupByArgs['orderBy'] }
        : { orderBy?: DOCUMENTGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DOCUMENTGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDOCUMENTGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DOCUMENT model
   */
  readonly fields: DOCUMENTFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DOCUMENT.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DOCUMENTClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    APPLICATION<T extends DOCUMENT$APPLICATIONArgs<ExtArgs> = {}>(args?: Subset<T, DOCUMENT$APPLICATIONArgs<ExtArgs>>): Prisma__APPLICATIONClient<$Result.GetResult<Prisma.$APPLICATIONPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DOCUMENT model
   */
  interface DOCUMENTFieldRefs {
    readonly document_id: FieldRef<"DOCUMENT", 'Int'>
    readonly application_id: FieldRef<"DOCUMENT", 'Int'>
    readonly document_type: FieldRef<"DOCUMENT", 'String'>
    readonly file_name: FieldRef<"DOCUMENT", 'String'>
    readonly file_path: FieldRef<"DOCUMENT", 'String'>
    readonly upload_date: FieldRef<"DOCUMENT", 'DateTime'>
    readonly verification_status: FieldRef<"DOCUMENT", 'DOCUMENT_verification_status'>
  }
    

  // Custom InputTypes
  /**
   * DOCUMENT findUnique
   */
  export type DOCUMENTFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DOCUMENT
     */
    select?: DOCUMENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DOCUMENT
     */
    omit?: DOCUMENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DOCUMENTInclude<ExtArgs> | null
    /**
     * Filter, which DOCUMENT to fetch.
     */
    where: DOCUMENTWhereUniqueInput
  }

  /**
   * DOCUMENT findUniqueOrThrow
   */
  export type DOCUMENTFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DOCUMENT
     */
    select?: DOCUMENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DOCUMENT
     */
    omit?: DOCUMENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DOCUMENTInclude<ExtArgs> | null
    /**
     * Filter, which DOCUMENT to fetch.
     */
    where: DOCUMENTWhereUniqueInput
  }

  /**
   * DOCUMENT findFirst
   */
  export type DOCUMENTFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DOCUMENT
     */
    select?: DOCUMENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DOCUMENT
     */
    omit?: DOCUMENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DOCUMENTInclude<ExtArgs> | null
    /**
     * Filter, which DOCUMENT to fetch.
     */
    where?: DOCUMENTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DOCUMENTS to fetch.
     */
    orderBy?: DOCUMENTOrderByWithRelationInput | DOCUMENTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DOCUMENTS.
     */
    cursor?: DOCUMENTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DOCUMENTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DOCUMENTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DOCUMENTS.
     */
    distinct?: DOCUMENTScalarFieldEnum | DOCUMENTScalarFieldEnum[]
  }

  /**
   * DOCUMENT findFirstOrThrow
   */
  export type DOCUMENTFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DOCUMENT
     */
    select?: DOCUMENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DOCUMENT
     */
    omit?: DOCUMENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DOCUMENTInclude<ExtArgs> | null
    /**
     * Filter, which DOCUMENT to fetch.
     */
    where?: DOCUMENTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DOCUMENTS to fetch.
     */
    orderBy?: DOCUMENTOrderByWithRelationInput | DOCUMENTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DOCUMENTS.
     */
    cursor?: DOCUMENTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DOCUMENTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DOCUMENTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DOCUMENTS.
     */
    distinct?: DOCUMENTScalarFieldEnum | DOCUMENTScalarFieldEnum[]
  }

  /**
   * DOCUMENT findMany
   */
  export type DOCUMENTFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DOCUMENT
     */
    select?: DOCUMENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DOCUMENT
     */
    omit?: DOCUMENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DOCUMENTInclude<ExtArgs> | null
    /**
     * Filter, which DOCUMENTS to fetch.
     */
    where?: DOCUMENTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DOCUMENTS to fetch.
     */
    orderBy?: DOCUMENTOrderByWithRelationInput | DOCUMENTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DOCUMENTS.
     */
    cursor?: DOCUMENTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DOCUMENTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DOCUMENTS.
     */
    skip?: number
    distinct?: DOCUMENTScalarFieldEnum | DOCUMENTScalarFieldEnum[]
  }

  /**
   * DOCUMENT create
   */
  export type DOCUMENTCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DOCUMENT
     */
    select?: DOCUMENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DOCUMENT
     */
    omit?: DOCUMENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DOCUMENTInclude<ExtArgs> | null
    /**
     * The data needed to create a DOCUMENT.
     */
    data?: XOR<DOCUMENTCreateInput, DOCUMENTUncheckedCreateInput>
  }

  /**
   * DOCUMENT createMany
   */
  export type DOCUMENTCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DOCUMENTS.
     */
    data: DOCUMENTCreateManyInput | DOCUMENTCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DOCUMENT update
   */
  export type DOCUMENTUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DOCUMENT
     */
    select?: DOCUMENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DOCUMENT
     */
    omit?: DOCUMENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DOCUMENTInclude<ExtArgs> | null
    /**
     * The data needed to update a DOCUMENT.
     */
    data: XOR<DOCUMENTUpdateInput, DOCUMENTUncheckedUpdateInput>
    /**
     * Choose, which DOCUMENT to update.
     */
    where: DOCUMENTWhereUniqueInput
  }

  /**
   * DOCUMENT updateMany
   */
  export type DOCUMENTUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DOCUMENTS.
     */
    data: XOR<DOCUMENTUpdateManyMutationInput, DOCUMENTUncheckedUpdateManyInput>
    /**
     * Filter which DOCUMENTS to update
     */
    where?: DOCUMENTWhereInput
    /**
     * Limit how many DOCUMENTS to update.
     */
    limit?: number
  }

  /**
   * DOCUMENT upsert
   */
  export type DOCUMENTUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DOCUMENT
     */
    select?: DOCUMENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DOCUMENT
     */
    omit?: DOCUMENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DOCUMENTInclude<ExtArgs> | null
    /**
     * The filter to search for the DOCUMENT to update in case it exists.
     */
    where: DOCUMENTWhereUniqueInput
    /**
     * In case the DOCUMENT found by the `where` argument doesn't exist, create a new DOCUMENT with this data.
     */
    create: XOR<DOCUMENTCreateInput, DOCUMENTUncheckedCreateInput>
    /**
     * In case the DOCUMENT was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DOCUMENTUpdateInput, DOCUMENTUncheckedUpdateInput>
  }

  /**
   * DOCUMENT delete
   */
  export type DOCUMENTDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DOCUMENT
     */
    select?: DOCUMENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DOCUMENT
     */
    omit?: DOCUMENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DOCUMENTInclude<ExtArgs> | null
    /**
     * Filter which DOCUMENT to delete.
     */
    where: DOCUMENTWhereUniqueInput
  }

  /**
   * DOCUMENT deleteMany
   */
  export type DOCUMENTDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DOCUMENTS to delete
     */
    where?: DOCUMENTWhereInput
    /**
     * Limit how many DOCUMENTS to delete.
     */
    limit?: number
  }

  /**
   * DOCUMENT.APPLICATION
   */
  export type DOCUMENT$APPLICATIONArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APPLICATION
     */
    select?: APPLICATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the APPLICATION
     */
    omit?: APPLICATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: APPLICATIONInclude<ExtArgs> | null
    where?: APPLICATIONWhereInput
  }

  /**
   * DOCUMENT without action
   */
  export type DOCUMENTDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DOCUMENT
     */
    select?: DOCUMENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DOCUMENT
     */
    omit?: DOCUMENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DOCUMENTInclude<ExtArgs> | null
  }


  /**
   * Model ELIGIBILITY_CRITERIA
   */

  export type AggregateELIGIBILITY_CRITERIA = {
    _count: ELIGIBILITY_CRITERIACountAggregateOutputType | null
    _avg: ELIGIBILITY_CRITERIAAvgAggregateOutputType | null
    _sum: ELIGIBILITY_CRITERIASumAggregateOutputType | null
    _min: ELIGIBILITY_CRITERIAMinAggregateOutputType | null
    _max: ELIGIBILITY_CRITERIAMaxAggregateOutputType | null
  }

  export type ELIGIBILITY_CRITERIAAvgAggregateOutputType = {
    criteria_id: number | null
    scholarship_id: number | null
    min_value: Decimal | null
    max_value: Decimal | null
    weight: number | null
  }

  export type ELIGIBILITY_CRITERIASumAggregateOutputType = {
    criteria_id: number | null
    scholarship_id: number | null
    min_value: Decimal | null
    max_value: Decimal | null
    weight: number | null
  }

  export type ELIGIBILITY_CRITERIAMinAggregateOutputType = {
    criteria_id: number | null
    scholarship_id: number | null
    criteria_name: string | null
    criteria_description: string | null
    min_value: Decimal | null
    max_value: Decimal | null
    weight: number | null
  }

  export type ELIGIBILITY_CRITERIAMaxAggregateOutputType = {
    criteria_id: number | null
    scholarship_id: number | null
    criteria_name: string | null
    criteria_description: string | null
    min_value: Decimal | null
    max_value: Decimal | null
    weight: number | null
  }

  export type ELIGIBILITY_CRITERIACountAggregateOutputType = {
    criteria_id: number
    scholarship_id: number
    criteria_name: number
    criteria_description: number
    min_value: number
    max_value: number
    weight: number
    _all: number
  }


  export type ELIGIBILITY_CRITERIAAvgAggregateInputType = {
    criteria_id?: true
    scholarship_id?: true
    min_value?: true
    max_value?: true
    weight?: true
  }

  export type ELIGIBILITY_CRITERIASumAggregateInputType = {
    criteria_id?: true
    scholarship_id?: true
    min_value?: true
    max_value?: true
    weight?: true
  }

  export type ELIGIBILITY_CRITERIAMinAggregateInputType = {
    criteria_id?: true
    scholarship_id?: true
    criteria_name?: true
    criteria_description?: true
    min_value?: true
    max_value?: true
    weight?: true
  }

  export type ELIGIBILITY_CRITERIAMaxAggregateInputType = {
    criteria_id?: true
    scholarship_id?: true
    criteria_name?: true
    criteria_description?: true
    min_value?: true
    max_value?: true
    weight?: true
  }

  export type ELIGIBILITY_CRITERIACountAggregateInputType = {
    criteria_id?: true
    scholarship_id?: true
    criteria_name?: true
    criteria_description?: true
    min_value?: true
    max_value?: true
    weight?: true
    _all?: true
  }

  export type ELIGIBILITY_CRITERIAAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ELIGIBILITY_CRITERIA to aggregate.
     */
    where?: ELIGIBILITY_CRITERIAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ELIGIBILITY_CRITERIA to fetch.
     */
    orderBy?: ELIGIBILITY_CRITERIAOrderByWithRelationInput | ELIGIBILITY_CRITERIAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ELIGIBILITY_CRITERIAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ELIGIBILITY_CRITERIA from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ELIGIBILITY_CRITERIA.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ELIGIBILITY_CRITERIA
    **/
    _count?: true | ELIGIBILITY_CRITERIACountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ELIGIBILITY_CRITERIAAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ELIGIBILITY_CRITERIASumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ELIGIBILITY_CRITERIAMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ELIGIBILITY_CRITERIAMaxAggregateInputType
  }

  export type GetELIGIBILITY_CRITERIAAggregateType<T extends ELIGIBILITY_CRITERIAAggregateArgs> = {
        [P in keyof T & keyof AggregateELIGIBILITY_CRITERIA]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateELIGIBILITY_CRITERIA[P]>
      : GetScalarType<T[P], AggregateELIGIBILITY_CRITERIA[P]>
  }




  export type ELIGIBILITY_CRITERIAGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ELIGIBILITY_CRITERIAWhereInput
    orderBy?: ELIGIBILITY_CRITERIAOrderByWithAggregationInput | ELIGIBILITY_CRITERIAOrderByWithAggregationInput[]
    by: ELIGIBILITY_CRITERIAScalarFieldEnum[] | ELIGIBILITY_CRITERIAScalarFieldEnum
    having?: ELIGIBILITY_CRITERIAScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ELIGIBILITY_CRITERIACountAggregateInputType | true
    _avg?: ELIGIBILITY_CRITERIAAvgAggregateInputType
    _sum?: ELIGIBILITY_CRITERIASumAggregateInputType
    _min?: ELIGIBILITY_CRITERIAMinAggregateInputType
    _max?: ELIGIBILITY_CRITERIAMaxAggregateInputType
  }

  export type ELIGIBILITY_CRITERIAGroupByOutputType = {
    criteria_id: number
    scholarship_id: number | null
    criteria_name: string | null
    criteria_description: string | null
    min_value: Decimal | null
    max_value: Decimal | null
    weight: number | null
    _count: ELIGIBILITY_CRITERIACountAggregateOutputType | null
    _avg: ELIGIBILITY_CRITERIAAvgAggregateOutputType | null
    _sum: ELIGIBILITY_CRITERIASumAggregateOutputType | null
    _min: ELIGIBILITY_CRITERIAMinAggregateOutputType | null
    _max: ELIGIBILITY_CRITERIAMaxAggregateOutputType | null
  }

  type GetELIGIBILITY_CRITERIAGroupByPayload<T extends ELIGIBILITY_CRITERIAGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ELIGIBILITY_CRITERIAGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ELIGIBILITY_CRITERIAGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ELIGIBILITY_CRITERIAGroupByOutputType[P]>
            : GetScalarType<T[P], ELIGIBILITY_CRITERIAGroupByOutputType[P]>
        }
      >
    >


  export type ELIGIBILITY_CRITERIASelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    criteria_id?: boolean
    scholarship_id?: boolean
    criteria_name?: boolean
    criteria_description?: boolean
    min_value?: boolean
    max_value?: boolean
    weight?: boolean
    SCHOLARSHIP?: boolean | ELIGIBILITY_CRITERIA$SCHOLARSHIPArgs<ExtArgs>
  }, ExtArgs["result"]["eLIGIBILITY_CRITERIA"]>



  export type ELIGIBILITY_CRITERIASelectScalar = {
    criteria_id?: boolean
    scholarship_id?: boolean
    criteria_name?: boolean
    criteria_description?: boolean
    min_value?: boolean
    max_value?: boolean
    weight?: boolean
  }

  export type ELIGIBILITY_CRITERIAOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"criteria_id" | "scholarship_id" | "criteria_name" | "criteria_description" | "min_value" | "max_value" | "weight", ExtArgs["result"]["eLIGIBILITY_CRITERIA"]>
  export type ELIGIBILITY_CRITERIAInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SCHOLARSHIP?: boolean | ELIGIBILITY_CRITERIA$SCHOLARSHIPArgs<ExtArgs>
  }

  export type $ELIGIBILITY_CRITERIAPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ELIGIBILITY_CRITERIA"
    objects: {
      SCHOLARSHIP: Prisma.$SCHOLARSHIPPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      criteria_id: number
      scholarship_id: number | null
      criteria_name: string | null
      criteria_description: string | null
      min_value: Prisma.Decimal | null
      max_value: Prisma.Decimal | null
      weight: number | null
    }, ExtArgs["result"]["eLIGIBILITY_CRITERIA"]>
    composites: {}
  }

  type ELIGIBILITY_CRITERIAGetPayload<S extends boolean | null | undefined | ELIGIBILITY_CRITERIADefaultArgs> = $Result.GetResult<Prisma.$ELIGIBILITY_CRITERIAPayload, S>

  type ELIGIBILITY_CRITERIACountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ELIGIBILITY_CRITERIAFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ELIGIBILITY_CRITERIACountAggregateInputType | true
    }

  export interface ELIGIBILITY_CRITERIADelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ELIGIBILITY_CRITERIA'], meta: { name: 'ELIGIBILITY_CRITERIA' } }
    /**
     * Find zero or one ELIGIBILITY_CRITERIA that matches the filter.
     * @param {ELIGIBILITY_CRITERIAFindUniqueArgs} args - Arguments to find a ELIGIBILITY_CRITERIA
     * @example
     * // Get one ELIGIBILITY_CRITERIA
     * const eLIGIBILITY_CRITERIA = await prisma.eLIGIBILITY_CRITERIA.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ELIGIBILITY_CRITERIAFindUniqueArgs>(args: SelectSubset<T, ELIGIBILITY_CRITERIAFindUniqueArgs<ExtArgs>>): Prisma__ELIGIBILITY_CRITERIAClient<$Result.GetResult<Prisma.$ELIGIBILITY_CRITERIAPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ELIGIBILITY_CRITERIA that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ELIGIBILITY_CRITERIAFindUniqueOrThrowArgs} args - Arguments to find a ELIGIBILITY_CRITERIA
     * @example
     * // Get one ELIGIBILITY_CRITERIA
     * const eLIGIBILITY_CRITERIA = await prisma.eLIGIBILITY_CRITERIA.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ELIGIBILITY_CRITERIAFindUniqueOrThrowArgs>(args: SelectSubset<T, ELIGIBILITY_CRITERIAFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ELIGIBILITY_CRITERIAClient<$Result.GetResult<Prisma.$ELIGIBILITY_CRITERIAPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ELIGIBILITY_CRITERIA that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ELIGIBILITY_CRITERIAFindFirstArgs} args - Arguments to find a ELIGIBILITY_CRITERIA
     * @example
     * // Get one ELIGIBILITY_CRITERIA
     * const eLIGIBILITY_CRITERIA = await prisma.eLIGIBILITY_CRITERIA.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ELIGIBILITY_CRITERIAFindFirstArgs>(args?: SelectSubset<T, ELIGIBILITY_CRITERIAFindFirstArgs<ExtArgs>>): Prisma__ELIGIBILITY_CRITERIAClient<$Result.GetResult<Prisma.$ELIGIBILITY_CRITERIAPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ELIGIBILITY_CRITERIA that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ELIGIBILITY_CRITERIAFindFirstOrThrowArgs} args - Arguments to find a ELIGIBILITY_CRITERIA
     * @example
     * // Get one ELIGIBILITY_CRITERIA
     * const eLIGIBILITY_CRITERIA = await prisma.eLIGIBILITY_CRITERIA.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ELIGIBILITY_CRITERIAFindFirstOrThrowArgs>(args?: SelectSubset<T, ELIGIBILITY_CRITERIAFindFirstOrThrowArgs<ExtArgs>>): Prisma__ELIGIBILITY_CRITERIAClient<$Result.GetResult<Prisma.$ELIGIBILITY_CRITERIAPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ELIGIBILITY_CRITERIA that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ELIGIBILITY_CRITERIAFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ELIGIBILITY_CRITERIA
     * const eLIGIBILITY_CRITERIA = await prisma.eLIGIBILITY_CRITERIA.findMany()
     * 
     * // Get first 10 ELIGIBILITY_CRITERIA
     * const eLIGIBILITY_CRITERIA = await prisma.eLIGIBILITY_CRITERIA.findMany({ take: 10 })
     * 
     * // Only select the `criteria_id`
     * const eLIGIBILITY_CRITERIAWithCriteria_idOnly = await prisma.eLIGIBILITY_CRITERIA.findMany({ select: { criteria_id: true } })
     * 
     */
    findMany<T extends ELIGIBILITY_CRITERIAFindManyArgs>(args?: SelectSubset<T, ELIGIBILITY_CRITERIAFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ELIGIBILITY_CRITERIAPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ELIGIBILITY_CRITERIA.
     * @param {ELIGIBILITY_CRITERIACreateArgs} args - Arguments to create a ELIGIBILITY_CRITERIA.
     * @example
     * // Create one ELIGIBILITY_CRITERIA
     * const ELIGIBILITY_CRITERIA = await prisma.eLIGIBILITY_CRITERIA.create({
     *   data: {
     *     // ... data to create a ELIGIBILITY_CRITERIA
     *   }
     * })
     * 
     */
    create<T extends ELIGIBILITY_CRITERIACreateArgs>(args: SelectSubset<T, ELIGIBILITY_CRITERIACreateArgs<ExtArgs>>): Prisma__ELIGIBILITY_CRITERIAClient<$Result.GetResult<Prisma.$ELIGIBILITY_CRITERIAPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ELIGIBILITY_CRITERIA.
     * @param {ELIGIBILITY_CRITERIACreateManyArgs} args - Arguments to create many ELIGIBILITY_CRITERIA.
     * @example
     * // Create many ELIGIBILITY_CRITERIA
     * const eLIGIBILITY_CRITERIA = await prisma.eLIGIBILITY_CRITERIA.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ELIGIBILITY_CRITERIACreateManyArgs>(args?: SelectSubset<T, ELIGIBILITY_CRITERIACreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ELIGIBILITY_CRITERIA.
     * @param {ELIGIBILITY_CRITERIADeleteArgs} args - Arguments to delete one ELIGIBILITY_CRITERIA.
     * @example
     * // Delete one ELIGIBILITY_CRITERIA
     * const ELIGIBILITY_CRITERIA = await prisma.eLIGIBILITY_CRITERIA.delete({
     *   where: {
     *     // ... filter to delete one ELIGIBILITY_CRITERIA
     *   }
     * })
     * 
     */
    delete<T extends ELIGIBILITY_CRITERIADeleteArgs>(args: SelectSubset<T, ELIGIBILITY_CRITERIADeleteArgs<ExtArgs>>): Prisma__ELIGIBILITY_CRITERIAClient<$Result.GetResult<Prisma.$ELIGIBILITY_CRITERIAPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ELIGIBILITY_CRITERIA.
     * @param {ELIGIBILITY_CRITERIAUpdateArgs} args - Arguments to update one ELIGIBILITY_CRITERIA.
     * @example
     * // Update one ELIGIBILITY_CRITERIA
     * const eLIGIBILITY_CRITERIA = await prisma.eLIGIBILITY_CRITERIA.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ELIGIBILITY_CRITERIAUpdateArgs>(args: SelectSubset<T, ELIGIBILITY_CRITERIAUpdateArgs<ExtArgs>>): Prisma__ELIGIBILITY_CRITERIAClient<$Result.GetResult<Prisma.$ELIGIBILITY_CRITERIAPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ELIGIBILITY_CRITERIA.
     * @param {ELIGIBILITY_CRITERIADeleteManyArgs} args - Arguments to filter ELIGIBILITY_CRITERIA to delete.
     * @example
     * // Delete a few ELIGIBILITY_CRITERIA
     * const { count } = await prisma.eLIGIBILITY_CRITERIA.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ELIGIBILITY_CRITERIADeleteManyArgs>(args?: SelectSubset<T, ELIGIBILITY_CRITERIADeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ELIGIBILITY_CRITERIA.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ELIGIBILITY_CRITERIAUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ELIGIBILITY_CRITERIA
     * const eLIGIBILITY_CRITERIA = await prisma.eLIGIBILITY_CRITERIA.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ELIGIBILITY_CRITERIAUpdateManyArgs>(args: SelectSubset<T, ELIGIBILITY_CRITERIAUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ELIGIBILITY_CRITERIA.
     * @param {ELIGIBILITY_CRITERIAUpsertArgs} args - Arguments to update or create a ELIGIBILITY_CRITERIA.
     * @example
     * // Update or create a ELIGIBILITY_CRITERIA
     * const eLIGIBILITY_CRITERIA = await prisma.eLIGIBILITY_CRITERIA.upsert({
     *   create: {
     *     // ... data to create a ELIGIBILITY_CRITERIA
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ELIGIBILITY_CRITERIA we want to update
     *   }
     * })
     */
    upsert<T extends ELIGIBILITY_CRITERIAUpsertArgs>(args: SelectSubset<T, ELIGIBILITY_CRITERIAUpsertArgs<ExtArgs>>): Prisma__ELIGIBILITY_CRITERIAClient<$Result.GetResult<Prisma.$ELIGIBILITY_CRITERIAPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ELIGIBILITY_CRITERIA.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ELIGIBILITY_CRITERIACountArgs} args - Arguments to filter ELIGIBILITY_CRITERIA to count.
     * @example
     * // Count the number of ELIGIBILITY_CRITERIA
     * const count = await prisma.eLIGIBILITY_CRITERIA.count({
     *   where: {
     *     // ... the filter for the ELIGIBILITY_CRITERIA we want to count
     *   }
     * })
    **/
    count<T extends ELIGIBILITY_CRITERIACountArgs>(
      args?: Subset<T, ELIGIBILITY_CRITERIACountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ELIGIBILITY_CRITERIACountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ELIGIBILITY_CRITERIA.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ELIGIBILITY_CRITERIAAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ELIGIBILITY_CRITERIAAggregateArgs>(args: Subset<T, ELIGIBILITY_CRITERIAAggregateArgs>): Prisma.PrismaPromise<GetELIGIBILITY_CRITERIAAggregateType<T>>

    /**
     * Group by ELIGIBILITY_CRITERIA.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ELIGIBILITY_CRITERIAGroupByArgs} args - Group by arguments.
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
      T extends ELIGIBILITY_CRITERIAGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ELIGIBILITY_CRITERIAGroupByArgs['orderBy'] }
        : { orderBy?: ELIGIBILITY_CRITERIAGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ELIGIBILITY_CRITERIAGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetELIGIBILITY_CRITERIAGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ELIGIBILITY_CRITERIA model
   */
  readonly fields: ELIGIBILITY_CRITERIAFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ELIGIBILITY_CRITERIA.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ELIGIBILITY_CRITERIAClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    SCHOLARSHIP<T extends ELIGIBILITY_CRITERIA$SCHOLARSHIPArgs<ExtArgs> = {}>(args?: Subset<T, ELIGIBILITY_CRITERIA$SCHOLARSHIPArgs<ExtArgs>>): Prisma__SCHOLARSHIPClient<$Result.GetResult<Prisma.$SCHOLARSHIPPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ELIGIBILITY_CRITERIA model
   */
  interface ELIGIBILITY_CRITERIAFieldRefs {
    readonly criteria_id: FieldRef<"ELIGIBILITY_CRITERIA", 'Int'>
    readonly scholarship_id: FieldRef<"ELIGIBILITY_CRITERIA", 'Int'>
    readonly criteria_name: FieldRef<"ELIGIBILITY_CRITERIA", 'String'>
    readonly criteria_description: FieldRef<"ELIGIBILITY_CRITERIA", 'String'>
    readonly min_value: FieldRef<"ELIGIBILITY_CRITERIA", 'Decimal'>
    readonly max_value: FieldRef<"ELIGIBILITY_CRITERIA", 'Decimal'>
    readonly weight: FieldRef<"ELIGIBILITY_CRITERIA", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ELIGIBILITY_CRITERIA findUnique
   */
  export type ELIGIBILITY_CRITERIAFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ELIGIBILITY_CRITERIA
     */
    select?: ELIGIBILITY_CRITERIASelect<ExtArgs> | null
    /**
     * Omit specific fields from the ELIGIBILITY_CRITERIA
     */
    omit?: ELIGIBILITY_CRITERIAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ELIGIBILITY_CRITERIAInclude<ExtArgs> | null
    /**
     * Filter, which ELIGIBILITY_CRITERIA to fetch.
     */
    where: ELIGIBILITY_CRITERIAWhereUniqueInput
  }

  /**
   * ELIGIBILITY_CRITERIA findUniqueOrThrow
   */
  export type ELIGIBILITY_CRITERIAFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ELIGIBILITY_CRITERIA
     */
    select?: ELIGIBILITY_CRITERIASelect<ExtArgs> | null
    /**
     * Omit specific fields from the ELIGIBILITY_CRITERIA
     */
    omit?: ELIGIBILITY_CRITERIAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ELIGIBILITY_CRITERIAInclude<ExtArgs> | null
    /**
     * Filter, which ELIGIBILITY_CRITERIA to fetch.
     */
    where: ELIGIBILITY_CRITERIAWhereUniqueInput
  }

  /**
   * ELIGIBILITY_CRITERIA findFirst
   */
  export type ELIGIBILITY_CRITERIAFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ELIGIBILITY_CRITERIA
     */
    select?: ELIGIBILITY_CRITERIASelect<ExtArgs> | null
    /**
     * Omit specific fields from the ELIGIBILITY_CRITERIA
     */
    omit?: ELIGIBILITY_CRITERIAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ELIGIBILITY_CRITERIAInclude<ExtArgs> | null
    /**
     * Filter, which ELIGIBILITY_CRITERIA to fetch.
     */
    where?: ELIGIBILITY_CRITERIAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ELIGIBILITY_CRITERIA to fetch.
     */
    orderBy?: ELIGIBILITY_CRITERIAOrderByWithRelationInput | ELIGIBILITY_CRITERIAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ELIGIBILITY_CRITERIA.
     */
    cursor?: ELIGIBILITY_CRITERIAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ELIGIBILITY_CRITERIA from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ELIGIBILITY_CRITERIA.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ELIGIBILITY_CRITERIA.
     */
    distinct?: ELIGIBILITY_CRITERIAScalarFieldEnum | ELIGIBILITY_CRITERIAScalarFieldEnum[]
  }

  /**
   * ELIGIBILITY_CRITERIA findFirstOrThrow
   */
  export type ELIGIBILITY_CRITERIAFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ELIGIBILITY_CRITERIA
     */
    select?: ELIGIBILITY_CRITERIASelect<ExtArgs> | null
    /**
     * Omit specific fields from the ELIGIBILITY_CRITERIA
     */
    omit?: ELIGIBILITY_CRITERIAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ELIGIBILITY_CRITERIAInclude<ExtArgs> | null
    /**
     * Filter, which ELIGIBILITY_CRITERIA to fetch.
     */
    where?: ELIGIBILITY_CRITERIAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ELIGIBILITY_CRITERIA to fetch.
     */
    orderBy?: ELIGIBILITY_CRITERIAOrderByWithRelationInput | ELIGIBILITY_CRITERIAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ELIGIBILITY_CRITERIA.
     */
    cursor?: ELIGIBILITY_CRITERIAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ELIGIBILITY_CRITERIA from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ELIGIBILITY_CRITERIA.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ELIGIBILITY_CRITERIA.
     */
    distinct?: ELIGIBILITY_CRITERIAScalarFieldEnum | ELIGIBILITY_CRITERIAScalarFieldEnum[]
  }

  /**
   * ELIGIBILITY_CRITERIA findMany
   */
  export type ELIGIBILITY_CRITERIAFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ELIGIBILITY_CRITERIA
     */
    select?: ELIGIBILITY_CRITERIASelect<ExtArgs> | null
    /**
     * Omit specific fields from the ELIGIBILITY_CRITERIA
     */
    omit?: ELIGIBILITY_CRITERIAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ELIGIBILITY_CRITERIAInclude<ExtArgs> | null
    /**
     * Filter, which ELIGIBILITY_CRITERIA to fetch.
     */
    where?: ELIGIBILITY_CRITERIAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ELIGIBILITY_CRITERIA to fetch.
     */
    orderBy?: ELIGIBILITY_CRITERIAOrderByWithRelationInput | ELIGIBILITY_CRITERIAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ELIGIBILITY_CRITERIA.
     */
    cursor?: ELIGIBILITY_CRITERIAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ELIGIBILITY_CRITERIA from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ELIGIBILITY_CRITERIA.
     */
    skip?: number
    distinct?: ELIGIBILITY_CRITERIAScalarFieldEnum | ELIGIBILITY_CRITERIAScalarFieldEnum[]
  }

  /**
   * ELIGIBILITY_CRITERIA create
   */
  export type ELIGIBILITY_CRITERIACreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ELIGIBILITY_CRITERIA
     */
    select?: ELIGIBILITY_CRITERIASelect<ExtArgs> | null
    /**
     * Omit specific fields from the ELIGIBILITY_CRITERIA
     */
    omit?: ELIGIBILITY_CRITERIAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ELIGIBILITY_CRITERIAInclude<ExtArgs> | null
    /**
     * The data needed to create a ELIGIBILITY_CRITERIA.
     */
    data?: XOR<ELIGIBILITY_CRITERIACreateInput, ELIGIBILITY_CRITERIAUncheckedCreateInput>
  }

  /**
   * ELIGIBILITY_CRITERIA createMany
   */
  export type ELIGIBILITY_CRITERIACreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ELIGIBILITY_CRITERIA.
     */
    data: ELIGIBILITY_CRITERIACreateManyInput | ELIGIBILITY_CRITERIACreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ELIGIBILITY_CRITERIA update
   */
  export type ELIGIBILITY_CRITERIAUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ELIGIBILITY_CRITERIA
     */
    select?: ELIGIBILITY_CRITERIASelect<ExtArgs> | null
    /**
     * Omit specific fields from the ELIGIBILITY_CRITERIA
     */
    omit?: ELIGIBILITY_CRITERIAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ELIGIBILITY_CRITERIAInclude<ExtArgs> | null
    /**
     * The data needed to update a ELIGIBILITY_CRITERIA.
     */
    data: XOR<ELIGIBILITY_CRITERIAUpdateInput, ELIGIBILITY_CRITERIAUncheckedUpdateInput>
    /**
     * Choose, which ELIGIBILITY_CRITERIA to update.
     */
    where: ELIGIBILITY_CRITERIAWhereUniqueInput
  }

  /**
   * ELIGIBILITY_CRITERIA updateMany
   */
  export type ELIGIBILITY_CRITERIAUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ELIGIBILITY_CRITERIA.
     */
    data: XOR<ELIGIBILITY_CRITERIAUpdateManyMutationInput, ELIGIBILITY_CRITERIAUncheckedUpdateManyInput>
    /**
     * Filter which ELIGIBILITY_CRITERIA to update
     */
    where?: ELIGIBILITY_CRITERIAWhereInput
    /**
     * Limit how many ELIGIBILITY_CRITERIA to update.
     */
    limit?: number
  }

  /**
   * ELIGIBILITY_CRITERIA upsert
   */
  export type ELIGIBILITY_CRITERIAUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ELIGIBILITY_CRITERIA
     */
    select?: ELIGIBILITY_CRITERIASelect<ExtArgs> | null
    /**
     * Omit specific fields from the ELIGIBILITY_CRITERIA
     */
    omit?: ELIGIBILITY_CRITERIAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ELIGIBILITY_CRITERIAInclude<ExtArgs> | null
    /**
     * The filter to search for the ELIGIBILITY_CRITERIA to update in case it exists.
     */
    where: ELIGIBILITY_CRITERIAWhereUniqueInput
    /**
     * In case the ELIGIBILITY_CRITERIA found by the `where` argument doesn't exist, create a new ELIGIBILITY_CRITERIA with this data.
     */
    create: XOR<ELIGIBILITY_CRITERIACreateInput, ELIGIBILITY_CRITERIAUncheckedCreateInput>
    /**
     * In case the ELIGIBILITY_CRITERIA was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ELIGIBILITY_CRITERIAUpdateInput, ELIGIBILITY_CRITERIAUncheckedUpdateInput>
  }

  /**
   * ELIGIBILITY_CRITERIA delete
   */
  export type ELIGIBILITY_CRITERIADeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ELIGIBILITY_CRITERIA
     */
    select?: ELIGIBILITY_CRITERIASelect<ExtArgs> | null
    /**
     * Omit specific fields from the ELIGIBILITY_CRITERIA
     */
    omit?: ELIGIBILITY_CRITERIAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ELIGIBILITY_CRITERIAInclude<ExtArgs> | null
    /**
     * Filter which ELIGIBILITY_CRITERIA to delete.
     */
    where: ELIGIBILITY_CRITERIAWhereUniqueInput
  }

  /**
   * ELIGIBILITY_CRITERIA deleteMany
   */
  export type ELIGIBILITY_CRITERIADeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ELIGIBILITY_CRITERIA to delete
     */
    where?: ELIGIBILITY_CRITERIAWhereInput
    /**
     * Limit how many ELIGIBILITY_CRITERIA to delete.
     */
    limit?: number
  }

  /**
   * ELIGIBILITY_CRITERIA.SCHOLARSHIP
   */
  export type ELIGIBILITY_CRITERIA$SCHOLARSHIPArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SCHOLARSHIP
     */
    select?: SCHOLARSHIPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SCHOLARSHIP
     */
    omit?: SCHOLARSHIPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SCHOLARSHIPInclude<ExtArgs> | null
    where?: SCHOLARSHIPWhereInput
  }

  /**
   * ELIGIBILITY_CRITERIA without action
   */
  export type ELIGIBILITY_CRITERIADefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ELIGIBILITY_CRITERIA
     */
    select?: ELIGIBILITY_CRITERIASelect<ExtArgs> | null
    /**
     * Omit specific fields from the ELIGIBILITY_CRITERIA
     */
    omit?: ELIGIBILITY_CRITERIAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ELIGIBILITY_CRITERIAInclude<ExtArgs> | null
  }


  /**
   * Model FAMILY_MEMBER
   */

  export type AggregateFAMILY_MEMBER = {
    _count: FAMILY_MEMBERCountAggregateOutputType | null
    _avg: FAMILY_MEMBERAvgAggregateOutputType | null
    _sum: FAMILY_MEMBERSumAggregateOutputType | null
    _min: FAMILY_MEMBERMinAggregateOutputType | null
    _max: FAMILY_MEMBERMaxAggregateOutputType | null
  }

  export type FAMILY_MEMBERAvgAggregateOutputType = {
    member_id: number | null
    student_id: number | null
    age: number | null
    annual_income: Decimal | null
  }

  export type FAMILY_MEMBERSumAggregateOutputType = {
    member_id: number | null
    student_id: number | null
    age: number | null
    annual_income: Decimal | null
  }

  export type FAMILY_MEMBERMinAggregateOutputType = {
    member_id: number | null
    student_id: number | null
    full_name: string | null
    age: number | null
    relationship: string | null
    designation: string | null
    annual_income: Decimal | null
    workplace: string | null
    phone_number: string | null
  }

  export type FAMILY_MEMBERMaxAggregateOutputType = {
    member_id: number | null
    student_id: number | null
    full_name: string | null
    age: number | null
    relationship: string | null
    designation: string | null
    annual_income: Decimal | null
    workplace: string | null
    phone_number: string | null
  }

  export type FAMILY_MEMBERCountAggregateOutputType = {
    member_id: number
    student_id: number
    full_name: number
    age: number
    relationship: number
    designation: number
    annual_income: number
    workplace: number
    phone_number: number
    _all: number
  }


  export type FAMILY_MEMBERAvgAggregateInputType = {
    member_id?: true
    student_id?: true
    age?: true
    annual_income?: true
  }

  export type FAMILY_MEMBERSumAggregateInputType = {
    member_id?: true
    student_id?: true
    age?: true
    annual_income?: true
  }

  export type FAMILY_MEMBERMinAggregateInputType = {
    member_id?: true
    student_id?: true
    full_name?: true
    age?: true
    relationship?: true
    designation?: true
    annual_income?: true
    workplace?: true
    phone_number?: true
  }

  export type FAMILY_MEMBERMaxAggregateInputType = {
    member_id?: true
    student_id?: true
    full_name?: true
    age?: true
    relationship?: true
    designation?: true
    annual_income?: true
    workplace?: true
    phone_number?: true
  }

  export type FAMILY_MEMBERCountAggregateInputType = {
    member_id?: true
    student_id?: true
    full_name?: true
    age?: true
    relationship?: true
    designation?: true
    annual_income?: true
    workplace?: true
    phone_number?: true
    _all?: true
  }

  export type FAMILY_MEMBERAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FAMILY_MEMBER to aggregate.
     */
    where?: FAMILY_MEMBERWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FAMILY_MEMBERS to fetch.
     */
    orderBy?: FAMILY_MEMBEROrderByWithRelationInput | FAMILY_MEMBEROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FAMILY_MEMBERWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FAMILY_MEMBERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FAMILY_MEMBERS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FAMILY_MEMBERS
    **/
    _count?: true | FAMILY_MEMBERCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FAMILY_MEMBERAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FAMILY_MEMBERSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FAMILY_MEMBERMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FAMILY_MEMBERMaxAggregateInputType
  }

  export type GetFAMILY_MEMBERAggregateType<T extends FAMILY_MEMBERAggregateArgs> = {
        [P in keyof T & keyof AggregateFAMILY_MEMBER]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFAMILY_MEMBER[P]>
      : GetScalarType<T[P], AggregateFAMILY_MEMBER[P]>
  }




  export type FAMILY_MEMBERGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FAMILY_MEMBERWhereInput
    orderBy?: FAMILY_MEMBEROrderByWithAggregationInput | FAMILY_MEMBEROrderByWithAggregationInput[]
    by: FAMILY_MEMBERScalarFieldEnum[] | FAMILY_MEMBERScalarFieldEnum
    having?: FAMILY_MEMBERScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FAMILY_MEMBERCountAggregateInputType | true
    _avg?: FAMILY_MEMBERAvgAggregateInputType
    _sum?: FAMILY_MEMBERSumAggregateInputType
    _min?: FAMILY_MEMBERMinAggregateInputType
    _max?: FAMILY_MEMBERMaxAggregateInputType
  }

  export type FAMILY_MEMBERGroupByOutputType = {
    member_id: number
    student_id: number | null
    full_name: string | null
    age: number | null
    relationship: string | null
    designation: string | null
    annual_income: Decimal | null
    workplace: string | null
    phone_number: string | null
    _count: FAMILY_MEMBERCountAggregateOutputType | null
    _avg: FAMILY_MEMBERAvgAggregateOutputType | null
    _sum: FAMILY_MEMBERSumAggregateOutputType | null
    _min: FAMILY_MEMBERMinAggregateOutputType | null
    _max: FAMILY_MEMBERMaxAggregateOutputType | null
  }

  type GetFAMILY_MEMBERGroupByPayload<T extends FAMILY_MEMBERGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FAMILY_MEMBERGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FAMILY_MEMBERGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FAMILY_MEMBERGroupByOutputType[P]>
            : GetScalarType<T[P], FAMILY_MEMBERGroupByOutputType[P]>
        }
      >
    >


  export type FAMILY_MEMBERSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    member_id?: boolean
    student_id?: boolean
    full_name?: boolean
    age?: boolean
    relationship?: boolean
    designation?: boolean
    annual_income?: boolean
    workplace?: boolean
    phone_number?: boolean
    STUDENT?: boolean | FAMILY_MEMBER$STUDENTArgs<ExtArgs>
    SIBLING_EDUCATION?: boolean | FAMILY_MEMBER$SIBLING_EDUCATIONArgs<ExtArgs>
    _count?: boolean | FAMILY_MEMBERCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fAMILY_MEMBER"]>



  export type FAMILY_MEMBERSelectScalar = {
    member_id?: boolean
    student_id?: boolean
    full_name?: boolean
    age?: boolean
    relationship?: boolean
    designation?: boolean
    annual_income?: boolean
    workplace?: boolean
    phone_number?: boolean
  }

  export type FAMILY_MEMBEROmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"member_id" | "student_id" | "full_name" | "age" | "relationship" | "designation" | "annual_income" | "workplace" | "phone_number", ExtArgs["result"]["fAMILY_MEMBER"]>
  export type FAMILY_MEMBERInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    STUDENT?: boolean | FAMILY_MEMBER$STUDENTArgs<ExtArgs>
    SIBLING_EDUCATION?: boolean | FAMILY_MEMBER$SIBLING_EDUCATIONArgs<ExtArgs>
    _count?: boolean | FAMILY_MEMBERCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $FAMILY_MEMBERPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FAMILY_MEMBER"
    objects: {
      STUDENT: Prisma.$STUDENTPayload<ExtArgs> | null
      SIBLING_EDUCATION: Prisma.$SIBLING_EDUCATIONPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      member_id: number
      student_id: number | null
      full_name: string | null
      age: number | null
      relationship: string | null
      designation: string | null
      annual_income: Prisma.Decimal | null
      workplace: string | null
      phone_number: string | null
    }, ExtArgs["result"]["fAMILY_MEMBER"]>
    composites: {}
  }

  type FAMILY_MEMBERGetPayload<S extends boolean | null | undefined | FAMILY_MEMBERDefaultArgs> = $Result.GetResult<Prisma.$FAMILY_MEMBERPayload, S>

  type FAMILY_MEMBERCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FAMILY_MEMBERFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FAMILY_MEMBERCountAggregateInputType | true
    }

  export interface FAMILY_MEMBERDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FAMILY_MEMBER'], meta: { name: 'FAMILY_MEMBER' } }
    /**
     * Find zero or one FAMILY_MEMBER that matches the filter.
     * @param {FAMILY_MEMBERFindUniqueArgs} args - Arguments to find a FAMILY_MEMBER
     * @example
     * // Get one FAMILY_MEMBER
     * const fAMILY_MEMBER = await prisma.fAMILY_MEMBER.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FAMILY_MEMBERFindUniqueArgs>(args: SelectSubset<T, FAMILY_MEMBERFindUniqueArgs<ExtArgs>>): Prisma__FAMILY_MEMBERClient<$Result.GetResult<Prisma.$FAMILY_MEMBERPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FAMILY_MEMBER that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FAMILY_MEMBERFindUniqueOrThrowArgs} args - Arguments to find a FAMILY_MEMBER
     * @example
     * // Get one FAMILY_MEMBER
     * const fAMILY_MEMBER = await prisma.fAMILY_MEMBER.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FAMILY_MEMBERFindUniqueOrThrowArgs>(args: SelectSubset<T, FAMILY_MEMBERFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FAMILY_MEMBERClient<$Result.GetResult<Prisma.$FAMILY_MEMBERPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FAMILY_MEMBER that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAMILY_MEMBERFindFirstArgs} args - Arguments to find a FAMILY_MEMBER
     * @example
     * // Get one FAMILY_MEMBER
     * const fAMILY_MEMBER = await prisma.fAMILY_MEMBER.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FAMILY_MEMBERFindFirstArgs>(args?: SelectSubset<T, FAMILY_MEMBERFindFirstArgs<ExtArgs>>): Prisma__FAMILY_MEMBERClient<$Result.GetResult<Prisma.$FAMILY_MEMBERPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FAMILY_MEMBER that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAMILY_MEMBERFindFirstOrThrowArgs} args - Arguments to find a FAMILY_MEMBER
     * @example
     * // Get one FAMILY_MEMBER
     * const fAMILY_MEMBER = await prisma.fAMILY_MEMBER.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FAMILY_MEMBERFindFirstOrThrowArgs>(args?: SelectSubset<T, FAMILY_MEMBERFindFirstOrThrowArgs<ExtArgs>>): Prisma__FAMILY_MEMBERClient<$Result.GetResult<Prisma.$FAMILY_MEMBERPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FAMILY_MEMBERS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAMILY_MEMBERFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FAMILY_MEMBERS
     * const fAMILY_MEMBERS = await prisma.fAMILY_MEMBER.findMany()
     * 
     * // Get first 10 FAMILY_MEMBERS
     * const fAMILY_MEMBERS = await prisma.fAMILY_MEMBER.findMany({ take: 10 })
     * 
     * // Only select the `member_id`
     * const fAMILY_MEMBERWithMember_idOnly = await prisma.fAMILY_MEMBER.findMany({ select: { member_id: true } })
     * 
     */
    findMany<T extends FAMILY_MEMBERFindManyArgs>(args?: SelectSubset<T, FAMILY_MEMBERFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FAMILY_MEMBERPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FAMILY_MEMBER.
     * @param {FAMILY_MEMBERCreateArgs} args - Arguments to create a FAMILY_MEMBER.
     * @example
     * // Create one FAMILY_MEMBER
     * const FAMILY_MEMBER = await prisma.fAMILY_MEMBER.create({
     *   data: {
     *     // ... data to create a FAMILY_MEMBER
     *   }
     * })
     * 
     */
    create<T extends FAMILY_MEMBERCreateArgs>(args: SelectSubset<T, FAMILY_MEMBERCreateArgs<ExtArgs>>): Prisma__FAMILY_MEMBERClient<$Result.GetResult<Prisma.$FAMILY_MEMBERPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FAMILY_MEMBERS.
     * @param {FAMILY_MEMBERCreateManyArgs} args - Arguments to create many FAMILY_MEMBERS.
     * @example
     * // Create many FAMILY_MEMBERS
     * const fAMILY_MEMBER = await prisma.fAMILY_MEMBER.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FAMILY_MEMBERCreateManyArgs>(args?: SelectSubset<T, FAMILY_MEMBERCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FAMILY_MEMBER.
     * @param {FAMILY_MEMBERDeleteArgs} args - Arguments to delete one FAMILY_MEMBER.
     * @example
     * // Delete one FAMILY_MEMBER
     * const FAMILY_MEMBER = await prisma.fAMILY_MEMBER.delete({
     *   where: {
     *     // ... filter to delete one FAMILY_MEMBER
     *   }
     * })
     * 
     */
    delete<T extends FAMILY_MEMBERDeleteArgs>(args: SelectSubset<T, FAMILY_MEMBERDeleteArgs<ExtArgs>>): Prisma__FAMILY_MEMBERClient<$Result.GetResult<Prisma.$FAMILY_MEMBERPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FAMILY_MEMBER.
     * @param {FAMILY_MEMBERUpdateArgs} args - Arguments to update one FAMILY_MEMBER.
     * @example
     * // Update one FAMILY_MEMBER
     * const fAMILY_MEMBER = await prisma.fAMILY_MEMBER.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FAMILY_MEMBERUpdateArgs>(args: SelectSubset<T, FAMILY_MEMBERUpdateArgs<ExtArgs>>): Prisma__FAMILY_MEMBERClient<$Result.GetResult<Prisma.$FAMILY_MEMBERPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FAMILY_MEMBERS.
     * @param {FAMILY_MEMBERDeleteManyArgs} args - Arguments to filter FAMILY_MEMBERS to delete.
     * @example
     * // Delete a few FAMILY_MEMBERS
     * const { count } = await prisma.fAMILY_MEMBER.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FAMILY_MEMBERDeleteManyArgs>(args?: SelectSubset<T, FAMILY_MEMBERDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FAMILY_MEMBERS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAMILY_MEMBERUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FAMILY_MEMBERS
     * const fAMILY_MEMBER = await prisma.fAMILY_MEMBER.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FAMILY_MEMBERUpdateManyArgs>(args: SelectSubset<T, FAMILY_MEMBERUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FAMILY_MEMBER.
     * @param {FAMILY_MEMBERUpsertArgs} args - Arguments to update or create a FAMILY_MEMBER.
     * @example
     * // Update or create a FAMILY_MEMBER
     * const fAMILY_MEMBER = await prisma.fAMILY_MEMBER.upsert({
     *   create: {
     *     // ... data to create a FAMILY_MEMBER
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FAMILY_MEMBER we want to update
     *   }
     * })
     */
    upsert<T extends FAMILY_MEMBERUpsertArgs>(args: SelectSubset<T, FAMILY_MEMBERUpsertArgs<ExtArgs>>): Prisma__FAMILY_MEMBERClient<$Result.GetResult<Prisma.$FAMILY_MEMBERPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FAMILY_MEMBERS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAMILY_MEMBERCountArgs} args - Arguments to filter FAMILY_MEMBERS to count.
     * @example
     * // Count the number of FAMILY_MEMBERS
     * const count = await prisma.fAMILY_MEMBER.count({
     *   where: {
     *     // ... the filter for the FAMILY_MEMBERS we want to count
     *   }
     * })
    **/
    count<T extends FAMILY_MEMBERCountArgs>(
      args?: Subset<T, FAMILY_MEMBERCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FAMILY_MEMBERCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FAMILY_MEMBER.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAMILY_MEMBERAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FAMILY_MEMBERAggregateArgs>(args: Subset<T, FAMILY_MEMBERAggregateArgs>): Prisma.PrismaPromise<GetFAMILY_MEMBERAggregateType<T>>

    /**
     * Group by FAMILY_MEMBER.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAMILY_MEMBERGroupByArgs} args - Group by arguments.
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
      T extends FAMILY_MEMBERGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FAMILY_MEMBERGroupByArgs['orderBy'] }
        : { orderBy?: FAMILY_MEMBERGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FAMILY_MEMBERGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFAMILY_MEMBERGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FAMILY_MEMBER model
   */
  readonly fields: FAMILY_MEMBERFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FAMILY_MEMBER.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FAMILY_MEMBERClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    STUDENT<T extends FAMILY_MEMBER$STUDENTArgs<ExtArgs> = {}>(args?: Subset<T, FAMILY_MEMBER$STUDENTArgs<ExtArgs>>): Prisma__STUDENTClient<$Result.GetResult<Prisma.$STUDENTPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    SIBLING_EDUCATION<T extends FAMILY_MEMBER$SIBLING_EDUCATIONArgs<ExtArgs> = {}>(args?: Subset<T, FAMILY_MEMBER$SIBLING_EDUCATIONArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SIBLING_EDUCATIONPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the FAMILY_MEMBER model
   */
  interface FAMILY_MEMBERFieldRefs {
    readonly member_id: FieldRef<"FAMILY_MEMBER", 'Int'>
    readonly student_id: FieldRef<"FAMILY_MEMBER", 'Int'>
    readonly full_name: FieldRef<"FAMILY_MEMBER", 'String'>
    readonly age: FieldRef<"FAMILY_MEMBER", 'Int'>
    readonly relationship: FieldRef<"FAMILY_MEMBER", 'String'>
    readonly designation: FieldRef<"FAMILY_MEMBER", 'String'>
    readonly annual_income: FieldRef<"FAMILY_MEMBER", 'Decimal'>
    readonly workplace: FieldRef<"FAMILY_MEMBER", 'String'>
    readonly phone_number: FieldRef<"FAMILY_MEMBER", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FAMILY_MEMBER findUnique
   */
  export type FAMILY_MEMBERFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAMILY_MEMBER
     */
    select?: FAMILY_MEMBERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAMILY_MEMBER
     */
    omit?: FAMILY_MEMBEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FAMILY_MEMBERInclude<ExtArgs> | null
    /**
     * Filter, which FAMILY_MEMBER to fetch.
     */
    where: FAMILY_MEMBERWhereUniqueInput
  }

  /**
   * FAMILY_MEMBER findUniqueOrThrow
   */
  export type FAMILY_MEMBERFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAMILY_MEMBER
     */
    select?: FAMILY_MEMBERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAMILY_MEMBER
     */
    omit?: FAMILY_MEMBEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FAMILY_MEMBERInclude<ExtArgs> | null
    /**
     * Filter, which FAMILY_MEMBER to fetch.
     */
    where: FAMILY_MEMBERWhereUniqueInput
  }

  /**
   * FAMILY_MEMBER findFirst
   */
  export type FAMILY_MEMBERFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAMILY_MEMBER
     */
    select?: FAMILY_MEMBERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAMILY_MEMBER
     */
    omit?: FAMILY_MEMBEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FAMILY_MEMBERInclude<ExtArgs> | null
    /**
     * Filter, which FAMILY_MEMBER to fetch.
     */
    where?: FAMILY_MEMBERWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FAMILY_MEMBERS to fetch.
     */
    orderBy?: FAMILY_MEMBEROrderByWithRelationInput | FAMILY_MEMBEROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FAMILY_MEMBERS.
     */
    cursor?: FAMILY_MEMBERWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FAMILY_MEMBERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FAMILY_MEMBERS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FAMILY_MEMBERS.
     */
    distinct?: FAMILY_MEMBERScalarFieldEnum | FAMILY_MEMBERScalarFieldEnum[]
  }

  /**
   * FAMILY_MEMBER findFirstOrThrow
   */
  export type FAMILY_MEMBERFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAMILY_MEMBER
     */
    select?: FAMILY_MEMBERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAMILY_MEMBER
     */
    omit?: FAMILY_MEMBEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FAMILY_MEMBERInclude<ExtArgs> | null
    /**
     * Filter, which FAMILY_MEMBER to fetch.
     */
    where?: FAMILY_MEMBERWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FAMILY_MEMBERS to fetch.
     */
    orderBy?: FAMILY_MEMBEROrderByWithRelationInput | FAMILY_MEMBEROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FAMILY_MEMBERS.
     */
    cursor?: FAMILY_MEMBERWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FAMILY_MEMBERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FAMILY_MEMBERS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FAMILY_MEMBERS.
     */
    distinct?: FAMILY_MEMBERScalarFieldEnum | FAMILY_MEMBERScalarFieldEnum[]
  }

  /**
   * FAMILY_MEMBER findMany
   */
  export type FAMILY_MEMBERFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAMILY_MEMBER
     */
    select?: FAMILY_MEMBERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAMILY_MEMBER
     */
    omit?: FAMILY_MEMBEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FAMILY_MEMBERInclude<ExtArgs> | null
    /**
     * Filter, which FAMILY_MEMBERS to fetch.
     */
    where?: FAMILY_MEMBERWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FAMILY_MEMBERS to fetch.
     */
    orderBy?: FAMILY_MEMBEROrderByWithRelationInput | FAMILY_MEMBEROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FAMILY_MEMBERS.
     */
    cursor?: FAMILY_MEMBERWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FAMILY_MEMBERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FAMILY_MEMBERS.
     */
    skip?: number
    distinct?: FAMILY_MEMBERScalarFieldEnum | FAMILY_MEMBERScalarFieldEnum[]
  }

  /**
   * FAMILY_MEMBER create
   */
  export type FAMILY_MEMBERCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAMILY_MEMBER
     */
    select?: FAMILY_MEMBERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAMILY_MEMBER
     */
    omit?: FAMILY_MEMBEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FAMILY_MEMBERInclude<ExtArgs> | null
    /**
     * The data needed to create a FAMILY_MEMBER.
     */
    data?: XOR<FAMILY_MEMBERCreateInput, FAMILY_MEMBERUncheckedCreateInput>
  }

  /**
   * FAMILY_MEMBER createMany
   */
  export type FAMILY_MEMBERCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FAMILY_MEMBERS.
     */
    data: FAMILY_MEMBERCreateManyInput | FAMILY_MEMBERCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FAMILY_MEMBER update
   */
  export type FAMILY_MEMBERUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAMILY_MEMBER
     */
    select?: FAMILY_MEMBERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAMILY_MEMBER
     */
    omit?: FAMILY_MEMBEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FAMILY_MEMBERInclude<ExtArgs> | null
    /**
     * The data needed to update a FAMILY_MEMBER.
     */
    data: XOR<FAMILY_MEMBERUpdateInput, FAMILY_MEMBERUncheckedUpdateInput>
    /**
     * Choose, which FAMILY_MEMBER to update.
     */
    where: FAMILY_MEMBERWhereUniqueInput
  }

  /**
   * FAMILY_MEMBER updateMany
   */
  export type FAMILY_MEMBERUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FAMILY_MEMBERS.
     */
    data: XOR<FAMILY_MEMBERUpdateManyMutationInput, FAMILY_MEMBERUncheckedUpdateManyInput>
    /**
     * Filter which FAMILY_MEMBERS to update
     */
    where?: FAMILY_MEMBERWhereInput
    /**
     * Limit how many FAMILY_MEMBERS to update.
     */
    limit?: number
  }

  /**
   * FAMILY_MEMBER upsert
   */
  export type FAMILY_MEMBERUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAMILY_MEMBER
     */
    select?: FAMILY_MEMBERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAMILY_MEMBER
     */
    omit?: FAMILY_MEMBEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FAMILY_MEMBERInclude<ExtArgs> | null
    /**
     * The filter to search for the FAMILY_MEMBER to update in case it exists.
     */
    where: FAMILY_MEMBERWhereUniqueInput
    /**
     * In case the FAMILY_MEMBER found by the `where` argument doesn't exist, create a new FAMILY_MEMBER with this data.
     */
    create: XOR<FAMILY_MEMBERCreateInput, FAMILY_MEMBERUncheckedCreateInput>
    /**
     * In case the FAMILY_MEMBER was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FAMILY_MEMBERUpdateInput, FAMILY_MEMBERUncheckedUpdateInput>
  }

  /**
   * FAMILY_MEMBER delete
   */
  export type FAMILY_MEMBERDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAMILY_MEMBER
     */
    select?: FAMILY_MEMBERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAMILY_MEMBER
     */
    omit?: FAMILY_MEMBEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FAMILY_MEMBERInclude<ExtArgs> | null
    /**
     * Filter which FAMILY_MEMBER to delete.
     */
    where: FAMILY_MEMBERWhereUniqueInput
  }

  /**
   * FAMILY_MEMBER deleteMany
   */
  export type FAMILY_MEMBERDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FAMILY_MEMBERS to delete
     */
    where?: FAMILY_MEMBERWhereInput
    /**
     * Limit how many FAMILY_MEMBERS to delete.
     */
    limit?: number
  }

  /**
   * FAMILY_MEMBER.STUDENT
   */
  export type FAMILY_MEMBER$STUDENTArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the STUDENT
     */
    select?: STUDENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the STUDENT
     */
    omit?: STUDENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: STUDENTInclude<ExtArgs> | null
    where?: STUDENTWhereInput
  }

  /**
   * FAMILY_MEMBER.SIBLING_EDUCATION
   */
  export type FAMILY_MEMBER$SIBLING_EDUCATIONArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SIBLING_EDUCATION
     */
    select?: SIBLING_EDUCATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SIBLING_EDUCATION
     */
    omit?: SIBLING_EDUCATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SIBLING_EDUCATIONInclude<ExtArgs> | null
    where?: SIBLING_EDUCATIONWhereInput
    orderBy?: SIBLING_EDUCATIONOrderByWithRelationInput | SIBLING_EDUCATIONOrderByWithRelationInput[]
    cursor?: SIBLING_EDUCATIONWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SIBLING_EDUCATIONScalarFieldEnum | SIBLING_EDUCATIONScalarFieldEnum[]
  }

  /**
   * FAMILY_MEMBER without action
   */
  export type FAMILY_MEMBERDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAMILY_MEMBER
     */
    select?: FAMILY_MEMBERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAMILY_MEMBER
     */
    omit?: FAMILY_MEMBEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FAMILY_MEMBERInclude<ExtArgs> | null
  }


  /**
   * Model NOTIFICATION
   */

  export type AggregateNOTIFICATION = {
    _count: NOTIFICATIONCountAggregateOutputType | null
    _avg: NOTIFICATIONAvgAggregateOutputType | null
    _sum: NOTIFICATIONSumAggregateOutputType | null
    _min: NOTIFICATIONMinAggregateOutputType | null
    _max: NOTIFICATIONMaxAggregateOutputType | null
  }

  export type NOTIFICATIONAvgAggregateOutputType = {
    notification_id: number | null
    user_id: number | null
  }

  export type NOTIFICATIONSumAggregateOutputType = {
    notification_id: number | null
    user_id: number | null
  }

  export type NOTIFICATIONMinAggregateOutputType = {
    notification_id: number | null
    user_id: number | null
    message: string | null
    created_at: Date | null
    is_read: boolean | null
  }

  export type NOTIFICATIONMaxAggregateOutputType = {
    notification_id: number | null
    user_id: number | null
    message: string | null
    created_at: Date | null
    is_read: boolean | null
  }

  export type NOTIFICATIONCountAggregateOutputType = {
    notification_id: number
    user_id: number
    message: number
    created_at: number
    is_read: number
    _all: number
  }


  export type NOTIFICATIONAvgAggregateInputType = {
    notification_id?: true
    user_id?: true
  }

  export type NOTIFICATIONSumAggregateInputType = {
    notification_id?: true
    user_id?: true
  }

  export type NOTIFICATIONMinAggregateInputType = {
    notification_id?: true
    user_id?: true
    message?: true
    created_at?: true
    is_read?: true
  }

  export type NOTIFICATIONMaxAggregateInputType = {
    notification_id?: true
    user_id?: true
    message?: true
    created_at?: true
    is_read?: true
  }

  export type NOTIFICATIONCountAggregateInputType = {
    notification_id?: true
    user_id?: true
    message?: true
    created_at?: true
    is_read?: true
    _all?: true
  }

  export type NOTIFICATIONAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NOTIFICATION to aggregate.
     */
    where?: NOTIFICATIONWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NOTIFICATIONS to fetch.
     */
    orderBy?: NOTIFICATIONOrderByWithRelationInput | NOTIFICATIONOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NOTIFICATIONWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NOTIFICATIONS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NOTIFICATIONS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NOTIFICATIONS
    **/
    _count?: true | NOTIFICATIONCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NOTIFICATIONAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NOTIFICATIONSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NOTIFICATIONMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NOTIFICATIONMaxAggregateInputType
  }

  export type GetNOTIFICATIONAggregateType<T extends NOTIFICATIONAggregateArgs> = {
        [P in keyof T & keyof AggregateNOTIFICATION]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNOTIFICATION[P]>
      : GetScalarType<T[P], AggregateNOTIFICATION[P]>
  }




  export type NOTIFICATIONGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NOTIFICATIONWhereInput
    orderBy?: NOTIFICATIONOrderByWithAggregationInput | NOTIFICATIONOrderByWithAggregationInput[]
    by: NOTIFICATIONScalarFieldEnum[] | NOTIFICATIONScalarFieldEnum
    having?: NOTIFICATIONScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NOTIFICATIONCountAggregateInputType | true
    _avg?: NOTIFICATIONAvgAggregateInputType
    _sum?: NOTIFICATIONSumAggregateInputType
    _min?: NOTIFICATIONMinAggregateInputType
    _max?: NOTIFICATIONMaxAggregateInputType
  }

  export type NOTIFICATIONGroupByOutputType = {
    notification_id: number
    user_id: number | null
    message: string | null
    created_at: Date | null
    is_read: boolean | null
    _count: NOTIFICATIONCountAggregateOutputType | null
    _avg: NOTIFICATIONAvgAggregateOutputType | null
    _sum: NOTIFICATIONSumAggregateOutputType | null
    _min: NOTIFICATIONMinAggregateOutputType | null
    _max: NOTIFICATIONMaxAggregateOutputType | null
  }

  type GetNOTIFICATIONGroupByPayload<T extends NOTIFICATIONGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NOTIFICATIONGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NOTIFICATIONGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NOTIFICATIONGroupByOutputType[P]>
            : GetScalarType<T[P], NOTIFICATIONGroupByOutputType[P]>
        }
      >
    >


  export type NOTIFICATIONSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    notification_id?: boolean
    user_id?: boolean
    message?: boolean
    created_at?: boolean
    is_read?: boolean
    USER?: boolean | NOTIFICATION$USERArgs<ExtArgs>
  }, ExtArgs["result"]["nOTIFICATION"]>



  export type NOTIFICATIONSelectScalar = {
    notification_id?: boolean
    user_id?: boolean
    message?: boolean
    created_at?: boolean
    is_read?: boolean
  }

  export type NOTIFICATIONOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"notification_id" | "user_id" | "message" | "created_at" | "is_read", ExtArgs["result"]["nOTIFICATION"]>
  export type NOTIFICATIONInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    USER?: boolean | NOTIFICATION$USERArgs<ExtArgs>
  }

  export type $NOTIFICATIONPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NOTIFICATION"
    objects: {
      USER: Prisma.$USERPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      notification_id: number
      user_id: number | null
      message: string | null
      created_at: Date | null
      is_read: boolean | null
    }, ExtArgs["result"]["nOTIFICATION"]>
    composites: {}
  }

  type NOTIFICATIONGetPayload<S extends boolean | null | undefined | NOTIFICATIONDefaultArgs> = $Result.GetResult<Prisma.$NOTIFICATIONPayload, S>

  type NOTIFICATIONCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NOTIFICATIONFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NOTIFICATIONCountAggregateInputType | true
    }

  export interface NOTIFICATIONDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NOTIFICATION'], meta: { name: 'NOTIFICATION' } }
    /**
     * Find zero or one NOTIFICATION that matches the filter.
     * @param {NOTIFICATIONFindUniqueArgs} args - Arguments to find a NOTIFICATION
     * @example
     * // Get one NOTIFICATION
     * const nOTIFICATION = await prisma.nOTIFICATION.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NOTIFICATIONFindUniqueArgs>(args: SelectSubset<T, NOTIFICATIONFindUniqueArgs<ExtArgs>>): Prisma__NOTIFICATIONClient<$Result.GetResult<Prisma.$NOTIFICATIONPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NOTIFICATION that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NOTIFICATIONFindUniqueOrThrowArgs} args - Arguments to find a NOTIFICATION
     * @example
     * // Get one NOTIFICATION
     * const nOTIFICATION = await prisma.nOTIFICATION.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NOTIFICATIONFindUniqueOrThrowArgs>(args: SelectSubset<T, NOTIFICATIONFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NOTIFICATIONClient<$Result.GetResult<Prisma.$NOTIFICATIONPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NOTIFICATION that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NOTIFICATIONFindFirstArgs} args - Arguments to find a NOTIFICATION
     * @example
     * // Get one NOTIFICATION
     * const nOTIFICATION = await prisma.nOTIFICATION.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NOTIFICATIONFindFirstArgs>(args?: SelectSubset<T, NOTIFICATIONFindFirstArgs<ExtArgs>>): Prisma__NOTIFICATIONClient<$Result.GetResult<Prisma.$NOTIFICATIONPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NOTIFICATION that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NOTIFICATIONFindFirstOrThrowArgs} args - Arguments to find a NOTIFICATION
     * @example
     * // Get one NOTIFICATION
     * const nOTIFICATION = await prisma.nOTIFICATION.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NOTIFICATIONFindFirstOrThrowArgs>(args?: SelectSubset<T, NOTIFICATIONFindFirstOrThrowArgs<ExtArgs>>): Prisma__NOTIFICATIONClient<$Result.GetResult<Prisma.$NOTIFICATIONPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NOTIFICATIONS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NOTIFICATIONFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NOTIFICATIONS
     * const nOTIFICATIONS = await prisma.nOTIFICATION.findMany()
     * 
     * // Get first 10 NOTIFICATIONS
     * const nOTIFICATIONS = await prisma.nOTIFICATION.findMany({ take: 10 })
     * 
     * // Only select the `notification_id`
     * const nOTIFICATIONWithNotification_idOnly = await prisma.nOTIFICATION.findMany({ select: { notification_id: true } })
     * 
     */
    findMany<T extends NOTIFICATIONFindManyArgs>(args?: SelectSubset<T, NOTIFICATIONFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NOTIFICATIONPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NOTIFICATION.
     * @param {NOTIFICATIONCreateArgs} args - Arguments to create a NOTIFICATION.
     * @example
     * // Create one NOTIFICATION
     * const NOTIFICATION = await prisma.nOTIFICATION.create({
     *   data: {
     *     // ... data to create a NOTIFICATION
     *   }
     * })
     * 
     */
    create<T extends NOTIFICATIONCreateArgs>(args: SelectSubset<T, NOTIFICATIONCreateArgs<ExtArgs>>): Prisma__NOTIFICATIONClient<$Result.GetResult<Prisma.$NOTIFICATIONPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NOTIFICATIONS.
     * @param {NOTIFICATIONCreateManyArgs} args - Arguments to create many NOTIFICATIONS.
     * @example
     * // Create many NOTIFICATIONS
     * const nOTIFICATION = await prisma.nOTIFICATION.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NOTIFICATIONCreateManyArgs>(args?: SelectSubset<T, NOTIFICATIONCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a NOTIFICATION.
     * @param {NOTIFICATIONDeleteArgs} args - Arguments to delete one NOTIFICATION.
     * @example
     * // Delete one NOTIFICATION
     * const NOTIFICATION = await prisma.nOTIFICATION.delete({
     *   where: {
     *     // ... filter to delete one NOTIFICATION
     *   }
     * })
     * 
     */
    delete<T extends NOTIFICATIONDeleteArgs>(args: SelectSubset<T, NOTIFICATIONDeleteArgs<ExtArgs>>): Prisma__NOTIFICATIONClient<$Result.GetResult<Prisma.$NOTIFICATIONPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NOTIFICATION.
     * @param {NOTIFICATIONUpdateArgs} args - Arguments to update one NOTIFICATION.
     * @example
     * // Update one NOTIFICATION
     * const nOTIFICATION = await prisma.nOTIFICATION.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NOTIFICATIONUpdateArgs>(args: SelectSubset<T, NOTIFICATIONUpdateArgs<ExtArgs>>): Prisma__NOTIFICATIONClient<$Result.GetResult<Prisma.$NOTIFICATIONPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NOTIFICATIONS.
     * @param {NOTIFICATIONDeleteManyArgs} args - Arguments to filter NOTIFICATIONS to delete.
     * @example
     * // Delete a few NOTIFICATIONS
     * const { count } = await prisma.nOTIFICATION.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NOTIFICATIONDeleteManyArgs>(args?: SelectSubset<T, NOTIFICATIONDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NOTIFICATIONS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NOTIFICATIONUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NOTIFICATIONS
     * const nOTIFICATION = await prisma.nOTIFICATION.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NOTIFICATIONUpdateManyArgs>(args: SelectSubset<T, NOTIFICATIONUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NOTIFICATION.
     * @param {NOTIFICATIONUpsertArgs} args - Arguments to update or create a NOTIFICATION.
     * @example
     * // Update or create a NOTIFICATION
     * const nOTIFICATION = await prisma.nOTIFICATION.upsert({
     *   create: {
     *     // ... data to create a NOTIFICATION
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NOTIFICATION we want to update
     *   }
     * })
     */
    upsert<T extends NOTIFICATIONUpsertArgs>(args: SelectSubset<T, NOTIFICATIONUpsertArgs<ExtArgs>>): Prisma__NOTIFICATIONClient<$Result.GetResult<Prisma.$NOTIFICATIONPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NOTIFICATIONS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NOTIFICATIONCountArgs} args - Arguments to filter NOTIFICATIONS to count.
     * @example
     * // Count the number of NOTIFICATIONS
     * const count = await prisma.nOTIFICATION.count({
     *   where: {
     *     // ... the filter for the NOTIFICATIONS we want to count
     *   }
     * })
    **/
    count<T extends NOTIFICATIONCountArgs>(
      args?: Subset<T, NOTIFICATIONCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NOTIFICATIONCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NOTIFICATION.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NOTIFICATIONAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NOTIFICATIONAggregateArgs>(args: Subset<T, NOTIFICATIONAggregateArgs>): Prisma.PrismaPromise<GetNOTIFICATIONAggregateType<T>>

    /**
     * Group by NOTIFICATION.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NOTIFICATIONGroupByArgs} args - Group by arguments.
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
      T extends NOTIFICATIONGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NOTIFICATIONGroupByArgs['orderBy'] }
        : { orderBy?: NOTIFICATIONGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NOTIFICATIONGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNOTIFICATIONGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NOTIFICATION model
   */
  readonly fields: NOTIFICATIONFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NOTIFICATION.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NOTIFICATIONClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    USER<T extends NOTIFICATION$USERArgs<ExtArgs> = {}>(args?: Subset<T, NOTIFICATION$USERArgs<ExtArgs>>): Prisma__USERClient<$Result.GetResult<Prisma.$USERPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the NOTIFICATION model
   */
  interface NOTIFICATIONFieldRefs {
    readonly notification_id: FieldRef<"NOTIFICATION", 'Int'>
    readonly user_id: FieldRef<"NOTIFICATION", 'Int'>
    readonly message: FieldRef<"NOTIFICATION", 'String'>
    readonly created_at: FieldRef<"NOTIFICATION", 'DateTime'>
    readonly is_read: FieldRef<"NOTIFICATION", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * NOTIFICATION findUnique
   */
  export type NOTIFICATIONFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NOTIFICATION
     */
    select?: NOTIFICATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NOTIFICATION
     */
    omit?: NOTIFICATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NOTIFICATIONInclude<ExtArgs> | null
    /**
     * Filter, which NOTIFICATION to fetch.
     */
    where: NOTIFICATIONWhereUniqueInput
  }

  /**
   * NOTIFICATION findUniqueOrThrow
   */
  export type NOTIFICATIONFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NOTIFICATION
     */
    select?: NOTIFICATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NOTIFICATION
     */
    omit?: NOTIFICATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NOTIFICATIONInclude<ExtArgs> | null
    /**
     * Filter, which NOTIFICATION to fetch.
     */
    where: NOTIFICATIONWhereUniqueInput
  }

  /**
   * NOTIFICATION findFirst
   */
  export type NOTIFICATIONFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NOTIFICATION
     */
    select?: NOTIFICATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NOTIFICATION
     */
    omit?: NOTIFICATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NOTIFICATIONInclude<ExtArgs> | null
    /**
     * Filter, which NOTIFICATION to fetch.
     */
    where?: NOTIFICATIONWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NOTIFICATIONS to fetch.
     */
    orderBy?: NOTIFICATIONOrderByWithRelationInput | NOTIFICATIONOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NOTIFICATIONS.
     */
    cursor?: NOTIFICATIONWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NOTIFICATIONS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NOTIFICATIONS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NOTIFICATIONS.
     */
    distinct?: NOTIFICATIONScalarFieldEnum | NOTIFICATIONScalarFieldEnum[]
  }

  /**
   * NOTIFICATION findFirstOrThrow
   */
  export type NOTIFICATIONFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NOTIFICATION
     */
    select?: NOTIFICATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NOTIFICATION
     */
    omit?: NOTIFICATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NOTIFICATIONInclude<ExtArgs> | null
    /**
     * Filter, which NOTIFICATION to fetch.
     */
    where?: NOTIFICATIONWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NOTIFICATIONS to fetch.
     */
    orderBy?: NOTIFICATIONOrderByWithRelationInput | NOTIFICATIONOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NOTIFICATIONS.
     */
    cursor?: NOTIFICATIONWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NOTIFICATIONS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NOTIFICATIONS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NOTIFICATIONS.
     */
    distinct?: NOTIFICATIONScalarFieldEnum | NOTIFICATIONScalarFieldEnum[]
  }

  /**
   * NOTIFICATION findMany
   */
  export type NOTIFICATIONFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NOTIFICATION
     */
    select?: NOTIFICATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NOTIFICATION
     */
    omit?: NOTIFICATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NOTIFICATIONInclude<ExtArgs> | null
    /**
     * Filter, which NOTIFICATIONS to fetch.
     */
    where?: NOTIFICATIONWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NOTIFICATIONS to fetch.
     */
    orderBy?: NOTIFICATIONOrderByWithRelationInput | NOTIFICATIONOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NOTIFICATIONS.
     */
    cursor?: NOTIFICATIONWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NOTIFICATIONS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NOTIFICATIONS.
     */
    skip?: number
    distinct?: NOTIFICATIONScalarFieldEnum | NOTIFICATIONScalarFieldEnum[]
  }

  /**
   * NOTIFICATION create
   */
  export type NOTIFICATIONCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NOTIFICATION
     */
    select?: NOTIFICATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NOTIFICATION
     */
    omit?: NOTIFICATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NOTIFICATIONInclude<ExtArgs> | null
    /**
     * The data needed to create a NOTIFICATION.
     */
    data?: XOR<NOTIFICATIONCreateInput, NOTIFICATIONUncheckedCreateInput>
  }

  /**
   * NOTIFICATION createMany
   */
  export type NOTIFICATIONCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NOTIFICATIONS.
     */
    data: NOTIFICATIONCreateManyInput | NOTIFICATIONCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NOTIFICATION update
   */
  export type NOTIFICATIONUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NOTIFICATION
     */
    select?: NOTIFICATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NOTIFICATION
     */
    omit?: NOTIFICATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NOTIFICATIONInclude<ExtArgs> | null
    /**
     * The data needed to update a NOTIFICATION.
     */
    data: XOR<NOTIFICATIONUpdateInput, NOTIFICATIONUncheckedUpdateInput>
    /**
     * Choose, which NOTIFICATION to update.
     */
    where: NOTIFICATIONWhereUniqueInput
  }

  /**
   * NOTIFICATION updateMany
   */
  export type NOTIFICATIONUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NOTIFICATIONS.
     */
    data: XOR<NOTIFICATIONUpdateManyMutationInput, NOTIFICATIONUncheckedUpdateManyInput>
    /**
     * Filter which NOTIFICATIONS to update
     */
    where?: NOTIFICATIONWhereInput
    /**
     * Limit how many NOTIFICATIONS to update.
     */
    limit?: number
  }

  /**
   * NOTIFICATION upsert
   */
  export type NOTIFICATIONUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NOTIFICATION
     */
    select?: NOTIFICATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NOTIFICATION
     */
    omit?: NOTIFICATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NOTIFICATIONInclude<ExtArgs> | null
    /**
     * The filter to search for the NOTIFICATION to update in case it exists.
     */
    where: NOTIFICATIONWhereUniqueInput
    /**
     * In case the NOTIFICATION found by the `where` argument doesn't exist, create a new NOTIFICATION with this data.
     */
    create: XOR<NOTIFICATIONCreateInput, NOTIFICATIONUncheckedCreateInput>
    /**
     * In case the NOTIFICATION was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NOTIFICATIONUpdateInput, NOTIFICATIONUncheckedUpdateInput>
  }

  /**
   * NOTIFICATION delete
   */
  export type NOTIFICATIONDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NOTIFICATION
     */
    select?: NOTIFICATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NOTIFICATION
     */
    omit?: NOTIFICATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NOTIFICATIONInclude<ExtArgs> | null
    /**
     * Filter which NOTIFICATION to delete.
     */
    where: NOTIFICATIONWhereUniqueInput
  }

  /**
   * NOTIFICATION deleteMany
   */
  export type NOTIFICATIONDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NOTIFICATIONS to delete
     */
    where?: NOTIFICATIONWhereInput
    /**
     * Limit how many NOTIFICATIONS to delete.
     */
    limit?: number
  }

  /**
   * NOTIFICATION.USER
   */
  export type NOTIFICATION$USERArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USER
     */
    select?: USERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USER
     */
    omit?: USEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USERInclude<ExtArgs> | null
    where?: USERWhereInput
  }

  /**
   * NOTIFICATION without action
   */
  export type NOTIFICATIONDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NOTIFICATION
     */
    select?: NOTIFICATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NOTIFICATION
     */
    omit?: NOTIFICATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NOTIFICATIONInclude<ExtArgs> | null
  }


  /**
   * Model OTHER_FUNDING
   */

  export type AggregateOTHER_FUNDING = {
    _count: OTHER_FUNDINGCountAggregateOutputType | null
    _avg: OTHER_FUNDINGAvgAggregateOutputType | null
    _sum: OTHER_FUNDINGSumAggregateOutputType | null
    _min: OTHER_FUNDINGMinAggregateOutputType | null
    _max: OTHER_FUNDINGMaxAggregateOutputType | null
  }

  export type OTHER_FUNDINGAvgAggregateOutputType = {
    funding_id: number | null
    student_id: number | null
    annual_amount: Decimal | null
  }

  export type OTHER_FUNDINGSumAggregateOutputType = {
    funding_id: number | null
    student_id: number | null
    annual_amount: Decimal | null
  }

  export type OTHER_FUNDINGMinAggregateOutputType = {
    funding_id: number | null
    student_id: number | null
    funding_name: string | null
    organization: string | null
    annual_amount: Decimal | null
    start_date: Date | null
    end_date: Date | null
  }

  export type OTHER_FUNDINGMaxAggregateOutputType = {
    funding_id: number | null
    student_id: number | null
    funding_name: string | null
    organization: string | null
    annual_amount: Decimal | null
    start_date: Date | null
    end_date: Date | null
  }

  export type OTHER_FUNDINGCountAggregateOutputType = {
    funding_id: number
    student_id: number
    funding_name: number
    organization: number
    annual_amount: number
    start_date: number
    end_date: number
    _all: number
  }


  export type OTHER_FUNDINGAvgAggregateInputType = {
    funding_id?: true
    student_id?: true
    annual_amount?: true
  }

  export type OTHER_FUNDINGSumAggregateInputType = {
    funding_id?: true
    student_id?: true
    annual_amount?: true
  }

  export type OTHER_FUNDINGMinAggregateInputType = {
    funding_id?: true
    student_id?: true
    funding_name?: true
    organization?: true
    annual_amount?: true
    start_date?: true
    end_date?: true
  }

  export type OTHER_FUNDINGMaxAggregateInputType = {
    funding_id?: true
    student_id?: true
    funding_name?: true
    organization?: true
    annual_amount?: true
    start_date?: true
    end_date?: true
  }

  export type OTHER_FUNDINGCountAggregateInputType = {
    funding_id?: true
    student_id?: true
    funding_name?: true
    organization?: true
    annual_amount?: true
    start_date?: true
    end_date?: true
    _all?: true
  }

  export type OTHER_FUNDINGAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OTHER_FUNDING to aggregate.
     */
    where?: OTHER_FUNDINGWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OTHER_FUNDINGS to fetch.
     */
    orderBy?: OTHER_FUNDINGOrderByWithRelationInput | OTHER_FUNDINGOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OTHER_FUNDINGWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OTHER_FUNDINGS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OTHER_FUNDINGS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OTHER_FUNDINGS
    **/
    _count?: true | OTHER_FUNDINGCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OTHER_FUNDINGAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OTHER_FUNDINGSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OTHER_FUNDINGMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OTHER_FUNDINGMaxAggregateInputType
  }

  export type GetOTHER_FUNDINGAggregateType<T extends OTHER_FUNDINGAggregateArgs> = {
        [P in keyof T & keyof AggregateOTHER_FUNDING]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOTHER_FUNDING[P]>
      : GetScalarType<T[P], AggregateOTHER_FUNDING[P]>
  }




  export type OTHER_FUNDINGGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OTHER_FUNDINGWhereInput
    orderBy?: OTHER_FUNDINGOrderByWithAggregationInput | OTHER_FUNDINGOrderByWithAggregationInput[]
    by: OTHER_FUNDINGScalarFieldEnum[] | OTHER_FUNDINGScalarFieldEnum
    having?: OTHER_FUNDINGScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OTHER_FUNDINGCountAggregateInputType | true
    _avg?: OTHER_FUNDINGAvgAggregateInputType
    _sum?: OTHER_FUNDINGSumAggregateInputType
    _min?: OTHER_FUNDINGMinAggregateInputType
    _max?: OTHER_FUNDINGMaxAggregateInputType
  }

  export type OTHER_FUNDINGGroupByOutputType = {
    funding_id: number
    student_id: number | null
    funding_name: string | null
    organization: string | null
    annual_amount: Decimal | null
    start_date: Date | null
    end_date: Date | null
    _count: OTHER_FUNDINGCountAggregateOutputType | null
    _avg: OTHER_FUNDINGAvgAggregateOutputType | null
    _sum: OTHER_FUNDINGSumAggregateOutputType | null
    _min: OTHER_FUNDINGMinAggregateOutputType | null
    _max: OTHER_FUNDINGMaxAggregateOutputType | null
  }

  type GetOTHER_FUNDINGGroupByPayload<T extends OTHER_FUNDINGGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OTHER_FUNDINGGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OTHER_FUNDINGGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OTHER_FUNDINGGroupByOutputType[P]>
            : GetScalarType<T[P], OTHER_FUNDINGGroupByOutputType[P]>
        }
      >
    >


  export type OTHER_FUNDINGSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    funding_id?: boolean
    student_id?: boolean
    funding_name?: boolean
    organization?: boolean
    annual_amount?: boolean
    start_date?: boolean
    end_date?: boolean
    STUDENT?: boolean | OTHER_FUNDING$STUDENTArgs<ExtArgs>
  }, ExtArgs["result"]["oTHER_FUNDING"]>



  export type OTHER_FUNDINGSelectScalar = {
    funding_id?: boolean
    student_id?: boolean
    funding_name?: boolean
    organization?: boolean
    annual_amount?: boolean
    start_date?: boolean
    end_date?: boolean
  }

  export type OTHER_FUNDINGOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"funding_id" | "student_id" | "funding_name" | "organization" | "annual_amount" | "start_date" | "end_date", ExtArgs["result"]["oTHER_FUNDING"]>
  export type OTHER_FUNDINGInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    STUDENT?: boolean | OTHER_FUNDING$STUDENTArgs<ExtArgs>
  }

  export type $OTHER_FUNDINGPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OTHER_FUNDING"
    objects: {
      STUDENT: Prisma.$STUDENTPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      funding_id: number
      student_id: number | null
      funding_name: string | null
      organization: string | null
      annual_amount: Prisma.Decimal | null
      start_date: Date | null
      end_date: Date | null
    }, ExtArgs["result"]["oTHER_FUNDING"]>
    composites: {}
  }

  type OTHER_FUNDINGGetPayload<S extends boolean | null | undefined | OTHER_FUNDINGDefaultArgs> = $Result.GetResult<Prisma.$OTHER_FUNDINGPayload, S>

  type OTHER_FUNDINGCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OTHER_FUNDINGFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OTHER_FUNDINGCountAggregateInputType | true
    }

  export interface OTHER_FUNDINGDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OTHER_FUNDING'], meta: { name: 'OTHER_FUNDING' } }
    /**
     * Find zero or one OTHER_FUNDING that matches the filter.
     * @param {OTHER_FUNDINGFindUniqueArgs} args - Arguments to find a OTHER_FUNDING
     * @example
     * // Get one OTHER_FUNDING
     * const oTHER_FUNDING = await prisma.oTHER_FUNDING.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OTHER_FUNDINGFindUniqueArgs>(args: SelectSubset<T, OTHER_FUNDINGFindUniqueArgs<ExtArgs>>): Prisma__OTHER_FUNDINGClient<$Result.GetResult<Prisma.$OTHER_FUNDINGPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OTHER_FUNDING that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OTHER_FUNDINGFindUniqueOrThrowArgs} args - Arguments to find a OTHER_FUNDING
     * @example
     * // Get one OTHER_FUNDING
     * const oTHER_FUNDING = await prisma.oTHER_FUNDING.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OTHER_FUNDINGFindUniqueOrThrowArgs>(args: SelectSubset<T, OTHER_FUNDINGFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OTHER_FUNDINGClient<$Result.GetResult<Prisma.$OTHER_FUNDINGPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OTHER_FUNDING that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTHER_FUNDINGFindFirstArgs} args - Arguments to find a OTHER_FUNDING
     * @example
     * // Get one OTHER_FUNDING
     * const oTHER_FUNDING = await prisma.oTHER_FUNDING.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OTHER_FUNDINGFindFirstArgs>(args?: SelectSubset<T, OTHER_FUNDINGFindFirstArgs<ExtArgs>>): Prisma__OTHER_FUNDINGClient<$Result.GetResult<Prisma.$OTHER_FUNDINGPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OTHER_FUNDING that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTHER_FUNDINGFindFirstOrThrowArgs} args - Arguments to find a OTHER_FUNDING
     * @example
     * // Get one OTHER_FUNDING
     * const oTHER_FUNDING = await prisma.oTHER_FUNDING.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OTHER_FUNDINGFindFirstOrThrowArgs>(args?: SelectSubset<T, OTHER_FUNDINGFindFirstOrThrowArgs<ExtArgs>>): Prisma__OTHER_FUNDINGClient<$Result.GetResult<Prisma.$OTHER_FUNDINGPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OTHER_FUNDINGS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTHER_FUNDINGFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OTHER_FUNDINGS
     * const oTHER_FUNDINGS = await prisma.oTHER_FUNDING.findMany()
     * 
     * // Get first 10 OTHER_FUNDINGS
     * const oTHER_FUNDINGS = await prisma.oTHER_FUNDING.findMany({ take: 10 })
     * 
     * // Only select the `funding_id`
     * const oTHER_FUNDINGWithFunding_idOnly = await prisma.oTHER_FUNDING.findMany({ select: { funding_id: true } })
     * 
     */
    findMany<T extends OTHER_FUNDINGFindManyArgs>(args?: SelectSubset<T, OTHER_FUNDINGFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OTHER_FUNDINGPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OTHER_FUNDING.
     * @param {OTHER_FUNDINGCreateArgs} args - Arguments to create a OTHER_FUNDING.
     * @example
     * // Create one OTHER_FUNDING
     * const OTHER_FUNDING = await prisma.oTHER_FUNDING.create({
     *   data: {
     *     // ... data to create a OTHER_FUNDING
     *   }
     * })
     * 
     */
    create<T extends OTHER_FUNDINGCreateArgs>(args: SelectSubset<T, OTHER_FUNDINGCreateArgs<ExtArgs>>): Prisma__OTHER_FUNDINGClient<$Result.GetResult<Prisma.$OTHER_FUNDINGPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OTHER_FUNDINGS.
     * @param {OTHER_FUNDINGCreateManyArgs} args - Arguments to create many OTHER_FUNDINGS.
     * @example
     * // Create many OTHER_FUNDINGS
     * const oTHER_FUNDING = await prisma.oTHER_FUNDING.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OTHER_FUNDINGCreateManyArgs>(args?: SelectSubset<T, OTHER_FUNDINGCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OTHER_FUNDING.
     * @param {OTHER_FUNDINGDeleteArgs} args - Arguments to delete one OTHER_FUNDING.
     * @example
     * // Delete one OTHER_FUNDING
     * const OTHER_FUNDING = await prisma.oTHER_FUNDING.delete({
     *   where: {
     *     // ... filter to delete one OTHER_FUNDING
     *   }
     * })
     * 
     */
    delete<T extends OTHER_FUNDINGDeleteArgs>(args: SelectSubset<T, OTHER_FUNDINGDeleteArgs<ExtArgs>>): Prisma__OTHER_FUNDINGClient<$Result.GetResult<Prisma.$OTHER_FUNDINGPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OTHER_FUNDING.
     * @param {OTHER_FUNDINGUpdateArgs} args - Arguments to update one OTHER_FUNDING.
     * @example
     * // Update one OTHER_FUNDING
     * const oTHER_FUNDING = await prisma.oTHER_FUNDING.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OTHER_FUNDINGUpdateArgs>(args: SelectSubset<T, OTHER_FUNDINGUpdateArgs<ExtArgs>>): Prisma__OTHER_FUNDINGClient<$Result.GetResult<Prisma.$OTHER_FUNDINGPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OTHER_FUNDINGS.
     * @param {OTHER_FUNDINGDeleteManyArgs} args - Arguments to filter OTHER_FUNDINGS to delete.
     * @example
     * // Delete a few OTHER_FUNDINGS
     * const { count } = await prisma.oTHER_FUNDING.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OTHER_FUNDINGDeleteManyArgs>(args?: SelectSubset<T, OTHER_FUNDINGDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OTHER_FUNDINGS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTHER_FUNDINGUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OTHER_FUNDINGS
     * const oTHER_FUNDING = await prisma.oTHER_FUNDING.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OTHER_FUNDINGUpdateManyArgs>(args: SelectSubset<T, OTHER_FUNDINGUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OTHER_FUNDING.
     * @param {OTHER_FUNDINGUpsertArgs} args - Arguments to update or create a OTHER_FUNDING.
     * @example
     * // Update or create a OTHER_FUNDING
     * const oTHER_FUNDING = await prisma.oTHER_FUNDING.upsert({
     *   create: {
     *     // ... data to create a OTHER_FUNDING
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OTHER_FUNDING we want to update
     *   }
     * })
     */
    upsert<T extends OTHER_FUNDINGUpsertArgs>(args: SelectSubset<T, OTHER_FUNDINGUpsertArgs<ExtArgs>>): Prisma__OTHER_FUNDINGClient<$Result.GetResult<Prisma.$OTHER_FUNDINGPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OTHER_FUNDINGS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTHER_FUNDINGCountArgs} args - Arguments to filter OTHER_FUNDINGS to count.
     * @example
     * // Count the number of OTHER_FUNDINGS
     * const count = await prisma.oTHER_FUNDING.count({
     *   where: {
     *     // ... the filter for the OTHER_FUNDINGS we want to count
     *   }
     * })
    **/
    count<T extends OTHER_FUNDINGCountArgs>(
      args?: Subset<T, OTHER_FUNDINGCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OTHER_FUNDINGCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OTHER_FUNDING.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTHER_FUNDINGAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OTHER_FUNDINGAggregateArgs>(args: Subset<T, OTHER_FUNDINGAggregateArgs>): Prisma.PrismaPromise<GetOTHER_FUNDINGAggregateType<T>>

    /**
     * Group by OTHER_FUNDING.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTHER_FUNDINGGroupByArgs} args - Group by arguments.
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
      T extends OTHER_FUNDINGGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OTHER_FUNDINGGroupByArgs['orderBy'] }
        : { orderBy?: OTHER_FUNDINGGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OTHER_FUNDINGGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOTHER_FUNDINGGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OTHER_FUNDING model
   */
  readonly fields: OTHER_FUNDINGFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OTHER_FUNDING.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OTHER_FUNDINGClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    STUDENT<T extends OTHER_FUNDING$STUDENTArgs<ExtArgs> = {}>(args?: Subset<T, OTHER_FUNDING$STUDENTArgs<ExtArgs>>): Prisma__STUDENTClient<$Result.GetResult<Prisma.$STUDENTPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OTHER_FUNDING model
   */
  interface OTHER_FUNDINGFieldRefs {
    readonly funding_id: FieldRef<"OTHER_FUNDING", 'Int'>
    readonly student_id: FieldRef<"OTHER_FUNDING", 'Int'>
    readonly funding_name: FieldRef<"OTHER_FUNDING", 'String'>
    readonly organization: FieldRef<"OTHER_FUNDING", 'String'>
    readonly annual_amount: FieldRef<"OTHER_FUNDING", 'Decimal'>
    readonly start_date: FieldRef<"OTHER_FUNDING", 'DateTime'>
    readonly end_date: FieldRef<"OTHER_FUNDING", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OTHER_FUNDING findUnique
   */
  export type OTHER_FUNDINGFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTHER_FUNDING
     */
    select?: OTHER_FUNDINGSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTHER_FUNDING
     */
    omit?: OTHER_FUNDINGOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTHER_FUNDINGInclude<ExtArgs> | null
    /**
     * Filter, which OTHER_FUNDING to fetch.
     */
    where: OTHER_FUNDINGWhereUniqueInput
  }

  /**
   * OTHER_FUNDING findUniqueOrThrow
   */
  export type OTHER_FUNDINGFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTHER_FUNDING
     */
    select?: OTHER_FUNDINGSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTHER_FUNDING
     */
    omit?: OTHER_FUNDINGOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTHER_FUNDINGInclude<ExtArgs> | null
    /**
     * Filter, which OTHER_FUNDING to fetch.
     */
    where: OTHER_FUNDINGWhereUniqueInput
  }

  /**
   * OTHER_FUNDING findFirst
   */
  export type OTHER_FUNDINGFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTHER_FUNDING
     */
    select?: OTHER_FUNDINGSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTHER_FUNDING
     */
    omit?: OTHER_FUNDINGOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTHER_FUNDINGInclude<ExtArgs> | null
    /**
     * Filter, which OTHER_FUNDING to fetch.
     */
    where?: OTHER_FUNDINGWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OTHER_FUNDINGS to fetch.
     */
    orderBy?: OTHER_FUNDINGOrderByWithRelationInput | OTHER_FUNDINGOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OTHER_FUNDINGS.
     */
    cursor?: OTHER_FUNDINGWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OTHER_FUNDINGS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OTHER_FUNDINGS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OTHER_FUNDINGS.
     */
    distinct?: OTHER_FUNDINGScalarFieldEnum | OTHER_FUNDINGScalarFieldEnum[]
  }

  /**
   * OTHER_FUNDING findFirstOrThrow
   */
  export type OTHER_FUNDINGFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTHER_FUNDING
     */
    select?: OTHER_FUNDINGSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTHER_FUNDING
     */
    omit?: OTHER_FUNDINGOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTHER_FUNDINGInclude<ExtArgs> | null
    /**
     * Filter, which OTHER_FUNDING to fetch.
     */
    where?: OTHER_FUNDINGWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OTHER_FUNDINGS to fetch.
     */
    orderBy?: OTHER_FUNDINGOrderByWithRelationInput | OTHER_FUNDINGOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OTHER_FUNDINGS.
     */
    cursor?: OTHER_FUNDINGWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OTHER_FUNDINGS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OTHER_FUNDINGS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OTHER_FUNDINGS.
     */
    distinct?: OTHER_FUNDINGScalarFieldEnum | OTHER_FUNDINGScalarFieldEnum[]
  }

  /**
   * OTHER_FUNDING findMany
   */
  export type OTHER_FUNDINGFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTHER_FUNDING
     */
    select?: OTHER_FUNDINGSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTHER_FUNDING
     */
    omit?: OTHER_FUNDINGOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTHER_FUNDINGInclude<ExtArgs> | null
    /**
     * Filter, which OTHER_FUNDINGS to fetch.
     */
    where?: OTHER_FUNDINGWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OTHER_FUNDINGS to fetch.
     */
    orderBy?: OTHER_FUNDINGOrderByWithRelationInput | OTHER_FUNDINGOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OTHER_FUNDINGS.
     */
    cursor?: OTHER_FUNDINGWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OTHER_FUNDINGS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OTHER_FUNDINGS.
     */
    skip?: number
    distinct?: OTHER_FUNDINGScalarFieldEnum | OTHER_FUNDINGScalarFieldEnum[]
  }

  /**
   * OTHER_FUNDING create
   */
  export type OTHER_FUNDINGCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTHER_FUNDING
     */
    select?: OTHER_FUNDINGSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTHER_FUNDING
     */
    omit?: OTHER_FUNDINGOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTHER_FUNDINGInclude<ExtArgs> | null
    /**
     * The data needed to create a OTHER_FUNDING.
     */
    data?: XOR<OTHER_FUNDINGCreateInput, OTHER_FUNDINGUncheckedCreateInput>
  }

  /**
   * OTHER_FUNDING createMany
   */
  export type OTHER_FUNDINGCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OTHER_FUNDINGS.
     */
    data: OTHER_FUNDINGCreateManyInput | OTHER_FUNDINGCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OTHER_FUNDING update
   */
  export type OTHER_FUNDINGUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTHER_FUNDING
     */
    select?: OTHER_FUNDINGSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTHER_FUNDING
     */
    omit?: OTHER_FUNDINGOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTHER_FUNDINGInclude<ExtArgs> | null
    /**
     * The data needed to update a OTHER_FUNDING.
     */
    data: XOR<OTHER_FUNDINGUpdateInput, OTHER_FUNDINGUncheckedUpdateInput>
    /**
     * Choose, which OTHER_FUNDING to update.
     */
    where: OTHER_FUNDINGWhereUniqueInput
  }

  /**
   * OTHER_FUNDING updateMany
   */
  export type OTHER_FUNDINGUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OTHER_FUNDINGS.
     */
    data: XOR<OTHER_FUNDINGUpdateManyMutationInput, OTHER_FUNDINGUncheckedUpdateManyInput>
    /**
     * Filter which OTHER_FUNDINGS to update
     */
    where?: OTHER_FUNDINGWhereInput
    /**
     * Limit how many OTHER_FUNDINGS to update.
     */
    limit?: number
  }

  /**
   * OTHER_FUNDING upsert
   */
  export type OTHER_FUNDINGUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTHER_FUNDING
     */
    select?: OTHER_FUNDINGSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTHER_FUNDING
     */
    omit?: OTHER_FUNDINGOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTHER_FUNDINGInclude<ExtArgs> | null
    /**
     * The filter to search for the OTHER_FUNDING to update in case it exists.
     */
    where: OTHER_FUNDINGWhereUniqueInput
    /**
     * In case the OTHER_FUNDING found by the `where` argument doesn't exist, create a new OTHER_FUNDING with this data.
     */
    create: XOR<OTHER_FUNDINGCreateInput, OTHER_FUNDINGUncheckedCreateInput>
    /**
     * In case the OTHER_FUNDING was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OTHER_FUNDINGUpdateInput, OTHER_FUNDINGUncheckedUpdateInput>
  }

  /**
   * OTHER_FUNDING delete
   */
  export type OTHER_FUNDINGDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTHER_FUNDING
     */
    select?: OTHER_FUNDINGSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTHER_FUNDING
     */
    omit?: OTHER_FUNDINGOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTHER_FUNDINGInclude<ExtArgs> | null
    /**
     * Filter which OTHER_FUNDING to delete.
     */
    where: OTHER_FUNDINGWhereUniqueInput
  }

  /**
   * OTHER_FUNDING deleteMany
   */
  export type OTHER_FUNDINGDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OTHER_FUNDINGS to delete
     */
    where?: OTHER_FUNDINGWhereInput
    /**
     * Limit how many OTHER_FUNDINGS to delete.
     */
    limit?: number
  }

  /**
   * OTHER_FUNDING.STUDENT
   */
  export type OTHER_FUNDING$STUDENTArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the STUDENT
     */
    select?: STUDENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the STUDENT
     */
    omit?: STUDENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: STUDENTInclude<ExtArgs> | null
    where?: STUDENTWhereInput
  }

  /**
   * OTHER_FUNDING without action
   */
  export type OTHER_FUNDINGDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTHER_FUNDING
     */
    select?: OTHER_FUNDINGSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTHER_FUNDING
     */
    omit?: OTHER_FUNDINGOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTHER_FUNDINGInclude<ExtArgs> | null
  }


  /**
   * Model PAYMENT
   */

  export type AggregatePAYMENT = {
    _count: PAYMENTCountAggregateOutputType | null
    _avg: PAYMENTAvgAggregateOutputType | null
    _sum: PAYMENTSumAggregateOutputType | null
    _min: PAYMENTMinAggregateOutputType | null
    _max: PAYMENTMaxAggregateOutputType | null
  }

  export type PAYMENTAvgAggregateOutputType = {
    payment_id: number | null
    application_id: number | null
    amount: Decimal | null
  }

  export type PAYMENTSumAggregateOutputType = {
    payment_id: number | null
    application_id: number | null
    amount: Decimal | null
  }

  export type PAYMENTMinAggregateOutputType = {
    payment_id: number | null
    application_id: number | null
    amount: Decimal | null
    payment_date: Date | null
    payment_method: string | null
    transaction_id: string | null
    status: $Enums.PAYMENT_status | null
  }

  export type PAYMENTMaxAggregateOutputType = {
    payment_id: number | null
    application_id: number | null
    amount: Decimal | null
    payment_date: Date | null
    payment_method: string | null
    transaction_id: string | null
    status: $Enums.PAYMENT_status | null
  }

  export type PAYMENTCountAggregateOutputType = {
    payment_id: number
    application_id: number
    amount: number
    payment_date: number
    payment_method: number
    transaction_id: number
    status: number
    _all: number
  }


  export type PAYMENTAvgAggregateInputType = {
    payment_id?: true
    application_id?: true
    amount?: true
  }

  export type PAYMENTSumAggregateInputType = {
    payment_id?: true
    application_id?: true
    amount?: true
  }

  export type PAYMENTMinAggregateInputType = {
    payment_id?: true
    application_id?: true
    amount?: true
    payment_date?: true
    payment_method?: true
    transaction_id?: true
    status?: true
  }

  export type PAYMENTMaxAggregateInputType = {
    payment_id?: true
    application_id?: true
    amount?: true
    payment_date?: true
    payment_method?: true
    transaction_id?: true
    status?: true
  }

  export type PAYMENTCountAggregateInputType = {
    payment_id?: true
    application_id?: true
    amount?: true
    payment_date?: true
    payment_method?: true
    transaction_id?: true
    status?: true
    _all?: true
  }

  export type PAYMENTAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PAYMENT to aggregate.
     */
    where?: PAYMENTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PAYMENTS to fetch.
     */
    orderBy?: PAYMENTOrderByWithRelationInput | PAYMENTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PAYMENTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PAYMENTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PAYMENTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PAYMENTS
    **/
    _count?: true | PAYMENTCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PAYMENTAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PAYMENTSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PAYMENTMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PAYMENTMaxAggregateInputType
  }

  export type GetPAYMENTAggregateType<T extends PAYMENTAggregateArgs> = {
        [P in keyof T & keyof AggregatePAYMENT]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePAYMENT[P]>
      : GetScalarType<T[P], AggregatePAYMENT[P]>
  }




  export type PAYMENTGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PAYMENTWhereInput
    orderBy?: PAYMENTOrderByWithAggregationInput | PAYMENTOrderByWithAggregationInput[]
    by: PAYMENTScalarFieldEnum[] | PAYMENTScalarFieldEnum
    having?: PAYMENTScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PAYMENTCountAggregateInputType | true
    _avg?: PAYMENTAvgAggregateInputType
    _sum?: PAYMENTSumAggregateInputType
    _min?: PAYMENTMinAggregateInputType
    _max?: PAYMENTMaxAggregateInputType
  }

  export type PAYMENTGroupByOutputType = {
    payment_id: number
    application_id: number | null
    amount: Decimal | null
    payment_date: Date | null
    payment_method: string | null
    transaction_id: string | null
    status: $Enums.PAYMENT_status | null
    _count: PAYMENTCountAggregateOutputType | null
    _avg: PAYMENTAvgAggregateOutputType | null
    _sum: PAYMENTSumAggregateOutputType | null
    _min: PAYMENTMinAggregateOutputType | null
    _max: PAYMENTMaxAggregateOutputType | null
  }

  type GetPAYMENTGroupByPayload<T extends PAYMENTGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PAYMENTGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PAYMENTGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PAYMENTGroupByOutputType[P]>
            : GetScalarType<T[P], PAYMENTGroupByOutputType[P]>
        }
      >
    >


  export type PAYMENTSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    payment_id?: boolean
    application_id?: boolean
    amount?: boolean
    payment_date?: boolean
    payment_method?: boolean
    transaction_id?: boolean
    status?: boolean
    APPLICATION?: boolean | PAYMENT$APPLICATIONArgs<ExtArgs>
  }, ExtArgs["result"]["pAYMENT"]>



  export type PAYMENTSelectScalar = {
    payment_id?: boolean
    application_id?: boolean
    amount?: boolean
    payment_date?: boolean
    payment_method?: boolean
    transaction_id?: boolean
    status?: boolean
  }

  export type PAYMENTOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"payment_id" | "application_id" | "amount" | "payment_date" | "payment_method" | "transaction_id" | "status", ExtArgs["result"]["pAYMENT"]>
  export type PAYMENTInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    APPLICATION?: boolean | PAYMENT$APPLICATIONArgs<ExtArgs>
  }

  export type $PAYMENTPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PAYMENT"
    objects: {
      APPLICATION: Prisma.$APPLICATIONPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      payment_id: number
      application_id: number | null
      amount: Prisma.Decimal | null
      payment_date: Date | null
      payment_method: string | null
      transaction_id: string | null
      status: $Enums.PAYMENT_status | null
    }, ExtArgs["result"]["pAYMENT"]>
    composites: {}
  }

  type PAYMENTGetPayload<S extends boolean | null | undefined | PAYMENTDefaultArgs> = $Result.GetResult<Prisma.$PAYMENTPayload, S>

  type PAYMENTCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PAYMENTFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PAYMENTCountAggregateInputType | true
    }

  export interface PAYMENTDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PAYMENT'], meta: { name: 'PAYMENT' } }
    /**
     * Find zero or one PAYMENT that matches the filter.
     * @param {PAYMENTFindUniqueArgs} args - Arguments to find a PAYMENT
     * @example
     * // Get one PAYMENT
     * const pAYMENT = await prisma.pAYMENT.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PAYMENTFindUniqueArgs>(args: SelectSubset<T, PAYMENTFindUniqueArgs<ExtArgs>>): Prisma__PAYMENTClient<$Result.GetResult<Prisma.$PAYMENTPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PAYMENT that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PAYMENTFindUniqueOrThrowArgs} args - Arguments to find a PAYMENT
     * @example
     * // Get one PAYMENT
     * const pAYMENT = await prisma.pAYMENT.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PAYMENTFindUniqueOrThrowArgs>(args: SelectSubset<T, PAYMENTFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PAYMENTClient<$Result.GetResult<Prisma.$PAYMENTPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PAYMENT that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PAYMENTFindFirstArgs} args - Arguments to find a PAYMENT
     * @example
     * // Get one PAYMENT
     * const pAYMENT = await prisma.pAYMENT.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PAYMENTFindFirstArgs>(args?: SelectSubset<T, PAYMENTFindFirstArgs<ExtArgs>>): Prisma__PAYMENTClient<$Result.GetResult<Prisma.$PAYMENTPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PAYMENT that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PAYMENTFindFirstOrThrowArgs} args - Arguments to find a PAYMENT
     * @example
     * // Get one PAYMENT
     * const pAYMENT = await prisma.pAYMENT.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PAYMENTFindFirstOrThrowArgs>(args?: SelectSubset<T, PAYMENTFindFirstOrThrowArgs<ExtArgs>>): Prisma__PAYMENTClient<$Result.GetResult<Prisma.$PAYMENTPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PAYMENTS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PAYMENTFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PAYMENTS
     * const pAYMENTS = await prisma.pAYMENT.findMany()
     * 
     * // Get first 10 PAYMENTS
     * const pAYMENTS = await prisma.pAYMENT.findMany({ take: 10 })
     * 
     * // Only select the `payment_id`
     * const pAYMENTWithPayment_idOnly = await prisma.pAYMENT.findMany({ select: { payment_id: true } })
     * 
     */
    findMany<T extends PAYMENTFindManyArgs>(args?: SelectSubset<T, PAYMENTFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PAYMENTPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PAYMENT.
     * @param {PAYMENTCreateArgs} args - Arguments to create a PAYMENT.
     * @example
     * // Create one PAYMENT
     * const PAYMENT = await prisma.pAYMENT.create({
     *   data: {
     *     // ... data to create a PAYMENT
     *   }
     * })
     * 
     */
    create<T extends PAYMENTCreateArgs>(args: SelectSubset<T, PAYMENTCreateArgs<ExtArgs>>): Prisma__PAYMENTClient<$Result.GetResult<Prisma.$PAYMENTPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PAYMENTS.
     * @param {PAYMENTCreateManyArgs} args - Arguments to create many PAYMENTS.
     * @example
     * // Create many PAYMENTS
     * const pAYMENT = await prisma.pAYMENT.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PAYMENTCreateManyArgs>(args?: SelectSubset<T, PAYMENTCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PAYMENT.
     * @param {PAYMENTDeleteArgs} args - Arguments to delete one PAYMENT.
     * @example
     * // Delete one PAYMENT
     * const PAYMENT = await prisma.pAYMENT.delete({
     *   where: {
     *     // ... filter to delete one PAYMENT
     *   }
     * })
     * 
     */
    delete<T extends PAYMENTDeleteArgs>(args: SelectSubset<T, PAYMENTDeleteArgs<ExtArgs>>): Prisma__PAYMENTClient<$Result.GetResult<Prisma.$PAYMENTPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PAYMENT.
     * @param {PAYMENTUpdateArgs} args - Arguments to update one PAYMENT.
     * @example
     * // Update one PAYMENT
     * const pAYMENT = await prisma.pAYMENT.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PAYMENTUpdateArgs>(args: SelectSubset<T, PAYMENTUpdateArgs<ExtArgs>>): Prisma__PAYMENTClient<$Result.GetResult<Prisma.$PAYMENTPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PAYMENTS.
     * @param {PAYMENTDeleteManyArgs} args - Arguments to filter PAYMENTS to delete.
     * @example
     * // Delete a few PAYMENTS
     * const { count } = await prisma.pAYMENT.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PAYMENTDeleteManyArgs>(args?: SelectSubset<T, PAYMENTDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PAYMENTS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PAYMENTUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PAYMENTS
     * const pAYMENT = await prisma.pAYMENT.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PAYMENTUpdateManyArgs>(args: SelectSubset<T, PAYMENTUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PAYMENT.
     * @param {PAYMENTUpsertArgs} args - Arguments to update or create a PAYMENT.
     * @example
     * // Update or create a PAYMENT
     * const pAYMENT = await prisma.pAYMENT.upsert({
     *   create: {
     *     // ... data to create a PAYMENT
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PAYMENT we want to update
     *   }
     * })
     */
    upsert<T extends PAYMENTUpsertArgs>(args: SelectSubset<T, PAYMENTUpsertArgs<ExtArgs>>): Prisma__PAYMENTClient<$Result.GetResult<Prisma.$PAYMENTPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PAYMENTS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PAYMENTCountArgs} args - Arguments to filter PAYMENTS to count.
     * @example
     * // Count the number of PAYMENTS
     * const count = await prisma.pAYMENT.count({
     *   where: {
     *     // ... the filter for the PAYMENTS we want to count
     *   }
     * })
    **/
    count<T extends PAYMENTCountArgs>(
      args?: Subset<T, PAYMENTCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PAYMENTCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PAYMENT.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PAYMENTAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PAYMENTAggregateArgs>(args: Subset<T, PAYMENTAggregateArgs>): Prisma.PrismaPromise<GetPAYMENTAggregateType<T>>

    /**
     * Group by PAYMENT.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PAYMENTGroupByArgs} args - Group by arguments.
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
      T extends PAYMENTGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PAYMENTGroupByArgs['orderBy'] }
        : { orderBy?: PAYMENTGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PAYMENTGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPAYMENTGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PAYMENT model
   */
  readonly fields: PAYMENTFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PAYMENT.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PAYMENTClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    APPLICATION<T extends PAYMENT$APPLICATIONArgs<ExtArgs> = {}>(args?: Subset<T, PAYMENT$APPLICATIONArgs<ExtArgs>>): Prisma__APPLICATIONClient<$Result.GetResult<Prisma.$APPLICATIONPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PAYMENT model
   */
  interface PAYMENTFieldRefs {
    readonly payment_id: FieldRef<"PAYMENT", 'Int'>
    readonly application_id: FieldRef<"PAYMENT", 'Int'>
    readonly amount: FieldRef<"PAYMENT", 'Decimal'>
    readonly payment_date: FieldRef<"PAYMENT", 'DateTime'>
    readonly payment_method: FieldRef<"PAYMENT", 'String'>
    readonly transaction_id: FieldRef<"PAYMENT", 'String'>
    readonly status: FieldRef<"PAYMENT", 'PAYMENT_status'>
  }
    

  // Custom InputTypes
  /**
   * PAYMENT findUnique
   */
  export type PAYMENTFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAYMENT
     */
    select?: PAYMENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAYMENT
     */
    omit?: PAYMENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAYMENTInclude<ExtArgs> | null
    /**
     * Filter, which PAYMENT to fetch.
     */
    where: PAYMENTWhereUniqueInput
  }

  /**
   * PAYMENT findUniqueOrThrow
   */
  export type PAYMENTFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAYMENT
     */
    select?: PAYMENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAYMENT
     */
    omit?: PAYMENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAYMENTInclude<ExtArgs> | null
    /**
     * Filter, which PAYMENT to fetch.
     */
    where: PAYMENTWhereUniqueInput
  }

  /**
   * PAYMENT findFirst
   */
  export type PAYMENTFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAYMENT
     */
    select?: PAYMENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAYMENT
     */
    omit?: PAYMENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAYMENTInclude<ExtArgs> | null
    /**
     * Filter, which PAYMENT to fetch.
     */
    where?: PAYMENTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PAYMENTS to fetch.
     */
    orderBy?: PAYMENTOrderByWithRelationInput | PAYMENTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PAYMENTS.
     */
    cursor?: PAYMENTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PAYMENTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PAYMENTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PAYMENTS.
     */
    distinct?: PAYMENTScalarFieldEnum | PAYMENTScalarFieldEnum[]
  }

  /**
   * PAYMENT findFirstOrThrow
   */
  export type PAYMENTFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAYMENT
     */
    select?: PAYMENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAYMENT
     */
    omit?: PAYMENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAYMENTInclude<ExtArgs> | null
    /**
     * Filter, which PAYMENT to fetch.
     */
    where?: PAYMENTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PAYMENTS to fetch.
     */
    orderBy?: PAYMENTOrderByWithRelationInput | PAYMENTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PAYMENTS.
     */
    cursor?: PAYMENTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PAYMENTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PAYMENTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PAYMENTS.
     */
    distinct?: PAYMENTScalarFieldEnum | PAYMENTScalarFieldEnum[]
  }

  /**
   * PAYMENT findMany
   */
  export type PAYMENTFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAYMENT
     */
    select?: PAYMENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAYMENT
     */
    omit?: PAYMENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAYMENTInclude<ExtArgs> | null
    /**
     * Filter, which PAYMENTS to fetch.
     */
    where?: PAYMENTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PAYMENTS to fetch.
     */
    orderBy?: PAYMENTOrderByWithRelationInput | PAYMENTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PAYMENTS.
     */
    cursor?: PAYMENTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PAYMENTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PAYMENTS.
     */
    skip?: number
    distinct?: PAYMENTScalarFieldEnum | PAYMENTScalarFieldEnum[]
  }

  /**
   * PAYMENT create
   */
  export type PAYMENTCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAYMENT
     */
    select?: PAYMENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAYMENT
     */
    omit?: PAYMENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAYMENTInclude<ExtArgs> | null
    /**
     * The data needed to create a PAYMENT.
     */
    data?: XOR<PAYMENTCreateInput, PAYMENTUncheckedCreateInput>
  }

  /**
   * PAYMENT createMany
   */
  export type PAYMENTCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PAYMENTS.
     */
    data: PAYMENTCreateManyInput | PAYMENTCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PAYMENT update
   */
  export type PAYMENTUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAYMENT
     */
    select?: PAYMENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAYMENT
     */
    omit?: PAYMENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAYMENTInclude<ExtArgs> | null
    /**
     * The data needed to update a PAYMENT.
     */
    data: XOR<PAYMENTUpdateInput, PAYMENTUncheckedUpdateInput>
    /**
     * Choose, which PAYMENT to update.
     */
    where: PAYMENTWhereUniqueInput
  }

  /**
   * PAYMENT updateMany
   */
  export type PAYMENTUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PAYMENTS.
     */
    data: XOR<PAYMENTUpdateManyMutationInput, PAYMENTUncheckedUpdateManyInput>
    /**
     * Filter which PAYMENTS to update
     */
    where?: PAYMENTWhereInput
    /**
     * Limit how many PAYMENTS to update.
     */
    limit?: number
  }

  /**
   * PAYMENT upsert
   */
  export type PAYMENTUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAYMENT
     */
    select?: PAYMENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAYMENT
     */
    omit?: PAYMENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAYMENTInclude<ExtArgs> | null
    /**
     * The filter to search for the PAYMENT to update in case it exists.
     */
    where: PAYMENTWhereUniqueInput
    /**
     * In case the PAYMENT found by the `where` argument doesn't exist, create a new PAYMENT with this data.
     */
    create: XOR<PAYMENTCreateInput, PAYMENTUncheckedCreateInput>
    /**
     * In case the PAYMENT was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PAYMENTUpdateInput, PAYMENTUncheckedUpdateInput>
  }

  /**
   * PAYMENT delete
   */
  export type PAYMENTDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAYMENT
     */
    select?: PAYMENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAYMENT
     */
    omit?: PAYMENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAYMENTInclude<ExtArgs> | null
    /**
     * Filter which PAYMENT to delete.
     */
    where: PAYMENTWhereUniqueInput
  }

  /**
   * PAYMENT deleteMany
   */
  export type PAYMENTDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PAYMENTS to delete
     */
    where?: PAYMENTWhereInput
    /**
     * Limit how many PAYMENTS to delete.
     */
    limit?: number
  }

  /**
   * PAYMENT.APPLICATION
   */
  export type PAYMENT$APPLICATIONArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APPLICATION
     */
    select?: APPLICATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the APPLICATION
     */
    omit?: APPLICATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: APPLICATIONInclude<ExtArgs> | null
    where?: APPLICATIONWhereInput
  }

  /**
   * PAYMENT without action
   */
  export type PAYMENTDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAYMENT
     */
    select?: PAYMENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAYMENT
     */
    omit?: PAYMENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAYMENTInclude<ExtArgs> | null
  }


  /**
   * Model SCHOLARSHIP
   */

  export type AggregateSCHOLARSHIP = {
    _count: SCHOLARSHIPCountAggregateOutputType | null
    _avg: SCHOLARSHIPAvgAggregateOutputType | null
    _sum: SCHOLARSHIPSumAggregateOutputType | null
    _min: SCHOLARSHIPMinAggregateOutputType | null
    _max: SCHOLARSHIPMaxAggregateOutputType | null
  }

  export type SCHOLARSHIPAvgAggregateOutputType = {
    scholarship_id: number | null
    amount: Decimal | null
    no_of_students: number | null
    provider_id: number | null
  }

  export type SCHOLARSHIPSumAggregateOutputType = {
    scholarship_id: number | null
    amount: Decimal | null
    no_of_students: number | null
    provider_id: number | null
  }

  export type SCHOLARSHIPMinAggregateOutputType = {
    scholarship_id: number | null
    name: string | null
    description: string | null
    amount: Decimal | null
    no_of_students: number | null
    application_deadline: Date | null
    start_date: Date | null
    end_date: Date | null
    provider_id: number | null
    is_active: boolean | null
  }

  export type SCHOLARSHIPMaxAggregateOutputType = {
    scholarship_id: number | null
    name: string | null
    description: string | null
    amount: Decimal | null
    no_of_students: number | null
    application_deadline: Date | null
    start_date: Date | null
    end_date: Date | null
    provider_id: number | null
    is_active: boolean | null
  }

  export type SCHOLARSHIPCountAggregateOutputType = {
    scholarship_id: number
    name: number
    description: number
    amount: number
    no_of_students: number
    application_deadline: number
    start_date: number
    end_date: number
    provider_id: number
    is_active: number
    _all: number
  }


  export type SCHOLARSHIPAvgAggregateInputType = {
    scholarship_id?: true
    amount?: true
    no_of_students?: true
    provider_id?: true
  }

  export type SCHOLARSHIPSumAggregateInputType = {
    scholarship_id?: true
    amount?: true
    no_of_students?: true
    provider_id?: true
  }

  export type SCHOLARSHIPMinAggregateInputType = {
    scholarship_id?: true
    name?: true
    description?: true
    amount?: true
    no_of_students?: true
    application_deadline?: true
    start_date?: true
    end_date?: true
    provider_id?: true
    is_active?: true
  }

  export type SCHOLARSHIPMaxAggregateInputType = {
    scholarship_id?: true
    name?: true
    description?: true
    amount?: true
    no_of_students?: true
    application_deadline?: true
    start_date?: true
    end_date?: true
    provider_id?: true
    is_active?: true
  }

  export type SCHOLARSHIPCountAggregateInputType = {
    scholarship_id?: true
    name?: true
    description?: true
    amount?: true
    no_of_students?: true
    application_deadline?: true
    start_date?: true
    end_date?: true
    provider_id?: true
    is_active?: true
    _all?: true
  }

  export type SCHOLARSHIPAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SCHOLARSHIP to aggregate.
     */
    where?: SCHOLARSHIPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SCHOLARSHIPS to fetch.
     */
    orderBy?: SCHOLARSHIPOrderByWithRelationInput | SCHOLARSHIPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SCHOLARSHIPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SCHOLARSHIPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SCHOLARSHIPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SCHOLARSHIPS
    **/
    _count?: true | SCHOLARSHIPCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SCHOLARSHIPAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SCHOLARSHIPSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SCHOLARSHIPMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SCHOLARSHIPMaxAggregateInputType
  }

  export type GetSCHOLARSHIPAggregateType<T extends SCHOLARSHIPAggregateArgs> = {
        [P in keyof T & keyof AggregateSCHOLARSHIP]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSCHOLARSHIP[P]>
      : GetScalarType<T[P], AggregateSCHOLARSHIP[P]>
  }




  export type SCHOLARSHIPGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SCHOLARSHIPWhereInput
    orderBy?: SCHOLARSHIPOrderByWithAggregationInput | SCHOLARSHIPOrderByWithAggregationInput[]
    by: SCHOLARSHIPScalarFieldEnum[] | SCHOLARSHIPScalarFieldEnum
    having?: SCHOLARSHIPScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SCHOLARSHIPCountAggregateInputType | true
    _avg?: SCHOLARSHIPAvgAggregateInputType
    _sum?: SCHOLARSHIPSumAggregateInputType
    _min?: SCHOLARSHIPMinAggregateInputType
    _max?: SCHOLARSHIPMaxAggregateInputType
  }

  export type SCHOLARSHIPGroupByOutputType = {
    scholarship_id: number
    name: string | null
    description: string | null
    amount: Decimal | null
    no_of_students: number | null
    application_deadline: Date | null
    start_date: Date | null
    end_date: Date | null
    provider_id: number | null
    is_active: boolean | null
    _count: SCHOLARSHIPCountAggregateOutputType | null
    _avg: SCHOLARSHIPAvgAggregateOutputType | null
    _sum: SCHOLARSHIPSumAggregateOutputType | null
    _min: SCHOLARSHIPMinAggregateOutputType | null
    _max: SCHOLARSHIPMaxAggregateOutputType | null
  }

  type GetSCHOLARSHIPGroupByPayload<T extends SCHOLARSHIPGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SCHOLARSHIPGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SCHOLARSHIPGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SCHOLARSHIPGroupByOutputType[P]>
            : GetScalarType<T[P], SCHOLARSHIPGroupByOutputType[P]>
        }
      >
    >


  export type SCHOLARSHIPSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    scholarship_id?: boolean
    name?: boolean
    description?: boolean
    amount?: boolean
    no_of_students?: boolean
    application_deadline?: boolean
    start_date?: boolean
    end_date?: boolean
    provider_id?: boolean
    is_active?: boolean
    APPLICATION?: boolean | SCHOLARSHIP$APPLICATIONArgs<ExtArgs>
    ELIGIBILITY_CRITERIA?: boolean | SCHOLARSHIP$ELIGIBILITY_CRITERIAArgs<ExtArgs>
    SCHOLARSHIP_PROVIDER?: boolean | SCHOLARSHIP$SCHOLARSHIP_PROVIDERArgs<ExtArgs>
    _count?: boolean | SCHOLARSHIPCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sCHOLARSHIP"]>



  export type SCHOLARSHIPSelectScalar = {
    scholarship_id?: boolean
    name?: boolean
    description?: boolean
    amount?: boolean
    no_of_students?: boolean
    application_deadline?: boolean
    start_date?: boolean
    end_date?: boolean
    provider_id?: boolean
    is_active?: boolean
  }

  export type SCHOLARSHIPOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"scholarship_id" | "name" | "description" | "amount" | "no_of_students" | "application_deadline" | "start_date" | "end_date" | "provider_id" | "is_active", ExtArgs["result"]["sCHOLARSHIP"]>
  export type SCHOLARSHIPInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    APPLICATION?: boolean | SCHOLARSHIP$APPLICATIONArgs<ExtArgs>
    ELIGIBILITY_CRITERIA?: boolean | SCHOLARSHIP$ELIGIBILITY_CRITERIAArgs<ExtArgs>
    SCHOLARSHIP_PROVIDER?: boolean | SCHOLARSHIP$SCHOLARSHIP_PROVIDERArgs<ExtArgs>
    _count?: boolean | SCHOLARSHIPCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SCHOLARSHIPPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SCHOLARSHIP"
    objects: {
      APPLICATION: Prisma.$APPLICATIONPayload<ExtArgs>[]
      ELIGIBILITY_CRITERIA: Prisma.$ELIGIBILITY_CRITERIAPayload<ExtArgs>[]
      SCHOLARSHIP_PROVIDER: Prisma.$SCHOLARSHIP_PROVIDERPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      scholarship_id: number
      name: string | null
      description: string | null
      amount: Prisma.Decimal | null
      no_of_students: number | null
      application_deadline: Date | null
      start_date: Date | null
      end_date: Date | null
      provider_id: number | null
      is_active: boolean | null
    }, ExtArgs["result"]["sCHOLARSHIP"]>
    composites: {}
  }

  type SCHOLARSHIPGetPayload<S extends boolean | null | undefined | SCHOLARSHIPDefaultArgs> = $Result.GetResult<Prisma.$SCHOLARSHIPPayload, S>

  type SCHOLARSHIPCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SCHOLARSHIPFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SCHOLARSHIPCountAggregateInputType | true
    }

  export interface SCHOLARSHIPDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SCHOLARSHIP'], meta: { name: 'SCHOLARSHIP' } }
    /**
     * Find zero or one SCHOLARSHIP that matches the filter.
     * @param {SCHOLARSHIPFindUniqueArgs} args - Arguments to find a SCHOLARSHIP
     * @example
     * // Get one SCHOLARSHIP
     * const sCHOLARSHIP = await prisma.sCHOLARSHIP.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SCHOLARSHIPFindUniqueArgs>(args: SelectSubset<T, SCHOLARSHIPFindUniqueArgs<ExtArgs>>): Prisma__SCHOLARSHIPClient<$Result.GetResult<Prisma.$SCHOLARSHIPPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SCHOLARSHIP that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SCHOLARSHIPFindUniqueOrThrowArgs} args - Arguments to find a SCHOLARSHIP
     * @example
     * // Get one SCHOLARSHIP
     * const sCHOLARSHIP = await prisma.sCHOLARSHIP.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SCHOLARSHIPFindUniqueOrThrowArgs>(args: SelectSubset<T, SCHOLARSHIPFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SCHOLARSHIPClient<$Result.GetResult<Prisma.$SCHOLARSHIPPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SCHOLARSHIP that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SCHOLARSHIPFindFirstArgs} args - Arguments to find a SCHOLARSHIP
     * @example
     * // Get one SCHOLARSHIP
     * const sCHOLARSHIP = await prisma.sCHOLARSHIP.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SCHOLARSHIPFindFirstArgs>(args?: SelectSubset<T, SCHOLARSHIPFindFirstArgs<ExtArgs>>): Prisma__SCHOLARSHIPClient<$Result.GetResult<Prisma.$SCHOLARSHIPPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SCHOLARSHIP that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SCHOLARSHIPFindFirstOrThrowArgs} args - Arguments to find a SCHOLARSHIP
     * @example
     * // Get one SCHOLARSHIP
     * const sCHOLARSHIP = await prisma.sCHOLARSHIP.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SCHOLARSHIPFindFirstOrThrowArgs>(args?: SelectSubset<T, SCHOLARSHIPFindFirstOrThrowArgs<ExtArgs>>): Prisma__SCHOLARSHIPClient<$Result.GetResult<Prisma.$SCHOLARSHIPPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SCHOLARSHIPS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SCHOLARSHIPFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SCHOLARSHIPS
     * const sCHOLARSHIPS = await prisma.sCHOLARSHIP.findMany()
     * 
     * // Get first 10 SCHOLARSHIPS
     * const sCHOLARSHIPS = await prisma.sCHOLARSHIP.findMany({ take: 10 })
     * 
     * // Only select the `scholarship_id`
     * const sCHOLARSHIPWithScholarship_idOnly = await prisma.sCHOLARSHIP.findMany({ select: { scholarship_id: true } })
     * 
     */
    findMany<T extends SCHOLARSHIPFindManyArgs>(args?: SelectSubset<T, SCHOLARSHIPFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SCHOLARSHIPPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SCHOLARSHIP.
     * @param {SCHOLARSHIPCreateArgs} args - Arguments to create a SCHOLARSHIP.
     * @example
     * // Create one SCHOLARSHIP
     * const SCHOLARSHIP = await prisma.sCHOLARSHIP.create({
     *   data: {
     *     // ... data to create a SCHOLARSHIP
     *   }
     * })
     * 
     */
    create<T extends SCHOLARSHIPCreateArgs>(args: SelectSubset<T, SCHOLARSHIPCreateArgs<ExtArgs>>): Prisma__SCHOLARSHIPClient<$Result.GetResult<Prisma.$SCHOLARSHIPPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SCHOLARSHIPS.
     * @param {SCHOLARSHIPCreateManyArgs} args - Arguments to create many SCHOLARSHIPS.
     * @example
     * // Create many SCHOLARSHIPS
     * const sCHOLARSHIP = await prisma.sCHOLARSHIP.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SCHOLARSHIPCreateManyArgs>(args?: SelectSubset<T, SCHOLARSHIPCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SCHOLARSHIP.
     * @param {SCHOLARSHIPDeleteArgs} args - Arguments to delete one SCHOLARSHIP.
     * @example
     * // Delete one SCHOLARSHIP
     * const SCHOLARSHIP = await prisma.sCHOLARSHIP.delete({
     *   where: {
     *     // ... filter to delete one SCHOLARSHIP
     *   }
     * })
     * 
     */
    delete<T extends SCHOLARSHIPDeleteArgs>(args: SelectSubset<T, SCHOLARSHIPDeleteArgs<ExtArgs>>): Prisma__SCHOLARSHIPClient<$Result.GetResult<Prisma.$SCHOLARSHIPPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SCHOLARSHIP.
     * @param {SCHOLARSHIPUpdateArgs} args - Arguments to update one SCHOLARSHIP.
     * @example
     * // Update one SCHOLARSHIP
     * const sCHOLARSHIP = await prisma.sCHOLARSHIP.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SCHOLARSHIPUpdateArgs>(args: SelectSubset<T, SCHOLARSHIPUpdateArgs<ExtArgs>>): Prisma__SCHOLARSHIPClient<$Result.GetResult<Prisma.$SCHOLARSHIPPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SCHOLARSHIPS.
     * @param {SCHOLARSHIPDeleteManyArgs} args - Arguments to filter SCHOLARSHIPS to delete.
     * @example
     * // Delete a few SCHOLARSHIPS
     * const { count } = await prisma.sCHOLARSHIP.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SCHOLARSHIPDeleteManyArgs>(args?: SelectSubset<T, SCHOLARSHIPDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SCHOLARSHIPS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SCHOLARSHIPUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SCHOLARSHIPS
     * const sCHOLARSHIP = await prisma.sCHOLARSHIP.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SCHOLARSHIPUpdateManyArgs>(args: SelectSubset<T, SCHOLARSHIPUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SCHOLARSHIP.
     * @param {SCHOLARSHIPUpsertArgs} args - Arguments to update or create a SCHOLARSHIP.
     * @example
     * // Update or create a SCHOLARSHIP
     * const sCHOLARSHIP = await prisma.sCHOLARSHIP.upsert({
     *   create: {
     *     // ... data to create a SCHOLARSHIP
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SCHOLARSHIP we want to update
     *   }
     * })
     */
    upsert<T extends SCHOLARSHIPUpsertArgs>(args: SelectSubset<T, SCHOLARSHIPUpsertArgs<ExtArgs>>): Prisma__SCHOLARSHIPClient<$Result.GetResult<Prisma.$SCHOLARSHIPPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SCHOLARSHIPS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SCHOLARSHIPCountArgs} args - Arguments to filter SCHOLARSHIPS to count.
     * @example
     * // Count the number of SCHOLARSHIPS
     * const count = await prisma.sCHOLARSHIP.count({
     *   where: {
     *     // ... the filter for the SCHOLARSHIPS we want to count
     *   }
     * })
    **/
    count<T extends SCHOLARSHIPCountArgs>(
      args?: Subset<T, SCHOLARSHIPCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SCHOLARSHIPCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SCHOLARSHIP.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SCHOLARSHIPAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SCHOLARSHIPAggregateArgs>(args: Subset<T, SCHOLARSHIPAggregateArgs>): Prisma.PrismaPromise<GetSCHOLARSHIPAggregateType<T>>

    /**
     * Group by SCHOLARSHIP.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SCHOLARSHIPGroupByArgs} args - Group by arguments.
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
      T extends SCHOLARSHIPGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SCHOLARSHIPGroupByArgs['orderBy'] }
        : { orderBy?: SCHOLARSHIPGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SCHOLARSHIPGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSCHOLARSHIPGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SCHOLARSHIP model
   */
  readonly fields: SCHOLARSHIPFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SCHOLARSHIP.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SCHOLARSHIPClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    APPLICATION<T extends SCHOLARSHIP$APPLICATIONArgs<ExtArgs> = {}>(args?: Subset<T, SCHOLARSHIP$APPLICATIONArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$APPLICATIONPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ELIGIBILITY_CRITERIA<T extends SCHOLARSHIP$ELIGIBILITY_CRITERIAArgs<ExtArgs> = {}>(args?: Subset<T, SCHOLARSHIP$ELIGIBILITY_CRITERIAArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ELIGIBILITY_CRITERIAPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    SCHOLARSHIP_PROVIDER<T extends SCHOLARSHIP$SCHOLARSHIP_PROVIDERArgs<ExtArgs> = {}>(args?: Subset<T, SCHOLARSHIP$SCHOLARSHIP_PROVIDERArgs<ExtArgs>>): Prisma__SCHOLARSHIP_PROVIDERClient<$Result.GetResult<Prisma.$SCHOLARSHIP_PROVIDERPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SCHOLARSHIP model
   */
  interface SCHOLARSHIPFieldRefs {
    readonly scholarship_id: FieldRef<"SCHOLARSHIP", 'Int'>
    readonly name: FieldRef<"SCHOLARSHIP", 'String'>
    readonly description: FieldRef<"SCHOLARSHIP", 'String'>
    readonly amount: FieldRef<"SCHOLARSHIP", 'Decimal'>
    readonly no_of_students: FieldRef<"SCHOLARSHIP", 'Int'>
    readonly application_deadline: FieldRef<"SCHOLARSHIP", 'DateTime'>
    readonly start_date: FieldRef<"SCHOLARSHIP", 'DateTime'>
    readonly end_date: FieldRef<"SCHOLARSHIP", 'DateTime'>
    readonly provider_id: FieldRef<"SCHOLARSHIP", 'Int'>
    readonly is_active: FieldRef<"SCHOLARSHIP", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * SCHOLARSHIP findUnique
   */
  export type SCHOLARSHIPFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SCHOLARSHIP
     */
    select?: SCHOLARSHIPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SCHOLARSHIP
     */
    omit?: SCHOLARSHIPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SCHOLARSHIPInclude<ExtArgs> | null
    /**
     * Filter, which SCHOLARSHIP to fetch.
     */
    where: SCHOLARSHIPWhereUniqueInput
  }

  /**
   * SCHOLARSHIP findUniqueOrThrow
   */
  export type SCHOLARSHIPFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SCHOLARSHIP
     */
    select?: SCHOLARSHIPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SCHOLARSHIP
     */
    omit?: SCHOLARSHIPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SCHOLARSHIPInclude<ExtArgs> | null
    /**
     * Filter, which SCHOLARSHIP to fetch.
     */
    where: SCHOLARSHIPWhereUniqueInput
  }

  /**
   * SCHOLARSHIP findFirst
   */
  export type SCHOLARSHIPFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SCHOLARSHIP
     */
    select?: SCHOLARSHIPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SCHOLARSHIP
     */
    omit?: SCHOLARSHIPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SCHOLARSHIPInclude<ExtArgs> | null
    /**
     * Filter, which SCHOLARSHIP to fetch.
     */
    where?: SCHOLARSHIPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SCHOLARSHIPS to fetch.
     */
    orderBy?: SCHOLARSHIPOrderByWithRelationInput | SCHOLARSHIPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SCHOLARSHIPS.
     */
    cursor?: SCHOLARSHIPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SCHOLARSHIPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SCHOLARSHIPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SCHOLARSHIPS.
     */
    distinct?: SCHOLARSHIPScalarFieldEnum | SCHOLARSHIPScalarFieldEnum[]
  }

  /**
   * SCHOLARSHIP findFirstOrThrow
   */
  export type SCHOLARSHIPFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SCHOLARSHIP
     */
    select?: SCHOLARSHIPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SCHOLARSHIP
     */
    omit?: SCHOLARSHIPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SCHOLARSHIPInclude<ExtArgs> | null
    /**
     * Filter, which SCHOLARSHIP to fetch.
     */
    where?: SCHOLARSHIPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SCHOLARSHIPS to fetch.
     */
    orderBy?: SCHOLARSHIPOrderByWithRelationInput | SCHOLARSHIPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SCHOLARSHIPS.
     */
    cursor?: SCHOLARSHIPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SCHOLARSHIPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SCHOLARSHIPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SCHOLARSHIPS.
     */
    distinct?: SCHOLARSHIPScalarFieldEnum | SCHOLARSHIPScalarFieldEnum[]
  }

  /**
   * SCHOLARSHIP findMany
   */
  export type SCHOLARSHIPFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SCHOLARSHIP
     */
    select?: SCHOLARSHIPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SCHOLARSHIP
     */
    omit?: SCHOLARSHIPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SCHOLARSHIPInclude<ExtArgs> | null
    /**
     * Filter, which SCHOLARSHIPS to fetch.
     */
    where?: SCHOLARSHIPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SCHOLARSHIPS to fetch.
     */
    orderBy?: SCHOLARSHIPOrderByWithRelationInput | SCHOLARSHIPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SCHOLARSHIPS.
     */
    cursor?: SCHOLARSHIPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SCHOLARSHIPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SCHOLARSHIPS.
     */
    skip?: number
    distinct?: SCHOLARSHIPScalarFieldEnum | SCHOLARSHIPScalarFieldEnum[]
  }

  /**
   * SCHOLARSHIP create
   */
  export type SCHOLARSHIPCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SCHOLARSHIP
     */
    select?: SCHOLARSHIPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SCHOLARSHIP
     */
    omit?: SCHOLARSHIPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SCHOLARSHIPInclude<ExtArgs> | null
    /**
     * The data needed to create a SCHOLARSHIP.
     */
    data?: XOR<SCHOLARSHIPCreateInput, SCHOLARSHIPUncheckedCreateInput>
  }

  /**
   * SCHOLARSHIP createMany
   */
  export type SCHOLARSHIPCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SCHOLARSHIPS.
     */
    data: SCHOLARSHIPCreateManyInput | SCHOLARSHIPCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SCHOLARSHIP update
   */
  export type SCHOLARSHIPUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SCHOLARSHIP
     */
    select?: SCHOLARSHIPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SCHOLARSHIP
     */
    omit?: SCHOLARSHIPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SCHOLARSHIPInclude<ExtArgs> | null
    /**
     * The data needed to update a SCHOLARSHIP.
     */
    data: XOR<SCHOLARSHIPUpdateInput, SCHOLARSHIPUncheckedUpdateInput>
    /**
     * Choose, which SCHOLARSHIP to update.
     */
    where: SCHOLARSHIPWhereUniqueInput
  }

  /**
   * SCHOLARSHIP updateMany
   */
  export type SCHOLARSHIPUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SCHOLARSHIPS.
     */
    data: XOR<SCHOLARSHIPUpdateManyMutationInput, SCHOLARSHIPUncheckedUpdateManyInput>
    /**
     * Filter which SCHOLARSHIPS to update
     */
    where?: SCHOLARSHIPWhereInput
    /**
     * Limit how many SCHOLARSHIPS to update.
     */
    limit?: number
  }

  /**
   * SCHOLARSHIP upsert
   */
  export type SCHOLARSHIPUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SCHOLARSHIP
     */
    select?: SCHOLARSHIPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SCHOLARSHIP
     */
    omit?: SCHOLARSHIPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SCHOLARSHIPInclude<ExtArgs> | null
    /**
     * The filter to search for the SCHOLARSHIP to update in case it exists.
     */
    where: SCHOLARSHIPWhereUniqueInput
    /**
     * In case the SCHOLARSHIP found by the `where` argument doesn't exist, create a new SCHOLARSHIP with this data.
     */
    create: XOR<SCHOLARSHIPCreateInput, SCHOLARSHIPUncheckedCreateInput>
    /**
     * In case the SCHOLARSHIP was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SCHOLARSHIPUpdateInput, SCHOLARSHIPUncheckedUpdateInput>
  }

  /**
   * SCHOLARSHIP delete
   */
  export type SCHOLARSHIPDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SCHOLARSHIP
     */
    select?: SCHOLARSHIPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SCHOLARSHIP
     */
    omit?: SCHOLARSHIPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SCHOLARSHIPInclude<ExtArgs> | null
    /**
     * Filter which SCHOLARSHIP to delete.
     */
    where: SCHOLARSHIPWhereUniqueInput
  }

  /**
   * SCHOLARSHIP deleteMany
   */
  export type SCHOLARSHIPDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SCHOLARSHIPS to delete
     */
    where?: SCHOLARSHIPWhereInput
    /**
     * Limit how many SCHOLARSHIPS to delete.
     */
    limit?: number
  }

  /**
   * SCHOLARSHIP.APPLICATION
   */
  export type SCHOLARSHIP$APPLICATIONArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APPLICATION
     */
    select?: APPLICATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the APPLICATION
     */
    omit?: APPLICATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: APPLICATIONInclude<ExtArgs> | null
    where?: APPLICATIONWhereInput
    orderBy?: APPLICATIONOrderByWithRelationInput | APPLICATIONOrderByWithRelationInput[]
    cursor?: APPLICATIONWhereUniqueInput
    take?: number
    skip?: number
    distinct?: APPLICATIONScalarFieldEnum | APPLICATIONScalarFieldEnum[]
  }

  /**
   * SCHOLARSHIP.ELIGIBILITY_CRITERIA
   */
  export type SCHOLARSHIP$ELIGIBILITY_CRITERIAArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ELIGIBILITY_CRITERIA
     */
    select?: ELIGIBILITY_CRITERIASelect<ExtArgs> | null
    /**
     * Omit specific fields from the ELIGIBILITY_CRITERIA
     */
    omit?: ELIGIBILITY_CRITERIAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ELIGIBILITY_CRITERIAInclude<ExtArgs> | null
    where?: ELIGIBILITY_CRITERIAWhereInput
    orderBy?: ELIGIBILITY_CRITERIAOrderByWithRelationInput | ELIGIBILITY_CRITERIAOrderByWithRelationInput[]
    cursor?: ELIGIBILITY_CRITERIAWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ELIGIBILITY_CRITERIAScalarFieldEnum | ELIGIBILITY_CRITERIAScalarFieldEnum[]
  }

  /**
   * SCHOLARSHIP.SCHOLARSHIP_PROVIDER
   */
  export type SCHOLARSHIP$SCHOLARSHIP_PROVIDERArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SCHOLARSHIP_PROVIDER
     */
    select?: SCHOLARSHIP_PROVIDERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SCHOLARSHIP_PROVIDER
     */
    omit?: SCHOLARSHIP_PROVIDEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SCHOLARSHIP_PROVIDERInclude<ExtArgs> | null
    where?: SCHOLARSHIP_PROVIDERWhereInput
  }

  /**
   * SCHOLARSHIP without action
   */
  export type SCHOLARSHIPDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SCHOLARSHIP
     */
    select?: SCHOLARSHIPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SCHOLARSHIP
     */
    omit?: SCHOLARSHIPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SCHOLARSHIPInclude<ExtArgs> | null
  }


  /**
   * Model SCHOLARSHIP_PROVIDER
   */

  export type AggregateSCHOLARSHIP_PROVIDER = {
    _count: SCHOLARSHIP_PROVIDERCountAggregateOutputType | null
    _avg: SCHOLARSHIP_PROVIDERAvgAggregateOutputType | null
    _sum: SCHOLARSHIP_PROVIDERSumAggregateOutputType | null
    _min: SCHOLARSHIP_PROVIDERMinAggregateOutputType | null
    _max: SCHOLARSHIP_PROVIDERMaxAggregateOutputType | null
  }

  export type SCHOLARSHIP_PROVIDERAvgAggregateOutputType = {
    provider_id: number | null
  }

  export type SCHOLARSHIP_PROVIDERSumAggregateOutputType = {
    provider_id: number | null
  }

  export type SCHOLARSHIP_PROVIDERMinAggregateOutputType = {
    provider_id: number | null
    name: string | null
    contact_person: string | null
    phone: string | null
    email: string | null
    address: string | null
  }

  export type SCHOLARSHIP_PROVIDERMaxAggregateOutputType = {
    provider_id: number | null
    name: string | null
    contact_person: string | null
    phone: string | null
    email: string | null
    address: string | null
  }

  export type SCHOLARSHIP_PROVIDERCountAggregateOutputType = {
    provider_id: number
    name: number
    contact_person: number
    phone: number
    email: number
    address: number
    _all: number
  }


  export type SCHOLARSHIP_PROVIDERAvgAggregateInputType = {
    provider_id?: true
  }

  export type SCHOLARSHIP_PROVIDERSumAggregateInputType = {
    provider_id?: true
  }

  export type SCHOLARSHIP_PROVIDERMinAggregateInputType = {
    provider_id?: true
    name?: true
    contact_person?: true
    phone?: true
    email?: true
    address?: true
  }

  export type SCHOLARSHIP_PROVIDERMaxAggregateInputType = {
    provider_id?: true
    name?: true
    contact_person?: true
    phone?: true
    email?: true
    address?: true
  }

  export type SCHOLARSHIP_PROVIDERCountAggregateInputType = {
    provider_id?: true
    name?: true
    contact_person?: true
    phone?: true
    email?: true
    address?: true
    _all?: true
  }

  export type SCHOLARSHIP_PROVIDERAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SCHOLARSHIP_PROVIDER to aggregate.
     */
    where?: SCHOLARSHIP_PROVIDERWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SCHOLARSHIP_PROVIDERS to fetch.
     */
    orderBy?: SCHOLARSHIP_PROVIDEROrderByWithRelationInput | SCHOLARSHIP_PROVIDEROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SCHOLARSHIP_PROVIDERWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SCHOLARSHIP_PROVIDERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SCHOLARSHIP_PROVIDERS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SCHOLARSHIP_PROVIDERS
    **/
    _count?: true | SCHOLARSHIP_PROVIDERCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SCHOLARSHIP_PROVIDERAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SCHOLARSHIP_PROVIDERSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SCHOLARSHIP_PROVIDERMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SCHOLARSHIP_PROVIDERMaxAggregateInputType
  }

  export type GetSCHOLARSHIP_PROVIDERAggregateType<T extends SCHOLARSHIP_PROVIDERAggregateArgs> = {
        [P in keyof T & keyof AggregateSCHOLARSHIP_PROVIDER]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSCHOLARSHIP_PROVIDER[P]>
      : GetScalarType<T[P], AggregateSCHOLARSHIP_PROVIDER[P]>
  }




  export type SCHOLARSHIP_PROVIDERGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SCHOLARSHIP_PROVIDERWhereInput
    orderBy?: SCHOLARSHIP_PROVIDEROrderByWithAggregationInput | SCHOLARSHIP_PROVIDEROrderByWithAggregationInput[]
    by: SCHOLARSHIP_PROVIDERScalarFieldEnum[] | SCHOLARSHIP_PROVIDERScalarFieldEnum
    having?: SCHOLARSHIP_PROVIDERScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SCHOLARSHIP_PROVIDERCountAggregateInputType | true
    _avg?: SCHOLARSHIP_PROVIDERAvgAggregateInputType
    _sum?: SCHOLARSHIP_PROVIDERSumAggregateInputType
    _min?: SCHOLARSHIP_PROVIDERMinAggregateInputType
    _max?: SCHOLARSHIP_PROVIDERMaxAggregateInputType
  }

  export type SCHOLARSHIP_PROVIDERGroupByOutputType = {
    provider_id: number
    name: string | null
    contact_person: string | null
    phone: string | null
    email: string | null
    address: string | null
    _count: SCHOLARSHIP_PROVIDERCountAggregateOutputType | null
    _avg: SCHOLARSHIP_PROVIDERAvgAggregateOutputType | null
    _sum: SCHOLARSHIP_PROVIDERSumAggregateOutputType | null
    _min: SCHOLARSHIP_PROVIDERMinAggregateOutputType | null
    _max: SCHOLARSHIP_PROVIDERMaxAggregateOutputType | null
  }

  type GetSCHOLARSHIP_PROVIDERGroupByPayload<T extends SCHOLARSHIP_PROVIDERGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SCHOLARSHIP_PROVIDERGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SCHOLARSHIP_PROVIDERGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SCHOLARSHIP_PROVIDERGroupByOutputType[P]>
            : GetScalarType<T[P], SCHOLARSHIP_PROVIDERGroupByOutputType[P]>
        }
      >
    >


  export type SCHOLARSHIP_PROVIDERSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    provider_id?: boolean
    name?: boolean
    contact_person?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    SCHOLARSHIP?: boolean | SCHOLARSHIP_PROVIDER$SCHOLARSHIPArgs<ExtArgs>
    _count?: boolean | SCHOLARSHIP_PROVIDERCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sCHOLARSHIP_PROVIDER"]>



  export type SCHOLARSHIP_PROVIDERSelectScalar = {
    provider_id?: boolean
    name?: boolean
    contact_person?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
  }

  export type SCHOLARSHIP_PROVIDEROmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"provider_id" | "name" | "contact_person" | "phone" | "email" | "address", ExtArgs["result"]["sCHOLARSHIP_PROVIDER"]>
  export type SCHOLARSHIP_PROVIDERInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SCHOLARSHIP?: boolean | SCHOLARSHIP_PROVIDER$SCHOLARSHIPArgs<ExtArgs>
    _count?: boolean | SCHOLARSHIP_PROVIDERCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SCHOLARSHIP_PROVIDERPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SCHOLARSHIP_PROVIDER"
    objects: {
      SCHOLARSHIP: Prisma.$SCHOLARSHIPPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      provider_id: number
      name: string | null
      contact_person: string | null
      phone: string | null
      email: string | null
      address: string | null
    }, ExtArgs["result"]["sCHOLARSHIP_PROVIDER"]>
    composites: {}
  }

  type SCHOLARSHIP_PROVIDERGetPayload<S extends boolean | null | undefined | SCHOLARSHIP_PROVIDERDefaultArgs> = $Result.GetResult<Prisma.$SCHOLARSHIP_PROVIDERPayload, S>

  type SCHOLARSHIP_PROVIDERCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SCHOLARSHIP_PROVIDERFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SCHOLARSHIP_PROVIDERCountAggregateInputType | true
    }

  export interface SCHOLARSHIP_PROVIDERDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SCHOLARSHIP_PROVIDER'], meta: { name: 'SCHOLARSHIP_PROVIDER' } }
    /**
     * Find zero or one SCHOLARSHIP_PROVIDER that matches the filter.
     * @param {SCHOLARSHIP_PROVIDERFindUniqueArgs} args - Arguments to find a SCHOLARSHIP_PROVIDER
     * @example
     * // Get one SCHOLARSHIP_PROVIDER
     * const sCHOLARSHIP_PROVIDER = await prisma.sCHOLARSHIP_PROVIDER.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SCHOLARSHIP_PROVIDERFindUniqueArgs>(args: SelectSubset<T, SCHOLARSHIP_PROVIDERFindUniqueArgs<ExtArgs>>): Prisma__SCHOLARSHIP_PROVIDERClient<$Result.GetResult<Prisma.$SCHOLARSHIP_PROVIDERPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SCHOLARSHIP_PROVIDER that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SCHOLARSHIP_PROVIDERFindUniqueOrThrowArgs} args - Arguments to find a SCHOLARSHIP_PROVIDER
     * @example
     * // Get one SCHOLARSHIP_PROVIDER
     * const sCHOLARSHIP_PROVIDER = await prisma.sCHOLARSHIP_PROVIDER.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SCHOLARSHIP_PROVIDERFindUniqueOrThrowArgs>(args: SelectSubset<T, SCHOLARSHIP_PROVIDERFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SCHOLARSHIP_PROVIDERClient<$Result.GetResult<Prisma.$SCHOLARSHIP_PROVIDERPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SCHOLARSHIP_PROVIDER that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SCHOLARSHIP_PROVIDERFindFirstArgs} args - Arguments to find a SCHOLARSHIP_PROVIDER
     * @example
     * // Get one SCHOLARSHIP_PROVIDER
     * const sCHOLARSHIP_PROVIDER = await prisma.sCHOLARSHIP_PROVIDER.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SCHOLARSHIP_PROVIDERFindFirstArgs>(args?: SelectSubset<T, SCHOLARSHIP_PROVIDERFindFirstArgs<ExtArgs>>): Prisma__SCHOLARSHIP_PROVIDERClient<$Result.GetResult<Prisma.$SCHOLARSHIP_PROVIDERPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SCHOLARSHIP_PROVIDER that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SCHOLARSHIP_PROVIDERFindFirstOrThrowArgs} args - Arguments to find a SCHOLARSHIP_PROVIDER
     * @example
     * // Get one SCHOLARSHIP_PROVIDER
     * const sCHOLARSHIP_PROVIDER = await prisma.sCHOLARSHIP_PROVIDER.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SCHOLARSHIP_PROVIDERFindFirstOrThrowArgs>(args?: SelectSubset<T, SCHOLARSHIP_PROVIDERFindFirstOrThrowArgs<ExtArgs>>): Prisma__SCHOLARSHIP_PROVIDERClient<$Result.GetResult<Prisma.$SCHOLARSHIP_PROVIDERPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SCHOLARSHIP_PROVIDERS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SCHOLARSHIP_PROVIDERFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SCHOLARSHIP_PROVIDERS
     * const sCHOLARSHIP_PROVIDERS = await prisma.sCHOLARSHIP_PROVIDER.findMany()
     * 
     * // Get first 10 SCHOLARSHIP_PROVIDERS
     * const sCHOLARSHIP_PROVIDERS = await prisma.sCHOLARSHIP_PROVIDER.findMany({ take: 10 })
     * 
     * // Only select the `provider_id`
     * const sCHOLARSHIP_PROVIDERWithProvider_idOnly = await prisma.sCHOLARSHIP_PROVIDER.findMany({ select: { provider_id: true } })
     * 
     */
    findMany<T extends SCHOLARSHIP_PROVIDERFindManyArgs>(args?: SelectSubset<T, SCHOLARSHIP_PROVIDERFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SCHOLARSHIP_PROVIDERPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SCHOLARSHIP_PROVIDER.
     * @param {SCHOLARSHIP_PROVIDERCreateArgs} args - Arguments to create a SCHOLARSHIP_PROVIDER.
     * @example
     * // Create one SCHOLARSHIP_PROVIDER
     * const SCHOLARSHIP_PROVIDER = await prisma.sCHOLARSHIP_PROVIDER.create({
     *   data: {
     *     // ... data to create a SCHOLARSHIP_PROVIDER
     *   }
     * })
     * 
     */
    create<T extends SCHOLARSHIP_PROVIDERCreateArgs>(args: SelectSubset<T, SCHOLARSHIP_PROVIDERCreateArgs<ExtArgs>>): Prisma__SCHOLARSHIP_PROVIDERClient<$Result.GetResult<Prisma.$SCHOLARSHIP_PROVIDERPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SCHOLARSHIP_PROVIDERS.
     * @param {SCHOLARSHIP_PROVIDERCreateManyArgs} args - Arguments to create many SCHOLARSHIP_PROVIDERS.
     * @example
     * // Create many SCHOLARSHIP_PROVIDERS
     * const sCHOLARSHIP_PROVIDER = await prisma.sCHOLARSHIP_PROVIDER.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SCHOLARSHIP_PROVIDERCreateManyArgs>(args?: SelectSubset<T, SCHOLARSHIP_PROVIDERCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SCHOLARSHIP_PROVIDER.
     * @param {SCHOLARSHIP_PROVIDERDeleteArgs} args - Arguments to delete one SCHOLARSHIP_PROVIDER.
     * @example
     * // Delete one SCHOLARSHIP_PROVIDER
     * const SCHOLARSHIP_PROVIDER = await prisma.sCHOLARSHIP_PROVIDER.delete({
     *   where: {
     *     // ... filter to delete one SCHOLARSHIP_PROVIDER
     *   }
     * })
     * 
     */
    delete<T extends SCHOLARSHIP_PROVIDERDeleteArgs>(args: SelectSubset<T, SCHOLARSHIP_PROVIDERDeleteArgs<ExtArgs>>): Prisma__SCHOLARSHIP_PROVIDERClient<$Result.GetResult<Prisma.$SCHOLARSHIP_PROVIDERPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SCHOLARSHIP_PROVIDER.
     * @param {SCHOLARSHIP_PROVIDERUpdateArgs} args - Arguments to update one SCHOLARSHIP_PROVIDER.
     * @example
     * // Update one SCHOLARSHIP_PROVIDER
     * const sCHOLARSHIP_PROVIDER = await prisma.sCHOLARSHIP_PROVIDER.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SCHOLARSHIP_PROVIDERUpdateArgs>(args: SelectSubset<T, SCHOLARSHIP_PROVIDERUpdateArgs<ExtArgs>>): Prisma__SCHOLARSHIP_PROVIDERClient<$Result.GetResult<Prisma.$SCHOLARSHIP_PROVIDERPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SCHOLARSHIP_PROVIDERS.
     * @param {SCHOLARSHIP_PROVIDERDeleteManyArgs} args - Arguments to filter SCHOLARSHIP_PROVIDERS to delete.
     * @example
     * // Delete a few SCHOLARSHIP_PROVIDERS
     * const { count } = await prisma.sCHOLARSHIP_PROVIDER.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SCHOLARSHIP_PROVIDERDeleteManyArgs>(args?: SelectSubset<T, SCHOLARSHIP_PROVIDERDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SCHOLARSHIP_PROVIDERS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SCHOLARSHIP_PROVIDERUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SCHOLARSHIP_PROVIDERS
     * const sCHOLARSHIP_PROVIDER = await prisma.sCHOLARSHIP_PROVIDER.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SCHOLARSHIP_PROVIDERUpdateManyArgs>(args: SelectSubset<T, SCHOLARSHIP_PROVIDERUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SCHOLARSHIP_PROVIDER.
     * @param {SCHOLARSHIP_PROVIDERUpsertArgs} args - Arguments to update or create a SCHOLARSHIP_PROVIDER.
     * @example
     * // Update or create a SCHOLARSHIP_PROVIDER
     * const sCHOLARSHIP_PROVIDER = await prisma.sCHOLARSHIP_PROVIDER.upsert({
     *   create: {
     *     // ... data to create a SCHOLARSHIP_PROVIDER
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SCHOLARSHIP_PROVIDER we want to update
     *   }
     * })
     */
    upsert<T extends SCHOLARSHIP_PROVIDERUpsertArgs>(args: SelectSubset<T, SCHOLARSHIP_PROVIDERUpsertArgs<ExtArgs>>): Prisma__SCHOLARSHIP_PROVIDERClient<$Result.GetResult<Prisma.$SCHOLARSHIP_PROVIDERPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SCHOLARSHIP_PROVIDERS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SCHOLARSHIP_PROVIDERCountArgs} args - Arguments to filter SCHOLARSHIP_PROVIDERS to count.
     * @example
     * // Count the number of SCHOLARSHIP_PROVIDERS
     * const count = await prisma.sCHOLARSHIP_PROVIDER.count({
     *   where: {
     *     // ... the filter for the SCHOLARSHIP_PROVIDERS we want to count
     *   }
     * })
    **/
    count<T extends SCHOLARSHIP_PROVIDERCountArgs>(
      args?: Subset<T, SCHOLARSHIP_PROVIDERCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SCHOLARSHIP_PROVIDERCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SCHOLARSHIP_PROVIDER.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SCHOLARSHIP_PROVIDERAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SCHOLARSHIP_PROVIDERAggregateArgs>(args: Subset<T, SCHOLARSHIP_PROVIDERAggregateArgs>): Prisma.PrismaPromise<GetSCHOLARSHIP_PROVIDERAggregateType<T>>

    /**
     * Group by SCHOLARSHIP_PROVIDER.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SCHOLARSHIP_PROVIDERGroupByArgs} args - Group by arguments.
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
      T extends SCHOLARSHIP_PROVIDERGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SCHOLARSHIP_PROVIDERGroupByArgs['orderBy'] }
        : { orderBy?: SCHOLARSHIP_PROVIDERGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SCHOLARSHIP_PROVIDERGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSCHOLARSHIP_PROVIDERGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SCHOLARSHIP_PROVIDER model
   */
  readonly fields: SCHOLARSHIP_PROVIDERFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SCHOLARSHIP_PROVIDER.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SCHOLARSHIP_PROVIDERClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    SCHOLARSHIP<T extends SCHOLARSHIP_PROVIDER$SCHOLARSHIPArgs<ExtArgs> = {}>(args?: Subset<T, SCHOLARSHIP_PROVIDER$SCHOLARSHIPArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SCHOLARSHIPPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SCHOLARSHIP_PROVIDER model
   */
  interface SCHOLARSHIP_PROVIDERFieldRefs {
    readonly provider_id: FieldRef<"SCHOLARSHIP_PROVIDER", 'Int'>
    readonly name: FieldRef<"SCHOLARSHIP_PROVIDER", 'String'>
    readonly contact_person: FieldRef<"SCHOLARSHIP_PROVIDER", 'String'>
    readonly phone: FieldRef<"SCHOLARSHIP_PROVIDER", 'String'>
    readonly email: FieldRef<"SCHOLARSHIP_PROVIDER", 'String'>
    readonly address: FieldRef<"SCHOLARSHIP_PROVIDER", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SCHOLARSHIP_PROVIDER findUnique
   */
  export type SCHOLARSHIP_PROVIDERFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SCHOLARSHIP_PROVIDER
     */
    select?: SCHOLARSHIP_PROVIDERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SCHOLARSHIP_PROVIDER
     */
    omit?: SCHOLARSHIP_PROVIDEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SCHOLARSHIP_PROVIDERInclude<ExtArgs> | null
    /**
     * Filter, which SCHOLARSHIP_PROVIDER to fetch.
     */
    where: SCHOLARSHIP_PROVIDERWhereUniqueInput
  }

  /**
   * SCHOLARSHIP_PROVIDER findUniqueOrThrow
   */
  export type SCHOLARSHIP_PROVIDERFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SCHOLARSHIP_PROVIDER
     */
    select?: SCHOLARSHIP_PROVIDERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SCHOLARSHIP_PROVIDER
     */
    omit?: SCHOLARSHIP_PROVIDEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SCHOLARSHIP_PROVIDERInclude<ExtArgs> | null
    /**
     * Filter, which SCHOLARSHIP_PROVIDER to fetch.
     */
    where: SCHOLARSHIP_PROVIDERWhereUniqueInput
  }

  /**
   * SCHOLARSHIP_PROVIDER findFirst
   */
  export type SCHOLARSHIP_PROVIDERFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SCHOLARSHIP_PROVIDER
     */
    select?: SCHOLARSHIP_PROVIDERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SCHOLARSHIP_PROVIDER
     */
    omit?: SCHOLARSHIP_PROVIDEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SCHOLARSHIP_PROVIDERInclude<ExtArgs> | null
    /**
     * Filter, which SCHOLARSHIP_PROVIDER to fetch.
     */
    where?: SCHOLARSHIP_PROVIDERWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SCHOLARSHIP_PROVIDERS to fetch.
     */
    orderBy?: SCHOLARSHIP_PROVIDEROrderByWithRelationInput | SCHOLARSHIP_PROVIDEROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SCHOLARSHIP_PROVIDERS.
     */
    cursor?: SCHOLARSHIP_PROVIDERWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SCHOLARSHIP_PROVIDERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SCHOLARSHIP_PROVIDERS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SCHOLARSHIP_PROVIDERS.
     */
    distinct?: SCHOLARSHIP_PROVIDERScalarFieldEnum | SCHOLARSHIP_PROVIDERScalarFieldEnum[]
  }

  /**
   * SCHOLARSHIP_PROVIDER findFirstOrThrow
   */
  export type SCHOLARSHIP_PROVIDERFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SCHOLARSHIP_PROVIDER
     */
    select?: SCHOLARSHIP_PROVIDERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SCHOLARSHIP_PROVIDER
     */
    omit?: SCHOLARSHIP_PROVIDEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SCHOLARSHIP_PROVIDERInclude<ExtArgs> | null
    /**
     * Filter, which SCHOLARSHIP_PROVIDER to fetch.
     */
    where?: SCHOLARSHIP_PROVIDERWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SCHOLARSHIP_PROVIDERS to fetch.
     */
    orderBy?: SCHOLARSHIP_PROVIDEROrderByWithRelationInput | SCHOLARSHIP_PROVIDEROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SCHOLARSHIP_PROVIDERS.
     */
    cursor?: SCHOLARSHIP_PROVIDERWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SCHOLARSHIP_PROVIDERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SCHOLARSHIP_PROVIDERS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SCHOLARSHIP_PROVIDERS.
     */
    distinct?: SCHOLARSHIP_PROVIDERScalarFieldEnum | SCHOLARSHIP_PROVIDERScalarFieldEnum[]
  }

  /**
   * SCHOLARSHIP_PROVIDER findMany
   */
  export type SCHOLARSHIP_PROVIDERFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SCHOLARSHIP_PROVIDER
     */
    select?: SCHOLARSHIP_PROVIDERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SCHOLARSHIP_PROVIDER
     */
    omit?: SCHOLARSHIP_PROVIDEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SCHOLARSHIP_PROVIDERInclude<ExtArgs> | null
    /**
     * Filter, which SCHOLARSHIP_PROVIDERS to fetch.
     */
    where?: SCHOLARSHIP_PROVIDERWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SCHOLARSHIP_PROVIDERS to fetch.
     */
    orderBy?: SCHOLARSHIP_PROVIDEROrderByWithRelationInput | SCHOLARSHIP_PROVIDEROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SCHOLARSHIP_PROVIDERS.
     */
    cursor?: SCHOLARSHIP_PROVIDERWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SCHOLARSHIP_PROVIDERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SCHOLARSHIP_PROVIDERS.
     */
    skip?: number
    distinct?: SCHOLARSHIP_PROVIDERScalarFieldEnum | SCHOLARSHIP_PROVIDERScalarFieldEnum[]
  }

  /**
   * SCHOLARSHIP_PROVIDER create
   */
  export type SCHOLARSHIP_PROVIDERCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SCHOLARSHIP_PROVIDER
     */
    select?: SCHOLARSHIP_PROVIDERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SCHOLARSHIP_PROVIDER
     */
    omit?: SCHOLARSHIP_PROVIDEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SCHOLARSHIP_PROVIDERInclude<ExtArgs> | null
    /**
     * The data needed to create a SCHOLARSHIP_PROVIDER.
     */
    data?: XOR<SCHOLARSHIP_PROVIDERCreateInput, SCHOLARSHIP_PROVIDERUncheckedCreateInput>
  }

  /**
   * SCHOLARSHIP_PROVIDER createMany
   */
  export type SCHOLARSHIP_PROVIDERCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SCHOLARSHIP_PROVIDERS.
     */
    data: SCHOLARSHIP_PROVIDERCreateManyInput | SCHOLARSHIP_PROVIDERCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SCHOLARSHIP_PROVIDER update
   */
  export type SCHOLARSHIP_PROVIDERUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SCHOLARSHIP_PROVIDER
     */
    select?: SCHOLARSHIP_PROVIDERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SCHOLARSHIP_PROVIDER
     */
    omit?: SCHOLARSHIP_PROVIDEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SCHOLARSHIP_PROVIDERInclude<ExtArgs> | null
    /**
     * The data needed to update a SCHOLARSHIP_PROVIDER.
     */
    data: XOR<SCHOLARSHIP_PROVIDERUpdateInput, SCHOLARSHIP_PROVIDERUncheckedUpdateInput>
    /**
     * Choose, which SCHOLARSHIP_PROVIDER to update.
     */
    where: SCHOLARSHIP_PROVIDERWhereUniqueInput
  }

  /**
   * SCHOLARSHIP_PROVIDER updateMany
   */
  export type SCHOLARSHIP_PROVIDERUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SCHOLARSHIP_PROVIDERS.
     */
    data: XOR<SCHOLARSHIP_PROVIDERUpdateManyMutationInput, SCHOLARSHIP_PROVIDERUncheckedUpdateManyInput>
    /**
     * Filter which SCHOLARSHIP_PROVIDERS to update
     */
    where?: SCHOLARSHIP_PROVIDERWhereInput
    /**
     * Limit how many SCHOLARSHIP_PROVIDERS to update.
     */
    limit?: number
  }

  /**
   * SCHOLARSHIP_PROVIDER upsert
   */
  export type SCHOLARSHIP_PROVIDERUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SCHOLARSHIP_PROVIDER
     */
    select?: SCHOLARSHIP_PROVIDERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SCHOLARSHIP_PROVIDER
     */
    omit?: SCHOLARSHIP_PROVIDEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SCHOLARSHIP_PROVIDERInclude<ExtArgs> | null
    /**
     * The filter to search for the SCHOLARSHIP_PROVIDER to update in case it exists.
     */
    where: SCHOLARSHIP_PROVIDERWhereUniqueInput
    /**
     * In case the SCHOLARSHIP_PROVIDER found by the `where` argument doesn't exist, create a new SCHOLARSHIP_PROVIDER with this data.
     */
    create: XOR<SCHOLARSHIP_PROVIDERCreateInput, SCHOLARSHIP_PROVIDERUncheckedCreateInput>
    /**
     * In case the SCHOLARSHIP_PROVIDER was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SCHOLARSHIP_PROVIDERUpdateInput, SCHOLARSHIP_PROVIDERUncheckedUpdateInput>
  }

  /**
   * SCHOLARSHIP_PROVIDER delete
   */
  export type SCHOLARSHIP_PROVIDERDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SCHOLARSHIP_PROVIDER
     */
    select?: SCHOLARSHIP_PROVIDERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SCHOLARSHIP_PROVIDER
     */
    omit?: SCHOLARSHIP_PROVIDEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SCHOLARSHIP_PROVIDERInclude<ExtArgs> | null
    /**
     * Filter which SCHOLARSHIP_PROVIDER to delete.
     */
    where: SCHOLARSHIP_PROVIDERWhereUniqueInput
  }

  /**
   * SCHOLARSHIP_PROVIDER deleteMany
   */
  export type SCHOLARSHIP_PROVIDERDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SCHOLARSHIP_PROVIDERS to delete
     */
    where?: SCHOLARSHIP_PROVIDERWhereInput
    /**
     * Limit how many SCHOLARSHIP_PROVIDERS to delete.
     */
    limit?: number
  }

  /**
   * SCHOLARSHIP_PROVIDER.SCHOLARSHIP
   */
  export type SCHOLARSHIP_PROVIDER$SCHOLARSHIPArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SCHOLARSHIP
     */
    select?: SCHOLARSHIPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SCHOLARSHIP
     */
    omit?: SCHOLARSHIPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SCHOLARSHIPInclude<ExtArgs> | null
    where?: SCHOLARSHIPWhereInput
    orderBy?: SCHOLARSHIPOrderByWithRelationInput | SCHOLARSHIPOrderByWithRelationInput[]
    cursor?: SCHOLARSHIPWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SCHOLARSHIPScalarFieldEnum | SCHOLARSHIPScalarFieldEnum[]
  }

  /**
   * SCHOLARSHIP_PROVIDER without action
   */
  export type SCHOLARSHIP_PROVIDERDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SCHOLARSHIP_PROVIDER
     */
    select?: SCHOLARSHIP_PROVIDERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SCHOLARSHIP_PROVIDER
     */
    omit?: SCHOLARSHIP_PROVIDEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SCHOLARSHIP_PROVIDERInclude<ExtArgs> | null
  }


  /**
   * Model SIBLING_EDUCATION
   */

  export type AggregateSIBLING_EDUCATION = {
    _count: SIBLING_EDUCATIONCountAggregateOutputType | null
    _avg: SIBLING_EDUCATIONAvgAggregateOutputType | null
    _sum: SIBLING_EDUCATIONSumAggregateOutputType | null
    _min: SIBLING_EDUCATIONMinAggregateOutputType | null
    _max: SIBLING_EDUCATIONMaxAggregateOutputType | null
  }

  export type SIBLING_EDUCATIONAvgAggregateOutputType = {
    education_id: number | null
    student_id: number | null
    member_id: number | null
  }

  export type SIBLING_EDUCATIONSumAggregateOutputType = {
    education_id: number | null
    student_id: number | null
    member_id: number | null
  }

  export type SIBLING_EDUCATIONMinAggregateOutputType = {
    education_id: number | null
    student_id: number | null
    member_id: number | null
    institution: string | null
    year_grade: string | null
    registration_course: string | null
  }

  export type SIBLING_EDUCATIONMaxAggregateOutputType = {
    education_id: number | null
    student_id: number | null
    member_id: number | null
    institution: string | null
    year_grade: string | null
    registration_course: string | null
  }

  export type SIBLING_EDUCATIONCountAggregateOutputType = {
    education_id: number
    student_id: number
    member_id: number
    institution: number
    year_grade: number
    registration_course: number
    _all: number
  }


  export type SIBLING_EDUCATIONAvgAggregateInputType = {
    education_id?: true
    student_id?: true
    member_id?: true
  }

  export type SIBLING_EDUCATIONSumAggregateInputType = {
    education_id?: true
    student_id?: true
    member_id?: true
  }

  export type SIBLING_EDUCATIONMinAggregateInputType = {
    education_id?: true
    student_id?: true
    member_id?: true
    institution?: true
    year_grade?: true
    registration_course?: true
  }

  export type SIBLING_EDUCATIONMaxAggregateInputType = {
    education_id?: true
    student_id?: true
    member_id?: true
    institution?: true
    year_grade?: true
    registration_course?: true
  }

  export type SIBLING_EDUCATIONCountAggregateInputType = {
    education_id?: true
    student_id?: true
    member_id?: true
    institution?: true
    year_grade?: true
    registration_course?: true
    _all?: true
  }

  export type SIBLING_EDUCATIONAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SIBLING_EDUCATION to aggregate.
     */
    where?: SIBLING_EDUCATIONWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SIBLING_EDUCATIONS to fetch.
     */
    orderBy?: SIBLING_EDUCATIONOrderByWithRelationInput | SIBLING_EDUCATIONOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SIBLING_EDUCATIONWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SIBLING_EDUCATIONS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SIBLING_EDUCATIONS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SIBLING_EDUCATIONS
    **/
    _count?: true | SIBLING_EDUCATIONCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SIBLING_EDUCATIONAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SIBLING_EDUCATIONSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SIBLING_EDUCATIONMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SIBLING_EDUCATIONMaxAggregateInputType
  }

  export type GetSIBLING_EDUCATIONAggregateType<T extends SIBLING_EDUCATIONAggregateArgs> = {
        [P in keyof T & keyof AggregateSIBLING_EDUCATION]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSIBLING_EDUCATION[P]>
      : GetScalarType<T[P], AggregateSIBLING_EDUCATION[P]>
  }




  export type SIBLING_EDUCATIONGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SIBLING_EDUCATIONWhereInput
    orderBy?: SIBLING_EDUCATIONOrderByWithAggregationInput | SIBLING_EDUCATIONOrderByWithAggregationInput[]
    by: SIBLING_EDUCATIONScalarFieldEnum[] | SIBLING_EDUCATIONScalarFieldEnum
    having?: SIBLING_EDUCATIONScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SIBLING_EDUCATIONCountAggregateInputType | true
    _avg?: SIBLING_EDUCATIONAvgAggregateInputType
    _sum?: SIBLING_EDUCATIONSumAggregateInputType
    _min?: SIBLING_EDUCATIONMinAggregateInputType
    _max?: SIBLING_EDUCATIONMaxAggregateInputType
  }

  export type SIBLING_EDUCATIONGroupByOutputType = {
    education_id: number
    student_id: number | null
    member_id: number | null
    institution: string | null
    year_grade: string | null
    registration_course: string | null
    _count: SIBLING_EDUCATIONCountAggregateOutputType | null
    _avg: SIBLING_EDUCATIONAvgAggregateOutputType | null
    _sum: SIBLING_EDUCATIONSumAggregateOutputType | null
    _min: SIBLING_EDUCATIONMinAggregateOutputType | null
    _max: SIBLING_EDUCATIONMaxAggregateOutputType | null
  }

  type GetSIBLING_EDUCATIONGroupByPayload<T extends SIBLING_EDUCATIONGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SIBLING_EDUCATIONGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SIBLING_EDUCATIONGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SIBLING_EDUCATIONGroupByOutputType[P]>
            : GetScalarType<T[P], SIBLING_EDUCATIONGroupByOutputType[P]>
        }
      >
    >


  export type SIBLING_EDUCATIONSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    education_id?: boolean
    student_id?: boolean
    member_id?: boolean
    institution?: boolean
    year_grade?: boolean
    registration_course?: boolean
    STUDENT?: boolean | SIBLING_EDUCATION$STUDENTArgs<ExtArgs>
    FAMILY_MEMBER?: boolean | SIBLING_EDUCATION$FAMILY_MEMBERArgs<ExtArgs>
  }, ExtArgs["result"]["sIBLING_EDUCATION"]>



  export type SIBLING_EDUCATIONSelectScalar = {
    education_id?: boolean
    student_id?: boolean
    member_id?: boolean
    institution?: boolean
    year_grade?: boolean
    registration_course?: boolean
  }

  export type SIBLING_EDUCATIONOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"education_id" | "student_id" | "member_id" | "institution" | "year_grade" | "registration_course", ExtArgs["result"]["sIBLING_EDUCATION"]>
  export type SIBLING_EDUCATIONInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    STUDENT?: boolean | SIBLING_EDUCATION$STUDENTArgs<ExtArgs>
    FAMILY_MEMBER?: boolean | SIBLING_EDUCATION$FAMILY_MEMBERArgs<ExtArgs>
  }

  export type $SIBLING_EDUCATIONPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SIBLING_EDUCATION"
    objects: {
      STUDENT: Prisma.$STUDENTPayload<ExtArgs> | null
      FAMILY_MEMBER: Prisma.$FAMILY_MEMBERPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      education_id: number
      student_id: number | null
      member_id: number | null
      institution: string | null
      year_grade: string | null
      registration_course: string | null
    }, ExtArgs["result"]["sIBLING_EDUCATION"]>
    composites: {}
  }

  type SIBLING_EDUCATIONGetPayload<S extends boolean | null | undefined | SIBLING_EDUCATIONDefaultArgs> = $Result.GetResult<Prisma.$SIBLING_EDUCATIONPayload, S>

  type SIBLING_EDUCATIONCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SIBLING_EDUCATIONFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SIBLING_EDUCATIONCountAggregateInputType | true
    }

  export interface SIBLING_EDUCATIONDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SIBLING_EDUCATION'], meta: { name: 'SIBLING_EDUCATION' } }
    /**
     * Find zero or one SIBLING_EDUCATION that matches the filter.
     * @param {SIBLING_EDUCATIONFindUniqueArgs} args - Arguments to find a SIBLING_EDUCATION
     * @example
     * // Get one SIBLING_EDUCATION
     * const sIBLING_EDUCATION = await prisma.sIBLING_EDUCATION.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SIBLING_EDUCATIONFindUniqueArgs>(args: SelectSubset<T, SIBLING_EDUCATIONFindUniqueArgs<ExtArgs>>): Prisma__SIBLING_EDUCATIONClient<$Result.GetResult<Prisma.$SIBLING_EDUCATIONPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SIBLING_EDUCATION that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SIBLING_EDUCATIONFindUniqueOrThrowArgs} args - Arguments to find a SIBLING_EDUCATION
     * @example
     * // Get one SIBLING_EDUCATION
     * const sIBLING_EDUCATION = await prisma.sIBLING_EDUCATION.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SIBLING_EDUCATIONFindUniqueOrThrowArgs>(args: SelectSubset<T, SIBLING_EDUCATIONFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SIBLING_EDUCATIONClient<$Result.GetResult<Prisma.$SIBLING_EDUCATIONPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SIBLING_EDUCATION that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SIBLING_EDUCATIONFindFirstArgs} args - Arguments to find a SIBLING_EDUCATION
     * @example
     * // Get one SIBLING_EDUCATION
     * const sIBLING_EDUCATION = await prisma.sIBLING_EDUCATION.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SIBLING_EDUCATIONFindFirstArgs>(args?: SelectSubset<T, SIBLING_EDUCATIONFindFirstArgs<ExtArgs>>): Prisma__SIBLING_EDUCATIONClient<$Result.GetResult<Prisma.$SIBLING_EDUCATIONPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SIBLING_EDUCATION that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SIBLING_EDUCATIONFindFirstOrThrowArgs} args - Arguments to find a SIBLING_EDUCATION
     * @example
     * // Get one SIBLING_EDUCATION
     * const sIBLING_EDUCATION = await prisma.sIBLING_EDUCATION.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SIBLING_EDUCATIONFindFirstOrThrowArgs>(args?: SelectSubset<T, SIBLING_EDUCATIONFindFirstOrThrowArgs<ExtArgs>>): Prisma__SIBLING_EDUCATIONClient<$Result.GetResult<Prisma.$SIBLING_EDUCATIONPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SIBLING_EDUCATIONS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SIBLING_EDUCATIONFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SIBLING_EDUCATIONS
     * const sIBLING_EDUCATIONS = await prisma.sIBLING_EDUCATION.findMany()
     * 
     * // Get first 10 SIBLING_EDUCATIONS
     * const sIBLING_EDUCATIONS = await prisma.sIBLING_EDUCATION.findMany({ take: 10 })
     * 
     * // Only select the `education_id`
     * const sIBLING_EDUCATIONWithEducation_idOnly = await prisma.sIBLING_EDUCATION.findMany({ select: { education_id: true } })
     * 
     */
    findMany<T extends SIBLING_EDUCATIONFindManyArgs>(args?: SelectSubset<T, SIBLING_EDUCATIONFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SIBLING_EDUCATIONPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SIBLING_EDUCATION.
     * @param {SIBLING_EDUCATIONCreateArgs} args - Arguments to create a SIBLING_EDUCATION.
     * @example
     * // Create one SIBLING_EDUCATION
     * const SIBLING_EDUCATION = await prisma.sIBLING_EDUCATION.create({
     *   data: {
     *     // ... data to create a SIBLING_EDUCATION
     *   }
     * })
     * 
     */
    create<T extends SIBLING_EDUCATIONCreateArgs>(args: SelectSubset<T, SIBLING_EDUCATIONCreateArgs<ExtArgs>>): Prisma__SIBLING_EDUCATIONClient<$Result.GetResult<Prisma.$SIBLING_EDUCATIONPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SIBLING_EDUCATIONS.
     * @param {SIBLING_EDUCATIONCreateManyArgs} args - Arguments to create many SIBLING_EDUCATIONS.
     * @example
     * // Create many SIBLING_EDUCATIONS
     * const sIBLING_EDUCATION = await prisma.sIBLING_EDUCATION.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SIBLING_EDUCATIONCreateManyArgs>(args?: SelectSubset<T, SIBLING_EDUCATIONCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SIBLING_EDUCATION.
     * @param {SIBLING_EDUCATIONDeleteArgs} args - Arguments to delete one SIBLING_EDUCATION.
     * @example
     * // Delete one SIBLING_EDUCATION
     * const SIBLING_EDUCATION = await prisma.sIBLING_EDUCATION.delete({
     *   where: {
     *     // ... filter to delete one SIBLING_EDUCATION
     *   }
     * })
     * 
     */
    delete<T extends SIBLING_EDUCATIONDeleteArgs>(args: SelectSubset<T, SIBLING_EDUCATIONDeleteArgs<ExtArgs>>): Prisma__SIBLING_EDUCATIONClient<$Result.GetResult<Prisma.$SIBLING_EDUCATIONPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SIBLING_EDUCATION.
     * @param {SIBLING_EDUCATIONUpdateArgs} args - Arguments to update one SIBLING_EDUCATION.
     * @example
     * // Update one SIBLING_EDUCATION
     * const sIBLING_EDUCATION = await prisma.sIBLING_EDUCATION.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SIBLING_EDUCATIONUpdateArgs>(args: SelectSubset<T, SIBLING_EDUCATIONUpdateArgs<ExtArgs>>): Prisma__SIBLING_EDUCATIONClient<$Result.GetResult<Prisma.$SIBLING_EDUCATIONPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SIBLING_EDUCATIONS.
     * @param {SIBLING_EDUCATIONDeleteManyArgs} args - Arguments to filter SIBLING_EDUCATIONS to delete.
     * @example
     * // Delete a few SIBLING_EDUCATIONS
     * const { count } = await prisma.sIBLING_EDUCATION.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SIBLING_EDUCATIONDeleteManyArgs>(args?: SelectSubset<T, SIBLING_EDUCATIONDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SIBLING_EDUCATIONS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SIBLING_EDUCATIONUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SIBLING_EDUCATIONS
     * const sIBLING_EDUCATION = await prisma.sIBLING_EDUCATION.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SIBLING_EDUCATIONUpdateManyArgs>(args: SelectSubset<T, SIBLING_EDUCATIONUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SIBLING_EDUCATION.
     * @param {SIBLING_EDUCATIONUpsertArgs} args - Arguments to update or create a SIBLING_EDUCATION.
     * @example
     * // Update or create a SIBLING_EDUCATION
     * const sIBLING_EDUCATION = await prisma.sIBLING_EDUCATION.upsert({
     *   create: {
     *     // ... data to create a SIBLING_EDUCATION
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SIBLING_EDUCATION we want to update
     *   }
     * })
     */
    upsert<T extends SIBLING_EDUCATIONUpsertArgs>(args: SelectSubset<T, SIBLING_EDUCATIONUpsertArgs<ExtArgs>>): Prisma__SIBLING_EDUCATIONClient<$Result.GetResult<Prisma.$SIBLING_EDUCATIONPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SIBLING_EDUCATIONS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SIBLING_EDUCATIONCountArgs} args - Arguments to filter SIBLING_EDUCATIONS to count.
     * @example
     * // Count the number of SIBLING_EDUCATIONS
     * const count = await prisma.sIBLING_EDUCATION.count({
     *   where: {
     *     // ... the filter for the SIBLING_EDUCATIONS we want to count
     *   }
     * })
    **/
    count<T extends SIBLING_EDUCATIONCountArgs>(
      args?: Subset<T, SIBLING_EDUCATIONCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SIBLING_EDUCATIONCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SIBLING_EDUCATION.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SIBLING_EDUCATIONAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SIBLING_EDUCATIONAggregateArgs>(args: Subset<T, SIBLING_EDUCATIONAggregateArgs>): Prisma.PrismaPromise<GetSIBLING_EDUCATIONAggregateType<T>>

    /**
     * Group by SIBLING_EDUCATION.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SIBLING_EDUCATIONGroupByArgs} args - Group by arguments.
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
      T extends SIBLING_EDUCATIONGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SIBLING_EDUCATIONGroupByArgs['orderBy'] }
        : { orderBy?: SIBLING_EDUCATIONGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SIBLING_EDUCATIONGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSIBLING_EDUCATIONGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SIBLING_EDUCATION model
   */
  readonly fields: SIBLING_EDUCATIONFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SIBLING_EDUCATION.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SIBLING_EDUCATIONClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    STUDENT<T extends SIBLING_EDUCATION$STUDENTArgs<ExtArgs> = {}>(args?: Subset<T, SIBLING_EDUCATION$STUDENTArgs<ExtArgs>>): Prisma__STUDENTClient<$Result.GetResult<Prisma.$STUDENTPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    FAMILY_MEMBER<T extends SIBLING_EDUCATION$FAMILY_MEMBERArgs<ExtArgs> = {}>(args?: Subset<T, SIBLING_EDUCATION$FAMILY_MEMBERArgs<ExtArgs>>): Prisma__FAMILY_MEMBERClient<$Result.GetResult<Prisma.$FAMILY_MEMBERPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SIBLING_EDUCATION model
   */
  interface SIBLING_EDUCATIONFieldRefs {
    readonly education_id: FieldRef<"SIBLING_EDUCATION", 'Int'>
    readonly student_id: FieldRef<"SIBLING_EDUCATION", 'Int'>
    readonly member_id: FieldRef<"SIBLING_EDUCATION", 'Int'>
    readonly institution: FieldRef<"SIBLING_EDUCATION", 'String'>
    readonly year_grade: FieldRef<"SIBLING_EDUCATION", 'String'>
    readonly registration_course: FieldRef<"SIBLING_EDUCATION", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SIBLING_EDUCATION findUnique
   */
  export type SIBLING_EDUCATIONFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SIBLING_EDUCATION
     */
    select?: SIBLING_EDUCATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SIBLING_EDUCATION
     */
    omit?: SIBLING_EDUCATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SIBLING_EDUCATIONInclude<ExtArgs> | null
    /**
     * Filter, which SIBLING_EDUCATION to fetch.
     */
    where: SIBLING_EDUCATIONWhereUniqueInput
  }

  /**
   * SIBLING_EDUCATION findUniqueOrThrow
   */
  export type SIBLING_EDUCATIONFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SIBLING_EDUCATION
     */
    select?: SIBLING_EDUCATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SIBLING_EDUCATION
     */
    omit?: SIBLING_EDUCATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SIBLING_EDUCATIONInclude<ExtArgs> | null
    /**
     * Filter, which SIBLING_EDUCATION to fetch.
     */
    where: SIBLING_EDUCATIONWhereUniqueInput
  }

  /**
   * SIBLING_EDUCATION findFirst
   */
  export type SIBLING_EDUCATIONFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SIBLING_EDUCATION
     */
    select?: SIBLING_EDUCATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SIBLING_EDUCATION
     */
    omit?: SIBLING_EDUCATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SIBLING_EDUCATIONInclude<ExtArgs> | null
    /**
     * Filter, which SIBLING_EDUCATION to fetch.
     */
    where?: SIBLING_EDUCATIONWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SIBLING_EDUCATIONS to fetch.
     */
    orderBy?: SIBLING_EDUCATIONOrderByWithRelationInput | SIBLING_EDUCATIONOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SIBLING_EDUCATIONS.
     */
    cursor?: SIBLING_EDUCATIONWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SIBLING_EDUCATIONS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SIBLING_EDUCATIONS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SIBLING_EDUCATIONS.
     */
    distinct?: SIBLING_EDUCATIONScalarFieldEnum | SIBLING_EDUCATIONScalarFieldEnum[]
  }

  /**
   * SIBLING_EDUCATION findFirstOrThrow
   */
  export type SIBLING_EDUCATIONFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SIBLING_EDUCATION
     */
    select?: SIBLING_EDUCATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SIBLING_EDUCATION
     */
    omit?: SIBLING_EDUCATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SIBLING_EDUCATIONInclude<ExtArgs> | null
    /**
     * Filter, which SIBLING_EDUCATION to fetch.
     */
    where?: SIBLING_EDUCATIONWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SIBLING_EDUCATIONS to fetch.
     */
    orderBy?: SIBLING_EDUCATIONOrderByWithRelationInput | SIBLING_EDUCATIONOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SIBLING_EDUCATIONS.
     */
    cursor?: SIBLING_EDUCATIONWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SIBLING_EDUCATIONS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SIBLING_EDUCATIONS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SIBLING_EDUCATIONS.
     */
    distinct?: SIBLING_EDUCATIONScalarFieldEnum | SIBLING_EDUCATIONScalarFieldEnum[]
  }

  /**
   * SIBLING_EDUCATION findMany
   */
  export type SIBLING_EDUCATIONFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SIBLING_EDUCATION
     */
    select?: SIBLING_EDUCATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SIBLING_EDUCATION
     */
    omit?: SIBLING_EDUCATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SIBLING_EDUCATIONInclude<ExtArgs> | null
    /**
     * Filter, which SIBLING_EDUCATIONS to fetch.
     */
    where?: SIBLING_EDUCATIONWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SIBLING_EDUCATIONS to fetch.
     */
    orderBy?: SIBLING_EDUCATIONOrderByWithRelationInput | SIBLING_EDUCATIONOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SIBLING_EDUCATIONS.
     */
    cursor?: SIBLING_EDUCATIONWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SIBLING_EDUCATIONS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SIBLING_EDUCATIONS.
     */
    skip?: number
    distinct?: SIBLING_EDUCATIONScalarFieldEnum | SIBLING_EDUCATIONScalarFieldEnum[]
  }

  /**
   * SIBLING_EDUCATION create
   */
  export type SIBLING_EDUCATIONCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SIBLING_EDUCATION
     */
    select?: SIBLING_EDUCATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SIBLING_EDUCATION
     */
    omit?: SIBLING_EDUCATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SIBLING_EDUCATIONInclude<ExtArgs> | null
    /**
     * The data needed to create a SIBLING_EDUCATION.
     */
    data?: XOR<SIBLING_EDUCATIONCreateInput, SIBLING_EDUCATIONUncheckedCreateInput>
  }

  /**
   * SIBLING_EDUCATION createMany
   */
  export type SIBLING_EDUCATIONCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SIBLING_EDUCATIONS.
     */
    data: SIBLING_EDUCATIONCreateManyInput | SIBLING_EDUCATIONCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SIBLING_EDUCATION update
   */
  export type SIBLING_EDUCATIONUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SIBLING_EDUCATION
     */
    select?: SIBLING_EDUCATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SIBLING_EDUCATION
     */
    omit?: SIBLING_EDUCATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SIBLING_EDUCATIONInclude<ExtArgs> | null
    /**
     * The data needed to update a SIBLING_EDUCATION.
     */
    data: XOR<SIBLING_EDUCATIONUpdateInput, SIBLING_EDUCATIONUncheckedUpdateInput>
    /**
     * Choose, which SIBLING_EDUCATION to update.
     */
    where: SIBLING_EDUCATIONWhereUniqueInput
  }

  /**
   * SIBLING_EDUCATION updateMany
   */
  export type SIBLING_EDUCATIONUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SIBLING_EDUCATIONS.
     */
    data: XOR<SIBLING_EDUCATIONUpdateManyMutationInput, SIBLING_EDUCATIONUncheckedUpdateManyInput>
    /**
     * Filter which SIBLING_EDUCATIONS to update
     */
    where?: SIBLING_EDUCATIONWhereInput
    /**
     * Limit how many SIBLING_EDUCATIONS to update.
     */
    limit?: number
  }

  /**
   * SIBLING_EDUCATION upsert
   */
  export type SIBLING_EDUCATIONUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SIBLING_EDUCATION
     */
    select?: SIBLING_EDUCATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SIBLING_EDUCATION
     */
    omit?: SIBLING_EDUCATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SIBLING_EDUCATIONInclude<ExtArgs> | null
    /**
     * The filter to search for the SIBLING_EDUCATION to update in case it exists.
     */
    where: SIBLING_EDUCATIONWhereUniqueInput
    /**
     * In case the SIBLING_EDUCATION found by the `where` argument doesn't exist, create a new SIBLING_EDUCATION with this data.
     */
    create: XOR<SIBLING_EDUCATIONCreateInput, SIBLING_EDUCATIONUncheckedCreateInput>
    /**
     * In case the SIBLING_EDUCATION was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SIBLING_EDUCATIONUpdateInput, SIBLING_EDUCATIONUncheckedUpdateInput>
  }

  /**
   * SIBLING_EDUCATION delete
   */
  export type SIBLING_EDUCATIONDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SIBLING_EDUCATION
     */
    select?: SIBLING_EDUCATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SIBLING_EDUCATION
     */
    omit?: SIBLING_EDUCATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SIBLING_EDUCATIONInclude<ExtArgs> | null
    /**
     * Filter which SIBLING_EDUCATION to delete.
     */
    where: SIBLING_EDUCATIONWhereUniqueInput
  }

  /**
   * SIBLING_EDUCATION deleteMany
   */
  export type SIBLING_EDUCATIONDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SIBLING_EDUCATIONS to delete
     */
    where?: SIBLING_EDUCATIONWhereInput
    /**
     * Limit how many SIBLING_EDUCATIONS to delete.
     */
    limit?: number
  }

  /**
   * SIBLING_EDUCATION.STUDENT
   */
  export type SIBLING_EDUCATION$STUDENTArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the STUDENT
     */
    select?: STUDENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the STUDENT
     */
    omit?: STUDENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: STUDENTInclude<ExtArgs> | null
    where?: STUDENTWhereInput
  }

  /**
   * SIBLING_EDUCATION.FAMILY_MEMBER
   */
  export type SIBLING_EDUCATION$FAMILY_MEMBERArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAMILY_MEMBER
     */
    select?: FAMILY_MEMBERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAMILY_MEMBER
     */
    omit?: FAMILY_MEMBEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FAMILY_MEMBERInclude<ExtArgs> | null
    where?: FAMILY_MEMBERWhereInput
  }

  /**
   * SIBLING_EDUCATION without action
   */
  export type SIBLING_EDUCATIONDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SIBLING_EDUCATION
     */
    select?: SIBLING_EDUCATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SIBLING_EDUCATION
     */
    omit?: SIBLING_EDUCATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SIBLING_EDUCATIONInclude<ExtArgs> | null
  }


  /**
   * Model STUDENT
   */

  export type AggregateSTUDENT = {
    _count: STUDENTCountAggregateOutputType | null
    _avg: STUDENTAvgAggregateOutputType | null
    _sum: STUDENTSumAggregateOutputType | null
    _min: STUDENTMinAggregateOutputType | null
    _max: STUDENTMaxAggregateOutputType | null
  }

  export type STUDENTAvgAggregateOutputType = {
    student_id: number | null
    user_id: number | null
    year_of_study: number | null
    unmarried_siblings: number | null
  }

  export type STUDENTSumAggregateOutputType = {
    student_id: number | null
    user_id: number | null
    year_of_study: number | null
    unmarried_siblings: number | null
  }

  export type STUDENTMinAggregateOutputType = {
    student_id: number | null
    user_id: number | null
    full_name: string | null
    registration_no: string | null
    date_of_birth: Date | null
    permanent_address: string | null
    admission_date: Date | null
    year_of_study: number | null
    gender: $Enums.STUDENT_gender | null
    phone_number: string | null
    email: string | null
    school_name: string | null
    unmarried_siblings: number | null
  }

  export type STUDENTMaxAggregateOutputType = {
    student_id: number | null
    user_id: number | null
    full_name: string | null
    registration_no: string | null
    date_of_birth: Date | null
    permanent_address: string | null
    admission_date: Date | null
    year_of_study: number | null
    gender: $Enums.STUDENT_gender | null
    phone_number: string | null
    email: string | null
    school_name: string | null
    unmarried_siblings: number | null
  }

  export type STUDENTCountAggregateOutputType = {
    student_id: number
    user_id: number
    full_name: number
    registration_no: number
    date_of_birth: number
    permanent_address: number
    admission_date: number
    year_of_study: number
    gender: number
    phone_number: number
    email: number
    school_name: number
    unmarried_siblings: number
    _all: number
  }


  export type STUDENTAvgAggregateInputType = {
    student_id?: true
    user_id?: true
    year_of_study?: true
    unmarried_siblings?: true
  }

  export type STUDENTSumAggregateInputType = {
    student_id?: true
    user_id?: true
    year_of_study?: true
    unmarried_siblings?: true
  }

  export type STUDENTMinAggregateInputType = {
    student_id?: true
    user_id?: true
    full_name?: true
    registration_no?: true
    date_of_birth?: true
    permanent_address?: true
    admission_date?: true
    year_of_study?: true
    gender?: true
    phone_number?: true
    email?: true
    school_name?: true
    unmarried_siblings?: true
  }

  export type STUDENTMaxAggregateInputType = {
    student_id?: true
    user_id?: true
    full_name?: true
    registration_no?: true
    date_of_birth?: true
    permanent_address?: true
    admission_date?: true
    year_of_study?: true
    gender?: true
    phone_number?: true
    email?: true
    school_name?: true
    unmarried_siblings?: true
  }

  export type STUDENTCountAggregateInputType = {
    student_id?: true
    user_id?: true
    full_name?: true
    registration_no?: true
    date_of_birth?: true
    permanent_address?: true
    admission_date?: true
    year_of_study?: true
    gender?: true
    phone_number?: true
    email?: true
    school_name?: true
    unmarried_siblings?: true
    _all?: true
  }

  export type STUDENTAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which STUDENT to aggregate.
     */
    where?: STUDENTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of STUDENTS to fetch.
     */
    orderBy?: STUDENTOrderByWithRelationInput | STUDENTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: STUDENTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` STUDENTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` STUDENTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned STUDENTS
    **/
    _count?: true | STUDENTCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: STUDENTAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: STUDENTSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: STUDENTMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: STUDENTMaxAggregateInputType
  }

  export type GetSTUDENTAggregateType<T extends STUDENTAggregateArgs> = {
        [P in keyof T & keyof AggregateSTUDENT]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSTUDENT[P]>
      : GetScalarType<T[P], AggregateSTUDENT[P]>
  }




  export type STUDENTGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: STUDENTWhereInput
    orderBy?: STUDENTOrderByWithAggregationInput | STUDENTOrderByWithAggregationInput[]
    by: STUDENTScalarFieldEnum[] | STUDENTScalarFieldEnum
    having?: STUDENTScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: STUDENTCountAggregateInputType | true
    _avg?: STUDENTAvgAggregateInputType
    _sum?: STUDENTSumAggregateInputType
    _min?: STUDENTMinAggregateInputType
    _max?: STUDENTMaxAggregateInputType
  }

  export type STUDENTGroupByOutputType = {
    student_id: number
    user_id: number | null
    full_name: string | null
    registration_no: string | null
    date_of_birth: Date | null
    permanent_address: string | null
    admission_date: Date | null
    year_of_study: number | null
    gender: $Enums.STUDENT_gender | null
    phone_number: string | null
    email: string | null
    school_name: string | null
    unmarried_siblings: number | null
    _count: STUDENTCountAggregateOutputType | null
    _avg: STUDENTAvgAggregateOutputType | null
    _sum: STUDENTSumAggregateOutputType | null
    _min: STUDENTMinAggregateOutputType | null
    _max: STUDENTMaxAggregateOutputType | null
  }

  type GetSTUDENTGroupByPayload<T extends STUDENTGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<STUDENTGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof STUDENTGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], STUDENTGroupByOutputType[P]>
            : GetScalarType<T[P], STUDENTGroupByOutputType[P]>
        }
      >
    >


  export type STUDENTSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    student_id?: boolean
    user_id?: boolean
    full_name?: boolean
    registration_no?: boolean
    date_of_birth?: boolean
    permanent_address?: boolean
    admission_date?: boolean
    year_of_study?: boolean
    gender?: boolean
    phone_number?: boolean
    email?: boolean
    school_name?: boolean
    unmarried_siblings?: boolean
    APPLICATION?: boolean | STUDENT$APPLICATIONArgs<ExtArgs>
    FAMILY_MEMBER?: boolean | STUDENT$FAMILY_MEMBERArgs<ExtArgs>
    OTHER_FUNDING?: boolean | STUDENT$OTHER_FUNDINGArgs<ExtArgs>
    SIBLING_EDUCATION?: boolean | STUDENT$SIBLING_EDUCATIONArgs<ExtArgs>
    USER?: boolean | STUDENT$USERArgs<ExtArgs>
    _count?: boolean | STUDENTCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sTUDENT"]>



  export type STUDENTSelectScalar = {
    student_id?: boolean
    user_id?: boolean
    full_name?: boolean
    registration_no?: boolean
    date_of_birth?: boolean
    permanent_address?: boolean
    admission_date?: boolean
    year_of_study?: boolean
    gender?: boolean
    phone_number?: boolean
    email?: boolean
    school_name?: boolean
    unmarried_siblings?: boolean
  }

  export type STUDENTOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"student_id" | "user_id" | "full_name" | "registration_no" | "date_of_birth" | "permanent_address" | "admission_date" | "year_of_study" | "gender" | "phone_number" | "email" | "school_name" | "unmarried_siblings", ExtArgs["result"]["sTUDENT"]>
  export type STUDENTInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    APPLICATION?: boolean | STUDENT$APPLICATIONArgs<ExtArgs>
    FAMILY_MEMBER?: boolean | STUDENT$FAMILY_MEMBERArgs<ExtArgs>
    OTHER_FUNDING?: boolean | STUDENT$OTHER_FUNDINGArgs<ExtArgs>
    SIBLING_EDUCATION?: boolean | STUDENT$SIBLING_EDUCATIONArgs<ExtArgs>
    USER?: boolean | STUDENT$USERArgs<ExtArgs>
    _count?: boolean | STUDENTCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $STUDENTPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "STUDENT"
    objects: {
      APPLICATION: Prisma.$APPLICATIONPayload<ExtArgs>[]
      FAMILY_MEMBER: Prisma.$FAMILY_MEMBERPayload<ExtArgs>[]
      OTHER_FUNDING: Prisma.$OTHER_FUNDINGPayload<ExtArgs>[]
      SIBLING_EDUCATION: Prisma.$SIBLING_EDUCATIONPayload<ExtArgs>[]
      USER: Prisma.$USERPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      student_id: number
      user_id: number | null
      full_name: string | null
      registration_no: string | null
      date_of_birth: Date | null
      permanent_address: string | null
      admission_date: Date | null
      year_of_study: number | null
      gender: $Enums.STUDENT_gender | null
      phone_number: string | null
      email: string | null
      school_name: string | null
      unmarried_siblings: number | null
    }, ExtArgs["result"]["sTUDENT"]>
    composites: {}
  }

  type STUDENTGetPayload<S extends boolean | null | undefined | STUDENTDefaultArgs> = $Result.GetResult<Prisma.$STUDENTPayload, S>

  type STUDENTCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<STUDENTFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: STUDENTCountAggregateInputType | true
    }

  export interface STUDENTDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['STUDENT'], meta: { name: 'STUDENT' } }
    /**
     * Find zero or one STUDENT that matches the filter.
     * @param {STUDENTFindUniqueArgs} args - Arguments to find a STUDENT
     * @example
     * // Get one STUDENT
     * const sTUDENT = await prisma.sTUDENT.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends STUDENTFindUniqueArgs>(args: SelectSubset<T, STUDENTFindUniqueArgs<ExtArgs>>): Prisma__STUDENTClient<$Result.GetResult<Prisma.$STUDENTPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one STUDENT that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {STUDENTFindUniqueOrThrowArgs} args - Arguments to find a STUDENT
     * @example
     * // Get one STUDENT
     * const sTUDENT = await prisma.sTUDENT.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends STUDENTFindUniqueOrThrowArgs>(args: SelectSubset<T, STUDENTFindUniqueOrThrowArgs<ExtArgs>>): Prisma__STUDENTClient<$Result.GetResult<Prisma.$STUDENTPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first STUDENT that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {STUDENTFindFirstArgs} args - Arguments to find a STUDENT
     * @example
     * // Get one STUDENT
     * const sTUDENT = await prisma.sTUDENT.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends STUDENTFindFirstArgs>(args?: SelectSubset<T, STUDENTFindFirstArgs<ExtArgs>>): Prisma__STUDENTClient<$Result.GetResult<Prisma.$STUDENTPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first STUDENT that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {STUDENTFindFirstOrThrowArgs} args - Arguments to find a STUDENT
     * @example
     * // Get one STUDENT
     * const sTUDENT = await prisma.sTUDENT.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends STUDENTFindFirstOrThrowArgs>(args?: SelectSubset<T, STUDENTFindFirstOrThrowArgs<ExtArgs>>): Prisma__STUDENTClient<$Result.GetResult<Prisma.$STUDENTPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more STUDENTS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {STUDENTFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all STUDENTS
     * const sTUDENTS = await prisma.sTUDENT.findMany()
     * 
     * // Get first 10 STUDENTS
     * const sTUDENTS = await prisma.sTUDENT.findMany({ take: 10 })
     * 
     * // Only select the `student_id`
     * const sTUDENTWithStudent_idOnly = await prisma.sTUDENT.findMany({ select: { student_id: true } })
     * 
     */
    findMany<T extends STUDENTFindManyArgs>(args?: SelectSubset<T, STUDENTFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$STUDENTPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a STUDENT.
     * @param {STUDENTCreateArgs} args - Arguments to create a STUDENT.
     * @example
     * // Create one STUDENT
     * const STUDENT = await prisma.sTUDENT.create({
     *   data: {
     *     // ... data to create a STUDENT
     *   }
     * })
     * 
     */
    create<T extends STUDENTCreateArgs>(args: SelectSubset<T, STUDENTCreateArgs<ExtArgs>>): Prisma__STUDENTClient<$Result.GetResult<Prisma.$STUDENTPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many STUDENTS.
     * @param {STUDENTCreateManyArgs} args - Arguments to create many STUDENTS.
     * @example
     * // Create many STUDENTS
     * const sTUDENT = await prisma.sTUDENT.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends STUDENTCreateManyArgs>(args?: SelectSubset<T, STUDENTCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a STUDENT.
     * @param {STUDENTDeleteArgs} args - Arguments to delete one STUDENT.
     * @example
     * // Delete one STUDENT
     * const STUDENT = await prisma.sTUDENT.delete({
     *   where: {
     *     // ... filter to delete one STUDENT
     *   }
     * })
     * 
     */
    delete<T extends STUDENTDeleteArgs>(args: SelectSubset<T, STUDENTDeleteArgs<ExtArgs>>): Prisma__STUDENTClient<$Result.GetResult<Prisma.$STUDENTPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one STUDENT.
     * @param {STUDENTUpdateArgs} args - Arguments to update one STUDENT.
     * @example
     * // Update one STUDENT
     * const sTUDENT = await prisma.sTUDENT.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends STUDENTUpdateArgs>(args: SelectSubset<T, STUDENTUpdateArgs<ExtArgs>>): Prisma__STUDENTClient<$Result.GetResult<Prisma.$STUDENTPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more STUDENTS.
     * @param {STUDENTDeleteManyArgs} args - Arguments to filter STUDENTS to delete.
     * @example
     * // Delete a few STUDENTS
     * const { count } = await prisma.sTUDENT.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends STUDENTDeleteManyArgs>(args?: SelectSubset<T, STUDENTDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more STUDENTS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {STUDENTUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many STUDENTS
     * const sTUDENT = await prisma.sTUDENT.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends STUDENTUpdateManyArgs>(args: SelectSubset<T, STUDENTUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one STUDENT.
     * @param {STUDENTUpsertArgs} args - Arguments to update or create a STUDENT.
     * @example
     * // Update or create a STUDENT
     * const sTUDENT = await prisma.sTUDENT.upsert({
     *   create: {
     *     // ... data to create a STUDENT
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the STUDENT we want to update
     *   }
     * })
     */
    upsert<T extends STUDENTUpsertArgs>(args: SelectSubset<T, STUDENTUpsertArgs<ExtArgs>>): Prisma__STUDENTClient<$Result.GetResult<Prisma.$STUDENTPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of STUDENTS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {STUDENTCountArgs} args - Arguments to filter STUDENTS to count.
     * @example
     * // Count the number of STUDENTS
     * const count = await prisma.sTUDENT.count({
     *   where: {
     *     // ... the filter for the STUDENTS we want to count
     *   }
     * })
    **/
    count<T extends STUDENTCountArgs>(
      args?: Subset<T, STUDENTCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], STUDENTCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a STUDENT.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {STUDENTAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends STUDENTAggregateArgs>(args: Subset<T, STUDENTAggregateArgs>): Prisma.PrismaPromise<GetSTUDENTAggregateType<T>>

    /**
     * Group by STUDENT.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {STUDENTGroupByArgs} args - Group by arguments.
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
      T extends STUDENTGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: STUDENTGroupByArgs['orderBy'] }
        : { orderBy?: STUDENTGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, STUDENTGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSTUDENTGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the STUDENT model
   */
  readonly fields: STUDENTFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for STUDENT.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__STUDENTClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    APPLICATION<T extends STUDENT$APPLICATIONArgs<ExtArgs> = {}>(args?: Subset<T, STUDENT$APPLICATIONArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$APPLICATIONPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    FAMILY_MEMBER<T extends STUDENT$FAMILY_MEMBERArgs<ExtArgs> = {}>(args?: Subset<T, STUDENT$FAMILY_MEMBERArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FAMILY_MEMBERPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    OTHER_FUNDING<T extends STUDENT$OTHER_FUNDINGArgs<ExtArgs> = {}>(args?: Subset<T, STUDENT$OTHER_FUNDINGArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OTHER_FUNDINGPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    SIBLING_EDUCATION<T extends STUDENT$SIBLING_EDUCATIONArgs<ExtArgs> = {}>(args?: Subset<T, STUDENT$SIBLING_EDUCATIONArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SIBLING_EDUCATIONPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    USER<T extends STUDENT$USERArgs<ExtArgs> = {}>(args?: Subset<T, STUDENT$USERArgs<ExtArgs>>): Prisma__USERClient<$Result.GetResult<Prisma.$USERPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the STUDENT model
   */
  interface STUDENTFieldRefs {
    readonly student_id: FieldRef<"STUDENT", 'Int'>
    readonly user_id: FieldRef<"STUDENT", 'Int'>
    readonly full_name: FieldRef<"STUDENT", 'String'>
    readonly registration_no: FieldRef<"STUDENT", 'String'>
    readonly date_of_birth: FieldRef<"STUDENT", 'DateTime'>
    readonly permanent_address: FieldRef<"STUDENT", 'String'>
    readonly admission_date: FieldRef<"STUDENT", 'DateTime'>
    readonly year_of_study: FieldRef<"STUDENT", 'Int'>
    readonly gender: FieldRef<"STUDENT", 'STUDENT_gender'>
    readonly phone_number: FieldRef<"STUDENT", 'String'>
    readonly email: FieldRef<"STUDENT", 'String'>
    readonly school_name: FieldRef<"STUDENT", 'String'>
    readonly unmarried_siblings: FieldRef<"STUDENT", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * STUDENT findUnique
   */
  export type STUDENTFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the STUDENT
     */
    select?: STUDENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the STUDENT
     */
    omit?: STUDENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: STUDENTInclude<ExtArgs> | null
    /**
     * Filter, which STUDENT to fetch.
     */
    where: STUDENTWhereUniqueInput
  }

  /**
   * STUDENT findUniqueOrThrow
   */
  export type STUDENTFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the STUDENT
     */
    select?: STUDENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the STUDENT
     */
    omit?: STUDENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: STUDENTInclude<ExtArgs> | null
    /**
     * Filter, which STUDENT to fetch.
     */
    where: STUDENTWhereUniqueInput
  }

  /**
   * STUDENT findFirst
   */
  export type STUDENTFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the STUDENT
     */
    select?: STUDENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the STUDENT
     */
    omit?: STUDENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: STUDENTInclude<ExtArgs> | null
    /**
     * Filter, which STUDENT to fetch.
     */
    where?: STUDENTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of STUDENTS to fetch.
     */
    orderBy?: STUDENTOrderByWithRelationInput | STUDENTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for STUDENTS.
     */
    cursor?: STUDENTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` STUDENTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` STUDENTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of STUDENTS.
     */
    distinct?: STUDENTScalarFieldEnum | STUDENTScalarFieldEnum[]
  }

  /**
   * STUDENT findFirstOrThrow
   */
  export type STUDENTFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the STUDENT
     */
    select?: STUDENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the STUDENT
     */
    omit?: STUDENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: STUDENTInclude<ExtArgs> | null
    /**
     * Filter, which STUDENT to fetch.
     */
    where?: STUDENTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of STUDENTS to fetch.
     */
    orderBy?: STUDENTOrderByWithRelationInput | STUDENTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for STUDENTS.
     */
    cursor?: STUDENTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` STUDENTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` STUDENTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of STUDENTS.
     */
    distinct?: STUDENTScalarFieldEnum | STUDENTScalarFieldEnum[]
  }

  /**
   * STUDENT findMany
   */
  export type STUDENTFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the STUDENT
     */
    select?: STUDENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the STUDENT
     */
    omit?: STUDENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: STUDENTInclude<ExtArgs> | null
    /**
     * Filter, which STUDENTS to fetch.
     */
    where?: STUDENTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of STUDENTS to fetch.
     */
    orderBy?: STUDENTOrderByWithRelationInput | STUDENTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing STUDENTS.
     */
    cursor?: STUDENTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` STUDENTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` STUDENTS.
     */
    skip?: number
    distinct?: STUDENTScalarFieldEnum | STUDENTScalarFieldEnum[]
  }

  /**
   * STUDENT create
   */
  export type STUDENTCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the STUDENT
     */
    select?: STUDENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the STUDENT
     */
    omit?: STUDENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: STUDENTInclude<ExtArgs> | null
    /**
     * The data needed to create a STUDENT.
     */
    data?: XOR<STUDENTCreateInput, STUDENTUncheckedCreateInput>
  }

  /**
   * STUDENT createMany
   */
  export type STUDENTCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many STUDENTS.
     */
    data: STUDENTCreateManyInput | STUDENTCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * STUDENT update
   */
  export type STUDENTUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the STUDENT
     */
    select?: STUDENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the STUDENT
     */
    omit?: STUDENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: STUDENTInclude<ExtArgs> | null
    /**
     * The data needed to update a STUDENT.
     */
    data: XOR<STUDENTUpdateInput, STUDENTUncheckedUpdateInput>
    /**
     * Choose, which STUDENT to update.
     */
    where: STUDENTWhereUniqueInput
  }

  /**
   * STUDENT updateMany
   */
  export type STUDENTUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update STUDENTS.
     */
    data: XOR<STUDENTUpdateManyMutationInput, STUDENTUncheckedUpdateManyInput>
    /**
     * Filter which STUDENTS to update
     */
    where?: STUDENTWhereInput
    /**
     * Limit how many STUDENTS to update.
     */
    limit?: number
  }

  /**
   * STUDENT upsert
   */
  export type STUDENTUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the STUDENT
     */
    select?: STUDENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the STUDENT
     */
    omit?: STUDENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: STUDENTInclude<ExtArgs> | null
    /**
     * The filter to search for the STUDENT to update in case it exists.
     */
    where: STUDENTWhereUniqueInput
    /**
     * In case the STUDENT found by the `where` argument doesn't exist, create a new STUDENT with this data.
     */
    create: XOR<STUDENTCreateInput, STUDENTUncheckedCreateInput>
    /**
     * In case the STUDENT was found with the provided `where` argument, update it with this data.
     */
    update: XOR<STUDENTUpdateInput, STUDENTUncheckedUpdateInput>
  }

  /**
   * STUDENT delete
   */
  export type STUDENTDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the STUDENT
     */
    select?: STUDENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the STUDENT
     */
    omit?: STUDENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: STUDENTInclude<ExtArgs> | null
    /**
     * Filter which STUDENT to delete.
     */
    where: STUDENTWhereUniqueInput
  }

  /**
   * STUDENT deleteMany
   */
  export type STUDENTDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which STUDENTS to delete
     */
    where?: STUDENTWhereInput
    /**
     * Limit how many STUDENTS to delete.
     */
    limit?: number
  }

  /**
   * STUDENT.APPLICATION
   */
  export type STUDENT$APPLICATIONArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APPLICATION
     */
    select?: APPLICATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the APPLICATION
     */
    omit?: APPLICATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: APPLICATIONInclude<ExtArgs> | null
    where?: APPLICATIONWhereInput
    orderBy?: APPLICATIONOrderByWithRelationInput | APPLICATIONOrderByWithRelationInput[]
    cursor?: APPLICATIONWhereUniqueInput
    take?: number
    skip?: number
    distinct?: APPLICATIONScalarFieldEnum | APPLICATIONScalarFieldEnum[]
  }

  /**
   * STUDENT.FAMILY_MEMBER
   */
  export type STUDENT$FAMILY_MEMBERArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAMILY_MEMBER
     */
    select?: FAMILY_MEMBERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAMILY_MEMBER
     */
    omit?: FAMILY_MEMBEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FAMILY_MEMBERInclude<ExtArgs> | null
    where?: FAMILY_MEMBERWhereInput
    orderBy?: FAMILY_MEMBEROrderByWithRelationInput | FAMILY_MEMBEROrderByWithRelationInput[]
    cursor?: FAMILY_MEMBERWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FAMILY_MEMBERScalarFieldEnum | FAMILY_MEMBERScalarFieldEnum[]
  }

  /**
   * STUDENT.OTHER_FUNDING
   */
  export type STUDENT$OTHER_FUNDINGArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTHER_FUNDING
     */
    select?: OTHER_FUNDINGSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTHER_FUNDING
     */
    omit?: OTHER_FUNDINGOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTHER_FUNDINGInclude<ExtArgs> | null
    where?: OTHER_FUNDINGWhereInput
    orderBy?: OTHER_FUNDINGOrderByWithRelationInput | OTHER_FUNDINGOrderByWithRelationInput[]
    cursor?: OTHER_FUNDINGWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OTHER_FUNDINGScalarFieldEnum | OTHER_FUNDINGScalarFieldEnum[]
  }

  /**
   * STUDENT.SIBLING_EDUCATION
   */
  export type STUDENT$SIBLING_EDUCATIONArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SIBLING_EDUCATION
     */
    select?: SIBLING_EDUCATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SIBLING_EDUCATION
     */
    omit?: SIBLING_EDUCATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SIBLING_EDUCATIONInclude<ExtArgs> | null
    where?: SIBLING_EDUCATIONWhereInput
    orderBy?: SIBLING_EDUCATIONOrderByWithRelationInput | SIBLING_EDUCATIONOrderByWithRelationInput[]
    cursor?: SIBLING_EDUCATIONWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SIBLING_EDUCATIONScalarFieldEnum | SIBLING_EDUCATIONScalarFieldEnum[]
  }

  /**
   * STUDENT.USER
   */
  export type STUDENT$USERArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USER
     */
    select?: USERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USER
     */
    omit?: USEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USERInclude<ExtArgs> | null
    where?: USERWhereInput
  }

  /**
   * STUDENT without action
   */
  export type STUDENTDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the STUDENT
     */
    select?: STUDENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the STUDENT
     */
    omit?: STUDENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: STUDENTInclude<ExtArgs> | null
  }


  /**
   * Model USER
   */

  export type AggregateUSER = {
    _count: USERCountAggregateOutputType | null
    _avg: USERAvgAggregateOutputType | null
    _sum: USERSumAggregateOutputType | null
    _min: USERMinAggregateOutputType | null
    _max: USERMaxAggregateOutputType | null
  }

  export type USERAvgAggregateOutputType = {
    user_id: number | null
  }

  export type USERSumAggregateOutputType = {
    user_id: number | null
  }

  export type USERMinAggregateOutputType = {
    user_id: number | null
    first_name: string | null
    last_name: string | null
    email: string | null
    username: string | null
    password: string | null
    role: $Enums.USER_role | null
    created_at: Date | null
  }

  export type USERMaxAggregateOutputType = {
    user_id: number | null
    first_name: string | null
    last_name: string | null
    email: string | null
    username: string | null
    password: string | null
    role: $Enums.USER_role | null
    created_at: Date | null
  }

  export type USERCountAggregateOutputType = {
    user_id: number
    first_name: number
    last_name: number
    email: number
    username: number
    password: number
    role: number
    created_at: number
    _all: number
  }


  export type USERAvgAggregateInputType = {
    user_id?: true
  }

  export type USERSumAggregateInputType = {
    user_id?: true
  }

  export type USERMinAggregateInputType = {
    user_id?: true
    first_name?: true
    last_name?: true
    email?: true
    username?: true
    password?: true
    role?: true
    created_at?: true
  }

  export type USERMaxAggregateInputType = {
    user_id?: true
    first_name?: true
    last_name?: true
    email?: true
    username?: true
    password?: true
    role?: true
    created_at?: true
  }

  export type USERCountAggregateInputType = {
    user_id?: true
    first_name?: true
    last_name?: true
    email?: true
    username?: true
    password?: true
    role?: true
    created_at?: true
    _all?: true
  }

  export type USERAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which USER to aggregate.
     */
    where?: USERWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of USERS to fetch.
     */
    orderBy?: USEROrderByWithRelationInput | USEROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: USERWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` USERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` USERS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned USERS
    **/
    _count?: true | USERCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: USERAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: USERSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: USERMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: USERMaxAggregateInputType
  }

  export type GetUSERAggregateType<T extends USERAggregateArgs> = {
        [P in keyof T & keyof AggregateUSER]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUSER[P]>
      : GetScalarType<T[P], AggregateUSER[P]>
  }




  export type USERGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: USERWhereInput
    orderBy?: USEROrderByWithAggregationInput | USEROrderByWithAggregationInput[]
    by: USERScalarFieldEnum[] | USERScalarFieldEnum
    having?: USERScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: USERCountAggregateInputType | true
    _avg?: USERAvgAggregateInputType
    _sum?: USERSumAggregateInputType
    _min?: USERMinAggregateInputType
    _max?: USERMaxAggregateInputType
  }

  export type USERGroupByOutputType = {
    user_id: number
    first_name: string | null
    last_name: string | null
    email: string | null
    username: string | null
    password: string | null
    role: $Enums.USER_role
    created_at: Date | null
    _count: USERCountAggregateOutputType | null
    _avg: USERAvgAggregateOutputType | null
    _sum: USERSumAggregateOutputType | null
    _min: USERMinAggregateOutputType | null
    _max: USERMaxAggregateOutputType | null
  }

  type GetUSERGroupByPayload<T extends USERGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<USERGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof USERGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], USERGroupByOutputType[P]>
            : GetScalarType<T[P], USERGroupByOutputType[P]>
        }
      >
    >


  export type USERSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    created_at?: boolean
    COMMITTEE_REVIEW?: boolean | USER$COMMITTEE_REVIEWArgs<ExtArgs>
    NOTIFICATION?: boolean | USER$NOTIFICATIONArgs<ExtArgs>
    STUDENT?: boolean | USER$STUDENTArgs<ExtArgs>
    _count?: boolean | USERCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["uSER"]>



  export type USERSelectScalar = {
    user_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    created_at?: boolean
  }

  export type USEROmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "first_name" | "last_name" | "email" | "username" | "password" | "role" | "created_at", ExtArgs["result"]["uSER"]>
  export type USERInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    COMMITTEE_REVIEW?: boolean | USER$COMMITTEE_REVIEWArgs<ExtArgs>
    NOTIFICATION?: boolean | USER$NOTIFICATIONArgs<ExtArgs>
    STUDENT?: boolean | USER$STUDENTArgs<ExtArgs>
    _count?: boolean | USERCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $USERPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "USER"
    objects: {
      COMMITTEE_REVIEW: Prisma.$COMMITTEE_REVIEWPayload<ExtArgs>[]
      NOTIFICATION: Prisma.$NOTIFICATIONPayload<ExtArgs>[]
      STUDENT: Prisma.$STUDENTPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      first_name: string | null
      last_name: string | null
      email: string | null
      username: string | null
      password: string | null
      role: $Enums.USER_role
      created_at: Date | null
    }, ExtArgs["result"]["uSER"]>
    composites: {}
  }

  type USERGetPayload<S extends boolean | null | undefined | USERDefaultArgs> = $Result.GetResult<Prisma.$USERPayload, S>

  type USERCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<USERFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: USERCountAggregateInputType | true
    }

  export interface USERDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['USER'], meta: { name: 'USER' } }
    /**
     * Find zero or one USER that matches the filter.
     * @param {USERFindUniqueArgs} args - Arguments to find a USER
     * @example
     * // Get one USER
     * const uSER = await prisma.uSER.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends USERFindUniqueArgs>(args: SelectSubset<T, USERFindUniqueArgs<ExtArgs>>): Prisma__USERClient<$Result.GetResult<Prisma.$USERPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one USER that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {USERFindUniqueOrThrowArgs} args - Arguments to find a USER
     * @example
     * // Get one USER
     * const uSER = await prisma.uSER.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends USERFindUniqueOrThrowArgs>(args: SelectSubset<T, USERFindUniqueOrThrowArgs<ExtArgs>>): Prisma__USERClient<$Result.GetResult<Prisma.$USERPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first USER that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USERFindFirstArgs} args - Arguments to find a USER
     * @example
     * // Get one USER
     * const uSER = await prisma.uSER.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends USERFindFirstArgs>(args?: SelectSubset<T, USERFindFirstArgs<ExtArgs>>): Prisma__USERClient<$Result.GetResult<Prisma.$USERPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first USER that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USERFindFirstOrThrowArgs} args - Arguments to find a USER
     * @example
     * // Get one USER
     * const uSER = await prisma.uSER.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends USERFindFirstOrThrowArgs>(args?: SelectSubset<T, USERFindFirstOrThrowArgs<ExtArgs>>): Prisma__USERClient<$Result.GetResult<Prisma.$USERPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more USERS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USERFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all USERS
     * const uSERS = await prisma.uSER.findMany()
     * 
     * // Get first 10 USERS
     * const uSERS = await prisma.uSER.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const uSERWithUser_idOnly = await prisma.uSER.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends USERFindManyArgs>(args?: SelectSubset<T, USERFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$USERPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a USER.
     * @param {USERCreateArgs} args - Arguments to create a USER.
     * @example
     * // Create one USER
     * const USER = await prisma.uSER.create({
     *   data: {
     *     // ... data to create a USER
     *   }
     * })
     * 
     */
    create<T extends USERCreateArgs>(args: SelectSubset<T, USERCreateArgs<ExtArgs>>): Prisma__USERClient<$Result.GetResult<Prisma.$USERPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many USERS.
     * @param {USERCreateManyArgs} args - Arguments to create many USERS.
     * @example
     * // Create many USERS
     * const uSER = await prisma.uSER.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends USERCreateManyArgs>(args?: SelectSubset<T, USERCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a USER.
     * @param {USERDeleteArgs} args - Arguments to delete one USER.
     * @example
     * // Delete one USER
     * const USER = await prisma.uSER.delete({
     *   where: {
     *     // ... filter to delete one USER
     *   }
     * })
     * 
     */
    delete<T extends USERDeleteArgs>(args: SelectSubset<T, USERDeleteArgs<ExtArgs>>): Prisma__USERClient<$Result.GetResult<Prisma.$USERPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one USER.
     * @param {USERUpdateArgs} args - Arguments to update one USER.
     * @example
     * // Update one USER
     * const uSER = await prisma.uSER.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends USERUpdateArgs>(args: SelectSubset<T, USERUpdateArgs<ExtArgs>>): Prisma__USERClient<$Result.GetResult<Prisma.$USERPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more USERS.
     * @param {USERDeleteManyArgs} args - Arguments to filter USERS to delete.
     * @example
     * // Delete a few USERS
     * const { count } = await prisma.uSER.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends USERDeleteManyArgs>(args?: SelectSubset<T, USERDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more USERS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USERUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many USERS
     * const uSER = await prisma.uSER.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends USERUpdateManyArgs>(args: SelectSubset<T, USERUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one USER.
     * @param {USERUpsertArgs} args - Arguments to update or create a USER.
     * @example
     * // Update or create a USER
     * const uSER = await prisma.uSER.upsert({
     *   create: {
     *     // ... data to create a USER
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the USER we want to update
     *   }
     * })
     */
    upsert<T extends USERUpsertArgs>(args: SelectSubset<T, USERUpsertArgs<ExtArgs>>): Prisma__USERClient<$Result.GetResult<Prisma.$USERPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of USERS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USERCountArgs} args - Arguments to filter USERS to count.
     * @example
     * // Count the number of USERS
     * const count = await prisma.uSER.count({
     *   where: {
     *     // ... the filter for the USERS we want to count
     *   }
     * })
    **/
    count<T extends USERCountArgs>(
      args?: Subset<T, USERCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], USERCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a USER.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USERAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends USERAggregateArgs>(args: Subset<T, USERAggregateArgs>): Prisma.PrismaPromise<GetUSERAggregateType<T>>

    /**
     * Group by USER.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USERGroupByArgs} args - Group by arguments.
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
      T extends USERGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: USERGroupByArgs['orderBy'] }
        : { orderBy?: USERGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, USERGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUSERGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the USER model
   */
  readonly fields: USERFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for USER.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__USERClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    COMMITTEE_REVIEW<T extends USER$COMMITTEE_REVIEWArgs<ExtArgs> = {}>(args?: Subset<T, USER$COMMITTEE_REVIEWArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$COMMITTEE_REVIEWPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    NOTIFICATION<T extends USER$NOTIFICATIONArgs<ExtArgs> = {}>(args?: Subset<T, USER$NOTIFICATIONArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NOTIFICATIONPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    STUDENT<T extends USER$STUDENTArgs<ExtArgs> = {}>(args?: Subset<T, USER$STUDENTArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$STUDENTPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the USER model
   */
  interface USERFieldRefs {
    readonly user_id: FieldRef<"USER", 'Int'>
    readonly first_name: FieldRef<"USER", 'String'>
    readonly last_name: FieldRef<"USER", 'String'>
    readonly email: FieldRef<"USER", 'String'>
    readonly username: FieldRef<"USER", 'String'>
    readonly password: FieldRef<"USER", 'String'>
    readonly role: FieldRef<"USER", 'USER_role'>
    readonly created_at: FieldRef<"USER", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * USER findUnique
   */
  export type USERFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USER
     */
    select?: USERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USER
     */
    omit?: USEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USERInclude<ExtArgs> | null
    /**
     * Filter, which USER to fetch.
     */
    where: USERWhereUniqueInput
  }

  /**
   * USER findUniqueOrThrow
   */
  export type USERFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USER
     */
    select?: USERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USER
     */
    omit?: USEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USERInclude<ExtArgs> | null
    /**
     * Filter, which USER to fetch.
     */
    where: USERWhereUniqueInput
  }

  /**
   * USER findFirst
   */
  export type USERFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USER
     */
    select?: USERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USER
     */
    omit?: USEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USERInclude<ExtArgs> | null
    /**
     * Filter, which USER to fetch.
     */
    where?: USERWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of USERS to fetch.
     */
    orderBy?: USEROrderByWithRelationInput | USEROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for USERS.
     */
    cursor?: USERWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` USERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` USERS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of USERS.
     */
    distinct?: USERScalarFieldEnum | USERScalarFieldEnum[]
  }

  /**
   * USER findFirstOrThrow
   */
  export type USERFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USER
     */
    select?: USERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USER
     */
    omit?: USEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USERInclude<ExtArgs> | null
    /**
     * Filter, which USER to fetch.
     */
    where?: USERWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of USERS to fetch.
     */
    orderBy?: USEROrderByWithRelationInput | USEROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for USERS.
     */
    cursor?: USERWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` USERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` USERS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of USERS.
     */
    distinct?: USERScalarFieldEnum | USERScalarFieldEnum[]
  }

  /**
   * USER findMany
   */
  export type USERFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USER
     */
    select?: USERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USER
     */
    omit?: USEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USERInclude<ExtArgs> | null
    /**
     * Filter, which USERS to fetch.
     */
    where?: USERWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of USERS to fetch.
     */
    orderBy?: USEROrderByWithRelationInput | USEROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing USERS.
     */
    cursor?: USERWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` USERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` USERS.
     */
    skip?: number
    distinct?: USERScalarFieldEnum | USERScalarFieldEnum[]
  }

  /**
   * USER create
   */
  export type USERCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USER
     */
    select?: USERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USER
     */
    omit?: USEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USERInclude<ExtArgs> | null
    /**
     * The data needed to create a USER.
     */
    data?: XOR<USERCreateInput, USERUncheckedCreateInput>
  }

  /**
   * USER createMany
   */
  export type USERCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many USERS.
     */
    data: USERCreateManyInput | USERCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * USER update
   */
  export type USERUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USER
     */
    select?: USERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USER
     */
    omit?: USEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USERInclude<ExtArgs> | null
    /**
     * The data needed to update a USER.
     */
    data: XOR<USERUpdateInput, USERUncheckedUpdateInput>
    /**
     * Choose, which USER to update.
     */
    where: USERWhereUniqueInput
  }

  /**
   * USER updateMany
   */
  export type USERUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update USERS.
     */
    data: XOR<USERUpdateManyMutationInput, USERUncheckedUpdateManyInput>
    /**
     * Filter which USERS to update
     */
    where?: USERWhereInput
    /**
     * Limit how many USERS to update.
     */
    limit?: number
  }

  /**
   * USER upsert
   */
  export type USERUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USER
     */
    select?: USERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USER
     */
    omit?: USEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USERInclude<ExtArgs> | null
    /**
     * The filter to search for the USER to update in case it exists.
     */
    where: USERWhereUniqueInput
    /**
     * In case the USER found by the `where` argument doesn't exist, create a new USER with this data.
     */
    create: XOR<USERCreateInput, USERUncheckedCreateInput>
    /**
     * In case the USER was found with the provided `where` argument, update it with this data.
     */
    update: XOR<USERUpdateInput, USERUncheckedUpdateInput>
  }

  /**
   * USER delete
   */
  export type USERDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USER
     */
    select?: USERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USER
     */
    omit?: USEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USERInclude<ExtArgs> | null
    /**
     * Filter which USER to delete.
     */
    where: USERWhereUniqueInput
  }

  /**
   * USER deleteMany
   */
  export type USERDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which USERS to delete
     */
    where?: USERWhereInput
    /**
     * Limit how many USERS to delete.
     */
    limit?: number
  }

  /**
   * USER.COMMITTEE_REVIEW
   */
  export type USER$COMMITTEE_REVIEWArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the COMMITTEE_REVIEW
     */
    select?: COMMITTEE_REVIEWSelect<ExtArgs> | null
    /**
     * Omit specific fields from the COMMITTEE_REVIEW
     */
    omit?: COMMITTEE_REVIEWOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: COMMITTEE_REVIEWInclude<ExtArgs> | null
    where?: COMMITTEE_REVIEWWhereInput
    orderBy?: COMMITTEE_REVIEWOrderByWithRelationInput | COMMITTEE_REVIEWOrderByWithRelationInput[]
    cursor?: COMMITTEE_REVIEWWhereUniqueInput
    take?: number
    skip?: number
    distinct?: COMMITTEE_REVIEWScalarFieldEnum | COMMITTEE_REVIEWScalarFieldEnum[]
  }

  /**
   * USER.NOTIFICATION
   */
  export type USER$NOTIFICATIONArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NOTIFICATION
     */
    select?: NOTIFICATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NOTIFICATION
     */
    omit?: NOTIFICATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NOTIFICATIONInclude<ExtArgs> | null
    where?: NOTIFICATIONWhereInput
    orderBy?: NOTIFICATIONOrderByWithRelationInput | NOTIFICATIONOrderByWithRelationInput[]
    cursor?: NOTIFICATIONWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NOTIFICATIONScalarFieldEnum | NOTIFICATIONScalarFieldEnum[]
  }

  /**
   * USER.STUDENT
   */
  export type USER$STUDENTArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the STUDENT
     */
    select?: STUDENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the STUDENT
     */
    omit?: STUDENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: STUDENTInclude<ExtArgs> | null
    where?: STUDENTWhereInput
    orderBy?: STUDENTOrderByWithRelationInput | STUDENTOrderByWithRelationInput[]
    cursor?: STUDENTWhereUniqueInput
    take?: number
    skip?: number
    distinct?: STUDENTScalarFieldEnum | STUDENTScalarFieldEnum[]
  }

  /**
   * USER without action
   */
  export type USERDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USER
     */
    select?: USERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USER
     */
    omit?: USEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USERInclude<ExtArgs> | null
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


  export const APPLICATIONScalarFieldEnum: {
    application_id: 'application_id',
    student_id: 'student_id',
    scholarship_id: 'scholarship_id',
    submission_date: 'submission_date',
    status: 'status',
    total_points: 'total_points',
    reviewer_comments: 'reviewer_comments',
    review_date: 'review_date'
  };

  export type APPLICATIONScalarFieldEnum = (typeof APPLICATIONScalarFieldEnum)[keyof typeof APPLICATIONScalarFieldEnum]


  export const COMMITTEE_REVIEWScalarFieldEnum: {
    review_id: 'review_id',
    application_id: 'application_id',
    reviewer_id: 'reviewer_id',
    review_date: 'review_date',
    points_awarded: 'points_awarded',
    comments: 'comments',
    status: 'status',
    is_read: 'is_read'
  };

  export type COMMITTEE_REVIEWScalarFieldEnum = (typeof COMMITTEE_REVIEWScalarFieldEnum)[keyof typeof COMMITTEE_REVIEWScalarFieldEnum]


  export const DOCUMENTScalarFieldEnum: {
    document_id: 'document_id',
    application_id: 'application_id',
    document_type: 'document_type',
    file_name: 'file_name',
    file_path: 'file_path',
    upload_date: 'upload_date',
    verification_status: 'verification_status'
  };

  export type DOCUMENTScalarFieldEnum = (typeof DOCUMENTScalarFieldEnum)[keyof typeof DOCUMENTScalarFieldEnum]


  export const ELIGIBILITY_CRITERIAScalarFieldEnum: {
    criteria_id: 'criteria_id',
    scholarship_id: 'scholarship_id',
    criteria_name: 'criteria_name',
    criteria_description: 'criteria_description',
    min_value: 'min_value',
    max_value: 'max_value',
    weight: 'weight'
  };

  export type ELIGIBILITY_CRITERIAScalarFieldEnum = (typeof ELIGIBILITY_CRITERIAScalarFieldEnum)[keyof typeof ELIGIBILITY_CRITERIAScalarFieldEnum]


  export const FAMILY_MEMBERScalarFieldEnum: {
    member_id: 'member_id',
    student_id: 'student_id',
    full_name: 'full_name',
    age: 'age',
    relationship: 'relationship',
    designation: 'designation',
    annual_income: 'annual_income',
    workplace: 'workplace',
    phone_number: 'phone_number'
  };

  export type FAMILY_MEMBERScalarFieldEnum = (typeof FAMILY_MEMBERScalarFieldEnum)[keyof typeof FAMILY_MEMBERScalarFieldEnum]


  export const NOTIFICATIONScalarFieldEnum: {
    notification_id: 'notification_id',
    user_id: 'user_id',
    message: 'message',
    created_at: 'created_at',
    is_read: 'is_read'
  };

  export type NOTIFICATIONScalarFieldEnum = (typeof NOTIFICATIONScalarFieldEnum)[keyof typeof NOTIFICATIONScalarFieldEnum]


  export const OTHER_FUNDINGScalarFieldEnum: {
    funding_id: 'funding_id',
    student_id: 'student_id',
    funding_name: 'funding_name',
    organization: 'organization',
    annual_amount: 'annual_amount',
    start_date: 'start_date',
    end_date: 'end_date'
  };

  export type OTHER_FUNDINGScalarFieldEnum = (typeof OTHER_FUNDINGScalarFieldEnum)[keyof typeof OTHER_FUNDINGScalarFieldEnum]


  export const PAYMENTScalarFieldEnum: {
    payment_id: 'payment_id',
    application_id: 'application_id',
    amount: 'amount',
    payment_date: 'payment_date',
    payment_method: 'payment_method',
    transaction_id: 'transaction_id',
    status: 'status'
  };

  export type PAYMENTScalarFieldEnum = (typeof PAYMENTScalarFieldEnum)[keyof typeof PAYMENTScalarFieldEnum]


  export const SCHOLARSHIPScalarFieldEnum: {
    scholarship_id: 'scholarship_id',
    name: 'name',
    description: 'description',
    amount: 'amount',
    no_of_students: 'no_of_students',
    application_deadline: 'application_deadline',
    start_date: 'start_date',
    end_date: 'end_date',
    provider_id: 'provider_id',
    is_active: 'is_active'
  };

  export type SCHOLARSHIPScalarFieldEnum = (typeof SCHOLARSHIPScalarFieldEnum)[keyof typeof SCHOLARSHIPScalarFieldEnum]


  export const SCHOLARSHIP_PROVIDERScalarFieldEnum: {
    provider_id: 'provider_id',
    name: 'name',
    contact_person: 'contact_person',
    phone: 'phone',
    email: 'email',
    address: 'address'
  };

  export type SCHOLARSHIP_PROVIDERScalarFieldEnum = (typeof SCHOLARSHIP_PROVIDERScalarFieldEnum)[keyof typeof SCHOLARSHIP_PROVIDERScalarFieldEnum]


  export const SIBLING_EDUCATIONScalarFieldEnum: {
    education_id: 'education_id',
    student_id: 'student_id',
    member_id: 'member_id',
    institution: 'institution',
    year_grade: 'year_grade',
    registration_course: 'registration_course'
  };

  export type SIBLING_EDUCATIONScalarFieldEnum = (typeof SIBLING_EDUCATIONScalarFieldEnum)[keyof typeof SIBLING_EDUCATIONScalarFieldEnum]


  export const STUDENTScalarFieldEnum: {
    student_id: 'student_id',
    user_id: 'user_id',
    full_name: 'full_name',
    registration_no: 'registration_no',
    date_of_birth: 'date_of_birth',
    permanent_address: 'permanent_address',
    admission_date: 'admission_date',
    year_of_study: 'year_of_study',
    gender: 'gender',
    phone_number: 'phone_number',
    email: 'email',
    school_name: 'school_name',
    unmarried_siblings: 'unmarried_siblings'
  };

  export type STUDENTScalarFieldEnum = (typeof STUDENTScalarFieldEnum)[keyof typeof STUDENTScalarFieldEnum]


  export const USERScalarFieldEnum: {
    user_id: 'user_id',
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    username: 'username',
    password: 'password',
    role: 'role',
    created_at: 'created_at'
  };

  export type USERScalarFieldEnum = (typeof USERScalarFieldEnum)[keyof typeof USERScalarFieldEnum]


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


  export const APPLICATIONOrderByRelevanceFieldEnum: {
    reviewer_comments: 'reviewer_comments'
  };

  export type APPLICATIONOrderByRelevanceFieldEnum = (typeof APPLICATIONOrderByRelevanceFieldEnum)[keyof typeof APPLICATIONOrderByRelevanceFieldEnum]


  export const COMMITTEE_REVIEWOrderByRelevanceFieldEnum: {
    comments: 'comments'
  };

  export type COMMITTEE_REVIEWOrderByRelevanceFieldEnum = (typeof COMMITTEE_REVIEWOrderByRelevanceFieldEnum)[keyof typeof COMMITTEE_REVIEWOrderByRelevanceFieldEnum]


  export const DOCUMENTOrderByRelevanceFieldEnum: {
    document_type: 'document_type',
    file_name: 'file_name',
    file_path: 'file_path'
  };

  export type DOCUMENTOrderByRelevanceFieldEnum = (typeof DOCUMENTOrderByRelevanceFieldEnum)[keyof typeof DOCUMENTOrderByRelevanceFieldEnum]


  export const ELIGIBILITY_CRITERIAOrderByRelevanceFieldEnum: {
    criteria_name: 'criteria_name',
    criteria_description: 'criteria_description'
  };

  export type ELIGIBILITY_CRITERIAOrderByRelevanceFieldEnum = (typeof ELIGIBILITY_CRITERIAOrderByRelevanceFieldEnum)[keyof typeof ELIGIBILITY_CRITERIAOrderByRelevanceFieldEnum]


  export const FAMILY_MEMBEROrderByRelevanceFieldEnum: {
    full_name: 'full_name',
    relationship: 'relationship',
    designation: 'designation',
    workplace: 'workplace',
    phone_number: 'phone_number'
  };

  export type FAMILY_MEMBEROrderByRelevanceFieldEnum = (typeof FAMILY_MEMBEROrderByRelevanceFieldEnum)[keyof typeof FAMILY_MEMBEROrderByRelevanceFieldEnum]


  export const NOTIFICATIONOrderByRelevanceFieldEnum: {
    message: 'message'
  };

  export type NOTIFICATIONOrderByRelevanceFieldEnum = (typeof NOTIFICATIONOrderByRelevanceFieldEnum)[keyof typeof NOTIFICATIONOrderByRelevanceFieldEnum]


  export const OTHER_FUNDINGOrderByRelevanceFieldEnum: {
    funding_name: 'funding_name',
    organization: 'organization'
  };

  export type OTHER_FUNDINGOrderByRelevanceFieldEnum = (typeof OTHER_FUNDINGOrderByRelevanceFieldEnum)[keyof typeof OTHER_FUNDINGOrderByRelevanceFieldEnum]


  export const PAYMENTOrderByRelevanceFieldEnum: {
    payment_method: 'payment_method',
    transaction_id: 'transaction_id'
  };

  export type PAYMENTOrderByRelevanceFieldEnum = (typeof PAYMENTOrderByRelevanceFieldEnum)[keyof typeof PAYMENTOrderByRelevanceFieldEnum]


  export const SCHOLARSHIPOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description'
  };

  export type SCHOLARSHIPOrderByRelevanceFieldEnum = (typeof SCHOLARSHIPOrderByRelevanceFieldEnum)[keyof typeof SCHOLARSHIPOrderByRelevanceFieldEnum]


  export const SCHOLARSHIP_PROVIDEROrderByRelevanceFieldEnum: {
    name: 'name',
    contact_person: 'contact_person',
    phone: 'phone',
    email: 'email',
    address: 'address'
  };

  export type SCHOLARSHIP_PROVIDEROrderByRelevanceFieldEnum = (typeof SCHOLARSHIP_PROVIDEROrderByRelevanceFieldEnum)[keyof typeof SCHOLARSHIP_PROVIDEROrderByRelevanceFieldEnum]


  export const SIBLING_EDUCATIONOrderByRelevanceFieldEnum: {
    institution: 'institution',
    year_grade: 'year_grade',
    registration_course: 'registration_course'
  };

  export type SIBLING_EDUCATIONOrderByRelevanceFieldEnum = (typeof SIBLING_EDUCATIONOrderByRelevanceFieldEnum)[keyof typeof SIBLING_EDUCATIONOrderByRelevanceFieldEnum]


  export const STUDENTOrderByRelevanceFieldEnum: {
    full_name: 'full_name',
    registration_no: 'registration_no',
    permanent_address: 'permanent_address',
    phone_number: 'phone_number',
    email: 'email',
    school_name: 'school_name'
  };

  export type STUDENTOrderByRelevanceFieldEnum = (typeof STUDENTOrderByRelevanceFieldEnum)[keyof typeof STUDENTOrderByRelevanceFieldEnum]


  export const USEROrderByRelevanceFieldEnum: {
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    username: 'username',
    password: 'password'
  };

  export type USEROrderByRelevanceFieldEnum = (typeof USEROrderByRelevanceFieldEnum)[keyof typeof USEROrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'APPLICATION_status'
   */
  export type EnumAPPLICATION_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'APPLICATION_status'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'COMMITTEE_REVIEW_status'
   */
  export type EnumCOMMITTEE_REVIEW_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'COMMITTEE_REVIEW_status'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DOCUMENT_verification_status'
   */
  export type EnumDOCUMENT_verification_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DOCUMENT_verification_status'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'PAYMENT_status'
   */
  export type EnumPAYMENT_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PAYMENT_status'>
    


  /**
   * Reference to a field of type 'STUDENT_gender'
   */
  export type EnumSTUDENT_genderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'STUDENT_gender'>
    


  /**
   * Reference to a field of type 'USER_role'
   */
  export type EnumUSER_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'USER_role'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type APPLICATIONWhereInput = {
    AND?: APPLICATIONWhereInput | APPLICATIONWhereInput[]
    OR?: APPLICATIONWhereInput[]
    NOT?: APPLICATIONWhereInput | APPLICATIONWhereInput[]
    application_id?: IntFilter<"APPLICATION"> | number
    student_id?: IntNullableFilter<"APPLICATION"> | number | null
    scholarship_id?: IntNullableFilter<"APPLICATION"> | number | null
    submission_date?: DateTimeNullableFilter<"APPLICATION"> | Date | string | null
    status?: EnumAPPLICATION_statusNullableFilter<"APPLICATION"> | $Enums.APPLICATION_status | null
    total_points?: IntNullableFilter<"APPLICATION"> | number | null
    reviewer_comments?: StringNullableFilter<"APPLICATION"> | string | null
    review_date?: DateTimeNullableFilter<"APPLICATION"> | Date | string | null
    STUDENT?: XOR<STUDENTNullableScalarRelationFilter, STUDENTWhereInput> | null
    SCHOLARSHIP?: XOR<SCHOLARSHIPNullableScalarRelationFilter, SCHOLARSHIPWhereInput> | null
    COMMITTEE_REVIEW?: COMMITTEE_REVIEWListRelationFilter
    DOCUMENT?: DOCUMENTListRelationFilter
    PAYMENT?: PAYMENTListRelationFilter
  }

  export type APPLICATIONOrderByWithRelationInput = {
    application_id?: SortOrder
    student_id?: SortOrderInput | SortOrder
    scholarship_id?: SortOrderInput | SortOrder
    submission_date?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    total_points?: SortOrderInput | SortOrder
    reviewer_comments?: SortOrderInput | SortOrder
    review_date?: SortOrderInput | SortOrder
    STUDENT?: STUDENTOrderByWithRelationInput
    SCHOLARSHIP?: SCHOLARSHIPOrderByWithRelationInput
    COMMITTEE_REVIEW?: COMMITTEE_REVIEWOrderByRelationAggregateInput
    DOCUMENT?: DOCUMENTOrderByRelationAggregateInput
    PAYMENT?: PAYMENTOrderByRelationAggregateInput
    _relevance?: APPLICATIONOrderByRelevanceInput
  }

  export type APPLICATIONWhereUniqueInput = Prisma.AtLeast<{
    application_id?: number
    AND?: APPLICATIONWhereInput | APPLICATIONWhereInput[]
    OR?: APPLICATIONWhereInput[]
    NOT?: APPLICATIONWhereInput | APPLICATIONWhereInput[]
    student_id?: IntNullableFilter<"APPLICATION"> | number | null
    scholarship_id?: IntNullableFilter<"APPLICATION"> | number | null
    submission_date?: DateTimeNullableFilter<"APPLICATION"> | Date | string | null
    status?: EnumAPPLICATION_statusNullableFilter<"APPLICATION"> | $Enums.APPLICATION_status | null
    total_points?: IntNullableFilter<"APPLICATION"> | number | null
    reviewer_comments?: StringNullableFilter<"APPLICATION"> | string | null
    review_date?: DateTimeNullableFilter<"APPLICATION"> | Date | string | null
    STUDENT?: XOR<STUDENTNullableScalarRelationFilter, STUDENTWhereInput> | null
    SCHOLARSHIP?: XOR<SCHOLARSHIPNullableScalarRelationFilter, SCHOLARSHIPWhereInput> | null
    COMMITTEE_REVIEW?: COMMITTEE_REVIEWListRelationFilter
    DOCUMENT?: DOCUMENTListRelationFilter
    PAYMENT?: PAYMENTListRelationFilter
  }, "application_id">

  export type APPLICATIONOrderByWithAggregationInput = {
    application_id?: SortOrder
    student_id?: SortOrderInput | SortOrder
    scholarship_id?: SortOrderInput | SortOrder
    submission_date?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    total_points?: SortOrderInput | SortOrder
    reviewer_comments?: SortOrderInput | SortOrder
    review_date?: SortOrderInput | SortOrder
    _count?: APPLICATIONCountOrderByAggregateInput
    _avg?: APPLICATIONAvgOrderByAggregateInput
    _max?: APPLICATIONMaxOrderByAggregateInput
    _min?: APPLICATIONMinOrderByAggregateInput
    _sum?: APPLICATIONSumOrderByAggregateInput
  }

  export type APPLICATIONScalarWhereWithAggregatesInput = {
    AND?: APPLICATIONScalarWhereWithAggregatesInput | APPLICATIONScalarWhereWithAggregatesInput[]
    OR?: APPLICATIONScalarWhereWithAggregatesInput[]
    NOT?: APPLICATIONScalarWhereWithAggregatesInput | APPLICATIONScalarWhereWithAggregatesInput[]
    application_id?: IntWithAggregatesFilter<"APPLICATION"> | number
    student_id?: IntNullableWithAggregatesFilter<"APPLICATION"> | number | null
    scholarship_id?: IntNullableWithAggregatesFilter<"APPLICATION"> | number | null
    submission_date?: DateTimeNullableWithAggregatesFilter<"APPLICATION"> | Date | string | null
    status?: EnumAPPLICATION_statusNullableWithAggregatesFilter<"APPLICATION"> | $Enums.APPLICATION_status | null
    total_points?: IntNullableWithAggregatesFilter<"APPLICATION"> | number | null
    reviewer_comments?: StringNullableWithAggregatesFilter<"APPLICATION"> | string | null
    review_date?: DateTimeNullableWithAggregatesFilter<"APPLICATION"> | Date | string | null
  }

  export type COMMITTEE_REVIEWWhereInput = {
    AND?: COMMITTEE_REVIEWWhereInput | COMMITTEE_REVIEWWhereInput[]
    OR?: COMMITTEE_REVIEWWhereInput[]
    NOT?: COMMITTEE_REVIEWWhereInput | COMMITTEE_REVIEWWhereInput[]
    review_id?: IntFilter<"COMMITTEE_REVIEW"> | number
    application_id?: IntNullableFilter<"COMMITTEE_REVIEW"> | number | null
    reviewer_id?: IntNullableFilter<"COMMITTEE_REVIEW"> | number | null
    review_date?: DateTimeNullableFilter<"COMMITTEE_REVIEW"> | Date | string | null
    points_awarded?: IntNullableFilter<"COMMITTEE_REVIEW"> | number | null
    comments?: StringNullableFilter<"COMMITTEE_REVIEW"> | string | null
    status?: EnumCOMMITTEE_REVIEW_statusNullableFilter<"COMMITTEE_REVIEW"> | $Enums.COMMITTEE_REVIEW_status | null
    is_read?: BoolNullableFilter<"COMMITTEE_REVIEW"> | boolean | null
    APPLICATION?: XOR<APPLICATIONNullableScalarRelationFilter, APPLICATIONWhereInput> | null
    USER?: XOR<USERNullableScalarRelationFilter, USERWhereInput> | null
  }

  export type COMMITTEE_REVIEWOrderByWithRelationInput = {
    review_id?: SortOrder
    application_id?: SortOrderInput | SortOrder
    reviewer_id?: SortOrderInput | SortOrder
    review_date?: SortOrderInput | SortOrder
    points_awarded?: SortOrderInput | SortOrder
    comments?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    is_read?: SortOrderInput | SortOrder
    APPLICATION?: APPLICATIONOrderByWithRelationInput
    USER?: USEROrderByWithRelationInput
    _relevance?: COMMITTEE_REVIEWOrderByRelevanceInput
  }

  export type COMMITTEE_REVIEWWhereUniqueInput = Prisma.AtLeast<{
    review_id?: number
    AND?: COMMITTEE_REVIEWWhereInput | COMMITTEE_REVIEWWhereInput[]
    OR?: COMMITTEE_REVIEWWhereInput[]
    NOT?: COMMITTEE_REVIEWWhereInput | COMMITTEE_REVIEWWhereInput[]
    application_id?: IntNullableFilter<"COMMITTEE_REVIEW"> | number | null
    reviewer_id?: IntNullableFilter<"COMMITTEE_REVIEW"> | number | null
    review_date?: DateTimeNullableFilter<"COMMITTEE_REVIEW"> | Date | string | null
    points_awarded?: IntNullableFilter<"COMMITTEE_REVIEW"> | number | null
    comments?: StringNullableFilter<"COMMITTEE_REVIEW"> | string | null
    status?: EnumCOMMITTEE_REVIEW_statusNullableFilter<"COMMITTEE_REVIEW"> | $Enums.COMMITTEE_REVIEW_status | null
    is_read?: BoolNullableFilter<"COMMITTEE_REVIEW"> | boolean | null
    APPLICATION?: XOR<APPLICATIONNullableScalarRelationFilter, APPLICATIONWhereInput> | null
    USER?: XOR<USERNullableScalarRelationFilter, USERWhereInput> | null
  }, "review_id">

  export type COMMITTEE_REVIEWOrderByWithAggregationInput = {
    review_id?: SortOrder
    application_id?: SortOrderInput | SortOrder
    reviewer_id?: SortOrderInput | SortOrder
    review_date?: SortOrderInput | SortOrder
    points_awarded?: SortOrderInput | SortOrder
    comments?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    is_read?: SortOrderInput | SortOrder
    _count?: COMMITTEE_REVIEWCountOrderByAggregateInput
    _avg?: COMMITTEE_REVIEWAvgOrderByAggregateInput
    _max?: COMMITTEE_REVIEWMaxOrderByAggregateInput
    _min?: COMMITTEE_REVIEWMinOrderByAggregateInput
    _sum?: COMMITTEE_REVIEWSumOrderByAggregateInput
  }

  export type COMMITTEE_REVIEWScalarWhereWithAggregatesInput = {
    AND?: COMMITTEE_REVIEWScalarWhereWithAggregatesInput | COMMITTEE_REVIEWScalarWhereWithAggregatesInput[]
    OR?: COMMITTEE_REVIEWScalarWhereWithAggregatesInput[]
    NOT?: COMMITTEE_REVIEWScalarWhereWithAggregatesInput | COMMITTEE_REVIEWScalarWhereWithAggregatesInput[]
    review_id?: IntWithAggregatesFilter<"COMMITTEE_REVIEW"> | number
    application_id?: IntNullableWithAggregatesFilter<"COMMITTEE_REVIEW"> | number | null
    reviewer_id?: IntNullableWithAggregatesFilter<"COMMITTEE_REVIEW"> | number | null
    review_date?: DateTimeNullableWithAggregatesFilter<"COMMITTEE_REVIEW"> | Date | string | null
    points_awarded?: IntNullableWithAggregatesFilter<"COMMITTEE_REVIEW"> | number | null
    comments?: StringNullableWithAggregatesFilter<"COMMITTEE_REVIEW"> | string | null
    status?: EnumCOMMITTEE_REVIEW_statusNullableWithAggregatesFilter<"COMMITTEE_REVIEW"> | $Enums.COMMITTEE_REVIEW_status | null
    is_read?: BoolNullableWithAggregatesFilter<"COMMITTEE_REVIEW"> | boolean | null
  }

  export type DOCUMENTWhereInput = {
    AND?: DOCUMENTWhereInput | DOCUMENTWhereInput[]
    OR?: DOCUMENTWhereInput[]
    NOT?: DOCUMENTWhereInput | DOCUMENTWhereInput[]
    document_id?: IntFilter<"DOCUMENT"> | number
    application_id?: IntNullableFilter<"DOCUMENT"> | number | null
    document_type?: StringNullableFilter<"DOCUMENT"> | string | null
    file_name?: StringNullableFilter<"DOCUMENT"> | string | null
    file_path?: StringNullableFilter<"DOCUMENT"> | string | null
    upload_date?: DateTimeNullableFilter<"DOCUMENT"> | Date | string | null
    verification_status?: EnumDOCUMENT_verification_statusNullableFilter<"DOCUMENT"> | $Enums.DOCUMENT_verification_status | null
    APPLICATION?: XOR<APPLICATIONNullableScalarRelationFilter, APPLICATIONWhereInput> | null
  }

  export type DOCUMENTOrderByWithRelationInput = {
    document_id?: SortOrder
    application_id?: SortOrderInput | SortOrder
    document_type?: SortOrderInput | SortOrder
    file_name?: SortOrderInput | SortOrder
    file_path?: SortOrderInput | SortOrder
    upload_date?: SortOrderInput | SortOrder
    verification_status?: SortOrderInput | SortOrder
    APPLICATION?: APPLICATIONOrderByWithRelationInput
    _relevance?: DOCUMENTOrderByRelevanceInput
  }

  export type DOCUMENTWhereUniqueInput = Prisma.AtLeast<{
    document_id?: number
    AND?: DOCUMENTWhereInput | DOCUMENTWhereInput[]
    OR?: DOCUMENTWhereInput[]
    NOT?: DOCUMENTWhereInput | DOCUMENTWhereInput[]
    application_id?: IntNullableFilter<"DOCUMENT"> | number | null
    document_type?: StringNullableFilter<"DOCUMENT"> | string | null
    file_name?: StringNullableFilter<"DOCUMENT"> | string | null
    file_path?: StringNullableFilter<"DOCUMENT"> | string | null
    upload_date?: DateTimeNullableFilter<"DOCUMENT"> | Date | string | null
    verification_status?: EnumDOCUMENT_verification_statusNullableFilter<"DOCUMENT"> | $Enums.DOCUMENT_verification_status | null
    APPLICATION?: XOR<APPLICATIONNullableScalarRelationFilter, APPLICATIONWhereInput> | null
  }, "document_id">

  export type DOCUMENTOrderByWithAggregationInput = {
    document_id?: SortOrder
    application_id?: SortOrderInput | SortOrder
    document_type?: SortOrderInput | SortOrder
    file_name?: SortOrderInput | SortOrder
    file_path?: SortOrderInput | SortOrder
    upload_date?: SortOrderInput | SortOrder
    verification_status?: SortOrderInput | SortOrder
    _count?: DOCUMENTCountOrderByAggregateInput
    _avg?: DOCUMENTAvgOrderByAggregateInput
    _max?: DOCUMENTMaxOrderByAggregateInput
    _min?: DOCUMENTMinOrderByAggregateInput
    _sum?: DOCUMENTSumOrderByAggregateInput
  }

  export type DOCUMENTScalarWhereWithAggregatesInput = {
    AND?: DOCUMENTScalarWhereWithAggregatesInput | DOCUMENTScalarWhereWithAggregatesInput[]
    OR?: DOCUMENTScalarWhereWithAggregatesInput[]
    NOT?: DOCUMENTScalarWhereWithAggregatesInput | DOCUMENTScalarWhereWithAggregatesInput[]
    document_id?: IntWithAggregatesFilter<"DOCUMENT"> | number
    application_id?: IntNullableWithAggregatesFilter<"DOCUMENT"> | number | null
    document_type?: StringNullableWithAggregatesFilter<"DOCUMENT"> | string | null
    file_name?: StringNullableWithAggregatesFilter<"DOCUMENT"> | string | null
    file_path?: StringNullableWithAggregatesFilter<"DOCUMENT"> | string | null
    upload_date?: DateTimeNullableWithAggregatesFilter<"DOCUMENT"> | Date | string | null
    verification_status?: EnumDOCUMENT_verification_statusNullableWithAggregatesFilter<"DOCUMENT"> | $Enums.DOCUMENT_verification_status | null
  }

  export type ELIGIBILITY_CRITERIAWhereInput = {
    AND?: ELIGIBILITY_CRITERIAWhereInput | ELIGIBILITY_CRITERIAWhereInput[]
    OR?: ELIGIBILITY_CRITERIAWhereInput[]
    NOT?: ELIGIBILITY_CRITERIAWhereInput | ELIGIBILITY_CRITERIAWhereInput[]
    criteria_id?: IntFilter<"ELIGIBILITY_CRITERIA"> | number
    scholarship_id?: IntNullableFilter<"ELIGIBILITY_CRITERIA"> | number | null
    criteria_name?: StringNullableFilter<"ELIGIBILITY_CRITERIA"> | string | null
    criteria_description?: StringNullableFilter<"ELIGIBILITY_CRITERIA"> | string | null
    min_value?: DecimalNullableFilter<"ELIGIBILITY_CRITERIA"> | Decimal | DecimalJsLike | number | string | null
    max_value?: DecimalNullableFilter<"ELIGIBILITY_CRITERIA"> | Decimal | DecimalJsLike | number | string | null
    weight?: IntNullableFilter<"ELIGIBILITY_CRITERIA"> | number | null
    SCHOLARSHIP?: XOR<SCHOLARSHIPNullableScalarRelationFilter, SCHOLARSHIPWhereInput> | null
  }

  export type ELIGIBILITY_CRITERIAOrderByWithRelationInput = {
    criteria_id?: SortOrder
    scholarship_id?: SortOrderInput | SortOrder
    criteria_name?: SortOrderInput | SortOrder
    criteria_description?: SortOrderInput | SortOrder
    min_value?: SortOrderInput | SortOrder
    max_value?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    SCHOLARSHIP?: SCHOLARSHIPOrderByWithRelationInput
    _relevance?: ELIGIBILITY_CRITERIAOrderByRelevanceInput
  }

  export type ELIGIBILITY_CRITERIAWhereUniqueInput = Prisma.AtLeast<{
    criteria_id?: number
    AND?: ELIGIBILITY_CRITERIAWhereInput | ELIGIBILITY_CRITERIAWhereInput[]
    OR?: ELIGIBILITY_CRITERIAWhereInput[]
    NOT?: ELIGIBILITY_CRITERIAWhereInput | ELIGIBILITY_CRITERIAWhereInput[]
    scholarship_id?: IntNullableFilter<"ELIGIBILITY_CRITERIA"> | number | null
    criteria_name?: StringNullableFilter<"ELIGIBILITY_CRITERIA"> | string | null
    criteria_description?: StringNullableFilter<"ELIGIBILITY_CRITERIA"> | string | null
    min_value?: DecimalNullableFilter<"ELIGIBILITY_CRITERIA"> | Decimal | DecimalJsLike | number | string | null
    max_value?: DecimalNullableFilter<"ELIGIBILITY_CRITERIA"> | Decimal | DecimalJsLike | number | string | null
    weight?: IntNullableFilter<"ELIGIBILITY_CRITERIA"> | number | null
    SCHOLARSHIP?: XOR<SCHOLARSHIPNullableScalarRelationFilter, SCHOLARSHIPWhereInput> | null
  }, "criteria_id">

  export type ELIGIBILITY_CRITERIAOrderByWithAggregationInput = {
    criteria_id?: SortOrder
    scholarship_id?: SortOrderInput | SortOrder
    criteria_name?: SortOrderInput | SortOrder
    criteria_description?: SortOrderInput | SortOrder
    min_value?: SortOrderInput | SortOrder
    max_value?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    _count?: ELIGIBILITY_CRITERIACountOrderByAggregateInput
    _avg?: ELIGIBILITY_CRITERIAAvgOrderByAggregateInput
    _max?: ELIGIBILITY_CRITERIAMaxOrderByAggregateInput
    _min?: ELIGIBILITY_CRITERIAMinOrderByAggregateInput
    _sum?: ELIGIBILITY_CRITERIASumOrderByAggregateInput
  }

  export type ELIGIBILITY_CRITERIAScalarWhereWithAggregatesInput = {
    AND?: ELIGIBILITY_CRITERIAScalarWhereWithAggregatesInput | ELIGIBILITY_CRITERIAScalarWhereWithAggregatesInput[]
    OR?: ELIGIBILITY_CRITERIAScalarWhereWithAggregatesInput[]
    NOT?: ELIGIBILITY_CRITERIAScalarWhereWithAggregatesInput | ELIGIBILITY_CRITERIAScalarWhereWithAggregatesInput[]
    criteria_id?: IntWithAggregatesFilter<"ELIGIBILITY_CRITERIA"> | number
    scholarship_id?: IntNullableWithAggregatesFilter<"ELIGIBILITY_CRITERIA"> | number | null
    criteria_name?: StringNullableWithAggregatesFilter<"ELIGIBILITY_CRITERIA"> | string | null
    criteria_description?: StringNullableWithAggregatesFilter<"ELIGIBILITY_CRITERIA"> | string | null
    min_value?: DecimalNullableWithAggregatesFilter<"ELIGIBILITY_CRITERIA"> | Decimal | DecimalJsLike | number | string | null
    max_value?: DecimalNullableWithAggregatesFilter<"ELIGIBILITY_CRITERIA"> | Decimal | DecimalJsLike | number | string | null
    weight?: IntNullableWithAggregatesFilter<"ELIGIBILITY_CRITERIA"> | number | null
  }

  export type FAMILY_MEMBERWhereInput = {
    AND?: FAMILY_MEMBERWhereInput | FAMILY_MEMBERWhereInput[]
    OR?: FAMILY_MEMBERWhereInput[]
    NOT?: FAMILY_MEMBERWhereInput | FAMILY_MEMBERWhereInput[]
    member_id?: IntFilter<"FAMILY_MEMBER"> | number
    student_id?: IntNullableFilter<"FAMILY_MEMBER"> | number | null
    full_name?: StringNullableFilter<"FAMILY_MEMBER"> | string | null
    age?: IntNullableFilter<"FAMILY_MEMBER"> | number | null
    relationship?: StringNullableFilter<"FAMILY_MEMBER"> | string | null
    designation?: StringNullableFilter<"FAMILY_MEMBER"> | string | null
    annual_income?: DecimalNullableFilter<"FAMILY_MEMBER"> | Decimal | DecimalJsLike | number | string | null
    workplace?: StringNullableFilter<"FAMILY_MEMBER"> | string | null
    phone_number?: StringNullableFilter<"FAMILY_MEMBER"> | string | null
    STUDENT?: XOR<STUDENTNullableScalarRelationFilter, STUDENTWhereInput> | null
    SIBLING_EDUCATION?: SIBLING_EDUCATIONListRelationFilter
  }

  export type FAMILY_MEMBEROrderByWithRelationInput = {
    member_id?: SortOrder
    student_id?: SortOrderInput | SortOrder
    full_name?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    relationship?: SortOrderInput | SortOrder
    designation?: SortOrderInput | SortOrder
    annual_income?: SortOrderInput | SortOrder
    workplace?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    STUDENT?: STUDENTOrderByWithRelationInput
    SIBLING_EDUCATION?: SIBLING_EDUCATIONOrderByRelationAggregateInput
    _relevance?: FAMILY_MEMBEROrderByRelevanceInput
  }

  export type FAMILY_MEMBERWhereUniqueInput = Prisma.AtLeast<{
    member_id?: number
    AND?: FAMILY_MEMBERWhereInput | FAMILY_MEMBERWhereInput[]
    OR?: FAMILY_MEMBERWhereInput[]
    NOT?: FAMILY_MEMBERWhereInput | FAMILY_MEMBERWhereInput[]
    student_id?: IntNullableFilter<"FAMILY_MEMBER"> | number | null
    full_name?: StringNullableFilter<"FAMILY_MEMBER"> | string | null
    age?: IntNullableFilter<"FAMILY_MEMBER"> | number | null
    relationship?: StringNullableFilter<"FAMILY_MEMBER"> | string | null
    designation?: StringNullableFilter<"FAMILY_MEMBER"> | string | null
    annual_income?: DecimalNullableFilter<"FAMILY_MEMBER"> | Decimal | DecimalJsLike | number | string | null
    workplace?: StringNullableFilter<"FAMILY_MEMBER"> | string | null
    phone_number?: StringNullableFilter<"FAMILY_MEMBER"> | string | null
    STUDENT?: XOR<STUDENTNullableScalarRelationFilter, STUDENTWhereInput> | null
    SIBLING_EDUCATION?: SIBLING_EDUCATIONListRelationFilter
  }, "member_id">

  export type FAMILY_MEMBEROrderByWithAggregationInput = {
    member_id?: SortOrder
    student_id?: SortOrderInput | SortOrder
    full_name?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    relationship?: SortOrderInput | SortOrder
    designation?: SortOrderInput | SortOrder
    annual_income?: SortOrderInput | SortOrder
    workplace?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    _count?: FAMILY_MEMBERCountOrderByAggregateInput
    _avg?: FAMILY_MEMBERAvgOrderByAggregateInput
    _max?: FAMILY_MEMBERMaxOrderByAggregateInput
    _min?: FAMILY_MEMBERMinOrderByAggregateInput
    _sum?: FAMILY_MEMBERSumOrderByAggregateInput
  }

  export type FAMILY_MEMBERScalarWhereWithAggregatesInput = {
    AND?: FAMILY_MEMBERScalarWhereWithAggregatesInput | FAMILY_MEMBERScalarWhereWithAggregatesInput[]
    OR?: FAMILY_MEMBERScalarWhereWithAggregatesInput[]
    NOT?: FAMILY_MEMBERScalarWhereWithAggregatesInput | FAMILY_MEMBERScalarWhereWithAggregatesInput[]
    member_id?: IntWithAggregatesFilter<"FAMILY_MEMBER"> | number
    student_id?: IntNullableWithAggregatesFilter<"FAMILY_MEMBER"> | number | null
    full_name?: StringNullableWithAggregatesFilter<"FAMILY_MEMBER"> | string | null
    age?: IntNullableWithAggregatesFilter<"FAMILY_MEMBER"> | number | null
    relationship?: StringNullableWithAggregatesFilter<"FAMILY_MEMBER"> | string | null
    designation?: StringNullableWithAggregatesFilter<"FAMILY_MEMBER"> | string | null
    annual_income?: DecimalNullableWithAggregatesFilter<"FAMILY_MEMBER"> | Decimal | DecimalJsLike | number | string | null
    workplace?: StringNullableWithAggregatesFilter<"FAMILY_MEMBER"> | string | null
    phone_number?: StringNullableWithAggregatesFilter<"FAMILY_MEMBER"> | string | null
  }

  export type NOTIFICATIONWhereInput = {
    AND?: NOTIFICATIONWhereInput | NOTIFICATIONWhereInput[]
    OR?: NOTIFICATIONWhereInput[]
    NOT?: NOTIFICATIONWhereInput | NOTIFICATIONWhereInput[]
    notification_id?: IntFilter<"NOTIFICATION"> | number
    user_id?: IntNullableFilter<"NOTIFICATION"> | number | null
    message?: StringNullableFilter<"NOTIFICATION"> | string | null
    created_at?: DateTimeNullableFilter<"NOTIFICATION"> | Date | string | null
    is_read?: BoolNullableFilter<"NOTIFICATION"> | boolean | null
    USER?: XOR<USERNullableScalarRelationFilter, USERWhereInput> | null
  }

  export type NOTIFICATIONOrderByWithRelationInput = {
    notification_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    is_read?: SortOrderInput | SortOrder
    USER?: USEROrderByWithRelationInput
    _relevance?: NOTIFICATIONOrderByRelevanceInput
  }

  export type NOTIFICATIONWhereUniqueInput = Prisma.AtLeast<{
    notification_id?: number
    AND?: NOTIFICATIONWhereInput | NOTIFICATIONWhereInput[]
    OR?: NOTIFICATIONWhereInput[]
    NOT?: NOTIFICATIONWhereInput | NOTIFICATIONWhereInput[]
    user_id?: IntNullableFilter<"NOTIFICATION"> | number | null
    message?: StringNullableFilter<"NOTIFICATION"> | string | null
    created_at?: DateTimeNullableFilter<"NOTIFICATION"> | Date | string | null
    is_read?: BoolNullableFilter<"NOTIFICATION"> | boolean | null
    USER?: XOR<USERNullableScalarRelationFilter, USERWhereInput> | null
  }, "notification_id">

  export type NOTIFICATIONOrderByWithAggregationInput = {
    notification_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    is_read?: SortOrderInput | SortOrder
    _count?: NOTIFICATIONCountOrderByAggregateInput
    _avg?: NOTIFICATIONAvgOrderByAggregateInput
    _max?: NOTIFICATIONMaxOrderByAggregateInput
    _min?: NOTIFICATIONMinOrderByAggregateInput
    _sum?: NOTIFICATIONSumOrderByAggregateInput
  }

  export type NOTIFICATIONScalarWhereWithAggregatesInput = {
    AND?: NOTIFICATIONScalarWhereWithAggregatesInput | NOTIFICATIONScalarWhereWithAggregatesInput[]
    OR?: NOTIFICATIONScalarWhereWithAggregatesInput[]
    NOT?: NOTIFICATIONScalarWhereWithAggregatesInput | NOTIFICATIONScalarWhereWithAggregatesInput[]
    notification_id?: IntWithAggregatesFilter<"NOTIFICATION"> | number
    user_id?: IntNullableWithAggregatesFilter<"NOTIFICATION"> | number | null
    message?: StringNullableWithAggregatesFilter<"NOTIFICATION"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"NOTIFICATION"> | Date | string | null
    is_read?: BoolNullableWithAggregatesFilter<"NOTIFICATION"> | boolean | null
  }

  export type OTHER_FUNDINGWhereInput = {
    AND?: OTHER_FUNDINGWhereInput | OTHER_FUNDINGWhereInput[]
    OR?: OTHER_FUNDINGWhereInput[]
    NOT?: OTHER_FUNDINGWhereInput | OTHER_FUNDINGWhereInput[]
    funding_id?: IntFilter<"OTHER_FUNDING"> | number
    student_id?: IntNullableFilter<"OTHER_FUNDING"> | number | null
    funding_name?: StringNullableFilter<"OTHER_FUNDING"> | string | null
    organization?: StringNullableFilter<"OTHER_FUNDING"> | string | null
    annual_amount?: DecimalNullableFilter<"OTHER_FUNDING"> | Decimal | DecimalJsLike | number | string | null
    start_date?: DateTimeNullableFilter<"OTHER_FUNDING"> | Date | string | null
    end_date?: DateTimeNullableFilter<"OTHER_FUNDING"> | Date | string | null
    STUDENT?: XOR<STUDENTNullableScalarRelationFilter, STUDENTWhereInput> | null
  }

  export type OTHER_FUNDINGOrderByWithRelationInput = {
    funding_id?: SortOrder
    student_id?: SortOrderInput | SortOrder
    funding_name?: SortOrderInput | SortOrder
    organization?: SortOrderInput | SortOrder
    annual_amount?: SortOrderInput | SortOrder
    start_date?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    STUDENT?: STUDENTOrderByWithRelationInput
    _relevance?: OTHER_FUNDINGOrderByRelevanceInput
  }

  export type OTHER_FUNDINGWhereUniqueInput = Prisma.AtLeast<{
    funding_id?: number
    AND?: OTHER_FUNDINGWhereInput | OTHER_FUNDINGWhereInput[]
    OR?: OTHER_FUNDINGWhereInput[]
    NOT?: OTHER_FUNDINGWhereInput | OTHER_FUNDINGWhereInput[]
    student_id?: IntNullableFilter<"OTHER_FUNDING"> | number | null
    funding_name?: StringNullableFilter<"OTHER_FUNDING"> | string | null
    organization?: StringNullableFilter<"OTHER_FUNDING"> | string | null
    annual_amount?: DecimalNullableFilter<"OTHER_FUNDING"> | Decimal | DecimalJsLike | number | string | null
    start_date?: DateTimeNullableFilter<"OTHER_FUNDING"> | Date | string | null
    end_date?: DateTimeNullableFilter<"OTHER_FUNDING"> | Date | string | null
    STUDENT?: XOR<STUDENTNullableScalarRelationFilter, STUDENTWhereInput> | null
  }, "funding_id">

  export type OTHER_FUNDINGOrderByWithAggregationInput = {
    funding_id?: SortOrder
    student_id?: SortOrderInput | SortOrder
    funding_name?: SortOrderInput | SortOrder
    organization?: SortOrderInput | SortOrder
    annual_amount?: SortOrderInput | SortOrder
    start_date?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    _count?: OTHER_FUNDINGCountOrderByAggregateInput
    _avg?: OTHER_FUNDINGAvgOrderByAggregateInput
    _max?: OTHER_FUNDINGMaxOrderByAggregateInput
    _min?: OTHER_FUNDINGMinOrderByAggregateInput
    _sum?: OTHER_FUNDINGSumOrderByAggregateInput
  }

  export type OTHER_FUNDINGScalarWhereWithAggregatesInput = {
    AND?: OTHER_FUNDINGScalarWhereWithAggregatesInput | OTHER_FUNDINGScalarWhereWithAggregatesInput[]
    OR?: OTHER_FUNDINGScalarWhereWithAggregatesInput[]
    NOT?: OTHER_FUNDINGScalarWhereWithAggregatesInput | OTHER_FUNDINGScalarWhereWithAggregatesInput[]
    funding_id?: IntWithAggregatesFilter<"OTHER_FUNDING"> | number
    student_id?: IntNullableWithAggregatesFilter<"OTHER_FUNDING"> | number | null
    funding_name?: StringNullableWithAggregatesFilter<"OTHER_FUNDING"> | string | null
    organization?: StringNullableWithAggregatesFilter<"OTHER_FUNDING"> | string | null
    annual_amount?: DecimalNullableWithAggregatesFilter<"OTHER_FUNDING"> | Decimal | DecimalJsLike | number | string | null
    start_date?: DateTimeNullableWithAggregatesFilter<"OTHER_FUNDING"> | Date | string | null
    end_date?: DateTimeNullableWithAggregatesFilter<"OTHER_FUNDING"> | Date | string | null
  }

  export type PAYMENTWhereInput = {
    AND?: PAYMENTWhereInput | PAYMENTWhereInput[]
    OR?: PAYMENTWhereInput[]
    NOT?: PAYMENTWhereInput | PAYMENTWhereInput[]
    payment_id?: IntFilter<"PAYMENT"> | number
    application_id?: IntNullableFilter<"PAYMENT"> | number | null
    amount?: DecimalNullableFilter<"PAYMENT"> | Decimal | DecimalJsLike | number | string | null
    payment_date?: DateTimeNullableFilter<"PAYMENT"> | Date | string | null
    payment_method?: StringNullableFilter<"PAYMENT"> | string | null
    transaction_id?: StringNullableFilter<"PAYMENT"> | string | null
    status?: EnumPAYMENT_statusNullableFilter<"PAYMENT"> | $Enums.PAYMENT_status | null
    APPLICATION?: XOR<APPLICATIONNullableScalarRelationFilter, APPLICATIONWhereInput> | null
  }

  export type PAYMENTOrderByWithRelationInput = {
    payment_id?: SortOrder
    application_id?: SortOrderInput | SortOrder
    amount?: SortOrderInput | SortOrder
    payment_date?: SortOrderInput | SortOrder
    payment_method?: SortOrderInput | SortOrder
    transaction_id?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    APPLICATION?: APPLICATIONOrderByWithRelationInput
    _relevance?: PAYMENTOrderByRelevanceInput
  }

  export type PAYMENTWhereUniqueInput = Prisma.AtLeast<{
    payment_id?: number
    AND?: PAYMENTWhereInput | PAYMENTWhereInput[]
    OR?: PAYMENTWhereInput[]
    NOT?: PAYMENTWhereInput | PAYMENTWhereInput[]
    application_id?: IntNullableFilter<"PAYMENT"> | number | null
    amount?: DecimalNullableFilter<"PAYMENT"> | Decimal | DecimalJsLike | number | string | null
    payment_date?: DateTimeNullableFilter<"PAYMENT"> | Date | string | null
    payment_method?: StringNullableFilter<"PAYMENT"> | string | null
    transaction_id?: StringNullableFilter<"PAYMENT"> | string | null
    status?: EnumPAYMENT_statusNullableFilter<"PAYMENT"> | $Enums.PAYMENT_status | null
    APPLICATION?: XOR<APPLICATIONNullableScalarRelationFilter, APPLICATIONWhereInput> | null
  }, "payment_id">

  export type PAYMENTOrderByWithAggregationInput = {
    payment_id?: SortOrder
    application_id?: SortOrderInput | SortOrder
    amount?: SortOrderInput | SortOrder
    payment_date?: SortOrderInput | SortOrder
    payment_method?: SortOrderInput | SortOrder
    transaction_id?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    _count?: PAYMENTCountOrderByAggregateInput
    _avg?: PAYMENTAvgOrderByAggregateInput
    _max?: PAYMENTMaxOrderByAggregateInput
    _min?: PAYMENTMinOrderByAggregateInput
    _sum?: PAYMENTSumOrderByAggregateInput
  }

  export type PAYMENTScalarWhereWithAggregatesInput = {
    AND?: PAYMENTScalarWhereWithAggregatesInput | PAYMENTScalarWhereWithAggregatesInput[]
    OR?: PAYMENTScalarWhereWithAggregatesInput[]
    NOT?: PAYMENTScalarWhereWithAggregatesInput | PAYMENTScalarWhereWithAggregatesInput[]
    payment_id?: IntWithAggregatesFilter<"PAYMENT"> | number
    application_id?: IntNullableWithAggregatesFilter<"PAYMENT"> | number | null
    amount?: DecimalNullableWithAggregatesFilter<"PAYMENT"> | Decimal | DecimalJsLike | number | string | null
    payment_date?: DateTimeNullableWithAggregatesFilter<"PAYMENT"> | Date | string | null
    payment_method?: StringNullableWithAggregatesFilter<"PAYMENT"> | string | null
    transaction_id?: StringNullableWithAggregatesFilter<"PAYMENT"> | string | null
    status?: EnumPAYMENT_statusNullableWithAggregatesFilter<"PAYMENT"> | $Enums.PAYMENT_status | null
  }

  export type SCHOLARSHIPWhereInput = {
    AND?: SCHOLARSHIPWhereInput | SCHOLARSHIPWhereInput[]
    OR?: SCHOLARSHIPWhereInput[]
    NOT?: SCHOLARSHIPWhereInput | SCHOLARSHIPWhereInput[]
    scholarship_id?: IntFilter<"SCHOLARSHIP"> | number
    name?: StringNullableFilter<"SCHOLARSHIP"> | string | null
    description?: StringNullableFilter<"SCHOLARSHIP"> | string | null
    amount?: DecimalNullableFilter<"SCHOLARSHIP"> | Decimal | DecimalJsLike | number | string | null
    no_of_students?: IntNullableFilter<"SCHOLARSHIP"> | number | null
    application_deadline?: DateTimeNullableFilter<"SCHOLARSHIP"> | Date | string | null
    start_date?: DateTimeNullableFilter<"SCHOLARSHIP"> | Date | string | null
    end_date?: DateTimeNullableFilter<"SCHOLARSHIP"> | Date | string | null
    provider_id?: IntNullableFilter<"SCHOLARSHIP"> | number | null
    is_active?: BoolNullableFilter<"SCHOLARSHIP"> | boolean | null
    APPLICATION?: APPLICATIONListRelationFilter
    ELIGIBILITY_CRITERIA?: ELIGIBILITY_CRITERIAListRelationFilter
    SCHOLARSHIP_PROVIDER?: XOR<SCHOLARSHIP_PROVIDERNullableScalarRelationFilter, SCHOLARSHIP_PROVIDERWhereInput> | null
  }

  export type SCHOLARSHIPOrderByWithRelationInput = {
    scholarship_id?: SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    amount?: SortOrderInput | SortOrder
    no_of_students?: SortOrderInput | SortOrder
    application_deadline?: SortOrderInput | SortOrder
    start_date?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    provider_id?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    APPLICATION?: APPLICATIONOrderByRelationAggregateInput
    ELIGIBILITY_CRITERIA?: ELIGIBILITY_CRITERIAOrderByRelationAggregateInput
    SCHOLARSHIP_PROVIDER?: SCHOLARSHIP_PROVIDEROrderByWithRelationInput
    _relevance?: SCHOLARSHIPOrderByRelevanceInput
  }

  export type SCHOLARSHIPWhereUniqueInput = Prisma.AtLeast<{
    scholarship_id?: number
    AND?: SCHOLARSHIPWhereInput | SCHOLARSHIPWhereInput[]
    OR?: SCHOLARSHIPWhereInput[]
    NOT?: SCHOLARSHIPWhereInput | SCHOLARSHIPWhereInput[]
    name?: StringNullableFilter<"SCHOLARSHIP"> | string | null
    description?: StringNullableFilter<"SCHOLARSHIP"> | string | null
    amount?: DecimalNullableFilter<"SCHOLARSHIP"> | Decimal | DecimalJsLike | number | string | null
    no_of_students?: IntNullableFilter<"SCHOLARSHIP"> | number | null
    application_deadline?: DateTimeNullableFilter<"SCHOLARSHIP"> | Date | string | null
    start_date?: DateTimeNullableFilter<"SCHOLARSHIP"> | Date | string | null
    end_date?: DateTimeNullableFilter<"SCHOLARSHIP"> | Date | string | null
    provider_id?: IntNullableFilter<"SCHOLARSHIP"> | number | null
    is_active?: BoolNullableFilter<"SCHOLARSHIP"> | boolean | null
    APPLICATION?: APPLICATIONListRelationFilter
    ELIGIBILITY_CRITERIA?: ELIGIBILITY_CRITERIAListRelationFilter
    SCHOLARSHIP_PROVIDER?: XOR<SCHOLARSHIP_PROVIDERNullableScalarRelationFilter, SCHOLARSHIP_PROVIDERWhereInput> | null
  }, "scholarship_id">

  export type SCHOLARSHIPOrderByWithAggregationInput = {
    scholarship_id?: SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    amount?: SortOrderInput | SortOrder
    no_of_students?: SortOrderInput | SortOrder
    application_deadline?: SortOrderInput | SortOrder
    start_date?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    provider_id?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    _count?: SCHOLARSHIPCountOrderByAggregateInput
    _avg?: SCHOLARSHIPAvgOrderByAggregateInput
    _max?: SCHOLARSHIPMaxOrderByAggregateInput
    _min?: SCHOLARSHIPMinOrderByAggregateInput
    _sum?: SCHOLARSHIPSumOrderByAggregateInput
  }

  export type SCHOLARSHIPScalarWhereWithAggregatesInput = {
    AND?: SCHOLARSHIPScalarWhereWithAggregatesInput | SCHOLARSHIPScalarWhereWithAggregatesInput[]
    OR?: SCHOLARSHIPScalarWhereWithAggregatesInput[]
    NOT?: SCHOLARSHIPScalarWhereWithAggregatesInput | SCHOLARSHIPScalarWhereWithAggregatesInput[]
    scholarship_id?: IntWithAggregatesFilter<"SCHOLARSHIP"> | number
    name?: StringNullableWithAggregatesFilter<"SCHOLARSHIP"> | string | null
    description?: StringNullableWithAggregatesFilter<"SCHOLARSHIP"> | string | null
    amount?: DecimalNullableWithAggregatesFilter<"SCHOLARSHIP"> | Decimal | DecimalJsLike | number | string | null
    no_of_students?: IntNullableWithAggregatesFilter<"SCHOLARSHIP"> | number | null
    application_deadline?: DateTimeNullableWithAggregatesFilter<"SCHOLARSHIP"> | Date | string | null
    start_date?: DateTimeNullableWithAggregatesFilter<"SCHOLARSHIP"> | Date | string | null
    end_date?: DateTimeNullableWithAggregatesFilter<"SCHOLARSHIP"> | Date | string | null
    provider_id?: IntNullableWithAggregatesFilter<"SCHOLARSHIP"> | number | null
    is_active?: BoolNullableWithAggregatesFilter<"SCHOLARSHIP"> | boolean | null
  }

  export type SCHOLARSHIP_PROVIDERWhereInput = {
    AND?: SCHOLARSHIP_PROVIDERWhereInput | SCHOLARSHIP_PROVIDERWhereInput[]
    OR?: SCHOLARSHIP_PROVIDERWhereInput[]
    NOT?: SCHOLARSHIP_PROVIDERWhereInput | SCHOLARSHIP_PROVIDERWhereInput[]
    provider_id?: IntFilter<"SCHOLARSHIP_PROVIDER"> | number
    name?: StringNullableFilter<"SCHOLARSHIP_PROVIDER"> | string | null
    contact_person?: StringNullableFilter<"SCHOLARSHIP_PROVIDER"> | string | null
    phone?: StringNullableFilter<"SCHOLARSHIP_PROVIDER"> | string | null
    email?: StringNullableFilter<"SCHOLARSHIP_PROVIDER"> | string | null
    address?: StringNullableFilter<"SCHOLARSHIP_PROVIDER"> | string | null
    SCHOLARSHIP?: SCHOLARSHIPListRelationFilter
  }

  export type SCHOLARSHIP_PROVIDEROrderByWithRelationInput = {
    provider_id?: SortOrder
    name?: SortOrderInput | SortOrder
    contact_person?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    SCHOLARSHIP?: SCHOLARSHIPOrderByRelationAggregateInput
    _relevance?: SCHOLARSHIP_PROVIDEROrderByRelevanceInput
  }

  export type SCHOLARSHIP_PROVIDERWhereUniqueInput = Prisma.AtLeast<{
    provider_id?: number
    AND?: SCHOLARSHIP_PROVIDERWhereInput | SCHOLARSHIP_PROVIDERWhereInput[]
    OR?: SCHOLARSHIP_PROVIDERWhereInput[]
    NOT?: SCHOLARSHIP_PROVIDERWhereInput | SCHOLARSHIP_PROVIDERWhereInput[]
    name?: StringNullableFilter<"SCHOLARSHIP_PROVIDER"> | string | null
    contact_person?: StringNullableFilter<"SCHOLARSHIP_PROVIDER"> | string | null
    phone?: StringNullableFilter<"SCHOLARSHIP_PROVIDER"> | string | null
    email?: StringNullableFilter<"SCHOLARSHIP_PROVIDER"> | string | null
    address?: StringNullableFilter<"SCHOLARSHIP_PROVIDER"> | string | null
    SCHOLARSHIP?: SCHOLARSHIPListRelationFilter
  }, "provider_id">

  export type SCHOLARSHIP_PROVIDEROrderByWithAggregationInput = {
    provider_id?: SortOrder
    name?: SortOrderInput | SortOrder
    contact_person?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    _count?: SCHOLARSHIP_PROVIDERCountOrderByAggregateInput
    _avg?: SCHOLARSHIP_PROVIDERAvgOrderByAggregateInput
    _max?: SCHOLARSHIP_PROVIDERMaxOrderByAggregateInput
    _min?: SCHOLARSHIP_PROVIDERMinOrderByAggregateInput
    _sum?: SCHOLARSHIP_PROVIDERSumOrderByAggregateInput
  }

  export type SCHOLARSHIP_PROVIDERScalarWhereWithAggregatesInput = {
    AND?: SCHOLARSHIP_PROVIDERScalarWhereWithAggregatesInput | SCHOLARSHIP_PROVIDERScalarWhereWithAggregatesInput[]
    OR?: SCHOLARSHIP_PROVIDERScalarWhereWithAggregatesInput[]
    NOT?: SCHOLARSHIP_PROVIDERScalarWhereWithAggregatesInput | SCHOLARSHIP_PROVIDERScalarWhereWithAggregatesInput[]
    provider_id?: IntWithAggregatesFilter<"SCHOLARSHIP_PROVIDER"> | number
    name?: StringNullableWithAggregatesFilter<"SCHOLARSHIP_PROVIDER"> | string | null
    contact_person?: StringNullableWithAggregatesFilter<"SCHOLARSHIP_PROVIDER"> | string | null
    phone?: StringNullableWithAggregatesFilter<"SCHOLARSHIP_PROVIDER"> | string | null
    email?: StringNullableWithAggregatesFilter<"SCHOLARSHIP_PROVIDER"> | string | null
    address?: StringNullableWithAggregatesFilter<"SCHOLARSHIP_PROVIDER"> | string | null
  }

  export type SIBLING_EDUCATIONWhereInput = {
    AND?: SIBLING_EDUCATIONWhereInput | SIBLING_EDUCATIONWhereInput[]
    OR?: SIBLING_EDUCATIONWhereInput[]
    NOT?: SIBLING_EDUCATIONWhereInput | SIBLING_EDUCATIONWhereInput[]
    education_id?: IntFilter<"SIBLING_EDUCATION"> | number
    student_id?: IntNullableFilter<"SIBLING_EDUCATION"> | number | null
    member_id?: IntNullableFilter<"SIBLING_EDUCATION"> | number | null
    institution?: StringNullableFilter<"SIBLING_EDUCATION"> | string | null
    year_grade?: StringNullableFilter<"SIBLING_EDUCATION"> | string | null
    registration_course?: StringNullableFilter<"SIBLING_EDUCATION"> | string | null
    STUDENT?: XOR<STUDENTNullableScalarRelationFilter, STUDENTWhereInput> | null
    FAMILY_MEMBER?: XOR<FAMILY_MEMBERNullableScalarRelationFilter, FAMILY_MEMBERWhereInput> | null
  }

  export type SIBLING_EDUCATIONOrderByWithRelationInput = {
    education_id?: SortOrder
    student_id?: SortOrderInput | SortOrder
    member_id?: SortOrderInput | SortOrder
    institution?: SortOrderInput | SortOrder
    year_grade?: SortOrderInput | SortOrder
    registration_course?: SortOrderInput | SortOrder
    STUDENT?: STUDENTOrderByWithRelationInput
    FAMILY_MEMBER?: FAMILY_MEMBEROrderByWithRelationInput
    _relevance?: SIBLING_EDUCATIONOrderByRelevanceInput
  }

  export type SIBLING_EDUCATIONWhereUniqueInput = Prisma.AtLeast<{
    education_id?: number
    AND?: SIBLING_EDUCATIONWhereInput | SIBLING_EDUCATIONWhereInput[]
    OR?: SIBLING_EDUCATIONWhereInput[]
    NOT?: SIBLING_EDUCATIONWhereInput | SIBLING_EDUCATIONWhereInput[]
    student_id?: IntNullableFilter<"SIBLING_EDUCATION"> | number | null
    member_id?: IntNullableFilter<"SIBLING_EDUCATION"> | number | null
    institution?: StringNullableFilter<"SIBLING_EDUCATION"> | string | null
    year_grade?: StringNullableFilter<"SIBLING_EDUCATION"> | string | null
    registration_course?: StringNullableFilter<"SIBLING_EDUCATION"> | string | null
    STUDENT?: XOR<STUDENTNullableScalarRelationFilter, STUDENTWhereInput> | null
    FAMILY_MEMBER?: XOR<FAMILY_MEMBERNullableScalarRelationFilter, FAMILY_MEMBERWhereInput> | null
  }, "education_id">

  export type SIBLING_EDUCATIONOrderByWithAggregationInput = {
    education_id?: SortOrder
    student_id?: SortOrderInput | SortOrder
    member_id?: SortOrderInput | SortOrder
    institution?: SortOrderInput | SortOrder
    year_grade?: SortOrderInput | SortOrder
    registration_course?: SortOrderInput | SortOrder
    _count?: SIBLING_EDUCATIONCountOrderByAggregateInput
    _avg?: SIBLING_EDUCATIONAvgOrderByAggregateInput
    _max?: SIBLING_EDUCATIONMaxOrderByAggregateInput
    _min?: SIBLING_EDUCATIONMinOrderByAggregateInput
    _sum?: SIBLING_EDUCATIONSumOrderByAggregateInput
  }

  export type SIBLING_EDUCATIONScalarWhereWithAggregatesInput = {
    AND?: SIBLING_EDUCATIONScalarWhereWithAggregatesInput | SIBLING_EDUCATIONScalarWhereWithAggregatesInput[]
    OR?: SIBLING_EDUCATIONScalarWhereWithAggregatesInput[]
    NOT?: SIBLING_EDUCATIONScalarWhereWithAggregatesInput | SIBLING_EDUCATIONScalarWhereWithAggregatesInput[]
    education_id?: IntWithAggregatesFilter<"SIBLING_EDUCATION"> | number
    student_id?: IntNullableWithAggregatesFilter<"SIBLING_EDUCATION"> | number | null
    member_id?: IntNullableWithAggregatesFilter<"SIBLING_EDUCATION"> | number | null
    institution?: StringNullableWithAggregatesFilter<"SIBLING_EDUCATION"> | string | null
    year_grade?: StringNullableWithAggregatesFilter<"SIBLING_EDUCATION"> | string | null
    registration_course?: StringNullableWithAggregatesFilter<"SIBLING_EDUCATION"> | string | null
  }

  export type STUDENTWhereInput = {
    AND?: STUDENTWhereInput | STUDENTWhereInput[]
    OR?: STUDENTWhereInput[]
    NOT?: STUDENTWhereInput | STUDENTWhereInput[]
    student_id?: IntFilter<"STUDENT"> | number
    user_id?: IntNullableFilter<"STUDENT"> | number | null
    full_name?: StringNullableFilter<"STUDENT"> | string | null
    registration_no?: StringNullableFilter<"STUDENT"> | string | null
    date_of_birth?: DateTimeNullableFilter<"STUDENT"> | Date | string | null
    permanent_address?: StringNullableFilter<"STUDENT"> | string | null
    admission_date?: DateTimeNullableFilter<"STUDENT"> | Date | string | null
    year_of_study?: IntNullableFilter<"STUDENT"> | number | null
    gender?: EnumSTUDENT_genderNullableFilter<"STUDENT"> | $Enums.STUDENT_gender | null
    phone_number?: StringNullableFilter<"STUDENT"> | string | null
    email?: StringNullableFilter<"STUDENT"> | string | null
    school_name?: StringNullableFilter<"STUDENT"> | string | null
    unmarried_siblings?: IntNullableFilter<"STUDENT"> | number | null
    APPLICATION?: APPLICATIONListRelationFilter
    FAMILY_MEMBER?: FAMILY_MEMBERListRelationFilter
    OTHER_FUNDING?: OTHER_FUNDINGListRelationFilter
    SIBLING_EDUCATION?: SIBLING_EDUCATIONListRelationFilter
    USER?: XOR<USERNullableScalarRelationFilter, USERWhereInput> | null
  }

  export type STUDENTOrderByWithRelationInput = {
    student_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    full_name?: SortOrderInput | SortOrder
    registration_no?: SortOrderInput | SortOrder
    date_of_birth?: SortOrderInput | SortOrder
    permanent_address?: SortOrderInput | SortOrder
    admission_date?: SortOrderInput | SortOrder
    year_of_study?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    school_name?: SortOrderInput | SortOrder
    unmarried_siblings?: SortOrderInput | SortOrder
    APPLICATION?: APPLICATIONOrderByRelationAggregateInput
    FAMILY_MEMBER?: FAMILY_MEMBEROrderByRelationAggregateInput
    OTHER_FUNDING?: OTHER_FUNDINGOrderByRelationAggregateInput
    SIBLING_EDUCATION?: SIBLING_EDUCATIONOrderByRelationAggregateInput
    USER?: USEROrderByWithRelationInput
    _relevance?: STUDENTOrderByRelevanceInput
  }

  export type STUDENTWhereUniqueInput = Prisma.AtLeast<{
    student_id?: number
    registration_no?: string
    AND?: STUDENTWhereInput | STUDENTWhereInput[]
    OR?: STUDENTWhereInput[]
    NOT?: STUDENTWhereInput | STUDENTWhereInput[]
    user_id?: IntNullableFilter<"STUDENT"> | number | null
    full_name?: StringNullableFilter<"STUDENT"> | string | null
    date_of_birth?: DateTimeNullableFilter<"STUDENT"> | Date | string | null
    permanent_address?: StringNullableFilter<"STUDENT"> | string | null
    admission_date?: DateTimeNullableFilter<"STUDENT"> | Date | string | null
    year_of_study?: IntNullableFilter<"STUDENT"> | number | null
    gender?: EnumSTUDENT_genderNullableFilter<"STUDENT"> | $Enums.STUDENT_gender | null
    phone_number?: StringNullableFilter<"STUDENT"> | string | null
    email?: StringNullableFilter<"STUDENT"> | string | null
    school_name?: StringNullableFilter<"STUDENT"> | string | null
    unmarried_siblings?: IntNullableFilter<"STUDENT"> | number | null
    APPLICATION?: APPLICATIONListRelationFilter
    FAMILY_MEMBER?: FAMILY_MEMBERListRelationFilter
    OTHER_FUNDING?: OTHER_FUNDINGListRelationFilter
    SIBLING_EDUCATION?: SIBLING_EDUCATIONListRelationFilter
    USER?: XOR<USERNullableScalarRelationFilter, USERWhereInput> | null
  }, "student_id" | "registration_no">

  export type STUDENTOrderByWithAggregationInput = {
    student_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    full_name?: SortOrderInput | SortOrder
    registration_no?: SortOrderInput | SortOrder
    date_of_birth?: SortOrderInput | SortOrder
    permanent_address?: SortOrderInput | SortOrder
    admission_date?: SortOrderInput | SortOrder
    year_of_study?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    school_name?: SortOrderInput | SortOrder
    unmarried_siblings?: SortOrderInput | SortOrder
    _count?: STUDENTCountOrderByAggregateInput
    _avg?: STUDENTAvgOrderByAggregateInput
    _max?: STUDENTMaxOrderByAggregateInput
    _min?: STUDENTMinOrderByAggregateInput
    _sum?: STUDENTSumOrderByAggregateInput
  }

  export type STUDENTScalarWhereWithAggregatesInput = {
    AND?: STUDENTScalarWhereWithAggregatesInput | STUDENTScalarWhereWithAggregatesInput[]
    OR?: STUDENTScalarWhereWithAggregatesInput[]
    NOT?: STUDENTScalarWhereWithAggregatesInput | STUDENTScalarWhereWithAggregatesInput[]
    student_id?: IntWithAggregatesFilter<"STUDENT"> | number
    user_id?: IntNullableWithAggregatesFilter<"STUDENT"> | number | null
    full_name?: StringNullableWithAggregatesFilter<"STUDENT"> | string | null
    registration_no?: StringNullableWithAggregatesFilter<"STUDENT"> | string | null
    date_of_birth?: DateTimeNullableWithAggregatesFilter<"STUDENT"> | Date | string | null
    permanent_address?: StringNullableWithAggregatesFilter<"STUDENT"> | string | null
    admission_date?: DateTimeNullableWithAggregatesFilter<"STUDENT"> | Date | string | null
    year_of_study?: IntNullableWithAggregatesFilter<"STUDENT"> | number | null
    gender?: EnumSTUDENT_genderNullableWithAggregatesFilter<"STUDENT"> | $Enums.STUDENT_gender | null
    phone_number?: StringNullableWithAggregatesFilter<"STUDENT"> | string | null
    email?: StringNullableWithAggregatesFilter<"STUDENT"> | string | null
    school_name?: StringNullableWithAggregatesFilter<"STUDENT"> | string | null
    unmarried_siblings?: IntNullableWithAggregatesFilter<"STUDENT"> | number | null
  }

  export type USERWhereInput = {
    AND?: USERWhereInput | USERWhereInput[]
    OR?: USERWhereInput[]
    NOT?: USERWhereInput | USERWhereInput[]
    user_id?: IntFilter<"USER"> | number
    first_name?: StringNullableFilter<"USER"> | string | null
    last_name?: StringNullableFilter<"USER"> | string | null
    email?: StringNullableFilter<"USER"> | string | null
    username?: StringNullableFilter<"USER"> | string | null
    password?: StringNullableFilter<"USER"> | string | null
    role?: EnumUSER_roleFilter<"USER"> | $Enums.USER_role
    created_at?: DateTimeNullableFilter<"USER"> | Date | string | null
    COMMITTEE_REVIEW?: COMMITTEE_REVIEWListRelationFilter
    NOTIFICATION?: NOTIFICATIONListRelationFilter
    STUDENT?: STUDENTListRelationFilter
  }

  export type USEROrderByWithRelationInput = {
    user_id?: SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    created_at?: SortOrderInput | SortOrder
    COMMITTEE_REVIEW?: COMMITTEE_REVIEWOrderByRelationAggregateInput
    NOTIFICATION?: NOTIFICATIONOrderByRelationAggregateInput
    STUDENT?: STUDENTOrderByRelationAggregateInput
    _relevance?: USEROrderByRelevanceInput
  }

  export type USERWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    email?: string
    AND?: USERWhereInput | USERWhereInput[]
    OR?: USERWhereInput[]
    NOT?: USERWhereInput | USERWhereInput[]
    first_name?: StringNullableFilter<"USER"> | string | null
    last_name?: StringNullableFilter<"USER"> | string | null
    username?: StringNullableFilter<"USER"> | string | null
    password?: StringNullableFilter<"USER"> | string | null
    role?: EnumUSER_roleFilter<"USER"> | $Enums.USER_role
    created_at?: DateTimeNullableFilter<"USER"> | Date | string | null
    COMMITTEE_REVIEW?: COMMITTEE_REVIEWListRelationFilter
    NOTIFICATION?: NOTIFICATIONListRelationFilter
    STUDENT?: STUDENTListRelationFilter
  }, "user_id" | "email">

  export type USEROrderByWithAggregationInput = {
    user_id?: SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: USERCountOrderByAggregateInput
    _avg?: USERAvgOrderByAggregateInput
    _max?: USERMaxOrderByAggregateInput
    _min?: USERMinOrderByAggregateInput
    _sum?: USERSumOrderByAggregateInput
  }

  export type USERScalarWhereWithAggregatesInput = {
    AND?: USERScalarWhereWithAggregatesInput | USERScalarWhereWithAggregatesInput[]
    OR?: USERScalarWhereWithAggregatesInput[]
    NOT?: USERScalarWhereWithAggregatesInput | USERScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"USER"> | number
    first_name?: StringNullableWithAggregatesFilter<"USER"> | string | null
    last_name?: StringNullableWithAggregatesFilter<"USER"> | string | null
    email?: StringNullableWithAggregatesFilter<"USER"> | string | null
    username?: StringNullableWithAggregatesFilter<"USER"> | string | null
    password?: StringNullableWithAggregatesFilter<"USER"> | string | null
    role?: EnumUSER_roleWithAggregatesFilter<"USER"> | $Enums.USER_role
    created_at?: DateTimeNullableWithAggregatesFilter<"USER"> | Date | string | null
  }

  export type APPLICATIONCreateInput = {
    submission_date?: Date | string | null
    status?: $Enums.APPLICATION_status | null
    total_points?: number | null
    reviewer_comments?: string | null
    review_date?: Date | string | null
    STUDENT?: STUDENTCreateNestedOneWithoutAPPLICATIONInput
    SCHOLARSHIP?: SCHOLARSHIPCreateNestedOneWithoutAPPLICATIONInput
    COMMITTEE_REVIEW?: COMMITTEE_REVIEWCreateNestedManyWithoutAPPLICATIONInput
    DOCUMENT?: DOCUMENTCreateNestedManyWithoutAPPLICATIONInput
    PAYMENT?: PAYMENTCreateNestedManyWithoutAPPLICATIONInput
  }

  export type APPLICATIONUncheckedCreateInput = {
    application_id?: number
    student_id?: number | null
    scholarship_id?: number | null
    submission_date?: Date | string | null
    status?: $Enums.APPLICATION_status | null
    total_points?: number | null
    reviewer_comments?: string | null
    review_date?: Date | string | null
    COMMITTEE_REVIEW?: COMMITTEE_REVIEWUncheckedCreateNestedManyWithoutAPPLICATIONInput
    DOCUMENT?: DOCUMENTUncheckedCreateNestedManyWithoutAPPLICATIONInput
    PAYMENT?: PAYMENTUncheckedCreateNestedManyWithoutAPPLICATIONInput
  }

  export type APPLICATIONUpdateInput = {
    submission_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumAPPLICATION_statusFieldUpdateOperationsInput | $Enums.APPLICATION_status | null
    total_points?: NullableIntFieldUpdateOperationsInput | number | null
    reviewer_comments?: NullableStringFieldUpdateOperationsInput | string | null
    review_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    STUDENT?: STUDENTUpdateOneWithoutAPPLICATIONNestedInput
    SCHOLARSHIP?: SCHOLARSHIPUpdateOneWithoutAPPLICATIONNestedInput
    COMMITTEE_REVIEW?: COMMITTEE_REVIEWUpdateManyWithoutAPPLICATIONNestedInput
    DOCUMENT?: DOCUMENTUpdateManyWithoutAPPLICATIONNestedInput
    PAYMENT?: PAYMENTUpdateManyWithoutAPPLICATIONNestedInput
  }

  export type APPLICATIONUncheckedUpdateInput = {
    application_id?: IntFieldUpdateOperationsInput | number
    student_id?: NullableIntFieldUpdateOperationsInput | number | null
    scholarship_id?: NullableIntFieldUpdateOperationsInput | number | null
    submission_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumAPPLICATION_statusFieldUpdateOperationsInput | $Enums.APPLICATION_status | null
    total_points?: NullableIntFieldUpdateOperationsInput | number | null
    reviewer_comments?: NullableStringFieldUpdateOperationsInput | string | null
    review_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    COMMITTEE_REVIEW?: COMMITTEE_REVIEWUncheckedUpdateManyWithoutAPPLICATIONNestedInput
    DOCUMENT?: DOCUMENTUncheckedUpdateManyWithoutAPPLICATIONNestedInput
    PAYMENT?: PAYMENTUncheckedUpdateManyWithoutAPPLICATIONNestedInput
  }

  export type APPLICATIONCreateManyInput = {
    application_id?: number
    student_id?: number | null
    scholarship_id?: number | null
    submission_date?: Date | string | null
    status?: $Enums.APPLICATION_status | null
    total_points?: number | null
    reviewer_comments?: string | null
    review_date?: Date | string | null
  }

  export type APPLICATIONUpdateManyMutationInput = {
    submission_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumAPPLICATION_statusFieldUpdateOperationsInput | $Enums.APPLICATION_status | null
    total_points?: NullableIntFieldUpdateOperationsInput | number | null
    reviewer_comments?: NullableStringFieldUpdateOperationsInput | string | null
    review_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type APPLICATIONUncheckedUpdateManyInput = {
    application_id?: IntFieldUpdateOperationsInput | number
    student_id?: NullableIntFieldUpdateOperationsInput | number | null
    scholarship_id?: NullableIntFieldUpdateOperationsInput | number | null
    submission_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumAPPLICATION_statusFieldUpdateOperationsInput | $Enums.APPLICATION_status | null
    total_points?: NullableIntFieldUpdateOperationsInput | number | null
    reviewer_comments?: NullableStringFieldUpdateOperationsInput | string | null
    review_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type COMMITTEE_REVIEWCreateInput = {
    review_date?: Date | string | null
    points_awarded?: number | null
    comments?: string | null
    status?: $Enums.COMMITTEE_REVIEW_status | null
    is_read?: boolean | null
    APPLICATION?: APPLICATIONCreateNestedOneWithoutCOMMITTEE_REVIEWInput
    USER?: USERCreateNestedOneWithoutCOMMITTEE_REVIEWInput
  }

  export type COMMITTEE_REVIEWUncheckedCreateInput = {
    review_id?: number
    application_id?: number | null
    reviewer_id?: number | null
    review_date?: Date | string | null
    points_awarded?: number | null
    comments?: string | null
    status?: $Enums.COMMITTEE_REVIEW_status | null
    is_read?: boolean | null
  }

  export type COMMITTEE_REVIEWUpdateInput = {
    review_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    points_awarded?: NullableIntFieldUpdateOperationsInput | number | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumCOMMITTEE_REVIEW_statusFieldUpdateOperationsInput | $Enums.COMMITTEE_REVIEW_status | null
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    APPLICATION?: APPLICATIONUpdateOneWithoutCOMMITTEE_REVIEWNestedInput
    USER?: USERUpdateOneWithoutCOMMITTEE_REVIEWNestedInput
  }

  export type COMMITTEE_REVIEWUncheckedUpdateInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    application_id?: NullableIntFieldUpdateOperationsInput | number | null
    reviewer_id?: NullableIntFieldUpdateOperationsInput | number | null
    review_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    points_awarded?: NullableIntFieldUpdateOperationsInput | number | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumCOMMITTEE_REVIEW_statusFieldUpdateOperationsInput | $Enums.COMMITTEE_REVIEW_status | null
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type COMMITTEE_REVIEWCreateManyInput = {
    review_id?: number
    application_id?: number | null
    reviewer_id?: number | null
    review_date?: Date | string | null
    points_awarded?: number | null
    comments?: string | null
    status?: $Enums.COMMITTEE_REVIEW_status | null
    is_read?: boolean | null
  }

  export type COMMITTEE_REVIEWUpdateManyMutationInput = {
    review_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    points_awarded?: NullableIntFieldUpdateOperationsInput | number | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumCOMMITTEE_REVIEW_statusFieldUpdateOperationsInput | $Enums.COMMITTEE_REVIEW_status | null
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type COMMITTEE_REVIEWUncheckedUpdateManyInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    application_id?: NullableIntFieldUpdateOperationsInput | number | null
    reviewer_id?: NullableIntFieldUpdateOperationsInput | number | null
    review_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    points_awarded?: NullableIntFieldUpdateOperationsInput | number | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumCOMMITTEE_REVIEW_statusFieldUpdateOperationsInput | $Enums.COMMITTEE_REVIEW_status | null
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type DOCUMENTCreateInput = {
    document_type?: string | null
    file_name?: string | null
    file_path?: string | null
    upload_date?: Date | string | null
    verification_status?: $Enums.DOCUMENT_verification_status | null
    APPLICATION?: APPLICATIONCreateNestedOneWithoutDOCUMENTInput
  }

  export type DOCUMENTUncheckedCreateInput = {
    document_id?: number
    application_id?: number | null
    document_type?: string | null
    file_name?: string | null
    file_path?: string | null
    upload_date?: Date | string | null
    verification_status?: $Enums.DOCUMENT_verification_status | null
  }

  export type DOCUMENTUpdateInput = {
    document_type?: NullableStringFieldUpdateOperationsInput | string | null
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    file_path?: NullableStringFieldUpdateOperationsInput | string | null
    upload_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verification_status?: NullableEnumDOCUMENT_verification_statusFieldUpdateOperationsInput | $Enums.DOCUMENT_verification_status | null
    APPLICATION?: APPLICATIONUpdateOneWithoutDOCUMENTNestedInput
  }

  export type DOCUMENTUncheckedUpdateInput = {
    document_id?: IntFieldUpdateOperationsInput | number
    application_id?: NullableIntFieldUpdateOperationsInput | number | null
    document_type?: NullableStringFieldUpdateOperationsInput | string | null
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    file_path?: NullableStringFieldUpdateOperationsInput | string | null
    upload_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verification_status?: NullableEnumDOCUMENT_verification_statusFieldUpdateOperationsInput | $Enums.DOCUMENT_verification_status | null
  }

  export type DOCUMENTCreateManyInput = {
    document_id?: number
    application_id?: number | null
    document_type?: string | null
    file_name?: string | null
    file_path?: string | null
    upload_date?: Date | string | null
    verification_status?: $Enums.DOCUMENT_verification_status | null
  }

  export type DOCUMENTUpdateManyMutationInput = {
    document_type?: NullableStringFieldUpdateOperationsInput | string | null
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    file_path?: NullableStringFieldUpdateOperationsInput | string | null
    upload_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verification_status?: NullableEnumDOCUMENT_verification_statusFieldUpdateOperationsInput | $Enums.DOCUMENT_verification_status | null
  }

  export type DOCUMENTUncheckedUpdateManyInput = {
    document_id?: IntFieldUpdateOperationsInput | number
    application_id?: NullableIntFieldUpdateOperationsInput | number | null
    document_type?: NullableStringFieldUpdateOperationsInput | string | null
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    file_path?: NullableStringFieldUpdateOperationsInput | string | null
    upload_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verification_status?: NullableEnumDOCUMENT_verification_statusFieldUpdateOperationsInput | $Enums.DOCUMENT_verification_status | null
  }

  export type ELIGIBILITY_CRITERIACreateInput = {
    criteria_name?: string | null
    criteria_description?: string | null
    min_value?: Decimal | DecimalJsLike | number | string | null
    max_value?: Decimal | DecimalJsLike | number | string | null
    weight?: number | null
    SCHOLARSHIP?: SCHOLARSHIPCreateNestedOneWithoutELIGIBILITY_CRITERIAInput
  }

  export type ELIGIBILITY_CRITERIAUncheckedCreateInput = {
    criteria_id?: number
    scholarship_id?: number | null
    criteria_name?: string | null
    criteria_description?: string | null
    min_value?: Decimal | DecimalJsLike | number | string | null
    max_value?: Decimal | DecimalJsLike | number | string | null
    weight?: number | null
  }

  export type ELIGIBILITY_CRITERIAUpdateInput = {
    criteria_name?: NullableStringFieldUpdateOperationsInput | string | null
    criteria_description?: NullableStringFieldUpdateOperationsInput | string | null
    min_value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    max_value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    SCHOLARSHIP?: SCHOLARSHIPUpdateOneWithoutELIGIBILITY_CRITERIANestedInput
  }

  export type ELIGIBILITY_CRITERIAUncheckedUpdateInput = {
    criteria_id?: IntFieldUpdateOperationsInput | number
    scholarship_id?: NullableIntFieldUpdateOperationsInput | number | null
    criteria_name?: NullableStringFieldUpdateOperationsInput | string | null
    criteria_description?: NullableStringFieldUpdateOperationsInput | string | null
    min_value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    max_value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ELIGIBILITY_CRITERIACreateManyInput = {
    criteria_id?: number
    scholarship_id?: number | null
    criteria_name?: string | null
    criteria_description?: string | null
    min_value?: Decimal | DecimalJsLike | number | string | null
    max_value?: Decimal | DecimalJsLike | number | string | null
    weight?: number | null
  }

  export type ELIGIBILITY_CRITERIAUpdateManyMutationInput = {
    criteria_name?: NullableStringFieldUpdateOperationsInput | string | null
    criteria_description?: NullableStringFieldUpdateOperationsInput | string | null
    min_value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    max_value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ELIGIBILITY_CRITERIAUncheckedUpdateManyInput = {
    criteria_id?: IntFieldUpdateOperationsInput | number
    scholarship_id?: NullableIntFieldUpdateOperationsInput | number | null
    criteria_name?: NullableStringFieldUpdateOperationsInput | string | null
    criteria_description?: NullableStringFieldUpdateOperationsInput | string | null
    min_value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    max_value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FAMILY_MEMBERCreateInput = {
    full_name?: string | null
    age?: number | null
    relationship?: string | null
    designation?: string | null
    annual_income?: Decimal | DecimalJsLike | number | string | null
    workplace?: string | null
    phone_number?: string | null
    STUDENT?: STUDENTCreateNestedOneWithoutFAMILY_MEMBERInput
    SIBLING_EDUCATION?: SIBLING_EDUCATIONCreateNestedManyWithoutFAMILY_MEMBERInput
  }

  export type FAMILY_MEMBERUncheckedCreateInput = {
    member_id?: number
    student_id?: number | null
    full_name?: string | null
    age?: number | null
    relationship?: string | null
    designation?: string | null
    annual_income?: Decimal | DecimalJsLike | number | string | null
    workplace?: string | null
    phone_number?: string | null
    SIBLING_EDUCATION?: SIBLING_EDUCATIONUncheckedCreateNestedManyWithoutFAMILY_MEMBERInput
  }

  export type FAMILY_MEMBERUpdateInput = {
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    relationship?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    annual_income?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    workplace?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    STUDENT?: STUDENTUpdateOneWithoutFAMILY_MEMBERNestedInput
    SIBLING_EDUCATION?: SIBLING_EDUCATIONUpdateManyWithoutFAMILY_MEMBERNestedInput
  }

  export type FAMILY_MEMBERUncheckedUpdateInput = {
    member_id?: IntFieldUpdateOperationsInput | number
    student_id?: NullableIntFieldUpdateOperationsInput | number | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    relationship?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    annual_income?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    workplace?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    SIBLING_EDUCATION?: SIBLING_EDUCATIONUncheckedUpdateManyWithoutFAMILY_MEMBERNestedInput
  }

  export type FAMILY_MEMBERCreateManyInput = {
    member_id?: number
    student_id?: number | null
    full_name?: string | null
    age?: number | null
    relationship?: string | null
    designation?: string | null
    annual_income?: Decimal | DecimalJsLike | number | string | null
    workplace?: string | null
    phone_number?: string | null
  }

  export type FAMILY_MEMBERUpdateManyMutationInput = {
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    relationship?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    annual_income?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    workplace?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FAMILY_MEMBERUncheckedUpdateManyInput = {
    member_id?: IntFieldUpdateOperationsInput | number
    student_id?: NullableIntFieldUpdateOperationsInput | number | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    relationship?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    annual_income?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    workplace?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NOTIFICATIONCreateInput = {
    message?: string | null
    created_at?: Date | string | null
    is_read?: boolean | null
    USER?: USERCreateNestedOneWithoutNOTIFICATIONInput
  }

  export type NOTIFICATIONUncheckedCreateInput = {
    notification_id?: number
    user_id?: number | null
    message?: string | null
    created_at?: Date | string | null
    is_read?: boolean | null
  }

  export type NOTIFICATIONUpdateInput = {
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    USER?: USERUpdateOneWithoutNOTIFICATIONNestedInput
  }

  export type NOTIFICATIONUncheckedUpdateInput = {
    notification_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type NOTIFICATIONCreateManyInput = {
    notification_id?: number
    user_id?: number | null
    message?: string | null
    created_at?: Date | string | null
    is_read?: boolean | null
  }

  export type NOTIFICATIONUpdateManyMutationInput = {
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type NOTIFICATIONUncheckedUpdateManyInput = {
    notification_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type OTHER_FUNDINGCreateInput = {
    funding_name?: string | null
    organization?: string | null
    annual_amount?: Decimal | DecimalJsLike | number | string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    STUDENT?: STUDENTCreateNestedOneWithoutOTHER_FUNDINGInput
  }

  export type OTHER_FUNDINGUncheckedCreateInput = {
    funding_id?: number
    student_id?: number | null
    funding_name?: string | null
    organization?: string | null
    annual_amount?: Decimal | DecimalJsLike | number | string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
  }

  export type OTHER_FUNDINGUpdateInput = {
    funding_name?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    annual_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    STUDENT?: STUDENTUpdateOneWithoutOTHER_FUNDINGNestedInput
  }

  export type OTHER_FUNDINGUncheckedUpdateInput = {
    funding_id?: IntFieldUpdateOperationsInput | number
    student_id?: NullableIntFieldUpdateOperationsInput | number | null
    funding_name?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    annual_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OTHER_FUNDINGCreateManyInput = {
    funding_id?: number
    student_id?: number | null
    funding_name?: string | null
    organization?: string | null
    annual_amount?: Decimal | DecimalJsLike | number | string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
  }

  export type OTHER_FUNDINGUpdateManyMutationInput = {
    funding_name?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    annual_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OTHER_FUNDINGUncheckedUpdateManyInput = {
    funding_id?: IntFieldUpdateOperationsInput | number
    student_id?: NullableIntFieldUpdateOperationsInput | number | null
    funding_name?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    annual_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PAYMENTCreateInput = {
    amount?: Decimal | DecimalJsLike | number | string | null
    payment_date?: Date | string | null
    payment_method?: string | null
    transaction_id?: string | null
    status?: $Enums.PAYMENT_status | null
    APPLICATION?: APPLICATIONCreateNestedOneWithoutPAYMENTInput
  }

  export type PAYMENTUncheckedCreateInput = {
    payment_id?: number
    application_id?: number | null
    amount?: Decimal | DecimalJsLike | number | string | null
    payment_date?: Date | string | null
    payment_method?: string | null
    transaction_id?: string | null
    status?: $Enums.PAYMENT_status | null
  }

  export type PAYMENTUpdateInput = {
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumPAYMENT_statusFieldUpdateOperationsInput | $Enums.PAYMENT_status | null
    APPLICATION?: APPLICATIONUpdateOneWithoutPAYMENTNestedInput
  }

  export type PAYMENTUncheckedUpdateInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    application_id?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumPAYMENT_statusFieldUpdateOperationsInput | $Enums.PAYMENT_status | null
  }

  export type PAYMENTCreateManyInput = {
    payment_id?: number
    application_id?: number | null
    amount?: Decimal | DecimalJsLike | number | string | null
    payment_date?: Date | string | null
    payment_method?: string | null
    transaction_id?: string | null
    status?: $Enums.PAYMENT_status | null
  }

  export type PAYMENTUpdateManyMutationInput = {
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumPAYMENT_statusFieldUpdateOperationsInput | $Enums.PAYMENT_status | null
  }

  export type PAYMENTUncheckedUpdateManyInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    application_id?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumPAYMENT_statusFieldUpdateOperationsInput | $Enums.PAYMENT_status | null
  }

  export type SCHOLARSHIPCreateInput = {
    name?: string | null
    description?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    no_of_students?: number | null
    application_deadline?: Date | string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    is_active?: boolean | null
    APPLICATION?: APPLICATIONCreateNestedManyWithoutSCHOLARSHIPInput
    ELIGIBILITY_CRITERIA?: ELIGIBILITY_CRITERIACreateNestedManyWithoutSCHOLARSHIPInput
    SCHOLARSHIP_PROVIDER?: SCHOLARSHIP_PROVIDERCreateNestedOneWithoutSCHOLARSHIPInput
  }

  export type SCHOLARSHIPUncheckedCreateInput = {
    scholarship_id?: number
    name?: string | null
    description?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    no_of_students?: number | null
    application_deadline?: Date | string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    provider_id?: number | null
    is_active?: boolean | null
    APPLICATION?: APPLICATIONUncheckedCreateNestedManyWithoutSCHOLARSHIPInput
    ELIGIBILITY_CRITERIA?: ELIGIBILITY_CRITERIAUncheckedCreateNestedManyWithoutSCHOLARSHIPInput
  }

  export type SCHOLARSHIPUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    no_of_students?: NullableIntFieldUpdateOperationsInput | number | null
    application_deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    APPLICATION?: APPLICATIONUpdateManyWithoutSCHOLARSHIPNestedInput
    ELIGIBILITY_CRITERIA?: ELIGIBILITY_CRITERIAUpdateManyWithoutSCHOLARSHIPNestedInput
    SCHOLARSHIP_PROVIDER?: SCHOLARSHIP_PROVIDERUpdateOneWithoutSCHOLARSHIPNestedInput
  }

  export type SCHOLARSHIPUncheckedUpdateInput = {
    scholarship_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    no_of_students?: NullableIntFieldUpdateOperationsInput | number | null
    application_deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provider_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    APPLICATION?: APPLICATIONUncheckedUpdateManyWithoutSCHOLARSHIPNestedInput
    ELIGIBILITY_CRITERIA?: ELIGIBILITY_CRITERIAUncheckedUpdateManyWithoutSCHOLARSHIPNestedInput
  }

  export type SCHOLARSHIPCreateManyInput = {
    scholarship_id?: number
    name?: string | null
    description?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    no_of_students?: number | null
    application_deadline?: Date | string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    provider_id?: number | null
    is_active?: boolean | null
  }

  export type SCHOLARSHIPUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    no_of_students?: NullableIntFieldUpdateOperationsInput | number | null
    application_deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type SCHOLARSHIPUncheckedUpdateManyInput = {
    scholarship_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    no_of_students?: NullableIntFieldUpdateOperationsInput | number | null
    application_deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provider_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type SCHOLARSHIP_PROVIDERCreateInput = {
    name?: string | null
    contact_person?: string | null
    phone?: string | null
    email?: string | null
    address?: string | null
    SCHOLARSHIP?: SCHOLARSHIPCreateNestedManyWithoutSCHOLARSHIP_PROVIDERInput
  }

  export type SCHOLARSHIP_PROVIDERUncheckedCreateInput = {
    provider_id?: number
    name?: string | null
    contact_person?: string | null
    phone?: string | null
    email?: string | null
    address?: string | null
    SCHOLARSHIP?: SCHOLARSHIPUncheckedCreateNestedManyWithoutSCHOLARSHIP_PROVIDERInput
  }

  export type SCHOLARSHIP_PROVIDERUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    contact_person?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    SCHOLARSHIP?: SCHOLARSHIPUpdateManyWithoutSCHOLARSHIP_PROVIDERNestedInput
  }

  export type SCHOLARSHIP_PROVIDERUncheckedUpdateInput = {
    provider_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    contact_person?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    SCHOLARSHIP?: SCHOLARSHIPUncheckedUpdateManyWithoutSCHOLARSHIP_PROVIDERNestedInput
  }

  export type SCHOLARSHIP_PROVIDERCreateManyInput = {
    provider_id?: number
    name?: string | null
    contact_person?: string | null
    phone?: string | null
    email?: string | null
    address?: string | null
  }

  export type SCHOLARSHIP_PROVIDERUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    contact_person?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SCHOLARSHIP_PROVIDERUncheckedUpdateManyInput = {
    provider_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    contact_person?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SIBLING_EDUCATIONCreateInput = {
    institution?: string | null
    year_grade?: string | null
    registration_course?: string | null
    STUDENT?: STUDENTCreateNestedOneWithoutSIBLING_EDUCATIONInput
    FAMILY_MEMBER?: FAMILY_MEMBERCreateNestedOneWithoutSIBLING_EDUCATIONInput
  }

  export type SIBLING_EDUCATIONUncheckedCreateInput = {
    education_id?: number
    student_id?: number | null
    member_id?: number | null
    institution?: string | null
    year_grade?: string | null
    registration_course?: string | null
  }

  export type SIBLING_EDUCATIONUpdateInput = {
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    year_grade?: NullableStringFieldUpdateOperationsInput | string | null
    registration_course?: NullableStringFieldUpdateOperationsInput | string | null
    STUDENT?: STUDENTUpdateOneWithoutSIBLING_EDUCATIONNestedInput
    FAMILY_MEMBER?: FAMILY_MEMBERUpdateOneWithoutSIBLING_EDUCATIONNestedInput
  }

  export type SIBLING_EDUCATIONUncheckedUpdateInput = {
    education_id?: IntFieldUpdateOperationsInput | number
    student_id?: NullableIntFieldUpdateOperationsInput | number | null
    member_id?: NullableIntFieldUpdateOperationsInput | number | null
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    year_grade?: NullableStringFieldUpdateOperationsInput | string | null
    registration_course?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SIBLING_EDUCATIONCreateManyInput = {
    education_id?: number
    student_id?: number | null
    member_id?: number | null
    institution?: string | null
    year_grade?: string | null
    registration_course?: string | null
  }

  export type SIBLING_EDUCATIONUpdateManyMutationInput = {
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    year_grade?: NullableStringFieldUpdateOperationsInput | string | null
    registration_course?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SIBLING_EDUCATIONUncheckedUpdateManyInput = {
    education_id?: IntFieldUpdateOperationsInput | number
    student_id?: NullableIntFieldUpdateOperationsInput | number | null
    member_id?: NullableIntFieldUpdateOperationsInput | number | null
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    year_grade?: NullableStringFieldUpdateOperationsInput | string | null
    registration_course?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type STUDENTCreateInput = {
    full_name?: string | null
    registration_no?: string | null
    date_of_birth?: Date | string | null
    permanent_address?: string | null
    admission_date?: Date | string | null
    year_of_study?: number | null
    gender?: $Enums.STUDENT_gender | null
    phone_number?: string | null
    email?: string | null
    school_name?: string | null
    unmarried_siblings?: number | null
    APPLICATION?: APPLICATIONCreateNestedManyWithoutSTUDENTInput
    FAMILY_MEMBER?: FAMILY_MEMBERCreateNestedManyWithoutSTUDENTInput
    OTHER_FUNDING?: OTHER_FUNDINGCreateNestedManyWithoutSTUDENTInput
    SIBLING_EDUCATION?: SIBLING_EDUCATIONCreateNestedManyWithoutSTUDENTInput
    USER?: USERCreateNestedOneWithoutSTUDENTInput
  }

  export type STUDENTUncheckedCreateInput = {
    student_id?: number
    user_id?: number | null
    full_name?: string | null
    registration_no?: string | null
    date_of_birth?: Date | string | null
    permanent_address?: string | null
    admission_date?: Date | string | null
    year_of_study?: number | null
    gender?: $Enums.STUDENT_gender | null
    phone_number?: string | null
    email?: string | null
    school_name?: string | null
    unmarried_siblings?: number | null
    APPLICATION?: APPLICATIONUncheckedCreateNestedManyWithoutSTUDENTInput
    FAMILY_MEMBER?: FAMILY_MEMBERUncheckedCreateNestedManyWithoutSTUDENTInput
    OTHER_FUNDING?: OTHER_FUNDINGUncheckedCreateNestedManyWithoutSTUDENTInput
    SIBLING_EDUCATION?: SIBLING_EDUCATIONUncheckedCreateNestedManyWithoutSTUDENTInput
  }

  export type STUDENTUpdateInput = {
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    registration_no?: NullableStringFieldUpdateOperationsInput | string | null
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permanent_address?: NullableStringFieldUpdateOperationsInput | string | null
    admission_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    year_of_study?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumSTUDENT_genderFieldUpdateOperationsInput | $Enums.STUDENT_gender | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    school_name?: NullableStringFieldUpdateOperationsInput | string | null
    unmarried_siblings?: NullableIntFieldUpdateOperationsInput | number | null
    APPLICATION?: APPLICATIONUpdateManyWithoutSTUDENTNestedInput
    FAMILY_MEMBER?: FAMILY_MEMBERUpdateManyWithoutSTUDENTNestedInput
    OTHER_FUNDING?: OTHER_FUNDINGUpdateManyWithoutSTUDENTNestedInput
    SIBLING_EDUCATION?: SIBLING_EDUCATIONUpdateManyWithoutSTUDENTNestedInput
    USER?: USERUpdateOneWithoutSTUDENTNestedInput
  }

  export type STUDENTUncheckedUpdateInput = {
    student_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    registration_no?: NullableStringFieldUpdateOperationsInput | string | null
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permanent_address?: NullableStringFieldUpdateOperationsInput | string | null
    admission_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    year_of_study?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumSTUDENT_genderFieldUpdateOperationsInput | $Enums.STUDENT_gender | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    school_name?: NullableStringFieldUpdateOperationsInput | string | null
    unmarried_siblings?: NullableIntFieldUpdateOperationsInput | number | null
    APPLICATION?: APPLICATIONUncheckedUpdateManyWithoutSTUDENTNestedInput
    FAMILY_MEMBER?: FAMILY_MEMBERUncheckedUpdateManyWithoutSTUDENTNestedInput
    OTHER_FUNDING?: OTHER_FUNDINGUncheckedUpdateManyWithoutSTUDENTNestedInput
    SIBLING_EDUCATION?: SIBLING_EDUCATIONUncheckedUpdateManyWithoutSTUDENTNestedInput
  }

  export type STUDENTCreateManyInput = {
    student_id?: number
    user_id?: number | null
    full_name?: string | null
    registration_no?: string | null
    date_of_birth?: Date | string | null
    permanent_address?: string | null
    admission_date?: Date | string | null
    year_of_study?: number | null
    gender?: $Enums.STUDENT_gender | null
    phone_number?: string | null
    email?: string | null
    school_name?: string | null
    unmarried_siblings?: number | null
  }

  export type STUDENTUpdateManyMutationInput = {
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    registration_no?: NullableStringFieldUpdateOperationsInput | string | null
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permanent_address?: NullableStringFieldUpdateOperationsInput | string | null
    admission_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    year_of_study?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumSTUDENT_genderFieldUpdateOperationsInput | $Enums.STUDENT_gender | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    school_name?: NullableStringFieldUpdateOperationsInput | string | null
    unmarried_siblings?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type STUDENTUncheckedUpdateManyInput = {
    student_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    registration_no?: NullableStringFieldUpdateOperationsInput | string | null
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permanent_address?: NullableStringFieldUpdateOperationsInput | string | null
    admission_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    year_of_study?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumSTUDENT_genderFieldUpdateOperationsInput | $Enums.STUDENT_gender | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    school_name?: NullableStringFieldUpdateOperationsInput | string | null
    unmarried_siblings?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type USERCreateInput = {
    first_name?: string | null
    last_name?: string | null
    email?: string | null
    username?: string | null
    password?: string | null
    role?: $Enums.USER_role
    created_at?: Date | string | null
    COMMITTEE_REVIEW?: COMMITTEE_REVIEWCreateNestedManyWithoutUSERInput
    NOTIFICATION?: NOTIFICATIONCreateNestedManyWithoutUSERInput
    STUDENT?: STUDENTCreateNestedManyWithoutUSERInput
  }

  export type USERUncheckedCreateInput = {
    user_id?: number
    first_name?: string | null
    last_name?: string | null
    email?: string | null
    username?: string | null
    password?: string | null
    role?: $Enums.USER_role
    created_at?: Date | string | null
    COMMITTEE_REVIEW?: COMMITTEE_REVIEWUncheckedCreateNestedManyWithoutUSERInput
    NOTIFICATION?: NOTIFICATIONUncheckedCreateNestedManyWithoutUSERInput
    STUDENT?: STUDENTUncheckedCreateNestedManyWithoutUSERInput
  }

  export type USERUpdateInput = {
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUSER_roleFieldUpdateOperationsInput | $Enums.USER_role
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    COMMITTEE_REVIEW?: COMMITTEE_REVIEWUpdateManyWithoutUSERNestedInput
    NOTIFICATION?: NOTIFICATIONUpdateManyWithoutUSERNestedInput
    STUDENT?: STUDENTUpdateManyWithoutUSERNestedInput
  }

  export type USERUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUSER_roleFieldUpdateOperationsInput | $Enums.USER_role
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    COMMITTEE_REVIEW?: COMMITTEE_REVIEWUncheckedUpdateManyWithoutUSERNestedInput
    NOTIFICATION?: NOTIFICATIONUncheckedUpdateManyWithoutUSERNestedInput
    STUDENT?: STUDENTUncheckedUpdateManyWithoutUSERNestedInput
  }

  export type USERCreateManyInput = {
    user_id?: number
    first_name?: string | null
    last_name?: string | null
    email?: string | null
    username?: string | null
    password?: string | null
    role?: $Enums.USER_role
    created_at?: Date | string | null
  }

  export type USERUpdateManyMutationInput = {
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUSER_roleFieldUpdateOperationsInput | $Enums.USER_role
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type USERUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUSER_roleFieldUpdateOperationsInput | $Enums.USER_role
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type EnumAPPLICATION_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.APPLICATION_status | EnumAPPLICATION_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.APPLICATION_status[] | null
    notIn?: $Enums.APPLICATION_status[] | null
    not?: NestedEnumAPPLICATION_statusNullableFilter<$PrismaModel> | $Enums.APPLICATION_status | null
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

  export type STUDENTNullableScalarRelationFilter = {
    is?: STUDENTWhereInput | null
    isNot?: STUDENTWhereInput | null
  }

  export type SCHOLARSHIPNullableScalarRelationFilter = {
    is?: SCHOLARSHIPWhereInput | null
    isNot?: SCHOLARSHIPWhereInput | null
  }

  export type COMMITTEE_REVIEWListRelationFilter = {
    every?: COMMITTEE_REVIEWWhereInput
    some?: COMMITTEE_REVIEWWhereInput
    none?: COMMITTEE_REVIEWWhereInput
  }

  export type DOCUMENTListRelationFilter = {
    every?: DOCUMENTWhereInput
    some?: DOCUMENTWhereInput
    none?: DOCUMENTWhereInput
  }

  export type PAYMENTListRelationFilter = {
    every?: PAYMENTWhereInput
    some?: PAYMENTWhereInput
    none?: PAYMENTWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type COMMITTEE_REVIEWOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DOCUMENTOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PAYMENTOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type APPLICATIONOrderByRelevanceInput = {
    fields: APPLICATIONOrderByRelevanceFieldEnum | APPLICATIONOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type APPLICATIONCountOrderByAggregateInput = {
    application_id?: SortOrder
    student_id?: SortOrder
    scholarship_id?: SortOrder
    submission_date?: SortOrder
    status?: SortOrder
    total_points?: SortOrder
    reviewer_comments?: SortOrder
    review_date?: SortOrder
  }

  export type APPLICATIONAvgOrderByAggregateInput = {
    application_id?: SortOrder
    student_id?: SortOrder
    scholarship_id?: SortOrder
    total_points?: SortOrder
  }

  export type APPLICATIONMaxOrderByAggregateInput = {
    application_id?: SortOrder
    student_id?: SortOrder
    scholarship_id?: SortOrder
    submission_date?: SortOrder
    status?: SortOrder
    total_points?: SortOrder
    reviewer_comments?: SortOrder
    review_date?: SortOrder
  }

  export type APPLICATIONMinOrderByAggregateInput = {
    application_id?: SortOrder
    student_id?: SortOrder
    scholarship_id?: SortOrder
    submission_date?: SortOrder
    status?: SortOrder
    total_points?: SortOrder
    reviewer_comments?: SortOrder
    review_date?: SortOrder
  }

  export type APPLICATIONSumOrderByAggregateInput = {
    application_id?: SortOrder
    student_id?: SortOrder
    scholarship_id?: SortOrder
    total_points?: SortOrder
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type EnumAPPLICATION_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.APPLICATION_status | EnumAPPLICATION_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.APPLICATION_status[] | null
    notIn?: $Enums.APPLICATION_status[] | null
    not?: NestedEnumAPPLICATION_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.APPLICATION_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAPPLICATION_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumAPPLICATION_statusNullableFilter<$PrismaModel>
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

  export type EnumCOMMITTEE_REVIEW_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.COMMITTEE_REVIEW_status | EnumCOMMITTEE_REVIEW_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.COMMITTEE_REVIEW_status[] | null
    notIn?: $Enums.COMMITTEE_REVIEW_status[] | null
    not?: NestedEnumCOMMITTEE_REVIEW_statusNullableFilter<$PrismaModel> | $Enums.COMMITTEE_REVIEW_status | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type APPLICATIONNullableScalarRelationFilter = {
    is?: APPLICATIONWhereInput | null
    isNot?: APPLICATIONWhereInput | null
  }

  export type USERNullableScalarRelationFilter = {
    is?: USERWhereInput | null
    isNot?: USERWhereInput | null
  }

  export type COMMITTEE_REVIEWOrderByRelevanceInput = {
    fields: COMMITTEE_REVIEWOrderByRelevanceFieldEnum | COMMITTEE_REVIEWOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type COMMITTEE_REVIEWCountOrderByAggregateInput = {
    review_id?: SortOrder
    application_id?: SortOrder
    reviewer_id?: SortOrder
    review_date?: SortOrder
    points_awarded?: SortOrder
    comments?: SortOrder
    status?: SortOrder
    is_read?: SortOrder
  }

  export type COMMITTEE_REVIEWAvgOrderByAggregateInput = {
    review_id?: SortOrder
    application_id?: SortOrder
    reviewer_id?: SortOrder
    points_awarded?: SortOrder
  }

  export type COMMITTEE_REVIEWMaxOrderByAggregateInput = {
    review_id?: SortOrder
    application_id?: SortOrder
    reviewer_id?: SortOrder
    review_date?: SortOrder
    points_awarded?: SortOrder
    comments?: SortOrder
    status?: SortOrder
    is_read?: SortOrder
  }

  export type COMMITTEE_REVIEWMinOrderByAggregateInput = {
    review_id?: SortOrder
    application_id?: SortOrder
    reviewer_id?: SortOrder
    review_date?: SortOrder
    points_awarded?: SortOrder
    comments?: SortOrder
    status?: SortOrder
    is_read?: SortOrder
  }

  export type COMMITTEE_REVIEWSumOrderByAggregateInput = {
    review_id?: SortOrder
    application_id?: SortOrder
    reviewer_id?: SortOrder
    points_awarded?: SortOrder
  }

  export type EnumCOMMITTEE_REVIEW_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.COMMITTEE_REVIEW_status | EnumCOMMITTEE_REVIEW_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.COMMITTEE_REVIEW_status[] | null
    notIn?: $Enums.COMMITTEE_REVIEW_status[] | null
    not?: NestedEnumCOMMITTEE_REVIEW_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.COMMITTEE_REVIEW_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCOMMITTEE_REVIEW_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumCOMMITTEE_REVIEW_statusNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type EnumDOCUMENT_verification_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.DOCUMENT_verification_status | EnumDOCUMENT_verification_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.DOCUMENT_verification_status[] | null
    notIn?: $Enums.DOCUMENT_verification_status[] | null
    not?: NestedEnumDOCUMENT_verification_statusNullableFilter<$PrismaModel> | $Enums.DOCUMENT_verification_status | null
  }

  export type DOCUMENTOrderByRelevanceInput = {
    fields: DOCUMENTOrderByRelevanceFieldEnum | DOCUMENTOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DOCUMENTCountOrderByAggregateInput = {
    document_id?: SortOrder
    application_id?: SortOrder
    document_type?: SortOrder
    file_name?: SortOrder
    file_path?: SortOrder
    upload_date?: SortOrder
    verification_status?: SortOrder
  }

  export type DOCUMENTAvgOrderByAggregateInput = {
    document_id?: SortOrder
    application_id?: SortOrder
  }

  export type DOCUMENTMaxOrderByAggregateInput = {
    document_id?: SortOrder
    application_id?: SortOrder
    document_type?: SortOrder
    file_name?: SortOrder
    file_path?: SortOrder
    upload_date?: SortOrder
    verification_status?: SortOrder
  }

  export type DOCUMENTMinOrderByAggregateInput = {
    document_id?: SortOrder
    application_id?: SortOrder
    document_type?: SortOrder
    file_name?: SortOrder
    file_path?: SortOrder
    upload_date?: SortOrder
    verification_status?: SortOrder
  }

  export type DOCUMENTSumOrderByAggregateInput = {
    document_id?: SortOrder
    application_id?: SortOrder
  }

  export type EnumDOCUMENT_verification_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DOCUMENT_verification_status | EnumDOCUMENT_verification_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.DOCUMENT_verification_status[] | null
    notIn?: $Enums.DOCUMENT_verification_status[] | null
    not?: NestedEnumDOCUMENT_verification_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.DOCUMENT_verification_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumDOCUMENT_verification_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumDOCUMENT_verification_statusNullableFilter<$PrismaModel>
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

  export type ELIGIBILITY_CRITERIAOrderByRelevanceInput = {
    fields: ELIGIBILITY_CRITERIAOrderByRelevanceFieldEnum | ELIGIBILITY_CRITERIAOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ELIGIBILITY_CRITERIACountOrderByAggregateInput = {
    criteria_id?: SortOrder
    scholarship_id?: SortOrder
    criteria_name?: SortOrder
    criteria_description?: SortOrder
    min_value?: SortOrder
    max_value?: SortOrder
    weight?: SortOrder
  }

  export type ELIGIBILITY_CRITERIAAvgOrderByAggregateInput = {
    criteria_id?: SortOrder
    scholarship_id?: SortOrder
    min_value?: SortOrder
    max_value?: SortOrder
    weight?: SortOrder
  }

  export type ELIGIBILITY_CRITERIAMaxOrderByAggregateInput = {
    criteria_id?: SortOrder
    scholarship_id?: SortOrder
    criteria_name?: SortOrder
    criteria_description?: SortOrder
    min_value?: SortOrder
    max_value?: SortOrder
    weight?: SortOrder
  }

  export type ELIGIBILITY_CRITERIAMinOrderByAggregateInput = {
    criteria_id?: SortOrder
    scholarship_id?: SortOrder
    criteria_name?: SortOrder
    criteria_description?: SortOrder
    min_value?: SortOrder
    max_value?: SortOrder
    weight?: SortOrder
  }

  export type ELIGIBILITY_CRITERIASumOrderByAggregateInput = {
    criteria_id?: SortOrder
    scholarship_id?: SortOrder
    min_value?: SortOrder
    max_value?: SortOrder
    weight?: SortOrder
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

  export type SIBLING_EDUCATIONListRelationFilter = {
    every?: SIBLING_EDUCATIONWhereInput
    some?: SIBLING_EDUCATIONWhereInput
    none?: SIBLING_EDUCATIONWhereInput
  }

  export type SIBLING_EDUCATIONOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FAMILY_MEMBEROrderByRelevanceInput = {
    fields: FAMILY_MEMBEROrderByRelevanceFieldEnum | FAMILY_MEMBEROrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FAMILY_MEMBERCountOrderByAggregateInput = {
    member_id?: SortOrder
    student_id?: SortOrder
    full_name?: SortOrder
    age?: SortOrder
    relationship?: SortOrder
    designation?: SortOrder
    annual_income?: SortOrder
    workplace?: SortOrder
    phone_number?: SortOrder
  }

  export type FAMILY_MEMBERAvgOrderByAggregateInput = {
    member_id?: SortOrder
    student_id?: SortOrder
    age?: SortOrder
    annual_income?: SortOrder
  }

  export type FAMILY_MEMBERMaxOrderByAggregateInput = {
    member_id?: SortOrder
    student_id?: SortOrder
    full_name?: SortOrder
    age?: SortOrder
    relationship?: SortOrder
    designation?: SortOrder
    annual_income?: SortOrder
    workplace?: SortOrder
    phone_number?: SortOrder
  }

  export type FAMILY_MEMBERMinOrderByAggregateInput = {
    member_id?: SortOrder
    student_id?: SortOrder
    full_name?: SortOrder
    age?: SortOrder
    relationship?: SortOrder
    designation?: SortOrder
    annual_income?: SortOrder
    workplace?: SortOrder
    phone_number?: SortOrder
  }

  export type FAMILY_MEMBERSumOrderByAggregateInput = {
    member_id?: SortOrder
    student_id?: SortOrder
    age?: SortOrder
    annual_income?: SortOrder
  }

  export type NOTIFICATIONOrderByRelevanceInput = {
    fields: NOTIFICATIONOrderByRelevanceFieldEnum | NOTIFICATIONOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type NOTIFICATIONCountOrderByAggregateInput = {
    notification_id?: SortOrder
    user_id?: SortOrder
    message?: SortOrder
    created_at?: SortOrder
    is_read?: SortOrder
  }

  export type NOTIFICATIONAvgOrderByAggregateInput = {
    notification_id?: SortOrder
    user_id?: SortOrder
  }

  export type NOTIFICATIONMaxOrderByAggregateInput = {
    notification_id?: SortOrder
    user_id?: SortOrder
    message?: SortOrder
    created_at?: SortOrder
    is_read?: SortOrder
  }

  export type NOTIFICATIONMinOrderByAggregateInput = {
    notification_id?: SortOrder
    user_id?: SortOrder
    message?: SortOrder
    created_at?: SortOrder
    is_read?: SortOrder
  }

  export type NOTIFICATIONSumOrderByAggregateInput = {
    notification_id?: SortOrder
    user_id?: SortOrder
  }

  export type OTHER_FUNDINGOrderByRelevanceInput = {
    fields: OTHER_FUNDINGOrderByRelevanceFieldEnum | OTHER_FUNDINGOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type OTHER_FUNDINGCountOrderByAggregateInput = {
    funding_id?: SortOrder
    student_id?: SortOrder
    funding_name?: SortOrder
    organization?: SortOrder
    annual_amount?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
  }

  export type OTHER_FUNDINGAvgOrderByAggregateInput = {
    funding_id?: SortOrder
    student_id?: SortOrder
    annual_amount?: SortOrder
  }

  export type OTHER_FUNDINGMaxOrderByAggregateInput = {
    funding_id?: SortOrder
    student_id?: SortOrder
    funding_name?: SortOrder
    organization?: SortOrder
    annual_amount?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
  }

  export type OTHER_FUNDINGMinOrderByAggregateInput = {
    funding_id?: SortOrder
    student_id?: SortOrder
    funding_name?: SortOrder
    organization?: SortOrder
    annual_amount?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
  }

  export type OTHER_FUNDINGSumOrderByAggregateInput = {
    funding_id?: SortOrder
    student_id?: SortOrder
    annual_amount?: SortOrder
  }

  export type EnumPAYMENT_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PAYMENT_status | EnumPAYMENT_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.PAYMENT_status[] | null
    notIn?: $Enums.PAYMENT_status[] | null
    not?: NestedEnumPAYMENT_statusNullableFilter<$PrismaModel> | $Enums.PAYMENT_status | null
  }

  export type PAYMENTOrderByRelevanceInput = {
    fields: PAYMENTOrderByRelevanceFieldEnum | PAYMENTOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PAYMENTCountOrderByAggregateInput = {
    payment_id?: SortOrder
    application_id?: SortOrder
    amount?: SortOrder
    payment_date?: SortOrder
    payment_method?: SortOrder
    transaction_id?: SortOrder
    status?: SortOrder
  }

  export type PAYMENTAvgOrderByAggregateInput = {
    payment_id?: SortOrder
    application_id?: SortOrder
    amount?: SortOrder
  }

  export type PAYMENTMaxOrderByAggregateInput = {
    payment_id?: SortOrder
    application_id?: SortOrder
    amount?: SortOrder
    payment_date?: SortOrder
    payment_method?: SortOrder
    transaction_id?: SortOrder
    status?: SortOrder
  }

  export type PAYMENTMinOrderByAggregateInput = {
    payment_id?: SortOrder
    application_id?: SortOrder
    amount?: SortOrder
    payment_date?: SortOrder
    payment_method?: SortOrder
    transaction_id?: SortOrder
    status?: SortOrder
  }

  export type PAYMENTSumOrderByAggregateInput = {
    payment_id?: SortOrder
    application_id?: SortOrder
    amount?: SortOrder
  }

  export type EnumPAYMENT_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PAYMENT_status | EnumPAYMENT_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.PAYMENT_status[] | null
    notIn?: $Enums.PAYMENT_status[] | null
    not?: NestedEnumPAYMENT_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.PAYMENT_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPAYMENT_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumPAYMENT_statusNullableFilter<$PrismaModel>
  }

  export type APPLICATIONListRelationFilter = {
    every?: APPLICATIONWhereInput
    some?: APPLICATIONWhereInput
    none?: APPLICATIONWhereInput
  }

  export type ELIGIBILITY_CRITERIAListRelationFilter = {
    every?: ELIGIBILITY_CRITERIAWhereInput
    some?: ELIGIBILITY_CRITERIAWhereInput
    none?: ELIGIBILITY_CRITERIAWhereInput
  }

  export type SCHOLARSHIP_PROVIDERNullableScalarRelationFilter = {
    is?: SCHOLARSHIP_PROVIDERWhereInput | null
    isNot?: SCHOLARSHIP_PROVIDERWhereInput | null
  }

  export type APPLICATIONOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ELIGIBILITY_CRITERIAOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SCHOLARSHIPOrderByRelevanceInput = {
    fields: SCHOLARSHIPOrderByRelevanceFieldEnum | SCHOLARSHIPOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SCHOLARSHIPCountOrderByAggregateInput = {
    scholarship_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    no_of_students?: SortOrder
    application_deadline?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    provider_id?: SortOrder
    is_active?: SortOrder
  }

  export type SCHOLARSHIPAvgOrderByAggregateInput = {
    scholarship_id?: SortOrder
    amount?: SortOrder
    no_of_students?: SortOrder
    provider_id?: SortOrder
  }

  export type SCHOLARSHIPMaxOrderByAggregateInput = {
    scholarship_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    no_of_students?: SortOrder
    application_deadline?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    provider_id?: SortOrder
    is_active?: SortOrder
  }

  export type SCHOLARSHIPMinOrderByAggregateInput = {
    scholarship_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    no_of_students?: SortOrder
    application_deadline?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    provider_id?: SortOrder
    is_active?: SortOrder
  }

  export type SCHOLARSHIPSumOrderByAggregateInput = {
    scholarship_id?: SortOrder
    amount?: SortOrder
    no_of_students?: SortOrder
    provider_id?: SortOrder
  }

  export type SCHOLARSHIPListRelationFilter = {
    every?: SCHOLARSHIPWhereInput
    some?: SCHOLARSHIPWhereInput
    none?: SCHOLARSHIPWhereInput
  }

  export type SCHOLARSHIPOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SCHOLARSHIP_PROVIDEROrderByRelevanceInput = {
    fields: SCHOLARSHIP_PROVIDEROrderByRelevanceFieldEnum | SCHOLARSHIP_PROVIDEROrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SCHOLARSHIP_PROVIDERCountOrderByAggregateInput = {
    provider_id?: SortOrder
    name?: SortOrder
    contact_person?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
  }

  export type SCHOLARSHIP_PROVIDERAvgOrderByAggregateInput = {
    provider_id?: SortOrder
  }

  export type SCHOLARSHIP_PROVIDERMaxOrderByAggregateInput = {
    provider_id?: SortOrder
    name?: SortOrder
    contact_person?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
  }

  export type SCHOLARSHIP_PROVIDERMinOrderByAggregateInput = {
    provider_id?: SortOrder
    name?: SortOrder
    contact_person?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
  }

  export type SCHOLARSHIP_PROVIDERSumOrderByAggregateInput = {
    provider_id?: SortOrder
  }

  export type FAMILY_MEMBERNullableScalarRelationFilter = {
    is?: FAMILY_MEMBERWhereInput | null
    isNot?: FAMILY_MEMBERWhereInput | null
  }

  export type SIBLING_EDUCATIONOrderByRelevanceInput = {
    fields: SIBLING_EDUCATIONOrderByRelevanceFieldEnum | SIBLING_EDUCATIONOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SIBLING_EDUCATIONCountOrderByAggregateInput = {
    education_id?: SortOrder
    student_id?: SortOrder
    member_id?: SortOrder
    institution?: SortOrder
    year_grade?: SortOrder
    registration_course?: SortOrder
  }

  export type SIBLING_EDUCATIONAvgOrderByAggregateInput = {
    education_id?: SortOrder
    student_id?: SortOrder
    member_id?: SortOrder
  }

  export type SIBLING_EDUCATIONMaxOrderByAggregateInput = {
    education_id?: SortOrder
    student_id?: SortOrder
    member_id?: SortOrder
    institution?: SortOrder
    year_grade?: SortOrder
    registration_course?: SortOrder
  }

  export type SIBLING_EDUCATIONMinOrderByAggregateInput = {
    education_id?: SortOrder
    student_id?: SortOrder
    member_id?: SortOrder
    institution?: SortOrder
    year_grade?: SortOrder
    registration_course?: SortOrder
  }

  export type SIBLING_EDUCATIONSumOrderByAggregateInput = {
    education_id?: SortOrder
    student_id?: SortOrder
    member_id?: SortOrder
  }

  export type EnumSTUDENT_genderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.STUDENT_gender | EnumSTUDENT_genderFieldRefInput<$PrismaModel> | null
    in?: $Enums.STUDENT_gender[] | null
    notIn?: $Enums.STUDENT_gender[] | null
    not?: NestedEnumSTUDENT_genderNullableFilter<$PrismaModel> | $Enums.STUDENT_gender | null
  }

  export type FAMILY_MEMBERListRelationFilter = {
    every?: FAMILY_MEMBERWhereInput
    some?: FAMILY_MEMBERWhereInput
    none?: FAMILY_MEMBERWhereInput
  }

  export type OTHER_FUNDINGListRelationFilter = {
    every?: OTHER_FUNDINGWhereInput
    some?: OTHER_FUNDINGWhereInput
    none?: OTHER_FUNDINGWhereInput
  }

  export type FAMILY_MEMBEROrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OTHER_FUNDINGOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type STUDENTOrderByRelevanceInput = {
    fields: STUDENTOrderByRelevanceFieldEnum | STUDENTOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type STUDENTCountOrderByAggregateInput = {
    student_id?: SortOrder
    user_id?: SortOrder
    full_name?: SortOrder
    registration_no?: SortOrder
    date_of_birth?: SortOrder
    permanent_address?: SortOrder
    admission_date?: SortOrder
    year_of_study?: SortOrder
    gender?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    school_name?: SortOrder
    unmarried_siblings?: SortOrder
  }

  export type STUDENTAvgOrderByAggregateInput = {
    student_id?: SortOrder
    user_id?: SortOrder
    year_of_study?: SortOrder
    unmarried_siblings?: SortOrder
  }

  export type STUDENTMaxOrderByAggregateInput = {
    student_id?: SortOrder
    user_id?: SortOrder
    full_name?: SortOrder
    registration_no?: SortOrder
    date_of_birth?: SortOrder
    permanent_address?: SortOrder
    admission_date?: SortOrder
    year_of_study?: SortOrder
    gender?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    school_name?: SortOrder
    unmarried_siblings?: SortOrder
  }

  export type STUDENTMinOrderByAggregateInput = {
    student_id?: SortOrder
    user_id?: SortOrder
    full_name?: SortOrder
    registration_no?: SortOrder
    date_of_birth?: SortOrder
    permanent_address?: SortOrder
    admission_date?: SortOrder
    year_of_study?: SortOrder
    gender?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    school_name?: SortOrder
    unmarried_siblings?: SortOrder
  }

  export type STUDENTSumOrderByAggregateInput = {
    student_id?: SortOrder
    user_id?: SortOrder
    year_of_study?: SortOrder
    unmarried_siblings?: SortOrder
  }

  export type EnumSTUDENT_genderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.STUDENT_gender | EnumSTUDENT_genderFieldRefInput<$PrismaModel> | null
    in?: $Enums.STUDENT_gender[] | null
    notIn?: $Enums.STUDENT_gender[] | null
    not?: NestedEnumSTUDENT_genderNullableWithAggregatesFilter<$PrismaModel> | $Enums.STUDENT_gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSTUDENT_genderNullableFilter<$PrismaModel>
    _max?: NestedEnumSTUDENT_genderNullableFilter<$PrismaModel>
  }

  export type EnumUSER_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.USER_role | EnumUSER_roleFieldRefInput<$PrismaModel>
    in?: $Enums.USER_role[]
    notIn?: $Enums.USER_role[]
    not?: NestedEnumUSER_roleFilter<$PrismaModel> | $Enums.USER_role
  }

  export type NOTIFICATIONListRelationFilter = {
    every?: NOTIFICATIONWhereInput
    some?: NOTIFICATIONWhereInput
    none?: NOTIFICATIONWhereInput
  }

  export type STUDENTListRelationFilter = {
    every?: STUDENTWhereInput
    some?: STUDENTWhereInput
    none?: STUDENTWhereInput
  }

  export type NOTIFICATIONOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type STUDENTOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type USEROrderByRelevanceInput = {
    fields: USEROrderByRelevanceFieldEnum | USEROrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type USERCountOrderByAggregateInput = {
    user_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type USERAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type USERMaxOrderByAggregateInput = {
    user_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type USERMinOrderByAggregateInput = {
    user_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type USERSumOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type EnumUSER_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.USER_role | EnumUSER_roleFieldRefInput<$PrismaModel>
    in?: $Enums.USER_role[]
    notIn?: $Enums.USER_role[]
    not?: NestedEnumUSER_roleWithAggregatesFilter<$PrismaModel> | $Enums.USER_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUSER_roleFilter<$PrismaModel>
    _max?: NestedEnumUSER_roleFilter<$PrismaModel>
  }

  export type STUDENTCreateNestedOneWithoutAPPLICATIONInput = {
    create?: XOR<STUDENTCreateWithoutAPPLICATIONInput, STUDENTUncheckedCreateWithoutAPPLICATIONInput>
    connectOrCreate?: STUDENTCreateOrConnectWithoutAPPLICATIONInput
    connect?: STUDENTWhereUniqueInput
  }

  export type SCHOLARSHIPCreateNestedOneWithoutAPPLICATIONInput = {
    create?: XOR<SCHOLARSHIPCreateWithoutAPPLICATIONInput, SCHOLARSHIPUncheckedCreateWithoutAPPLICATIONInput>
    connectOrCreate?: SCHOLARSHIPCreateOrConnectWithoutAPPLICATIONInput
    connect?: SCHOLARSHIPWhereUniqueInput
  }

  export type COMMITTEE_REVIEWCreateNestedManyWithoutAPPLICATIONInput = {
    create?: XOR<COMMITTEE_REVIEWCreateWithoutAPPLICATIONInput, COMMITTEE_REVIEWUncheckedCreateWithoutAPPLICATIONInput> | COMMITTEE_REVIEWCreateWithoutAPPLICATIONInput[] | COMMITTEE_REVIEWUncheckedCreateWithoutAPPLICATIONInput[]
    connectOrCreate?: COMMITTEE_REVIEWCreateOrConnectWithoutAPPLICATIONInput | COMMITTEE_REVIEWCreateOrConnectWithoutAPPLICATIONInput[]
    createMany?: COMMITTEE_REVIEWCreateManyAPPLICATIONInputEnvelope
    connect?: COMMITTEE_REVIEWWhereUniqueInput | COMMITTEE_REVIEWWhereUniqueInput[]
  }

  export type DOCUMENTCreateNestedManyWithoutAPPLICATIONInput = {
    create?: XOR<DOCUMENTCreateWithoutAPPLICATIONInput, DOCUMENTUncheckedCreateWithoutAPPLICATIONInput> | DOCUMENTCreateWithoutAPPLICATIONInput[] | DOCUMENTUncheckedCreateWithoutAPPLICATIONInput[]
    connectOrCreate?: DOCUMENTCreateOrConnectWithoutAPPLICATIONInput | DOCUMENTCreateOrConnectWithoutAPPLICATIONInput[]
    createMany?: DOCUMENTCreateManyAPPLICATIONInputEnvelope
    connect?: DOCUMENTWhereUniqueInput | DOCUMENTWhereUniqueInput[]
  }

  export type PAYMENTCreateNestedManyWithoutAPPLICATIONInput = {
    create?: XOR<PAYMENTCreateWithoutAPPLICATIONInput, PAYMENTUncheckedCreateWithoutAPPLICATIONInput> | PAYMENTCreateWithoutAPPLICATIONInput[] | PAYMENTUncheckedCreateWithoutAPPLICATIONInput[]
    connectOrCreate?: PAYMENTCreateOrConnectWithoutAPPLICATIONInput | PAYMENTCreateOrConnectWithoutAPPLICATIONInput[]
    createMany?: PAYMENTCreateManyAPPLICATIONInputEnvelope
    connect?: PAYMENTWhereUniqueInput | PAYMENTWhereUniqueInput[]
  }

  export type COMMITTEE_REVIEWUncheckedCreateNestedManyWithoutAPPLICATIONInput = {
    create?: XOR<COMMITTEE_REVIEWCreateWithoutAPPLICATIONInput, COMMITTEE_REVIEWUncheckedCreateWithoutAPPLICATIONInput> | COMMITTEE_REVIEWCreateWithoutAPPLICATIONInput[] | COMMITTEE_REVIEWUncheckedCreateWithoutAPPLICATIONInput[]
    connectOrCreate?: COMMITTEE_REVIEWCreateOrConnectWithoutAPPLICATIONInput | COMMITTEE_REVIEWCreateOrConnectWithoutAPPLICATIONInput[]
    createMany?: COMMITTEE_REVIEWCreateManyAPPLICATIONInputEnvelope
    connect?: COMMITTEE_REVIEWWhereUniqueInput | COMMITTEE_REVIEWWhereUniqueInput[]
  }

  export type DOCUMENTUncheckedCreateNestedManyWithoutAPPLICATIONInput = {
    create?: XOR<DOCUMENTCreateWithoutAPPLICATIONInput, DOCUMENTUncheckedCreateWithoutAPPLICATIONInput> | DOCUMENTCreateWithoutAPPLICATIONInput[] | DOCUMENTUncheckedCreateWithoutAPPLICATIONInput[]
    connectOrCreate?: DOCUMENTCreateOrConnectWithoutAPPLICATIONInput | DOCUMENTCreateOrConnectWithoutAPPLICATIONInput[]
    createMany?: DOCUMENTCreateManyAPPLICATIONInputEnvelope
    connect?: DOCUMENTWhereUniqueInput | DOCUMENTWhereUniqueInput[]
  }

  export type PAYMENTUncheckedCreateNestedManyWithoutAPPLICATIONInput = {
    create?: XOR<PAYMENTCreateWithoutAPPLICATIONInput, PAYMENTUncheckedCreateWithoutAPPLICATIONInput> | PAYMENTCreateWithoutAPPLICATIONInput[] | PAYMENTUncheckedCreateWithoutAPPLICATIONInput[]
    connectOrCreate?: PAYMENTCreateOrConnectWithoutAPPLICATIONInput | PAYMENTCreateOrConnectWithoutAPPLICATIONInput[]
    createMany?: PAYMENTCreateManyAPPLICATIONInputEnvelope
    connect?: PAYMENTWhereUniqueInput | PAYMENTWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableEnumAPPLICATION_statusFieldUpdateOperationsInput = {
    set?: $Enums.APPLICATION_status | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type STUDENTUpdateOneWithoutAPPLICATIONNestedInput = {
    create?: XOR<STUDENTCreateWithoutAPPLICATIONInput, STUDENTUncheckedCreateWithoutAPPLICATIONInput>
    connectOrCreate?: STUDENTCreateOrConnectWithoutAPPLICATIONInput
    upsert?: STUDENTUpsertWithoutAPPLICATIONInput
    disconnect?: STUDENTWhereInput | boolean
    delete?: STUDENTWhereInput | boolean
    connect?: STUDENTWhereUniqueInput
    update?: XOR<XOR<STUDENTUpdateToOneWithWhereWithoutAPPLICATIONInput, STUDENTUpdateWithoutAPPLICATIONInput>, STUDENTUncheckedUpdateWithoutAPPLICATIONInput>
  }

  export type SCHOLARSHIPUpdateOneWithoutAPPLICATIONNestedInput = {
    create?: XOR<SCHOLARSHIPCreateWithoutAPPLICATIONInput, SCHOLARSHIPUncheckedCreateWithoutAPPLICATIONInput>
    connectOrCreate?: SCHOLARSHIPCreateOrConnectWithoutAPPLICATIONInput
    upsert?: SCHOLARSHIPUpsertWithoutAPPLICATIONInput
    disconnect?: SCHOLARSHIPWhereInput | boolean
    delete?: SCHOLARSHIPWhereInput | boolean
    connect?: SCHOLARSHIPWhereUniqueInput
    update?: XOR<XOR<SCHOLARSHIPUpdateToOneWithWhereWithoutAPPLICATIONInput, SCHOLARSHIPUpdateWithoutAPPLICATIONInput>, SCHOLARSHIPUncheckedUpdateWithoutAPPLICATIONInput>
  }

  export type COMMITTEE_REVIEWUpdateManyWithoutAPPLICATIONNestedInput = {
    create?: XOR<COMMITTEE_REVIEWCreateWithoutAPPLICATIONInput, COMMITTEE_REVIEWUncheckedCreateWithoutAPPLICATIONInput> | COMMITTEE_REVIEWCreateWithoutAPPLICATIONInput[] | COMMITTEE_REVIEWUncheckedCreateWithoutAPPLICATIONInput[]
    connectOrCreate?: COMMITTEE_REVIEWCreateOrConnectWithoutAPPLICATIONInput | COMMITTEE_REVIEWCreateOrConnectWithoutAPPLICATIONInput[]
    upsert?: COMMITTEE_REVIEWUpsertWithWhereUniqueWithoutAPPLICATIONInput | COMMITTEE_REVIEWUpsertWithWhereUniqueWithoutAPPLICATIONInput[]
    createMany?: COMMITTEE_REVIEWCreateManyAPPLICATIONInputEnvelope
    set?: COMMITTEE_REVIEWWhereUniqueInput | COMMITTEE_REVIEWWhereUniqueInput[]
    disconnect?: COMMITTEE_REVIEWWhereUniqueInput | COMMITTEE_REVIEWWhereUniqueInput[]
    delete?: COMMITTEE_REVIEWWhereUniqueInput | COMMITTEE_REVIEWWhereUniqueInput[]
    connect?: COMMITTEE_REVIEWWhereUniqueInput | COMMITTEE_REVIEWWhereUniqueInput[]
    update?: COMMITTEE_REVIEWUpdateWithWhereUniqueWithoutAPPLICATIONInput | COMMITTEE_REVIEWUpdateWithWhereUniqueWithoutAPPLICATIONInput[]
    updateMany?: COMMITTEE_REVIEWUpdateManyWithWhereWithoutAPPLICATIONInput | COMMITTEE_REVIEWUpdateManyWithWhereWithoutAPPLICATIONInput[]
    deleteMany?: COMMITTEE_REVIEWScalarWhereInput | COMMITTEE_REVIEWScalarWhereInput[]
  }

  export type DOCUMENTUpdateManyWithoutAPPLICATIONNestedInput = {
    create?: XOR<DOCUMENTCreateWithoutAPPLICATIONInput, DOCUMENTUncheckedCreateWithoutAPPLICATIONInput> | DOCUMENTCreateWithoutAPPLICATIONInput[] | DOCUMENTUncheckedCreateWithoutAPPLICATIONInput[]
    connectOrCreate?: DOCUMENTCreateOrConnectWithoutAPPLICATIONInput | DOCUMENTCreateOrConnectWithoutAPPLICATIONInput[]
    upsert?: DOCUMENTUpsertWithWhereUniqueWithoutAPPLICATIONInput | DOCUMENTUpsertWithWhereUniqueWithoutAPPLICATIONInput[]
    createMany?: DOCUMENTCreateManyAPPLICATIONInputEnvelope
    set?: DOCUMENTWhereUniqueInput | DOCUMENTWhereUniqueInput[]
    disconnect?: DOCUMENTWhereUniqueInput | DOCUMENTWhereUniqueInput[]
    delete?: DOCUMENTWhereUniqueInput | DOCUMENTWhereUniqueInput[]
    connect?: DOCUMENTWhereUniqueInput | DOCUMENTWhereUniqueInput[]
    update?: DOCUMENTUpdateWithWhereUniqueWithoutAPPLICATIONInput | DOCUMENTUpdateWithWhereUniqueWithoutAPPLICATIONInput[]
    updateMany?: DOCUMENTUpdateManyWithWhereWithoutAPPLICATIONInput | DOCUMENTUpdateManyWithWhereWithoutAPPLICATIONInput[]
    deleteMany?: DOCUMENTScalarWhereInput | DOCUMENTScalarWhereInput[]
  }

  export type PAYMENTUpdateManyWithoutAPPLICATIONNestedInput = {
    create?: XOR<PAYMENTCreateWithoutAPPLICATIONInput, PAYMENTUncheckedCreateWithoutAPPLICATIONInput> | PAYMENTCreateWithoutAPPLICATIONInput[] | PAYMENTUncheckedCreateWithoutAPPLICATIONInput[]
    connectOrCreate?: PAYMENTCreateOrConnectWithoutAPPLICATIONInput | PAYMENTCreateOrConnectWithoutAPPLICATIONInput[]
    upsert?: PAYMENTUpsertWithWhereUniqueWithoutAPPLICATIONInput | PAYMENTUpsertWithWhereUniqueWithoutAPPLICATIONInput[]
    createMany?: PAYMENTCreateManyAPPLICATIONInputEnvelope
    set?: PAYMENTWhereUniqueInput | PAYMENTWhereUniqueInput[]
    disconnect?: PAYMENTWhereUniqueInput | PAYMENTWhereUniqueInput[]
    delete?: PAYMENTWhereUniqueInput | PAYMENTWhereUniqueInput[]
    connect?: PAYMENTWhereUniqueInput | PAYMENTWhereUniqueInput[]
    update?: PAYMENTUpdateWithWhereUniqueWithoutAPPLICATIONInput | PAYMENTUpdateWithWhereUniqueWithoutAPPLICATIONInput[]
    updateMany?: PAYMENTUpdateManyWithWhereWithoutAPPLICATIONInput | PAYMENTUpdateManyWithWhereWithoutAPPLICATIONInput[]
    deleteMany?: PAYMENTScalarWhereInput | PAYMENTScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type COMMITTEE_REVIEWUncheckedUpdateManyWithoutAPPLICATIONNestedInput = {
    create?: XOR<COMMITTEE_REVIEWCreateWithoutAPPLICATIONInput, COMMITTEE_REVIEWUncheckedCreateWithoutAPPLICATIONInput> | COMMITTEE_REVIEWCreateWithoutAPPLICATIONInput[] | COMMITTEE_REVIEWUncheckedCreateWithoutAPPLICATIONInput[]
    connectOrCreate?: COMMITTEE_REVIEWCreateOrConnectWithoutAPPLICATIONInput | COMMITTEE_REVIEWCreateOrConnectWithoutAPPLICATIONInput[]
    upsert?: COMMITTEE_REVIEWUpsertWithWhereUniqueWithoutAPPLICATIONInput | COMMITTEE_REVIEWUpsertWithWhereUniqueWithoutAPPLICATIONInput[]
    createMany?: COMMITTEE_REVIEWCreateManyAPPLICATIONInputEnvelope
    set?: COMMITTEE_REVIEWWhereUniqueInput | COMMITTEE_REVIEWWhereUniqueInput[]
    disconnect?: COMMITTEE_REVIEWWhereUniqueInput | COMMITTEE_REVIEWWhereUniqueInput[]
    delete?: COMMITTEE_REVIEWWhereUniqueInput | COMMITTEE_REVIEWWhereUniqueInput[]
    connect?: COMMITTEE_REVIEWWhereUniqueInput | COMMITTEE_REVIEWWhereUniqueInput[]
    update?: COMMITTEE_REVIEWUpdateWithWhereUniqueWithoutAPPLICATIONInput | COMMITTEE_REVIEWUpdateWithWhereUniqueWithoutAPPLICATIONInput[]
    updateMany?: COMMITTEE_REVIEWUpdateManyWithWhereWithoutAPPLICATIONInput | COMMITTEE_REVIEWUpdateManyWithWhereWithoutAPPLICATIONInput[]
    deleteMany?: COMMITTEE_REVIEWScalarWhereInput | COMMITTEE_REVIEWScalarWhereInput[]
  }

  export type DOCUMENTUncheckedUpdateManyWithoutAPPLICATIONNestedInput = {
    create?: XOR<DOCUMENTCreateWithoutAPPLICATIONInput, DOCUMENTUncheckedCreateWithoutAPPLICATIONInput> | DOCUMENTCreateWithoutAPPLICATIONInput[] | DOCUMENTUncheckedCreateWithoutAPPLICATIONInput[]
    connectOrCreate?: DOCUMENTCreateOrConnectWithoutAPPLICATIONInput | DOCUMENTCreateOrConnectWithoutAPPLICATIONInput[]
    upsert?: DOCUMENTUpsertWithWhereUniqueWithoutAPPLICATIONInput | DOCUMENTUpsertWithWhereUniqueWithoutAPPLICATIONInput[]
    createMany?: DOCUMENTCreateManyAPPLICATIONInputEnvelope
    set?: DOCUMENTWhereUniqueInput | DOCUMENTWhereUniqueInput[]
    disconnect?: DOCUMENTWhereUniqueInput | DOCUMENTWhereUniqueInput[]
    delete?: DOCUMENTWhereUniqueInput | DOCUMENTWhereUniqueInput[]
    connect?: DOCUMENTWhereUniqueInput | DOCUMENTWhereUniqueInput[]
    update?: DOCUMENTUpdateWithWhereUniqueWithoutAPPLICATIONInput | DOCUMENTUpdateWithWhereUniqueWithoutAPPLICATIONInput[]
    updateMany?: DOCUMENTUpdateManyWithWhereWithoutAPPLICATIONInput | DOCUMENTUpdateManyWithWhereWithoutAPPLICATIONInput[]
    deleteMany?: DOCUMENTScalarWhereInput | DOCUMENTScalarWhereInput[]
  }

  export type PAYMENTUncheckedUpdateManyWithoutAPPLICATIONNestedInput = {
    create?: XOR<PAYMENTCreateWithoutAPPLICATIONInput, PAYMENTUncheckedCreateWithoutAPPLICATIONInput> | PAYMENTCreateWithoutAPPLICATIONInput[] | PAYMENTUncheckedCreateWithoutAPPLICATIONInput[]
    connectOrCreate?: PAYMENTCreateOrConnectWithoutAPPLICATIONInput | PAYMENTCreateOrConnectWithoutAPPLICATIONInput[]
    upsert?: PAYMENTUpsertWithWhereUniqueWithoutAPPLICATIONInput | PAYMENTUpsertWithWhereUniqueWithoutAPPLICATIONInput[]
    createMany?: PAYMENTCreateManyAPPLICATIONInputEnvelope
    set?: PAYMENTWhereUniqueInput | PAYMENTWhereUniqueInput[]
    disconnect?: PAYMENTWhereUniqueInput | PAYMENTWhereUniqueInput[]
    delete?: PAYMENTWhereUniqueInput | PAYMENTWhereUniqueInput[]
    connect?: PAYMENTWhereUniqueInput | PAYMENTWhereUniqueInput[]
    update?: PAYMENTUpdateWithWhereUniqueWithoutAPPLICATIONInput | PAYMENTUpdateWithWhereUniqueWithoutAPPLICATIONInput[]
    updateMany?: PAYMENTUpdateManyWithWhereWithoutAPPLICATIONInput | PAYMENTUpdateManyWithWhereWithoutAPPLICATIONInput[]
    deleteMany?: PAYMENTScalarWhereInput | PAYMENTScalarWhereInput[]
  }

  export type APPLICATIONCreateNestedOneWithoutCOMMITTEE_REVIEWInput = {
    create?: XOR<APPLICATIONCreateWithoutCOMMITTEE_REVIEWInput, APPLICATIONUncheckedCreateWithoutCOMMITTEE_REVIEWInput>
    connectOrCreate?: APPLICATIONCreateOrConnectWithoutCOMMITTEE_REVIEWInput
    connect?: APPLICATIONWhereUniqueInput
  }

  export type USERCreateNestedOneWithoutCOMMITTEE_REVIEWInput = {
    create?: XOR<USERCreateWithoutCOMMITTEE_REVIEWInput, USERUncheckedCreateWithoutCOMMITTEE_REVIEWInput>
    connectOrCreate?: USERCreateOrConnectWithoutCOMMITTEE_REVIEWInput
    connect?: USERWhereUniqueInput
  }

  export type NullableEnumCOMMITTEE_REVIEW_statusFieldUpdateOperationsInput = {
    set?: $Enums.COMMITTEE_REVIEW_status | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type APPLICATIONUpdateOneWithoutCOMMITTEE_REVIEWNestedInput = {
    create?: XOR<APPLICATIONCreateWithoutCOMMITTEE_REVIEWInput, APPLICATIONUncheckedCreateWithoutCOMMITTEE_REVIEWInput>
    connectOrCreate?: APPLICATIONCreateOrConnectWithoutCOMMITTEE_REVIEWInput
    upsert?: APPLICATIONUpsertWithoutCOMMITTEE_REVIEWInput
    disconnect?: APPLICATIONWhereInput | boolean
    delete?: APPLICATIONWhereInput | boolean
    connect?: APPLICATIONWhereUniqueInput
    update?: XOR<XOR<APPLICATIONUpdateToOneWithWhereWithoutCOMMITTEE_REVIEWInput, APPLICATIONUpdateWithoutCOMMITTEE_REVIEWInput>, APPLICATIONUncheckedUpdateWithoutCOMMITTEE_REVIEWInput>
  }

  export type USERUpdateOneWithoutCOMMITTEE_REVIEWNestedInput = {
    create?: XOR<USERCreateWithoutCOMMITTEE_REVIEWInput, USERUncheckedCreateWithoutCOMMITTEE_REVIEWInput>
    connectOrCreate?: USERCreateOrConnectWithoutCOMMITTEE_REVIEWInput
    upsert?: USERUpsertWithoutCOMMITTEE_REVIEWInput
    disconnect?: USERWhereInput | boolean
    delete?: USERWhereInput | boolean
    connect?: USERWhereUniqueInput
    update?: XOR<XOR<USERUpdateToOneWithWhereWithoutCOMMITTEE_REVIEWInput, USERUpdateWithoutCOMMITTEE_REVIEWInput>, USERUncheckedUpdateWithoutCOMMITTEE_REVIEWInput>
  }

  export type APPLICATIONCreateNestedOneWithoutDOCUMENTInput = {
    create?: XOR<APPLICATIONCreateWithoutDOCUMENTInput, APPLICATIONUncheckedCreateWithoutDOCUMENTInput>
    connectOrCreate?: APPLICATIONCreateOrConnectWithoutDOCUMENTInput
    connect?: APPLICATIONWhereUniqueInput
  }

  export type NullableEnumDOCUMENT_verification_statusFieldUpdateOperationsInput = {
    set?: $Enums.DOCUMENT_verification_status | null
  }

  export type APPLICATIONUpdateOneWithoutDOCUMENTNestedInput = {
    create?: XOR<APPLICATIONCreateWithoutDOCUMENTInput, APPLICATIONUncheckedCreateWithoutDOCUMENTInput>
    connectOrCreate?: APPLICATIONCreateOrConnectWithoutDOCUMENTInput
    upsert?: APPLICATIONUpsertWithoutDOCUMENTInput
    disconnect?: APPLICATIONWhereInput | boolean
    delete?: APPLICATIONWhereInput | boolean
    connect?: APPLICATIONWhereUniqueInput
    update?: XOR<XOR<APPLICATIONUpdateToOneWithWhereWithoutDOCUMENTInput, APPLICATIONUpdateWithoutDOCUMENTInput>, APPLICATIONUncheckedUpdateWithoutDOCUMENTInput>
  }

  export type SCHOLARSHIPCreateNestedOneWithoutELIGIBILITY_CRITERIAInput = {
    create?: XOR<SCHOLARSHIPCreateWithoutELIGIBILITY_CRITERIAInput, SCHOLARSHIPUncheckedCreateWithoutELIGIBILITY_CRITERIAInput>
    connectOrCreate?: SCHOLARSHIPCreateOrConnectWithoutELIGIBILITY_CRITERIAInput
    connect?: SCHOLARSHIPWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type SCHOLARSHIPUpdateOneWithoutELIGIBILITY_CRITERIANestedInput = {
    create?: XOR<SCHOLARSHIPCreateWithoutELIGIBILITY_CRITERIAInput, SCHOLARSHIPUncheckedCreateWithoutELIGIBILITY_CRITERIAInput>
    connectOrCreate?: SCHOLARSHIPCreateOrConnectWithoutELIGIBILITY_CRITERIAInput
    upsert?: SCHOLARSHIPUpsertWithoutELIGIBILITY_CRITERIAInput
    disconnect?: SCHOLARSHIPWhereInput | boolean
    delete?: SCHOLARSHIPWhereInput | boolean
    connect?: SCHOLARSHIPWhereUniqueInput
    update?: XOR<XOR<SCHOLARSHIPUpdateToOneWithWhereWithoutELIGIBILITY_CRITERIAInput, SCHOLARSHIPUpdateWithoutELIGIBILITY_CRITERIAInput>, SCHOLARSHIPUncheckedUpdateWithoutELIGIBILITY_CRITERIAInput>
  }

  export type STUDENTCreateNestedOneWithoutFAMILY_MEMBERInput = {
    create?: XOR<STUDENTCreateWithoutFAMILY_MEMBERInput, STUDENTUncheckedCreateWithoutFAMILY_MEMBERInput>
    connectOrCreate?: STUDENTCreateOrConnectWithoutFAMILY_MEMBERInput
    connect?: STUDENTWhereUniqueInput
  }

  export type SIBLING_EDUCATIONCreateNestedManyWithoutFAMILY_MEMBERInput = {
    create?: XOR<SIBLING_EDUCATIONCreateWithoutFAMILY_MEMBERInput, SIBLING_EDUCATIONUncheckedCreateWithoutFAMILY_MEMBERInput> | SIBLING_EDUCATIONCreateWithoutFAMILY_MEMBERInput[] | SIBLING_EDUCATIONUncheckedCreateWithoutFAMILY_MEMBERInput[]
    connectOrCreate?: SIBLING_EDUCATIONCreateOrConnectWithoutFAMILY_MEMBERInput | SIBLING_EDUCATIONCreateOrConnectWithoutFAMILY_MEMBERInput[]
    createMany?: SIBLING_EDUCATIONCreateManyFAMILY_MEMBERInputEnvelope
    connect?: SIBLING_EDUCATIONWhereUniqueInput | SIBLING_EDUCATIONWhereUniqueInput[]
  }

  export type SIBLING_EDUCATIONUncheckedCreateNestedManyWithoutFAMILY_MEMBERInput = {
    create?: XOR<SIBLING_EDUCATIONCreateWithoutFAMILY_MEMBERInput, SIBLING_EDUCATIONUncheckedCreateWithoutFAMILY_MEMBERInput> | SIBLING_EDUCATIONCreateWithoutFAMILY_MEMBERInput[] | SIBLING_EDUCATIONUncheckedCreateWithoutFAMILY_MEMBERInput[]
    connectOrCreate?: SIBLING_EDUCATIONCreateOrConnectWithoutFAMILY_MEMBERInput | SIBLING_EDUCATIONCreateOrConnectWithoutFAMILY_MEMBERInput[]
    createMany?: SIBLING_EDUCATIONCreateManyFAMILY_MEMBERInputEnvelope
    connect?: SIBLING_EDUCATIONWhereUniqueInput | SIBLING_EDUCATIONWhereUniqueInput[]
  }

  export type STUDENTUpdateOneWithoutFAMILY_MEMBERNestedInput = {
    create?: XOR<STUDENTCreateWithoutFAMILY_MEMBERInput, STUDENTUncheckedCreateWithoutFAMILY_MEMBERInput>
    connectOrCreate?: STUDENTCreateOrConnectWithoutFAMILY_MEMBERInput
    upsert?: STUDENTUpsertWithoutFAMILY_MEMBERInput
    disconnect?: STUDENTWhereInput | boolean
    delete?: STUDENTWhereInput | boolean
    connect?: STUDENTWhereUniqueInput
    update?: XOR<XOR<STUDENTUpdateToOneWithWhereWithoutFAMILY_MEMBERInput, STUDENTUpdateWithoutFAMILY_MEMBERInput>, STUDENTUncheckedUpdateWithoutFAMILY_MEMBERInput>
  }

  export type SIBLING_EDUCATIONUpdateManyWithoutFAMILY_MEMBERNestedInput = {
    create?: XOR<SIBLING_EDUCATIONCreateWithoutFAMILY_MEMBERInput, SIBLING_EDUCATIONUncheckedCreateWithoutFAMILY_MEMBERInput> | SIBLING_EDUCATIONCreateWithoutFAMILY_MEMBERInput[] | SIBLING_EDUCATIONUncheckedCreateWithoutFAMILY_MEMBERInput[]
    connectOrCreate?: SIBLING_EDUCATIONCreateOrConnectWithoutFAMILY_MEMBERInput | SIBLING_EDUCATIONCreateOrConnectWithoutFAMILY_MEMBERInput[]
    upsert?: SIBLING_EDUCATIONUpsertWithWhereUniqueWithoutFAMILY_MEMBERInput | SIBLING_EDUCATIONUpsertWithWhereUniqueWithoutFAMILY_MEMBERInput[]
    createMany?: SIBLING_EDUCATIONCreateManyFAMILY_MEMBERInputEnvelope
    set?: SIBLING_EDUCATIONWhereUniqueInput | SIBLING_EDUCATIONWhereUniqueInput[]
    disconnect?: SIBLING_EDUCATIONWhereUniqueInput | SIBLING_EDUCATIONWhereUniqueInput[]
    delete?: SIBLING_EDUCATIONWhereUniqueInput | SIBLING_EDUCATIONWhereUniqueInput[]
    connect?: SIBLING_EDUCATIONWhereUniqueInput | SIBLING_EDUCATIONWhereUniqueInput[]
    update?: SIBLING_EDUCATIONUpdateWithWhereUniqueWithoutFAMILY_MEMBERInput | SIBLING_EDUCATIONUpdateWithWhereUniqueWithoutFAMILY_MEMBERInput[]
    updateMany?: SIBLING_EDUCATIONUpdateManyWithWhereWithoutFAMILY_MEMBERInput | SIBLING_EDUCATIONUpdateManyWithWhereWithoutFAMILY_MEMBERInput[]
    deleteMany?: SIBLING_EDUCATIONScalarWhereInput | SIBLING_EDUCATIONScalarWhereInput[]
  }

  export type SIBLING_EDUCATIONUncheckedUpdateManyWithoutFAMILY_MEMBERNestedInput = {
    create?: XOR<SIBLING_EDUCATIONCreateWithoutFAMILY_MEMBERInput, SIBLING_EDUCATIONUncheckedCreateWithoutFAMILY_MEMBERInput> | SIBLING_EDUCATIONCreateWithoutFAMILY_MEMBERInput[] | SIBLING_EDUCATIONUncheckedCreateWithoutFAMILY_MEMBERInput[]
    connectOrCreate?: SIBLING_EDUCATIONCreateOrConnectWithoutFAMILY_MEMBERInput | SIBLING_EDUCATIONCreateOrConnectWithoutFAMILY_MEMBERInput[]
    upsert?: SIBLING_EDUCATIONUpsertWithWhereUniqueWithoutFAMILY_MEMBERInput | SIBLING_EDUCATIONUpsertWithWhereUniqueWithoutFAMILY_MEMBERInput[]
    createMany?: SIBLING_EDUCATIONCreateManyFAMILY_MEMBERInputEnvelope
    set?: SIBLING_EDUCATIONWhereUniqueInput | SIBLING_EDUCATIONWhereUniqueInput[]
    disconnect?: SIBLING_EDUCATIONWhereUniqueInput | SIBLING_EDUCATIONWhereUniqueInput[]
    delete?: SIBLING_EDUCATIONWhereUniqueInput | SIBLING_EDUCATIONWhereUniqueInput[]
    connect?: SIBLING_EDUCATIONWhereUniqueInput | SIBLING_EDUCATIONWhereUniqueInput[]
    update?: SIBLING_EDUCATIONUpdateWithWhereUniqueWithoutFAMILY_MEMBERInput | SIBLING_EDUCATIONUpdateWithWhereUniqueWithoutFAMILY_MEMBERInput[]
    updateMany?: SIBLING_EDUCATIONUpdateManyWithWhereWithoutFAMILY_MEMBERInput | SIBLING_EDUCATIONUpdateManyWithWhereWithoutFAMILY_MEMBERInput[]
    deleteMany?: SIBLING_EDUCATIONScalarWhereInput | SIBLING_EDUCATIONScalarWhereInput[]
  }

  export type USERCreateNestedOneWithoutNOTIFICATIONInput = {
    create?: XOR<USERCreateWithoutNOTIFICATIONInput, USERUncheckedCreateWithoutNOTIFICATIONInput>
    connectOrCreate?: USERCreateOrConnectWithoutNOTIFICATIONInput
    connect?: USERWhereUniqueInput
  }

  export type USERUpdateOneWithoutNOTIFICATIONNestedInput = {
    create?: XOR<USERCreateWithoutNOTIFICATIONInput, USERUncheckedCreateWithoutNOTIFICATIONInput>
    connectOrCreate?: USERCreateOrConnectWithoutNOTIFICATIONInput
    upsert?: USERUpsertWithoutNOTIFICATIONInput
    disconnect?: USERWhereInput | boolean
    delete?: USERWhereInput | boolean
    connect?: USERWhereUniqueInput
    update?: XOR<XOR<USERUpdateToOneWithWhereWithoutNOTIFICATIONInput, USERUpdateWithoutNOTIFICATIONInput>, USERUncheckedUpdateWithoutNOTIFICATIONInput>
  }

  export type STUDENTCreateNestedOneWithoutOTHER_FUNDINGInput = {
    create?: XOR<STUDENTCreateWithoutOTHER_FUNDINGInput, STUDENTUncheckedCreateWithoutOTHER_FUNDINGInput>
    connectOrCreate?: STUDENTCreateOrConnectWithoutOTHER_FUNDINGInput
    connect?: STUDENTWhereUniqueInput
  }

  export type STUDENTUpdateOneWithoutOTHER_FUNDINGNestedInput = {
    create?: XOR<STUDENTCreateWithoutOTHER_FUNDINGInput, STUDENTUncheckedCreateWithoutOTHER_FUNDINGInput>
    connectOrCreate?: STUDENTCreateOrConnectWithoutOTHER_FUNDINGInput
    upsert?: STUDENTUpsertWithoutOTHER_FUNDINGInput
    disconnect?: STUDENTWhereInput | boolean
    delete?: STUDENTWhereInput | boolean
    connect?: STUDENTWhereUniqueInput
    update?: XOR<XOR<STUDENTUpdateToOneWithWhereWithoutOTHER_FUNDINGInput, STUDENTUpdateWithoutOTHER_FUNDINGInput>, STUDENTUncheckedUpdateWithoutOTHER_FUNDINGInput>
  }

  export type APPLICATIONCreateNestedOneWithoutPAYMENTInput = {
    create?: XOR<APPLICATIONCreateWithoutPAYMENTInput, APPLICATIONUncheckedCreateWithoutPAYMENTInput>
    connectOrCreate?: APPLICATIONCreateOrConnectWithoutPAYMENTInput
    connect?: APPLICATIONWhereUniqueInput
  }

  export type NullableEnumPAYMENT_statusFieldUpdateOperationsInput = {
    set?: $Enums.PAYMENT_status | null
  }

  export type APPLICATIONUpdateOneWithoutPAYMENTNestedInput = {
    create?: XOR<APPLICATIONCreateWithoutPAYMENTInput, APPLICATIONUncheckedCreateWithoutPAYMENTInput>
    connectOrCreate?: APPLICATIONCreateOrConnectWithoutPAYMENTInput
    upsert?: APPLICATIONUpsertWithoutPAYMENTInput
    disconnect?: APPLICATIONWhereInput | boolean
    delete?: APPLICATIONWhereInput | boolean
    connect?: APPLICATIONWhereUniqueInput
    update?: XOR<XOR<APPLICATIONUpdateToOneWithWhereWithoutPAYMENTInput, APPLICATIONUpdateWithoutPAYMENTInput>, APPLICATIONUncheckedUpdateWithoutPAYMENTInput>
  }

  export type APPLICATIONCreateNestedManyWithoutSCHOLARSHIPInput = {
    create?: XOR<APPLICATIONCreateWithoutSCHOLARSHIPInput, APPLICATIONUncheckedCreateWithoutSCHOLARSHIPInput> | APPLICATIONCreateWithoutSCHOLARSHIPInput[] | APPLICATIONUncheckedCreateWithoutSCHOLARSHIPInput[]
    connectOrCreate?: APPLICATIONCreateOrConnectWithoutSCHOLARSHIPInput | APPLICATIONCreateOrConnectWithoutSCHOLARSHIPInput[]
    createMany?: APPLICATIONCreateManySCHOLARSHIPInputEnvelope
    connect?: APPLICATIONWhereUniqueInput | APPLICATIONWhereUniqueInput[]
  }

  export type ELIGIBILITY_CRITERIACreateNestedManyWithoutSCHOLARSHIPInput = {
    create?: XOR<ELIGIBILITY_CRITERIACreateWithoutSCHOLARSHIPInput, ELIGIBILITY_CRITERIAUncheckedCreateWithoutSCHOLARSHIPInput> | ELIGIBILITY_CRITERIACreateWithoutSCHOLARSHIPInput[] | ELIGIBILITY_CRITERIAUncheckedCreateWithoutSCHOLARSHIPInput[]
    connectOrCreate?: ELIGIBILITY_CRITERIACreateOrConnectWithoutSCHOLARSHIPInput | ELIGIBILITY_CRITERIACreateOrConnectWithoutSCHOLARSHIPInput[]
    createMany?: ELIGIBILITY_CRITERIACreateManySCHOLARSHIPInputEnvelope
    connect?: ELIGIBILITY_CRITERIAWhereUniqueInput | ELIGIBILITY_CRITERIAWhereUniqueInput[]
  }

  export type SCHOLARSHIP_PROVIDERCreateNestedOneWithoutSCHOLARSHIPInput = {
    create?: XOR<SCHOLARSHIP_PROVIDERCreateWithoutSCHOLARSHIPInput, SCHOLARSHIP_PROVIDERUncheckedCreateWithoutSCHOLARSHIPInput>
    connectOrCreate?: SCHOLARSHIP_PROVIDERCreateOrConnectWithoutSCHOLARSHIPInput
    connect?: SCHOLARSHIP_PROVIDERWhereUniqueInput
  }

  export type APPLICATIONUncheckedCreateNestedManyWithoutSCHOLARSHIPInput = {
    create?: XOR<APPLICATIONCreateWithoutSCHOLARSHIPInput, APPLICATIONUncheckedCreateWithoutSCHOLARSHIPInput> | APPLICATIONCreateWithoutSCHOLARSHIPInput[] | APPLICATIONUncheckedCreateWithoutSCHOLARSHIPInput[]
    connectOrCreate?: APPLICATIONCreateOrConnectWithoutSCHOLARSHIPInput | APPLICATIONCreateOrConnectWithoutSCHOLARSHIPInput[]
    createMany?: APPLICATIONCreateManySCHOLARSHIPInputEnvelope
    connect?: APPLICATIONWhereUniqueInput | APPLICATIONWhereUniqueInput[]
  }

  export type ELIGIBILITY_CRITERIAUncheckedCreateNestedManyWithoutSCHOLARSHIPInput = {
    create?: XOR<ELIGIBILITY_CRITERIACreateWithoutSCHOLARSHIPInput, ELIGIBILITY_CRITERIAUncheckedCreateWithoutSCHOLARSHIPInput> | ELIGIBILITY_CRITERIACreateWithoutSCHOLARSHIPInput[] | ELIGIBILITY_CRITERIAUncheckedCreateWithoutSCHOLARSHIPInput[]
    connectOrCreate?: ELIGIBILITY_CRITERIACreateOrConnectWithoutSCHOLARSHIPInput | ELIGIBILITY_CRITERIACreateOrConnectWithoutSCHOLARSHIPInput[]
    createMany?: ELIGIBILITY_CRITERIACreateManySCHOLARSHIPInputEnvelope
    connect?: ELIGIBILITY_CRITERIAWhereUniqueInput | ELIGIBILITY_CRITERIAWhereUniqueInput[]
  }

  export type APPLICATIONUpdateManyWithoutSCHOLARSHIPNestedInput = {
    create?: XOR<APPLICATIONCreateWithoutSCHOLARSHIPInput, APPLICATIONUncheckedCreateWithoutSCHOLARSHIPInput> | APPLICATIONCreateWithoutSCHOLARSHIPInput[] | APPLICATIONUncheckedCreateWithoutSCHOLARSHIPInput[]
    connectOrCreate?: APPLICATIONCreateOrConnectWithoutSCHOLARSHIPInput | APPLICATIONCreateOrConnectWithoutSCHOLARSHIPInput[]
    upsert?: APPLICATIONUpsertWithWhereUniqueWithoutSCHOLARSHIPInput | APPLICATIONUpsertWithWhereUniqueWithoutSCHOLARSHIPInput[]
    createMany?: APPLICATIONCreateManySCHOLARSHIPInputEnvelope
    set?: APPLICATIONWhereUniqueInput | APPLICATIONWhereUniqueInput[]
    disconnect?: APPLICATIONWhereUniqueInput | APPLICATIONWhereUniqueInput[]
    delete?: APPLICATIONWhereUniqueInput | APPLICATIONWhereUniqueInput[]
    connect?: APPLICATIONWhereUniqueInput | APPLICATIONWhereUniqueInput[]
    update?: APPLICATIONUpdateWithWhereUniqueWithoutSCHOLARSHIPInput | APPLICATIONUpdateWithWhereUniqueWithoutSCHOLARSHIPInput[]
    updateMany?: APPLICATIONUpdateManyWithWhereWithoutSCHOLARSHIPInput | APPLICATIONUpdateManyWithWhereWithoutSCHOLARSHIPInput[]
    deleteMany?: APPLICATIONScalarWhereInput | APPLICATIONScalarWhereInput[]
  }

  export type ELIGIBILITY_CRITERIAUpdateManyWithoutSCHOLARSHIPNestedInput = {
    create?: XOR<ELIGIBILITY_CRITERIACreateWithoutSCHOLARSHIPInput, ELIGIBILITY_CRITERIAUncheckedCreateWithoutSCHOLARSHIPInput> | ELIGIBILITY_CRITERIACreateWithoutSCHOLARSHIPInput[] | ELIGIBILITY_CRITERIAUncheckedCreateWithoutSCHOLARSHIPInput[]
    connectOrCreate?: ELIGIBILITY_CRITERIACreateOrConnectWithoutSCHOLARSHIPInput | ELIGIBILITY_CRITERIACreateOrConnectWithoutSCHOLARSHIPInput[]
    upsert?: ELIGIBILITY_CRITERIAUpsertWithWhereUniqueWithoutSCHOLARSHIPInput | ELIGIBILITY_CRITERIAUpsertWithWhereUniqueWithoutSCHOLARSHIPInput[]
    createMany?: ELIGIBILITY_CRITERIACreateManySCHOLARSHIPInputEnvelope
    set?: ELIGIBILITY_CRITERIAWhereUniqueInput | ELIGIBILITY_CRITERIAWhereUniqueInput[]
    disconnect?: ELIGIBILITY_CRITERIAWhereUniqueInput | ELIGIBILITY_CRITERIAWhereUniqueInput[]
    delete?: ELIGIBILITY_CRITERIAWhereUniqueInput | ELIGIBILITY_CRITERIAWhereUniqueInput[]
    connect?: ELIGIBILITY_CRITERIAWhereUniqueInput | ELIGIBILITY_CRITERIAWhereUniqueInput[]
    update?: ELIGIBILITY_CRITERIAUpdateWithWhereUniqueWithoutSCHOLARSHIPInput | ELIGIBILITY_CRITERIAUpdateWithWhereUniqueWithoutSCHOLARSHIPInput[]
    updateMany?: ELIGIBILITY_CRITERIAUpdateManyWithWhereWithoutSCHOLARSHIPInput | ELIGIBILITY_CRITERIAUpdateManyWithWhereWithoutSCHOLARSHIPInput[]
    deleteMany?: ELIGIBILITY_CRITERIAScalarWhereInput | ELIGIBILITY_CRITERIAScalarWhereInput[]
  }

  export type SCHOLARSHIP_PROVIDERUpdateOneWithoutSCHOLARSHIPNestedInput = {
    create?: XOR<SCHOLARSHIP_PROVIDERCreateWithoutSCHOLARSHIPInput, SCHOLARSHIP_PROVIDERUncheckedCreateWithoutSCHOLARSHIPInput>
    connectOrCreate?: SCHOLARSHIP_PROVIDERCreateOrConnectWithoutSCHOLARSHIPInput
    upsert?: SCHOLARSHIP_PROVIDERUpsertWithoutSCHOLARSHIPInput
    disconnect?: SCHOLARSHIP_PROVIDERWhereInput | boolean
    delete?: SCHOLARSHIP_PROVIDERWhereInput | boolean
    connect?: SCHOLARSHIP_PROVIDERWhereUniqueInput
    update?: XOR<XOR<SCHOLARSHIP_PROVIDERUpdateToOneWithWhereWithoutSCHOLARSHIPInput, SCHOLARSHIP_PROVIDERUpdateWithoutSCHOLARSHIPInput>, SCHOLARSHIP_PROVIDERUncheckedUpdateWithoutSCHOLARSHIPInput>
  }

  export type APPLICATIONUncheckedUpdateManyWithoutSCHOLARSHIPNestedInput = {
    create?: XOR<APPLICATIONCreateWithoutSCHOLARSHIPInput, APPLICATIONUncheckedCreateWithoutSCHOLARSHIPInput> | APPLICATIONCreateWithoutSCHOLARSHIPInput[] | APPLICATIONUncheckedCreateWithoutSCHOLARSHIPInput[]
    connectOrCreate?: APPLICATIONCreateOrConnectWithoutSCHOLARSHIPInput | APPLICATIONCreateOrConnectWithoutSCHOLARSHIPInput[]
    upsert?: APPLICATIONUpsertWithWhereUniqueWithoutSCHOLARSHIPInput | APPLICATIONUpsertWithWhereUniqueWithoutSCHOLARSHIPInput[]
    createMany?: APPLICATIONCreateManySCHOLARSHIPInputEnvelope
    set?: APPLICATIONWhereUniqueInput | APPLICATIONWhereUniqueInput[]
    disconnect?: APPLICATIONWhereUniqueInput | APPLICATIONWhereUniqueInput[]
    delete?: APPLICATIONWhereUniqueInput | APPLICATIONWhereUniqueInput[]
    connect?: APPLICATIONWhereUniqueInput | APPLICATIONWhereUniqueInput[]
    update?: APPLICATIONUpdateWithWhereUniqueWithoutSCHOLARSHIPInput | APPLICATIONUpdateWithWhereUniqueWithoutSCHOLARSHIPInput[]
    updateMany?: APPLICATIONUpdateManyWithWhereWithoutSCHOLARSHIPInput | APPLICATIONUpdateManyWithWhereWithoutSCHOLARSHIPInput[]
    deleteMany?: APPLICATIONScalarWhereInput | APPLICATIONScalarWhereInput[]
  }

  export type ELIGIBILITY_CRITERIAUncheckedUpdateManyWithoutSCHOLARSHIPNestedInput = {
    create?: XOR<ELIGIBILITY_CRITERIACreateWithoutSCHOLARSHIPInput, ELIGIBILITY_CRITERIAUncheckedCreateWithoutSCHOLARSHIPInput> | ELIGIBILITY_CRITERIACreateWithoutSCHOLARSHIPInput[] | ELIGIBILITY_CRITERIAUncheckedCreateWithoutSCHOLARSHIPInput[]
    connectOrCreate?: ELIGIBILITY_CRITERIACreateOrConnectWithoutSCHOLARSHIPInput | ELIGIBILITY_CRITERIACreateOrConnectWithoutSCHOLARSHIPInput[]
    upsert?: ELIGIBILITY_CRITERIAUpsertWithWhereUniqueWithoutSCHOLARSHIPInput | ELIGIBILITY_CRITERIAUpsertWithWhereUniqueWithoutSCHOLARSHIPInput[]
    createMany?: ELIGIBILITY_CRITERIACreateManySCHOLARSHIPInputEnvelope
    set?: ELIGIBILITY_CRITERIAWhereUniqueInput | ELIGIBILITY_CRITERIAWhereUniqueInput[]
    disconnect?: ELIGIBILITY_CRITERIAWhereUniqueInput | ELIGIBILITY_CRITERIAWhereUniqueInput[]
    delete?: ELIGIBILITY_CRITERIAWhereUniqueInput | ELIGIBILITY_CRITERIAWhereUniqueInput[]
    connect?: ELIGIBILITY_CRITERIAWhereUniqueInput | ELIGIBILITY_CRITERIAWhereUniqueInput[]
    update?: ELIGIBILITY_CRITERIAUpdateWithWhereUniqueWithoutSCHOLARSHIPInput | ELIGIBILITY_CRITERIAUpdateWithWhereUniqueWithoutSCHOLARSHIPInput[]
    updateMany?: ELIGIBILITY_CRITERIAUpdateManyWithWhereWithoutSCHOLARSHIPInput | ELIGIBILITY_CRITERIAUpdateManyWithWhereWithoutSCHOLARSHIPInput[]
    deleteMany?: ELIGIBILITY_CRITERIAScalarWhereInput | ELIGIBILITY_CRITERIAScalarWhereInput[]
  }

  export type SCHOLARSHIPCreateNestedManyWithoutSCHOLARSHIP_PROVIDERInput = {
    create?: XOR<SCHOLARSHIPCreateWithoutSCHOLARSHIP_PROVIDERInput, SCHOLARSHIPUncheckedCreateWithoutSCHOLARSHIP_PROVIDERInput> | SCHOLARSHIPCreateWithoutSCHOLARSHIP_PROVIDERInput[] | SCHOLARSHIPUncheckedCreateWithoutSCHOLARSHIP_PROVIDERInput[]
    connectOrCreate?: SCHOLARSHIPCreateOrConnectWithoutSCHOLARSHIP_PROVIDERInput | SCHOLARSHIPCreateOrConnectWithoutSCHOLARSHIP_PROVIDERInput[]
    createMany?: SCHOLARSHIPCreateManySCHOLARSHIP_PROVIDERInputEnvelope
    connect?: SCHOLARSHIPWhereUniqueInput | SCHOLARSHIPWhereUniqueInput[]
  }

  export type SCHOLARSHIPUncheckedCreateNestedManyWithoutSCHOLARSHIP_PROVIDERInput = {
    create?: XOR<SCHOLARSHIPCreateWithoutSCHOLARSHIP_PROVIDERInput, SCHOLARSHIPUncheckedCreateWithoutSCHOLARSHIP_PROVIDERInput> | SCHOLARSHIPCreateWithoutSCHOLARSHIP_PROVIDERInput[] | SCHOLARSHIPUncheckedCreateWithoutSCHOLARSHIP_PROVIDERInput[]
    connectOrCreate?: SCHOLARSHIPCreateOrConnectWithoutSCHOLARSHIP_PROVIDERInput | SCHOLARSHIPCreateOrConnectWithoutSCHOLARSHIP_PROVIDERInput[]
    createMany?: SCHOLARSHIPCreateManySCHOLARSHIP_PROVIDERInputEnvelope
    connect?: SCHOLARSHIPWhereUniqueInput | SCHOLARSHIPWhereUniqueInput[]
  }

  export type SCHOLARSHIPUpdateManyWithoutSCHOLARSHIP_PROVIDERNestedInput = {
    create?: XOR<SCHOLARSHIPCreateWithoutSCHOLARSHIP_PROVIDERInput, SCHOLARSHIPUncheckedCreateWithoutSCHOLARSHIP_PROVIDERInput> | SCHOLARSHIPCreateWithoutSCHOLARSHIP_PROVIDERInput[] | SCHOLARSHIPUncheckedCreateWithoutSCHOLARSHIP_PROVIDERInput[]
    connectOrCreate?: SCHOLARSHIPCreateOrConnectWithoutSCHOLARSHIP_PROVIDERInput | SCHOLARSHIPCreateOrConnectWithoutSCHOLARSHIP_PROVIDERInput[]
    upsert?: SCHOLARSHIPUpsertWithWhereUniqueWithoutSCHOLARSHIP_PROVIDERInput | SCHOLARSHIPUpsertWithWhereUniqueWithoutSCHOLARSHIP_PROVIDERInput[]
    createMany?: SCHOLARSHIPCreateManySCHOLARSHIP_PROVIDERInputEnvelope
    set?: SCHOLARSHIPWhereUniqueInput | SCHOLARSHIPWhereUniqueInput[]
    disconnect?: SCHOLARSHIPWhereUniqueInput | SCHOLARSHIPWhereUniqueInput[]
    delete?: SCHOLARSHIPWhereUniqueInput | SCHOLARSHIPWhereUniqueInput[]
    connect?: SCHOLARSHIPWhereUniqueInput | SCHOLARSHIPWhereUniqueInput[]
    update?: SCHOLARSHIPUpdateWithWhereUniqueWithoutSCHOLARSHIP_PROVIDERInput | SCHOLARSHIPUpdateWithWhereUniqueWithoutSCHOLARSHIP_PROVIDERInput[]
    updateMany?: SCHOLARSHIPUpdateManyWithWhereWithoutSCHOLARSHIP_PROVIDERInput | SCHOLARSHIPUpdateManyWithWhereWithoutSCHOLARSHIP_PROVIDERInput[]
    deleteMany?: SCHOLARSHIPScalarWhereInput | SCHOLARSHIPScalarWhereInput[]
  }

  export type SCHOLARSHIPUncheckedUpdateManyWithoutSCHOLARSHIP_PROVIDERNestedInput = {
    create?: XOR<SCHOLARSHIPCreateWithoutSCHOLARSHIP_PROVIDERInput, SCHOLARSHIPUncheckedCreateWithoutSCHOLARSHIP_PROVIDERInput> | SCHOLARSHIPCreateWithoutSCHOLARSHIP_PROVIDERInput[] | SCHOLARSHIPUncheckedCreateWithoutSCHOLARSHIP_PROVIDERInput[]
    connectOrCreate?: SCHOLARSHIPCreateOrConnectWithoutSCHOLARSHIP_PROVIDERInput | SCHOLARSHIPCreateOrConnectWithoutSCHOLARSHIP_PROVIDERInput[]
    upsert?: SCHOLARSHIPUpsertWithWhereUniqueWithoutSCHOLARSHIP_PROVIDERInput | SCHOLARSHIPUpsertWithWhereUniqueWithoutSCHOLARSHIP_PROVIDERInput[]
    createMany?: SCHOLARSHIPCreateManySCHOLARSHIP_PROVIDERInputEnvelope
    set?: SCHOLARSHIPWhereUniqueInput | SCHOLARSHIPWhereUniqueInput[]
    disconnect?: SCHOLARSHIPWhereUniqueInput | SCHOLARSHIPWhereUniqueInput[]
    delete?: SCHOLARSHIPWhereUniqueInput | SCHOLARSHIPWhereUniqueInput[]
    connect?: SCHOLARSHIPWhereUniqueInput | SCHOLARSHIPWhereUniqueInput[]
    update?: SCHOLARSHIPUpdateWithWhereUniqueWithoutSCHOLARSHIP_PROVIDERInput | SCHOLARSHIPUpdateWithWhereUniqueWithoutSCHOLARSHIP_PROVIDERInput[]
    updateMany?: SCHOLARSHIPUpdateManyWithWhereWithoutSCHOLARSHIP_PROVIDERInput | SCHOLARSHIPUpdateManyWithWhereWithoutSCHOLARSHIP_PROVIDERInput[]
    deleteMany?: SCHOLARSHIPScalarWhereInput | SCHOLARSHIPScalarWhereInput[]
  }

  export type STUDENTCreateNestedOneWithoutSIBLING_EDUCATIONInput = {
    create?: XOR<STUDENTCreateWithoutSIBLING_EDUCATIONInput, STUDENTUncheckedCreateWithoutSIBLING_EDUCATIONInput>
    connectOrCreate?: STUDENTCreateOrConnectWithoutSIBLING_EDUCATIONInput
    connect?: STUDENTWhereUniqueInput
  }

  export type FAMILY_MEMBERCreateNestedOneWithoutSIBLING_EDUCATIONInput = {
    create?: XOR<FAMILY_MEMBERCreateWithoutSIBLING_EDUCATIONInput, FAMILY_MEMBERUncheckedCreateWithoutSIBLING_EDUCATIONInput>
    connectOrCreate?: FAMILY_MEMBERCreateOrConnectWithoutSIBLING_EDUCATIONInput
    connect?: FAMILY_MEMBERWhereUniqueInput
  }

  export type STUDENTUpdateOneWithoutSIBLING_EDUCATIONNestedInput = {
    create?: XOR<STUDENTCreateWithoutSIBLING_EDUCATIONInput, STUDENTUncheckedCreateWithoutSIBLING_EDUCATIONInput>
    connectOrCreate?: STUDENTCreateOrConnectWithoutSIBLING_EDUCATIONInput
    upsert?: STUDENTUpsertWithoutSIBLING_EDUCATIONInput
    disconnect?: STUDENTWhereInput | boolean
    delete?: STUDENTWhereInput | boolean
    connect?: STUDENTWhereUniqueInput
    update?: XOR<XOR<STUDENTUpdateToOneWithWhereWithoutSIBLING_EDUCATIONInput, STUDENTUpdateWithoutSIBLING_EDUCATIONInput>, STUDENTUncheckedUpdateWithoutSIBLING_EDUCATIONInput>
  }

  export type FAMILY_MEMBERUpdateOneWithoutSIBLING_EDUCATIONNestedInput = {
    create?: XOR<FAMILY_MEMBERCreateWithoutSIBLING_EDUCATIONInput, FAMILY_MEMBERUncheckedCreateWithoutSIBLING_EDUCATIONInput>
    connectOrCreate?: FAMILY_MEMBERCreateOrConnectWithoutSIBLING_EDUCATIONInput
    upsert?: FAMILY_MEMBERUpsertWithoutSIBLING_EDUCATIONInput
    disconnect?: FAMILY_MEMBERWhereInput | boolean
    delete?: FAMILY_MEMBERWhereInput | boolean
    connect?: FAMILY_MEMBERWhereUniqueInput
    update?: XOR<XOR<FAMILY_MEMBERUpdateToOneWithWhereWithoutSIBLING_EDUCATIONInput, FAMILY_MEMBERUpdateWithoutSIBLING_EDUCATIONInput>, FAMILY_MEMBERUncheckedUpdateWithoutSIBLING_EDUCATIONInput>
  }

  export type APPLICATIONCreateNestedManyWithoutSTUDENTInput = {
    create?: XOR<APPLICATIONCreateWithoutSTUDENTInput, APPLICATIONUncheckedCreateWithoutSTUDENTInput> | APPLICATIONCreateWithoutSTUDENTInput[] | APPLICATIONUncheckedCreateWithoutSTUDENTInput[]
    connectOrCreate?: APPLICATIONCreateOrConnectWithoutSTUDENTInput | APPLICATIONCreateOrConnectWithoutSTUDENTInput[]
    createMany?: APPLICATIONCreateManySTUDENTInputEnvelope
    connect?: APPLICATIONWhereUniqueInput | APPLICATIONWhereUniqueInput[]
  }

  export type FAMILY_MEMBERCreateNestedManyWithoutSTUDENTInput = {
    create?: XOR<FAMILY_MEMBERCreateWithoutSTUDENTInput, FAMILY_MEMBERUncheckedCreateWithoutSTUDENTInput> | FAMILY_MEMBERCreateWithoutSTUDENTInput[] | FAMILY_MEMBERUncheckedCreateWithoutSTUDENTInput[]
    connectOrCreate?: FAMILY_MEMBERCreateOrConnectWithoutSTUDENTInput | FAMILY_MEMBERCreateOrConnectWithoutSTUDENTInput[]
    createMany?: FAMILY_MEMBERCreateManySTUDENTInputEnvelope
    connect?: FAMILY_MEMBERWhereUniqueInput | FAMILY_MEMBERWhereUniqueInput[]
  }

  export type OTHER_FUNDINGCreateNestedManyWithoutSTUDENTInput = {
    create?: XOR<OTHER_FUNDINGCreateWithoutSTUDENTInput, OTHER_FUNDINGUncheckedCreateWithoutSTUDENTInput> | OTHER_FUNDINGCreateWithoutSTUDENTInput[] | OTHER_FUNDINGUncheckedCreateWithoutSTUDENTInput[]
    connectOrCreate?: OTHER_FUNDINGCreateOrConnectWithoutSTUDENTInput | OTHER_FUNDINGCreateOrConnectWithoutSTUDENTInput[]
    createMany?: OTHER_FUNDINGCreateManySTUDENTInputEnvelope
    connect?: OTHER_FUNDINGWhereUniqueInput | OTHER_FUNDINGWhereUniqueInput[]
  }

  export type SIBLING_EDUCATIONCreateNestedManyWithoutSTUDENTInput = {
    create?: XOR<SIBLING_EDUCATIONCreateWithoutSTUDENTInput, SIBLING_EDUCATIONUncheckedCreateWithoutSTUDENTInput> | SIBLING_EDUCATIONCreateWithoutSTUDENTInput[] | SIBLING_EDUCATIONUncheckedCreateWithoutSTUDENTInput[]
    connectOrCreate?: SIBLING_EDUCATIONCreateOrConnectWithoutSTUDENTInput | SIBLING_EDUCATIONCreateOrConnectWithoutSTUDENTInput[]
    createMany?: SIBLING_EDUCATIONCreateManySTUDENTInputEnvelope
    connect?: SIBLING_EDUCATIONWhereUniqueInput | SIBLING_EDUCATIONWhereUniqueInput[]
  }

  export type USERCreateNestedOneWithoutSTUDENTInput = {
    create?: XOR<USERCreateWithoutSTUDENTInput, USERUncheckedCreateWithoutSTUDENTInput>
    connectOrCreate?: USERCreateOrConnectWithoutSTUDENTInput
    connect?: USERWhereUniqueInput
  }

  export type APPLICATIONUncheckedCreateNestedManyWithoutSTUDENTInput = {
    create?: XOR<APPLICATIONCreateWithoutSTUDENTInput, APPLICATIONUncheckedCreateWithoutSTUDENTInput> | APPLICATIONCreateWithoutSTUDENTInput[] | APPLICATIONUncheckedCreateWithoutSTUDENTInput[]
    connectOrCreate?: APPLICATIONCreateOrConnectWithoutSTUDENTInput | APPLICATIONCreateOrConnectWithoutSTUDENTInput[]
    createMany?: APPLICATIONCreateManySTUDENTInputEnvelope
    connect?: APPLICATIONWhereUniqueInput | APPLICATIONWhereUniqueInput[]
  }

  export type FAMILY_MEMBERUncheckedCreateNestedManyWithoutSTUDENTInput = {
    create?: XOR<FAMILY_MEMBERCreateWithoutSTUDENTInput, FAMILY_MEMBERUncheckedCreateWithoutSTUDENTInput> | FAMILY_MEMBERCreateWithoutSTUDENTInput[] | FAMILY_MEMBERUncheckedCreateWithoutSTUDENTInput[]
    connectOrCreate?: FAMILY_MEMBERCreateOrConnectWithoutSTUDENTInput | FAMILY_MEMBERCreateOrConnectWithoutSTUDENTInput[]
    createMany?: FAMILY_MEMBERCreateManySTUDENTInputEnvelope
    connect?: FAMILY_MEMBERWhereUniqueInput | FAMILY_MEMBERWhereUniqueInput[]
  }

  export type OTHER_FUNDINGUncheckedCreateNestedManyWithoutSTUDENTInput = {
    create?: XOR<OTHER_FUNDINGCreateWithoutSTUDENTInput, OTHER_FUNDINGUncheckedCreateWithoutSTUDENTInput> | OTHER_FUNDINGCreateWithoutSTUDENTInput[] | OTHER_FUNDINGUncheckedCreateWithoutSTUDENTInput[]
    connectOrCreate?: OTHER_FUNDINGCreateOrConnectWithoutSTUDENTInput | OTHER_FUNDINGCreateOrConnectWithoutSTUDENTInput[]
    createMany?: OTHER_FUNDINGCreateManySTUDENTInputEnvelope
    connect?: OTHER_FUNDINGWhereUniqueInput | OTHER_FUNDINGWhereUniqueInput[]
  }

  export type SIBLING_EDUCATIONUncheckedCreateNestedManyWithoutSTUDENTInput = {
    create?: XOR<SIBLING_EDUCATIONCreateWithoutSTUDENTInput, SIBLING_EDUCATIONUncheckedCreateWithoutSTUDENTInput> | SIBLING_EDUCATIONCreateWithoutSTUDENTInput[] | SIBLING_EDUCATIONUncheckedCreateWithoutSTUDENTInput[]
    connectOrCreate?: SIBLING_EDUCATIONCreateOrConnectWithoutSTUDENTInput | SIBLING_EDUCATIONCreateOrConnectWithoutSTUDENTInput[]
    createMany?: SIBLING_EDUCATIONCreateManySTUDENTInputEnvelope
    connect?: SIBLING_EDUCATIONWhereUniqueInput | SIBLING_EDUCATIONWhereUniqueInput[]
  }

  export type NullableEnumSTUDENT_genderFieldUpdateOperationsInput = {
    set?: $Enums.STUDENT_gender | null
  }

  export type APPLICATIONUpdateManyWithoutSTUDENTNestedInput = {
    create?: XOR<APPLICATIONCreateWithoutSTUDENTInput, APPLICATIONUncheckedCreateWithoutSTUDENTInput> | APPLICATIONCreateWithoutSTUDENTInput[] | APPLICATIONUncheckedCreateWithoutSTUDENTInput[]
    connectOrCreate?: APPLICATIONCreateOrConnectWithoutSTUDENTInput | APPLICATIONCreateOrConnectWithoutSTUDENTInput[]
    upsert?: APPLICATIONUpsertWithWhereUniqueWithoutSTUDENTInput | APPLICATIONUpsertWithWhereUniqueWithoutSTUDENTInput[]
    createMany?: APPLICATIONCreateManySTUDENTInputEnvelope
    set?: APPLICATIONWhereUniqueInput | APPLICATIONWhereUniqueInput[]
    disconnect?: APPLICATIONWhereUniqueInput | APPLICATIONWhereUniqueInput[]
    delete?: APPLICATIONWhereUniqueInput | APPLICATIONWhereUniqueInput[]
    connect?: APPLICATIONWhereUniqueInput | APPLICATIONWhereUniqueInput[]
    update?: APPLICATIONUpdateWithWhereUniqueWithoutSTUDENTInput | APPLICATIONUpdateWithWhereUniqueWithoutSTUDENTInput[]
    updateMany?: APPLICATIONUpdateManyWithWhereWithoutSTUDENTInput | APPLICATIONUpdateManyWithWhereWithoutSTUDENTInput[]
    deleteMany?: APPLICATIONScalarWhereInput | APPLICATIONScalarWhereInput[]
  }

  export type FAMILY_MEMBERUpdateManyWithoutSTUDENTNestedInput = {
    create?: XOR<FAMILY_MEMBERCreateWithoutSTUDENTInput, FAMILY_MEMBERUncheckedCreateWithoutSTUDENTInput> | FAMILY_MEMBERCreateWithoutSTUDENTInput[] | FAMILY_MEMBERUncheckedCreateWithoutSTUDENTInput[]
    connectOrCreate?: FAMILY_MEMBERCreateOrConnectWithoutSTUDENTInput | FAMILY_MEMBERCreateOrConnectWithoutSTUDENTInput[]
    upsert?: FAMILY_MEMBERUpsertWithWhereUniqueWithoutSTUDENTInput | FAMILY_MEMBERUpsertWithWhereUniqueWithoutSTUDENTInput[]
    createMany?: FAMILY_MEMBERCreateManySTUDENTInputEnvelope
    set?: FAMILY_MEMBERWhereUniqueInput | FAMILY_MEMBERWhereUniqueInput[]
    disconnect?: FAMILY_MEMBERWhereUniqueInput | FAMILY_MEMBERWhereUniqueInput[]
    delete?: FAMILY_MEMBERWhereUniqueInput | FAMILY_MEMBERWhereUniqueInput[]
    connect?: FAMILY_MEMBERWhereUniqueInput | FAMILY_MEMBERWhereUniqueInput[]
    update?: FAMILY_MEMBERUpdateWithWhereUniqueWithoutSTUDENTInput | FAMILY_MEMBERUpdateWithWhereUniqueWithoutSTUDENTInput[]
    updateMany?: FAMILY_MEMBERUpdateManyWithWhereWithoutSTUDENTInput | FAMILY_MEMBERUpdateManyWithWhereWithoutSTUDENTInput[]
    deleteMany?: FAMILY_MEMBERScalarWhereInput | FAMILY_MEMBERScalarWhereInput[]
  }

  export type OTHER_FUNDINGUpdateManyWithoutSTUDENTNestedInput = {
    create?: XOR<OTHER_FUNDINGCreateWithoutSTUDENTInput, OTHER_FUNDINGUncheckedCreateWithoutSTUDENTInput> | OTHER_FUNDINGCreateWithoutSTUDENTInput[] | OTHER_FUNDINGUncheckedCreateWithoutSTUDENTInput[]
    connectOrCreate?: OTHER_FUNDINGCreateOrConnectWithoutSTUDENTInput | OTHER_FUNDINGCreateOrConnectWithoutSTUDENTInput[]
    upsert?: OTHER_FUNDINGUpsertWithWhereUniqueWithoutSTUDENTInput | OTHER_FUNDINGUpsertWithWhereUniqueWithoutSTUDENTInput[]
    createMany?: OTHER_FUNDINGCreateManySTUDENTInputEnvelope
    set?: OTHER_FUNDINGWhereUniqueInput | OTHER_FUNDINGWhereUniqueInput[]
    disconnect?: OTHER_FUNDINGWhereUniqueInput | OTHER_FUNDINGWhereUniqueInput[]
    delete?: OTHER_FUNDINGWhereUniqueInput | OTHER_FUNDINGWhereUniqueInput[]
    connect?: OTHER_FUNDINGWhereUniqueInput | OTHER_FUNDINGWhereUniqueInput[]
    update?: OTHER_FUNDINGUpdateWithWhereUniqueWithoutSTUDENTInput | OTHER_FUNDINGUpdateWithWhereUniqueWithoutSTUDENTInput[]
    updateMany?: OTHER_FUNDINGUpdateManyWithWhereWithoutSTUDENTInput | OTHER_FUNDINGUpdateManyWithWhereWithoutSTUDENTInput[]
    deleteMany?: OTHER_FUNDINGScalarWhereInput | OTHER_FUNDINGScalarWhereInput[]
  }

  export type SIBLING_EDUCATIONUpdateManyWithoutSTUDENTNestedInput = {
    create?: XOR<SIBLING_EDUCATIONCreateWithoutSTUDENTInput, SIBLING_EDUCATIONUncheckedCreateWithoutSTUDENTInput> | SIBLING_EDUCATIONCreateWithoutSTUDENTInput[] | SIBLING_EDUCATIONUncheckedCreateWithoutSTUDENTInput[]
    connectOrCreate?: SIBLING_EDUCATIONCreateOrConnectWithoutSTUDENTInput | SIBLING_EDUCATIONCreateOrConnectWithoutSTUDENTInput[]
    upsert?: SIBLING_EDUCATIONUpsertWithWhereUniqueWithoutSTUDENTInput | SIBLING_EDUCATIONUpsertWithWhereUniqueWithoutSTUDENTInput[]
    createMany?: SIBLING_EDUCATIONCreateManySTUDENTInputEnvelope
    set?: SIBLING_EDUCATIONWhereUniqueInput | SIBLING_EDUCATIONWhereUniqueInput[]
    disconnect?: SIBLING_EDUCATIONWhereUniqueInput | SIBLING_EDUCATIONWhereUniqueInput[]
    delete?: SIBLING_EDUCATIONWhereUniqueInput | SIBLING_EDUCATIONWhereUniqueInput[]
    connect?: SIBLING_EDUCATIONWhereUniqueInput | SIBLING_EDUCATIONWhereUniqueInput[]
    update?: SIBLING_EDUCATIONUpdateWithWhereUniqueWithoutSTUDENTInput | SIBLING_EDUCATIONUpdateWithWhereUniqueWithoutSTUDENTInput[]
    updateMany?: SIBLING_EDUCATIONUpdateManyWithWhereWithoutSTUDENTInput | SIBLING_EDUCATIONUpdateManyWithWhereWithoutSTUDENTInput[]
    deleteMany?: SIBLING_EDUCATIONScalarWhereInput | SIBLING_EDUCATIONScalarWhereInput[]
  }

  export type USERUpdateOneWithoutSTUDENTNestedInput = {
    create?: XOR<USERCreateWithoutSTUDENTInput, USERUncheckedCreateWithoutSTUDENTInput>
    connectOrCreate?: USERCreateOrConnectWithoutSTUDENTInput
    upsert?: USERUpsertWithoutSTUDENTInput
    disconnect?: USERWhereInput | boolean
    delete?: USERWhereInput | boolean
    connect?: USERWhereUniqueInput
    update?: XOR<XOR<USERUpdateToOneWithWhereWithoutSTUDENTInput, USERUpdateWithoutSTUDENTInput>, USERUncheckedUpdateWithoutSTUDENTInput>
  }

  export type APPLICATIONUncheckedUpdateManyWithoutSTUDENTNestedInput = {
    create?: XOR<APPLICATIONCreateWithoutSTUDENTInput, APPLICATIONUncheckedCreateWithoutSTUDENTInput> | APPLICATIONCreateWithoutSTUDENTInput[] | APPLICATIONUncheckedCreateWithoutSTUDENTInput[]
    connectOrCreate?: APPLICATIONCreateOrConnectWithoutSTUDENTInput | APPLICATIONCreateOrConnectWithoutSTUDENTInput[]
    upsert?: APPLICATIONUpsertWithWhereUniqueWithoutSTUDENTInput | APPLICATIONUpsertWithWhereUniqueWithoutSTUDENTInput[]
    createMany?: APPLICATIONCreateManySTUDENTInputEnvelope
    set?: APPLICATIONWhereUniqueInput | APPLICATIONWhereUniqueInput[]
    disconnect?: APPLICATIONWhereUniqueInput | APPLICATIONWhereUniqueInput[]
    delete?: APPLICATIONWhereUniqueInput | APPLICATIONWhereUniqueInput[]
    connect?: APPLICATIONWhereUniqueInput | APPLICATIONWhereUniqueInput[]
    update?: APPLICATIONUpdateWithWhereUniqueWithoutSTUDENTInput | APPLICATIONUpdateWithWhereUniqueWithoutSTUDENTInput[]
    updateMany?: APPLICATIONUpdateManyWithWhereWithoutSTUDENTInput | APPLICATIONUpdateManyWithWhereWithoutSTUDENTInput[]
    deleteMany?: APPLICATIONScalarWhereInput | APPLICATIONScalarWhereInput[]
  }

  export type FAMILY_MEMBERUncheckedUpdateManyWithoutSTUDENTNestedInput = {
    create?: XOR<FAMILY_MEMBERCreateWithoutSTUDENTInput, FAMILY_MEMBERUncheckedCreateWithoutSTUDENTInput> | FAMILY_MEMBERCreateWithoutSTUDENTInput[] | FAMILY_MEMBERUncheckedCreateWithoutSTUDENTInput[]
    connectOrCreate?: FAMILY_MEMBERCreateOrConnectWithoutSTUDENTInput | FAMILY_MEMBERCreateOrConnectWithoutSTUDENTInput[]
    upsert?: FAMILY_MEMBERUpsertWithWhereUniqueWithoutSTUDENTInput | FAMILY_MEMBERUpsertWithWhereUniqueWithoutSTUDENTInput[]
    createMany?: FAMILY_MEMBERCreateManySTUDENTInputEnvelope
    set?: FAMILY_MEMBERWhereUniqueInput | FAMILY_MEMBERWhereUniqueInput[]
    disconnect?: FAMILY_MEMBERWhereUniqueInput | FAMILY_MEMBERWhereUniqueInput[]
    delete?: FAMILY_MEMBERWhereUniqueInput | FAMILY_MEMBERWhereUniqueInput[]
    connect?: FAMILY_MEMBERWhereUniqueInput | FAMILY_MEMBERWhereUniqueInput[]
    update?: FAMILY_MEMBERUpdateWithWhereUniqueWithoutSTUDENTInput | FAMILY_MEMBERUpdateWithWhereUniqueWithoutSTUDENTInput[]
    updateMany?: FAMILY_MEMBERUpdateManyWithWhereWithoutSTUDENTInput | FAMILY_MEMBERUpdateManyWithWhereWithoutSTUDENTInput[]
    deleteMany?: FAMILY_MEMBERScalarWhereInput | FAMILY_MEMBERScalarWhereInput[]
  }

  export type OTHER_FUNDINGUncheckedUpdateManyWithoutSTUDENTNestedInput = {
    create?: XOR<OTHER_FUNDINGCreateWithoutSTUDENTInput, OTHER_FUNDINGUncheckedCreateWithoutSTUDENTInput> | OTHER_FUNDINGCreateWithoutSTUDENTInput[] | OTHER_FUNDINGUncheckedCreateWithoutSTUDENTInput[]
    connectOrCreate?: OTHER_FUNDINGCreateOrConnectWithoutSTUDENTInput | OTHER_FUNDINGCreateOrConnectWithoutSTUDENTInput[]
    upsert?: OTHER_FUNDINGUpsertWithWhereUniqueWithoutSTUDENTInput | OTHER_FUNDINGUpsertWithWhereUniqueWithoutSTUDENTInput[]
    createMany?: OTHER_FUNDINGCreateManySTUDENTInputEnvelope
    set?: OTHER_FUNDINGWhereUniqueInput | OTHER_FUNDINGWhereUniqueInput[]
    disconnect?: OTHER_FUNDINGWhereUniqueInput | OTHER_FUNDINGWhereUniqueInput[]
    delete?: OTHER_FUNDINGWhereUniqueInput | OTHER_FUNDINGWhereUniqueInput[]
    connect?: OTHER_FUNDINGWhereUniqueInput | OTHER_FUNDINGWhereUniqueInput[]
    update?: OTHER_FUNDINGUpdateWithWhereUniqueWithoutSTUDENTInput | OTHER_FUNDINGUpdateWithWhereUniqueWithoutSTUDENTInput[]
    updateMany?: OTHER_FUNDINGUpdateManyWithWhereWithoutSTUDENTInput | OTHER_FUNDINGUpdateManyWithWhereWithoutSTUDENTInput[]
    deleteMany?: OTHER_FUNDINGScalarWhereInput | OTHER_FUNDINGScalarWhereInput[]
  }

  export type SIBLING_EDUCATIONUncheckedUpdateManyWithoutSTUDENTNestedInput = {
    create?: XOR<SIBLING_EDUCATIONCreateWithoutSTUDENTInput, SIBLING_EDUCATIONUncheckedCreateWithoutSTUDENTInput> | SIBLING_EDUCATIONCreateWithoutSTUDENTInput[] | SIBLING_EDUCATIONUncheckedCreateWithoutSTUDENTInput[]
    connectOrCreate?: SIBLING_EDUCATIONCreateOrConnectWithoutSTUDENTInput | SIBLING_EDUCATIONCreateOrConnectWithoutSTUDENTInput[]
    upsert?: SIBLING_EDUCATIONUpsertWithWhereUniqueWithoutSTUDENTInput | SIBLING_EDUCATIONUpsertWithWhereUniqueWithoutSTUDENTInput[]
    createMany?: SIBLING_EDUCATIONCreateManySTUDENTInputEnvelope
    set?: SIBLING_EDUCATIONWhereUniqueInput | SIBLING_EDUCATIONWhereUniqueInput[]
    disconnect?: SIBLING_EDUCATIONWhereUniqueInput | SIBLING_EDUCATIONWhereUniqueInput[]
    delete?: SIBLING_EDUCATIONWhereUniqueInput | SIBLING_EDUCATIONWhereUniqueInput[]
    connect?: SIBLING_EDUCATIONWhereUniqueInput | SIBLING_EDUCATIONWhereUniqueInput[]
    update?: SIBLING_EDUCATIONUpdateWithWhereUniqueWithoutSTUDENTInput | SIBLING_EDUCATIONUpdateWithWhereUniqueWithoutSTUDENTInput[]
    updateMany?: SIBLING_EDUCATIONUpdateManyWithWhereWithoutSTUDENTInput | SIBLING_EDUCATIONUpdateManyWithWhereWithoutSTUDENTInput[]
    deleteMany?: SIBLING_EDUCATIONScalarWhereInput | SIBLING_EDUCATIONScalarWhereInput[]
  }

  export type COMMITTEE_REVIEWCreateNestedManyWithoutUSERInput = {
    create?: XOR<COMMITTEE_REVIEWCreateWithoutUSERInput, COMMITTEE_REVIEWUncheckedCreateWithoutUSERInput> | COMMITTEE_REVIEWCreateWithoutUSERInput[] | COMMITTEE_REVIEWUncheckedCreateWithoutUSERInput[]
    connectOrCreate?: COMMITTEE_REVIEWCreateOrConnectWithoutUSERInput | COMMITTEE_REVIEWCreateOrConnectWithoutUSERInput[]
    createMany?: COMMITTEE_REVIEWCreateManyUSERInputEnvelope
    connect?: COMMITTEE_REVIEWWhereUniqueInput | COMMITTEE_REVIEWWhereUniqueInput[]
  }

  export type NOTIFICATIONCreateNestedManyWithoutUSERInput = {
    create?: XOR<NOTIFICATIONCreateWithoutUSERInput, NOTIFICATIONUncheckedCreateWithoutUSERInput> | NOTIFICATIONCreateWithoutUSERInput[] | NOTIFICATIONUncheckedCreateWithoutUSERInput[]
    connectOrCreate?: NOTIFICATIONCreateOrConnectWithoutUSERInput | NOTIFICATIONCreateOrConnectWithoutUSERInput[]
    createMany?: NOTIFICATIONCreateManyUSERInputEnvelope
    connect?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
  }

  export type STUDENTCreateNestedManyWithoutUSERInput = {
    create?: XOR<STUDENTCreateWithoutUSERInput, STUDENTUncheckedCreateWithoutUSERInput> | STUDENTCreateWithoutUSERInput[] | STUDENTUncheckedCreateWithoutUSERInput[]
    connectOrCreate?: STUDENTCreateOrConnectWithoutUSERInput | STUDENTCreateOrConnectWithoutUSERInput[]
    createMany?: STUDENTCreateManyUSERInputEnvelope
    connect?: STUDENTWhereUniqueInput | STUDENTWhereUniqueInput[]
  }

  export type COMMITTEE_REVIEWUncheckedCreateNestedManyWithoutUSERInput = {
    create?: XOR<COMMITTEE_REVIEWCreateWithoutUSERInput, COMMITTEE_REVIEWUncheckedCreateWithoutUSERInput> | COMMITTEE_REVIEWCreateWithoutUSERInput[] | COMMITTEE_REVIEWUncheckedCreateWithoutUSERInput[]
    connectOrCreate?: COMMITTEE_REVIEWCreateOrConnectWithoutUSERInput | COMMITTEE_REVIEWCreateOrConnectWithoutUSERInput[]
    createMany?: COMMITTEE_REVIEWCreateManyUSERInputEnvelope
    connect?: COMMITTEE_REVIEWWhereUniqueInput | COMMITTEE_REVIEWWhereUniqueInput[]
  }

  export type NOTIFICATIONUncheckedCreateNestedManyWithoutUSERInput = {
    create?: XOR<NOTIFICATIONCreateWithoutUSERInput, NOTIFICATIONUncheckedCreateWithoutUSERInput> | NOTIFICATIONCreateWithoutUSERInput[] | NOTIFICATIONUncheckedCreateWithoutUSERInput[]
    connectOrCreate?: NOTIFICATIONCreateOrConnectWithoutUSERInput | NOTIFICATIONCreateOrConnectWithoutUSERInput[]
    createMany?: NOTIFICATIONCreateManyUSERInputEnvelope
    connect?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
  }

  export type STUDENTUncheckedCreateNestedManyWithoutUSERInput = {
    create?: XOR<STUDENTCreateWithoutUSERInput, STUDENTUncheckedCreateWithoutUSERInput> | STUDENTCreateWithoutUSERInput[] | STUDENTUncheckedCreateWithoutUSERInput[]
    connectOrCreate?: STUDENTCreateOrConnectWithoutUSERInput | STUDENTCreateOrConnectWithoutUSERInput[]
    createMany?: STUDENTCreateManyUSERInputEnvelope
    connect?: STUDENTWhereUniqueInput | STUDENTWhereUniqueInput[]
  }

  export type EnumUSER_roleFieldUpdateOperationsInput = {
    set?: $Enums.USER_role
  }

  export type COMMITTEE_REVIEWUpdateManyWithoutUSERNestedInput = {
    create?: XOR<COMMITTEE_REVIEWCreateWithoutUSERInput, COMMITTEE_REVIEWUncheckedCreateWithoutUSERInput> | COMMITTEE_REVIEWCreateWithoutUSERInput[] | COMMITTEE_REVIEWUncheckedCreateWithoutUSERInput[]
    connectOrCreate?: COMMITTEE_REVIEWCreateOrConnectWithoutUSERInput | COMMITTEE_REVIEWCreateOrConnectWithoutUSERInput[]
    upsert?: COMMITTEE_REVIEWUpsertWithWhereUniqueWithoutUSERInput | COMMITTEE_REVIEWUpsertWithWhereUniqueWithoutUSERInput[]
    createMany?: COMMITTEE_REVIEWCreateManyUSERInputEnvelope
    set?: COMMITTEE_REVIEWWhereUniqueInput | COMMITTEE_REVIEWWhereUniqueInput[]
    disconnect?: COMMITTEE_REVIEWWhereUniqueInput | COMMITTEE_REVIEWWhereUniqueInput[]
    delete?: COMMITTEE_REVIEWWhereUniqueInput | COMMITTEE_REVIEWWhereUniqueInput[]
    connect?: COMMITTEE_REVIEWWhereUniqueInput | COMMITTEE_REVIEWWhereUniqueInput[]
    update?: COMMITTEE_REVIEWUpdateWithWhereUniqueWithoutUSERInput | COMMITTEE_REVIEWUpdateWithWhereUniqueWithoutUSERInput[]
    updateMany?: COMMITTEE_REVIEWUpdateManyWithWhereWithoutUSERInput | COMMITTEE_REVIEWUpdateManyWithWhereWithoutUSERInput[]
    deleteMany?: COMMITTEE_REVIEWScalarWhereInput | COMMITTEE_REVIEWScalarWhereInput[]
  }

  export type NOTIFICATIONUpdateManyWithoutUSERNestedInput = {
    create?: XOR<NOTIFICATIONCreateWithoutUSERInput, NOTIFICATIONUncheckedCreateWithoutUSERInput> | NOTIFICATIONCreateWithoutUSERInput[] | NOTIFICATIONUncheckedCreateWithoutUSERInput[]
    connectOrCreate?: NOTIFICATIONCreateOrConnectWithoutUSERInput | NOTIFICATIONCreateOrConnectWithoutUSERInput[]
    upsert?: NOTIFICATIONUpsertWithWhereUniqueWithoutUSERInput | NOTIFICATIONUpsertWithWhereUniqueWithoutUSERInput[]
    createMany?: NOTIFICATIONCreateManyUSERInputEnvelope
    set?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
    disconnect?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
    delete?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
    connect?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
    update?: NOTIFICATIONUpdateWithWhereUniqueWithoutUSERInput | NOTIFICATIONUpdateWithWhereUniqueWithoutUSERInput[]
    updateMany?: NOTIFICATIONUpdateManyWithWhereWithoutUSERInput | NOTIFICATIONUpdateManyWithWhereWithoutUSERInput[]
    deleteMany?: NOTIFICATIONScalarWhereInput | NOTIFICATIONScalarWhereInput[]
  }

  export type STUDENTUpdateManyWithoutUSERNestedInput = {
    create?: XOR<STUDENTCreateWithoutUSERInput, STUDENTUncheckedCreateWithoutUSERInput> | STUDENTCreateWithoutUSERInput[] | STUDENTUncheckedCreateWithoutUSERInput[]
    connectOrCreate?: STUDENTCreateOrConnectWithoutUSERInput | STUDENTCreateOrConnectWithoutUSERInput[]
    upsert?: STUDENTUpsertWithWhereUniqueWithoutUSERInput | STUDENTUpsertWithWhereUniqueWithoutUSERInput[]
    createMany?: STUDENTCreateManyUSERInputEnvelope
    set?: STUDENTWhereUniqueInput | STUDENTWhereUniqueInput[]
    disconnect?: STUDENTWhereUniqueInput | STUDENTWhereUniqueInput[]
    delete?: STUDENTWhereUniqueInput | STUDENTWhereUniqueInput[]
    connect?: STUDENTWhereUniqueInput | STUDENTWhereUniqueInput[]
    update?: STUDENTUpdateWithWhereUniqueWithoutUSERInput | STUDENTUpdateWithWhereUniqueWithoutUSERInput[]
    updateMany?: STUDENTUpdateManyWithWhereWithoutUSERInput | STUDENTUpdateManyWithWhereWithoutUSERInput[]
    deleteMany?: STUDENTScalarWhereInput | STUDENTScalarWhereInput[]
  }

  export type COMMITTEE_REVIEWUncheckedUpdateManyWithoutUSERNestedInput = {
    create?: XOR<COMMITTEE_REVIEWCreateWithoutUSERInput, COMMITTEE_REVIEWUncheckedCreateWithoutUSERInput> | COMMITTEE_REVIEWCreateWithoutUSERInput[] | COMMITTEE_REVIEWUncheckedCreateWithoutUSERInput[]
    connectOrCreate?: COMMITTEE_REVIEWCreateOrConnectWithoutUSERInput | COMMITTEE_REVIEWCreateOrConnectWithoutUSERInput[]
    upsert?: COMMITTEE_REVIEWUpsertWithWhereUniqueWithoutUSERInput | COMMITTEE_REVIEWUpsertWithWhereUniqueWithoutUSERInput[]
    createMany?: COMMITTEE_REVIEWCreateManyUSERInputEnvelope
    set?: COMMITTEE_REVIEWWhereUniqueInput | COMMITTEE_REVIEWWhereUniqueInput[]
    disconnect?: COMMITTEE_REVIEWWhereUniqueInput | COMMITTEE_REVIEWWhereUniqueInput[]
    delete?: COMMITTEE_REVIEWWhereUniqueInput | COMMITTEE_REVIEWWhereUniqueInput[]
    connect?: COMMITTEE_REVIEWWhereUniqueInput | COMMITTEE_REVIEWWhereUniqueInput[]
    update?: COMMITTEE_REVIEWUpdateWithWhereUniqueWithoutUSERInput | COMMITTEE_REVIEWUpdateWithWhereUniqueWithoutUSERInput[]
    updateMany?: COMMITTEE_REVIEWUpdateManyWithWhereWithoutUSERInput | COMMITTEE_REVIEWUpdateManyWithWhereWithoutUSERInput[]
    deleteMany?: COMMITTEE_REVIEWScalarWhereInput | COMMITTEE_REVIEWScalarWhereInput[]
  }

  export type NOTIFICATIONUncheckedUpdateManyWithoutUSERNestedInput = {
    create?: XOR<NOTIFICATIONCreateWithoutUSERInput, NOTIFICATIONUncheckedCreateWithoutUSERInput> | NOTIFICATIONCreateWithoutUSERInput[] | NOTIFICATIONUncheckedCreateWithoutUSERInput[]
    connectOrCreate?: NOTIFICATIONCreateOrConnectWithoutUSERInput | NOTIFICATIONCreateOrConnectWithoutUSERInput[]
    upsert?: NOTIFICATIONUpsertWithWhereUniqueWithoutUSERInput | NOTIFICATIONUpsertWithWhereUniqueWithoutUSERInput[]
    createMany?: NOTIFICATIONCreateManyUSERInputEnvelope
    set?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
    disconnect?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
    delete?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
    connect?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
    update?: NOTIFICATIONUpdateWithWhereUniqueWithoutUSERInput | NOTIFICATIONUpdateWithWhereUniqueWithoutUSERInput[]
    updateMany?: NOTIFICATIONUpdateManyWithWhereWithoutUSERInput | NOTIFICATIONUpdateManyWithWhereWithoutUSERInput[]
    deleteMany?: NOTIFICATIONScalarWhereInput | NOTIFICATIONScalarWhereInput[]
  }

  export type STUDENTUncheckedUpdateManyWithoutUSERNestedInput = {
    create?: XOR<STUDENTCreateWithoutUSERInput, STUDENTUncheckedCreateWithoutUSERInput> | STUDENTCreateWithoutUSERInput[] | STUDENTUncheckedCreateWithoutUSERInput[]
    connectOrCreate?: STUDENTCreateOrConnectWithoutUSERInput | STUDENTCreateOrConnectWithoutUSERInput[]
    upsert?: STUDENTUpsertWithWhereUniqueWithoutUSERInput | STUDENTUpsertWithWhereUniqueWithoutUSERInput[]
    createMany?: STUDENTCreateManyUSERInputEnvelope
    set?: STUDENTWhereUniqueInput | STUDENTWhereUniqueInput[]
    disconnect?: STUDENTWhereUniqueInput | STUDENTWhereUniqueInput[]
    delete?: STUDENTWhereUniqueInput | STUDENTWhereUniqueInput[]
    connect?: STUDENTWhereUniqueInput | STUDENTWhereUniqueInput[]
    update?: STUDENTUpdateWithWhereUniqueWithoutUSERInput | STUDENTUpdateWithWhereUniqueWithoutUSERInput[]
    updateMany?: STUDENTUpdateManyWithWhereWithoutUSERInput | STUDENTUpdateManyWithWhereWithoutUSERInput[]
    deleteMany?: STUDENTScalarWhereInput | STUDENTScalarWhereInput[]
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

  export type NestedEnumAPPLICATION_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.APPLICATION_status | EnumAPPLICATION_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.APPLICATION_status[] | null
    notIn?: $Enums.APPLICATION_status[] | null
    not?: NestedEnumAPPLICATION_statusNullableFilter<$PrismaModel> | $Enums.APPLICATION_status | null
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedEnumAPPLICATION_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.APPLICATION_status | EnumAPPLICATION_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.APPLICATION_status[] | null
    notIn?: $Enums.APPLICATION_status[] | null
    not?: NestedEnumAPPLICATION_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.APPLICATION_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAPPLICATION_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumAPPLICATION_statusNullableFilter<$PrismaModel>
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

  export type NestedEnumCOMMITTEE_REVIEW_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.COMMITTEE_REVIEW_status | EnumCOMMITTEE_REVIEW_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.COMMITTEE_REVIEW_status[] | null
    notIn?: $Enums.COMMITTEE_REVIEW_status[] | null
    not?: NestedEnumCOMMITTEE_REVIEW_statusNullableFilter<$PrismaModel> | $Enums.COMMITTEE_REVIEW_status | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedEnumCOMMITTEE_REVIEW_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.COMMITTEE_REVIEW_status | EnumCOMMITTEE_REVIEW_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.COMMITTEE_REVIEW_status[] | null
    notIn?: $Enums.COMMITTEE_REVIEW_status[] | null
    not?: NestedEnumCOMMITTEE_REVIEW_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.COMMITTEE_REVIEW_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCOMMITTEE_REVIEW_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumCOMMITTEE_REVIEW_statusNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumDOCUMENT_verification_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.DOCUMENT_verification_status | EnumDOCUMENT_verification_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.DOCUMENT_verification_status[] | null
    notIn?: $Enums.DOCUMENT_verification_status[] | null
    not?: NestedEnumDOCUMENT_verification_statusNullableFilter<$PrismaModel> | $Enums.DOCUMENT_verification_status | null
  }

  export type NestedEnumDOCUMENT_verification_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DOCUMENT_verification_status | EnumDOCUMENT_verification_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.DOCUMENT_verification_status[] | null
    notIn?: $Enums.DOCUMENT_verification_status[] | null
    not?: NestedEnumDOCUMENT_verification_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.DOCUMENT_verification_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumDOCUMENT_verification_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumDOCUMENT_verification_statusNullableFilter<$PrismaModel>
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

  export type NestedEnumPAYMENT_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PAYMENT_status | EnumPAYMENT_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.PAYMENT_status[] | null
    notIn?: $Enums.PAYMENT_status[] | null
    not?: NestedEnumPAYMENT_statusNullableFilter<$PrismaModel> | $Enums.PAYMENT_status | null
  }

  export type NestedEnumPAYMENT_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PAYMENT_status | EnumPAYMENT_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.PAYMENT_status[] | null
    notIn?: $Enums.PAYMENT_status[] | null
    not?: NestedEnumPAYMENT_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.PAYMENT_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPAYMENT_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumPAYMENT_statusNullableFilter<$PrismaModel>
  }

  export type NestedEnumSTUDENT_genderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.STUDENT_gender | EnumSTUDENT_genderFieldRefInput<$PrismaModel> | null
    in?: $Enums.STUDENT_gender[] | null
    notIn?: $Enums.STUDENT_gender[] | null
    not?: NestedEnumSTUDENT_genderNullableFilter<$PrismaModel> | $Enums.STUDENT_gender | null
  }

  export type NestedEnumSTUDENT_genderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.STUDENT_gender | EnumSTUDENT_genderFieldRefInput<$PrismaModel> | null
    in?: $Enums.STUDENT_gender[] | null
    notIn?: $Enums.STUDENT_gender[] | null
    not?: NestedEnumSTUDENT_genderNullableWithAggregatesFilter<$PrismaModel> | $Enums.STUDENT_gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSTUDENT_genderNullableFilter<$PrismaModel>
    _max?: NestedEnumSTUDENT_genderNullableFilter<$PrismaModel>
  }

  export type NestedEnumUSER_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.USER_role | EnumUSER_roleFieldRefInput<$PrismaModel>
    in?: $Enums.USER_role[]
    notIn?: $Enums.USER_role[]
    not?: NestedEnumUSER_roleFilter<$PrismaModel> | $Enums.USER_role
  }

  export type NestedEnumUSER_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.USER_role | EnumUSER_roleFieldRefInput<$PrismaModel>
    in?: $Enums.USER_role[]
    notIn?: $Enums.USER_role[]
    not?: NestedEnumUSER_roleWithAggregatesFilter<$PrismaModel> | $Enums.USER_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUSER_roleFilter<$PrismaModel>
    _max?: NestedEnumUSER_roleFilter<$PrismaModel>
  }

  export type STUDENTCreateWithoutAPPLICATIONInput = {
    full_name?: string | null
    registration_no?: string | null
    date_of_birth?: Date | string | null
    permanent_address?: string | null
    admission_date?: Date | string | null
    year_of_study?: number | null
    gender?: $Enums.STUDENT_gender | null
    phone_number?: string | null
    email?: string | null
    school_name?: string | null
    unmarried_siblings?: number | null
    FAMILY_MEMBER?: FAMILY_MEMBERCreateNestedManyWithoutSTUDENTInput
    OTHER_FUNDING?: OTHER_FUNDINGCreateNestedManyWithoutSTUDENTInput
    SIBLING_EDUCATION?: SIBLING_EDUCATIONCreateNestedManyWithoutSTUDENTInput
    USER?: USERCreateNestedOneWithoutSTUDENTInput
  }

  export type STUDENTUncheckedCreateWithoutAPPLICATIONInput = {
    student_id?: number
    user_id?: number | null
    full_name?: string | null
    registration_no?: string | null
    date_of_birth?: Date | string | null
    permanent_address?: string | null
    admission_date?: Date | string | null
    year_of_study?: number | null
    gender?: $Enums.STUDENT_gender | null
    phone_number?: string | null
    email?: string | null
    school_name?: string | null
    unmarried_siblings?: number | null
    FAMILY_MEMBER?: FAMILY_MEMBERUncheckedCreateNestedManyWithoutSTUDENTInput
    OTHER_FUNDING?: OTHER_FUNDINGUncheckedCreateNestedManyWithoutSTUDENTInput
    SIBLING_EDUCATION?: SIBLING_EDUCATIONUncheckedCreateNestedManyWithoutSTUDENTInput
  }

  export type STUDENTCreateOrConnectWithoutAPPLICATIONInput = {
    where: STUDENTWhereUniqueInput
    create: XOR<STUDENTCreateWithoutAPPLICATIONInput, STUDENTUncheckedCreateWithoutAPPLICATIONInput>
  }

  export type SCHOLARSHIPCreateWithoutAPPLICATIONInput = {
    name?: string | null
    description?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    no_of_students?: number | null
    application_deadline?: Date | string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    is_active?: boolean | null
    ELIGIBILITY_CRITERIA?: ELIGIBILITY_CRITERIACreateNestedManyWithoutSCHOLARSHIPInput
    SCHOLARSHIP_PROVIDER?: SCHOLARSHIP_PROVIDERCreateNestedOneWithoutSCHOLARSHIPInput
  }

  export type SCHOLARSHIPUncheckedCreateWithoutAPPLICATIONInput = {
    scholarship_id?: number
    name?: string | null
    description?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    no_of_students?: number | null
    application_deadline?: Date | string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    provider_id?: number | null
    is_active?: boolean | null
    ELIGIBILITY_CRITERIA?: ELIGIBILITY_CRITERIAUncheckedCreateNestedManyWithoutSCHOLARSHIPInput
  }

  export type SCHOLARSHIPCreateOrConnectWithoutAPPLICATIONInput = {
    where: SCHOLARSHIPWhereUniqueInput
    create: XOR<SCHOLARSHIPCreateWithoutAPPLICATIONInput, SCHOLARSHIPUncheckedCreateWithoutAPPLICATIONInput>
  }

  export type COMMITTEE_REVIEWCreateWithoutAPPLICATIONInput = {
    review_date?: Date | string | null
    points_awarded?: number | null
    comments?: string | null
    status?: $Enums.COMMITTEE_REVIEW_status | null
    is_read?: boolean | null
    USER?: USERCreateNestedOneWithoutCOMMITTEE_REVIEWInput
  }

  export type COMMITTEE_REVIEWUncheckedCreateWithoutAPPLICATIONInput = {
    review_id?: number
    reviewer_id?: number | null
    review_date?: Date | string | null
    points_awarded?: number | null
    comments?: string | null
    status?: $Enums.COMMITTEE_REVIEW_status | null
    is_read?: boolean | null
  }

  export type COMMITTEE_REVIEWCreateOrConnectWithoutAPPLICATIONInput = {
    where: COMMITTEE_REVIEWWhereUniqueInput
    create: XOR<COMMITTEE_REVIEWCreateWithoutAPPLICATIONInput, COMMITTEE_REVIEWUncheckedCreateWithoutAPPLICATIONInput>
  }

  export type COMMITTEE_REVIEWCreateManyAPPLICATIONInputEnvelope = {
    data: COMMITTEE_REVIEWCreateManyAPPLICATIONInput | COMMITTEE_REVIEWCreateManyAPPLICATIONInput[]
    skipDuplicates?: boolean
  }

  export type DOCUMENTCreateWithoutAPPLICATIONInput = {
    document_type?: string | null
    file_name?: string | null
    file_path?: string | null
    upload_date?: Date | string | null
    verification_status?: $Enums.DOCUMENT_verification_status | null
  }

  export type DOCUMENTUncheckedCreateWithoutAPPLICATIONInput = {
    document_id?: number
    document_type?: string | null
    file_name?: string | null
    file_path?: string | null
    upload_date?: Date | string | null
    verification_status?: $Enums.DOCUMENT_verification_status | null
  }

  export type DOCUMENTCreateOrConnectWithoutAPPLICATIONInput = {
    where: DOCUMENTWhereUniqueInput
    create: XOR<DOCUMENTCreateWithoutAPPLICATIONInput, DOCUMENTUncheckedCreateWithoutAPPLICATIONInput>
  }

  export type DOCUMENTCreateManyAPPLICATIONInputEnvelope = {
    data: DOCUMENTCreateManyAPPLICATIONInput | DOCUMENTCreateManyAPPLICATIONInput[]
    skipDuplicates?: boolean
  }

  export type PAYMENTCreateWithoutAPPLICATIONInput = {
    amount?: Decimal | DecimalJsLike | number | string | null
    payment_date?: Date | string | null
    payment_method?: string | null
    transaction_id?: string | null
    status?: $Enums.PAYMENT_status | null
  }

  export type PAYMENTUncheckedCreateWithoutAPPLICATIONInput = {
    payment_id?: number
    amount?: Decimal | DecimalJsLike | number | string | null
    payment_date?: Date | string | null
    payment_method?: string | null
    transaction_id?: string | null
    status?: $Enums.PAYMENT_status | null
  }

  export type PAYMENTCreateOrConnectWithoutAPPLICATIONInput = {
    where: PAYMENTWhereUniqueInput
    create: XOR<PAYMENTCreateWithoutAPPLICATIONInput, PAYMENTUncheckedCreateWithoutAPPLICATIONInput>
  }

  export type PAYMENTCreateManyAPPLICATIONInputEnvelope = {
    data: PAYMENTCreateManyAPPLICATIONInput | PAYMENTCreateManyAPPLICATIONInput[]
    skipDuplicates?: boolean
  }

  export type STUDENTUpsertWithoutAPPLICATIONInput = {
    update: XOR<STUDENTUpdateWithoutAPPLICATIONInput, STUDENTUncheckedUpdateWithoutAPPLICATIONInput>
    create: XOR<STUDENTCreateWithoutAPPLICATIONInput, STUDENTUncheckedCreateWithoutAPPLICATIONInput>
    where?: STUDENTWhereInput
  }

  export type STUDENTUpdateToOneWithWhereWithoutAPPLICATIONInput = {
    where?: STUDENTWhereInput
    data: XOR<STUDENTUpdateWithoutAPPLICATIONInput, STUDENTUncheckedUpdateWithoutAPPLICATIONInput>
  }

  export type STUDENTUpdateWithoutAPPLICATIONInput = {
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    registration_no?: NullableStringFieldUpdateOperationsInput | string | null
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permanent_address?: NullableStringFieldUpdateOperationsInput | string | null
    admission_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    year_of_study?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumSTUDENT_genderFieldUpdateOperationsInput | $Enums.STUDENT_gender | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    school_name?: NullableStringFieldUpdateOperationsInput | string | null
    unmarried_siblings?: NullableIntFieldUpdateOperationsInput | number | null
    FAMILY_MEMBER?: FAMILY_MEMBERUpdateManyWithoutSTUDENTNestedInput
    OTHER_FUNDING?: OTHER_FUNDINGUpdateManyWithoutSTUDENTNestedInput
    SIBLING_EDUCATION?: SIBLING_EDUCATIONUpdateManyWithoutSTUDENTNestedInput
    USER?: USERUpdateOneWithoutSTUDENTNestedInput
  }

  export type STUDENTUncheckedUpdateWithoutAPPLICATIONInput = {
    student_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    registration_no?: NullableStringFieldUpdateOperationsInput | string | null
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permanent_address?: NullableStringFieldUpdateOperationsInput | string | null
    admission_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    year_of_study?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumSTUDENT_genderFieldUpdateOperationsInput | $Enums.STUDENT_gender | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    school_name?: NullableStringFieldUpdateOperationsInput | string | null
    unmarried_siblings?: NullableIntFieldUpdateOperationsInput | number | null
    FAMILY_MEMBER?: FAMILY_MEMBERUncheckedUpdateManyWithoutSTUDENTNestedInput
    OTHER_FUNDING?: OTHER_FUNDINGUncheckedUpdateManyWithoutSTUDENTNestedInput
    SIBLING_EDUCATION?: SIBLING_EDUCATIONUncheckedUpdateManyWithoutSTUDENTNestedInput
  }

  export type SCHOLARSHIPUpsertWithoutAPPLICATIONInput = {
    update: XOR<SCHOLARSHIPUpdateWithoutAPPLICATIONInput, SCHOLARSHIPUncheckedUpdateWithoutAPPLICATIONInput>
    create: XOR<SCHOLARSHIPCreateWithoutAPPLICATIONInput, SCHOLARSHIPUncheckedCreateWithoutAPPLICATIONInput>
    where?: SCHOLARSHIPWhereInput
  }

  export type SCHOLARSHIPUpdateToOneWithWhereWithoutAPPLICATIONInput = {
    where?: SCHOLARSHIPWhereInput
    data: XOR<SCHOLARSHIPUpdateWithoutAPPLICATIONInput, SCHOLARSHIPUncheckedUpdateWithoutAPPLICATIONInput>
  }

  export type SCHOLARSHIPUpdateWithoutAPPLICATIONInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    no_of_students?: NullableIntFieldUpdateOperationsInput | number | null
    application_deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ELIGIBILITY_CRITERIA?: ELIGIBILITY_CRITERIAUpdateManyWithoutSCHOLARSHIPNestedInput
    SCHOLARSHIP_PROVIDER?: SCHOLARSHIP_PROVIDERUpdateOneWithoutSCHOLARSHIPNestedInput
  }

  export type SCHOLARSHIPUncheckedUpdateWithoutAPPLICATIONInput = {
    scholarship_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    no_of_students?: NullableIntFieldUpdateOperationsInput | number | null
    application_deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provider_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ELIGIBILITY_CRITERIA?: ELIGIBILITY_CRITERIAUncheckedUpdateManyWithoutSCHOLARSHIPNestedInput
  }

  export type COMMITTEE_REVIEWUpsertWithWhereUniqueWithoutAPPLICATIONInput = {
    where: COMMITTEE_REVIEWWhereUniqueInput
    update: XOR<COMMITTEE_REVIEWUpdateWithoutAPPLICATIONInput, COMMITTEE_REVIEWUncheckedUpdateWithoutAPPLICATIONInput>
    create: XOR<COMMITTEE_REVIEWCreateWithoutAPPLICATIONInput, COMMITTEE_REVIEWUncheckedCreateWithoutAPPLICATIONInput>
  }

  export type COMMITTEE_REVIEWUpdateWithWhereUniqueWithoutAPPLICATIONInput = {
    where: COMMITTEE_REVIEWWhereUniqueInput
    data: XOR<COMMITTEE_REVIEWUpdateWithoutAPPLICATIONInput, COMMITTEE_REVIEWUncheckedUpdateWithoutAPPLICATIONInput>
  }

  export type COMMITTEE_REVIEWUpdateManyWithWhereWithoutAPPLICATIONInput = {
    where: COMMITTEE_REVIEWScalarWhereInput
    data: XOR<COMMITTEE_REVIEWUpdateManyMutationInput, COMMITTEE_REVIEWUncheckedUpdateManyWithoutAPPLICATIONInput>
  }

  export type COMMITTEE_REVIEWScalarWhereInput = {
    AND?: COMMITTEE_REVIEWScalarWhereInput | COMMITTEE_REVIEWScalarWhereInput[]
    OR?: COMMITTEE_REVIEWScalarWhereInput[]
    NOT?: COMMITTEE_REVIEWScalarWhereInput | COMMITTEE_REVIEWScalarWhereInput[]
    review_id?: IntFilter<"COMMITTEE_REVIEW"> | number
    application_id?: IntNullableFilter<"COMMITTEE_REVIEW"> | number | null
    reviewer_id?: IntNullableFilter<"COMMITTEE_REVIEW"> | number | null
    review_date?: DateTimeNullableFilter<"COMMITTEE_REVIEW"> | Date | string | null
    points_awarded?: IntNullableFilter<"COMMITTEE_REVIEW"> | number | null
    comments?: StringNullableFilter<"COMMITTEE_REVIEW"> | string | null
    status?: EnumCOMMITTEE_REVIEW_statusNullableFilter<"COMMITTEE_REVIEW"> | $Enums.COMMITTEE_REVIEW_status | null
    is_read?: BoolNullableFilter<"COMMITTEE_REVIEW"> | boolean | null
  }

  export type DOCUMENTUpsertWithWhereUniqueWithoutAPPLICATIONInput = {
    where: DOCUMENTWhereUniqueInput
    update: XOR<DOCUMENTUpdateWithoutAPPLICATIONInput, DOCUMENTUncheckedUpdateWithoutAPPLICATIONInput>
    create: XOR<DOCUMENTCreateWithoutAPPLICATIONInput, DOCUMENTUncheckedCreateWithoutAPPLICATIONInput>
  }

  export type DOCUMENTUpdateWithWhereUniqueWithoutAPPLICATIONInput = {
    where: DOCUMENTWhereUniqueInput
    data: XOR<DOCUMENTUpdateWithoutAPPLICATIONInput, DOCUMENTUncheckedUpdateWithoutAPPLICATIONInput>
  }

  export type DOCUMENTUpdateManyWithWhereWithoutAPPLICATIONInput = {
    where: DOCUMENTScalarWhereInput
    data: XOR<DOCUMENTUpdateManyMutationInput, DOCUMENTUncheckedUpdateManyWithoutAPPLICATIONInput>
  }

  export type DOCUMENTScalarWhereInput = {
    AND?: DOCUMENTScalarWhereInput | DOCUMENTScalarWhereInput[]
    OR?: DOCUMENTScalarWhereInput[]
    NOT?: DOCUMENTScalarWhereInput | DOCUMENTScalarWhereInput[]
    document_id?: IntFilter<"DOCUMENT"> | number
    application_id?: IntNullableFilter<"DOCUMENT"> | number | null
    document_type?: StringNullableFilter<"DOCUMENT"> | string | null
    file_name?: StringNullableFilter<"DOCUMENT"> | string | null
    file_path?: StringNullableFilter<"DOCUMENT"> | string | null
    upload_date?: DateTimeNullableFilter<"DOCUMENT"> | Date | string | null
    verification_status?: EnumDOCUMENT_verification_statusNullableFilter<"DOCUMENT"> | $Enums.DOCUMENT_verification_status | null
  }

  export type PAYMENTUpsertWithWhereUniqueWithoutAPPLICATIONInput = {
    where: PAYMENTWhereUniqueInput
    update: XOR<PAYMENTUpdateWithoutAPPLICATIONInput, PAYMENTUncheckedUpdateWithoutAPPLICATIONInput>
    create: XOR<PAYMENTCreateWithoutAPPLICATIONInput, PAYMENTUncheckedCreateWithoutAPPLICATIONInput>
  }

  export type PAYMENTUpdateWithWhereUniqueWithoutAPPLICATIONInput = {
    where: PAYMENTWhereUniqueInput
    data: XOR<PAYMENTUpdateWithoutAPPLICATIONInput, PAYMENTUncheckedUpdateWithoutAPPLICATIONInput>
  }

  export type PAYMENTUpdateManyWithWhereWithoutAPPLICATIONInput = {
    where: PAYMENTScalarWhereInput
    data: XOR<PAYMENTUpdateManyMutationInput, PAYMENTUncheckedUpdateManyWithoutAPPLICATIONInput>
  }

  export type PAYMENTScalarWhereInput = {
    AND?: PAYMENTScalarWhereInput | PAYMENTScalarWhereInput[]
    OR?: PAYMENTScalarWhereInput[]
    NOT?: PAYMENTScalarWhereInput | PAYMENTScalarWhereInput[]
    payment_id?: IntFilter<"PAYMENT"> | number
    application_id?: IntNullableFilter<"PAYMENT"> | number | null
    amount?: DecimalNullableFilter<"PAYMENT"> | Decimal | DecimalJsLike | number | string | null
    payment_date?: DateTimeNullableFilter<"PAYMENT"> | Date | string | null
    payment_method?: StringNullableFilter<"PAYMENT"> | string | null
    transaction_id?: StringNullableFilter<"PAYMENT"> | string | null
    status?: EnumPAYMENT_statusNullableFilter<"PAYMENT"> | $Enums.PAYMENT_status | null
  }

  export type APPLICATIONCreateWithoutCOMMITTEE_REVIEWInput = {
    submission_date?: Date | string | null
    status?: $Enums.APPLICATION_status | null
    total_points?: number | null
    reviewer_comments?: string | null
    review_date?: Date | string | null
    STUDENT?: STUDENTCreateNestedOneWithoutAPPLICATIONInput
    SCHOLARSHIP?: SCHOLARSHIPCreateNestedOneWithoutAPPLICATIONInput
    DOCUMENT?: DOCUMENTCreateNestedManyWithoutAPPLICATIONInput
    PAYMENT?: PAYMENTCreateNestedManyWithoutAPPLICATIONInput
  }

  export type APPLICATIONUncheckedCreateWithoutCOMMITTEE_REVIEWInput = {
    application_id?: number
    student_id?: number | null
    scholarship_id?: number | null
    submission_date?: Date | string | null
    status?: $Enums.APPLICATION_status | null
    total_points?: number | null
    reviewer_comments?: string | null
    review_date?: Date | string | null
    DOCUMENT?: DOCUMENTUncheckedCreateNestedManyWithoutAPPLICATIONInput
    PAYMENT?: PAYMENTUncheckedCreateNestedManyWithoutAPPLICATIONInput
  }

  export type APPLICATIONCreateOrConnectWithoutCOMMITTEE_REVIEWInput = {
    where: APPLICATIONWhereUniqueInput
    create: XOR<APPLICATIONCreateWithoutCOMMITTEE_REVIEWInput, APPLICATIONUncheckedCreateWithoutCOMMITTEE_REVIEWInput>
  }

  export type USERCreateWithoutCOMMITTEE_REVIEWInput = {
    first_name?: string | null
    last_name?: string | null
    email?: string | null
    username?: string | null
    password?: string | null
    role?: $Enums.USER_role
    created_at?: Date | string | null
    NOTIFICATION?: NOTIFICATIONCreateNestedManyWithoutUSERInput
    STUDENT?: STUDENTCreateNestedManyWithoutUSERInput
  }

  export type USERUncheckedCreateWithoutCOMMITTEE_REVIEWInput = {
    user_id?: number
    first_name?: string | null
    last_name?: string | null
    email?: string | null
    username?: string | null
    password?: string | null
    role?: $Enums.USER_role
    created_at?: Date | string | null
    NOTIFICATION?: NOTIFICATIONUncheckedCreateNestedManyWithoutUSERInput
    STUDENT?: STUDENTUncheckedCreateNestedManyWithoutUSERInput
  }

  export type USERCreateOrConnectWithoutCOMMITTEE_REVIEWInput = {
    where: USERWhereUniqueInput
    create: XOR<USERCreateWithoutCOMMITTEE_REVIEWInput, USERUncheckedCreateWithoutCOMMITTEE_REVIEWInput>
  }

  export type APPLICATIONUpsertWithoutCOMMITTEE_REVIEWInput = {
    update: XOR<APPLICATIONUpdateWithoutCOMMITTEE_REVIEWInput, APPLICATIONUncheckedUpdateWithoutCOMMITTEE_REVIEWInput>
    create: XOR<APPLICATIONCreateWithoutCOMMITTEE_REVIEWInput, APPLICATIONUncheckedCreateWithoutCOMMITTEE_REVIEWInput>
    where?: APPLICATIONWhereInput
  }

  export type APPLICATIONUpdateToOneWithWhereWithoutCOMMITTEE_REVIEWInput = {
    where?: APPLICATIONWhereInput
    data: XOR<APPLICATIONUpdateWithoutCOMMITTEE_REVIEWInput, APPLICATIONUncheckedUpdateWithoutCOMMITTEE_REVIEWInput>
  }

  export type APPLICATIONUpdateWithoutCOMMITTEE_REVIEWInput = {
    submission_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumAPPLICATION_statusFieldUpdateOperationsInput | $Enums.APPLICATION_status | null
    total_points?: NullableIntFieldUpdateOperationsInput | number | null
    reviewer_comments?: NullableStringFieldUpdateOperationsInput | string | null
    review_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    STUDENT?: STUDENTUpdateOneWithoutAPPLICATIONNestedInput
    SCHOLARSHIP?: SCHOLARSHIPUpdateOneWithoutAPPLICATIONNestedInput
    DOCUMENT?: DOCUMENTUpdateManyWithoutAPPLICATIONNestedInput
    PAYMENT?: PAYMENTUpdateManyWithoutAPPLICATIONNestedInput
  }

  export type APPLICATIONUncheckedUpdateWithoutCOMMITTEE_REVIEWInput = {
    application_id?: IntFieldUpdateOperationsInput | number
    student_id?: NullableIntFieldUpdateOperationsInput | number | null
    scholarship_id?: NullableIntFieldUpdateOperationsInput | number | null
    submission_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumAPPLICATION_statusFieldUpdateOperationsInput | $Enums.APPLICATION_status | null
    total_points?: NullableIntFieldUpdateOperationsInput | number | null
    reviewer_comments?: NullableStringFieldUpdateOperationsInput | string | null
    review_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DOCUMENT?: DOCUMENTUncheckedUpdateManyWithoutAPPLICATIONNestedInput
    PAYMENT?: PAYMENTUncheckedUpdateManyWithoutAPPLICATIONNestedInput
  }

  export type USERUpsertWithoutCOMMITTEE_REVIEWInput = {
    update: XOR<USERUpdateWithoutCOMMITTEE_REVIEWInput, USERUncheckedUpdateWithoutCOMMITTEE_REVIEWInput>
    create: XOR<USERCreateWithoutCOMMITTEE_REVIEWInput, USERUncheckedCreateWithoutCOMMITTEE_REVIEWInput>
    where?: USERWhereInput
  }

  export type USERUpdateToOneWithWhereWithoutCOMMITTEE_REVIEWInput = {
    where?: USERWhereInput
    data: XOR<USERUpdateWithoutCOMMITTEE_REVIEWInput, USERUncheckedUpdateWithoutCOMMITTEE_REVIEWInput>
  }

  export type USERUpdateWithoutCOMMITTEE_REVIEWInput = {
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUSER_roleFieldUpdateOperationsInput | $Enums.USER_role
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    NOTIFICATION?: NOTIFICATIONUpdateManyWithoutUSERNestedInput
    STUDENT?: STUDENTUpdateManyWithoutUSERNestedInput
  }

  export type USERUncheckedUpdateWithoutCOMMITTEE_REVIEWInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUSER_roleFieldUpdateOperationsInput | $Enums.USER_role
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    NOTIFICATION?: NOTIFICATIONUncheckedUpdateManyWithoutUSERNestedInput
    STUDENT?: STUDENTUncheckedUpdateManyWithoutUSERNestedInput
  }

  export type APPLICATIONCreateWithoutDOCUMENTInput = {
    submission_date?: Date | string | null
    status?: $Enums.APPLICATION_status | null
    total_points?: number | null
    reviewer_comments?: string | null
    review_date?: Date | string | null
    STUDENT?: STUDENTCreateNestedOneWithoutAPPLICATIONInput
    SCHOLARSHIP?: SCHOLARSHIPCreateNestedOneWithoutAPPLICATIONInput
    COMMITTEE_REVIEW?: COMMITTEE_REVIEWCreateNestedManyWithoutAPPLICATIONInput
    PAYMENT?: PAYMENTCreateNestedManyWithoutAPPLICATIONInput
  }

  export type APPLICATIONUncheckedCreateWithoutDOCUMENTInput = {
    application_id?: number
    student_id?: number | null
    scholarship_id?: number | null
    submission_date?: Date | string | null
    status?: $Enums.APPLICATION_status | null
    total_points?: number | null
    reviewer_comments?: string | null
    review_date?: Date | string | null
    COMMITTEE_REVIEW?: COMMITTEE_REVIEWUncheckedCreateNestedManyWithoutAPPLICATIONInput
    PAYMENT?: PAYMENTUncheckedCreateNestedManyWithoutAPPLICATIONInput
  }

  export type APPLICATIONCreateOrConnectWithoutDOCUMENTInput = {
    where: APPLICATIONWhereUniqueInput
    create: XOR<APPLICATIONCreateWithoutDOCUMENTInput, APPLICATIONUncheckedCreateWithoutDOCUMENTInput>
  }

  export type APPLICATIONUpsertWithoutDOCUMENTInput = {
    update: XOR<APPLICATIONUpdateWithoutDOCUMENTInput, APPLICATIONUncheckedUpdateWithoutDOCUMENTInput>
    create: XOR<APPLICATIONCreateWithoutDOCUMENTInput, APPLICATIONUncheckedCreateWithoutDOCUMENTInput>
    where?: APPLICATIONWhereInput
  }

  export type APPLICATIONUpdateToOneWithWhereWithoutDOCUMENTInput = {
    where?: APPLICATIONWhereInput
    data: XOR<APPLICATIONUpdateWithoutDOCUMENTInput, APPLICATIONUncheckedUpdateWithoutDOCUMENTInput>
  }

  export type APPLICATIONUpdateWithoutDOCUMENTInput = {
    submission_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumAPPLICATION_statusFieldUpdateOperationsInput | $Enums.APPLICATION_status | null
    total_points?: NullableIntFieldUpdateOperationsInput | number | null
    reviewer_comments?: NullableStringFieldUpdateOperationsInput | string | null
    review_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    STUDENT?: STUDENTUpdateOneWithoutAPPLICATIONNestedInput
    SCHOLARSHIP?: SCHOLARSHIPUpdateOneWithoutAPPLICATIONNestedInput
    COMMITTEE_REVIEW?: COMMITTEE_REVIEWUpdateManyWithoutAPPLICATIONNestedInput
    PAYMENT?: PAYMENTUpdateManyWithoutAPPLICATIONNestedInput
  }

  export type APPLICATIONUncheckedUpdateWithoutDOCUMENTInput = {
    application_id?: IntFieldUpdateOperationsInput | number
    student_id?: NullableIntFieldUpdateOperationsInput | number | null
    scholarship_id?: NullableIntFieldUpdateOperationsInput | number | null
    submission_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumAPPLICATION_statusFieldUpdateOperationsInput | $Enums.APPLICATION_status | null
    total_points?: NullableIntFieldUpdateOperationsInput | number | null
    reviewer_comments?: NullableStringFieldUpdateOperationsInput | string | null
    review_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    COMMITTEE_REVIEW?: COMMITTEE_REVIEWUncheckedUpdateManyWithoutAPPLICATIONNestedInput
    PAYMENT?: PAYMENTUncheckedUpdateManyWithoutAPPLICATIONNestedInput
  }

  export type SCHOLARSHIPCreateWithoutELIGIBILITY_CRITERIAInput = {
    name?: string | null
    description?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    no_of_students?: number | null
    application_deadline?: Date | string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    is_active?: boolean | null
    APPLICATION?: APPLICATIONCreateNestedManyWithoutSCHOLARSHIPInput
    SCHOLARSHIP_PROVIDER?: SCHOLARSHIP_PROVIDERCreateNestedOneWithoutSCHOLARSHIPInput
  }

  export type SCHOLARSHIPUncheckedCreateWithoutELIGIBILITY_CRITERIAInput = {
    scholarship_id?: number
    name?: string | null
    description?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    no_of_students?: number | null
    application_deadline?: Date | string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    provider_id?: number | null
    is_active?: boolean | null
    APPLICATION?: APPLICATIONUncheckedCreateNestedManyWithoutSCHOLARSHIPInput
  }

  export type SCHOLARSHIPCreateOrConnectWithoutELIGIBILITY_CRITERIAInput = {
    where: SCHOLARSHIPWhereUniqueInput
    create: XOR<SCHOLARSHIPCreateWithoutELIGIBILITY_CRITERIAInput, SCHOLARSHIPUncheckedCreateWithoutELIGIBILITY_CRITERIAInput>
  }

  export type SCHOLARSHIPUpsertWithoutELIGIBILITY_CRITERIAInput = {
    update: XOR<SCHOLARSHIPUpdateWithoutELIGIBILITY_CRITERIAInput, SCHOLARSHIPUncheckedUpdateWithoutELIGIBILITY_CRITERIAInput>
    create: XOR<SCHOLARSHIPCreateWithoutELIGIBILITY_CRITERIAInput, SCHOLARSHIPUncheckedCreateWithoutELIGIBILITY_CRITERIAInput>
    where?: SCHOLARSHIPWhereInput
  }

  export type SCHOLARSHIPUpdateToOneWithWhereWithoutELIGIBILITY_CRITERIAInput = {
    where?: SCHOLARSHIPWhereInput
    data: XOR<SCHOLARSHIPUpdateWithoutELIGIBILITY_CRITERIAInput, SCHOLARSHIPUncheckedUpdateWithoutELIGIBILITY_CRITERIAInput>
  }

  export type SCHOLARSHIPUpdateWithoutELIGIBILITY_CRITERIAInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    no_of_students?: NullableIntFieldUpdateOperationsInput | number | null
    application_deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    APPLICATION?: APPLICATIONUpdateManyWithoutSCHOLARSHIPNestedInput
    SCHOLARSHIP_PROVIDER?: SCHOLARSHIP_PROVIDERUpdateOneWithoutSCHOLARSHIPNestedInput
  }

  export type SCHOLARSHIPUncheckedUpdateWithoutELIGIBILITY_CRITERIAInput = {
    scholarship_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    no_of_students?: NullableIntFieldUpdateOperationsInput | number | null
    application_deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provider_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    APPLICATION?: APPLICATIONUncheckedUpdateManyWithoutSCHOLARSHIPNestedInput
  }

  export type STUDENTCreateWithoutFAMILY_MEMBERInput = {
    full_name?: string | null
    registration_no?: string | null
    date_of_birth?: Date | string | null
    permanent_address?: string | null
    admission_date?: Date | string | null
    year_of_study?: number | null
    gender?: $Enums.STUDENT_gender | null
    phone_number?: string | null
    email?: string | null
    school_name?: string | null
    unmarried_siblings?: number | null
    APPLICATION?: APPLICATIONCreateNestedManyWithoutSTUDENTInput
    OTHER_FUNDING?: OTHER_FUNDINGCreateNestedManyWithoutSTUDENTInput
    SIBLING_EDUCATION?: SIBLING_EDUCATIONCreateNestedManyWithoutSTUDENTInput
    USER?: USERCreateNestedOneWithoutSTUDENTInput
  }

  export type STUDENTUncheckedCreateWithoutFAMILY_MEMBERInput = {
    student_id?: number
    user_id?: number | null
    full_name?: string | null
    registration_no?: string | null
    date_of_birth?: Date | string | null
    permanent_address?: string | null
    admission_date?: Date | string | null
    year_of_study?: number | null
    gender?: $Enums.STUDENT_gender | null
    phone_number?: string | null
    email?: string | null
    school_name?: string | null
    unmarried_siblings?: number | null
    APPLICATION?: APPLICATIONUncheckedCreateNestedManyWithoutSTUDENTInput
    OTHER_FUNDING?: OTHER_FUNDINGUncheckedCreateNestedManyWithoutSTUDENTInput
    SIBLING_EDUCATION?: SIBLING_EDUCATIONUncheckedCreateNestedManyWithoutSTUDENTInput
  }

  export type STUDENTCreateOrConnectWithoutFAMILY_MEMBERInput = {
    where: STUDENTWhereUniqueInput
    create: XOR<STUDENTCreateWithoutFAMILY_MEMBERInput, STUDENTUncheckedCreateWithoutFAMILY_MEMBERInput>
  }

  export type SIBLING_EDUCATIONCreateWithoutFAMILY_MEMBERInput = {
    institution?: string | null
    year_grade?: string | null
    registration_course?: string | null
    STUDENT?: STUDENTCreateNestedOneWithoutSIBLING_EDUCATIONInput
  }

  export type SIBLING_EDUCATIONUncheckedCreateWithoutFAMILY_MEMBERInput = {
    education_id?: number
    student_id?: number | null
    institution?: string | null
    year_grade?: string | null
    registration_course?: string | null
  }

  export type SIBLING_EDUCATIONCreateOrConnectWithoutFAMILY_MEMBERInput = {
    where: SIBLING_EDUCATIONWhereUniqueInput
    create: XOR<SIBLING_EDUCATIONCreateWithoutFAMILY_MEMBERInput, SIBLING_EDUCATIONUncheckedCreateWithoutFAMILY_MEMBERInput>
  }

  export type SIBLING_EDUCATIONCreateManyFAMILY_MEMBERInputEnvelope = {
    data: SIBLING_EDUCATIONCreateManyFAMILY_MEMBERInput | SIBLING_EDUCATIONCreateManyFAMILY_MEMBERInput[]
    skipDuplicates?: boolean
  }

  export type STUDENTUpsertWithoutFAMILY_MEMBERInput = {
    update: XOR<STUDENTUpdateWithoutFAMILY_MEMBERInput, STUDENTUncheckedUpdateWithoutFAMILY_MEMBERInput>
    create: XOR<STUDENTCreateWithoutFAMILY_MEMBERInput, STUDENTUncheckedCreateWithoutFAMILY_MEMBERInput>
    where?: STUDENTWhereInput
  }

  export type STUDENTUpdateToOneWithWhereWithoutFAMILY_MEMBERInput = {
    where?: STUDENTWhereInput
    data: XOR<STUDENTUpdateWithoutFAMILY_MEMBERInput, STUDENTUncheckedUpdateWithoutFAMILY_MEMBERInput>
  }

  export type STUDENTUpdateWithoutFAMILY_MEMBERInput = {
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    registration_no?: NullableStringFieldUpdateOperationsInput | string | null
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permanent_address?: NullableStringFieldUpdateOperationsInput | string | null
    admission_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    year_of_study?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumSTUDENT_genderFieldUpdateOperationsInput | $Enums.STUDENT_gender | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    school_name?: NullableStringFieldUpdateOperationsInput | string | null
    unmarried_siblings?: NullableIntFieldUpdateOperationsInput | number | null
    APPLICATION?: APPLICATIONUpdateManyWithoutSTUDENTNestedInput
    OTHER_FUNDING?: OTHER_FUNDINGUpdateManyWithoutSTUDENTNestedInput
    SIBLING_EDUCATION?: SIBLING_EDUCATIONUpdateManyWithoutSTUDENTNestedInput
    USER?: USERUpdateOneWithoutSTUDENTNestedInput
  }

  export type STUDENTUncheckedUpdateWithoutFAMILY_MEMBERInput = {
    student_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    registration_no?: NullableStringFieldUpdateOperationsInput | string | null
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permanent_address?: NullableStringFieldUpdateOperationsInput | string | null
    admission_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    year_of_study?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumSTUDENT_genderFieldUpdateOperationsInput | $Enums.STUDENT_gender | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    school_name?: NullableStringFieldUpdateOperationsInput | string | null
    unmarried_siblings?: NullableIntFieldUpdateOperationsInput | number | null
    APPLICATION?: APPLICATIONUncheckedUpdateManyWithoutSTUDENTNestedInput
    OTHER_FUNDING?: OTHER_FUNDINGUncheckedUpdateManyWithoutSTUDENTNestedInput
    SIBLING_EDUCATION?: SIBLING_EDUCATIONUncheckedUpdateManyWithoutSTUDENTNestedInput
  }

  export type SIBLING_EDUCATIONUpsertWithWhereUniqueWithoutFAMILY_MEMBERInput = {
    where: SIBLING_EDUCATIONWhereUniqueInput
    update: XOR<SIBLING_EDUCATIONUpdateWithoutFAMILY_MEMBERInput, SIBLING_EDUCATIONUncheckedUpdateWithoutFAMILY_MEMBERInput>
    create: XOR<SIBLING_EDUCATIONCreateWithoutFAMILY_MEMBERInput, SIBLING_EDUCATIONUncheckedCreateWithoutFAMILY_MEMBERInput>
  }

  export type SIBLING_EDUCATIONUpdateWithWhereUniqueWithoutFAMILY_MEMBERInput = {
    where: SIBLING_EDUCATIONWhereUniqueInput
    data: XOR<SIBLING_EDUCATIONUpdateWithoutFAMILY_MEMBERInput, SIBLING_EDUCATIONUncheckedUpdateWithoutFAMILY_MEMBERInput>
  }

  export type SIBLING_EDUCATIONUpdateManyWithWhereWithoutFAMILY_MEMBERInput = {
    where: SIBLING_EDUCATIONScalarWhereInput
    data: XOR<SIBLING_EDUCATIONUpdateManyMutationInput, SIBLING_EDUCATIONUncheckedUpdateManyWithoutFAMILY_MEMBERInput>
  }

  export type SIBLING_EDUCATIONScalarWhereInput = {
    AND?: SIBLING_EDUCATIONScalarWhereInput | SIBLING_EDUCATIONScalarWhereInput[]
    OR?: SIBLING_EDUCATIONScalarWhereInput[]
    NOT?: SIBLING_EDUCATIONScalarWhereInput | SIBLING_EDUCATIONScalarWhereInput[]
    education_id?: IntFilter<"SIBLING_EDUCATION"> | number
    student_id?: IntNullableFilter<"SIBLING_EDUCATION"> | number | null
    member_id?: IntNullableFilter<"SIBLING_EDUCATION"> | number | null
    institution?: StringNullableFilter<"SIBLING_EDUCATION"> | string | null
    year_grade?: StringNullableFilter<"SIBLING_EDUCATION"> | string | null
    registration_course?: StringNullableFilter<"SIBLING_EDUCATION"> | string | null
  }

  export type USERCreateWithoutNOTIFICATIONInput = {
    first_name?: string | null
    last_name?: string | null
    email?: string | null
    username?: string | null
    password?: string | null
    role?: $Enums.USER_role
    created_at?: Date | string | null
    COMMITTEE_REVIEW?: COMMITTEE_REVIEWCreateNestedManyWithoutUSERInput
    STUDENT?: STUDENTCreateNestedManyWithoutUSERInput
  }

  export type USERUncheckedCreateWithoutNOTIFICATIONInput = {
    user_id?: number
    first_name?: string | null
    last_name?: string | null
    email?: string | null
    username?: string | null
    password?: string | null
    role?: $Enums.USER_role
    created_at?: Date | string | null
    COMMITTEE_REVIEW?: COMMITTEE_REVIEWUncheckedCreateNestedManyWithoutUSERInput
    STUDENT?: STUDENTUncheckedCreateNestedManyWithoutUSERInput
  }

  export type USERCreateOrConnectWithoutNOTIFICATIONInput = {
    where: USERWhereUniqueInput
    create: XOR<USERCreateWithoutNOTIFICATIONInput, USERUncheckedCreateWithoutNOTIFICATIONInput>
  }

  export type USERUpsertWithoutNOTIFICATIONInput = {
    update: XOR<USERUpdateWithoutNOTIFICATIONInput, USERUncheckedUpdateWithoutNOTIFICATIONInput>
    create: XOR<USERCreateWithoutNOTIFICATIONInput, USERUncheckedCreateWithoutNOTIFICATIONInput>
    where?: USERWhereInput
  }

  export type USERUpdateToOneWithWhereWithoutNOTIFICATIONInput = {
    where?: USERWhereInput
    data: XOR<USERUpdateWithoutNOTIFICATIONInput, USERUncheckedUpdateWithoutNOTIFICATIONInput>
  }

  export type USERUpdateWithoutNOTIFICATIONInput = {
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUSER_roleFieldUpdateOperationsInput | $Enums.USER_role
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    COMMITTEE_REVIEW?: COMMITTEE_REVIEWUpdateManyWithoutUSERNestedInput
    STUDENT?: STUDENTUpdateManyWithoutUSERNestedInput
  }

  export type USERUncheckedUpdateWithoutNOTIFICATIONInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUSER_roleFieldUpdateOperationsInput | $Enums.USER_role
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    COMMITTEE_REVIEW?: COMMITTEE_REVIEWUncheckedUpdateManyWithoutUSERNestedInput
    STUDENT?: STUDENTUncheckedUpdateManyWithoutUSERNestedInput
  }

  export type STUDENTCreateWithoutOTHER_FUNDINGInput = {
    full_name?: string | null
    registration_no?: string | null
    date_of_birth?: Date | string | null
    permanent_address?: string | null
    admission_date?: Date | string | null
    year_of_study?: number | null
    gender?: $Enums.STUDENT_gender | null
    phone_number?: string | null
    email?: string | null
    school_name?: string | null
    unmarried_siblings?: number | null
    APPLICATION?: APPLICATIONCreateNestedManyWithoutSTUDENTInput
    FAMILY_MEMBER?: FAMILY_MEMBERCreateNestedManyWithoutSTUDENTInput
    SIBLING_EDUCATION?: SIBLING_EDUCATIONCreateNestedManyWithoutSTUDENTInput
    USER?: USERCreateNestedOneWithoutSTUDENTInput
  }

  export type STUDENTUncheckedCreateWithoutOTHER_FUNDINGInput = {
    student_id?: number
    user_id?: number | null
    full_name?: string | null
    registration_no?: string | null
    date_of_birth?: Date | string | null
    permanent_address?: string | null
    admission_date?: Date | string | null
    year_of_study?: number | null
    gender?: $Enums.STUDENT_gender | null
    phone_number?: string | null
    email?: string | null
    school_name?: string | null
    unmarried_siblings?: number | null
    APPLICATION?: APPLICATIONUncheckedCreateNestedManyWithoutSTUDENTInput
    FAMILY_MEMBER?: FAMILY_MEMBERUncheckedCreateNestedManyWithoutSTUDENTInput
    SIBLING_EDUCATION?: SIBLING_EDUCATIONUncheckedCreateNestedManyWithoutSTUDENTInput
  }

  export type STUDENTCreateOrConnectWithoutOTHER_FUNDINGInput = {
    where: STUDENTWhereUniqueInput
    create: XOR<STUDENTCreateWithoutOTHER_FUNDINGInput, STUDENTUncheckedCreateWithoutOTHER_FUNDINGInput>
  }

  export type STUDENTUpsertWithoutOTHER_FUNDINGInput = {
    update: XOR<STUDENTUpdateWithoutOTHER_FUNDINGInput, STUDENTUncheckedUpdateWithoutOTHER_FUNDINGInput>
    create: XOR<STUDENTCreateWithoutOTHER_FUNDINGInput, STUDENTUncheckedCreateWithoutOTHER_FUNDINGInput>
    where?: STUDENTWhereInput
  }

  export type STUDENTUpdateToOneWithWhereWithoutOTHER_FUNDINGInput = {
    where?: STUDENTWhereInput
    data: XOR<STUDENTUpdateWithoutOTHER_FUNDINGInput, STUDENTUncheckedUpdateWithoutOTHER_FUNDINGInput>
  }

  export type STUDENTUpdateWithoutOTHER_FUNDINGInput = {
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    registration_no?: NullableStringFieldUpdateOperationsInput | string | null
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permanent_address?: NullableStringFieldUpdateOperationsInput | string | null
    admission_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    year_of_study?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumSTUDENT_genderFieldUpdateOperationsInput | $Enums.STUDENT_gender | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    school_name?: NullableStringFieldUpdateOperationsInput | string | null
    unmarried_siblings?: NullableIntFieldUpdateOperationsInput | number | null
    APPLICATION?: APPLICATIONUpdateManyWithoutSTUDENTNestedInput
    FAMILY_MEMBER?: FAMILY_MEMBERUpdateManyWithoutSTUDENTNestedInput
    SIBLING_EDUCATION?: SIBLING_EDUCATIONUpdateManyWithoutSTUDENTNestedInput
    USER?: USERUpdateOneWithoutSTUDENTNestedInput
  }

  export type STUDENTUncheckedUpdateWithoutOTHER_FUNDINGInput = {
    student_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    registration_no?: NullableStringFieldUpdateOperationsInput | string | null
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permanent_address?: NullableStringFieldUpdateOperationsInput | string | null
    admission_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    year_of_study?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumSTUDENT_genderFieldUpdateOperationsInput | $Enums.STUDENT_gender | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    school_name?: NullableStringFieldUpdateOperationsInput | string | null
    unmarried_siblings?: NullableIntFieldUpdateOperationsInput | number | null
    APPLICATION?: APPLICATIONUncheckedUpdateManyWithoutSTUDENTNestedInput
    FAMILY_MEMBER?: FAMILY_MEMBERUncheckedUpdateManyWithoutSTUDENTNestedInput
    SIBLING_EDUCATION?: SIBLING_EDUCATIONUncheckedUpdateManyWithoutSTUDENTNestedInput
  }

  export type APPLICATIONCreateWithoutPAYMENTInput = {
    submission_date?: Date | string | null
    status?: $Enums.APPLICATION_status | null
    total_points?: number | null
    reviewer_comments?: string | null
    review_date?: Date | string | null
    STUDENT?: STUDENTCreateNestedOneWithoutAPPLICATIONInput
    SCHOLARSHIP?: SCHOLARSHIPCreateNestedOneWithoutAPPLICATIONInput
    COMMITTEE_REVIEW?: COMMITTEE_REVIEWCreateNestedManyWithoutAPPLICATIONInput
    DOCUMENT?: DOCUMENTCreateNestedManyWithoutAPPLICATIONInput
  }

  export type APPLICATIONUncheckedCreateWithoutPAYMENTInput = {
    application_id?: number
    student_id?: number | null
    scholarship_id?: number | null
    submission_date?: Date | string | null
    status?: $Enums.APPLICATION_status | null
    total_points?: number | null
    reviewer_comments?: string | null
    review_date?: Date | string | null
    COMMITTEE_REVIEW?: COMMITTEE_REVIEWUncheckedCreateNestedManyWithoutAPPLICATIONInput
    DOCUMENT?: DOCUMENTUncheckedCreateNestedManyWithoutAPPLICATIONInput
  }

  export type APPLICATIONCreateOrConnectWithoutPAYMENTInput = {
    where: APPLICATIONWhereUniqueInput
    create: XOR<APPLICATIONCreateWithoutPAYMENTInput, APPLICATIONUncheckedCreateWithoutPAYMENTInput>
  }

  export type APPLICATIONUpsertWithoutPAYMENTInput = {
    update: XOR<APPLICATIONUpdateWithoutPAYMENTInput, APPLICATIONUncheckedUpdateWithoutPAYMENTInput>
    create: XOR<APPLICATIONCreateWithoutPAYMENTInput, APPLICATIONUncheckedCreateWithoutPAYMENTInput>
    where?: APPLICATIONWhereInput
  }

  export type APPLICATIONUpdateToOneWithWhereWithoutPAYMENTInput = {
    where?: APPLICATIONWhereInput
    data: XOR<APPLICATIONUpdateWithoutPAYMENTInput, APPLICATIONUncheckedUpdateWithoutPAYMENTInput>
  }

  export type APPLICATIONUpdateWithoutPAYMENTInput = {
    submission_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumAPPLICATION_statusFieldUpdateOperationsInput | $Enums.APPLICATION_status | null
    total_points?: NullableIntFieldUpdateOperationsInput | number | null
    reviewer_comments?: NullableStringFieldUpdateOperationsInput | string | null
    review_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    STUDENT?: STUDENTUpdateOneWithoutAPPLICATIONNestedInput
    SCHOLARSHIP?: SCHOLARSHIPUpdateOneWithoutAPPLICATIONNestedInput
    COMMITTEE_REVIEW?: COMMITTEE_REVIEWUpdateManyWithoutAPPLICATIONNestedInput
    DOCUMENT?: DOCUMENTUpdateManyWithoutAPPLICATIONNestedInput
  }

  export type APPLICATIONUncheckedUpdateWithoutPAYMENTInput = {
    application_id?: IntFieldUpdateOperationsInput | number
    student_id?: NullableIntFieldUpdateOperationsInput | number | null
    scholarship_id?: NullableIntFieldUpdateOperationsInput | number | null
    submission_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumAPPLICATION_statusFieldUpdateOperationsInput | $Enums.APPLICATION_status | null
    total_points?: NullableIntFieldUpdateOperationsInput | number | null
    reviewer_comments?: NullableStringFieldUpdateOperationsInput | string | null
    review_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    COMMITTEE_REVIEW?: COMMITTEE_REVIEWUncheckedUpdateManyWithoutAPPLICATIONNestedInput
    DOCUMENT?: DOCUMENTUncheckedUpdateManyWithoutAPPLICATIONNestedInput
  }

  export type APPLICATIONCreateWithoutSCHOLARSHIPInput = {
    submission_date?: Date | string | null
    status?: $Enums.APPLICATION_status | null
    total_points?: number | null
    reviewer_comments?: string | null
    review_date?: Date | string | null
    STUDENT?: STUDENTCreateNestedOneWithoutAPPLICATIONInput
    COMMITTEE_REVIEW?: COMMITTEE_REVIEWCreateNestedManyWithoutAPPLICATIONInput
    DOCUMENT?: DOCUMENTCreateNestedManyWithoutAPPLICATIONInput
    PAYMENT?: PAYMENTCreateNestedManyWithoutAPPLICATIONInput
  }

  export type APPLICATIONUncheckedCreateWithoutSCHOLARSHIPInput = {
    application_id?: number
    student_id?: number | null
    submission_date?: Date | string | null
    status?: $Enums.APPLICATION_status | null
    total_points?: number | null
    reviewer_comments?: string | null
    review_date?: Date | string | null
    COMMITTEE_REVIEW?: COMMITTEE_REVIEWUncheckedCreateNestedManyWithoutAPPLICATIONInput
    DOCUMENT?: DOCUMENTUncheckedCreateNestedManyWithoutAPPLICATIONInput
    PAYMENT?: PAYMENTUncheckedCreateNestedManyWithoutAPPLICATIONInput
  }

  export type APPLICATIONCreateOrConnectWithoutSCHOLARSHIPInput = {
    where: APPLICATIONWhereUniqueInput
    create: XOR<APPLICATIONCreateWithoutSCHOLARSHIPInput, APPLICATIONUncheckedCreateWithoutSCHOLARSHIPInput>
  }

  export type APPLICATIONCreateManySCHOLARSHIPInputEnvelope = {
    data: APPLICATIONCreateManySCHOLARSHIPInput | APPLICATIONCreateManySCHOLARSHIPInput[]
    skipDuplicates?: boolean
  }

  export type ELIGIBILITY_CRITERIACreateWithoutSCHOLARSHIPInput = {
    criteria_name?: string | null
    criteria_description?: string | null
    min_value?: Decimal | DecimalJsLike | number | string | null
    max_value?: Decimal | DecimalJsLike | number | string | null
    weight?: number | null
  }

  export type ELIGIBILITY_CRITERIAUncheckedCreateWithoutSCHOLARSHIPInput = {
    criteria_id?: number
    criteria_name?: string | null
    criteria_description?: string | null
    min_value?: Decimal | DecimalJsLike | number | string | null
    max_value?: Decimal | DecimalJsLike | number | string | null
    weight?: number | null
  }

  export type ELIGIBILITY_CRITERIACreateOrConnectWithoutSCHOLARSHIPInput = {
    where: ELIGIBILITY_CRITERIAWhereUniqueInput
    create: XOR<ELIGIBILITY_CRITERIACreateWithoutSCHOLARSHIPInput, ELIGIBILITY_CRITERIAUncheckedCreateWithoutSCHOLARSHIPInput>
  }

  export type ELIGIBILITY_CRITERIACreateManySCHOLARSHIPInputEnvelope = {
    data: ELIGIBILITY_CRITERIACreateManySCHOLARSHIPInput | ELIGIBILITY_CRITERIACreateManySCHOLARSHIPInput[]
    skipDuplicates?: boolean
  }

  export type SCHOLARSHIP_PROVIDERCreateWithoutSCHOLARSHIPInput = {
    name?: string | null
    contact_person?: string | null
    phone?: string | null
    email?: string | null
    address?: string | null
  }

  export type SCHOLARSHIP_PROVIDERUncheckedCreateWithoutSCHOLARSHIPInput = {
    provider_id?: number
    name?: string | null
    contact_person?: string | null
    phone?: string | null
    email?: string | null
    address?: string | null
  }

  export type SCHOLARSHIP_PROVIDERCreateOrConnectWithoutSCHOLARSHIPInput = {
    where: SCHOLARSHIP_PROVIDERWhereUniqueInput
    create: XOR<SCHOLARSHIP_PROVIDERCreateWithoutSCHOLARSHIPInput, SCHOLARSHIP_PROVIDERUncheckedCreateWithoutSCHOLARSHIPInput>
  }

  export type APPLICATIONUpsertWithWhereUniqueWithoutSCHOLARSHIPInput = {
    where: APPLICATIONWhereUniqueInput
    update: XOR<APPLICATIONUpdateWithoutSCHOLARSHIPInput, APPLICATIONUncheckedUpdateWithoutSCHOLARSHIPInput>
    create: XOR<APPLICATIONCreateWithoutSCHOLARSHIPInput, APPLICATIONUncheckedCreateWithoutSCHOLARSHIPInput>
  }

  export type APPLICATIONUpdateWithWhereUniqueWithoutSCHOLARSHIPInput = {
    where: APPLICATIONWhereUniqueInput
    data: XOR<APPLICATIONUpdateWithoutSCHOLARSHIPInput, APPLICATIONUncheckedUpdateWithoutSCHOLARSHIPInput>
  }

  export type APPLICATIONUpdateManyWithWhereWithoutSCHOLARSHIPInput = {
    where: APPLICATIONScalarWhereInput
    data: XOR<APPLICATIONUpdateManyMutationInput, APPLICATIONUncheckedUpdateManyWithoutSCHOLARSHIPInput>
  }

  export type APPLICATIONScalarWhereInput = {
    AND?: APPLICATIONScalarWhereInput | APPLICATIONScalarWhereInput[]
    OR?: APPLICATIONScalarWhereInput[]
    NOT?: APPLICATIONScalarWhereInput | APPLICATIONScalarWhereInput[]
    application_id?: IntFilter<"APPLICATION"> | number
    student_id?: IntNullableFilter<"APPLICATION"> | number | null
    scholarship_id?: IntNullableFilter<"APPLICATION"> | number | null
    submission_date?: DateTimeNullableFilter<"APPLICATION"> | Date | string | null
    status?: EnumAPPLICATION_statusNullableFilter<"APPLICATION"> | $Enums.APPLICATION_status | null
    total_points?: IntNullableFilter<"APPLICATION"> | number | null
    reviewer_comments?: StringNullableFilter<"APPLICATION"> | string | null
    review_date?: DateTimeNullableFilter<"APPLICATION"> | Date | string | null
  }

  export type ELIGIBILITY_CRITERIAUpsertWithWhereUniqueWithoutSCHOLARSHIPInput = {
    where: ELIGIBILITY_CRITERIAWhereUniqueInput
    update: XOR<ELIGIBILITY_CRITERIAUpdateWithoutSCHOLARSHIPInput, ELIGIBILITY_CRITERIAUncheckedUpdateWithoutSCHOLARSHIPInput>
    create: XOR<ELIGIBILITY_CRITERIACreateWithoutSCHOLARSHIPInput, ELIGIBILITY_CRITERIAUncheckedCreateWithoutSCHOLARSHIPInput>
  }

  export type ELIGIBILITY_CRITERIAUpdateWithWhereUniqueWithoutSCHOLARSHIPInput = {
    where: ELIGIBILITY_CRITERIAWhereUniqueInput
    data: XOR<ELIGIBILITY_CRITERIAUpdateWithoutSCHOLARSHIPInput, ELIGIBILITY_CRITERIAUncheckedUpdateWithoutSCHOLARSHIPInput>
  }

  export type ELIGIBILITY_CRITERIAUpdateManyWithWhereWithoutSCHOLARSHIPInput = {
    where: ELIGIBILITY_CRITERIAScalarWhereInput
    data: XOR<ELIGIBILITY_CRITERIAUpdateManyMutationInput, ELIGIBILITY_CRITERIAUncheckedUpdateManyWithoutSCHOLARSHIPInput>
  }

  export type ELIGIBILITY_CRITERIAScalarWhereInput = {
    AND?: ELIGIBILITY_CRITERIAScalarWhereInput | ELIGIBILITY_CRITERIAScalarWhereInput[]
    OR?: ELIGIBILITY_CRITERIAScalarWhereInput[]
    NOT?: ELIGIBILITY_CRITERIAScalarWhereInput | ELIGIBILITY_CRITERIAScalarWhereInput[]
    criteria_id?: IntFilter<"ELIGIBILITY_CRITERIA"> | number
    scholarship_id?: IntNullableFilter<"ELIGIBILITY_CRITERIA"> | number | null
    criteria_name?: StringNullableFilter<"ELIGIBILITY_CRITERIA"> | string | null
    criteria_description?: StringNullableFilter<"ELIGIBILITY_CRITERIA"> | string | null
    min_value?: DecimalNullableFilter<"ELIGIBILITY_CRITERIA"> | Decimal | DecimalJsLike | number | string | null
    max_value?: DecimalNullableFilter<"ELIGIBILITY_CRITERIA"> | Decimal | DecimalJsLike | number | string | null
    weight?: IntNullableFilter<"ELIGIBILITY_CRITERIA"> | number | null
  }

  export type SCHOLARSHIP_PROVIDERUpsertWithoutSCHOLARSHIPInput = {
    update: XOR<SCHOLARSHIP_PROVIDERUpdateWithoutSCHOLARSHIPInput, SCHOLARSHIP_PROVIDERUncheckedUpdateWithoutSCHOLARSHIPInput>
    create: XOR<SCHOLARSHIP_PROVIDERCreateWithoutSCHOLARSHIPInput, SCHOLARSHIP_PROVIDERUncheckedCreateWithoutSCHOLARSHIPInput>
    where?: SCHOLARSHIP_PROVIDERWhereInput
  }

  export type SCHOLARSHIP_PROVIDERUpdateToOneWithWhereWithoutSCHOLARSHIPInput = {
    where?: SCHOLARSHIP_PROVIDERWhereInput
    data: XOR<SCHOLARSHIP_PROVIDERUpdateWithoutSCHOLARSHIPInput, SCHOLARSHIP_PROVIDERUncheckedUpdateWithoutSCHOLARSHIPInput>
  }

  export type SCHOLARSHIP_PROVIDERUpdateWithoutSCHOLARSHIPInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    contact_person?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SCHOLARSHIP_PROVIDERUncheckedUpdateWithoutSCHOLARSHIPInput = {
    provider_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    contact_person?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SCHOLARSHIPCreateWithoutSCHOLARSHIP_PROVIDERInput = {
    name?: string | null
    description?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    no_of_students?: number | null
    application_deadline?: Date | string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    is_active?: boolean | null
    APPLICATION?: APPLICATIONCreateNestedManyWithoutSCHOLARSHIPInput
    ELIGIBILITY_CRITERIA?: ELIGIBILITY_CRITERIACreateNestedManyWithoutSCHOLARSHIPInput
  }

  export type SCHOLARSHIPUncheckedCreateWithoutSCHOLARSHIP_PROVIDERInput = {
    scholarship_id?: number
    name?: string | null
    description?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    no_of_students?: number | null
    application_deadline?: Date | string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    is_active?: boolean | null
    APPLICATION?: APPLICATIONUncheckedCreateNestedManyWithoutSCHOLARSHIPInput
    ELIGIBILITY_CRITERIA?: ELIGIBILITY_CRITERIAUncheckedCreateNestedManyWithoutSCHOLARSHIPInput
  }

  export type SCHOLARSHIPCreateOrConnectWithoutSCHOLARSHIP_PROVIDERInput = {
    where: SCHOLARSHIPWhereUniqueInput
    create: XOR<SCHOLARSHIPCreateWithoutSCHOLARSHIP_PROVIDERInput, SCHOLARSHIPUncheckedCreateWithoutSCHOLARSHIP_PROVIDERInput>
  }

  export type SCHOLARSHIPCreateManySCHOLARSHIP_PROVIDERInputEnvelope = {
    data: SCHOLARSHIPCreateManySCHOLARSHIP_PROVIDERInput | SCHOLARSHIPCreateManySCHOLARSHIP_PROVIDERInput[]
    skipDuplicates?: boolean
  }

  export type SCHOLARSHIPUpsertWithWhereUniqueWithoutSCHOLARSHIP_PROVIDERInput = {
    where: SCHOLARSHIPWhereUniqueInput
    update: XOR<SCHOLARSHIPUpdateWithoutSCHOLARSHIP_PROVIDERInput, SCHOLARSHIPUncheckedUpdateWithoutSCHOLARSHIP_PROVIDERInput>
    create: XOR<SCHOLARSHIPCreateWithoutSCHOLARSHIP_PROVIDERInput, SCHOLARSHIPUncheckedCreateWithoutSCHOLARSHIP_PROVIDERInput>
  }

  export type SCHOLARSHIPUpdateWithWhereUniqueWithoutSCHOLARSHIP_PROVIDERInput = {
    where: SCHOLARSHIPWhereUniqueInput
    data: XOR<SCHOLARSHIPUpdateWithoutSCHOLARSHIP_PROVIDERInput, SCHOLARSHIPUncheckedUpdateWithoutSCHOLARSHIP_PROVIDERInput>
  }

  export type SCHOLARSHIPUpdateManyWithWhereWithoutSCHOLARSHIP_PROVIDERInput = {
    where: SCHOLARSHIPScalarWhereInput
    data: XOR<SCHOLARSHIPUpdateManyMutationInput, SCHOLARSHIPUncheckedUpdateManyWithoutSCHOLARSHIP_PROVIDERInput>
  }

  export type SCHOLARSHIPScalarWhereInput = {
    AND?: SCHOLARSHIPScalarWhereInput | SCHOLARSHIPScalarWhereInput[]
    OR?: SCHOLARSHIPScalarWhereInput[]
    NOT?: SCHOLARSHIPScalarWhereInput | SCHOLARSHIPScalarWhereInput[]
    scholarship_id?: IntFilter<"SCHOLARSHIP"> | number
    name?: StringNullableFilter<"SCHOLARSHIP"> | string | null
    description?: StringNullableFilter<"SCHOLARSHIP"> | string | null
    amount?: DecimalNullableFilter<"SCHOLARSHIP"> | Decimal | DecimalJsLike | number | string | null
    no_of_students?: IntNullableFilter<"SCHOLARSHIP"> | number | null
    application_deadline?: DateTimeNullableFilter<"SCHOLARSHIP"> | Date | string | null
    start_date?: DateTimeNullableFilter<"SCHOLARSHIP"> | Date | string | null
    end_date?: DateTimeNullableFilter<"SCHOLARSHIP"> | Date | string | null
    provider_id?: IntNullableFilter<"SCHOLARSHIP"> | number | null
    is_active?: BoolNullableFilter<"SCHOLARSHIP"> | boolean | null
  }

  export type STUDENTCreateWithoutSIBLING_EDUCATIONInput = {
    full_name?: string | null
    registration_no?: string | null
    date_of_birth?: Date | string | null
    permanent_address?: string | null
    admission_date?: Date | string | null
    year_of_study?: number | null
    gender?: $Enums.STUDENT_gender | null
    phone_number?: string | null
    email?: string | null
    school_name?: string | null
    unmarried_siblings?: number | null
    APPLICATION?: APPLICATIONCreateNestedManyWithoutSTUDENTInput
    FAMILY_MEMBER?: FAMILY_MEMBERCreateNestedManyWithoutSTUDENTInput
    OTHER_FUNDING?: OTHER_FUNDINGCreateNestedManyWithoutSTUDENTInput
    USER?: USERCreateNestedOneWithoutSTUDENTInput
  }

  export type STUDENTUncheckedCreateWithoutSIBLING_EDUCATIONInput = {
    student_id?: number
    user_id?: number | null
    full_name?: string | null
    registration_no?: string | null
    date_of_birth?: Date | string | null
    permanent_address?: string | null
    admission_date?: Date | string | null
    year_of_study?: number | null
    gender?: $Enums.STUDENT_gender | null
    phone_number?: string | null
    email?: string | null
    school_name?: string | null
    unmarried_siblings?: number | null
    APPLICATION?: APPLICATIONUncheckedCreateNestedManyWithoutSTUDENTInput
    FAMILY_MEMBER?: FAMILY_MEMBERUncheckedCreateNestedManyWithoutSTUDENTInput
    OTHER_FUNDING?: OTHER_FUNDINGUncheckedCreateNestedManyWithoutSTUDENTInput
  }

  export type STUDENTCreateOrConnectWithoutSIBLING_EDUCATIONInput = {
    where: STUDENTWhereUniqueInput
    create: XOR<STUDENTCreateWithoutSIBLING_EDUCATIONInput, STUDENTUncheckedCreateWithoutSIBLING_EDUCATIONInput>
  }

  export type FAMILY_MEMBERCreateWithoutSIBLING_EDUCATIONInput = {
    full_name?: string | null
    age?: number | null
    relationship?: string | null
    designation?: string | null
    annual_income?: Decimal | DecimalJsLike | number | string | null
    workplace?: string | null
    phone_number?: string | null
    STUDENT?: STUDENTCreateNestedOneWithoutFAMILY_MEMBERInput
  }

  export type FAMILY_MEMBERUncheckedCreateWithoutSIBLING_EDUCATIONInput = {
    member_id?: number
    student_id?: number | null
    full_name?: string | null
    age?: number | null
    relationship?: string | null
    designation?: string | null
    annual_income?: Decimal | DecimalJsLike | number | string | null
    workplace?: string | null
    phone_number?: string | null
  }

  export type FAMILY_MEMBERCreateOrConnectWithoutSIBLING_EDUCATIONInput = {
    where: FAMILY_MEMBERWhereUniqueInput
    create: XOR<FAMILY_MEMBERCreateWithoutSIBLING_EDUCATIONInput, FAMILY_MEMBERUncheckedCreateWithoutSIBLING_EDUCATIONInput>
  }

  export type STUDENTUpsertWithoutSIBLING_EDUCATIONInput = {
    update: XOR<STUDENTUpdateWithoutSIBLING_EDUCATIONInput, STUDENTUncheckedUpdateWithoutSIBLING_EDUCATIONInput>
    create: XOR<STUDENTCreateWithoutSIBLING_EDUCATIONInput, STUDENTUncheckedCreateWithoutSIBLING_EDUCATIONInput>
    where?: STUDENTWhereInput
  }

  export type STUDENTUpdateToOneWithWhereWithoutSIBLING_EDUCATIONInput = {
    where?: STUDENTWhereInput
    data: XOR<STUDENTUpdateWithoutSIBLING_EDUCATIONInput, STUDENTUncheckedUpdateWithoutSIBLING_EDUCATIONInput>
  }

  export type STUDENTUpdateWithoutSIBLING_EDUCATIONInput = {
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    registration_no?: NullableStringFieldUpdateOperationsInput | string | null
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permanent_address?: NullableStringFieldUpdateOperationsInput | string | null
    admission_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    year_of_study?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumSTUDENT_genderFieldUpdateOperationsInput | $Enums.STUDENT_gender | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    school_name?: NullableStringFieldUpdateOperationsInput | string | null
    unmarried_siblings?: NullableIntFieldUpdateOperationsInput | number | null
    APPLICATION?: APPLICATIONUpdateManyWithoutSTUDENTNestedInput
    FAMILY_MEMBER?: FAMILY_MEMBERUpdateManyWithoutSTUDENTNestedInput
    OTHER_FUNDING?: OTHER_FUNDINGUpdateManyWithoutSTUDENTNestedInput
    USER?: USERUpdateOneWithoutSTUDENTNestedInput
  }

  export type STUDENTUncheckedUpdateWithoutSIBLING_EDUCATIONInput = {
    student_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    registration_no?: NullableStringFieldUpdateOperationsInput | string | null
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permanent_address?: NullableStringFieldUpdateOperationsInput | string | null
    admission_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    year_of_study?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumSTUDENT_genderFieldUpdateOperationsInput | $Enums.STUDENT_gender | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    school_name?: NullableStringFieldUpdateOperationsInput | string | null
    unmarried_siblings?: NullableIntFieldUpdateOperationsInput | number | null
    APPLICATION?: APPLICATIONUncheckedUpdateManyWithoutSTUDENTNestedInput
    FAMILY_MEMBER?: FAMILY_MEMBERUncheckedUpdateManyWithoutSTUDENTNestedInput
    OTHER_FUNDING?: OTHER_FUNDINGUncheckedUpdateManyWithoutSTUDENTNestedInput
  }

  export type FAMILY_MEMBERUpsertWithoutSIBLING_EDUCATIONInput = {
    update: XOR<FAMILY_MEMBERUpdateWithoutSIBLING_EDUCATIONInput, FAMILY_MEMBERUncheckedUpdateWithoutSIBLING_EDUCATIONInput>
    create: XOR<FAMILY_MEMBERCreateWithoutSIBLING_EDUCATIONInput, FAMILY_MEMBERUncheckedCreateWithoutSIBLING_EDUCATIONInput>
    where?: FAMILY_MEMBERWhereInput
  }

  export type FAMILY_MEMBERUpdateToOneWithWhereWithoutSIBLING_EDUCATIONInput = {
    where?: FAMILY_MEMBERWhereInput
    data: XOR<FAMILY_MEMBERUpdateWithoutSIBLING_EDUCATIONInput, FAMILY_MEMBERUncheckedUpdateWithoutSIBLING_EDUCATIONInput>
  }

  export type FAMILY_MEMBERUpdateWithoutSIBLING_EDUCATIONInput = {
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    relationship?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    annual_income?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    workplace?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    STUDENT?: STUDENTUpdateOneWithoutFAMILY_MEMBERNestedInput
  }

  export type FAMILY_MEMBERUncheckedUpdateWithoutSIBLING_EDUCATIONInput = {
    member_id?: IntFieldUpdateOperationsInput | number
    student_id?: NullableIntFieldUpdateOperationsInput | number | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    relationship?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    annual_income?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    workplace?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type APPLICATIONCreateWithoutSTUDENTInput = {
    submission_date?: Date | string | null
    status?: $Enums.APPLICATION_status | null
    total_points?: number | null
    reviewer_comments?: string | null
    review_date?: Date | string | null
    SCHOLARSHIP?: SCHOLARSHIPCreateNestedOneWithoutAPPLICATIONInput
    COMMITTEE_REVIEW?: COMMITTEE_REVIEWCreateNestedManyWithoutAPPLICATIONInput
    DOCUMENT?: DOCUMENTCreateNestedManyWithoutAPPLICATIONInput
    PAYMENT?: PAYMENTCreateNestedManyWithoutAPPLICATIONInput
  }

  export type APPLICATIONUncheckedCreateWithoutSTUDENTInput = {
    application_id?: number
    scholarship_id?: number | null
    submission_date?: Date | string | null
    status?: $Enums.APPLICATION_status | null
    total_points?: number | null
    reviewer_comments?: string | null
    review_date?: Date | string | null
    COMMITTEE_REVIEW?: COMMITTEE_REVIEWUncheckedCreateNestedManyWithoutAPPLICATIONInput
    DOCUMENT?: DOCUMENTUncheckedCreateNestedManyWithoutAPPLICATIONInput
    PAYMENT?: PAYMENTUncheckedCreateNestedManyWithoutAPPLICATIONInput
  }

  export type APPLICATIONCreateOrConnectWithoutSTUDENTInput = {
    where: APPLICATIONWhereUniqueInput
    create: XOR<APPLICATIONCreateWithoutSTUDENTInput, APPLICATIONUncheckedCreateWithoutSTUDENTInput>
  }

  export type APPLICATIONCreateManySTUDENTInputEnvelope = {
    data: APPLICATIONCreateManySTUDENTInput | APPLICATIONCreateManySTUDENTInput[]
    skipDuplicates?: boolean
  }

  export type FAMILY_MEMBERCreateWithoutSTUDENTInput = {
    full_name?: string | null
    age?: number | null
    relationship?: string | null
    designation?: string | null
    annual_income?: Decimal | DecimalJsLike | number | string | null
    workplace?: string | null
    phone_number?: string | null
    SIBLING_EDUCATION?: SIBLING_EDUCATIONCreateNestedManyWithoutFAMILY_MEMBERInput
  }

  export type FAMILY_MEMBERUncheckedCreateWithoutSTUDENTInput = {
    member_id?: number
    full_name?: string | null
    age?: number | null
    relationship?: string | null
    designation?: string | null
    annual_income?: Decimal | DecimalJsLike | number | string | null
    workplace?: string | null
    phone_number?: string | null
    SIBLING_EDUCATION?: SIBLING_EDUCATIONUncheckedCreateNestedManyWithoutFAMILY_MEMBERInput
  }

  export type FAMILY_MEMBERCreateOrConnectWithoutSTUDENTInput = {
    where: FAMILY_MEMBERWhereUniqueInput
    create: XOR<FAMILY_MEMBERCreateWithoutSTUDENTInput, FAMILY_MEMBERUncheckedCreateWithoutSTUDENTInput>
  }

  export type FAMILY_MEMBERCreateManySTUDENTInputEnvelope = {
    data: FAMILY_MEMBERCreateManySTUDENTInput | FAMILY_MEMBERCreateManySTUDENTInput[]
    skipDuplicates?: boolean
  }

  export type OTHER_FUNDINGCreateWithoutSTUDENTInput = {
    funding_name?: string | null
    organization?: string | null
    annual_amount?: Decimal | DecimalJsLike | number | string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
  }

  export type OTHER_FUNDINGUncheckedCreateWithoutSTUDENTInput = {
    funding_id?: number
    funding_name?: string | null
    organization?: string | null
    annual_amount?: Decimal | DecimalJsLike | number | string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
  }

  export type OTHER_FUNDINGCreateOrConnectWithoutSTUDENTInput = {
    where: OTHER_FUNDINGWhereUniqueInput
    create: XOR<OTHER_FUNDINGCreateWithoutSTUDENTInput, OTHER_FUNDINGUncheckedCreateWithoutSTUDENTInput>
  }

  export type OTHER_FUNDINGCreateManySTUDENTInputEnvelope = {
    data: OTHER_FUNDINGCreateManySTUDENTInput | OTHER_FUNDINGCreateManySTUDENTInput[]
    skipDuplicates?: boolean
  }

  export type SIBLING_EDUCATIONCreateWithoutSTUDENTInput = {
    institution?: string | null
    year_grade?: string | null
    registration_course?: string | null
    FAMILY_MEMBER?: FAMILY_MEMBERCreateNestedOneWithoutSIBLING_EDUCATIONInput
  }

  export type SIBLING_EDUCATIONUncheckedCreateWithoutSTUDENTInput = {
    education_id?: number
    member_id?: number | null
    institution?: string | null
    year_grade?: string | null
    registration_course?: string | null
  }

  export type SIBLING_EDUCATIONCreateOrConnectWithoutSTUDENTInput = {
    where: SIBLING_EDUCATIONWhereUniqueInput
    create: XOR<SIBLING_EDUCATIONCreateWithoutSTUDENTInput, SIBLING_EDUCATIONUncheckedCreateWithoutSTUDENTInput>
  }

  export type SIBLING_EDUCATIONCreateManySTUDENTInputEnvelope = {
    data: SIBLING_EDUCATIONCreateManySTUDENTInput | SIBLING_EDUCATIONCreateManySTUDENTInput[]
    skipDuplicates?: boolean
  }

  export type USERCreateWithoutSTUDENTInput = {
    first_name?: string | null
    last_name?: string | null
    email?: string | null
    username?: string | null
    password?: string | null
    role?: $Enums.USER_role
    created_at?: Date | string | null
    COMMITTEE_REVIEW?: COMMITTEE_REVIEWCreateNestedManyWithoutUSERInput
    NOTIFICATION?: NOTIFICATIONCreateNestedManyWithoutUSERInput
  }

  export type USERUncheckedCreateWithoutSTUDENTInput = {
    user_id?: number
    first_name?: string | null
    last_name?: string | null
    email?: string | null
    username?: string | null
    password?: string | null
    role?: $Enums.USER_role
    created_at?: Date | string | null
    COMMITTEE_REVIEW?: COMMITTEE_REVIEWUncheckedCreateNestedManyWithoutUSERInput
    NOTIFICATION?: NOTIFICATIONUncheckedCreateNestedManyWithoutUSERInput
  }

  export type USERCreateOrConnectWithoutSTUDENTInput = {
    where: USERWhereUniqueInput
    create: XOR<USERCreateWithoutSTUDENTInput, USERUncheckedCreateWithoutSTUDENTInput>
  }

  export type APPLICATIONUpsertWithWhereUniqueWithoutSTUDENTInput = {
    where: APPLICATIONWhereUniqueInput
    update: XOR<APPLICATIONUpdateWithoutSTUDENTInput, APPLICATIONUncheckedUpdateWithoutSTUDENTInput>
    create: XOR<APPLICATIONCreateWithoutSTUDENTInput, APPLICATIONUncheckedCreateWithoutSTUDENTInput>
  }

  export type APPLICATIONUpdateWithWhereUniqueWithoutSTUDENTInput = {
    where: APPLICATIONWhereUniqueInput
    data: XOR<APPLICATIONUpdateWithoutSTUDENTInput, APPLICATIONUncheckedUpdateWithoutSTUDENTInput>
  }

  export type APPLICATIONUpdateManyWithWhereWithoutSTUDENTInput = {
    where: APPLICATIONScalarWhereInput
    data: XOR<APPLICATIONUpdateManyMutationInput, APPLICATIONUncheckedUpdateManyWithoutSTUDENTInput>
  }

  export type FAMILY_MEMBERUpsertWithWhereUniqueWithoutSTUDENTInput = {
    where: FAMILY_MEMBERWhereUniqueInput
    update: XOR<FAMILY_MEMBERUpdateWithoutSTUDENTInput, FAMILY_MEMBERUncheckedUpdateWithoutSTUDENTInput>
    create: XOR<FAMILY_MEMBERCreateWithoutSTUDENTInput, FAMILY_MEMBERUncheckedCreateWithoutSTUDENTInput>
  }

  export type FAMILY_MEMBERUpdateWithWhereUniqueWithoutSTUDENTInput = {
    where: FAMILY_MEMBERWhereUniqueInput
    data: XOR<FAMILY_MEMBERUpdateWithoutSTUDENTInput, FAMILY_MEMBERUncheckedUpdateWithoutSTUDENTInput>
  }

  export type FAMILY_MEMBERUpdateManyWithWhereWithoutSTUDENTInput = {
    where: FAMILY_MEMBERScalarWhereInput
    data: XOR<FAMILY_MEMBERUpdateManyMutationInput, FAMILY_MEMBERUncheckedUpdateManyWithoutSTUDENTInput>
  }

  export type FAMILY_MEMBERScalarWhereInput = {
    AND?: FAMILY_MEMBERScalarWhereInput | FAMILY_MEMBERScalarWhereInput[]
    OR?: FAMILY_MEMBERScalarWhereInput[]
    NOT?: FAMILY_MEMBERScalarWhereInput | FAMILY_MEMBERScalarWhereInput[]
    member_id?: IntFilter<"FAMILY_MEMBER"> | number
    student_id?: IntNullableFilter<"FAMILY_MEMBER"> | number | null
    full_name?: StringNullableFilter<"FAMILY_MEMBER"> | string | null
    age?: IntNullableFilter<"FAMILY_MEMBER"> | number | null
    relationship?: StringNullableFilter<"FAMILY_MEMBER"> | string | null
    designation?: StringNullableFilter<"FAMILY_MEMBER"> | string | null
    annual_income?: DecimalNullableFilter<"FAMILY_MEMBER"> | Decimal | DecimalJsLike | number | string | null
    workplace?: StringNullableFilter<"FAMILY_MEMBER"> | string | null
    phone_number?: StringNullableFilter<"FAMILY_MEMBER"> | string | null
  }

  export type OTHER_FUNDINGUpsertWithWhereUniqueWithoutSTUDENTInput = {
    where: OTHER_FUNDINGWhereUniqueInput
    update: XOR<OTHER_FUNDINGUpdateWithoutSTUDENTInput, OTHER_FUNDINGUncheckedUpdateWithoutSTUDENTInput>
    create: XOR<OTHER_FUNDINGCreateWithoutSTUDENTInput, OTHER_FUNDINGUncheckedCreateWithoutSTUDENTInput>
  }

  export type OTHER_FUNDINGUpdateWithWhereUniqueWithoutSTUDENTInput = {
    where: OTHER_FUNDINGWhereUniqueInput
    data: XOR<OTHER_FUNDINGUpdateWithoutSTUDENTInput, OTHER_FUNDINGUncheckedUpdateWithoutSTUDENTInput>
  }

  export type OTHER_FUNDINGUpdateManyWithWhereWithoutSTUDENTInput = {
    where: OTHER_FUNDINGScalarWhereInput
    data: XOR<OTHER_FUNDINGUpdateManyMutationInput, OTHER_FUNDINGUncheckedUpdateManyWithoutSTUDENTInput>
  }

  export type OTHER_FUNDINGScalarWhereInput = {
    AND?: OTHER_FUNDINGScalarWhereInput | OTHER_FUNDINGScalarWhereInput[]
    OR?: OTHER_FUNDINGScalarWhereInput[]
    NOT?: OTHER_FUNDINGScalarWhereInput | OTHER_FUNDINGScalarWhereInput[]
    funding_id?: IntFilter<"OTHER_FUNDING"> | number
    student_id?: IntNullableFilter<"OTHER_FUNDING"> | number | null
    funding_name?: StringNullableFilter<"OTHER_FUNDING"> | string | null
    organization?: StringNullableFilter<"OTHER_FUNDING"> | string | null
    annual_amount?: DecimalNullableFilter<"OTHER_FUNDING"> | Decimal | DecimalJsLike | number | string | null
    start_date?: DateTimeNullableFilter<"OTHER_FUNDING"> | Date | string | null
    end_date?: DateTimeNullableFilter<"OTHER_FUNDING"> | Date | string | null
  }

  export type SIBLING_EDUCATIONUpsertWithWhereUniqueWithoutSTUDENTInput = {
    where: SIBLING_EDUCATIONWhereUniqueInput
    update: XOR<SIBLING_EDUCATIONUpdateWithoutSTUDENTInput, SIBLING_EDUCATIONUncheckedUpdateWithoutSTUDENTInput>
    create: XOR<SIBLING_EDUCATIONCreateWithoutSTUDENTInput, SIBLING_EDUCATIONUncheckedCreateWithoutSTUDENTInput>
  }

  export type SIBLING_EDUCATIONUpdateWithWhereUniqueWithoutSTUDENTInput = {
    where: SIBLING_EDUCATIONWhereUniqueInput
    data: XOR<SIBLING_EDUCATIONUpdateWithoutSTUDENTInput, SIBLING_EDUCATIONUncheckedUpdateWithoutSTUDENTInput>
  }

  export type SIBLING_EDUCATIONUpdateManyWithWhereWithoutSTUDENTInput = {
    where: SIBLING_EDUCATIONScalarWhereInput
    data: XOR<SIBLING_EDUCATIONUpdateManyMutationInput, SIBLING_EDUCATIONUncheckedUpdateManyWithoutSTUDENTInput>
  }

  export type USERUpsertWithoutSTUDENTInput = {
    update: XOR<USERUpdateWithoutSTUDENTInput, USERUncheckedUpdateWithoutSTUDENTInput>
    create: XOR<USERCreateWithoutSTUDENTInput, USERUncheckedCreateWithoutSTUDENTInput>
    where?: USERWhereInput
  }

  export type USERUpdateToOneWithWhereWithoutSTUDENTInput = {
    where?: USERWhereInput
    data: XOR<USERUpdateWithoutSTUDENTInput, USERUncheckedUpdateWithoutSTUDENTInput>
  }

  export type USERUpdateWithoutSTUDENTInput = {
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUSER_roleFieldUpdateOperationsInput | $Enums.USER_role
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    COMMITTEE_REVIEW?: COMMITTEE_REVIEWUpdateManyWithoutUSERNestedInput
    NOTIFICATION?: NOTIFICATIONUpdateManyWithoutUSERNestedInput
  }

  export type USERUncheckedUpdateWithoutSTUDENTInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUSER_roleFieldUpdateOperationsInput | $Enums.USER_role
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    COMMITTEE_REVIEW?: COMMITTEE_REVIEWUncheckedUpdateManyWithoutUSERNestedInput
    NOTIFICATION?: NOTIFICATIONUncheckedUpdateManyWithoutUSERNestedInput
  }

  export type COMMITTEE_REVIEWCreateWithoutUSERInput = {
    review_date?: Date | string | null
    points_awarded?: number | null
    comments?: string | null
    status?: $Enums.COMMITTEE_REVIEW_status | null
    is_read?: boolean | null
    APPLICATION?: APPLICATIONCreateNestedOneWithoutCOMMITTEE_REVIEWInput
  }

  export type COMMITTEE_REVIEWUncheckedCreateWithoutUSERInput = {
    review_id?: number
    application_id?: number | null
    review_date?: Date | string | null
    points_awarded?: number | null
    comments?: string | null
    status?: $Enums.COMMITTEE_REVIEW_status | null
    is_read?: boolean | null
  }

  export type COMMITTEE_REVIEWCreateOrConnectWithoutUSERInput = {
    where: COMMITTEE_REVIEWWhereUniqueInput
    create: XOR<COMMITTEE_REVIEWCreateWithoutUSERInput, COMMITTEE_REVIEWUncheckedCreateWithoutUSERInput>
  }

  export type COMMITTEE_REVIEWCreateManyUSERInputEnvelope = {
    data: COMMITTEE_REVIEWCreateManyUSERInput | COMMITTEE_REVIEWCreateManyUSERInput[]
    skipDuplicates?: boolean
  }

  export type NOTIFICATIONCreateWithoutUSERInput = {
    message?: string | null
    created_at?: Date | string | null
    is_read?: boolean | null
  }

  export type NOTIFICATIONUncheckedCreateWithoutUSERInput = {
    notification_id?: number
    message?: string | null
    created_at?: Date | string | null
    is_read?: boolean | null
  }

  export type NOTIFICATIONCreateOrConnectWithoutUSERInput = {
    where: NOTIFICATIONWhereUniqueInput
    create: XOR<NOTIFICATIONCreateWithoutUSERInput, NOTIFICATIONUncheckedCreateWithoutUSERInput>
  }

  export type NOTIFICATIONCreateManyUSERInputEnvelope = {
    data: NOTIFICATIONCreateManyUSERInput | NOTIFICATIONCreateManyUSERInput[]
    skipDuplicates?: boolean
  }

  export type STUDENTCreateWithoutUSERInput = {
    full_name?: string | null
    registration_no?: string | null
    date_of_birth?: Date | string | null
    permanent_address?: string | null
    admission_date?: Date | string | null
    year_of_study?: number | null
    gender?: $Enums.STUDENT_gender | null
    phone_number?: string | null
    email?: string | null
    school_name?: string | null
    unmarried_siblings?: number | null
    APPLICATION?: APPLICATIONCreateNestedManyWithoutSTUDENTInput
    FAMILY_MEMBER?: FAMILY_MEMBERCreateNestedManyWithoutSTUDENTInput
    OTHER_FUNDING?: OTHER_FUNDINGCreateNestedManyWithoutSTUDENTInput
    SIBLING_EDUCATION?: SIBLING_EDUCATIONCreateNestedManyWithoutSTUDENTInput
  }

  export type STUDENTUncheckedCreateWithoutUSERInput = {
    student_id?: number
    full_name?: string | null
    registration_no?: string | null
    date_of_birth?: Date | string | null
    permanent_address?: string | null
    admission_date?: Date | string | null
    year_of_study?: number | null
    gender?: $Enums.STUDENT_gender | null
    phone_number?: string | null
    email?: string | null
    school_name?: string | null
    unmarried_siblings?: number | null
    APPLICATION?: APPLICATIONUncheckedCreateNestedManyWithoutSTUDENTInput
    FAMILY_MEMBER?: FAMILY_MEMBERUncheckedCreateNestedManyWithoutSTUDENTInput
    OTHER_FUNDING?: OTHER_FUNDINGUncheckedCreateNestedManyWithoutSTUDENTInput
    SIBLING_EDUCATION?: SIBLING_EDUCATIONUncheckedCreateNestedManyWithoutSTUDENTInput
  }

  export type STUDENTCreateOrConnectWithoutUSERInput = {
    where: STUDENTWhereUniqueInput
    create: XOR<STUDENTCreateWithoutUSERInput, STUDENTUncheckedCreateWithoutUSERInput>
  }

  export type STUDENTCreateManyUSERInputEnvelope = {
    data: STUDENTCreateManyUSERInput | STUDENTCreateManyUSERInput[]
    skipDuplicates?: boolean
  }

  export type COMMITTEE_REVIEWUpsertWithWhereUniqueWithoutUSERInput = {
    where: COMMITTEE_REVIEWWhereUniqueInput
    update: XOR<COMMITTEE_REVIEWUpdateWithoutUSERInput, COMMITTEE_REVIEWUncheckedUpdateWithoutUSERInput>
    create: XOR<COMMITTEE_REVIEWCreateWithoutUSERInput, COMMITTEE_REVIEWUncheckedCreateWithoutUSERInput>
  }

  export type COMMITTEE_REVIEWUpdateWithWhereUniqueWithoutUSERInput = {
    where: COMMITTEE_REVIEWWhereUniqueInput
    data: XOR<COMMITTEE_REVIEWUpdateWithoutUSERInput, COMMITTEE_REVIEWUncheckedUpdateWithoutUSERInput>
  }

  export type COMMITTEE_REVIEWUpdateManyWithWhereWithoutUSERInput = {
    where: COMMITTEE_REVIEWScalarWhereInput
    data: XOR<COMMITTEE_REVIEWUpdateManyMutationInput, COMMITTEE_REVIEWUncheckedUpdateManyWithoutUSERInput>
  }

  export type NOTIFICATIONUpsertWithWhereUniqueWithoutUSERInput = {
    where: NOTIFICATIONWhereUniqueInput
    update: XOR<NOTIFICATIONUpdateWithoutUSERInput, NOTIFICATIONUncheckedUpdateWithoutUSERInput>
    create: XOR<NOTIFICATIONCreateWithoutUSERInput, NOTIFICATIONUncheckedCreateWithoutUSERInput>
  }

  export type NOTIFICATIONUpdateWithWhereUniqueWithoutUSERInput = {
    where: NOTIFICATIONWhereUniqueInput
    data: XOR<NOTIFICATIONUpdateWithoutUSERInput, NOTIFICATIONUncheckedUpdateWithoutUSERInput>
  }

  export type NOTIFICATIONUpdateManyWithWhereWithoutUSERInput = {
    where: NOTIFICATIONScalarWhereInput
    data: XOR<NOTIFICATIONUpdateManyMutationInput, NOTIFICATIONUncheckedUpdateManyWithoutUSERInput>
  }

  export type NOTIFICATIONScalarWhereInput = {
    AND?: NOTIFICATIONScalarWhereInput | NOTIFICATIONScalarWhereInput[]
    OR?: NOTIFICATIONScalarWhereInput[]
    NOT?: NOTIFICATIONScalarWhereInput | NOTIFICATIONScalarWhereInput[]
    notification_id?: IntFilter<"NOTIFICATION"> | number
    user_id?: IntNullableFilter<"NOTIFICATION"> | number | null
    message?: StringNullableFilter<"NOTIFICATION"> | string | null
    created_at?: DateTimeNullableFilter<"NOTIFICATION"> | Date | string | null
    is_read?: BoolNullableFilter<"NOTIFICATION"> | boolean | null
  }

  export type STUDENTUpsertWithWhereUniqueWithoutUSERInput = {
    where: STUDENTWhereUniqueInput
    update: XOR<STUDENTUpdateWithoutUSERInput, STUDENTUncheckedUpdateWithoutUSERInput>
    create: XOR<STUDENTCreateWithoutUSERInput, STUDENTUncheckedCreateWithoutUSERInput>
  }

  export type STUDENTUpdateWithWhereUniqueWithoutUSERInput = {
    where: STUDENTWhereUniqueInput
    data: XOR<STUDENTUpdateWithoutUSERInput, STUDENTUncheckedUpdateWithoutUSERInput>
  }

  export type STUDENTUpdateManyWithWhereWithoutUSERInput = {
    where: STUDENTScalarWhereInput
    data: XOR<STUDENTUpdateManyMutationInput, STUDENTUncheckedUpdateManyWithoutUSERInput>
  }

  export type STUDENTScalarWhereInput = {
    AND?: STUDENTScalarWhereInput | STUDENTScalarWhereInput[]
    OR?: STUDENTScalarWhereInput[]
    NOT?: STUDENTScalarWhereInput | STUDENTScalarWhereInput[]
    student_id?: IntFilter<"STUDENT"> | number
    user_id?: IntNullableFilter<"STUDENT"> | number | null
    full_name?: StringNullableFilter<"STUDENT"> | string | null
    registration_no?: StringNullableFilter<"STUDENT"> | string | null
    date_of_birth?: DateTimeNullableFilter<"STUDENT"> | Date | string | null
    permanent_address?: StringNullableFilter<"STUDENT"> | string | null
    admission_date?: DateTimeNullableFilter<"STUDENT"> | Date | string | null
    year_of_study?: IntNullableFilter<"STUDENT"> | number | null
    gender?: EnumSTUDENT_genderNullableFilter<"STUDENT"> | $Enums.STUDENT_gender | null
    phone_number?: StringNullableFilter<"STUDENT"> | string | null
    email?: StringNullableFilter<"STUDENT"> | string | null
    school_name?: StringNullableFilter<"STUDENT"> | string | null
    unmarried_siblings?: IntNullableFilter<"STUDENT"> | number | null
  }

  export type COMMITTEE_REVIEWCreateManyAPPLICATIONInput = {
    review_id?: number
    reviewer_id?: number | null
    review_date?: Date | string | null
    points_awarded?: number | null
    comments?: string | null
    status?: $Enums.COMMITTEE_REVIEW_status | null
    is_read?: boolean | null
  }

  export type DOCUMENTCreateManyAPPLICATIONInput = {
    document_id?: number
    document_type?: string | null
    file_name?: string | null
    file_path?: string | null
    upload_date?: Date | string | null
    verification_status?: $Enums.DOCUMENT_verification_status | null
  }

  export type PAYMENTCreateManyAPPLICATIONInput = {
    payment_id?: number
    amount?: Decimal | DecimalJsLike | number | string | null
    payment_date?: Date | string | null
    payment_method?: string | null
    transaction_id?: string | null
    status?: $Enums.PAYMENT_status | null
  }

  export type COMMITTEE_REVIEWUpdateWithoutAPPLICATIONInput = {
    review_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    points_awarded?: NullableIntFieldUpdateOperationsInput | number | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumCOMMITTEE_REVIEW_statusFieldUpdateOperationsInput | $Enums.COMMITTEE_REVIEW_status | null
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    USER?: USERUpdateOneWithoutCOMMITTEE_REVIEWNestedInput
  }

  export type COMMITTEE_REVIEWUncheckedUpdateWithoutAPPLICATIONInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    reviewer_id?: NullableIntFieldUpdateOperationsInput | number | null
    review_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    points_awarded?: NullableIntFieldUpdateOperationsInput | number | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumCOMMITTEE_REVIEW_statusFieldUpdateOperationsInput | $Enums.COMMITTEE_REVIEW_status | null
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type COMMITTEE_REVIEWUncheckedUpdateManyWithoutAPPLICATIONInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    reviewer_id?: NullableIntFieldUpdateOperationsInput | number | null
    review_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    points_awarded?: NullableIntFieldUpdateOperationsInput | number | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumCOMMITTEE_REVIEW_statusFieldUpdateOperationsInput | $Enums.COMMITTEE_REVIEW_status | null
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type DOCUMENTUpdateWithoutAPPLICATIONInput = {
    document_type?: NullableStringFieldUpdateOperationsInput | string | null
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    file_path?: NullableStringFieldUpdateOperationsInput | string | null
    upload_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verification_status?: NullableEnumDOCUMENT_verification_statusFieldUpdateOperationsInput | $Enums.DOCUMENT_verification_status | null
  }

  export type DOCUMENTUncheckedUpdateWithoutAPPLICATIONInput = {
    document_id?: IntFieldUpdateOperationsInput | number
    document_type?: NullableStringFieldUpdateOperationsInput | string | null
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    file_path?: NullableStringFieldUpdateOperationsInput | string | null
    upload_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verification_status?: NullableEnumDOCUMENT_verification_statusFieldUpdateOperationsInput | $Enums.DOCUMENT_verification_status | null
  }

  export type DOCUMENTUncheckedUpdateManyWithoutAPPLICATIONInput = {
    document_id?: IntFieldUpdateOperationsInput | number
    document_type?: NullableStringFieldUpdateOperationsInput | string | null
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    file_path?: NullableStringFieldUpdateOperationsInput | string | null
    upload_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verification_status?: NullableEnumDOCUMENT_verification_statusFieldUpdateOperationsInput | $Enums.DOCUMENT_verification_status | null
  }

  export type PAYMENTUpdateWithoutAPPLICATIONInput = {
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumPAYMENT_statusFieldUpdateOperationsInput | $Enums.PAYMENT_status | null
  }

  export type PAYMENTUncheckedUpdateWithoutAPPLICATIONInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumPAYMENT_statusFieldUpdateOperationsInput | $Enums.PAYMENT_status | null
  }

  export type PAYMENTUncheckedUpdateManyWithoutAPPLICATIONInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumPAYMENT_statusFieldUpdateOperationsInput | $Enums.PAYMENT_status | null
  }

  export type SIBLING_EDUCATIONCreateManyFAMILY_MEMBERInput = {
    education_id?: number
    student_id?: number | null
    institution?: string | null
    year_grade?: string | null
    registration_course?: string | null
  }

  export type SIBLING_EDUCATIONUpdateWithoutFAMILY_MEMBERInput = {
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    year_grade?: NullableStringFieldUpdateOperationsInput | string | null
    registration_course?: NullableStringFieldUpdateOperationsInput | string | null
    STUDENT?: STUDENTUpdateOneWithoutSIBLING_EDUCATIONNestedInput
  }

  export type SIBLING_EDUCATIONUncheckedUpdateWithoutFAMILY_MEMBERInput = {
    education_id?: IntFieldUpdateOperationsInput | number
    student_id?: NullableIntFieldUpdateOperationsInput | number | null
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    year_grade?: NullableStringFieldUpdateOperationsInput | string | null
    registration_course?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SIBLING_EDUCATIONUncheckedUpdateManyWithoutFAMILY_MEMBERInput = {
    education_id?: IntFieldUpdateOperationsInput | number
    student_id?: NullableIntFieldUpdateOperationsInput | number | null
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    year_grade?: NullableStringFieldUpdateOperationsInput | string | null
    registration_course?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type APPLICATIONCreateManySCHOLARSHIPInput = {
    application_id?: number
    student_id?: number | null
    submission_date?: Date | string | null
    status?: $Enums.APPLICATION_status | null
    total_points?: number | null
    reviewer_comments?: string | null
    review_date?: Date | string | null
  }

  export type ELIGIBILITY_CRITERIACreateManySCHOLARSHIPInput = {
    criteria_id?: number
    criteria_name?: string | null
    criteria_description?: string | null
    min_value?: Decimal | DecimalJsLike | number | string | null
    max_value?: Decimal | DecimalJsLike | number | string | null
    weight?: number | null
  }

  export type APPLICATIONUpdateWithoutSCHOLARSHIPInput = {
    submission_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumAPPLICATION_statusFieldUpdateOperationsInput | $Enums.APPLICATION_status | null
    total_points?: NullableIntFieldUpdateOperationsInput | number | null
    reviewer_comments?: NullableStringFieldUpdateOperationsInput | string | null
    review_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    STUDENT?: STUDENTUpdateOneWithoutAPPLICATIONNestedInput
    COMMITTEE_REVIEW?: COMMITTEE_REVIEWUpdateManyWithoutAPPLICATIONNestedInput
    DOCUMENT?: DOCUMENTUpdateManyWithoutAPPLICATIONNestedInput
    PAYMENT?: PAYMENTUpdateManyWithoutAPPLICATIONNestedInput
  }

  export type APPLICATIONUncheckedUpdateWithoutSCHOLARSHIPInput = {
    application_id?: IntFieldUpdateOperationsInput | number
    student_id?: NullableIntFieldUpdateOperationsInput | number | null
    submission_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumAPPLICATION_statusFieldUpdateOperationsInput | $Enums.APPLICATION_status | null
    total_points?: NullableIntFieldUpdateOperationsInput | number | null
    reviewer_comments?: NullableStringFieldUpdateOperationsInput | string | null
    review_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    COMMITTEE_REVIEW?: COMMITTEE_REVIEWUncheckedUpdateManyWithoutAPPLICATIONNestedInput
    DOCUMENT?: DOCUMENTUncheckedUpdateManyWithoutAPPLICATIONNestedInput
    PAYMENT?: PAYMENTUncheckedUpdateManyWithoutAPPLICATIONNestedInput
  }

  export type APPLICATIONUncheckedUpdateManyWithoutSCHOLARSHIPInput = {
    application_id?: IntFieldUpdateOperationsInput | number
    student_id?: NullableIntFieldUpdateOperationsInput | number | null
    submission_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumAPPLICATION_statusFieldUpdateOperationsInput | $Enums.APPLICATION_status | null
    total_points?: NullableIntFieldUpdateOperationsInput | number | null
    reviewer_comments?: NullableStringFieldUpdateOperationsInput | string | null
    review_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ELIGIBILITY_CRITERIAUpdateWithoutSCHOLARSHIPInput = {
    criteria_name?: NullableStringFieldUpdateOperationsInput | string | null
    criteria_description?: NullableStringFieldUpdateOperationsInput | string | null
    min_value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    max_value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ELIGIBILITY_CRITERIAUncheckedUpdateWithoutSCHOLARSHIPInput = {
    criteria_id?: IntFieldUpdateOperationsInput | number
    criteria_name?: NullableStringFieldUpdateOperationsInput | string | null
    criteria_description?: NullableStringFieldUpdateOperationsInput | string | null
    min_value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    max_value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ELIGIBILITY_CRITERIAUncheckedUpdateManyWithoutSCHOLARSHIPInput = {
    criteria_id?: IntFieldUpdateOperationsInput | number
    criteria_name?: NullableStringFieldUpdateOperationsInput | string | null
    criteria_description?: NullableStringFieldUpdateOperationsInput | string | null
    min_value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    max_value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SCHOLARSHIPCreateManySCHOLARSHIP_PROVIDERInput = {
    scholarship_id?: number
    name?: string | null
    description?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    no_of_students?: number | null
    application_deadline?: Date | string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    is_active?: boolean | null
  }

  export type SCHOLARSHIPUpdateWithoutSCHOLARSHIP_PROVIDERInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    no_of_students?: NullableIntFieldUpdateOperationsInput | number | null
    application_deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    APPLICATION?: APPLICATIONUpdateManyWithoutSCHOLARSHIPNestedInput
    ELIGIBILITY_CRITERIA?: ELIGIBILITY_CRITERIAUpdateManyWithoutSCHOLARSHIPNestedInput
  }

  export type SCHOLARSHIPUncheckedUpdateWithoutSCHOLARSHIP_PROVIDERInput = {
    scholarship_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    no_of_students?: NullableIntFieldUpdateOperationsInput | number | null
    application_deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    APPLICATION?: APPLICATIONUncheckedUpdateManyWithoutSCHOLARSHIPNestedInput
    ELIGIBILITY_CRITERIA?: ELIGIBILITY_CRITERIAUncheckedUpdateManyWithoutSCHOLARSHIPNestedInput
  }

  export type SCHOLARSHIPUncheckedUpdateManyWithoutSCHOLARSHIP_PROVIDERInput = {
    scholarship_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    no_of_students?: NullableIntFieldUpdateOperationsInput | number | null
    application_deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type APPLICATIONCreateManySTUDENTInput = {
    application_id?: number
    scholarship_id?: number | null
    submission_date?: Date | string | null
    status?: $Enums.APPLICATION_status | null
    total_points?: number | null
    reviewer_comments?: string | null
    review_date?: Date | string | null
  }

  export type FAMILY_MEMBERCreateManySTUDENTInput = {
    member_id?: number
    full_name?: string | null
    age?: number | null
    relationship?: string | null
    designation?: string | null
    annual_income?: Decimal | DecimalJsLike | number | string | null
    workplace?: string | null
    phone_number?: string | null
  }

  export type OTHER_FUNDINGCreateManySTUDENTInput = {
    funding_id?: number
    funding_name?: string | null
    organization?: string | null
    annual_amount?: Decimal | DecimalJsLike | number | string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
  }

  export type SIBLING_EDUCATIONCreateManySTUDENTInput = {
    education_id?: number
    member_id?: number | null
    institution?: string | null
    year_grade?: string | null
    registration_course?: string | null
  }

  export type APPLICATIONUpdateWithoutSTUDENTInput = {
    submission_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumAPPLICATION_statusFieldUpdateOperationsInput | $Enums.APPLICATION_status | null
    total_points?: NullableIntFieldUpdateOperationsInput | number | null
    reviewer_comments?: NullableStringFieldUpdateOperationsInput | string | null
    review_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    SCHOLARSHIP?: SCHOLARSHIPUpdateOneWithoutAPPLICATIONNestedInput
    COMMITTEE_REVIEW?: COMMITTEE_REVIEWUpdateManyWithoutAPPLICATIONNestedInput
    DOCUMENT?: DOCUMENTUpdateManyWithoutAPPLICATIONNestedInput
    PAYMENT?: PAYMENTUpdateManyWithoutAPPLICATIONNestedInput
  }

  export type APPLICATIONUncheckedUpdateWithoutSTUDENTInput = {
    application_id?: IntFieldUpdateOperationsInput | number
    scholarship_id?: NullableIntFieldUpdateOperationsInput | number | null
    submission_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumAPPLICATION_statusFieldUpdateOperationsInput | $Enums.APPLICATION_status | null
    total_points?: NullableIntFieldUpdateOperationsInput | number | null
    reviewer_comments?: NullableStringFieldUpdateOperationsInput | string | null
    review_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    COMMITTEE_REVIEW?: COMMITTEE_REVIEWUncheckedUpdateManyWithoutAPPLICATIONNestedInput
    DOCUMENT?: DOCUMENTUncheckedUpdateManyWithoutAPPLICATIONNestedInput
    PAYMENT?: PAYMENTUncheckedUpdateManyWithoutAPPLICATIONNestedInput
  }

  export type APPLICATIONUncheckedUpdateManyWithoutSTUDENTInput = {
    application_id?: IntFieldUpdateOperationsInput | number
    scholarship_id?: NullableIntFieldUpdateOperationsInput | number | null
    submission_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumAPPLICATION_statusFieldUpdateOperationsInput | $Enums.APPLICATION_status | null
    total_points?: NullableIntFieldUpdateOperationsInput | number | null
    reviewer_comments?: NullableStringFieldUpdateOperationsInput | string | null
    review_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FAMILY_MEMBERUpdateWithoutSTUDENTInput = {
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    relationship?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    annual_income?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    workplace?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    SIBLING_EDUCATION?: SIBLING_EDUCATIONUpdateManyWithoutFAMILY_MEMBERNestedInput
  }

  export type FAMILY_MEMBERUncheckedUpdateWithoutSTUDENTInput = {
    member_id?: IntFieldUpdateOperationsInput | number
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    relationship?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    annual_income?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    workplace?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    SIBLING_EDUCATION?: SIBLING_EDUCATIONUncheckedUpdateManyWithoutFAMILY_MEMBERNestedInput
  }

  export type FAMILY_MEMBERUncheckedUpdateManyWithoutSTUDENTInput = {
    member_id?: IntFieldUpdateOperationsInput | number
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    relationship?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    annual_income?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    workplace?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OTHER_FUNDINGUpdateWithoutSTUDENTInput = {
    funding_name?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    annual_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OTHER_FUNDINGUncheckedUpdateWithoutSTUDENTInput = {
    funding_id?: IntFieldUpdateOperationsInput | number
    funding_name?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    annual_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OTHER_FUNDINGUncheckedUpdateManyWithoutSTUDENTInput = {
    funding_id?: IntFieldUpdateOperationsInput | number
    funding_name?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    annual_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SIBLING_EDUCATIONUpdateWithoutSTUDENTInput = {
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    year_grade?: NullableStringFieldUpdateOperationsInput | string | null
    registration_course?: NullableStringFieldUpdateOperationsInput | string | null
    FAMILY_MEMBER?: FAMILY_MEMBERUpdateOneWithoutSIBLING_EDUCATIONNestedInput
  }

  export type SIBLING_EDUCATIONUncheckedUpdateWithoutSTUDENTInput = {
    education_id?: IntFieldUpdateOperationsInput | number
    member_id?: NullableIntFieldUpdateOperationsInput | number | null
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    year_grade?: NullableStringFieldUpdateOperationsInput | string | null
    registration_course?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SIBLING_EDUCATIONUncheckedUpdateManyWithoutSTUDENTInput = {
    education_id?: IntFieldUpdateOperationsInput | number
    member_id?: NullableIntFieldUpdateOperationsInput | number | null
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    year_grade?: NullableStringFieldUpdateOperationsInput | string | null
    registration_course?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type COMMITTEE_REVIEWCreateManyUSERInput = {
    review_id?: number
    application_id?: number | null
    review_date?: Date | string | null
    points_awarded?: number | null
    comments?: string | null
    status?: $Enums.COMMITTEE_REVIEW_status | null
    is_read?: boolean | null
  }

  export type NOTIFICATIONCreateManyUSERInput = {
    notification_id?: number
    message?: string | null
    created_at?: Date | string | null
    is_read?: boolean | null
  }

  export type STUDENTCreateManyUSERInput = {
    student_id?: number
    full_name?: string | null
    registration_no?: string | null
    date_of_birth?: Date | string | null
    permanent_address?: string | null
    admission_date?: Date | string | null
    year_of_study?: number | null
    gender?: $Enums.STUDENT_gender | null
    phone_number?: string | null
    email?: string | null
    school_name?: string | null
    unmarried_siblings?: number | null
  }

  export type COMMITTEE_REVIEWUpdateWithoutUSERInput = {
    review_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    points_awarded?: NullableIntFieldUpdateOperationsInput | number | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumCOMMITTEE_REVIEW_statusFieldUpdateOperationsInput | $Enums.COMMITTEE_REVIEW_status | null
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    APPLICATION?: APPLICATIONUpdateOneWithoutCOMMITTEE_REVIEWNestedInput
  }

  export type COMMITTEE_REVIEWUncheckedUpdateWithoutUSERInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    application_id?: NullableIntFieldUpdateOperationsInput | number | null
    review_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    points_awarded?: NullableIntFieldUpdateOperationsInput | number | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumCOMMITTEE_REVIEW_statusFieldUpdateOperationsInput | $Enums.COMMITTEE_REVIEW_status | null
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type COMMITTEE_REVIEWUncheckedUpdateManyWithoutUSERInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    application_id?: NullableIntFieldUpdateOperationsInput | number | null
    review_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    points_awarded?: NullableIntFieldUpdateOperationsInput | number | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumCOMMITTEE_REVIEW_statusFieldUpdateOperationsInput | $Enums.COMMITTEE_REVIEW_status | null
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type NOTIFICATIONUpdateWithoutUSERInput = {
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type NOTIFICATIONUncheckedUpdateWithoutUSERInput = {
    notification_id?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type NOTIFICATIONUncheckedUpdateManyWithoutUSERInput = {
    notification_id?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type STUDENTUpdateWithoutUSERInput = {
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    registration_no?: NullableStringFieldUpdateOperationsInput | string | null
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permanent_address?: NullableStringFieldUpdateOperationsInput | string | null
    admission_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    year_of_study?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumSTUDENT_genderFieldUpdateOperationsInput | $Enums.STUDENT_gender | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    school_name?: NullableStringFieldUpdateOperationsInput | string | null
    unmarried_siblings?: NullableIntFieldUpdateOperationsInput | number | null
    APPLICATION?: APPLICATIONUpdateManyWithoutSTUDENTNestedInput
    FAMILY_MEMBER?: FAMILY_MEMBERUpdateManyWithoutSTUDENTNestedInput
    OTHER_FUNDING?: OTHER_FUNDINGUpdateManyWithoutSTUDENTNestedInput
    SIBLING_EDUCATION?: SIBLING_EDUCATIONUpdateManyWithoutSTUDENTNestedInput
  }

  export type STUDENTUncheckedUpdateWithoutUSERInput = {
    student_id?: IntFieldUpdateOperationsInput | number
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    registration_no?: NullableStringFieldUpdateOperationsInput | string | null
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permanent_address?: NullableStringFieldUpdateOperationsInput | string | null
    admission_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    year_of_study?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumSTUDENT_genderFieldUpdateOperationsInput | $Enums.STUDENT_gender | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    school_name?: NullableStringFieldUpdateOperationsInput | string | null
    unmarried_siblings?: NullableIntFieldUpdateOperationsInput | number | null
    APPLICATION?: APPLICATIONUncheckedUpdateManyWithoutSTUDENTNestedInput
    FAMILY_MEMBER?: FAMILY_MEMBERUncheckedUpdateManyWithoutSTUDENTNestedInput
    OTHER_FUNDING?: OTHER_FUNDINGUncheckedUpdateManyWithoutSTUDENTNestedInput
    SIBLING_EDUCATION?: SIBLING_EDUCATIONUncheckedUpdateManyWithoutSTUDENTNestedInput
  }

  export type STUDENTUncheckedUpdateManyWithoutUSERInput = {
    student_id?: IntFieldUpdateOperationsInput | number
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    registration_no?: NullableStringFieldUpdateOperationsInput | string | null
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permanent_address?: NullableStringFieldUpdateOperationsInput | string | null
    admission_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    year_of_study?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumSTUDENT_genderFieldUpdateOperationsInput | $Enums.STUDENT_gender | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    school_name?: NullableStringFieldUpdateOperationsInput | string | null
    unmarried_siblings?: NullableIntFieldUpdateOperationsInput | number | null
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
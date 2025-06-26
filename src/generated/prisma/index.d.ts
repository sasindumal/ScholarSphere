
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model ScholarshipProvider
 * 
 */
export type ScholarshipProvider = $Result.DefaultSelection<Prisma.$ScholarshipProviderPayload>
/**
 * Model Scholarship
 * 
 */
export type Scholarship = $Result.DefaultSelection<Prisma.$ScholarshipPayload>
/**
 * Model EligibilityCriteria
 * 
 */
export type EligibilityCriteria = $Result.DefaultSelection<Prisma.$EligibilityCriteriaPayload>
/**
 * Model Application
 * 
 */
export type Application = $Result.DefaultSelection<Prisma.$ApplicationPayload>
/**
 * Model Document
 * 
 */
export type Document = $Result.DefaultSelection<Prisma.$DocumentPayload>
/**
 * Model FamilyMember
 * 
 */
export type FamilyMember = $Result.DefaultSelection<Prisma.$FamilyMemberPayload>
/**
 * Model OtherFunding
 * 
 */
export type OtherFunding = $Result.DefaultSelection<Prisma.$OtherFundingPayload>
/**
 * Model CommitteeReview
 * 
 */
export type CommitteeReview = $Result.DefaultSelection<Prisma.$CommitteeReviewPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model SiblingEducation
 * 
 */
export type SiblingEducation = $Result.DefaultSelection<Prisma.$SiblingEducationPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model Setting
 * 
 */
export type Setting = $Result.DefaultSelection<Prisma.$SettingPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  student: 'student',
  coordinator: 'coordinator',
  admin: 'admin'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Gender: {
  male: 'male',
  female: 'female',
  other: 'other'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const ApplicationStatus: {
  pending: 'pending',
  reviewed: 'reviewed',
  approved: 'approved',
  rejected: 'rejected'
};

export type ApplicationStatus = (typeof ApplicationStatus)[keyof typeof ApplicationStatus]


export const VerificationStatus: {
  pending: 'pending',
  verified: 'verified',
  rejected: 'rejected'
};

export type VerificationStatus = (typeof VerificationStatus)[keyof typeof VerificationStatus]


export const ReviewStatus: {
  read: 'read',
  unread: 'unread'
};

export type ReviewStatus = (typeof ReviewStatus)[keyof typeof ReviewStatus]


export const PaymentStatus: {
  pending: 'pending',
  completed: 'completed',
  failed: 'failed'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type ApplicationStatus = $Enums.ApplicationStatus

export const ApplicationStatus: typeof $Enums.ApplicationStatus

export type VerificationStatus = $Enums.VerificationStatus

export const VerificationStatus: typeof $Enums.VerificationStatus

export type ReviewStatus = $Enums.ReviewStatus

export const ReviewStatus: typeof $Enums.ReviewStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scholarshipProvider`: Exposes CRUD operations for the **ScholarshipProvider** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScholarshipProviders
    * const scholarshipProviders = await prisma.scholarshipProvider.findMany()
    * ```
    */
  get scholarshipProvider(): Prisma.ScholarshipProviderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scholarship`: Exposes CRUD operations for the **Scholarship** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Scholarships
    * const scholarships = await prisma.scholarship.findMany()
    * ```
    */
  get scholarship(): Prisma.ScholarshipDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eligibilityCriteria`: Exposes CRUD operations for the **EligibilityCriteria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EligibilityCriteria
    * const eligibilityCriteria = await prisma.eligibilityCriteria.findMany()
    * ```
    */
  get eligibilityCriteria(): Prisma.EligibilityCriteriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.application`: Exposes CRUD operations for the **Application** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Applications
    * const applications = await prisma.application.findMany()
    * ```
    */
  get application(): Prisma.ApplicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.document`: Exposes CRUD operations for the **Document** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documents
    * const documents = await prisma.document.findMany()
    * ```
    */
  get document(): Prisma.DocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.familyMember`: Exposes CRUD operations for the **FamilyMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FamilyMembers
    * const familyMembers = await prisma.familyMember.findMany()
    * ```
    */
  get familyMember(): Prisma.FamilyMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.otherFunding`: Exposes CRUD operations for the **OtherFunding** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OtherFundings
    * const otherFundings = await prisma.otherFunding.findMany()
    * ```
    */
  get otherFunding(): Prisma.OtherFundingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.committeeReview`: Exposes CRUD operations for the **CommitteeReview** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CommitteeReviews
    * const committeeReviews = await prisma.committeeReview.findMany()
    * ```
    */
  get committeeReview(): Prisma.CommitteeReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.siblingEducation`: Exposes CRUD operations for the **SiblingEducation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SiblingEducations
    * const siblingEducations = await prisma.siblingEducation.findMany()
    * ```
    */
  get siblingEducation(): Prisma.SiblingEducationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.setting`: Exposes CRUD operations for the **Setting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Settings
    * const settings = await prisma.setting.findMany()
    * ```
    */
  get setting(): Prisma.SettingDelegate<ExtArgs, ClientOptions>;
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
    User: 'User',
    Student: 'Student',
    ScholarshipProvider: 'ScholarshipProvider',
    Scholarship: 'Scholarship',
    EligibilityCriteria: 'EligibilityCriteria',
    Application: 'Application',
    Document: 'Document',
    FamilyMember: 'FamilyMember',
    OtherFunding: 'OtherFunding',
    CommitteeReview: 'CommitteeReview',
    Payment: 'Payment',
    SiblingEducation: 'SiblingEducation',
    Notification: 'Notification',
    Setting: 'Setting'
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
      modelProps: "user" | "student" | "scholarshipProvider" | "scholarship" | "eligibilityCriteria" | "application" | "document" | "familyMember" | "otherFunding" | "committeeReview" | "payment" | "siblingEducation" | "notification" | "setting"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      ScholarshipProvider: {
        payload: Prisma.$ScholarshipProviderPayload<ExtArgs>
        fields: Prisma.ScholarshipProviderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScholarshipProviderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScholarshipProviderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScholarshipProviderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScholarshipProviderPayload>
          }
          findFirst: {
            args: Prisma.ScholarshipProviderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScholarshipProviderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScholarshipProviderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScholarshipProviderPayload>
          }
          findMany: {
            args: Prisma.ScholarshipProviderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScholarshipProviderPayload>[]
          }
          create: {
            args: Prisma.ScholarshipProviderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScholarshipProviderPayload>
          }
          createMany: {
            args: Prisma.ScholarshipProviderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ScholarshipProviderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScholarshipProviderPayload>
          }
          update: {
            args: Prisma.ScholarshipProviderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScholarshipProviderPayload>
          }
          deleteMany: {
            args: Prisma.ScholarshipProviderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScholarshipProviderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ScholarshipProviderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScholarshipProviderPayload>
          }
          aggregate: {
            args: Prisma.ScholarshipProviderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScholarshipProvider>
          }
          groupBy: {
            args: Prisma.ScholarshipProviderGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScholarshipProviderGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScholarshipProviderCountArgs<ExtArgs>
            result: $Utils.Optional<ScholarshipProviderCountAggregateOutputType> | number
          }
        }
      }
      Scholarship: {
        payload: Prisma.$ScholarshipPayload<ExtArgs>
        fields: Prisma.ScholarshipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScholarshipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScholarshipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScholarshipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScholarshipPayload>
          }
          findFirst: {
            args: Prisma.ScholarshipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScholarshipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScholarshipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScholarshipPayload>
          }
          findMany: {
            args: Prisma.ScholarshipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScholarshipPayload>[]
          }
          create: {
            args: Prisma.ScholarshipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScholarshipPayload>
          }
          createMany: {
            args: Prisma.ScholarshipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ScholarshipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScholarshipPayload>
          }
          update: {
            args: Prisma.ScholarshipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScholarshipPayload>
          }
          deleteMany: {
            args: Prisma.ScholarshipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScholarshipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ScholarshipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScholarshipPayload>
          }
          aggregate: {
            args: Prisma.ScholarshipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScholarship>
          }
          groupBy: {
            args: Prisma.ScholarshipGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScholarshipGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScholarshipCountArgs<ExtArgs>
            result: $Utils.Optional<ScholarshipCountAggregateOutputType> | number
          }
        }
      }
      EligibilityCriteria: {
        payload: Prisma.$EligibilityCriteriaPayload<ExtArgs>
        fields: Prisma.EligibilityCriteriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EligibilityCriteriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EligibilityCriteriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EligibilityCriteriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EligibilityCriteriaPayload>
          }
          findFirst: {
            args: Prisma.EligibilityCriteriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EligibilityCriteriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EligibilityCriteriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EligibilityCriteriaPayload>
          }
          findMany: {
            args: Prisma.EligibilityCriteriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EligibilityCriteriaPayload>[]
          }
          create: {
            args: Prisma.EligibilityCriteriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EligibilityCriteriaPayload>
          }
          createMany: {
            args: Prisma.EligibilityCriteriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EligibilityCriteriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EligibilityCriteriaPayload>
          }
          update: {
            args: Prisma.EligibilityCriteriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EligibilityCriteriaPayload>
          }
          deleteMany: {
            args: Prisma.EligibilityCriteriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EligibilityCriteriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EligibilityCriteriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EligibilityCriteriaPayload>
          }
          aggregate: {
            args: Prisma.EligibilityCriteriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEligibilityCriteria>
          }
          groupBy: {
            args: Prisma.EligibilityCriteriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<EligibilityCriteriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.EligibilityCriteriaCountArgs<ExtArgs>
            result: $Utils.Optional<EligibilityCriteriaCountAggregateOutputType> | number
          }
        }
      }
      Application: {
        payload: Prisma.$ApplicationPayload<ExtArgs>
        fields: Prisma.ApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApplicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApplicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          findFirst: {
            args: Prisma.ApplicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApplicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          findMany: {
            args: Prisma.ApplicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          create: {
            args: Prisma.ApplicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          createMany: {
            args: Prisma.ApplicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ApplicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          update: {
            args: Prisma.ApplicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          deleteMany: {
            args: Prisma.ApplicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApplicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ApplicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          aggregate: {
            args: Prisma.ApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApplication>
          }
          groupBy: {
            args: Prisma.ApplicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApplicationCountArgs<ExtArgs>
            result: $Utils.Optional<ApplicationCountAggregateOutputType> | number
          }
        }
      }
      Document: {
        payload: Prisma.$DocumentPayload<ExtArgs>
        fields: Prisma.DocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findFirst: {
            args: Prisma.DocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findMany: {
            args: Prisma.DocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          create: {
            args: Prisma.DocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          createMany: {
            args: Prisma.DocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          update: {
            args: Prisma.DocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          deleteMany: {
            args: Prisma.DocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          aggregate: {
            args: Prisma.DocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocument>
          }
          groupBy: {
            args: Prisma.DocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentCountAggregateOutputType> | number
          }
        }
      }
      FamilyMember: {
        payload: Prisma.$FamilyMemberPayload<ExtArgs>
        fields: Prisma.FamilyMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FamilyMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FamilyMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyMemberPayload>
          }
          findFirst: {
            args: Prisma.FamilyMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FamilyMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyMemberPayload>
          }
          findMany: {
            args: Prisma.FamilyMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyMemberPayload>[]
          }
          create: {
            args: Prisma.FamilyMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyMemberPayload>
          }
          createMany: {
            args: Prisma.FamilyMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FamilyMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyMemberPayload>
          }
          update: {
            args: Prisma.FamilyMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyMemberPayload>
          }
          deleteMany: {
            args: Prisma.FamilyMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FamilyMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FamilyMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyMemberPayload>
          }
          aggregate: {
            args: Prisma.FamilyMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFamilyMember>
          }
          groupBy: {
            args: Prisma.FamilyMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<FamilyMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.FamilyMemberCountArgs<ExtArgs>
            result: $Utils.Optional<FamilyMemberCountAggregateOutputType> | number
          }
        }
      }
      OtherFunding: {
        payload: Prisma.$OtherFundingPayload<ExtArgs>
        fields: Prisma.OtherFundingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OtherFundingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherFundingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OtherFundingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherFundingPayload>
          }
          findFirst: {
            args: Prisma.OtherFundingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherFundingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OtherFundingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherFundingPayload>
          }
          findMany: {
            args: Prisma.OtherFundingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherFundingPayload>[]
          }
          create: {
            args: Prisma.OtherFundingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherFundingPayload>
          }
          createMany: {
            args: Prisma.OtherFundingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OtherFundingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherFundingPayload>
          }
          update: {
            args: Prisma.OtherFundingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherFundingPayload>
          }
          deleteMany: {
            args: Prisma.OtherFundingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OtherFundingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OtherFundingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherFundingPayload>
          }
          aggregate: {
            args: Prisma.OtherFundingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOtherFunding>
          }
          groupBy: {
            args: Prisma.OtherFundingGroupByArgs<ExtArgs>
            result: $Utils.Optional<OtherFundingGroupByOutputType>[]
          }
          count: {
            args: Prisma.OtherFundingCountArgs<ExtArgs>
            result: $Utils.Optional<OtherFundingCountAggregateOutputType> | number
          }
        }
      }
      CommitteeReview: {
        payload: Prisma.$CommitteeReviewPayload<ExtArgs>
        fields: Prisma.CommitteeReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommitteeReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitteeReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommitteeReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitteeReviewPayload>
          }
          findFirst: {
            args: Prisma.CommitteeReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitteeReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommitteeReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitteeReviewPayload>
          }
          findMany: {
            args: Prisma.CommitteeReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitteeReviewPayload>[]
          }
          create: {
            args: Prisma.CommitteeReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitteeReviewPayload>
          }
          createMany: {
            args: Prisma.CommitteeReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CommitteeReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitteeReviewPayload>
          }
          update: {
            args: Prisma.CommitteeReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitteeReviewPayload>
          }
          deleteMany: {
            args: Prisma.CommitteeReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommitteeReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CommitteeReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitteeReviewPayload>
          }
          aggregate: {
            args: Prisma.CommitteeReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommitteeReview>
          }
          groupBy: {
            args: Prisma.CommitteeReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommitteeReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommitteeReviewCountArgs<ExtArgs>
            result: $Utils.Optional<CommitteeReviewCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      SiblingEducation: {
        payload: Prisma.$SiblingEducationPayload<ExtArgs>
        fields: Prisma.SiblingEducationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SiblingEducationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiblingEducationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SiblingEducationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiblingEducationPayload>
          }
          findFirst: {
            args: Prisma.SiblingEducationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiblingEducationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SiblingEducationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiblingEducationPayload>
          }
          findMany: {
            args: Prisma.SiblingEducationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiblingEducationPayload>[]
          }
          create: {
            args: Prisma.SiblingEducationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiblingEducationPayload>
          }
          createMany: {
            args: Prisma.SiblingEducationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SiblingEducationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiblingEducationPayload>
          }
          update: {
            args: Prisma.SiblingEducationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiblingEducationPayload>
          }
          deleteMany: {
            args: Prisma.SiblingEducationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SiblingEducationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SiblingEducationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiblingEducationPayload>
          }
          aggregate: {
            args: Prisma.SiblingEducationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSiblingEducation>
          }
          groupBy: {
            args: Prisma.SiblingEducationGroupByArgs<ExtArgs>
            result: $Utils.Optional<SiblingEducationGroupByOutputType>[]
          }
          count: {
            args: Prisma.SiblingEducationCountArgs<ExtArgs>
            result: $Utils.Optional<SiblingEducationCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      Setting: {
        payload: Prisma.$SettingPayload<ExtArgs>
        fields: Prisma.SettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          findFirst: {
            args: Prisma.SettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          findMany: {
            args: Prisma.SettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>[]
          }
          create: {
            args: Prisma.SettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          createMany: {
            args: Prisma.SettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          update: {
            args: Prisma.SettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          deleteMany: {
            args: Prisma.SettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          aggregate: {
            args: Prisma.SettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSetting>
          }
          groupBy: {
            args: Prisma.SettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<SettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.SettingCountArgs<ExtArgs>
            result: $Utils.Optional<SettingCountAggregateOutputType> | number
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
    user?: UserOmit
    student?: StudentOmit
    scholarshipProvider?: ScholarshipProviderOmit
    scholarship?: ScholarshipOmit
    eligibilityCriteria?: EligibilityCriteriaOmit
    application?: ApplicationOmit
    document?: DocumentOmit
    familyMember?: FamilyMemberOmit
    otherFunding?: OtherFundingOmit
    committeeReview?: CommitteeReviewOmit
    payment?: PaymentOmit
    siblingEducation?: SiblingEducationOmit
    notification?: NotificationOmit
    setting?: SettingOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    reviews: number
    notifications: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommitteeReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    applications: number
    familyMembers: number
    otherFunding: number
    siblingEducation: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | StudentCountOutputTypeCountApplicationsArgs
    familyMembers?: boolean | StudentCountOutputTypeCountFamilyMembersArgs
    otherFunding?: boolean | StudentCountOutputTypeCountOtherFundingArgs
    siblingEducation?: boolean | StudentCountOutputTypeCountSiblingEducationArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountFamilyMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FamilyMemberWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountOtherFundingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OtherFundingWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountSiblingEducationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiblingEducationWhereInput
  }


  /**
   * Count Type ScholarshipProviderCountOutputType
   */

  export type ScholarshipProviderCountOutputType = {
    scholarships: number
  }

  export type ScholarshipProviderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scholarships?: boolean | ScholarshipProviderCountOutputTypeCountScholarshipsArgs
  }

  // Custom InputTypes
  /**
   * ScholarshipProviderCountOutputType without action
   */
  export type ScholarshipProviderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScholarshipProviderCountOutputType
     */
    select?: ScholarshipProviderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ScholarshipProviderCountOutputType without action
   */
  export type ScholarshipProviderCountOutputTypeCountScholarshipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScholarshipWhereInput
  }


  /**
   * Count Type ScholarshipCountOutputType
   */

  export type ScholarshipCountOutputType = {
    criteria: number
    applications: number
  }

  export type ScholarshipCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    criteria?: boolean | ScholarshipCountOutputTypeCountCriteriaArgs
    applications?: boolean | ScholarshipCountOutputTypeCountApplicationsArgs
  }

  // Custom InputTypes
  /**
   * ScholarshipCountOutputType without action
   */
  export type ScholarshipCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScholarshipCountOutputType
     */
    select?: ScholarshipCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ScholarshipCountOutputType without action
   */
  export type ScholarshipCountOutputTypeCountCriteriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EligibilityCriteriaWhereInput
  }

  /**
   * ScholarshipCountOutputType without action
   */
  export type ScholarshipCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
  }


  /**
   * Count Type ApplicationCountOutputType
   */

  export type ApplicationCountOutputType = {
    documents: number
    reviews: number
    payments: number
  }

  export type ApplicationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | ApplicationCountOutputTypeCountDocumentsArgs
    reviews?: boolean | ApplicationCountOutputTypeCountReviewsArgs
    payments?: boolean | ApplicationCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * ApplicationCountOutputType without action
   */
  export type ApplicationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationCountOutputType
     */
    select?: ApplicationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ApplicationCountOutputType without action
   */
  export type ApplicationCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
  }

  /**
   * ApplicationCountOutputType without action
   */
  export type ApplicationCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommitteeReviewWhereInput
  }

  /**
   * ApplicationCountOutputType without action
   */
  export type ApplicationCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Count Type FamilyMemberCountOutputType
   */

  export type FamilyMemberCountOutputType = {
    siblingEducation: number
  }

  export type FamilyMemberCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    siblingEducation?: boolean | FamilyMemberCountOutputTypeCountSiblingEducationArgs
  }

  // Custom InputTypes
  /**
   * FamilyMemberCountOutputType without action
   */
  export type FamilyMemberCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyMemberCountOutputType
     */
    select?: FamilyMemberCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FamilyMemberCountOutputType without action
   */
  export type FamilyMemberCountOutputTypeCountSiblingEducationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiblingEducationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    user_id: number | null
  }

  export type UserSumAggregateOutputType = {
    user_id: number | null
  }

  export type UserMinAggregateOutputType = {
    user_id: number | null
    first_name: string | null
    last_name: string | null
    email: string | null
    username: string | null
    password: string | null
    role: $Enums.Role | null
    created_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    user_id: number | null
    first_name: string | null
    last_name: string | null
    email: string | null
    username: string | null
    password: string | null
    role: $Enums.Role | null
    created_at: Date | null
  }

  export type UserCountAggregateOutputType = {
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


  export type UserAvgAggregateInputType = {
    user_id?: true
  }

  export type UserSumAggregateInputType = {
    user_id?: true
  }

  export type UserMinAggregateInputType = {
    user_id?: true
    first_name?: true
    last_name?: true
    email?: true
    username?: true
    password?: true
    role?: true
    created_at?: true
  }

  export type UserMaxAggregateInputType = {
    user_id?: true
    first_name?: true
    last_name?: true
    email?: true
    username?: true
    password?: true
    role?: true
    created_at?: true
  }

  export type UserCountAggregateInputType = {
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

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    user_id: number
    first_name: string
    last_name: string
    email: string
    username: string
    password: string
    role: $Enums.Role
    created_at: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    created_at?: boolean
    student?: boolean | User$studentArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    user_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    created_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "first_name" | "last_name" | "email" | "username" | "password" | "role" | "created_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | User$studentArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs> | null
      reviews: Prisma.$CommitteeReviewPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      first_name: string
      last_name: string
      email: string
      username: string
      password: string
      role: $Enums.Role
      created_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const userWithUser_idOnly = await prisma.user.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends User$studentArgs<ExtArgs> = {}>(args?: Subset<T, User$studentArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommitteeReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly user_id: FieldRef<"User", 'Int'>
    readonly first_name: FieldRef<"User", 'String'>
    readonly last_name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly created_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.student
   */
  export type User$studentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
  }

  /**
   * User.reviews
   */
  export type User$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommitteeReview
     */
    select?: CommitteeReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommitteeReview
     */
    omit?: CommitteeReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitteeReviewInclude<ExtArgs> | null
    where?: CommitteeReviewWhereInput
    orderBy?: CommitteeReviewOrderByWithRelationInput | CommitteeReviewOrderByWithRelationInput[]
    cursor?: CommitteeReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommitteeReviewScalarFieldEnum | CommitteeReviewScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    student_id: number | null
    user_id: number | null
    year_of_study: number | null
    unmarried_siblings: number | null
  }

  export type StudentSumAggregateOutputType = {
    student_id: number | null
    user_id: number | null
    year_of_study: number | null
    unmarried_siblings: number | null
  }

  export type StudentMinAggregateOutputType = {
    student_id: number | null
    user_id: number | null
    full_name: string | null
    registration_no: string | null
    date_of_birth: Date | null
    permanent_address: string | null
    admission_date: Date | null
    year_of_study: number | null
    gender: $Enums.Gender | null
    phone_number: string | null
    email: string | null
    school_name: string | null
    unmarried_siblings: number | null
  }

  export type StudentMaxAggregateOutputType = {
    student_id: number | null
    user_id: number | null
    full_name: string | null
    registration_no: string | null
    date_of_birth: Date | null
    permanent_address: string | null
    admission_date: Date | null
    year_of_study: number | null
    gender: $Enums.Gender | null
    phone_number: string | null
    email: string | null
    school_name: string | null
    unmarried_siblings: number | null
  }

  export type StudentCountAggregateOutputType = {
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


  export type StudentAvgAggregateInputType = {
    student_id?: true
    user_id?: true
    year_of_study?: true
    unmarried_siblings?: true
  }

  export type StudentSumAggregateInputType = {
    student_id?: true
    user_id?: true
    year_of_study?: true
    unmarried_siblings?: true
  }

  export type StudentMinAggregateInputType = {
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

  export type StudentMaxAggregateInputType = {
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

  export type StudentCountAggregateInputType = {
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

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    student_id: number
    user_id: number
    full_name: string
    registration_no: string
    date_of_birth: Date
    permanent_address: string
    admission_date: Date
    year_of_study: number
    gender: $Enums.Gender
    phone_number: string
    email: string
    school_name: string
    unmarried_siblings: number
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
    user?: boolean | UserDefaultArgs<ExtArgs>
    applications?: boolean | Student$applicationsArgs<ExtArgs>
    familyMembers?: boolean | Student$familyMembersArgs<ExtArgs>
    otherFunding?: boolean | Student$otherFundingArgs<ExtArgs>
    siblingEducation?: boolean | Student$siblingEducationArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>



  export type StudentSelectScalar = {
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

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"student_id" | "user_id" | "full_name" | "registration_no" | "date_of_birth" | "permanent_address" | "admission_date" | "year_of_study" | "gender" | "phone_number" | "email" | "school_name" | "unmarried_siblings", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    applications?: boolean | Student$applicationsArgs<ExtArgs>
    familyMembers?: boolean | Student$familyMembersArgs<ExtArgs>
    otherFunding?: boolean | Student$otherFundingArgs<ExtArgs>
    siblingEducation?: boolean | Student$siblingEducationArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      applications: Prisma.$ApplicationPayload<ExtArgs>[]
      familyMembers: Prisma.$FamilyMemberPayload<ExtArgs>[]
      otherFunding: Prisma.$OtherFundingPayload<ExtArgs>[]
      siblingEducation: Prisma.$SiblingEducationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      student_id: number
      user_id: number
      full_name: string
      registration_no: string
      date_of_birth: Date
      permanent_address: string
      admission_date: Date
      year_of_study: number
      gender: $Enums.Gender
      phone_number: string
      email: string
      school_name: string
      unmarried_siblings: number
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `student_id`
     * const studentWithStudent_idOnly = await prisma.student.findMany({ select: { student_id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
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
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    applications<T extends Student$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, Student$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    familyMembers<T extends Student$familyMembersArgs<ExtArgs> = {}>(args?: Subset<T, Student$familyMembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FamilyMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    otherFunding<T extends Student$otherFundingArgs<ExtArgs> = {}>(args?: Subset<T, Student$otherFundingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtherFundingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    siblingEducation<T extends Student$siblingEducationArgs<ExtArgs> = {}>(args?: Subset<T, Student$siblingEducationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiblingEducationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly student_id: FieldRef<"Student", 'Int'>
    readonly user_id: FieldRef<"Student", 'Int'>
    readonly full_name: FieldRef<"Student", 'String'>
    readonly registration_no: FieldRef<"Student", 'String'>
    readonly date_of_birth: FieldRef<"Student", 'DateTime'>
    readonly permanent_address: FieldRef<"Student", 'String'>
    readonly admission_date: FieldRef<"Student", 'DateTime'>
    readonly year_of_study: FieldRef<"Student", 'Int'>
    readonly gender: FieldRef<"Student", 'Gender'>
    readonly phone_number: FieldRef<"Student", 'String'>
    readonly email: FieldRef<"Student", 'String'>
    readonly school_name: FieldRef<"Student", 'String'>
    readonly unmarried_siblings: FieldRef<"Student", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student.applications
   */
  export type Student$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    cursor?: ApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Student.familyMembers
   */
  export type Student$familyMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyMember
     */
    select?: FamilyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FamilyMember
     */
    omit?: FamilyMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyMemberInclude<ExtArgs> | null
    where?: FamilyMemberWhereInput
    orderBy?: FamilyMemberOrderByWithRelationInput | FamilyMemberOrderByWithRelationInput[]
    cursor?: FamilyMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FamilyMemberScalarFieldEnum | FamilyMemberScalarFieldEnum[]
  }

  /**
   * Student.otherFunding
   */
  export type Student$otherFundingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherFunding
     */
    select?: OtherFundingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherFunding
     */
    omit?: OtherFundingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherFundingInclude<ExtArgs> | null
    where?: OtherFundingWhereInput
    orderBy?: OtherFundingOrderByWithRelationInput | OtherFundingOrderByWithRelationInput[]
    cursor?: OtherFundingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OtherFundingScalarFieldEnum | OtherFundingScalarFieldEnum[]
  }

  /**
   * Student.siblingEducation
   */
  export type Student$siblingEducationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiblingEducation
     */
    select?: SiblingEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiblingEducation
     */
    omit?: SiblingEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiblingEducationInclude<ExtArgs> | null
    where?: SiblingEducationWhereInput
    orderBy?: SiblingEducationOrderByWithRelationInput | SiblingEducationOrderByWithRelationInput[]
    cursor?: SiblingEducationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SiblingEducationScalarFieldEnum | SiblingEducationScalarFieldEnum[]
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model ScholarshipProvider
   */

  export type AggregateScholarshipProvider = {
    _count: ScholarshipProviderCountAggregateOutputType | null
    _avg: ScholarshipProviderAvgAggregateOutputType | null
    _sum: ScholarshipProviderSumAggregateOutputType | null
    _min: ScholarshipProviderMinAggregateOutputType | null
    _max: ScholarshipProviderMaxAggregateOutputType | null
  }

  export type ScholarshipProviderAvgAggregateOutputType = {
    provider_id: number | null
  }

  export type ScholarshipProviderSumAggregateOutputType = {
    provider_id: number | null
  }

  export type ScholarshipProviderMinAggregateOutputType = {
    provider_id: number | null
    name: string | null
    contact_person: string | null
    phone: string | null
    email: string | null
    address: string | null
  }

  export type ScholarshipProviderMaxAggregateOutputType = {
    provider_id: number | null
    name: string | null
    contact_person: string | null
    phone: string | null
    email: string | null
    address: string | null
  }

  export type ScholarshipProviderCountAggregateOutputType = {
    provider_id: number
    name: number
    contact_person: number
    phone: number
    email: number
    address: number
    _all: number
  }


  export type ScholarshipProviderAvgAggregateInputType = {
    provider_id?: true
  }

  export type ScholarshipProviderSumAggregateInputType = {
    provider_id?: true
  }

  export type ScholarshipProviderMinAggregateInputType = {
    provider_id?: true
    name?: true
    contact_person?: true
    phone?: true
    email?: true
    address?: true
  }

  export type ScholarshipProviderMaxAggregateInputType = {
    provider_id?: true
    name?: true
    contact_person?: true
    phone?: true
    email?: true
    address?: true
  }

  export type ScholarshipProviderCountAggregateInputType = {
    provider_id?: true
    name?: true
    contact_person?: true
    phone?: true
    email?: true
    address?: true
    _all?: true
  }

  export type ScholarshipProviderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScholarshipProvider to aggregate.
     */
    where?: ScholarshipProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScholarshipProviders to fetch.
     */
    orderBy?: ScholarshipProviderOrderByWithRelationInput | ScholarshipProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScholarshipProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScholarshipProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScholarshipProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScholarshipProviders
    **/
    _count?: true | ScholarshipProviderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScholarshipProviderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScholarshipProviderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScholarshipProviderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScholarshipProviderMaxAggregateInputType
  }

  export type GetScholarshipProviderAggregateType<T extends ScholarshipProviderAggregateArgs> = {
        [P in keyof T & keyof AggregateScholarshipProvider]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScholarshipProvider[P]>
      : GetScalarType<T[P], AggregateScholarshipProvider[P]>
  }




  export type ScholarshipProviderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScholarshipProviderWhereInput
    orderBy?: ScholarshipProviderOrderByWithAggregationInput | ScholarshipProviderOrderByWithAggregationInput[]
    by: ScholarshipProviderScalarFieldEnum[] | ScholarshipProviderScalarFieldEnum
    having?: ScholarshipProviderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScholarshipProviderCountAggregateInputType | true
    _avg?: ScholarshipProviderAvgAggregateInputType
    _sum?: ScholarshipProviderSumAggregateInputType
    _min?: ScholarshipProviderMinAggregateInputType
    _max?: ScholarshipProviderMaxAggregateInputType
  }

  export type ScholarshipProviderGroupByOutputType = {
    provider_id: number
    name: string
    contact_person: string
    phone: string
    email: string
    address: string
    _count: ScholarshipProviderCountAggregateOutputType | null
    _avg: ScholarshipProviderAvgAggregateOutputType | null
    _sum: ScholarshipProviderSumAggregateOutputType | null
    _min: ScholarshipProviderMinAggregateOutputType | null
    _max: ScholarshipProviderMaxAggregateOutputType | null
  }

  type GetScholarshipProviderGroupByPayload<T extends ScholarshipProviderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScholarshipProviderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScholarshipProviderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScholarshipProviderGroupByOutputType[P]>
            : GetScalarType<T[P], ScholarshipProviderGroupByOutputType[P]>
        }
      >
    >


  export type ScholarshipProviderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    provider_id?: boolean
    name?: boolean
    contact_person?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    scholarships?: boolean | ScholarshipProvider$scholarshipsArgs<ExtArgs>
    _count?: boolean | ScholarshipProviderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scholarshipProvider"]>



  export type ScholarshipProviderSelectScalar = {
    provider_id?: boolean
    name?: boolean
    contact_person?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
  }

  export type ScholarshipProviderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"provider_id" | "name" | "contact_person" | "phone" | "email" | "address", ExtArgs["result"]["scholarshipProvider"]>
  export type ScholarshipProviderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scholarships?: boolean | ScholarshipProvider$scholarshipsArgs<ExtArgs>
    _count?: boolean | ScholarshipProviderCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ScholarshipProviderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScholarshipProvider"
    objects: {
      scholarships: Prisma.$ScholarshipPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      provider_id: number
      name: string
      contact_person: string
      phone: string
      email: string
      address: string
    }, ExtArgs["result"]["scholarshipProvider"]>
    composites: {}
  }

  type ScholarshipProviderGetPayload<S extends boolean | null | undefined | ScholarshipProviderDefaultArgs> = $Result.GetResult<Prisma.$ScholarshipProviderPayload, S>

  type ScholarshipProviderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScholarshipProviderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScholarshipProviderCountAggregateInputType | true
    }

  export interface ScholarshipProviderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScholarshipProvider'], meta: { name: 'ScholarshipProvider' } }
    /**
     * Find zero or one ScholarshipProvider that matches the filter.
     * @param {ScholarshipProviderFindUniqueArgs} args - Arguments to find a ScholarshipProvider
     * @example
     * // Get one ScholarshipProvider
     * const scholarshipProvider = await prisma.scholarshipProvider.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScholarshipProviderFindUniqueArgs>(args: SelectSubset<T, ScholarshipProviderFindUniqueArgs<ExtArgs>>): Prisma__ScholarshipProviderClient<$Result.GetResult<Prisma.$ScholarshipProviderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ScholarshipProvider that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScholarshipProviderFindUniqueOrThrowArgs} args - Arguments to find a ScholarshipProvider
     * @example
     * // Get one ScholarshipProvider
     * const scholarshipProvider = await prisma.scholarshipProvider.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScholarshipProviderFindUniqueOrThrowArgs>(args: SelectSubset<T, ScholarshipProviderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScholarshipProviderClient<$Result.GetResult<Prisma.$ScholarshipProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScholarshipProvider that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScholarshipProviderFindFirstArgs} args - Arguments to find a ScholarshipProvider
     * @example
     * // Get one ScholarshipProvider
     * const scholarshipProvider = await prisma.scholarshipProvider.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScholarshipProviderFindFirstArgs>(args?: SelectSubset<T, ScholarshipProviderFindFirstArgs<ExtArgs>>): Prisma__ScholarshipProviderClient<$Result.GetResult<Prisma.$ScholarshipProviderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScholarshipProvider that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScholarshipProviderFindFirstOrThrowArgs} args - Arguments to find a ScholarshipProvider
     * @example
     * // Get one ScholarshipProvider
     * const scholarshipProvider = await prisma.scholarshipProvider.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScholarshipProviderFindFirstOrThrowArgs>(args?: SelectSubset<T, ScholarshipProviderFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScholarshipProviderClient<$Result.GetResult<Prisma.$ScholarshipProviderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ScholarshipProviders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScholarshipProviderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScholarshipProviders
     * const scholarshipProviders = await prisma.scholarshipProvider.findMany()
     * 
     * // Get first 10 ScholarshipProviders
     * const scholarshipProviders = await prisma.scholarshipProvider.findMany({ take: 10 })
     * 
     * // Only select the `provider_id`
     * const scholarshipProviderWithProvider_idOnly = await prisma.scholarshipProvider.findMany({ select: { provider_id: true } })
     * 
     */
    findMany<T extends ScholarshipProviderFindManyArgs>(args?: SelectSubset<T, ScholarshipProviderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScholarshipProviderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ScholarshipProvider.
     * @param {ScholarshipProviderCreateArgs} args - Arguments to create a ScholarshipProvider.
     * @example
     * // Create one ScholarshipProvider
     * const ScholarshipProvider = await prisma.scholarshipProvider.create({
     *   data: {
     *     // ... data to create a ScholarshipProvider
     *   }
     * })
     * 
     */
    create<T extends ScholarshipProviderCreateArgs>(args: SelectSubset<T, ScholarshipProviderCreateArgs<ExtArgs>>): Prisma__ScholarshipProviderClient<$Result.GetResult<Prisma.$ScholarshipProviderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ScholarshipProviders.
     * @param {ScholarshipProviderCreateManyArgs} args - Arguments to create many ScholarshipProviders.
     * @example
     * // Create many ScholarshipProviders
     * const scholarshipProvider = await prisma.scholarshipProvider.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScholarshipProviderCreateManyArgs>(args?: SelectSubset<T, ScholarshipProviderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ScholarshipProvider.
     * @param {ScholarshipProviderDeleteArgs} args - Arguments to delete one ScholarshipProvider.
     * @example
     * // Delete one ScholarshipProvider
     * const ScholarshipProvider = await prisma.scholarshipProvider.delete({
     *   where: {
     *     // ... filter to delete one ScholarshipProvider
     *   }
     * })
     * 
     */
    delete<T extends ScholarshipProviderDeleteArgs>(args: SelectSubset<T, ScholarshipProviderDeleteArgs<ExtArgs>>): Prisma__ScholarshipProviderClient<$Result.GetResult<Prisma.$ScholarshipProviderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ScholarshipProvider.
     * @param {ScholarshipProviderUpdateArgs} args - Arguments to update one ScholarshipProvider.
     * @example
     * // Update one ScholarshipProvider
     * const scholarshipProvider = await prisma.scholarshipProvider.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScholarshipProviderUpdateArgs>(args: SelectSubset<T, ScholarshipProviderUpdateArgs<ExtArgs>>): Prisma__ScholarshipProviderClient<$Result.GetResult<Prisma.$ScholarshipProviderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ScholarshipProviders.
     * @param {ScholarshipProviderDeleteManyArgs} args - Arguments to filter ScholarshipProviders to delete.
     * @example
     * // Delete a few ScholarshipProviders
     * const { count } = await prisma.scholarshipProvider.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScholarshipProviderDeleteManyArgs>(args?: SelectSubset<T, ScholarshipProviderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScholarshipProviders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScholarshipProviderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScholarshipProviders
     * const scholarshipProvider = await prisma.scholarshipProvider.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScholarshipProviderUpdateManyArgs>(args: SelectSubset<T, ScholarshipProviderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ScholarshipProvider.
     * @param {ScholarshipProviderUpsertArgs} args - Arguments to update or create a ScholarshipProvider.
     * @example
     * // Update or create a ScholarshipProvider
     * const scholarshipProvider = await prisma.scholarshipProvider.upsert({
     *   create: {
     *     // ... data to create a ScholarshipProvider
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScholarshipProvider we want to update
     *   }
     * })
     */
    upsert<T extends ScholarshipProviderUpsertArgs>(args: SelectSubset<T, ScholarshipProviderUpsertArgs<ExtArgs>>): Prisma__ScholarshipProviderClient<$Result.GetResult<Prisma.$ScholarshipProviderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ScholarshipProviders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScholarshipProviderCountArgs} args - Arguments to filter ScholarshipProviders to count.
     * @example
     * // Count the number of ScholarshipProviders
     * const count = await prisma.scholarshipProvider.count({
     *   where: {
     *     // ... the filter for the ScholarshipProviders we want to count
     *   }
     * })
    **/
    count<T extends ScholarshipProviderCountArgs>(
      args?: Subset<T, ScholarshipProviderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScholarshipProviderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScholarshipProvider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScholarshipProviderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScholarshipProviderAggregateArgs>(args: Subset<T, ScholarshipProviderAggregateArgs>): Prisma.PrismaPromise<GetScholarshipProviderAggregateType<T>>

    /**
     * Group by ScholarshipProvider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScholarshipProviderGroupByArgs} args - Group by arguments.
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
      T extends ScholarshipProviderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScholarshipProviderGroupByArgs['orderBy'] }
        : { orderBy?: ScholarshipProviderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ScholarshipProviderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScholarshipProviderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScholarshipProvider model
   */
  readonly fields: ScholarshipProviderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScholarshipProvider.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScholarshipProviderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    scholarships<T extends ScholarshipProvider$scholarshipsArgs<ExtArgs> = {}>(args?: Subset<T, ScholarshipProvider$scholarshipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScholarshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ScholarshipProvider model
   */
  interface ScholarshipProviderFieldRefs {
    readonly provider_id: FieldRef<"ScholarshipProvider", 'Int'>
    readonly name: FieldRef<"ScholarshipProvider", 'String'>
    readonly contact_person: FieldRef<"ScholarshipProvider", 'String'>
    readonly phone: FieldRef<"ScholarshipProvider", 'String'>
    readonly email: FieldRef<"ScholarshipProvider", 'String'>
    readonly address: FieldRef<"ScholarshipProvider", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ScholarshipProvider findUnique
   */
  export type ScholarshipProviderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScholarshipProvider
     */
    select?: ScholarshipProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScholarshipProvider
     */
    omit?: ScholarshipProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScholarshipProviderInclude<ExtArgs> | null
    /**
     * Filter, which ScholarshipProvider to fetch.
     */
    where: ScholarshipProviderWhereUniqueInput
  }

  /**
   * ScholarshipProvider findUniqueOrThrow
   */
  export type ScholarshipProviderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScholarshipProvider
     */
    select?: ScholarshipProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScholarshipProvider
     */
    omit?: ScholarshipProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScholarshipProviderInclude<ExtArgs> | null
    /**
     * Filter, which ScholarshipProvider to fetch.
     */
    where: ScholarshipProviderWhereUniqueInput
  }

  /**
   * ScholarshipProvider findFirst
   */
  export type ScholarshipProviderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScholarshipProvider
     */
    select?: ScholarshipProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScholarshipProvider
     */
    omit?: ScholarshipProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScholarshipProviderInclude<ExtArgs> | null
    /**
     * Filter, which ScholarshipProvider to fetch.
     */
    where?: ScholarshipProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScholarshipProviders to fetch.
     */
    orderBy?: ScholarshipProviderOrderByWithRelationInput | ScholarshipProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScholarshipProviders.
     */
    cursor?: ScholarshipProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScholarshipProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScholarshipProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScholarshipProviders.
     */
    distinct?: ScholarshipProviderScalarFieldEnum | ScholarshipProviderScalarFieldEnum[]
  }

  /**
   * ScholarshipProvider findFirstOrThrow
   */
  export type ScholarshipProviderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScholarshipProvider
     */
    select?: ScholarshipProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScholarshipProvider
     */
    omit?: ScholarshipProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScholarshipProviderInclude<ExtArgs> | null
    /**
     * Filter, which ScholarshipProvider to fetch.
     */
    where?: ScholarshipProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScholarshipProviders to fetch.
     */
    orderBy?: ScholarshipProviderOrderByWithRelationInput | ScholarshipProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScholarshipProviders.
     */
    cursor?: ScholarshipProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScholarshipProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScholarshipProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScholarshipProviders.
     */
    distinct?: ScholarshipProviderScalarFieldEnum | ScholarshipProviderScalarFieldEnum[]
  }

  /**
   * ScholarshipProvider findMany
   */
  export type ScholarshipProviderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScholarshipProvider
     */
    select?: ScholarshipProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScholarshipProvider
     */
    omit?: ScholarshipProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScholarshipProviderInclude<ExtArgs> | null
    /**
     * Filter, which ScholarshipProviders to fetch.
     */
    where?: ScholarshipProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScholarshipProviders to fetch.
     */
    orderBy?: ScholarshipProviderOrderByWithRelationInput | ScholarshipProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScholarshipProviders.
     */
    cursor?: ScholarshipProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScholarshipProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScholarshipProviders.
     */
    skip?: number
    distinct?: ScholarshipProviderScalarFieldEnum | ScholarshipProviderScalarFieldEnum[]
  }

  /**
   * ScholarshipProvider create
   */
  export type ScholarshipProviderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScholarshipProvider
     */
    select?: ScholarshipProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScholarshipProvider
     */
    omit?: ScholarshipProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScholarshipProviderInclude<ExtArgs> | null
    /**
     * The data needed to create a ScholarshipProvider.
     */
    data: XOR<ScholarshipProviderCreateInput, ScholarshipProviderUncheckedCreateInput>
  }

  /**
   * ScholarshipProvider createMany
   */
  export type ScholarshipProviderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScholarshipProviders.
     */
    data: ScholarshipProviderCreateManyInput | ScholarshipProviderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScholarshipProvider update
   */
  export type ScholarshipProviderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScholarshipProvider
     */
    select?: ScholarshipProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScholarshipProvider
     */
    omit?: ScholarshipProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScholarshipProviderInclude<ExtArgs> | null
    /**
     * The data needed to update a ScholarshipProvider.
     */
    data: XOR<ScholarshipProviderUpdateInput, ScholarshipProviderUncheckedUpdateInput>
    /**
     * Choose, which ScholarshipProvider to update.
     */
    where: ScholarshipProviderWhereUniqueInput
  }

  /**
   * ScholarshipProvider updateMany
   */
  export type ScholarshipProviderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScholarshipProviders.
     */
    data: XOR<ScholarshipProviderUpdateManyMutationInput, ScholarshipProviderUncheckedUpdateManyInput>
    /**
     * Filter which ScholarshipProviders to update
     */
    where?: ScholarshipProviderWhereInput
    /**
     * Limit how many ScholarshipProviders to update.
     */
    limit?: number
  }

  /**
   * ScholarshipProvider upsert
   */
  export type ScholarshipProviderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScholarshipProvider
     */
    select?: ScholarshipProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScholarshipProvider
     */
    omit?: ScholarshipProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScholarshipProviderInclude<ExtArgs> | null
    /**
     * The filter to search for the ScholarshipProvider to update in case it exists.
     */
    where: ScholarshipProviderWhereUniqueInput
    /**
     * In case the ScholarshipProvider found by the `where` argument doesn't exist, create a new ScholarshipProvider with this data.
     */
    create: XOR<ScholarshipProviderCreateInput, ScholarshipProviderUncheckedCreateInput>
    /**
     * In case the ScholarshipProvider was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScholarshipProviderUpdateInput, ScholarshipProviderUncheckedUpdateInput>
  }

  /**
   * ScholarshipProvider delete
   */
  export type ScholarshipProviderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScholarshipProvider
     */
    select?: ScholarshipProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScholarshipProvider
     */
    omit?: ScholarshipProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScholarshipProviderInclude<ExtArgs> | null
    /**
     * Filter which ScholarshipProvider to delete.
     */
    where: ScholarshipProviderWhereUniqueInput
  }

  /**
   * ScholarshipProvider deleteMany
   */
  export type ScholarshipProviderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScholarshipProviders to delete
     */
    where?: ScholarshipProviderWhereInput
    /**
     * Limit how many ScholarshipProviders to delete.
     */
    limit?: number
  }

  /**
   * ScholarshipProvider.scholarships
   */
  export type ScholarshipProvider$scholarshipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scholarship
     */
    select?: ScholarshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scholarship
     */
    omit?: ScholarshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScholarshipInclude<ExtArgs> | null
    where?: ScholarshipWhereInput
    orderBy?: ScholarshipOrderByWithRelationInput | ScholarshipOrderByWithRelationInput[]
    cursor?: ScholarshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScholarshipScalarFieldEnum | ScholarshipScalarFieldEnum[]
  }

  /**
   * ScholarshipProvider without action
   */
  export type ScholarshipProviderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScholarshipProvider
     */
    select?: ScholarshipProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScholarshipProvider
     */
    omit?: ScholarshipProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScholarshipProviderInclude<ExtArgs> | null
  }


  /**
   * Model Scholarship
   */

  export type AggregateScholarship = {
    _count: ScholarshipCountAggregateOutputType | null
    _avg: ScholarshipAvgAggregateOutputType | null
    _sum: ScholarshipSumAggregateOutputType | null
    _min: ScholarshipMinAggregateOutputType | null
    _max: ScholarshipMaxAggregateOutputType | null
  }

  export type ScholarshipAvgAggregateOutputType = {
    scholarship_id: number | null
    amount: Decimal | null
    no_of_students: number | null
    provider_id: number | null
  }

  export type ScholarshipSumAggregateOutputType = {
    scholarship_id: number | null
    amount: Decimal | null
    no_of_students: number | null
    provider_id: number | null
  }

  export type ScholarshipMinAggregateOutputType = {
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

  export type ScholarshipMaxAggregateOutputType = {
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

  export type ScholarshipCountAggregateOutputType = {
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


  export type ScholarshipAvgAggregateInputType = {
    scholarship_id?: true
    amount?: true
    no_of_students?: true
    provider_id?: true
  }

  export type ScholarshipSumAggregateInputType = {
    scholarship_id?: true
    amount?: true
    no_of_students?: true
    provider_id?: true
  }

  export type ScholarshipMinAggregateInputType = {
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

  export type ScholarshipMaxAggregateInputType = {
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

  export type ScholarshipCountAggregateInputType = {
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

  export type ScholarshipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Scholarship to aggregate.
     */
    where?: ScholarshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scholarships to fetch.
     */
    orderBy?: ScholarshipOrderByWithRelationInput | ScholarshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScholarshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scholarships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scholarships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Scholarships
    **/
    _count?: true | ScholarshipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScholarshipAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScholarshipSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScholarshipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScholarshipMaxAggregateInputType
  }

  export type GetScholarshipAggregateType<T extends ScholarshipAggregateArgs> = {
        [P in keyof T & keyof AggregateScholarship]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScholarship[P]>
      : GetScalarType<T[P], AggregateScholarship[P]>
  }




  export type ScholarshipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScholarshipWhereInput
    orderBy?: ScholarshipOrderByWithAggregationInput | ScholarshipOrderByWithAggregationInput[]
    by: ScholarshipScalarFieldEnum[] | ScholarshipScalarFieldEnum
    having?: ScholarshipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScholarshipCountAggregateInputType | true
    _avg?: ScholarshipAvgAggregateInputType
    _sum?: ScholarshipSumAggregateInputType
    _min?: ScholarshipMinAggregateInputType
    _max?: ScholarshipMaxAggregateInputType
  }

  export type ScholarshipGroupByOutputType = {
    scholarship_id: number
    name: string
    description: string
    amount: Decimal
    no_of_students: number
    application_deadline: Date
    start_date: Date
    end_date: Date
    provider_id: number
    is_active: boolean
    _count: ScholarshipCountAggregateOutputType | null
    _avg: ScholarshipAvgAggregateOutputType | null
    _sum: ScholarshipSumAggregateOutputType | null
    _min: ScholarshipMinAggregateOutputType | null
    _max: ScholarshipMaxAggregateOutputType | null
  }

  type GetScholarshipGroupByPayload<T extends ScholarshipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScholarshipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScholarshipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScholarshipGroupByOutputType[P]>
            : GetScalarType<T[P], ScholarshipGroupByOutputType[P]>
        }
      >
    >


  export type ScholarshipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
    provider?: boolean | ScholarshipProviderDefaultArgs<ExtArgs>
    criteria?: boolean | Scholarship$criteriaArgs<ExtArgs>
    applications?: boolean | Scholarship$applicationsArgs<ExtArgs>
    _count?: boolean | ScholarshipCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scholarship"]>



  export type ScholarshipSelectScalar = {
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

  export type ScholarshipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"scholarship_id" | "name" | "description" | "amount" | "no_of_students" | "application_deadline" | "start_date" | "end_date" | "provider_id" | "is_active", ExtArgs["result"]["scholarship"]>
  export type ScholarshipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | ScholarshipProviderDefaultArgs<ExtArgs>
    criteria?: boolean | Scholarship$criteriaArgs<ExtArgs>
    applications?: boolean | Scholarship$applicationsArgs<ExtArgs>
    _count?: boolean | ScholarshipCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ScholarshipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Scholarship"
    objects: {
      provider: Prisma.$ScholarshipProviderPayload<ExtArgs>
      criteria: Prisma.$EligibilityCriteriaPayload<ExtArgs>[]
      applications: Prisma.$ApplicationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      scholarship_id: number
      name: string
      description: string
      amount: Prisma.Decimal
      no_of_students: number
      application_deadline: Date
      start_date: Date
      end_date: Date
      provider_id: number
      is_active: boolean
    }, ExtArgs["result"]["scholarship"]>
    composites: {}
  }

  type ScholarshipGetPayload<S extends boolean | null | undefined | ScholarshipDefaultArgs> = $Result.GetResult<Prisma.$ScholarshipPayload, S>

  type ScholarshipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScholarshipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScholarshipCountAggregateInputType | true
    }

  export interface ScholarshipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Scholarship'], meta: { name: 'Scholarship' } }
    /**
     * Find zero or one Scholarship that matches the filter.
     * @param {ScholarshipFindUniqueArgs} args - Arguments to find a Scholarship
     * @example
     * // Get one Scholarship
     * const scholarship = await prisma.scholarship.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScholarshipFindUniqueArgs>(args: SelectSubset<T, ScholarshipFindUniqueArgs<ExtArgs>>): Prisma__ScholarshipClient<$Result.GetResult<Prisma.$ScholarshipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Scholarship that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScholarshipFindUniqueOrThrowArgs} args - Arguments to find a Scholarship
     * @example
     * // Get one Scholarship
     * const scholarship = await prisma.scholarship.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScholarshipFindUniqueOrThrowArgs>(args: SelectSubset<T, ScholarshipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScholarshipClient<$Result.GetResult<Prisma.$ScholarshipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Scholarship that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScholarshipFindFirstArgs} args - Arguments to find a Scholarship
     * @example
     * // Get one Scholarship
     * const scholarship = await prisma.scholarship.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScholarshipFindFirstArgs>(args?: SelectSubset<T, ScholarshipFindFirstArgs<ExtArgs>>): Prisma__ScholarshipClient<$Result.GetResult<Prisma.$ScholarshipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Scholarship that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScholarshipFindFirstOrThrowArgs} args - Arguments to find a Scholarship
     * @example
     * // Get one Scholarship
     * const scholarship = await prisma.scholarship.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScholarshipFindFirstOrThrowArgs>(args?: SelectSubset<T, ScholarshipFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScholarshipClient<$Result.GetResult<Prisma.$ScholarshipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Scholarships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScholarshipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Scholarships
     * const scholarships = await prisma.scholarship.findMany()
     * 
     * // Get first 10 Scholarships
     * const scholarships = await prisma.scholarship.findMany({ take: 10 })
     * 
     * // Only select the `scholarship_id`
     * const scholarshipWithScholarship_idOnly = await prisma.scholarship.findMany({ select: { scholarship_id: true } })
     * 
     */
    findMany<T extends ScholarshipFindManyArgs>(args?: SelectSubset<T, ScholarshipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScholarshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Scholarship.
     * @param {ScholarshipCreateArgs} args - Arguments to create a Scholarship.
     * @example
     * // Create one Scholarship
     * const Scholarship = await prisma.scholarship.create({
     *   data: {
     *     // ... data to create a Scholarship
     *   }
     * })
     * 
     */
    create<T extends ScholarshipCreateArgs>(args: SelectSubset<T, ScholarshipCreateArgs<ExtArgs>>): Prisma__ScholarshipClient<$Result.GetResult<Prisma.$ScholarshipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Scholarships.
     * @param {ScholarshipCreateManyArgs} args - Arguments to create many Scholarships.
     * @example
     * // Create many Scholarships
     * const scholarship = await prisma.scholarship.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScholarshipCreateManyArgs>(args?: SelectSubset<T, ScholarshipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Scholarship.
     * @param {ScholarshipDeleteArgs} args - Arguments to delete one Scholarship.
     * @example
     * // Delete one Scholarship
     * const Scholarship = await prisma.scholarship.delete({
     *   where: {
     *     // ... filter to delete one Scholarship
     *   }
     * })
     * 
     */
    delete<T extends ScholarshipDeleteArgs>(args: SelectSubset<T, ScholarshipDeleteArgs<ExtArgs>>): Prisma__ScholarshipClient<$Result.GetResult<Prisma.$ScholarshipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Scholarship.
     * @param {ScholarshipUpdateArgs} args - Arguments to update one Scholarship.
     * @example
     * // Update one Scholarship
     * const scholarship = await prisma.scholarship.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScholarshipUpdateArgs>(args: SelectSubset<T, ScholarshipUpdateArgs<ExtArgs>>): Prisma__ScholarshipClient<$Result.GetResult<Prisma.$ScholarshipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Scholarships.
     * @param {ScholarshipDeleteManyArgs} args - Arguments to filter Scholarships to delete.
     * @example
     * // Delete a few Scholarships
     * const { count } = await prisma.scholarship.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScholarshipDeleteManyArgs>(args?: SelectSubset<T, ScholarshipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scholarships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScholarshipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Scholarships
     * const scholarship = await prisma.scholarship.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScholarshipUpdateManyArgs>(args: SelectSubset<T, ScholarshipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Scholarship.
     * @param {ScholarshipUpsertArgs} args - Arguments to update or create a Scholarship.
     * @example
     * // Update or create a Scholarship
     * const scholarship = await prisma.scholarship.upsert({
     *   create: {
     *     // ... data to create a Scholarship
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Scholarship we want to update
     *   }
     * })
     */
    upsert<T extends ScholarshipUpsertArgs>(args: SelectSubset<T, ScholarshipUpsertArgs<ExtArgs>>): Prisma__ScholarshipClient<$Result.GetResult<Prisma.$ScholarshipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Scholarships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScholarshipCountArgs} args - Arguments to filter Scholarships to count.
     * @example
     * // Count the number of Scholarships
     * const count = await prisma.scholarship.count({
     *   where: {
     *     // ... the filter for the Scholarships we want to count
     *   }
     * })
    **/
    count<T extends ScholarshipCountArgs>(
      args?: Subset<T, ScholarshipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScholarshipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Scholarship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScholarshipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScholarshipAggregateArgs>(args: Subset<T, ScholarshipAggregateArgs>): Prisma.PrismaPromise<GetScholarshipAggregateType<T>>

    /**
     * Group by Scholarship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScholarshipGroupByArgs} args - Group by arguments.
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
      T extends ScholarshipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScholarshipGroupByArgs['orderBy'] }
        : { orderBy?: ScholarshipGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ScholarshipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScholarshipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Scholarship model
   */
  readonly fields: ScholarshipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Scholarship.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScholarshipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    provider<T extends ScholarshipProviderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScholarshipProviderDefaultArgs<ExtArgs>>): Prisma__ScholarshipProviderClient<$Result.GetResult<Prisma.$ScholarshipProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    criteria<T extends Scholarship$criteriaArgs<ExtArgs> = {}>(args?: Subset<T, Scholarship$criteriaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EligibilityCriteriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    applications<T extends Scholarship$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, Scholarship$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Scholarship model
   */
  interface ScholarshipFieldRefs {
    readonly scholarship_id: FieldRef<"Scholarship", 'Int'>
    readonly name: FieldRef<"Scholarship", 'String'>
    readonly description: FieldRef<"Scholarship", 'String'>
    readonly amount: FieldRef<"Scholarship", 'Decimal'>
    readonly no_of_students: FieldRef<"Scholarship", 'Int'>
    readonly application_deadline: FieldRef<"Scholarship", 'DateTime'>
    readonly start_date: FieldRef<"Scholarship", 'DateTime'>
    readonly end_date: FieldRef<"Scholarship", 'DateTime'>
    readonly provider_id: FieldRef<"Scholarship", 'Int'>
    readonly is_active: FieldRef<"Scholarship", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Scholarship findUnique
   */
  export type ScholarshipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scholarship
     */
    select?: ScholarshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scholarship
     */
    omit?: ScholarshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScholarshipInclude<ExtArgs> | null
    /**
     * Filter, which Scholarship to fetch.
     */
    where: ScholarshipWhereUniqueInput
  }

  /**
   * Scholarship findUniqueOrThrow
   */
  export type ScholarshipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scholarship
     */
    select?: ScholarshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scholarship
     */
    omit?: ScholarshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScholarshipInclude<ExtArgs> | null
    /**
     * Filter, which Scholarship to fetch.
     */
    where: ScholarshipWhereUniqueInput
  }

  /**
   * Scholarship findFirst
   */
  export type ScholarshipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scholarship
     */
    select?: ScholarshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scholarship
     */
    omit?: ScholarshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScholarshipInclude<ExtArgs> | null
    /**
     * Filter, which Scholarship to fetch.
     */
    where?: ScholarshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scholarships to fetch.
     */
    orderBy?: ScholarshipOrderByWithRelationInput | ScholarshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scholarships.
     */
    cursor?: ScholarshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scholarships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scholarships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scholarships.
     */
    distinct?: ScholarshipScalarFieldEnum | ScholarshipScalarFieldEnum[]
  }

  /**
   * Scholarship findFirstOrThrow
   */
  export type ScholarshipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scholarship
     */
    select?: ScholarshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scholarship
     */
    omit?: ScholarshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScholarshipInclude<ExtArgs> | null
    /**
     * Filter, which Scholarship to fetch.
     */
    where?: ScholarshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scholarships to fetch.
     */
    orderBy?: ScholarshipOrderByWithRelationInput | ScholarshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scholarships.
     */
    cursor?: ScholarshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scholarships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scholarships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scholarships.
     */
    distinct?: ScholarshipScalarFieldEnum | ScholarshipScalarFieldEnum[]
  }

  /**
   * Scholarship findMany
   */
  export type ScholarshipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scholarship
     */
    select?: ScholarshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scholarship
     */
    omit?: ScholarshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScholarshipInclude<ExtArgs> | null
    /**
     * Filter, which Scholarships to fetch.
     */
    where?: ScholarshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scholarships to fetch.
     */
    orderBy?: ScholarshipOrderByWithRelationInput | ScholarshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Scholarships.
     */
    cursor?: ScholarshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scholarships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scholarships.
     */
    skip?: number
    distinct?: ScholarshipScalarFieldEnum | ScholarshipScalarFieldEnum[]
  }

  /**
   * Scholarship create
   */
  export type ScholarshipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scholarship
     */
    select?: ScholarshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scholarship
     */
    omit?: ScholarshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScholarshipInclude<ExtArgs> | null
    /**
     * The data needed to create a Scholarship.
     */
    data: XOR<ScholarshipCreateInput, ScholarshipUncheckedCreateInput>
  }

  /**
   * Scholarship createMany
   */
  export type ScholarshipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Scholarships.
     */
    data: ScholarshipCreateManyInput | ScholarshipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Scholarship update
   */
  export type ScholarshipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scholarship
     */
    select?: ScholarshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scholarship
     */
    omit?: ScholarshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScholarshipInclude<ExtArgs> | null
    /**
     * The data needed to update a Scholarship.
     */
    data: XOR<ScholarshipUpdateInput, ScholarshipUncheckedUpdateInput>
    /**
     * Choose, which Scholarship to update.
     */
    where: ScholarshipWhereUniqueInput
  }

  /**
   * Scholarship updateMany
   */
  export type ScholarshipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Scholarships.
     */
    data: XOR<ScholarshipUpdateManyMutationInput, ScholarshipUncheckedUpdateManyInput>
    /**
     * Filter which Scholarships to update
     */
    where?: ScholarshipWhereInput
    /**
     * Limit how many Scholarships to update.
     */
    limit?: number
  }

  /**
   * Scholarship upsert
   */
  export type ScholarshipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scholarship
     */
    select?: ScholarshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scholarship
     */
    omit?: ScholarshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScholarshipInclude<ExtArgs> | null
    /**
     * The filter to search for the Scholarship to update in case it exists.
     */
    where: ScholarshipWhereUniqueInput
    /**
     * In case the Scholarship found by the `where` argument doesn't exist, create a new Scholarship with this data.
     */
    create: XOR<ScholarshipCreateInput, ScholarshipUncheckedCreateInput>
    /**
     * In case the Scholarship was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScholarshipUpdateInput, ScholarshipUncheckedUpdateInput>
  }

  /**
   * Scholarship delete
   */
  export type ScholarshipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scholarship
     */
    select?: ScholarshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scholarship
     */
    omit?: ScholarshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScholarshipInclude<ExtArgs> | null
    /**
     * Filter which Scholarship to delete.
     */
    where: ScholarshipWhereUniqueInput
  }

  /**
   * Scholarship deleteMany
   */
  export type ScholarshipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Scholarships to delete
     */
    where?: ScholarshipWhereInput
    /**
     * Limit how many Scholarships to delete.
     */
    limit?: number
  }

  /**
   * Scholarship.criteria
   */
  export type Scholarship$criteriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EligibilityCriteria
     */
    select?: EligibilityCriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EligibilityCriteria
     */
    omit?: EligibilityCriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EligibilityCriteriaInclude<ExtArgs> | null
    where?: EligibilityCriteriaWhereInput
    orderBy?: EligibilityCriteriaOrderByWithRelationInput | EligibilityCriteriaOrderByWithRelationInput[]
    cursor?: EligibilityCriteriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EligibilityCriteriaScalarFieldEnum | EligibilityCriteriaScalarFieldEnum[]
  }

  /**
   * Scholarship.applications
   */
  export type Scholarship$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    cursor?: ApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Scholarship without action
   */
  export type ScholarshipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scholarship
     */
    select?: ScholarshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scholarship
     */
    omit?: ScholarshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScholarshipInclude<ExtArgs> | null
  }


  /**
   * Model EligibilityCriteria
   */

  export type AggregateEligibilityCriteria = {
    _count: EligibilityCriteriaCountAggregateOutputType | null
    _avg: EligibilityCriteriaAvgAggregateOutputType | null
    _sum: EligibilityCriteriaSumAggregateOutputType | null
    _min: EligibilityCriteriaMinAggregateOutputType | null
    _max: EligibilityCriteriaMaxAggregateOutputType | null
  }

  export type EligibilityCriteriaAvgAggregateOutputType = {
    criteria_id: number | null
    scholarship_id: number | null
    min_value: Decimal | null
    max_value: Decimal | null
    weight: number | null
  }

  export type EligibilityCriteriaSumAggregateOutputType = {
    criteria_id: number | null
    scholarship_id: number | null
    min_value: Decimal | null
    max_value: Decimal | null
    weight: number | null
  }

  export type EligibilityCriteriaMinAggregateOutputType = {
    criteria_id: number | null
    scholarship_id: number | null
    criteria_name: string | null
    criteria_description: string | null
    min_value: Decimal | null
    max_value: Decimal | null
    weight: number | null
  }

  export type EligibilityCriteriaMaxAggregateOutputType = {
    criteria_id: number | null
    scholarship_id: number | null
    criteria_name: string | null
    criteria_description: string | null
    min_value: Decimal | null
    max_value: Decimal | null
    weight: number | null
  }

  export type EligibilityCriteriaCountAggregateOutputType = {
    criteria_id: number
    scholarship_id: number
    criteria_name: number
    criteria_description: number
    min_value: number
    max_value: number
    weight: number
    _all: number
  }


  export type EligibilityCriteriaAvgAggregateInputType = {
    criteria_id?: true
    scholarship_id?: true
    min_value?: true
    max_value?: true
    weight?: true
  }

  export type EligibilityCriteriaSumAggregateInputType = {
    criteria_id?: true
    scholarship_id?: true
    min_value?: true
    max_value?: true
    weight?: true
  }

  export type EligibilityCriteriaMinAggregateInputType = {
    criteria_id?: true
    scholarship_id?: true
    criteria_name?: true
    criteria_description?: true
    min_value?: true
    max_value?: true
    weight?: true
  }

  export type EligibilityCriteriaMaxAggregateInputType = {
    criteria_id?: true
    scholarship_id?: true
    criteria_name?: true
    criteria_description?: true
    min_value?: true
    max_value?: true
    weight?: true
  }

  export type EligibilityCriteriaCountAggregateInputType = {
    criteria_id?: true
    scholarship_id?: true
    criteria_name?: true
    criteria_description?: true
    min_value?: true
    max_value?: true
    weight?: true
    _all?: true
  }

  export type EligibilityCriteriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EligibilityCriteria to aggregate.
     */
    where?: EligibilityCriteriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EligibilityCriteria to fetch.
     */
    orderBy?: EligibilityCriteriaOrderByWithRelationInput | EligibilityCriteriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EligibilityCriteriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EligibilityCriteria from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EligibilityCriteria.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EligibilityCriteria
    **/
    _count?: true | EligibilityCriteriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EligibilityCriteriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EligibilityCriteriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EligibilityCriteriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EligibilityCriteriaMaxAggregateInputType
  }

  export type GetEligibilityCriteriaAggregateType<T extends EligibilityCriteriaAggregateArgs> = {
        [P in keyof T & keyof AggregateEligibilityCriteria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEligibilityCriteria[P]>
      : GetScalarType<T[P], AggregateEligibilityCriteria[P]>
  }




  export type EligibilityCriteriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EligibilityCriteriaWhereInput
    orderBy?: EligibilityCriteriaOrderByWithAggregationInput | EligibilityCriteriaOrderByWithAggregationInput[]
    by: EligibilityCriteriaScalarFieldEnum[] | EligibilityCriteriaScalarFieldEnum
    having?: EligibilityCriteriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EligibilityCriteriaCountAggregateInputType | true
    _avg?: EligibilityCriteriaAvgAggregateInputType
    _sum?: EligibilityCriteriaSumAggregateInputType
    _min?: EligibilityCriteriaMinAggregateInputType
    _max?: EligibilityCriteriaMaxAggregateInputType
  }

  export type EligibilityCriteriaGroupByOutputType = {
    criteria_id: number
    scholarship_id: number
    criteria_name: string
    criteria_description: string
    min_value: Decimal
    max_value: Decimal
    weight: number
    _count: EligibilityCriteriaCountAggregateOutputType | null
    _avg: EligibilityCriteriaAvgAggregateOutputType | null
    _sum: EligibilityCriteriaSumAggregateOutputType | null
    _min: EligibilityCriteriaMinAggregateOutputType | null
    _max: EligibilityCriteriaMaxAggregateOutputType | null
  }

  type GetEligibilityCriteriaGroupByPayload<T extends EligibilityCriteriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EligibilityCriteriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EligibilityCriteriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EligibilityCriteriaGroupByOutputType[P]>
            : GetScalarType<T[P], EligibilityCriteriaGroupByOutputType[P]>
        }
      >
    >


  export type EligibilityCriteriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    criteria_id?: boolean
    scholarship_id?: boolean
    criteria_name?: boolean
    criteria_description?: boolean
    min_value?: boolean
    max_value?: boolean
    weight?: boolean
    scholarship?: boolean | ScholarshipDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eligibilityCriteria"]>



  export type EligibilityCriteriaSelectScalar = {
    criteria_id?: boolean
    scholarship_id?: boolean
    criteria_name?: boolean
    criteria_description?: boolean
    min_value?: boolean
    max_value?: boolean
    weight?: boolean
  }

  export type EligibilityCriteriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"criteria_id" | "scholarship_id" | "criteria_name" | "criteria_description" | "min_value" | "max_value" | "weight", ExtArgs["result"]["eligibilityCriteria"]>
  export type EligibilityCriteriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scholarship?: boolean | ScholarshipDefaultArgs<ExtArgs>
  }

  export type $EligibilityCriteriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EligibilityCriteria"
    objects: {
      scholarship: Prisma.$ScholarshipPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      criteria_id: number
      scholarship_id: number
      criteria_name: string
      criteria_description: string
      min_value: Prisma.Decimal
      max_value: Prisma.Decimal
      weight: number
    }, ExtArgs["result"]["eligibilityCriteria"]>
    composites: {}
  }

  type EligibilityCriteriaGetPayload<S extends boolean | null | undefined | EligibilityCriteriaDefaultArgs> = $Result.GetResult<Prisma.$EligibilityCriteriaPayload, S>

  type EligibilityCriteriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EligibilityCriteriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EligibilityCriteriaCountAggregateInputType | true
    }

  export interface EligibilityCriteriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EligibilityCriteria'], meta: { name: 'EligibilityCriteria' } }
    /**
     * Find zero or one EligibilityCriteria that matches the filter.
     * @param {EligibilityCriteriaFindUniqueArgs} args - Arguments to find a EligibilityCriteria
     * @example
     * // Get one EligibilityCriteria
     * const eligibilityCriteria = await prisma.eligibilityCriteria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EligibilityCriteriaFindUniqueArgs>(args: SelectSubset<T, EligibilityCriteriaFindUniqueArgs<ExtArgs>>): Prisma__EligibilityCriteriaClient<$Result.GetResult<Prisma.$EligibilityCriteriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EligibilityCriteria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EligibilityCriteriaFindUniqueOrThrowArgs} args - Arguments to find a EligibilityCriteria
     * @example
     * // Get one EligibilityCriteria
     * const eligibilityCriteria = await prisma.eligibilityCriteria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EligibilityCriteriaFindUniqueOrThrowArgs>(args: SelectSubset<T, EligibilityCriteriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EligibilityCriteriaClient<$Result.GetResult<Prisma.$EligibilityCriteriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EligibilityCriteria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EligibilityCriteriaFindFirstArgs} args - Arguments to find a EligibilityCriteria
     * @example
     * // Get one EligibilityCriteria
     * const eligibilityCriteria = await prisma.eligibilityCriteria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EligibilityCriteriaFindFirstArgs>(args?: SelectSubset<T, EligibilityCriteriaFindFirstArgs<ExtArgs>>): Prisma__EligibilityCriteriaClient<$Result.GetResult<Prisma.$EligibilityCriteriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EligibilityCriteria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EligibilityCriteriaFindFirstOrThrowArgs} args - Arguments to find a EligibilityCriteria
     * @example
     * // Get one EligibilityCriteria
     * const eligibilityCriteria = await prisma.eligibilityCriteria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EligibilityCriteriaFindFirstOrThrowArgs>(args?: SelectSubset<T, EligibilityCriteriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__EligibilityCriteriaClient<$Result.GetResult<Prisma.$EligibilityCriteriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EligibilityCriteria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EligibilityCriteriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EligibilityCriteria
     * const eligibilityCriteria = await prisma.eligibilityCriteria.findMany()
     * 
     * // Get first 10 EligibilityCriteria
     * const eligibilityCriteria = await prisma.eligibilityCriteria.findMany({ take: 10 })
     * 
     * // Only select the `criteria_id`
     * const eligibilityCriteriaWithCriteria_idOnly = await prisma.eligibilityCriteria.findMany({ select: { criteria_id: true } })
     * 
     */
    findMany<T extends EligibilityCriteriaFindManyArgs>(args?: SelectSubset<T, EligibilityCriteriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EligibilityCriteriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EligibilityCriteria.
     * @param {EligibilityCriteriaCreateArgs} args - Arguments to create a EligibilityCriteria.
     * @example
     * // Create one EligibilityCriteria
     * const EligibilityCriteria = await prisma.eligibilityCriteria.create({
     *   data: {
     *     // ... data to create a EligibilityCriteria
     *   }
     * })
     * 
     */
    create<T extends EligibilityCriteriaCreateArgs>(args: SelectSubset<T, EligibilityCriteriaCreateArgs<ExtArgs>>): Prisma__EligibilityCriteriaClient<$Result.GetResult<Prisma.$EligibilityCriteriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EligibilityCriteria.
     * @param {EligibilityCriteriaCreateManyArgs} args - Arguments to create many EligibilityCriteria.
     * @example
     * // Create many EligibilityCriteria
     * const eligibilityCriteria = await prisma.eligibilityCriteria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EligibilityCriteriaCreateManyArgs>(args?: SelectSubset<T, EligibilityCriteriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a EligibilityCriteria.
     * @param {EligibilityCriteriaDeleteArgs} args - Arguments to delete one EligibilityCriteria.
     * @example
     * // Delete one EligibilityCriteria
     * const EligibilityCriteria = await prisma.eligibilityCriteria.delete({
     *   where: {
     *     // ... filter to delete one EligibilityCriteria
     *   }
     * })
     * 
     */
    delete<T extends EligibilityCriteriaDeleteArgs>(args: SelectSubset<T, EligibilityCriteriaDeleteArgs<ExtArgs>>): Prisma__EligibilityCriteriaClient<$Result.GetResult<Prisma.$EligibilityCriteriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EligibilityCriteria.
     * @param {EligibilityCriteriaUpdateArgs} args - Arguments to update one EligibilityCriteria.
     * @example
     * // Update one EligibilityCriteria
     * const eligibilityCriteria = await prisma.eligibilityCriteria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EligibilityCriteriaUpdateArgs>(args: SelectSubset<T, EligibilityCriteriaUpdateArgs<ExtArgs>>): Prisma__EligibilityCriteriaClient<$Result.GetResult<Prisma.$EligibilityCriteriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EligibilityCriteria.
     * @param {EligibilityCriteriaDeleteManyArgs} args - Arguments to filter EligibilityCriteria to delete.
     * @example
     * // Delete a few EligibilityCriteria
     * const { count } = await prisma.eligibilityCriteria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EligibilityCriteriaDeleteManyArgs>(args?: SelectSubset<T, EligibilityCriteriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EligibilityCriteria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EligibilityCriteriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EligibilityCriteria
     * const eligibilityCriteria = await prisma.eligibilityCriteria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EligibilityCriteriaUpdateManyArgs>(args: SelectSubset<T, EligibilityCriteriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EligibilityCriteria.
     * @param {EligibilityCriteriaUpsertArgs} args - Arguments to update or create a EligibilityCriteria.
     * @example
     * // Update or create a EligibilityCriteria
     * const eligibilityCriteria = await prisma.eligibilityCriteria.upsert({
     *   create: {
     *     // ... data to create a EligibilityCriteria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EligibilityCriteria we want to update
     *   }
     * })
     */
    upsert<T extends EligibilityCriteriaUpsertArgs>(args: SelectSubset<T, EligibilityCriteriaUpsertArgs<ExtArgs>>): Prisma__EligibilityCriteriaClient<$Result.GetResult<Prisma.$EligibilityCriteriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EligibilityCriteria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EligibilityCriteriaCountArgs} args - Arguments to filter EligibilityCriteria to count.
     * @example
     * // Count the number of EligibilityCriteria
     * const count = await prisma.eligibilityCriteria.count({
     *   where: {
     *     // ... the filter for the EligibilityCriteria we want to count
     *   }
     * })
    **/
    count<T extends EligibilityCriteriaCountArgs>(
      args?: Subset<T, EligibilityCriteriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EligibilityCriteriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EligibilityCriteria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EligibilityCriteriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EligibilityCriteriaAggregateArgs>(args: Subset<T, EligibilityCriteriaAggregateArgs>): Prisma.PrismaPromise<GetEligibilityCriteriaAggregateType<T>>

    /**
     * Group by EligibilityCriteria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EligibilityCriteriaGroupByArgs} args - Group by arguments.
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
      T extends EligibilityCriteriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EligibilityCriteriaGroupByArgs['orderBy'] }
        : { orderBy?: EligibilityCriteriaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EligibilityCriteriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEligibilityCriteriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EligibilityCriteria model
   */
  readonly fields: EligibilityCriteriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EligibilityCriteria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EligibilityCriteriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    scholarship<T extends ScholarshipDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScholarshipDefaultArgs<ExtArgs>>): Prisma__ScholarshipClient<$Result.GetResult<Prisma.$ScholarshipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EligibilityCriteria model
   */
  interface EligibilityCriteriaFieldRefs {
    readonly criteria_id: FieldRef<"EligibilityCriteria", 'Int'>
    readonly scholarship_id: FieldRef<"EligibilityCriteria", 'Int'>
    readonly criteria_name: FieldRef<"EligibilityCriteria", 'String'>
    readonly criteria_description: FieldRef<"EligibilityCriteria", 'String'>
    readonly min_value: FieldRef<"EligibilityCriteria", 'Decimal'>
    readonly max_value: FieldRef<"EligibilityCriteria", 'Decimal'>
    readonly weight: FieldRef<"EligibilityCriteria", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * EligibilityCriteria findUnique
   */
  export type EligibilityCriteriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EligibilityCriteria
     */
    select?: EligibilityCriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EligibilityCriteria
     */
    omit?: EligibilityCriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EligibilityCriteriaInclude<ExtArgs> | null
    /**
     * Filter, which EligibilityCriteria to fetch.
     */
    where: EligibilityCriteriaWhereUniqueInput
  }

  /**
   * EligibilityCriteria findUniqueOrThrow
   */
  export type EligibilityCriteriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EligibilityCriteria
     */
    select?: EligibilityCriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EligibilityCriteria
     */
    omit?: EligibilityCriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EligibilityCriteriaInclude<ExtArgs> | null
    /**
     * Filter, which EligibilityCriteria to fetch.
     */
    where: EligibilityCriteriaWhereUniqueInput
  }

  /**
   * EligibilityCriteria findFirst
   */
  export type EligibilityCriteriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EligibilityCriteria
     */
    select?: EligibilityCriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EligibilityCriteria
     */
    omit?: EligibilityCriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EligibilityCriteriaInclude<ExtArgs> | null
    /**
     * Filter, which EligibilityCriteria to fetch.
     */
    where?: EligibilityCriteriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EligibilityCriteria to fetch.
     */
    orderBy?: EligibilityCriteriaOrderByWithRelationInput | EligibilityCriteriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EligibilityCriteria.
     */
    cursor?: EligibilityCriteriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EligibilityCriteria from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EligibilityCriteria.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EligibilityCriteria.
     */
    distinct?: EligibilityCriteriaScalarFieldEnum | EligibilityCriteriaScalarFieldEnum[]
  }

  /**
   * EligibilityCriteria findFirstOrThrow
   */
  export type EligibilityCriteriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EligibilityCriteria
     */
    select?: EligibilityCriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EligibilityCriteria
     */
    omit?: EligibilityCriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EligibilityCriteriaInclude<ExtArgs> | null
    /**
     * Filter, which EligibilityCriteria to fetch.
     */
    where?: EligibilityCriteriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EligibilityCriteria to fetch.
     */
    orderBy?: EligibilityCriteriaOrderByWithRelationInput | EligibilityCriteriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EligibilityCriteria.
     */
    cursor?: EligibilityCriteriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EligibilityCriteria from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EligibilityCriteria.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EligibilityCriteria.
     */
    distinct?: EligibilityCriteriaScalarFieldEnum | EligibilityCriteriaScalarFieldEnum[]
  }

  /**
   * EligibilityCriteria findMany
   */
  export type EligibilityCriteriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EligibilityCriteria
     */
    select?: EligibilityCriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EligibilityCriteria
     */
    omit?: EligibilityCriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EligibilityCriteriaInclude<ExtArgs> | null
    /**
     * Filter, which EligibilityCriteria to fetch.
     */
    where?: EligibilityCriteriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EligibilityCriteria to fetch.
     */
    orderBy?: EligibilityCriteriaOrderByWithRelationInput | EligibilityCriteriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EligibilityCriteria.
     */
    cursor?: EligibilityCriteriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EligibilityCriteria from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EligibilityCriteria.
     */
    skip?: number
    distinct?: EligibilityCriteriaScalarFieldEnum | EligibilityCriteriaScalarFieldEnum[]
  }

  /**
   * EligibilityCriteria create
   */
  export type EligibilityCriteriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EligibilityCriteria
     */
    select?: EligibilityCriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EligibilityCriteria
     */
    omit?: EligibilityCriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EligibilityCriteriaInclude<ExtArgs> | null
    /**
     * The data needed to create a EligibilityCriteria.
     */
    data: XOR<EligibilityCriteriaCreateInput, EligibilityCriteriaUncheckedCreateInput>
  }

  /**
   * EligibilityCriteria createMany
   */
  export type EligibilityCriteriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EligibilityCriteria.
     */
    data: EligibilityCriteriaCreateManyInput | EligibilityCriteriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EligibilityCriteria update
   */
  export type EligibilityCriteriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EligibilityCriteria
     */
    select?: EligibilityCriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EligibilityCriteria
     */
    omit?: EligibilityCriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EligibilityCriteriaInclude<ExtArgs> | null
    /**
     * The data needed to update a EligibilityCriteria.
     */
    data: XOR<EligibilityCriteriaUpdateInput, EligibilityCriteriaUncheckedUpdateInput>
    /**
     * Choose, which EligibilityCriteria to update.
     */
    where: EligibilityCriteriaWhereUniqueInput
  }

  /**
   * EligibilityCriteria updateMany
   */
  export type EligibilityCriteriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EligibilityCriteria.
     */
    data: XOR<EligibilityCriteriaUpdateManyMutationInput, EligibilityCriteriaUncheckedUpdateManyInput>
    /**
     * Filter which EligibilityCriteria to update
     */
    where?: EligibilityCriteriaWhereInput
    /**
     * Limit how many EligibilityCriteria to update.
     */
    limit?: number
  }

  /**
   * EligibilityCriteria upsert
   */
  export type EligibilityCriteriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EligibilityCriteria
     */
    select?: EligibilityCriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EligibilityCriteria
     */
    omit?: EligibilityCriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EligibilityCriteriaInclude<ExtArgs> | null
    /**
     * The filter to search for the EligibilityCriteria to update in case it exists.
     */
    where: EligibilityCriteriaWhereUniqueInput
    /**
     * In case the EligibilityCriteria found by the `where` argument doesn't exist, create a new EligibilityCriteria with this data.
     */
    create: XOR<EligibilityCriteriaCreateInput, EligibilityCriteriaUncheckedCreateInput>
    /**
     * In case the EligibilityCriteria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EligibilityCriteriaUpdateInput, EligibilityCriteriaUncheckedUpdateInput>
  }

  /**
   * EligibilityCriteria delete
   */
  export type EligibilityCriteriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EligibilityCriteria
     */
    select?: EligibilityCriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EligibilityCriteria
     */
    omit?: EligibilityCriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EligibilityCriteriaInclude<ExtArgs> | null
    /**
     * Filter which EligibilityCriteria to delete.
     */
    where: EligibilityCriteriaWhereUniqueInput
  }

  /**
   * EligibilityCriteria deleteMany
   */
  export type EligibilityCriteriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EligibilityCriteria to delete
     */
    where?: EligibilityCriteriaWhereInput
    /**
     * Limit how many EligibilityCriteria to delete.
     */
    limit?: number
  }

  /**
   * EligibilityCriteria without action
   */
  export type EligibilityCriteriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EligibilityCriteria
     */
    select?: EligibilityCriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EligibilityCriteria
     */
    omit?: EligibilityCriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EligibilityCriteriaInclude<ExtArgs> | null
  }


  /**
   * Model Application
   */

  export type AggregateApplication = {
    _count: ApplicationCountAggregateOutputType | null
    _avg: ApplicationAvgAggregateOutputType | null
    _sum: ApplicationSumAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  export type ApplicationAvgAggregateOutputType = {
    application_id: number | null
    student_id: number | null
    scholarship_id: number | null
    total_points: number | null
  }

  export type ApplicationSumAggregateOutputType = {
    application_id: number | null
    student_id: number | null
    scholarship_id: number | null
    total_points: number | null
  }

  export type ApplicationMinAggregateOutputType = {
    application_id: number | null
    student_id: number | null
    scholarship_id: number | null
    submission_date: Date | null
    status: $Enums.ApplicationStatus | null
    total_points: number | null
    reviewer_comments: string | null
    review_date: Date | null
  }

  export type ApplicationMaxAggregateOutputType = {
    application_id: number | null
    student_id: number | null
    scholarship_id: number | null
    submission_date: Date | null
    status: $Enums.ApplicationStatus | null
    total_points: number | null
    reviewer_comments: string | null
    review_date: Date | null
  }

  export type ApplicationCountAggregateOutputType = {
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


  export type ApplicationAvgAggregateInputType = {
    application_id?: true
    student_id?: true
    scholarship_id?: true
    total_points?: true
  }

  export type ApplicationSumAggregateInputType = {
    application_id?: true
    student_id?: true
    scholarship_id?: true
    total_points?: true
  }

  export type ApplicationMinAggregateInputType = {
    application_id?: true
    student_id?: true
    scholarship_id?: true
    submission_date?: true
    status?: true
    total_points?: true
    reviewer_comments?: true
    review_date?: true
  }

  export type ApplicationMaxAggregateInputType = {
    application_id?: true
    student_id?: true
    scholarship_id?: true
    submission_date?: true
    status?: true
    total_points?: true
    reviewer_comments?: true
    review_date?: true
  }

  export type ApplicationCountAggregateInputType = {
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

  export type ApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Application to aggregate.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Applications
    **/
    _count?: true | ApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApplicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApplicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicationMaxAggregateInputType
  }

  export type GetApplicationAggregateType<T extends ApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplication[P]>
      : GetScalarType<T[P], AggregateApplication[P]>
  }




  export type ApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithAggregationInput | ApplicationOrderByWithAggregationInput[]
    by: ApplicationScalarFieldEnum[] | ApplicationScalarFieldEnum
    having?: ApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicationCountAggregateInputType | true
    _avg?: ApplicationAvgAggregateInputType
    _sum?: ApplicationSumAggregateInputType
    _min?: ApplicationMinAggregateInputType
    _max?: ApplicationMaxAggregateInputType
  }

  export type ApplicationGroupByOutputType = {
    application_id: number
    student_id: number
    scholarship_id: number
    submission_date: Date
    status: $Enums.ApplicationStatus
    total_points: number | null
    reviewer_comments: string | null
    review_date: Date | null
    _count: ApplicationCountAggregateOutputType | null
    _avg: ApplicationAvgAggregateOutputType | null
    _sum: ApplicationSumAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  type GetApplicationGroupByPayload<T extends ApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
        }
      >
    >


  export type ApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    application_id?: boolean
    student_id?: boolean
    scholarship_id?: boolean
    submission_date?: boolean
    status?: boolean
    total_points?: boolean
    reviewer_comments?: boolean
    review_date?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    scholarship?: boolean | ScholarshipDefaultArgs<ExtArgs>
    documents?: boolean | Application$documentsArgs<ExtArgs>
    reviews?: boolean | Application$reviewsArgs<ExtArgs>
    payments?: boolean | Application$paymentsArgs<ExtArgs>
    _count?: boolean | ApplicationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>



  export type ApplicationSelectScalar = {
    application_id?: boolean
    student_id?: boolean
    scholarship_id?: boolean
    submission_date?: boolean
    status?: boolean
    total_points?: boolean
    reviewer_comments?: boolean
    review_date?: boolean
  }

  export type ApplicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"application_id" | "student_id" | "scholarship_id" | "submission_date" | "status" | "total_points" | "reviewer_comments" | "review_date", ExtArgs["result"]["application"]>
  export type ApplicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    scholarship?: boolean | ScholarshipDefaultArgs<ExtArgs>
    documents?: boolean | Application$documentsArgs<ExtArgs>
    reviews?: boolean | Application$reviewsArgs<ExtArgs>
    payments?: boolean | Application$paymentsArgs<ExtArgs>
    _count?: boolean | ApplicationCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Application"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      scholarship: Prisma.$ScholarshipPayload<ExtArgs>
      documents: Prisma.$DocumentPayload<ExtArgs>[]
      reviews: Prisma.$CommitteeReviewPayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      application_id: number
      student_id: number
      scholarship_id: number
      submission_date: Date
      status: $Enums.ApplicationStatus
      total_points: number | null
      reviewer_comments: string | null
      review_date: Date | null
    }, ExtArgs["result"]["application"]>
    composites: {}
  }

  type ApplicationGetPayload<S extends boolean | null | undefined | ApplicationDefaultArgs> = $Result.GetResult<Prisma.$ApplicationPayload, S>

  type ApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApplicationCountAggregateInputType | true
    }

  export interface ApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Application'], meta: { name: 'Application' } }
    /**
     * Find zero or one Application that matches the filter.
     * @param {ApplicationFindUniqueArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApplicationFindUniqueArgs>(args: SelectSubset<T, ApplicationFindUniqueArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Application that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApplicationFindUniqueOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApplicationFindUniqueOrThrowArgs>(args: SelectSubset<T, ApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Application that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApplicationFindFirstArgs>(args?: SelectSubset<T, ApplicationFindFirstArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Application that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApplicationFindFirstOrThrowArgs>(args?: SelectSubset<T, ApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applications
     * const applications = await prisma.application.findMany()
     * 
     * // Get first 10 Applications
     * const applications = await prisma.application.findMany({ take: 10 })
     * 
     * // Only select the `application_id`
     * const applicationWithApplication_idOnly = await prisma.application.findMany({ select: { application_id: true } })
     * 
     */
    findMany<T extends ApplicationFindManyArgs>(args?: SelectSubset<T, ApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Application.
     * @param {ApplicationCreateArgs} args - Arguments to create a Application.
     * @example
     * // Create one Application
     * const Application = await prisma.application.create({
     *   data: {
     *     // ... data to create a Application
     *   }
     * })
     * 
     */
    create<T extends ApplicationCreateArgs>(args: SelectSubset<T, ApplicationCreateArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Applications.
     * @param {ApplicationCreateManyArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const application = await prisma.application.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApplicationCreateManyArgs>(args?: SelectSubset<T, ApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Application.
     * @param {ApplicationDeleteArgs} args - Arguments to delete one Application.
     * @example
     * // Delete one Application
     * const Application = await prisma.application.delete({
     *   where: {
     *     // ... filter to delete one Application
     *   }
     * })
     * 
     */
    delete<T extends ApplicationDeleteArgs>(args: SelectSubset<T, ApplicationDeleteArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Application.
     * @param {ApplicationUpdateArgs} args - Arguments to update one Application.
     * @example
     * // Update one Application
     * const application = await prisma.application.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApplicationUpdateArgs>(args: SelectSubset<T, ApplicationUpdateArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Applications.
     * @param {ApplicationDeleteManyArgs} args - Arguments to filter Applications to delete.
     * @example
     * // Delete a few Applications
     * const { count } = await prisma.application.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApplicationDeleteManyArgs>(args?: SelectSubset<T, ApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApplicationUpdateManyArgs>(args: SelectSubset<T, ApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Application.
     * @param {ApplicationUpsertArgs} args - Arguments to update or create a Application.
     * @example
     * // Update or create a Application
     * const application = await prisma.application.upsert({
     *   create: {
     *     // ... data to create a Application
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Application we want to update
     *   }
     * })
     */
    upsert<T extends ApplicationUpsertArgs>(args: SelectSubset<T, ApplicationUpsertArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationCountArgs} args - Arguments to filter Applications to count.
     * @example
     * // Count the number of Applications
     * const count = await prisma.application.count({
     *   where: {
     *     // ... the filter for the Applications we want to count
     *   }
     * })
    **/
    count<T extends ApplicationCountArgs>(
      args?: Subset<T, ApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApplicationAggregateArgs>(args: Subset<T, ApplicationAggregateArgs>): Prisma.PrismaPromise<GetApplicationAggregateType<T>>

    /**
     * Group by Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationGroupByArgs} args - Group by arguments.
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
      T extends ApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicationGroupByArgs['orderBy'] }
        : { orderBy?: ApplicationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Application model
   */
  readonly fields: ApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Application.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    scholarship<T extends ScholarshipDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScholarshipDefaultArgs<ExtArgs>>): Prisma__ScholarshipClient<$Result.GetResult<Prisma.$ScholarshipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    documents<T extends Application$documentsArgs<ExtArgs> = {}>(args?: Subset<T, Application$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends Application$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Application$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommitteeReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends Application$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Application$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Application model
   */
  interface ApplicationFieldRefs {
    readonly application_id: FieldRef<"Application", 'Int'>
    readonly student_id: FieldRef<"Application", 'Int'>
    readonly scholarship_id: FieldRef<"Application", 'Int'>
    readonly submission_date: FieldRef<"Application", 'DateTime'>
    readonly status: FieldRef<"Application", 'ApplicationStatus'>
    readonly total_points: FieldRef<"Application", 'Int'>
    readonly reviewer_comments: FieldRef<"Application", 'String'>
    readonly review_date: FieldRef<"Application", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Application findUnique
   */
  export type ApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application findUniqueOrThrow
   */
  export type ApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application findFirst
   */
  export type ApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application findFirstOrThrow
   */
  export type ApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application findMany
   */
  export type ApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Applications to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application create
   */
  export type ApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The data needed to create a Application.
     */
    data: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
  }

  /**
   * Application createMany
   */
  export type ApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Applications.
     */
    data: ApplicationCreateManyInput | ApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Application update
   */
  export type ApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The data needed to update a Application.
     */
    data: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
    /**
     * Choose, which Application to update.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application updateMany
   */
  export type ApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Applications.
     */
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyInput>
    /**
     * Filter which Applications to update
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to update.
     */
    limit?: number
  }

  /**
   * Application upsert
   */
  export type ApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The filter to search for the Application to update in case it exists.
     */
    where: ApplicationWhereUniqueInput
    /**
     * In case the Application found by the `where` argument doesn't exist, create a new Application with this data.
     */
    create: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
    /**
     * In case the Application was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
  }

  /**
   * Application delete
   */
  export type ApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter which Application to delete.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application deleteMany
   */
  export type ApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Applications to delete
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to delete.
     */
    limit?: number
  }

  /**
   * Application.documents
   */
  export type Application$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    cursor?: DocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Application.reviews
   */
  export type Application$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommitteeReview
     */
    select?: CommitteeReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommitteeReview
     */
    omit?: CommitteeReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitteeReviewInclude<ExtArgs> | null
    where?: CommitteeReviewWhereInput
    orderBy?: CommitteeReviewOrderByWithRelationInput | CommitteeReviewOrderByWithRelationInput[]
    cursor?: CommitteeReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommitteeReviewScalarFieldEnum | CommitteeReviewScalarFieldEnum[]
  }

  /**
   * Application.payments
   */
  export type Application$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Application without action
   */
  export type ApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
  }


  /**
   * Model Document
   */

  export type AggregateDocument = {
    _count: DocumentCountAggregateOutputType | null
    _avg: DocumentAvgAggregateOutputType | null
    _sum: DocumentSumAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  export type DocumentAvgAggregateOutputType = {
    document_id: number | null
    application_id: number | null
  }

  export type DocumentSumAggregateOutputType = {
    document_id: number | null
    application_id: number | null
  }

  export type DocumentMinAggregateOutputType = {
    document_id: number | null
    application_id: number | null
    document_type: string | null
    file_name: string | null
    file_path: string | null
    upload_date: Date | null
    verification_status: $Enums.VerificationStatus | null
  }

  export type DocumentMaxAggregateOutputType = {
    document_id: number | null
    application_id: number | null
    document_type: string | null
    file_name: string | null
    file_path: string | null
    upload_date: Date | null
    verification_status: $Enums.VerificationStatus | null
  }

  export type DocumentCountAggregateOutputType = {
    document_id: number
    application_id: number
    document_type: number
    file_name: number
    file_path: number
    upload_date: number
    verification_status: number
    _all: number
  }


  export type DocumentAvgAggregateInputType = {
    document_id?: true
    application_id?: true
  }

  export type DocumentSumAggregateInputType = {
    document_id?: true
    application_id?: true
  }

  export type DocumentMinAggregateInputType = {
    document_id?: true
    application_id?: true
    document_type?: true
    file_name?: true
    file_path?: true
    upload_date?: true
    verification_status?: true
  }

  export type DocumentMaxAggregateInputType = {
    document_id?: true
    application_id?: true
    document_type?: true
    file_name?: true
    file_path?: true
    upload_date?: true
    verification_status?: true
  }

  export type DocumentCountAggregateInputType = {
    document_id?: true
    application_id?: true
    document_type?: true
    file_name?: true
    file_path?: true
    upload_date?: true
    verification_status?: true
    _all?: true
  }

  export type DocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Document to aggregate.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Documents
    **/
    _count?: true | DocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentMaxAggregateInputType
  }

  export type GetDocumentAggregateType<T extends DocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocument[P]>
      : GetScalarType<T[P], AggregateDocument[P]>
  }




  export type DocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithAggregationInput | DocumentOrderByWithAggregationInput[]
    by: DocumentScalarFieldEnum[] | DocumentScalarFieldEnum
    having?: DocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentCountAggregateInputType | true
    _avg?: DocumentAvgAggregateInputType
    _sum?: DocumentSumAggregateInputType
    _min?: DocumentMinAggregateInputType
    _max?: DocumentMaxAggregateInputType
  }

  export type DocumentGroupByOutputType = {
    document_id: number
    application_id: number
    document_type: string
    file_name: string
    file_path: string
    upload_date: Date
    verification_status: $Enums.VerificationStatus
    _count: DocumentCountAggregateOutputType | null
    _avg: DocumentAvgAggregateOutputType | null
    _sum: DocumentSumAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  type GetDocumentGroupByPayload<T extends DocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentGroupByOutputType[P]>
        }
      >
    >


  export type DocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    document_id?: boolean
    application_id?: boolean
    document_type?: boolean
    file_name?: boolean
    file_path?: boolean
    upload_date?: boolean
    verification_status?: boolean
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>



  export type DocumentSelectScalar = {
    document_id?: boolean
    application_id?: boolean
    document_type?: boolean
    file_name?: boolean
    file_path?: boolean
    upload_date?: boolean
    verification_status?: boolean
  }

  export type DocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"document_id" | "application_id" | "document_type" | "file_name" | "file_path" | "upload_date" | "verification_status", ExtArgs["result"]["document"]>
  export type DocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }

  export type $DocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Document"
    objects: {
      application: Prisma.$ApplicationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      document_id: number
      application_id: number
      document_type: string
      file_name: string
      file_path: string
      upload_date: Date
      verification_status: $Enums.VerificationStatus
    }, ExtArgs["result"]["document"]>
    composites: {}
  }

  type DocumentGetPayload<S extends boolean | null | undefined | DocumentDefaultArgs> = $Result.GetResult<Prisma.$DocumentPayload, S>

  type DocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentCountAggregateInputType | true
    }

  export interface DocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Document'], meta: { name: 'Document' } }
    /**
     * Find zero or one Document that matches the filter.
     * @param {DocumentFindUniqueArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentFindUniqueArgs>(args: SelectSubset<T, DocumentFindUniqueArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Document that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentFindUniqueOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentFindFirstArgs>(args?: SelectSubset<T, DocumentFindFirstArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.document.findMany()
     * 
     * // Get first 10 Documents
     * const documents = await prisma.document.findMany({ take: 10 })
     * 
     * // Only select the `document_id`
     * const documentWithDocument_idOnly = await prisma.document.findMany({ select: { document_id: true } })
     * 
     */
    findMany<T extends DocumentFindManyArgs>(args?: SelectSubset<T, DocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Document.
     * @param {DocumentCreateArgs} args - Arguments to create a Document.
     * @example
     * // Create one Document
     * const Document = await prisma.document.create({
     *   data: {
     *     // ... data to create a Document
     *   }
     * })
     * 
     */
    create<T extends DocumentCreateArgs>(args: SelectSubset<T, DocumentCreateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Documents.
     * @param {DocumentCreateManyArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentCreateManyArgs>(args?: SelectSubset<T, DocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Document.
     * @param {DocumentDeleteArgs} args - Arguments to delete one Document.
     * @example
     * // Delete one Document
     * const Document = await prisma.document.delete({
     *   where: {
     *     // ... filter to delete one Document
     *   }
     * })
     * 
     */
    delete<T extends DocumentDeleteArgs>(args: SelectSubset<T, DocumentDeleteArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Document.
     * @param {DocumentUpdateArgs} args - Arguments to update one Document.
     * @example
     * // Update one Document
     * const document = await prisma.document.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentUpdateArgs>(args: SelectSubset<T, DocumentUpdateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Documents.
     * @param {DocumentDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.document.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentDeleteManyArgs>(args?: SelectSubset<T, DocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentUpdateManyArgs>(args: SelectSubset<T, DocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Document.
     * @param {DocumentUpsertArgs} args - Arguments to update or create a Document.
     * @example
     * // Update or create a Document
     * const document = await prisma.document.upsert({
     *   create: {
     *     // ... data to create a Document
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Document we want to update
     *   }
     * })
     */
    upsert<T extends DocumentUpsertArgs>(args: SelectSubset<T, DocumentUpsertArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.document.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
    **/
    count<T extends DocumentCountArgs>(
      args?: Subset<T, DocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DocumentAggregateArgs>(args: Subset<T, DocumentAggregateArgs>): Prisma.PrismaPromise<GetDocumentAggregateType<T>>

    /**
     * Group by Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentGroupByArgs} args - Group by arguments.
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
      T extends DocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentGroupByArgs['orderBy'] }
        : { orderBy?: DocumentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Document model
   */
  readonly fields: DocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Document.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    application<T extends ApplicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApplicationDefaultArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Document model
   */
  interface DocumentFieldRefs {
    readonly document_id: FieldRef<"Document", 'Int'>
    readonly application_id: FieldRef<"Document", 'Int'>
    readonly document_type: FieldRef<"Document", 'String'>
    readonly file_name: FieldRef<"Document", 'String'>
    readonly file_path: FieldRef<"Document", 'String'>
    readonly upload_date: FieldRef<"Document", 'DateTime'>
    readonly verification_status: FieldRef<"Document", 'VerificationStatus'>
  }
    

  // Custom InputTypes
  /**
   * Document findUnique
   */
  export type DocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findUniqueOrThrow
   */
  export type DocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findFirst
   */
  export type DocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findFirstOrThrow
   */
  export type DocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findMany
   */
  export type DocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document create
   */
  export type DocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a Document.
     */
    data: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
  }

  /**
   * Document createMany
   */
  export type DocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Document update
   */
  export type DocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a Document.
     */
    data: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
    /**
     * Choose, which Document to update.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document updateMany
   */
  export type DocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
  }

  /**
   * Document upsert
   */
  export type DocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the Document to update in case it exists.
     */
    where: DocumentWhereUniqueInput
    /**
     * In case the Document found by the `where` argument doesn't exist, create a new Document with this data.
     */
    create: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
    /**
     * In case the Document was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
  }

  /**
   * Document delete
   */
  export type DocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter which Document to delete.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document deleteMany
   */
  export type DocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documents to delete
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to delete.
     */
    limit?: number
  }

  /**
   * Document without action
   */
  export type DocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
  }


  /**
   * Model FamilyMember
   */

  export type AggregateFamilyMember = {
    _count: FamilyMemberCountAggregateOutputType | null
    _avg: FamilyMemberAvgAggregateOutputType | null
    _sum: FamilyMemberSumAggregateOutputType | null
    _min: FamilyMemberMinAggregateOutputType | null
    _max: FamilyMemberMaxAggregateOutputType | null
  }

  export type FamilyMemberAvgAggregateOutputType = {
    member_id: number | null
    student_id: number | null
    age: number | null
    annual_income: Decimal | null
  }

  export type FamilyMemberSumAggregateOutputType = {
    member_id: number | null
    student_id: number | null
    age: number | null
    annual_income: Decimal | null
  }

  export type FamilyMemberMinAggregateOutputType = {
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

  export type FamilyMemberMaxAggregateOutputType = {
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

  export type FamilyMemberCountAggregateOutputType = {
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


  export type FamilyMemberAvgAggregateInputType = {
    member_id?: true
    student_id?: true
    age?: true
    annual_income?: true
  }

  export type FamilyMemberSumAggregateInputType = {
    member_id?: true
    student_id?: true
    age?: true
    annual_income?: true
  }

  export type FamilyMemberMinAggregateInputType = {
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

  export type FamilyMemberMaxAggregateInputType = {
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

  export type FamilyMemberCountAggregateInputType = {
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

  export type FamilyMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FamilyMember to aggregate.
     */
    where?: FamilyMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FamilyMembers to fetch.
     */
    orderBy?: FamilyMemberOrderByWithRelationInput | FamilyMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FamilyMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FamilyMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FamilyMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FamilyMembers
    **/
    _count?: true | FamilyMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FamilyMemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FamilyMemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FamilyMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FamilyMemberMaxAggregateInputType
  }

  export type GetFamilyMemberAggregateType<T extends FamilyMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateFamilyMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFamilyMember[P]>
      : GetScalarType<T[P], AggregateFamilyMember[P]>
  }




  export type FamilyMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FamilyMemberWhereInput
    orderBy?: FamilyMemberOrderByWithAggregationInput | FamilyMemberOrderByWithAggregationInput[]
    by: FamilyMemberScalarFieldEnum[] | FamilyMemberScalarFieldEnum
    having?: FamilyMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FamilyMemberCountAggregateInputType | true
    _avg?: FamilyMemberAvgAggregateInputType
    _sum?: FamilyMemberSumAggregateInputType
    _min?: FamilyMemberMinAggregateInputType
    _max?: FamilyMemberMaxAggregateInputType
  }

  export type FamilyMemberGroupByOutputType = {
    member_id: number
    student_id: number
    full_name: string
    age: number
    relationship: string
    designation: string
    annual_income: Decimal
    workplace: string
    phone_number: string
    _count: FamilyMemberCountAggregateOutputType | null
    _avg: FamilyMemberAvgAggregateOutputType | null
    _sum: FamilyMemberSumAggregateOutputType | null
    _min: FamilyMemberMinAggregateOutputType | null
    _max: FamilyMemberMaxAggregateOutputType | null
  }

  type GetFamilyMemberGroupByPayload<T extends FamilyMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FamilyMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FamilyMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FamilyMemberGroupByOutputType[P]>
            : GetScalarType<T[P], FamilyMemberGroupByOutputType[P]>
        }
      >
    >


  export type FamilyMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    member_id?: boolean
    student_id?: boolean
    full_name?: boolean
    age?: boolean
    relationship?: boolean
    designation?: boolean
    annual_income?: boolean
    workplace?: boolean
    phone_number?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    siblingEducation?: boolean | FamilyMember$siblingEducationArgs<ExtArgs>
    _count?: boolean | FamilyMemberCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["familyMember"]>



  export type FamilyMemberSelectScalar = {
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

  export type FamilyMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"member_id" | "student_id" | "full_name" | "age" | "relationship" | "designation" | "annual_income" | "workplace" | "phone_number", ExtArgs["result"]["familyMember"]>
  export type FamilyMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    siblingEducation?: boolean | FamilyMember$siblingEducationArgs<ExtArgs>
    _count?: boolean | FamilyMemberCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $FamilyMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FamilyMember"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      siblingEducation: Prisma.$SiblingEducationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      member_id: number
      student_id: number
      full_name: string
      age: number
      relationship: string
      designation: string
      annual_income: Prisma.Decimal
      workplace: string
      phone_number: string
    }, ExtArgs["result"]["familyMember"]>
    composites: {}
  }

  type FamilyMemberGetPayload<S extends boolean | null | undefined | FamilyMemberDefaultArgs> = $Result.GetResult<Prisma.$FamilyMemberPayload, S>

  type FamilyMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FamilyMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FamilyMemberCountAggregateInputType | true
    }

  export interface FamilyMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FamilyMember'], meta: { name: 'FamilyMember' } }
    /**
     * Find zero or one FamilyMember that matches the filter.
     * @param {FamilyMemberFindUniqueArgs} args - Arguments to find a FamilyMember
     * @example
     * // Get one FamilyMember
     * const familyMember = await prisma.familyMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FamilyMemberFindUniqueArgs>(args: SelectSubset<T, FamilyMemberFindUniqueArgs<ExtArgs>>): Prisma__FamilyMemberClient<$Result.GetResult<Prisma.$FamilyMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FamilyMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FamilyMemberFindUniqueOrThrowArgs} args - Arguments to find a FamilyMember
     * @example
     * // Get one FamilyMember
     * const familyMember = await prisma.familyMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FamilyMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, FamilyMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FamilyMemberClient<$Result.GetResult<Prisma.$FamilyMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FamilyMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyMemberFindFirstArgs} args - Arguments to find a FamilyMember
     * @example
     * // Get one FamilyMember
     * const familyMember = await prisma.familyMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FamilyMemberFindFirstArgs>(args?: SelectSubset<T, FamilyMemberFindFirstArgs<ExtArgs>>): Prisma__FamilyMemberClient<$Result.GetResult<Prisma.$FamilyMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FamilyMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyMemberFindFirstOrThrowArgs} args - Arguments to find a FamilyMember
     * @example
     * // Get one FamilyMember
     * const familyMember = await prisma.familyMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FamilyMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, FamilyMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__FamilyMemberClient<$Result.GetResult<Prisma.$FamilyMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FamilyMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FamilyMembers
     * const familyMembers = await prisma.familyMember.findMany()
     * 
     * // Get first 10 FamilyMembers
     * const familyMembers = await prisma.familyMember.findMany({ take: 10 })
     * 
     * // Only select the `member_id`
     * const familyMemberWithMember_idOnly = await prisma.familyMember.findMany({ select: { member_id: true } })
     * 
     */
    findMany<T extends FamilyMemberFindManyArgs>(args?: SelectSubset<T, FamilyMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FamilyMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FamilyMember.
     * @param {FamilyMemberCreateArgs} args - Arguments to create a FamilyMember.
     * @example
     * // Create one FamilyMember
     * const FamilyMember = await prisma.familyMember.create({
     *   data: {
     *     // ... data to create a FamilyMember
     *   }
     * })
     * 
     */
    create<T extends FamilyMemberCreateArgs>(args: SelectSubset<T, FamilyMemberCreateArgs<ExtArgs>>): Prisma__FamilyMemberClient<$Result.GetResult<Prisma.$FamilyMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FamilyMembers.
     * @param {FamilyMemberCreateManyArgs} args - Arguments to create many FamilyMembers.
     * @example
     * // Create many FamilyMembers
     * const familyMember = await prisma.familyMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FamilyMemberCreateManyArgs>(args?: SelectSubset<T, FamilyMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FamilyMember.
     * @param {FamilyMemberDeleteArgs} args - Arguments to delete one FamilyMember.
     * @example
     * // Delete one FamilyMember
     * const FamilyMember = await prisma.familyMember.delete({
     *   where: {
     *     // ... filter to delete one FamilyMember
     *   }
     * })
     * 
     */
    delete<T extends FamilyMemberDeleteArgs>(args: SelectSubset<T, FamilyMemberDeleteArgs<ExtArgs>>): Prisma__FamilyMemberClient<$Result.GetResult<Prisma.$FamilyMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FamilyMember.
     * @param {FamilyMemberUpdateArgs} args - Arguments to update one FamilyMember.
     * @example
     * // Update one FamilyMember
     * const familyMember = await prisma.familyMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FamilyMemberUpdateArgs>(args: SelectSubset<T, FamilyMemberUpdateArgs<ExtArgs>>): Prisma__FamilyMemberClient<$Result.GetResult<Prisma.$FamilyMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FamilyMembers.
     * @param {FamilyMemberDeleteManyArgs} args - Arguments to filter FamilyMembers to delete.
     * @example
     * // Delete a few FamilyMembers
     * const { count } = await prisma.familyMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FamilyMemberDeleteManyArgs>(args?: SelectSubset<T, FamilyMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FamilyMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FamilyMembers
     * const familyMember = await prisma.familyMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FamilyMemberUpdateManyArgs>(args: SelectSubset<T, FamilyMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FamilyMember.
     * @param {FamilyMemberUpsertArgs} args - Arguments to update or create a FamilyMember.
     * @example
     * // Update or create a FamilyMember
     * const familyMember = await prisma.familyMember.upsert({
     *   create: {
     *     // ... data to create a FamilyMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FamilyMember we want to update
     *   }
     * })
     */
    upsert<T extends FamilyMemberUpsertArgs>(args: SelectSubset<T, FamilyMemberUpsertArgs<ExtArgs>>): Prisma__FamilyMemberClient<$Result.GetResult<Prisma.$FamilyMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FamilyMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyMemberCountArgs} args - Arguments to filter FamilyMembers to count.
     * @example
     * // Count the number of FamilyMembers
     * const count = await prisma.familyMember.count({
     *   where: {
     *     // ... the filter for the FamilyMembers we want to count
     *   }
     * })
    **/
    count<T extends FamilyMemberCountArgs>(
      args?: Subset<T, FamilyMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FamilyMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FamilyMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FamilyMemberAggregateArgs>(args: Subset<T, FamilyMemberAggregateArgs>): Prisma.PrismaPromise<GetFamilyMemberAggregateType<T>>

    /**
     * Group by FamilyMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyMemberGroupByArgs} args - Group by arguments.
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
      T extends FamilyMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FamilyMemberGroupByArgs['orderBy'] }
        : { orderBy?: FamilyMemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FamilyMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFamilyMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FamilyMember model
   */
  readonly fields: FamilyMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FamilyMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FamilyMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    siblingEducation<T extends FamilyMember$siblingEducationArgs<ExtArgs> = {}>(args?: Subset<T, FamilyMember$siblingEducationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiblingEducationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the FamilyMember model
   */
  interface FamilyMemberFieldRefs {
    readonly member_id: FieldRef<"FamilyMember", 'Int'>
    readonly student_id: FieldRef<"FamilyMember", 'Int'>
    readonly full_name: FieldRef<"FamilyMember", 'String'>
    readonly age: FieldRef<"FamilyMember", 'Int'>
    readonly relationship: FieldRef<"FamilyMember", 'String'>
    readonly designation: FieldRef<"FamilyMember", 'String'>
    readonly annual_income: FieldRef<"FamilyMember", 'Decimal'>
    readonly workplace: FieldRef<"FamilyMember", 'String'>
    readonly phone_number: FieldRef<"FamilyMember", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FamilyMember findUnique
   */
  export type FamilyMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyMember
     */
    select?: FamilyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FamilyMember
     */
    omit?: FamilyMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyMemberInclude<ExtArgs> | null
    /**
     * Filter, which FamilyMember to fetch.
     */
    where: FamilyMemberWhereUniqueInput
  }

  /**
   * FamilyMember findUniqueOrThrow
   */
  export type FamilyMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyMember
     */
    select?: FamilyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FamilyMember
     */
    omit?: FamilyMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyMemberInclude<ExtArgs> | null
    /**
     * Filter, which FamilyMember to fetch.
     */
    where: FamilyMemberWhereUniqueInput
  }

  /**
   * FamilyMember findFirst
   */
  export type FamilyMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyMember
     */
    select?: FamilyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FamilyMember
     */
    omit?: FamilyMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyMemberInclude<ExtArgs> | null
    /**
     * Filter, which FamilyMember to fetch.
     */
    where?: FamilyMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FamilyMembers to fetch.
     */
    orderBy?: FamilyMemberOrderByWithRelationInput | FamilyMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FamilyMembers.
     */
    cursor?: FamilyMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FamilyMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FamilyMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FamilyMembers.
     */
    distinct?: FamilyMemberScalarFieldEnum | FamilyMemberScalarFieldEnum[]
  }

  /**
   * FamilyMember findFirstOrThrow
   */
  export type FamilyMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyMember
     */
    select?: FamilyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FamilyMember
     */
    omit?: FamilyMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyMemberInclude<ExtArgs> | null
    /**
     * Filter, which FamilyMember to fetch.
     */
    where?: FamilyMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FamilyMembers to fetch.
     */
    orderBy?: FamilyMemberOrderByWithRelationInput | FamilyMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FamilyMembers.
     */
    cursor?: FamilyMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FamilyMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FamilyMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FamilyMembers.
     */
    distinct?: FamilyMemberScalarFieldEnum | FamilyMemberScalarFieldEnum[]
  }

  /**
   * FamilyMember findMany
   */
  export type FamilyMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyMember
     */
    select?: FamilyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FamilyMember
     */
    omit?: FamilyMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyMemberInclude<ExtArgs> | null
    /**
     * Filter, which FamilyMembers to fetch.
     */
    where?: FamilyMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FamilyMembers to fetch.
     */
    orderBy?: FamilyMemberOrderByWithRelationInput | FamilyMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FamilyMembers.
     */
    cursor?: FamilyMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FamilyMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FamilyMembers.
     */
    skip?: number
    distinct?: FamilyMemberScalarFieldEnum | FamilyMemberScalarFieldEnum[]
  }

  /**
   * FamilyMember create
   */
  export type FamilyMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyMember
     */
    select?: FamilyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FamilyMember
     */
    omit?: FamilyMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a FamilyMember.
     */
    data: XOR<FamilyMemberCreateInput, FamilyMemberUncheckedCreateInput>
  }

  /**
   * FamilyMember createMany
   */
  export type FamilyMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FamilyMembers.
     */
    data: FamilyMemberCreateManyInput | FamilyMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FamilyMember update
   */
  export type FamilyMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyMember
     */
    select?: FamilyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FamilyMember
     */
    omit?: FamilyMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a FamilyMember.
     */
    data: XOR<FamilyMemberUpdateInput, FamilyMemberUncheckedUpdateInput>
    /**
     * Choose, which FamilyMember to update.
     */
    where: FamilyMemberWhereUniqueInput
  }

  /**
   * FamilyMember updateMany
   */
  export type FamilyMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FamilyMembers.
     */
    data: XOR<FamilyMemberUpdateManyMutationInput, FamilyMemberUncheckedUpdateManyInput>
    /**
     * Filter which FamilyMembers to update
     */
    where?: FamilyMemberWhereInput
    /**
     * Limit how many FamilyMembers to update.
     */
    limit?: number
  }

  /**
   * FamilyMember upsert
   */
  export type FamilyMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyMember
     */
    select?: FamilyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FamilyMember
     */
    omit?: FamilyMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the FamilyMember to update in case it exists.
     */
    where: FamilyMemberWhereUniqueInput
    /**
     * In case the FamilyMember found by the `where` argument doesn't exist, create a new FamilyMember with this data.
     */
    create: XOR<FamilyMemberCreateInput, FamilyMemberUncheckedCreateInput>
    /**
     * In case the FamilyMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FamilyMemberUpdateInput, FamilyMemberUncheckedUpdateInput>
  }

  /**
   * FamilyMember delete
   */
  export type FamilyMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyMember
     */
    select?: FamilyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FamilyMember
     */
    omit?: FamilyMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyMemberInclude<ExtArgs> | null
    /**
     * Filter which FamilyMember to delete.
     */
    where: FamilyMemberWhereUniqueInput
  }

  /**
   * FamilyMember deleteMany
   */
  export type FamilyMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FamilyMembers to delete
     */
    where?: FamilyMemberWhereInput
    /**
     * Limit how many FamilyMembers to delete.
     */
    limit?: number
  }

  /**
   * FamilyMember.siblingEducation
   */
  export type FamilyMember$siblingEducationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiblingEducation
     */
    select?: SiblingEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiblingEducation
     */
    omit?: SiblingEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiblingEducationInclude<ExtArgs> | null
    where?: SiblingEducationWhereInput
    orderBy?: SiblingEducationOrderByWithRelationInput | SiblingEducationOrderByWithRelationInput[]
    cursor?: SiblingEducationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SiblingEducationScalarFieldEnum | SiblingEducationScalarFieldEnum[]
  }

  /**
   * FamilyMember without action
   */
  export type FamilyMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyMember
     */
    select?: FamilyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FamilyMember
     */
    omit?: FamilyMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyMemberInclude<ExtArgs> | null
  }


  /**
   * Model OtherFunding
   */

  export type AggregateOtherFunding = {
    _count: OtherFundingCountAggregateOutputType | null
    _avg: OtherFundingAvgAggregateOutputType | null
    _sum: OtherFundingSumAggregateOutputType | null
    _min: OtherFundingMinAggregateOutputType | null
    _max: OtherFundingMaxAggregateOutputType | null
  }

  export type OtherFundingAvgAggregateOutputType = {
    funding_id: number | null
    student_id: number | null
    annual_amount: Decimal | null
  }

  export type OtherFundingSumAggregateOutputType = {
    funding_id: number | null
    student_id: number | null
    annual_amount: Decimal | null
  }

  export type OtherFundingMinAggregateOutputType = {
    funding_id: number | null
    student_id: number | null
    funding_name: string | null
    organization: string | null
    annual_amount: Decimal | null
    start_date: Date | null
    end_date: Date | null
  }

  export type OtherFundingMaxAggregateOutputType = {
    funding_id: number | null
    student_id: number | null
    funding_name: string | null
    organization: string | null
    annual_amount: Decimal | null
    start_date: Date | null
    end_date: Date | null
  }

  export type OtherFundingCountAggregateOutputType = {
    funding_id: number
    student_id: number
    funding_name: number
    organization: number
    annual_amount: number
    start_date: number
    end_date: number
    _all: number
  }


  export type OtherFundingAvgAggregateInputType = {
    funding_id?: true
    student_id?: true
    annual_amount?: true
  }

  export type OtherFundingSumAggregateInputType = {
    funding_id?: true
    student_id?: true
    annual_amount?: true
  }

  export type OtherFundingMinAggregateInputType = {
    funding_id?: true
    student_id?: true
    funding_name?: true
    organization?: true
    annual_amount?: true
    start_date?: true
    end_date?: true
  }

  export type OtherFundingMaxAggregateInputType = {
    funding_id?: true
    student_id?: true
    funding_name?: true
    organization?: true
    annual_amount?: true
    start_date?: true
    end_date?: true
  }

  export type OtherFundingCountAggregateInputType = {
    funding_id?: true
    student_id?: true
    funding_name?: true
    organization?: true
    annual_amount?: true
    start_date?: true
    end_date?: true
    _all?: true
  }

  export type OtherFundingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OtherFunding to aggregate.
     */
    where?: OtherFundingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtherFundings to fetch.
     */
    orderBy?: OtherFundingOrderByWithRelationInput | OtherFundingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OtherFundingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtherFundings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtherFundings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OtherFundings
    **/
    _count?: true | OtherFundingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OtherFundingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OtherFundingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OtherFundingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OtherFundingMaxAggregateInputType
  }

  export type GetOtherFundingAggregateType<T extends OtherFundingAggregateArgs> = {
        [P in keyof T & keyof AggregateOtherFunding]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOtherFunding[P]>
      : GetScalarType<T[P], AggregateOtherFunding[P]>
  }




  export type OtherFundingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OtherFundingWhereInput
    orderBy?: OtherFundingOrderByWithAggregationInput | OtherFundingOrderByWithAggregationInput[]
    by: OtherFundingScalarFieldEnum[] | OtherFundingScalarFieldEnum
    having?: OtherFundingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OtherFundingCountAggregateInputType | true
    _avg?: OtherFundingAvgAggregateInputType
    _sum?: OtherFundingSumAggregateInputType
    _min?: OtherFundingMinAggregateInputType
    _max?: OtherFundingMaxAggregateInputType
  }

  export type OtherFundingGroupByOutputType = {
    funding_id: number
    student_id: number
    funding_name: string
    organization: string
    annual_amount: Decimal
    start_date: Date
    end_date: Date
    _count: OtherFundingCountAggregateOutputType | null
    _avg: OtherFundingAvgAggregateOutputType | null
    _sum: OtherFundingSumAggregateOutputType | null
    _min: OtherFundingMinAggregateOutputType | null
    _max: OtherFundingMaxAggregateOutputType | null
  }

  type GetOtherFundingGroupByPayload<T extends OtherFundingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OtherFundingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OtherFundingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OtherFundingGroupByOutputType[P]>
            : GetScalarType<T[P], OtherFundingGroupByOutputType[P]>
        }
      >
    >


  export type OtherFundingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    funding_id?: boolean
    student_id?: boolean
    funding_name?: boolean
    organization?: boolean
    annual_amount?: boolean
    start_date?: boolean
    end_date?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["otherFunding"]>



  export type OtherFundingSelectScalar = {
    funding_id?: boolean
    student_id?: boolean
    funding_name?: boolean
    organization?: boolean
    annual_amount?: boolean
    start_date?: boolean
    end_date?: boolean
  }

  export type OtherFundingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"funding_id" | "student_id" | "funding_name" | "organization" | "annual_amount" | "start_date" | "end_date", ExtArgs["result"]["otherFunding"]>
  export type OtherFundingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }

  export type $OtherFundingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OtherFunding"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      funding_id: number
      student_id: number
      funding_name: string
      organization: string
      annual_amount: Prisma.Decimal
      start_date: Date
      end_date: Date
    }, ExtArgs["result"]["otherFunding"]>
    composites: {}
  }

  type OtherFundingGetPayload<S extends boolean | null | undefined | OtherFundingDefaultArgs> = $Result.GetResult<Prisma.$OtherFundingPayload, S>

  type OtherFundingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OtherFundingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OtherFundingCountAggregateInputType | true
    }

  export interface OtherFundingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OtherFunding'], meta: { name: 'OtherFunding' } }
    /**
     * Find zero or one OtherFunding that matches the filter.
     * @param {OtherFundingFindUniqueArgs} args - Arguments to find a OtherFunding
     * @example
     * // Get one OtherFunding
     * const otherFunding = await prisma.otherFunding.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OtherFundingFindUniqueArgs>(args: SelectSubset<T, OtherFundingFindUniqueArgs<ExtArgs>>): Prisma__OtherFundingClient<$Result.GetResult<Prisma.$OtherFundingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OtherFunding that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OtherFundingFindUniqueOrThrowArgs} args - Arguments to find a OtherFunding
     * @example
     * // Get one OtherFunding
     * const otherFunding = await prisma.otherFunding.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OtherFundingFindUniqueOrThrowArgs>(args: SelectSubset<T, OtherFundingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OtherFundingClient<$Result.GetResult<Prisma.$OtherFundingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OtherFunding that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtherFundingFindFirstArgs} args - Arguments to find a OtherFunding
     * @example
     * // Get one OtherFunding
     * const otherFunding = await prisma.otherFunding.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OtherFundingFindFirstArgs>(args?: SelectSubset<T, OtherFundingFindFirstArgs<ExtArgs>>): Prisma__OtherFundingClient<$Result.GetResult<Prisma.$OtherFundingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OtherFunding that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtherFundingFindFirstOrThrowArgs} args - Arguments to find a OtherFunding
     * @example
     * // Get one OtherFunding
     * const otherFunding = await prisma.otherFunding.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OtherFundingFindFirstOrThrowArgs>(args?: SelectSubset<T, OtherFundingFindFirstOrThrowArgs<ExtArgs>>): Prisma__OtherFundingClient<$Result.GetResult<Prisma.$OtherFundingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OtherFundings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtherFundingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OtherFundings
     * const otherFundings = await prisma.otherFunding.findMany()
     * 
     * // Get first 10 OtherFundings
     * const otherFundings = await prisma.otherFunding.findMany({ take: 10 })
     * 
     * // Only select the `funding_id`
     * const otherFundingWithFunding_idOnly = await prisma.otherFunding.findMany({ select: { funding_id: true } })
     * 
     */
    findMany<T extends OtherFundingFindManyArgs>(args?: SelectSubset<T, OtherFundingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtherFundingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OtherFunding.
     * @param {OtherFundingCreateArgs} args - Arguments to create a OtherFunding.
     * @example
     * // Create one OtherFunding
     * const OtherFunding = await prisma.otherFunding.create({
     *   data: {
     *     // ... data to create a OtherFunding
     *   }
     * })
     * 
     */
    create<T extends OtherFundingCreateArgs>(args: SelectSubset<T, OtherFundingCreateArgs<ExtArgs>>): Prisma__OtherFundingClient<$Result.GetResult<Prisma.$OtherFundingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OtherFundings.
     * @param {OtherFundingCreateManyArgs} args - Arguments to create many OtherFundings.
     * @example
     * // Create many OtherFundings
     * const otherFunding = await prisma.otherFunding.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OtherFundingCreateManyArgs>(args?: SelectSubset<T, OtherFundingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OtherFunding.
     * @param {OtherFundingDeleteArgs} args - Arguments to delete one OtherFunding.
     * @example
     * // Delete one OtherFunding
     * const OtherFunding = await prisma.otherFunding.delete({
     *   where: {
     *     // ... filter to delete one OtherFunding
     *   }
     * })
     * 
     */
    delete<T extends OtherFundingDeleteArgs>(args: SelectSubset<T, OtherFundingDeleteArgs<ExtArgs>>): Prisma__OtherFundingClient<$Result.GetResult<Prisma.$OtherFundingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OtherFunding.
     * @param {OtherFundingUpdateArgs} args - Arguments to update one OtherFunding.
     * @example
     * // Update one OtherFunding
     * const otherFunding = await prisma.otherFunding.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OtherFundingUpdateArgs>(args: SelectSubset<T, OtherFundingUpdateArgs<ExtArgs>>): Prisma__OtherFundingClient<$Result.GetResult<Prisma.$OtherFundingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OtherFundings.
     * @param {OtherFundingDeleteManyArgs} args - Arguments to filter OtherFundings to delete.
     * @example
     * // Delete a few OtherFundings
     * const { count } = await prisma.otherFunding.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OtherFundingDeleteManyArgs>(args?: SelectSubset<T, OtherFundingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OtherFundings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtherFundingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OtherFundings
     * const otherFunding = await prisma.otherFunding.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OtherFundingUpdateManyArgs>(args: SelectSubset<T, OtherFundingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OtherFunding.
     * @param {OtherFundingUpsertArgs} args - Arguments to update or create a OtherFunding.
     * @example
     * // Update or create a OtherFunding
     * const otherFunding = await prisma.otherFunding.upsert({
     *   create: {
     *     // ... data to create a OtherFunding
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OtherFunding we want to update
     *   }
     * })
     */
    upsert<T extends OtherFundingUpsertArgs>(args: SelectSubset<T, OtherFundingUpsertArgs<ExtArgs>>): Prisma__OtherFundingClient<$Result.GetResult<Prisma.$OtherFundingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OtherFundings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtherFundingCountArgs} args - Arguments to filter OtherFundings to count.
     * @example
     * // Count the number of OtherFundings
     * const count = await prisma.otherFunding.count({
     *   where: {
     *     // ... the filter for the OtherFundings we want to count
     *   }
     * })
    **/
    count<T extends OtherFundingCountArgs>(
      args?: Subset<T, OtherFundingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OtherFundingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OtherFunding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtherFundingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OtherFundingAggregateArgs>(args: Subset<T, OtherFundingAggregateArgs>): Prisma.PrismaPromise<GetOtherFundingAggregateType<T>>

    /**
     * Group by OtherFunding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtherFundingGroupByArgs} args - Group by arguments.
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
      T extends OtherFundingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OtherFundingGroupByArgs['orderBy'] }
        : { orderBy?: OtherFundingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OtherFundingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOtherFundingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OtherFunding model
   */
  readonly fields: OtherFundingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OtherFunding.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OtherFundingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OtherFunding model
   */
  interface OtherFundingFieldRefs {
    readonly funding_id: FieldRef<"OtherFunding", 'Int'>
    readonly student_id: FieldRef<"OtherFunding", 'Int'>
    readonly funding_name: FieldRef<"OtherFunding", 'String'>
    readonly organization: FieldRef<"OtherFunding", 'String'>
    readonly annual_amount: FieldRef<"OtherFunding", 'Decimal'>
    readonly start_date: FieldRef<"OtherFunding", 'DateTime'>
    readonly end_date: FieldRef<"OtherFunding", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OtherFunding findUnique
   */
  export type OtherFundingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherFunding
     */
    select?: OtherFundingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherFunding
     */
    omit?: OtherFundingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherFundingInclude<ExtArgs> | null
    /**
     * Filter, which OtherFunding to fetch.
     */
    where: OtherFundingWhereUniqueInput
  }

  /**
   * OtherFunding findUniqueOrThrow
   */
  export type OtherFundingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherFunding
     */
    select?: OtherFundingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherFunding
     */
    omit?: OtherFundingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherFundingInclude<ExtArgs> | null
    /**
     * Filter, which OtherFunding to fetch.
     */
    where: OtherFundingWhereUniqueInput
  }

  /**
   * OtherFunding findFirst
   */
  export type OtherFundingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherFunding
     */
    select?: OtherFundingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherFunding
     */
    omit?: OtherFundingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherFundingInclude<ExtArgs> | null
    /**
     * Filter, which OtherFunding to fetch.
     */
    where?: OtherFundingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtherFundings to fetch.
     */
    orderBy?: OtherFundingOrderByWithRelationInput | OtherFundingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OtherFundings.
     */
    cursor?: OtherFundingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtherFundings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtherFundings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OtherFundings.
     */
    distinct?: OtherFundingScalarFieldEnum | OtherFundingScalarFieldEnum[]
  }

  /**
   * OtherFunding findFirstOrThrow
   */
  export type OtherFundingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherFunding
     */
    select?: OtherFundingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherFunding
     */
    omit?: OtherFundingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherFundingInclude<ExtArgs> | null
    /**
     * Filter, which OtherFunding to fetch.
     */
    where?: OtherFundingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtherFundings to fetch.
     */
    orderBy?: OtherFundingOrderByWithRelationInput | OtherFundingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OtherFundings.
     */
    cursor?: OtherFundingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtherFundings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtherFundings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OtherFundings.
     */
    distinct?: OtherFundingScalarFieldEnum | OtherFundingScalarFieldEnum[]
  }

  /**
   * OtherFunding findMany
   */
  export type OtherFundingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherFunding
     */
    select?: OtherFundingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherFunding
     */
    omit?: OtherFundingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherFundingInclude<ExtArgs> | null
    /**
     * Filter, which OtherFundings to fetch.
     */
    where?: OtherFundingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtherFundings to fetch.
     */
    orderBy?: OtherFundingOrderByWithRelationInput | OtherFundingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OtherFundings.
     */
    cursor?: OtherFundingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtherFundings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtherFundings.
     */
    skip?: number
    distinct?: OtherFundingScalarFieldEnum | OtherFundingScalarFieldEnum[]
  }

  /**
   * OtherFunding create
   */
  export type OtherFundingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherFunding
     */
    select?: OtherFundingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherFunding
     */
    omit?: OtherFundingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherFundingInclude<ExtArgs> | null
    /**
     * The data needed to create a OtherFunding.
     */
    data: XOR<OtherFundingCreateInput, OtherFundingUncheckedCreateInput>
  }

  /**
   * OtherFunding createMany
   */
  export type OtherFundingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OtherFundings.
     */
    data: OtherFundingCreateManyInput | OtherFundingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OtherFunding update
   */
  export type OtherFundingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherFunding
     */
    select?: OtherFundingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherFunding
     */
    omit?: OtherFundingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherFundingInclude<ExtArgs> | null
    /**
     * The data needed to update a OtherFunding.
     */
    data: XOR<OtherFundingUpdateInput, OtherFundingUncheckedUpdateInput>
    /**
     * Choose, which OtherFunding to update.
     */
    where: OtherFundingWhereUniqueInput
  }

  /**
   * OtherFunding updateMany
   */
  export type OtherFundingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OtherFundings.
     */
    data: XOR<OtherFundingUpdateManyMutationInput, OtherFundingUncheckedUpdateManyInput>
    /**
     * Filter which OtherFundings to update
     */
    where?: OtherFundingWhereInput
    /**
     * Limit how many OtherFundings to update.
     */
    limit?: number
  }

  /**
   * OtherFunding upsert
   */
  export type OtherFundingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherFunding
     */
    select?: OtherFundingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherFunding
     */
    omit?: OtherFundingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherFundingInclude<ExtArgs> | null
    /**
     * The filter to search for the OtherFunding to update in case it exists.
     */
    where: OtherFundingWhereUniqueInput
    /**
     * In case the OtherFunding found by the `where` argument doesn't exist, create a new OtherFunding with this data.
     */
    create: XOR<OtherFundingCreateInput, OtherFundingUncheckedCreateInput>
    /**
     * In case the OtherFunding was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OtherFundingUpdateInput, OtherFundingUncheckedUpdateInput>
  }

  /**
   * OtherFunding delete
   */
  export type OtherFundingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherFunding
     */
    select?: OtherFundingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherFunding
     */
    omit?: OtherFundingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherFundingInclude<ExtArgs> | null
    /**
     * Filter which OtherFunding to delete.
     */
    where: OtherFundingWhereUniqueInput
  }

  /**
   * OtherFunding deleteMany
   */
  export type OtherFundingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OtherFundings to delete
     */
    where?: OtherFundingWhereInput
    /**
     * Limit how many OtherFundings to delete.
     */
    limit?: number
  }

  /**
   * OtherFunding without action
   */
  export type OtherFundingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherFunding
     */
    select?: OtherFundingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherFunding
     */
    omit?: OtherFundingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherFundingInclude<ExtArgs> | null
  }


  /**
   * Model CommitteeReview
   */

  export type AggregateCommitteeReview = {
    _count: CommitteeReviewCountAggregateOutputType | null
    _avg: CommitteeReviewAvgAggregateOutputType | null
    _sum: CommitteeReviewSumAggregateOutputType | null
    _min: CommitteeReviewMinAggregateOutputType | null
    _max: CommitteeReviewMaxAggregateOutputType | null
  }

  export type CommitteeReviewAvgAggregateOutputType = {
    review_id: number | null
    application_id: number | null
    reviewer_id: number | null
    points_awarded: number | null
  }

  export type CommitteeReviewSumAggregateOutputType = {
    review_id: number | null
    application_id: number | null
    reviewer_id: number | null
    points_awarded: number | null
  }

  export type CommitteeReviewMinAggregateOutputType = {
    review_id: number | null
    application_id: number | null
    reviewer_id: number | null
    review_date: Date | null
    points_awarded: number | null
    comments: string | null
    status: $Enums.ReviewStatus | null
    is_read: boolean | null
  }

  export type CommitteeReviewMaxAggregateOutputType = {
    review_id: number | null
    application_id: number | null
    reviewer_id: number | null
    review_date: Date | null
    points_awarded: number | null
    comments: string | null
    status: $Enums.ReviewStatus | null
    is_read: boolean | null
  }

  export type CommitteeReviewCountAggregateOutputType = {
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


  export type CommitteeReviewAvgAggregateInputType = {
    review_id?: true
    application_id?: true
    reviewer_id?: true
    points_awarded?: true
  }

  export type CommitteeReviewSumAggregateInputType = {
    review_id?: true
    application_id?: true
    reviewer_id?: true
    points_awarded?: true
  }

  export type CommitteeReviewMinAggregateInputType = {
    review_id?: true
    application_id?: true
    reviewer_id?: true
    review_date?: true
    points_awarded?: true
    comments?: true
    status?: true
    is_read?: true
  }

  export type CommitteeReviewMaxAggregateInputType = {
    review_id?: true
    application_id?: true
    reviewer_id?: true
    review_date?: true
    points_awarded?: true
    comments?: true
    status?: true
    is_read?: true
  }

  export type CommitteeReviewCountAggregateInputType = {
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

  export type CommitteeReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommitteeReview to aggregate.
     */
    where?: CommitteeReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommitteeReviews to fetch.
     */
    orderBy?: CommitteeReviewOrderByWithRelationInput | CommitteeReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommitteeReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommitteeReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommitteeReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CommitteeReviews
    **/
    _count?: true | CommitteeReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommitteeReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommitteeReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommitteeReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommitteeReviewMaxAggregateInputType
  }

  export type GetCommitteeReviewAggregateType<T extends CommitteeReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateCommitteeReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommitteeReview[P]>
      : GetScalarType<T[P], AggregateCommitteeReview[P]>
  }




  export type CommitteeReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommitteeReviewWhereInput
    orderBy?: CommitteeReviewOrderByWithAggregationInput | CommitteeReviewOrderByWithAggregationInput[]
    by: CommitteeReviewScalarFieldEnum[] | CommitteeReviewScalarFieldEnum
    having?: CommitteeReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommitteeReviewCountAggregateInputType | true
    _avg?: CommitteeReviewAvgAggregateInputType
    _sum?: CommitteeReviewSumAggregateInputType
    _min?: CommitteeReviewMinAggregateInputType
    _max?: CommitteeReviewMaxAggregateInputType
  }

  export type CommitteeReviewGroupByOutputType = {
    review_id: number
    application_id: number
    reviewer_id: number
    review_date: Date
    points_awarded: number
    comments: string
    status: $Enums.ReviewStatus
    is_read: boolean
    _count: CommitteeReviewCountAggregateOutputType | null
    _avg: CommitteeReviewAvgAggregateOutputType | null
    _sum: CommitteeReviewSumAggregateOutputType | null
    _min: CommitteeReviewMinAggregateOutputType | null
    _max: CommitteeReviewMaxAggregateOutputType | null
  }

  type GetCommitteeReviewGroupByPayload<T extends CommitteeReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommitteeReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommitteeReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommitteeReviewGroupByOutputType[P]>
            : GetScalarType<T[P], CommitteeReviewGroupByOutputType[P]>
        }
      >
    >


  export type CommitteeReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    review_id?: boolean
    application_id?: boolean
    reviewer_id?: boolean
    review_date?: boolean
    points_awarded?: boolean
    comments?: boolean
    status?: boolean
    is_read?: boolean
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
    reviewer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["committeeReview"]>



  export type CommitteeReviewSelectScalar = {
    review_id?: boolean
    application_id?: boolean
    reviewer_id?: boolean
    review_date?: boolean
    points_awarded?: boolean
    comments?: boolean
    status?: boolean
    is_read?: boolean
  }

  export type CommitteeReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"review_id" | "application_id" | "reviewer_id" | "review_date" | "points_awarded" | "comments" | "status" | "is_read", ExtArgs["result"]["committeeReview"]>
  export type CommitteeReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
    reviewer?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CommitteeReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CommitteeReview"
    objects: {
      application: Prisma.$ApplicationPayload<ExtArgs>
      reviewer: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      review_id: number
      application_id: number
      reviewer_id: number
      review_date: Date
      points_awarded: number
      comments: string
      status: $Enums.ReviewStatus
      is_read: boolean
    }, ExtArgs["result"]["committeeReview"]>
    composites: {}
  }

  type CommitteeReviewGetPayload<S extends boolean | null | undefined | CommitteeReviewDefaultArgs> = $Result.GetResult<Prisma.$CommitteeReviewPayload, S>

  type CommitteeReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommitteeReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommitteeReviewCountAggregateInputType | true
    }

  export interface CommitteeReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CommitteeReview'], meta: { name: 'CommitteeReview' } }
    /**
     * Find zero or one CommitteeReview that matches the filter.
     * @param {CommitteeReviewFindUniqueArgs} args - Arguments to find a CommitteeReview
     * @example
     * // Get one CommitteeReview
     * const committeeReview = await prisma.committeeReview.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommitteeReviewFindUniqueArgs>(args: SelectSubset<T, CommitteeReviewFindUniqueArgs<ExtArgs>>): Prisma__CommitteeReviewClient<$Result.GetResult<Prisma.$CommitteeReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CommitteeReview that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommitteeReviewFindUniqueOrThrowArgs} args - Arguments to find a CommitteeReview
     * @example
     * // Get one CommitteeReview
     * const committeeReview = await prisma.committeeReview.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommitteeReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, CommitteeReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommitteeReviewClient<$Result.GetResult<Prisma.$CommitteeReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommitteeReview that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommitteeReviewFindFirstArgs} args - Arguments to find a CommitteeReview
     * @example
     * // Get one CommitteeReview
     * const committeeReview = await prisma.committeeReview.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommitteeReviewFindFirstArgs>(args?: SelectSubset<T, CommitteeReviewFindFirstArgs<ExtArgs>>): Prisma__CommitteeReviewClient<$Result.GetResult<Prisma.$CommitteeReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommitteeReview that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommitteeReviewFindFirstOrThrowArgs} args - Arguments to find a CommitteeReview
     * @example
     * // Get one CommitteeReview
     * const committeeReview = await prisma.committeeReview.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommitteeReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, CommitteeReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommitteeReviewClient<$Result.GetResult<Prisma.$CommitteeReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CommitteeReviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommitteeReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CommitteeReviews
     * const committeeReviews = await prisma.committeeReview.findMany()
     * 
     * // Get first 10 CommitteeReviews
     * const committeeReviews = await prisma.committeeReview.findMany({ take: 10 })
     * 
     * // Only select the `review_id`
     * const committeeReviewWithReview_idOnly = await prisma.committeeReview.findMany({ select: { review_id: true } })
     * 
     */
    findMany<T extends CommitteeReviewFindManyArgs>(args?: SelectSubset<T, CommitteeReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommitteeReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CommitteeReview.
     * @param {CommitteeReviewCreateArgs} args - Arguments to create a CommitteeReview.
     * @example
     * // Create one CommitteeReview
     * const CommitteeReview = await prisma.committeeReview.create({
     *   data: {
     *     // ... data to create a CommitteeReview
     *   }
     * })
     * 
     */
    create<T extends CommitteeReviewCreateArgs>(args: SelectSubset<T, CommitteeReviewCreateArgs<ExtArgs>>): Prisma__CommitteeReviewClient<$Result.GetResult<Prisma.$CommitteeReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CommitteeReviews.
     * @param {CommitteeReviewCreateManyArgs} args - Arguments to create many CommitteeReviews.
     * @example
     * // Create many CommitteeReviews
     * const committeeReview = await prisma.committeeReview.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommitteeReviewCreateManyArgs>(args?: SelectSubset<T, CommitteeReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CommitteeReview.
     * @param {CommitteeReviewDeleteArgs} args - Arguments to delete one CommitteeReview.
     * @example
     * // Delete one CommitteeReview
     * const CommitteeReview = await prisma.committeeReview.delete({
     *   where: {
     *     // ... filter to delete one CommitteeReview
     *   }
     * })
     * 
     */
    delete<T extends CommitteeReviewDeleteArgs>(args: SelectSubset<T, CommitteeReviewDeleteArgs<ExtArgs>>): Prisma__CommitteeReviewClient<$Result.GetResult<Prisma.$CommitteeReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CommitteeReview.
     * @param {CommitteeReviewUpdateArgs} args - Arguments to update one CommitteeReview.
     * @example
     * // Update one CommitteeReview
     * const committeeReview = await prisma.committeeReview.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommitteeReviewUpdateArgs>(args: SelectSubset<T, CommitteeReviewUpdateArgs<ExtArgs>>): Prisma__CommitteeReviewClient<$Result.GetResult<Prisma.$CommitteeReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CommitteeReviews.
     * @param {CommitteeReviewDeleteManyArgs} args - Arguments to filter CommitteeReviews to delete.
     * @example
     * // Delete a few CommitteeReviews
     * const { count } = await prisma.committeeReview.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommitteeReviewDeleteManyArgs>(args?: SelectSubset<T, CommitteeReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommitteeReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommitteeReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CommitteeReviews
     * const committeeReview = await prisma.committeeReview.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommitteeReviewUpdateManyArgs>(args: SelectSubset<T, CommitteeReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CommitteeReview.
     * @param {CommitteeReviewUpsertArgs} args - Arguments to update or create a CommitteeReview.
     * @example
     * // Update or create a CommitteeReview
     * const committeeReview = await prisma.committeeReview.upsert({
     *   create: {
     *     // ... data to create a CommitteeReview
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CommitteeReview we want to update
     *   }
     * })
     */
    upsert<T extends CommitteeReviewUpsertArgs>(args: SelectSubset<T, CommitteeReviewUpsertArgs<ExtArgs>>): Prisma__CommitteeReviewClient<$Result.GetResult<Prisma.$CommitteeReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CommitteeReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommitteeReviewCountArgs} args - Arguments to filter CommitteeReviews to count.
     * @example
     * // Count the number of CommitteeReviews
     * const count = await prisma.committeeReview.count({
     *   where: {
     *     // ... the filter for the CommitteeReviews we want to count
     *   }
     * })
    **/
    count<T extends CommitteeReviewCountArgs>(
      args?: Subset<T, CommitteeReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommitteeReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CommitteeReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommitteeReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommitteeReviewAggregateArgs>(args: Subset<T, CommitteeReviewAggregateArgs>): Prisma.PrismaPromise<GetCommitteeReviewAggregateType<T>>

    /**
     * Group by CommitteeReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommitteeReviewGroupByArgs} args - Group by arguments.
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
      T extends CommitteeReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommitteeReviewGroupByArgs['orderBy'] }
        : { orderBy?: CommitteeReviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommitteeReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommitteeReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CommitteeReview model
   */
  readonly fields: CommitteeReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CommitteeReview.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommitteeReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    application<T extends ApplicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApplicationDefaultArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reviewer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CommitteeReview model
   */
  interface CommitteeReviewFieldRefs {
    readonly review_id: FieldRef<"CommitteeReview", 'Int'>
    readonly application_id: FieldRef<"CommitteeReview", 'Int'>
    readonly reviewer_id: FieldRef<"CommitteeReview", 'Int'>
    readonly review_date: FieldRef<"CommitteeReview", 'DateTime'>
    readonly points_awarded: FieldRef<"CommitteeReview", 'Int'>
    readonly comments: FieldRef<"CommitteeReview", 'String'>
    readonly status: FieldRef<"CommitteeReview", 'ReviewStatus'>
    readonly is_read: FieldRef<"CommitteeReview", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * CommitteeReview findUnique
   */
  export type CommitteeReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommitteeReview
     */
    select?: CommitteeReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommitteeReview
     */
    omit?: CommitteeReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitteeReviewInclude<ExtArgs> | null
    /**
     * Filter, which CommitteeReview to fetch.
     */
    where: CommitteeReviewWhereUniqueInput
  }

  /**
   * CommitteeReview findUniqueOrThrow
   */
  export type CommitteeReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommitteeReview
     */
    select?: CommitteeReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommitteeReview
     */
    omit?: CommitteeReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitteeReviewInclude<ExtArgs> | null
    /**
     * Filter, which CommitteeReview to fetch.
     */
    where: CommitteeReviewWhereUniqueInput
  }

  /**
   * CommitteeReview findFirst
   */
  export type CommitteeReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommitteeReview
     */
    select?: CommitteeReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommitteeReview
     */
    omit?: CommitteeReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitteeReviewInclude<ExtArgs> | null
    /**
     * Filter, which CommitteeReview to fetch.
     */
    where?: CommitteeReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommitteeReviews to fetch.
     */
    orderBy?: CommitteeReviewOrderByWithRelationInput | CommitteeReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommitteeReviews.
     */
    cursor?: CommitteeReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommitteeReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommitteeReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommitteeReviews.
     */
    distinct?: CommitteeReviewScalarFieldEnum | CommitteeReviewScalarFieldEnum[]
  }

  /**
   * CommitteeReview findFirstOrThrow
   */
  export type CommitteeReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommitteeReview
     */
    select?: CommitteeReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommitteeReview
     */
    omit?: CommitteeReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitteeReviewInclude<ExtArgs> | null
    /**
     * Filter, which CommitteeReview to fetch.
     */
    where?: CommitteeReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommitteeReviews to fetch.
     */
    orderBy?: CommitteeReviewOrderByWithRelationInput | CommitteeReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommitteeReviews.
     */
    cursor?: CommitteeReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommitteeReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommitteeReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommitteeReviews.
     */
    distinct?: CommitteeReviewScalarFieldEnum | CommitteeReviewScalarFieldEnum[]
  }

  /**
   * CommitteeReview findMany
   */
  export type CommitteeReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommitteeReview
     */
    select?: CommitteeReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommitteeReview
     */
    omit?: CommitteeReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitteeReviewInclude<ExtArgs> | null
    /**
     * Filter, which CommitteeReviews to fetch.
     */
    where?: CommitteeReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommitteeReviews to fetch.
     */
    orderBy?: CommitteeReviewOrderByWithRelationInput | CommitteeReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CommitteeReviews.
     */
    cursor?: CommitteeReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommitteeReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommitteeReviews.
     */
    skip?: number
    distinct?: CommitteeReviewScalarFieldEnum | CommitteeReviewScalarFieldEnum[]
  }

  /**
   * CommitteeReview create
   */
  export type CommitteeReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommitteeReview
     */
    select?: CommitteeReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommitteeReview
     */
    omit?: CommitteeReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitteeReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a CommitteeReview.
     */
    data: XOR<CommitteeReviewCreateInput, CommitteeReviewUncheckedCreateInput>
  }

  /**
   * CommitteeReview createMany
   */
  export type CommitteeReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CommitteeReviews.
     */
    data: CommitteeReviewCreateManyInput | CommitteeReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CommitteeReview update
   */
  export type CommitteeReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommitteeReview
     */
    select?: CommitteeReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommitteeReview
     */
    omit?: CommitteeReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitteeReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a CommitteeReview.
     */
    data: XOR<CommitteeReviewUpdateInput, CommitteeReviewUncheckedUpdateInput>
    /**
     * Choose, which CommitteeReview to update.
     */
    where: CommitteeReviewWhereUniqueInput
  }

  /**
   * CommitteeReview updateMany
   */
  export type CommitteeReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CommitteeReviews.
     */
    data: XOR<CommitteeReviewUpdateManyMutationInput, CommitteeReviewUncheckedUpdateManyInput>
    /**
     * Filter which CommitteeReviews to update
     */
    where?: CommitteeReviewWhereInput
    /**
     * Limit how many CommitteeReviews to update.
     */
    limit?: number
  }

  /**
   * CommitteeReview upsert
   */
  export type CommitteeReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommitteeReview
     */
    select?: CommitteeReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommitteeReview
     */
    omit?: CommitteeReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitteeReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the CommitteeReview to update in case it exists.
     */
    where: CommitteeReviewWhereUniqueInput
    /**
     * In case the CommitteeReview found by the `where` argument doesn't exist, create a new CommitteeReview with this data.
     */
    create: XOR<CommitteeReviewCreateInput, CommitteeReviewUncheckedCreateInput>
    /**
     * In case the CommitteeReview was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommitteeReviewUpdateInput, CommitteeReviewUncheckedUpdateInput>
  }

  /**
   * CommitteeReview delete
   */
  export type CommitteeReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommitteeReview
     */
    select?: CommitteeReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommitteeReview
     */
    omit?: CommitteeReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitteeReviewInclude<ExtArgs> | null
    /**
     * Filter which CommitteeReview to delete.
     */
    where: CommitteeReviewWhereUniqueInput
  }

  /**
   * CommitteeReview deleteMany
   */
  export type CommitteeReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommitteeReviews to delete
     */
    where?: CommitteeReviewWhereInput
    /**
     * Limit how many CommitteeReviews to delete.
     */
    limit?: number
  }

  /**
   * CommitteeReview without action
   */
  export type CommitteeReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommitteeReview
     */
    select?: CommitteeReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommitteeReview
     */
    omit?: CommitteeReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitteeReviewInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    payment_id: number | null
    application_id: number | null
    amount: Decimal | null
  }

  export type PaymentSumAggregateOutputType = {
    payment_id: number | null
    application_id: number | null
    amount: Decimal | null
  }

  export type PaymentMinAggregateOutputType = {
    payment_id: number | null
    application_id: number | null
    amount: Decimal | null
    payment_date: Date | null
    payment_method: string | null
    transaction_id: string | null
    status: $Enums.PaymentStatus | null
  }

  export type PaymentMaxAggregateOutputType = {
    payment_id: number | null
    application_id: number | null
    amount: Decimal | null
    payment_date: Date | null
    payment_method: string | null
    transaction_id: string | null
    status: $Enums.PaymentStatus | null
  }

  export type PaymentCountAggregateOutputType = {
    payment_id: number
    application_id: number
    amount: number
    payment_date: number
    payment_method: number
    transaction_id: number
    status: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    payment_id?: true
    application_id?: true
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    payment_id?: true
    application_id?: true
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    payment_id?: true
    application_id?: true
    amount?: true
    payment_date?: true
    payment_method?: true
    transaction_id?: true
    status?: true
  }

  export type PaymentMaxAggregateInputType = {
    payment_id?: true
    application_id?: true
    amount?: true
    payment_date?: true
    payment_method?: true
    transaction_id?: true
    status?: true
  }

  export type PaymentCountAggregateInputType = {
    payment_id?: true
    application_id?: true
    amount?: true
    payment_date?: true
    payment_method?: true
    transaction_id?: true
    status?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    payment_id: number
    application_id: number
    amount: Decimal
    payment_date: Date
    payment_method: string
    transaction_id: string
    status: $Enums.PaymentStatus
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    payment_id?: boolean
    application_id?: boolean
    amount?: boolean
    payment_date?: boolean
    payment_method?: boolean
    transaction_id?: boolean
    status?: boolean
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>



  export type PaymentSelectScalar = {
    payment_id?: boolean
    application_id?: boolean
    amount?: boolean
    payment_date?: boolean
    payment_method?: boolean
    transaction_id?: boolean
    status?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"payment_id" | "application_id" | "amount" | "payment_date" | "payment_method" | "transaction_id" | "status", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      application: Prisma.$ApplicationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      payment_id: number
      application_id: number
      amount: Prisma.Decimal
      payment_date: Date
      payment_method: string
      transaction_id: string
      status: $Enums.PaymentStatus
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `payment_id`
     * const paymentWithPayment_idOnly = await prisma.payment.findMany({ select: { payment_id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    application<T extends ApplicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApplicationDefaultArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly payment_id: FieldRef<"Payment", 'Int'>
    readonly application_id: FieldRef<"Payment", 'Int'>
    readonly amount: FieldRef<"Payment", 'Decimal'>
    readonly payment_date: FieldRef<"Payment", 'DateTime'>
    readonly payment_method: FieldRef<"Payment", 'String'>
    readonly transaction_id: FieldRef<"Payment", 'String'>
    readonly status: FieldRef<"Payment", 'PaymentStatus'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model SiblingEducation
   */

  export type AggregateSiblingEducation = {
    _count: SiblingEducationCountAggregateOutputType | null
    _avg: SiblingEducationAvgAggregateOutputType | null
    _sum: SiblingEducationSumAggregateOutputType | null
    _min: SiblingEducationMinAggregateOutputType | null
    _max: SiblingEducationMaxAggregateOutputType | null
  }

  export type SiblingEducationAvgAggregateOutputType = {
    education_id: number | null
    student_id: number | null
    member_id: number | null
  }

  export type SiblingEducationSumAggregateOutputType = {
    education_id: number | null
    student_id: number | null
    member_id: number | null
  }

  export type SiblingEducationMinAggregateOutputType = {
    education_id: number | null
    student_id: number | null
    member_id: number | null
    institution: string | null
    year_grade: string | null
    registration_course: string | null
  }

  export type SiblingEducationMaxAggregateOutputType = {
    education_id: number | null
    student_id: number | null
    member_id: number | null
    institution: string | null
    year_grade: string | null
    registration_course: string | null
  }

  export type SiblingEducationCountAggregateOutputType = {
    education_id: number
    student_id: number
    member_id: number
    institution: number
    year_grade: number
    registration_course: number
    _all: number
  }


  export type SiblingEducationAvgAggregateInputType = {
    education_id?: true
    student_id?: true
    member_id?: true
  }

  export type SiblingEducationSumAggregateInputType = {
    education_id?: true
    student_id?: true
    member_id?: true
  }

  export type SiblingEducationMinAggregateInputType = {
    education_id?: true
    student_id?: true
    member_id?: true
    institution?: true
    year_grade?: true
    registration_course?: true
  }

  export type SiblingEducationMaxAggregateInputType = {
    education_id?: true
    student_id?: true
    member_id?: true
    institution?: true
    year_grade?: true
    registration_course?: true
  }

  export type SiblingEducationCountAggregateInputType = {
    education_id?: true
    student_id?: true
    member_id?: true
    institution?: true
    year_grade?: true
    registration_course?: true
    _all?: true
  }

  export type SiblingEducationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SiblingEducation to aggregate.
     */
    where?: SiblingEducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiblingEducations to fetch.
     */
    orderBy?: SiblingEducationOrderByWithRelationInput | SiblingEducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SiblingEducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiblingEducations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiblingEducations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SiblingEducations
    **/
    _count?: true | SiblingEducationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SiblingEducationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SiblingEducationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SiblingEducationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SiblingEducationMaxAggregateInputType
  }

  export type GetSiblingEducationAggregateType<T extends SiblingEducationAggregateArgs> = {
        [P in keyof T & keyof AggregateSiblingEducation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSiblingEducation[P]>
      : GetScalarType<T[P], AggregateSiblingEducation[P]>
  }




  export type SiblingEducationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiblingEducationWhereInput
    orderBy?: SiblingEducationOrderByWithAggregationInput | SiblingEducationOrderByWithAggregationInput[]
    by: SiblingEducationScalarFieldEnum[] | SiblingEducationScalarFieldEnum
    having?: SiblingEducationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SiblingEducationCountAggregateInputType | true
    _avg?: SiblingEducationAvgAggregateInputType
    _sum?: SiblingEducationSumAggregateInputType
    _min?: SiblingEducationMinAggregateInputType
    _max?: SiblingEducationMaxAggregateInputType
  }

  export type SiblingEducationGroupByOutputType = {
    education_id: number
    student_id: number
    member_id: number
    institution: string
    year_grade: string
    registration_course: string
    _count: SiblingEducationCountAggregateOutputType | null
    _avg: SiblingEducationAvgAggregateOutputType | null
    _sum: SiblingEducationSumAggregateOutputType | null
    _min: SiblingEducationMinAggregateOutputType | null
    _max: SiblingEducationMaxAggregateOutputType | null
  }

  type GetSiblingEducationGroupByPayload<T extends SiblingEducationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SiblingEducationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SiblingEducationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SiblingEducationGroupByOutputType[P]>
            : GetScalarType<T[P], SiblingEducationGroupByOutputType[P]>
        }
      >
    >


  export type SiblingEducationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    education_id?: boolean
    student_id?: boolean
    member_id?: boolean
    institution?: boolean
    year_grade?: boolean
    registration_course?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    member?: boolean | FamilyMemberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["siblingEducation"]>



  export type SiblingEducationSelectScalar = {
    education_id?: boolean
    student_id?: boolean
    member_id?: boolean
    institution?: boolean
    year_grade?: boolean
    registration_course?: boolean
  }

  export type SiblingEducationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"education_id" | "student_id" | "member_id" | "institution" | "year_grade" | "registration_course", ExtArgs["result"]["siblingEducation"]>
  export type SiblingEducationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    member?: boolean | FamilyMemberDefaultArgs<ExtArgs>
  }

  export type $SiblingEducationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SiblingEducation"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      member: Prisma.$FamilyMemberPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      education_id: number
      student_id: number
      member_id: number
      institution: string
      year_grade: string
      registration_course: string
    }, ExtArgs["result"]["siblingEducation"]>
    composites: {}
  }

  type SiblingEducationGetPayload<S extends boolean | null | undefined | SiblingEducationDefaultArgs> = $Result.GetResult<Prisma.$SiblingEducationPayload, S>

  type SiblingEducationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SiblingEducationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SiblingEducationCountAggregateInputType | true
    }

  export interface SiblingEducationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SiblingEducation'], meta: { name: 'SiblingEducation' } }
    /**
     * Find zero or one SiblingEducation that matches the filter.
     * @param {SiblingEducationFindUniqueArgs} args - Arguments to find a SiblingEducation
     * @example
     * // Get one SiblingEducation
     * const siblingEducation = await prisma.siblingEducation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SiblingEducationFindUniqueArgs>(args: SelectSubset<T, SiblingEducationFindUniqueArgs<ExtArgs>>): Prisma__SiblingEducationClient<$Result.GetResult<Prisma.$SiblingEducationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SiblingEducation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SiblingEducationFindUniqueOrThrowArgs} args - Arguments to find a SiblingEducation
     * @example
     * // Get one SiblingEducation
     * const siblingEducation = await prisma.siblingEducation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SiblingEducationFindUniqueOrThrowArgs>(args: SelectSubset<T, SiblingEducationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SiblingEducationClient<$Result.GetResult<Prisma.$SiblingEducationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SiblingEducation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiblingEducationFindFirstArgs} args - Arguments to find a SiblingEducation
     * @example
     * // Get one SiblingEducation
     * const siblingEducation = await prisma.siblingEducation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SiblingEducationFindFirstArgs>(args?: SelectSubset<T, SiblingEducationFindFirstArgs<ExtArgs>>): Prisma__SiblingEducationClient<$Result.GetResult<Prisma.$SiblingEducationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SiblingEducation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiblingEducationFindFirstOrThrowArgs} args - Arguments to find a SiblingEducation
     * @example
     * // Get one SiblingEducation
     * const siblingEducation = await prisma.siblingEducation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SiblingEducationFindFirstOrThrowArgs>(args?: SelectSubset<T, SiblingEducationFindFirstOrThrowArgs<ExtArgs>>): Prisma__SiblingEducationClient<$Result.GetResult<Prisma.$SiblingEducationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SiblingEducations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiblingEducationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SiblingEducations
     * const siblingEducations = await prisma.siblingEducation.findMany()
     * 
     * // Get first 10 SiblingEducations
     * const siblingEducations = await prisma.siblingEducation.findMany({ take: 10 })
     * 
     * // Only select the `education_id`
     * const siblingEducationWithEducation_idOnly = await prisma.siblingEducation.findMany({ select: { education_id: true } })
     * 
     */
    findMany<T extends SiblingEducationFindManyArgs>(args?: SelectSubset<T, SiblingEducationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiblingEducationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SiblingEducation.
     * @param {SiblingEducationCreateArgs} args - Arguments to create a SiblingEducation.
     * @example
     * // Create one SiblingEducation
     * const SiblingEducation = await prisma.siblingEducation.create({
     *   data: {
     *     // ... data to create a SiblingEducation
     *   }
     * })
     * 
     */
    create<T extends SiblingEducationCreateArgs>(args: SelectSubset<T, SiblingEducationCreateArgs<ExtArgs>>): Prisma__SiblingEducationClient<$Result.GetResult<Prisma.$SiblingEducationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SiblingEducations.
     * @param {SiblingEducationCreateManyArgs} args - Arguments to create many SiblingEducations.
     * @example
     * // Create many SiblingEducations
     * const siblingEducation = await prisma.siblingEducation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SiblingEducationCreateManyArgs>(args?: SelectSubset<T, SiblingEducationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SiblingEducation.
     * @param {SiblingEducationDeleteArgs} args - Arguments to delete one SiblingEducation.
     * @example
     * // Delete one SiblingEducation
     * const SiblingEducation = await prisma.siblingEducation.delete({
     *   where: {
     *     // ... filter to delete one SiblingEducation
     *   }
     * })
     * 
     */
    delete<T extends SiblingEducationDeleteArgs>(args: SelectSubset<T, SiblingEducationDeleteArgs<ExtArgs>>): Prisma__SiblingEducationClient<$Result.GetResult<Prisma.$SiblingEducationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SiblingEducation.
     * @param {SiblingEducationUpdateArgs} args - Arguments to update one SiblingEducation.
     * @example
     * // Update one SiblingEducation
     * const siblingEducation = await prisma.siblingEducation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SiblingEducationUpdateArgs>(args: SelectSubset<T, SiblingEducationUpdateArgs<ExtArgs>>): Prisma__SiblingEducationClient<$Result.GetResult<Prisma.$SiblingEducationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SiblingEducations.
     * @param {SiblingEducationDeleteManyArgs} args - Arguments to filter SiblingEducations to delete.
     * @example
     * // Delete a few SiblingEducations
     * const { count } = await prisma.siblingEducation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SiblingEducationDeleteManyArgs>(args?: SelectSubset<T, SiblingEducationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SiblingEducations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiblingEducationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SiblingEducations
     * const siblingEducation = await prisma.siblingEducation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SiblingEducationUpdateManyArgs>(args: SelectSubset<T, SiblingEducationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SiblingEducation.
     * @param {SiblingEducationUpsertArgs} args - Arguments to update or create a SiblingEducation.
     * @example
     * // Update or create a SiblingEducation
     * const siblingEducation = await prisma.siblingEducation.upsert({
     *   create: {
     *     // ... data to create a SiblingEducation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SiblingEducation we want to update
     *   }
     * })
     */
    upsert<T extends SiblingEducationUpsertArgs>(args: SelectSubset<T, SiblingEducationUpsertArgs<ExtArgs>>): Prisma__SiblingEducationClient<$Result.GetResult<Prisma.$SiblingEducationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SiblingEducations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiblingEducationCountArgs} args - Arguments to filter SiblingEducations to count.
     * @example
     * // Count the number of SiblingEducations
     * const count = await prisma.siblingEducation.count({
     *   where: {
     *     // ... the filter for the SiblingEducations we want to count
     *   }
     * })
    **/
    count<T extends SiblingEducationCountArgs>(
      args?: Subset<T, SiblingEducationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SiblingEducationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SiblingEducation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiblingEducationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SiblingEducationAggregateArgs>(args: Subset<T, SiblingEducationAggregateArgs>): Prisma.PrismaPromise<GetSiblingEducationAggregateType<T>>

    /**
     * Group by SiblingEducation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiblingEducationGroupByArgs} args - Group by arguments.
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
      T extends SiblingEducationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SiblingEducationGroupByArgs['orderBy'] }
        : { orderBy?: SiblingEducationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SiblingEducationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSiblingEducationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SiblingEducation model
   */
  readonly fields: SiblingEducationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SiblingEducation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SiblingEducationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    member<T extends FamilyMemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FamilyMemberDefaultArgs<ExtArgs>>): Prisma__FamilyMemberClient<$Result.GetResult<Prisma.$FamilyMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SiblingEducation model
   */
  interface SiblingEducationFieldRefs {
    readonly education_id: FieldRef<"SiblingEducation", 'Int'>
    readonly student_id: FieldRef<"SiblingEducation", 'Int'>
    readonly member_id: FieldRef<"SiblingEducation", 'Int'>
    readonly institution: FieldRef<"SiblingEducation", 'String'>
    readonly year_grade: FieldRef<"SiblingEducation", 'String'>
    readonly registration_course: FieldRef<"SiblingEducation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SiblingEducation findUnique
   */
  export type SiblingEducationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiblingEducation
     */
    select?: SiblingEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiblingEducation
     */
    omit?: SiblingEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiblingEducationInclude<ExtArgs> | null
    /**
     * Filter, which SiblingEducation to fetch.
     */
    where: SiblingEducationWhereUniqueInput
  }

  /**
   * SiblingEducation findUniqueOrThrow
   */
  export type SiblingEducationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiblingEducation
     */
    select?: SiblingEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiblingEducation
     */
    omit?: SiblingEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiblingEducationInclude<ExtArgs> | null
    /**
     * Filter, which SiblingEducation to fetch.
     */
    where: SiblingEducationWhereUniqueInput
  }

  /**
   * SiblingEducation findFirst
   */
  export type SiblingEducationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiblingEducation
     */
    select?: SiblingEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiblingEducation
     */
    omit?: SiblingEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiblingEducationInclude<ExtArgs> | null
    /**
     * Filter, which SiblingEducation to fetch.
     */
    where?: SiblingEducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiblingEducations to fetch.
     */
    orderBy?: SiblingEducationOrderByWithRelationInput | SiblingEducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SiblingEducations.
     */
    cursor?: SiblingEducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiblingEducations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiblingEducations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SiblingEducations.
     */
    distinct?: SiblingEducationScalarFieldEnum | SiblingEducationScalarFieldEnum[]
  }

  /**
   * SiblingEducation findFirstOrThrow
   */
  export type SiblingEducationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiblingEducation
     */
    select?: SiblingEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiblingEducation
     */
    omit?: SiblingEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiblingEducationInclude<ExtArgs> | null
    /**
     * Filter, which SiblingEducation to fetch.
     */
    where?: SiblingEducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiblingEducations to fetch.
     */
    orderBy?: SiblingEducationOrderByWithRelationInput | SiblingEducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SiblingEducations.
     */
    cursor?: SiblingEducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiblingEducations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiblingEducations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SiblingEducations.
     */
    distinct?: SiblingEducationScalarFieldEnum | SiblingEducationScalarFieldEnum[]
  }

  /**
   * SiblingEducation findMany
   */
  export type SiblingEducationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiblingEducation
     */
    select?: SiblingEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiblingEducation
     */
    omit?: SiblingEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiblingEducationInclude<ExtArgs> | null
    /**
     * Filter, which SiblingEducations to fetch.
     */
    where?: SiblingEducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiblingEducations to fetch.
     */
    orderBy?: SiblingEducationOrderByWithRelationInput | SiblingEducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SiblingEducations.
     */
    cursor?: SiblingEducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiblingEducations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiblingEducations.
     */
    skip?: number
    distinct?: SiblingEducationScalarFieldEnum | SiblingEducationScalarFieldEnum[]
  }

  /**
   * SiblingEducation create
   */
  export type SiblingEducationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiblingEducation
     */
    select?: SiblingEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiblingEducation
     */
    omit?: SiblingEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiblingEducationInclude<ExtArgs> | null
    /**
     * The data needed to create a SiblingEducation.
     */
    data: XOR<SiblingEducationCreateInput, SiblingEducationUncheckedCreateInput>
  }

  /**
   * SiblingEducation createMany
   */
  export type SiblingEducationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SiblingEducations.
     */
    data: SiblingEducationCreateManyInput | SiblingEducationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SiblingEducation update
   */
  export type SiblingEducationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiblingEducation
     */
    select?: SiblingEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiblingEducation
     */
    omit?: SiblingEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiblingEducationInclude<ExtArgs> | null
    /**
     * The data needed to update a SiblingEducation.
     */
    data: XOR<SiblingEducationUpdateInput, SiblingEducationUncheckedUpdateInput>
    /**
     * Choose, which SiblingEducation to update.
     */
    where: SiblingEducationWhereUniqueInput
  }

  /**
   * SiblingEducation updateMany
   */
  export type SiblingEducationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SiblingEducations.
     */
    data: XOR<SiblingEducationUpdateManyMutationInput, SiblingEducationUncheckedUpdateManyInput>
    /**
     * Filter which SiblingEducations to update
     */
    where?: SiblingEducationWhereInput
    /**
     * Limit how many SiblingEducations to update.
     */
    limit?: number
  }

  /**
   * SiblingEducation upsert
   */
  export type SiblingEducationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiblingEducation
     */
    select?: SiblingEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiblingEducation
     */
    omit?: SiblingEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiblingEducationInclude<ExtArgs> | null
    /**
     * The filter to search for the SiblingEducation to update in case it exists.
     */
    where: SiblingEducationWhereUniqueInput
    /**
     * In case the SiblingEducation found by the `where` argument doesn't exist, create a new SiblingEducation with this data.
     */
    create: XOR<SiblingEducationCreateInput, SiblingEducationUncheckedCreateInput>
    /**
     * In case the SiblingEducation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SiblingEducationUpdateInput, SiblingEducationUncheckedUpdateInput>
  }

  /**
   * SiblingEducation delete
   */
  export type SiblingEducationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiblingEducation
     */
    select?: SiblingEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiblingEducation
     */
    omit?: SiblingEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiblingEducationInclude<ExtArgs> | null
    /**
     * Filter which SiblingEducation to delete.
     */
    where: SiblingEducationWhereUniqueInput
  }

  /**
   * SiblingEducation deleteMany
   */
  export type SiblingEducationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SiblingEducations to delete
     */
    where?: SiblingEducationWhereInput
    /**
     * Limit how many SiblingEducations to delete.
     */
    limit?: number
  }

  /**
   * SiblingEducation without action
   */
  export type SiblingEducationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiblingEducation
     */
    select?: SiblingEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiblingEducation
     */
    omit?: SiblingEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiblingEducationInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationAvgAggregateOutputType = {
    notification_id: number | null
    user_id: number | null
  }

  export type NotificationSumAggregateOutputType = {
    notification_id: number | null
    user_id: number | null
  }

  export type NotificationMinAggregateOutputType = {
    notification_id: number | null
    user_id: number | null
    message: string | null
    created_at: Date | null
    is_read: boolean | null
  }

  export type NotificationMaxAggregateOutputType = {
    notification_id: number | null
    user_id: number | null
    message: string | null
    created_at: Date | null
    is_read: boolean | null
  }

  export type NotificationCountAggregateOutputType = {
    notification_id: number
    user_id: number
    message: number
    created_at: number
    is_read: number
    _all: number
  }


  export type NotificationAvgAggregateInputType = {
    notification_id?: true
    user_id?: true
  }

  export type NotificationSumAggregateInputType = {
    notification_id?: true
    user_id?: true
  }

  export type NotificationMinAggregateInputType = {
    notification_id?: true
    user_id?: true
    message?: true
    created_at?: true
    is_read?: true
  }

  export type NotificationMaxAggregateInputType = {
    notification_id?: true
    user_id?: true
    message?: true
    created_at?: true
    is_read?: true
  }

  export type NotificationCountAggregateInputType = {
    notification_id?: true
    user_id?: true
    message?: true
    created_at?: true
    is_read?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _avg?: NotificationAvgAggregateInputType
    _sum?: NotificationSumAggregateInputType
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    notification_id: number
    user_id: number
    message: string
    created_at: Date
    is_read: boolean
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    notification_id?: boolean
    user_id?: boolean
    message?: boolean
    created_at?: boolean
    is_read?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>



  export type NotificationSelectScalar = {
    notification_id?: boolean
    user_id?: boolean
    message?: boolean
    created_at?: boolean
    is_read?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"notification_id" | "user_id" | "message" | "created_at" | "is_read", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      notification_id: number
      user_id: number
      message: string
      created_at: Date
      is_read: boolean
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `notification_id`
     * const notificationWithNotification_idOnly = await prisma.notification.findMany({ select: { notification_id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly notification_id: FieldRef<"Notification", 'Int'>
    readonly user_id: FieldRef<"Notification", 'Int'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly created_at: FieldRef<"Notification", 'DateTime'>
    readonly is_read: FieldRef<"Notification", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model Setting
   */

  export type AggregateSetting = {
    _count: SettingCountAggregateOutputType | null
    _min: SettingMinAggregateOutputType | null
    _max: SettingMaxAggregateOutputType | null
  }

  export type SettingMinAggregateOutputType = {
    key: string | null
    value: string | null
  }

  export type SettingMaxAggregateOutputType = {
    key: string | null
    value: string | null
  }

  export type SettingCountAggregateOutputType = {
    key: number
    value: number
    _all: number
  }


  export type SettingMinAggregateInputType = {
    key?: true
    value?: true
  }

  export type SettingMaxAggregateInputType = {
    key?: true
    value?: true
  }

  export type SettingCountAggregateInputType = {
    key?: true
    value?: true
    _all?: true
  }

  export type SettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Setting to aggregate.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Settings
    **/
    _count?: true | SettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettingMaxAggregateInputType
  }

  export type GetSettingAggregateType<T extends SettingAggregateArgs> = {
        [P in keyof T & keyof AggregateSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSetting[P]>
      : GetScalarType<T[P], AggregateSetting[P]>
  }




  export type SettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettingWhereInput
    orderBy?: SettingOrderByWithAggregationInput | SettingOrderByWithAggregationInput[]
    by: SettingScalarFieldEnum[] | SettingScalarFieldEnum
    having?: SettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettingCountAggregateInputType | true
    _min?: SettingMinAggregateInputType
    _max?: SettingMaxAggregateInputType
  }

  export type SettingGroupByOutputType = {
    key: string
    value: string
    _count: SettingCountAggregateOutputType | null
    _min: SettingMinAggregateOutputType | null
    _max: SettingMaxAggregateOutputType | null
  }

  type GetSettingGroupByPayload<T extends SettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettingGroupByOutputType[P]>
            : GetScalarType<T[P], SettingGroupByOutputType[P]>
        }
      >
    >


  export type SettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    value?: boolean
  }, ExtArgs["result"]["setting"]>



  export type SettingSelectScalar = {
    key?: boolean
    value?: boolean
  }

  export type SettingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"key" | "value", ExtArgs["result"]["setting"]>

  export type $SettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Setting"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      key: string
      value: string
    }, ExtArgs["result"]["setting"]>
    composites: {}
  }

  type SettingGetPayload<S extends boolean | null | undefined | SettingDefaultArgs> = $Result.GetResult<Prisma.$SettingPayload, S>

  type SettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SettingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SettingCountAggregateInputType | true
    }

  export interface SettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Setting'], meta: { name: 'Setting' } }
    /**
     * Find zero or one Setting that matches the filter.
     * @param {SettingFindUniqueArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SettingFindUniqueArgs>(args: SelectSubset<T, SettingFindUniqueArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Setting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SettingFindUniqueOrThrowArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SettingFindUniqueOrThrowArgs>(args: SelectSubset<T, SettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Setting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindFirstArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SettingFindFirstArgs>(args?: SelectSubset<T, SettingFindFirstArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Setting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindFirstOrThrowArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SettingFindFirstOrThrowArgs>(args?: SelectSubset<T, SettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Settings
     * const settings = await prisma.setting.findMany()
     * 
     * // Get first 10 Settings
     * const settings = await prisma.setting.findMany({ take: 10 })
     * 
     * // Only select the `key`
     * const settingWithKeyOnly = await prisma.setting.findMany({ select: { key: true } })
     * 
     */
    findMany<T extends SettingFindManyArgs>(args?: SelectSubset<T, SettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Setting.
     * @param {SettingCreateArgs} args - Arguments to create a Setting.
     * @example
     * // Create one Setting
     * const Setting = await prisma.setting.create({
     *   data: {
     *     // ... data to create a Setting
     *   }
     * })
     * 
     */
    create<T extends SettingCreateArgs>(args: SelectSubset<T, SettingCreateArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Settings.
     * @param {SettingCreateManyArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const setting = await prisma.setting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SettingCreateManyArgs>(args?: SelectSubset<T, SettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Setting.
     * @param {SettingDeleteArgs} args - Arguments to delete one Setting.
     * @example
     * // Delete one Setting
     * const Setting = await prisma.setting.delete({
     *   where: {
     *     // ... filter to delete one Setting
     *   }
     * })
     * 
     */
    delete<T extends SettingDeleteArgs>(args: SelectSubset<T, SettingDeleteArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Setting.
     * @param {SettingUpdateArgs} args - Arguments to update one Setting.
     * @example
     * // Update one Setting
     * const setting = await prisma.setting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SettingUpdateArgs>(args: SelectSubset<T, SettingUpdateArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Settings.
     * @param {SettingDeleteManyArgs} args - Arguments to filter Settings to delete.
     * @example
     * // Delete a few Settings
     * const { count } = await prisma.setting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SettingDeleteManyArgs>(args?: SelectSubset<T, SettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Settings
     * const setting = await prisma.setting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SettingUpdateManyArgs>(args: SelectSubset<T, SettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Setting.
     * @param {SettingUpsertArgs} args - Arguments to update or create a Setting.
     * @example
     * // Update or create a Setting
     * const setting = await prisma.setting.upsert({
     *   create: {
     *     // ... data to create a Setting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Setting we want to update
     *   }
     * })
     */
    upsert<T extends SettingUpsertArgs>(args: SelectSubset<T, SettingUpsertArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingCountArgs} args - Arguments to filter Settings to count.
     * @example
     * // Count the number of Settings
     * const count = await prisma.setting.count({
     *   where: {
     *     // ... the filter for the Settings we want to count
     *   }
     * })
    **/
    count<T extends SettingCountArgs>(
      args?: Subset<T, SettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Setting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SettingAggregateArgs>(args: Subset<T, SettingAggregateArgs>): Prisma.PrismaPromise<GetSettingAggregateType<T>>

    /**
     * Group by Setting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingGroupByArgs} args - Group by arguments.
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
      T extends SettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SettingGroupByArgs['orderBy'] }
        : { orderBy?: SettingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Setting model
   */
  readonly fields: SettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Setting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Setting model
   */
  interface SettingFieldRefs {
    readonly key: FieldRef<"Setting", 'String'>
    readonly value: FieldRef<"Setting", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Setting findUnique
   */
  export type SettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting findUniqueOrThrow
   */
  export type SettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting findFirst
   */
  export type SettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Setting findFirstOrThrow
   */
  export type SettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Setting findMany
   */
  export type SettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Settings.
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Setting create
   */
  export type SettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The data needed to create a Setting.
     */
    data: XOR<SettingCreateInput, SettingUncheckedCreateInput>
  }

  /**
   * Setting createMany
   */
  export type SettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Settings.
     */
    data: SettingCreateManyInput | SettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Setting update
   */
  export type SettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The data needed to update a Setting.
     */
    data: XOR<SettingUpdateInput, SettingUncheckedUpdateInput>
    /**
     * Choose, which Setting to update.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting updateMany
   */
  export type SettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingUpdateManyMutationInput, SettingUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingWhereInput
    /**
     * Limit how many Settings to update.
     */
    limit?: number
  }

  /**
   * Setting upsert
   */
  export type SettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The filter to search for the Setting to update in case it exists.
     */
    where: SettingWhereUniqueInput
    /**
     * In case the Setting found by the `where` argument doesn't exist, create a new Setting with this data.
     */
    create: XOR<SettingCreateInput, SettingUncheckedCreateInput>
    /**
     * In case the Setting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SettingUpdateInput, SettingUncheckedUpdateInput>
  }

  /**
   * Setting delete
   */
  export type SettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter which Setting to delete.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting deleteMany
   */
  export type SettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to delete
     */
    where?: SettingWhereInput
    /**
     * Limit how many Settings to delete.
     */
    limit?: number
  }

  /**
   * Setting without action
   */
  export type SettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    user_id: 'user_id',
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    username: 'username',
    password: 'password',
    role: 'role',
    created_at: 'created_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const StudentScalarFieldEnum: {
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

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const ScholarshipProviderScalarFieldEnum: {
    provider_id: 'provider_id',
    name: 'name',
    contact_person: 'contact_person',
    phone: 'phone',
    email: 'email',
    address: 'address'
  };

  export type ScholarshipProviderScalarFieldEnum = (typeof ScholarshipProviderScalarFieldEnum)[keyof typeof ScholarshipProviderScalarFieldEnum]


  export const ScholarshipScalarFieldEnum: {
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

  export type ScholarshipScalarFieldEnum = (typeof ScholarshipScalarFieldEnum)[keyof typeof ScholarshipScalarFieldEnum]


  export const EligibilityCriteriaScalarFieldEnum: {
    criteria_id: 'criteria_id',
    scholarship_id: 'scholarship_id',
    criteria_name: 'criteria_name',
    criteria_description: 'criteria_description',
    min_value: 'min_value',
    max_value: 'max_value',
    weight: 'weight'
  };

  export type EligibilityCriteriaScalarFieldEnum = (typeof EligibilityCriteriaScalarFieldEnum)[keyof typeof EligibilityCriteriaScalarFieldEnum]


  export const ApplicationScalarFieldEnum: {
    application_id: 'application_id',
    student_id: 'student_id',
    scholarship_id: 'scholarship_id',
    submission_date: 'submission_date',
    status: 'status',
    total_points: 'total_points',
    reviewer_comments: 'reviewer_comments',
    review_date: 'review_date'
  };

  export type ApplicationScalarFieldEnum = (typeof ApplicationScalarFieldEnum)[keyof typeof ApplicationScalarFieldEnum]


  export const DocumentScalarFieldEnum: {
    document_id: 'document_id',
    application_id: 'application_id',
    document_type: 'document_type',
    file_name: 'file_name',
    file_path: 'file_path',
    upload_date: 'upload_date',
    verification_status: 'verification_status'
  };

  export type DocumentScalarFieldEnum = (typeof DocumentScalarFieldEnum)[keyof typeof DocumentScalarFieldEnum]


  export const FamilyMemberScalarFieldEnum: {
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

  export type FamilyMemberScalarFieldEnum = (typeof FamilyMemberScalarFieldEnum)[keyof typeof FamilyMemberScalarFieldEnum]


  export const OtherFundingScalarFieldEnum: {
    funding_id: 'funding_id',
    student_id: 'student_id',
    funding_name: 'funding_name',
    organization: 'organization',
    annual_amount: 'annual_amount',
    start_date: 'start_date',
    end_date: 'end_date'
  };

  export type OtherFundingScalarFieldEnum = (typeof OtherFundingScalarFieldEnum)[keyof typeof OtherFundingScalarFieldEnum]


  export const CommitteeReviewScalarFieldEnum: {
    review_id: 'review_id',
    application_id: 'application_id',
    reviewer_id: 'reviewer_id',
    review_date: 'review_date',
    points_awarded: 'points_awarded',
    comments: 'comments',
    status: 'status',
    is_read: 'is_read'
  };

  export type CommitteeReviewScalarFieldEnum = (typeof CommitteeReviewScalarFieldEnum)[keyof typeof CommitteeReviewScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    payment_id: 'payment_id',
    application_id: 'application_id',
    amount: 'amount',
    payment_date: 'payment_date',
    payment_method: 'payment_method',
    transaction_id: 'transaction_id',
    status: 'status'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const SiblingEducationScalarFieldEnum: {
    education_id: 'education_id',
    student_id: 'student_id',
    member_id: 'member_id',
    institution: 'institution',
    year_grade: 'year_grade',
    registration_course: 'registration_course'
  };

  export type SiblingEducationScalarFieldEnum = (typeof SiblingEducationScalarFieldEnum)[keyof typeof SiblingEducationScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    notification_id: 'notification_id',
    user_id: 'user_id',
    message: 'message',
    created_at: 'created_at',
    is_read: 'is_read'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const SettingScalarFieldEnum: {
    key: 'key',
    value: 'value'
  };

  export type SettingScalarFieldEnum = (typeof SettingScalarFieldEnum)[keyof typeof SettingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UserOrderByRelevanceFieldEnum: {
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    username: 'username',
    password: 'password'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const StudentOrderByRelevanceFieldEnum: {
    full_name: 'full_name',
    registration_no: 'registration_no',
    permanent_address: 'permanent_address',
    phone_number: 'phone_number',
    email: 'email',
    school_name: 'school_name'
  };

  export type StudentOrderByRelevanceFieldEnum = (typeof StudentOrderByRelevanceFieldEnum)[keyof typeof StudentOrderByRelevanceFieldEnum]


  export const ScholarshipProviderOrderByRelevanceFieldEnum: {
    name: 'name',
    contact_person: 'contact_person',
    phone: 'phone',
    email: 'email',
    address: 'address'
  };

  export type ScholarshipProviderOrderByRelevanceFieldEnum = (typeof ScholarshipProviderOrderByRelevanceFieldEnum)[keyof typeof ScholarshipProviderOrderByRelevanceFieldEnum]


  export const ScholarshipOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description'
  };

  export type ScholarshipOrderByRelevanceFieldEnum = (typeof ScholarshipOrderByRelevanceFieldEnum)[keyof typeof ScholarshipOrderByRelevanceFieldEnum]


  export const EligibilityCriteriaOrderByRelevanceFieldEnum: {
    criteria_name: 'criteria_name',
    criteria_description: 'criteria_description'
  };

  export type EligibilityCriteriaOrderByRelevanceFieldEnum = (typeof EligibilityCriteriaOrderByRelevanceFieldEnum)[keyof typeof EligibilityCriteriaOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const ApplicationOrderByRelevanceFieldEnum: {
    reviewer_comments: 'reviewer_comments'
  };

  export type ApplicationOrderByRelevanceFieldEnum = (typeof ApplicationOrderByRelevanceFieldEnum)[keyof typeof ApplicationOrderByRelevanceFieldEnum]


  export const DocumentOrderByRelevanceFieldEnum: {
    document_type: 'document_type',
    file_name: 'file_name',
    file_path: 'file_path'
  };

  export type DocumentOrderByRelevanceFieldEnum = (typeof DocumentOrderByRelevanceFieldEnum)[keyof typeof DocumentOrderByRelevanceFieldEnum]


  export const FamilyMemberOrderByRelevanceFieldEnum: {
    full_name: 'full_name',
    relationship: 'relationship',
    designation: 'designation',
    workplace: 'workplace',
    phone_number: 'phone_number'
  };

  export type FamilyMemberOrderByRelevanceFieldEnum = (typeof FamilyMemberOrderByRelevanceFieldEnum)[keyof typeof FamilyMemberOrderByRelevanceFieldEnum]


  export const OtherFundingOrderByRelevanceFieldEnum: {
    funding_name: 'funding_name',
    organization: 'organization'
  };

  export type OtherFundingOrderByRelevanceFieldEnum = (typeof OtherFundingOrderByRelevanceFieldEnum)[keyof typeof OtherFundingOrderByRelevanceFieldEnum]


  export const CommitteeReviewOrderByRelevanceFieldEnum: {
    comments: 'comments'
  };

  export type CommitteeReviewOrderByRelevanceFieldEnum = (typeof CommitteeReviewOrderByRelevanceFieldEnum)[keyof typeof CommitteeReviewOrderByRelevanceFieldEnum]


  export const PaymentOrderByRelevanceFieldEnum: {
    payment_method: 'payment_method',
    transaction_id: 'transaction_id'
  };

  export type PaymentOrderByRelevanceFieldEnum = (typeof PaymentOrderByRelevanceFieldEnum)[keyof typeof PaymentOrderByRelevanceFieldEnum]


  export const SiblingEducationOrderByRelevanceFieldEnum: {
    institution: 'institution',
    year_grade: 'year_grade',
    registration_course: 'registration_course'
  };

  export type SiblingEducationOrderByRelevanceFieldEnum = (typeof SiblingEducationOrderByRelevanceFieldEnum)[keyof typeof SiblingEducationOrderByRelevanceFieldEnum]


  export const NotificationOrderByRelevanceFieldEnum: {
    message: 'message'
  };

  export type NotificationOrderByRelevanceFieldEnum = (typeof NotificationOrderByRelevanceFieldEnum)[keyof typeof NotificationOrderByRelevanceFieldEnum]


  export const SettingOrderByRelevanceFieldEnum: {
    key: 'key',
    value: 'value'
  };

  export type SettingOrderByRelevanceFieldEnum = (typeof SettingOrderByRelevanceFieldEnum)[keyof typeof SettingOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'ApplicationStatus'
   */
  export type EnumApplicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationStatus'>
    


  /**
   * Reference to a field of type 'VerificationStatus'
   */
  export type EnumVerificationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VerificationStatus'>
    


  /**
   * Reference to a field of type 'ReviewStatus'
   */
  export type EnumReviewStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReviewStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    user_id?: IntFilter<"User"> | number
    first_name?: StringFilter<"User"> | string
    last_name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    created_at?: DateTimeFilter<"User"> | Date | string
    student?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null
    reviews?: CommitteeReviewListRelationFilter
    notifications?: NotificationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    user_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    student?: StudentOrderByWithRelationInput
    reviews?: CommitteeReviewOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    first_name?: StringFilter<"User"> | string
    last_name?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    created_at?: DateTimeFilter<"User"> | Date | string
    student?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null
    reviews?: CommitteeReviewListRelationFilter
    notifications?: NotificationListRelationFilter
  }, "user_id" | "email">

  export type UserOrderByWithAggregationInput = {
    user_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"User"> | number
    first_name?: StringWithAggregatesFilter<"User"> | string
    last_name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    student_id?: IntFilter<"Student"> | number
    user_id?: IntFilter<"Student"> | number
    full_name?: StringFilter<"Student"> | string
    registration_no?: StringFilter<"Student"> | string
    date_of_birth?: DateTimeFilter<"Student"> | Date | string
    permanent_address?: StringFilter<"Student"> | string
    admission_date?: DateTimeFilter<"Student"> | Date | string
    year_of_study?: IntFilter<"Student"> | number
    gender?: EnumGenderFilter<"Student"> | $Enums.Gender
    phone_number?: StringFilter<"Student"> | string
    email?: StringFilter<"Student"> | string
    school_name?: StringFilter<"Student"> | string
    unmarried_siblings?: IntFilter<"Student"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    applications?: ApplicationListRelationFilter
    familyMembers?: FamilyMemberListRelationFilter
    otherFunding?: OtherFundingListRelationFilter
    siblingEducation?: SiblingEducationListRelationFilter
  }

  export type StudentOrderByWithRelationInput = {
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
    user?: UserOrderByWithRelationInput
    applications?: ApplicationOrderByRelationAggregateInput
    familyMembers?: FamilyMemberOrderByRelationAggregateInput
    otherFunding?: OtherFundingOrderByRelationAggregateInput
    siblingEducation?: SiblingEducationOrderByRelationAggregateInput
    _relevance?: StudentOrderByRelevanceInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    student_id?: number
    user_id?: number
    registration_no?: string
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    full_name?: StringFilter<"Student"> | string
    date_of_birth?: DateTimeFilter<"Student"> | Date | string
    permanent_address?: StringFilter<"Student"> | string
    admission_date?: DateTimeFilter<"Student"> | Date | string
    year_of_study?: IntFilter<"Student"> | number
    gender?: EnumGenderFilter<"Student"> | $Enums.Gender
    phone_number?: StringFilter<"Student"> | string
    email?: StringFilter<"Student"> | string
    school_name?: StringFilter<"Student"> | string
    unmarried_siblings?: IntFilter<"Student"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    applications?: ApplicationListRelationFilter
    familyMembers?: FamilyMemberListRelationFilter
    otherFunding?: OtherFundingListRelationFilter
    siblingEducation?: SiblingEducationListRelationFilter
  }, "student_id" | "user_id" | "registration_no">

  export type StudentOrderByWithAggregationInput = {
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
    _count?: StudentCountOrderByAggregateInput
    _avg?: StudentAvgOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
    _sum?: StudentSumOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    student_id?: IntWithAggregatesFilter<"Student"> | number
    user_id?: IntWithAggregatesFilter<"Student"> | number
    full_name?: StringWithAggregatesFilter<"Student"> | string
    registration_no?: StringWithAggregatesFilter<"Student"> | string
    date_of_birth?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    permanent_address?: StringWithAggregatesFilter<"Student"> | string
    admission_date?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    year_of_study?: IntWithAggregatesFilter<"Student"> | number
    gender?: EnumGenderWithAggregatesFilter<"Student"> | $Enums.Gender
    phone_number?: StringWithAggregatesFilter<"Student"> | string
    email?: StringWithAggregatesFilter<"Student"> | string
    school_name?: StringWithAggregatesFilter<"Student"> | string
    unmarried_siblings?: IntWithAggregatesFilter<"Student"> | number
  }

  export type ScholarshipProviderWhereInput = {
    AND?: ScholarshipProviderWhereInput | ScholarshipProviderWhereInput[]
    OR?: ScholarshipProviderWhereInput[]
    NOT?: ScholarshipProviderWhereInput | ScholarshipProviderWhereInput[]
    provider_id?: IntFilter<"ScholarshipProvider"> | number
    name?: StringFilter<"ScholarshipProvider"> | string
    contact_person?: StringFilter<"ScholarshipProvider"> | string
    phone?: StringFilter<"ScholarshipProvider"> | string
    email?: StringFilter<"ScholarshipProvider"> | string
    address?: StringFilter<"ScholarshipProvider"> | string
    scholarships?: ScholarshipListRelationFilter
  }

  export type ScholarshipProviderOrderByWithRelationInput = {
    provider_id?: SortOrder
    name?: SortOrder
    contact_person?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    scholarships?: ScholarshipOrderByRelationAggregateInput
    _relevance?: ScholarshipProviderOrderByRelevanceInput
  }

  export type ScholarshipProviderWhereUniqueInput = Prisma.AtLeast<{
    provider_id?: number
    AND?: ScholarshipProviderWhereInput | ScholarshipProviderWhereInput[]
    OR?: ScholarshipProviderWhereInput[]
    NOT?: ScholarshipProviderWhereInput | ScholarshipProviderWhereInput[]
    name?: StringFilter<"ScholarshipProvider"> | string
    contact_person?: StringFilter<"ScholarshipProvider"> | string
    phone?: StringFilter<"ScholarshipProvider"> | string
    email?: StringFilter<"ScholarshipProvider"> | string
    address?: StringFilter<"ScholarshipProvider"> | string
    scholarships?: ScholarshipListRelationFilter
  }, "provider_id">

  export type ScholarshipProviderOrderByWithAggregationInput = {
    provider_id?: SortOrder
    name?: SortOrder
    contact_person?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    _count?: ScholarshipProviderCountOrderByAggregateInput
    _avg?: ScholarshipProviderAvgOrderByAggregateInput
    _max?: ScholarshipProviderMaxOrderByAggregateInput
    _min?: ScholarshipProviderMinOrderByAggregateInput
    _sum?: ScholarshipProviderSumOrderByAggregateInput
  }

  export type ScholarshipProviderScalarWhereWithAggregatesInput = {
    AND?: ScholarshipProviderScalarWhereWithAggregatesInput | ScholarshipProviderScalarWhereWithAggregatesInput[]
    OR?: ScholarshipProviderScalarWhereWithAggregatesInput[]
    NOT?: ScholarshipProviderScalarWhereWithAggregatesInput | ScholarshipProviderScalarWhereWithAggregatesInput[]
    provider_id?: IntWithAggregatesFilter<"ScholarshipProvider"> | number
    name?: StringWithAggregatesFilter<"ScholarshipProvider"> | string
    contact_person?: StringWithAggregatesFilter<"ScholarshipProvider"> | string
    phone?: StringWithAggregatesFilter<"ScholarshipProvider"> | string
    email?: StringWithAggregatesFilter<"ScholarshipProvider"> | string
    address?: StringWithAggregatesFilter<"ScholarshipProvider"> | string
  }

  export type ScholarshipWhereInput = {
    AND?: ScholarshipWhereInput | ScholarshipWhereInput[]
    OR?: ScholarshipWhereInput[]
    NOT?: ScholarshipWhereInput | ScholarshipWhereInput[]
    scholarship_id?: IntFilter<"Scholarship"> | number
    name?: StringFilter<"Scholarship"> | string
    description?: StringFilter<"Scholarship"> | string
    amount?: DecimalFilter<"Scholarship"> | Decimal | DecimalJsLike | number | string
    no_of_students?: IntFilter<"Scholarship"> | number
    application_deadline?: DateTimeFilter<"Scholarship"> | Date | string
    start_date?: DateTimeFilter<"Scholarship"> | Date | string
    end_date?: DateTimeFilter<"Scholarship"> | Date | string
    provider_id?: IntFilter<"Scholarship"> | number
    is_active?: BoolFilter<"Scholarship"> | boolean
    provider?: XOR<ScholarshipProviderScalarRelationFilter, ScholarshipProviderWhereInput>
    criteria?: EligibilityCriteriaListRelationFilter
    applications?: ApplicationListRelationFilter
  }

  export type ScholarshipOrderByWithRelationInput = {
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
    provider?: ScholarshipProviderOrderByWithRelationInput
    criteria?: EligibilityCriteriaOrderByRelationAggregateInput
    applications?: ApplicationOrderByRelationAggregateInput
    _relevance?: ScholarshipOrderByRelevanceInput
  }

  export type ScholarshipWhereUniqueInput = Prisma.AtLeast<{
    scholarship_id?: number
    AND?: ScholarshipWhereInput | ScholarshipWhereInput[]
    OR?: ScholarshipWhereInput[]
    NOT?: ScholarshipWhereInput | ScholarshipWhereInput[]
    name?: StringFilter<"Scholarship"> | string
    description?: StringFilter<"Scholarship"> | string
    amount?: DecimalFilter<"Scholarship"> | Decimal | DecimalJsLike | number | string
    no_of_students?: IntFilter<"Scholarship"> | number
    application_deadline?: DateTimeFilter<"Scholarship"> | Date | string
    start_date?: DateTimeFilter<"Scholarship"> | Date | string
    end_date?: DateTimeFilter<"Scholarship"> | Date | string
    provider_id?: IntFilter<"Scholarship"> | number
    is_active?: BoolFilter<"Scholarship"> | boolean
    provider?: XOR<ScholarshipProviderScalarRelationFilter, ScholarshipProviderWhereInput>
    criteria?: EligibilityCriteriaListRelationFilter
    applications?: ApplicationListRelationFilter
  }, "scholarship_id">

  export type ScholarshipOrderByWithAggregationInput = {
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
    _count?: ScholarshipCountOrderByAggregateInput
    _avg?: ScholarshipAvgOrderByAggregateInput
    _max?: ScholarshipMaxOrderByAggregateInput
    _min?: ScholarshipMinOrderByAggregateInput
    _sum?: ScholarshipSumOrderByAggregateInput
  }

  export type ScholarshipScalarWhereWithAggregatesInput = {
    AND?: ScholarshipScalarWhereWithAggregatesInput | ScholarshipScalarWhereWithAggregatesInput[]
    OR?: ScholarshipScalarWhereWithAggregatesInput[]
    NOT?: ScholarshipScalarWhereWithAggregatesInput | ScholarshipScalarWhereWithAggregatesInput[]
    scholarship_id?: IntWithAggregatesFilter<"Scholarship"> | number
    name?: StringWithAggregatesFilter<"Scholarship"> | string
    description?: StringWithAggregatesFilter<"Scholarship"> | string
    amount?: DecimalWithAggregatesFilter<"Scholarship"> | Decimal | DecimalJsLike | number | string
    no_of_students?: IntWithAggregatesFilter<"Scholarship"> | number
    application_deadline?: DateTimeWithAggregatesFilter<"Scholarship"> | Date | string
    start_date?: DateTimeWithAggregatesFilter<"Scholarship"> | Date | string
    end_date?: DateTimeWithAggregatesFilter<"Scholarship"> | Date | string
    provider_id?: IntWithAggregatesFilter<"Scholarship"> | number
    is_active?: BoolWithAggregatesFilter<"Scholarship"> | boolean
  }

  export type EligibilityCriteriaWhereInput = {
    AND?: EligibilityCriteriaWhereInput | EligibilityCriteriaWhereInput[]
    OR?: EligibilityCriteriaWhereInput[]
    NOT?: EligibilityCriteriaWhereInput | EligibilityCriteriaWhereInput[]
    criteria_id?: IntFilter<"EligibilityCriteria"> | number
    scholarship_id?: IntFilter<"EligibilityCriteria"> | number
    criteria_name?: StringFilter<"EligibilityCriteria"> | string
    criteria_description?: StringFilter<"EligibilityCriteria"> | string
    min_value?: DecimalFilter<"EligibilityCriteria"> | Decimal | DecimalJsLike | number | string
    max_value?: DecimalFilter<"EligibilityCriteria"> | Decimal | DecimalJsLike | number | string
    weight?: IntFilter<"EligibilityCriteria"> | number
    scholarship?: XOR<ScholarshipScalarRelationFilter, ScholarshipWhereInput>
  }

  export type EligibilityCriteriaOrderByWithRelationInput = {
    criteria_id?: SortOrder
    scholarship_id?: SortOrder
    criteria_name?: SortOrder
    criteria_description?: SortOrder
    min_value?: SortOrder
    max_value?: SortOrder
    weight?: SortOrder
    scholarship?: ScholarshipOrderByWithRelationInput
    _relevance?: EligibilityCriteriaOrderByRelevanceInput
  }

  export type EligibilityCriteriaWhereUniqueInput = Prisma.AtLeast<{
    criteria_id?: number
    AND?: EligibilityCriteriaWhereInput | EligibilityCriteriaWhereInput[]
    OR?: EligibilityCriteriaWhereInput[]
    NOT?: EligibilityCriteriaWhereInput | EligibilityCriteriaWhereInput[]
    scholarship_id?: IntFilter<"EligibilityCriteria"> | number
    criteria_name?: StringFilter<"EligibilityCriteria"> | string
    criteria_description?: StringFilter<"EligibilityCriteria"> | string
    min_value?: DecimalFilter<"EligibilityCriteria"> | Decimal | DecimalJsLike | number | string
    max_value?: DecimalFilter<"EligibilityCriteria"> | Decimal | DecimalJsLike | number | string
    weight?: IntFilter<"EligibilityCriteria"> | number
    scholarship?: XOR<ScholarshipScalarRelationFilter, ScholarshipWhereInput>
  }, "criteria_id">

  export type EligibilityCriteriaOrderByWithAggregationInput = {
    criteria_id?: SortOrder
    scholarship_id?: SortOrder
    criteria_name?: SortOrder
    criteria_description?: SortOrder
    min_value?: SortOrder
    max_value?: SortOrder
    weight?: SortOrder
    _count?: EligibilityCriteriaCountOrderByAggregateInput
    _avg?: EligibilityCriteriaAvgOrderByAggregateInput
    _max?: EligibilityCriteriaMaxOrderByAggregateInput
    _min?: EligibilityCriteriaMinOrderByAggregateInput
    _sum?: EligibilityCriteriaSumOrderByAggregateInput
  }

  export type EligibilityCriteriaScalarWhereWithAggregatesInput = {
    AND?: EligibilityCriteriaScalarWhereWithAggregatesInput | EligibilityCriteriaScalarWhereWithAggregatesInput[]
    OR?: EligibilityCriteriaScalarWhereWithAggregatesInput[]
    NOT?: EligibilityCriteriaScalarWhereWithAggregatesInput | EligibilityCriteriaScalarWhereWithAggregatesInput[]
    criteria_id?: IntWithAggregatesFilter<"EligibilityCriteria"> | number
    scholarship_id?: IntWithAggregatesFilter<"EligibilityCriteria"> | number
    criteria_name?: StringWithAggregatesFilter<"EligibilityCriteria"> | string
    criteria_description?: StringWithAggregatesFilter<"EligibilityCriteria"> | string
    min_value?: DecimalWithAggregatesFilter<"EligibilityCriteria"> | Decimal | DecimalJsLike | number | string
    max_value?: DecimalWithAggregatesFilter<"EligibilityCriteria"> | Decimal | DecimalJsLike | number | string
    weight?: IntWithAggregatesFilter<"EligibilityCriteria"> | number
  }

  export type ApplicationWhereInput = {
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    application_id?: IntFilter<"Application"> | number
    student_id?: IntFilter<"Application"> | number
    scholarship_id?: IntFilter<"Application"> | number
    submission_date?: DateTimeFilter<"Application"> | Date | string
    status?: EnumApplicationStatusFilter<"Application"> | $Enums.ApplicationStatus
    total_points?: IntNullableFilter<"Application"> | number | null
    reviewer_comments?: StringNullableFilter<"Application"> | string | null
    review_date?: DateTimeNullableFilter<"Application"> | Date | string | null
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    scholarship?: XOR<ScholarshipScalarRelationFilter, ScholarshipWhereInput>
    documents?: DocumentListRelationFilter
    reviews?: CommitteeReviewListRelationFilter
    payments?: PaymentListRelationFilter
  }

  export type ApplicationOrderByWithRelationInput = {
    application_id?: SortOrder
    student_id?: SortOrder
    scholarship_id?: SortOrder
    submission_date?: SortOrder
    status?: SortOrder
    total_points?: SortOrderInput | SortOrder
    reviewer_comments?: SortOrderInput | SortOrder
    review_date?: SortOrderInput | SortOrder
    student?: StudentOrderByWithRelationInput
    scholarship?: ScholarshipOrderByWithRelationInput
    documents?: DocumentOrderByRelationAggregateInput
    reviews?: CommitteeReviewOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
    _relevance?: ApplicationOrderByRelevanceInput
  }

  export type ApplicationWhereUniqueInput = Prisma.AtLeast<{
    application_id?: number
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    student_id?: IntFilter<"Application"> | number
    scholarship_id?: IntFilter<"Application"> | number
    submission_date?: DateTimeFilter<"Application"> | Date | string
    status?: EnumApplicationStatusFilter<"Application"> | $Enums.ApplicationStatus
    total_points?: IntNullableFilter<"Application"> | number | null
    reviewer_comments?: StringNullableFilter<"Application"> | string | null
    review_date?: DateTimeNullableFilter<"Application"> | Date | string | null
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    scholarship?: XOR<ScholarshipScalarRelationFilter, ScholarshipWhereInput>
    documents?: DocumentListRelationFilter
    reviews?: CommitteeReviewListRelationFilter
    payments?: PaymentListRelationFilter
  }, "application_id">

  export type ApplicationOrderByWithAggregationInput = {
    application_id?: SortOrder
    student_id?: SortOrder
    scholarship_id?: SortOrder
    submission_date?: SortOrder
    status?: SortOrder
    total_points?: SortOrderInput | SortOrder
    reviewer_comments?: SortOrderInput | SortOrder
    review_date?: SortOrderInput | SortOrder
    _count?: ApplicationCountOrderByAggregateInput
    _avg?: ApplicationAvgOrderByAggregateInput
    _max?: ApplicationMaxOrderByAggregateInput
    _min?: ApplicationMinOrderByAggregateInput
    _sum?: ApplicationSumOrderByAggregateInput
  }

  export type ApplicationScalarWhereWithAggregatesInput = {
    AND?: ApplicationScalarWhereWithAggregatesInput | ApplicationScalarWhereWithAggregatesInput[]
    OR?: ApplicationScalarWhereWithAggregatesInput[]
    NOT?: ApplicationScalarWhereWithAggregatesInput | ApplicationScalarWhereWithAggregatesInput[]
    application_id?: IntWithAggregatesFilter<"Application"> | number
    student_id?: IntWithAggregatesFilter<"Application"> | number
    scholarship_id?: IntWithAggregatesFilter<"Application"> | number
    submission_date?: DateTimeWithAggregatesFilter<"Application"> | Date | string
    status?: EnumApplicationStatusWithAggregatesFilter<"Application"> | $Enums.ApplicationStatus
    total_points?: IntNullableWithAggregatesFilter<"Application"> | number | null
    reviewer_comments?: StringNullableWithAggregatesFilter<"Application"> | string | null
    review_date?: DateTimeNullableWithAggregatesFilter<"Application"> | Date | string | null
  }

  export type DocumentWhereInput = {
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    document_id?: IntFilter<"Document"> | number
    application_id?: IntFilter<"Document"> | number
    document_type?: StringFilter<"Document"> | string
    file_name?: StringFilter<"Document"> | string
    file_path?: StringFilter<"Document"> | string
    upload_date?: DateTimeFilter<"Document"> | Date | string
    verification_status?: EnumVerificationStatusFilter<"Document"> | $Enums.VerificationStatus
    application?: XOR<ApplicationScalarRelationFilter, ApplicationWhereInput>
  }

  export type DocumentOrderByWithRelationInput = {
    document_id?: SortOrder
    application_id?: SortOrder
    document_type?: SortOrder
    file_name?: SortOrder
    file_path?: SortOrder
    upload_date?: SortOrder
    verification_status?: SortOrder
    application?: ApplicationOrderByWithRelationInput
    _relevance?: DocumentOrderByRelevanceInput
  }

  export type DocumentWhereUniqueInput = Prisma.AtLeast<{
    document_id?: number
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    application_id?: IntFilter<"Document"> | number
    document_type?: StringFilter<"Document"> | string
    file_name?: StringFilter<"Document"> | string
    file_path?: StringFilter<"Document"> | string
    upload_date?: DateTimeFilter<"Document"> | Date | string
    verification_status?: EnumVerificationStatusFilter<"Document"> | $Enums.VerificationStatus
    application?: XOR<ApplicationScalarRelationFilter, ApplicationWhereInput>
  }, "document_id">

  export type DocumentOrderByWithAggregationInput = {
    document_id?: SortOrder
    application_id?: SortOrder
    document_type?: SortOrder
    file_name?: SortOrder
    file_path?: SortOrder
    upload_date?: SortOrder
    verification_status?: SortOrder
    _count?: DocumentCountOrderByAggregateInput
    _avg?: DocumentAvgOrderByAggregateInput
    _max?: DocumentMaxOrderByAggregateInput
    _min?: DocumentMinOrderByAggregateInput
    _sum?: DocumentSumOrderByAggregateInput
  }

  export type DocumentScalarWhereWithAggregatesInput = {
    AND?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    OR?: DocumentScalarWhereWithAggregatesInput[]
    NOT?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    document_id?: IntWithAggregatesFilter<"Document"> | number
    application_id?: IntWithAggregatesFilter<"Document"> | number
    document_type?: StringWithAggregatesFilter<"Document"> | string
    file_name?: StringWithAggregatesFilter<"Document"> | string
    file_path?: StringWithAggregatesFilter<"Document"> | string
    upload_date?: DateTimeWithAggregatesFilter<"Document"> | Date | string
    verification_status?: EnumVerificationStatusWithAggregatesFilter<"Document"> | $Enums.VerificationStatus
  }

  export type FamilyMemberWhereInput = {
    AND?: FamilyMemberWhereInput | FamilyMemberWhereInput[]
    OR?: FamilyMemberWhereInput[]
    NOT?: FamilyMemberWhereInput | FamilyMemberWhereInput[]
    member_id?: IntFilter<"FamilyMember"> | number
    student_id?: IntFilter<"FamilyMember"> | number
    full_name?: StringFilter<"FamilyMember"> | string
    age?: IntFilter<"FamilyMember"> | number
    relationship?: StringFilter<"FamilyMember"> | string
    designation?: StringFilter<"FamilyMember"> | string
    annual_income?: DecimalFilter<"FamilyMember"> | Decimal | DecimalJsLike | number | string
    workplace?: StringFilter<"FamilyMember"> | string
    phone_number?: StringFilter<"FamilyMember"> | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    siblingEducation?: SiblingEducationListRelationFilter
  }

  export type FamilyMemberOrderByWithRelationInput = {
    member_id?: SortOrder
    student_id?: SortOrder
    full_name?: SortOrder
    age?: SortOrder
    relationship?: SortOrder
    designation?: SortOrder
    annual_income?: SortOrder
    workplace?: SortOrder
    phone_number?: SortOrder
    student?: StudentOrderByWithRelationInput
    siblingEducation?: SiblingEducationOrderByRelationAggregateInput
    _relevance?: FamilyMemberOrderByRelevanceInput
  }

  export type FamilyMemberWhereUniqueInput = Prisma.AtLeast<{
    member_id?: number
    AND?: FamilyMemberWhereInput | FamilyMemberWhereInput[]
    OR?: FamilyMemberWhereInput[]
    NOT?: FamilyMemberWhereInput | FamilyMemberWhereInput[]
    student_id?: IntFilter<"FamilyMember"> | number
    full_name?: StringFilter<"FamilyMember"> | string
    age?: IntFilter<"FamilyMember"> | number
    relationship?: StringFilter<"FamilyMember"> | string
    designation?: StringFilter<"FamilyMember"> | string
    annual_income?: DecimalFilter<"FamilyMember"> | Decimal | DecimalJsLike | number | string
    workplace?: StringFilter<"FamilyMember"> | string
    phone_number?: StringFilter<"FamilyMember"> | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    siblingEducation?: SiblingEducationListRelationFilter
  }, "member_id">

  export type FamilyMemberOrderByWithAggregationInput = {
    member_id?: SortOrder
    student_id?: SortOrder
    full_name?: SortOrder
    age?: SortOrder
    relationship?: SortOrder
    designation?: SortOrder
    annual_income?: SortOrder
    workplace?: SortOrder
    phone_number?: SortOrder
    _count?: FamilyMemberCountOrderByAggregateInput
    _avg?: FamilyMemberAvgOrderByAggregateInput
    _max?: FamilyMemberMaxOrderByAggregateInput
    _min?: FamilyMemberMinOrderByAggregateInput
    _sum?: FamilyMemberSumOrderByAggregateInput
  }

  export type FamilyMemberScalarWhereWithAggregatesInput = {
    AND?: FamilyMemberScalarWhereWithAggregatesInput | FamilyMemberScalarWhereWithAggregatesInput[]
    OR?: FamilyMemberScalarWhereWithAggregatesInput[]
    NOT?: FamilyMemberScalarWhereWithAggregatesInput | FamilyMemberScalarWhereWithAggregatesInput[]
    member_id?: IntWithAggregatesFilter<"FamilyMember"> | number
    student_id?: IntWithAggregatesFilter<"FamilyMember"> | number
    full_name?: StringWithAggregatesFilter<"FamilyMember"> | string
    age?: IntWithAggregatesFilter<"FamilyMember"> | number
    relationship?: StringWithAggregatesFilter<"FamilyMember"> | string
    designation?: StringWithAggregatesFilter<"FamilyMember"> | string
    annual_income?: DecimalWithAggregatesFilter<"FamilyMember"> | Decimal | DecimalJsLike | number | string
    workplace?: StringWithAggregatesFilter<"FamilyMember"> | string
    phone_number?: StringWithAggregatesFilter<"FamilyMember"> | string
  }

  export type OtherFundingWhereInput = {
    AND?: OtherFundingWhereInput | OtherFundingWhereInput[]
    OR?: OtherFundingWhereInput[]
    NOT?: OtherFundingWhereInput | OtherFundingWhereInput[]
    funding_id?: IntFilter<"OtherFunding"> | number
    student_id?: IntFilter<"OtherFunding"> | number
    funding_name?: StringFilter<"OtherFunding"> | string
    organization?: StringFilter<"OtherFunding"> | string
    annual_amount?: DecimalFilter<"OtherFunding"> | Decimal | DecimalJsLike | number | string
    start_date?: DateTimeFilter<"OtherFunding"> | Date | string
    end_date?: DateTimeFilter<"OtherFunding"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }

  export type OtherFundingOrderByWithRelationInput = {
    funding_id?: SortOrder
    student_id?: SortOrder
    funding_name?: SortOrder
    organization?: SortOrder
    annual_amount?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    student?: StudentOrderByWithRelationInput
    _relevance?: OtherFundingOrderByRelevanceInput
  }

  export type OtherFundingWhereUniqueInput = Prisma.AtLeast<{
    funding_id?: number
    AND?: OtherFundingWhereInput | OtherFundingWhereInput[]
    OR?: OtherFundingWhereInput[]
    NOT?: OtherFundingWhereInput | OtherFundingWhereInput[]
    student_id?: IntFilter<"OtherFunding"> | number
    funding_name?: StringFilter<"OtherFunding"> | string
    organization?: StringFilter<"OtherFunding"> | string
    annual_amount?: DecimalFilter<"OtherFunding"> | Decimal | DecimalJsLike | number | string
    start_date?: DateTimeFilter<"OtherFunding"> | Date | string
    end_date?: DateTimeFilter<"OtherFunding"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }, "funding_id">

  export type OtherFundingOrderByWithAggregationInput = {
    funding_id?: SortOrder
    student_id?: SortOrder
    funding_name?: SortOrder
    organization?: SortOrder
    annual_amount?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    _count?: OtherFundingCountOrderByAggregateInput
    _avg?: OtherFundingAvgOrderByAggregateInput
    _max?: OtherFundingMaxOrderByAggregateInput
    _min?: OtherFundingMinOrderByAggregateInput
    _sum?: OtherFundingSumOrderByAggregateInput
  }

  export type OtherFundingScalarWhereWithAggregatesInput = {
    AND?: OtherFundingScalarWhereWithAggregatesInput | OtherFundingScalarWhereWithAggregatesInput[]
    OR?: OtherFundingScalarWhereWithAggregatesInput[]
    NOT?: OtherFundingScalarWhereWithAggregatesInput | OtherFundingScalarWhereWithAggregatesInput[]
    funding_id?: IntWithAggregatesFilter<"OtherFunding"> | number
    student_id?: IntWithAggregatesFilter<"OtherFunding"> | number
    funding_name?: StringWithAggregatesFilter<"OtherFunding"> | string
    organization?: StringWithAggregatesFilter<"OtherFunding"> | string
    annual_amount?: DecimalWithAggregatesFilter<"OtherFunding"> | Decimal | DecimalJsLike | number | string
    start_date?: DateTimeWithAggregatesFilter<"OtherFunding"> | Date | string
    end_date?: DateTimeWithAggregatesFilter<"OtherFunding"> | Date | string
  }

  export type CommitteeReviewWhereInput = {
    AND?: CommitteeReviewWhereInput | CommitteeReviewWhereInput[]
    OR?: CommitteeReviewWhereInput[]
    NOT?: CommitteeReviewWhereInput | CommitteeReviewWhereInput[]
    review_id?: IntFilter<"CommitteeReview"> | number
    application_id?: IntFilter<"CommitteeReview"> | number
    reviewer_id?: IntFilter<"CommitteeReview"> | number
    review_date?: DateTimeFilter<"CommitteeReview"> | Date | string
    points_awarded?: IntFilter<"CommitteeReview"> | number
    comments?: StringFilter<"CommitteeReview"> | string
    status?: EnumReviewStatusFilter<"CommitteeReview"> | $Enums.ReviewStatus
    is_read?: BoolFilter<"CommitteeReview"> | boolean
    application?: XOR<ApplicationScalarRelationFilter, ApplicationWhereInput>
    reviewer?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CommitteeReviewOrderByWithRelationInput = {
    review_id?: SortOrder
    application_id?: SortOrder
    reviewer_id?: SortOrder
    review_date?: SortOrder
    points_awarded?: SortOrder
    comments?: SortOrder
    status?: SortOrder
    is_read?: SortOrder
    application?: ApplicationOrderByWithRelationInput
    reviewer?: UserOrderByWithRelationInput
    _relevance?: CommitteeReviewOrderByRelevanceInput
  }

  export type CommitteeReviewWhereUniqueInput = Prisma.AtLeast<{
    review_id?: number
    AND?: CommitteeReviewWhereInput | CommitteeReviewWhereInput[]
    OR?: CommitteeReviewWhereInput[]
    NOT?: CommitteeReviewWhereInput | CommitteeReviewWhereInput[]
    application_id?: IntFilter<"CommitteeReview"> | number
    reviewer_id?: IntFilter<"CommitteeReview"> | number
    review_date?: DateTimeFilter<"CommitteeReview"> | Date | string
    points_awarded?: IntFilter<"CommitteeReview"> | number
    comments?: StringFilter<"CommitteeReview"> | string
    status?: EnumReviewStatusFilter<"CommitteeReview"> | $Enums.ReviewStatus
    is_read?: BoolFilter<"CommitteeReview"> | boolean
    application?: XOR<ApplicationScalarRelationFilter, ApplicationWhereInput>
    reviewer?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "review_id">

  export type CommitteeReviewOrderByWithAggregationInput = {
    review_id?: SortOrder
    application_id?: SortOrder
    reviewer_id?: SortOrder
    review_date?: SortOrder
    points_awarded?: SortOrder
    comments?: SortOrder
    status?: SortOrder
    is_read?: SortOrder
    _count?: CommitteeReviewCountOrderByAggregateInput
    _avg?: CommitteeReviewAvgOrderByAggregateInput
    _max?: CommitteeReviewMaxOrderByAggregateInput
    _min?: CommitteeReviewMinOrderByAggregateInput
    _sum?: CommitteeReviewSumOrderByAggregateInput
  }

  export type CommitteeReviewScalarWhereWithAggregatesInput = {
    AND?: CommitteeReviewScalarWhereWithAggregatesInput | CommitteeReviewScalarWhereWithAggregatesInput[]
    OR?: CommitteeReviewScalarWhereWithAggregatesInput[]
    NOT?: CommitteeReviewScalarWhereWithAggregatesInput | CommitteeReviewScalarWhereWithAggregatesInput[]
    review_id?: IntWithAggregatesFilter<"CommitteeReview"> | number
    application_id?: IntWithAggregatesFilter<"CommitteeReview"> | number
    reviewer_id?: IntWithAggregatesFilter<"CommitteeReview"> | number
    review_date?: DateTimeWithAggregatesFilter<"CommitteeReview"> | Date | string
    points_awarded?: IntWithAggregatesFilter<"CommitteeReview"> | number
    comments?: StringWithAggregatesFilter<"CommitteeReview"> | string
    status?: EnumReviewStatusWithAggregatesFilter<"CommitteeReview"> | $Enums.ReviewStatus
    is_read?: BoolWithAggregatesFilter<"CommitteeReview"> | boolean
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    payment_id?: IntFilter<"Payment"> | number
    application_id?: IntFilter<"Payment"> | number
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    payment_date?: DateTimeFilter<"Payment"> | Date | string
    payment_method?: StringFilter<"Payment"> | string
    transaction_id?: StringFilter<"Payment"> | string
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    application?: XOR<ApplicationScalarRelationFilter, ApplicationWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    payment_id?: SortOrder
    application_id?: SortOrder
    amount?: SortOrder
    payment_date?: SortOrder
    payment_method?: SortOrder
    transaction_id?: SortOrder
    status?: SortOrder
    application?: ApplicationOrderByWithRelationInput
    _relevance?: PaymentOrderByRelevanceInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    payment_id?: number
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    application_id?: IntFilter<"Payment"> | number
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    payment_date?: DateTimeFilter<"Payment"> | Date | string
    payment_method?: StringFilter<"Payment"> | string
    transaction_id?: StringFilter<"Payment"> | string
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    application?: XOR<ApplicationScalarRelationFilter, ApplicationWhereInput>
  }, "payment_id">

  export type PaymentOrderByWithAggregationInput = {
    payment_id?: SortOrder
    application_id?: SortOrder
    amount?: SortOrder
    payment_date?: SortOrder
    payment_method?: SortOrder
    transaction_id?: SortOrder
    status?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    payment_id?: IntWithAggregatesFilter<"Payment"> | number
    application_id?: IntWithAggregatesFilter<"Payment"> | number
    amount?: DecimalWithAggregatesFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    payment_date?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    payment_method?: StringWithAggregatesFilter<"Payment"> | string
    transaction_id?: StringWithAggregatesFilter<"Payment"> | string
    status?: EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus
  }

  export type SiblingEducationWhereInput = {
    AND?: SiblingEducationWhereInput | SiblingEducationWhereInput[]
    OR?: SiblingEducationWhereInput[]
    NOT?: SiblingEducationWhereInput | SiblingEducationWhereInput[]
    education_id?: IntFilter<"SiblingEducation"> | number
    student_id?: IntFilter<"SiblingEducation"> | number
    member_id?: IntFilter<"SiblingEducation"> | number
    institution?: StringFilter<"SiblingEducation"> | string
    year_grade?: StringFilter<"SiblingEducation"> | string
    registration_course?: StringFilter<"SiblingEducation"> | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    member?: XOR<FamilyMemberScalarRelationFilter, FamilyMemberWhereInput>
  }

  export type SiblingEducationOrderByWithRelationInput = {
    education_id?: SortOrder
    student_id?: SortOrder
    member_id?: SortOrder
    institution?: SortOrder
    year_grade?: SortOrder
    registration_course?: SortOrder
    student?: StudentOrderByWithRelationInput
    member?: FamilyMemberOrderByWithRelationInput
    _relevance?: SiblingEducationOrderByRelevanceInput
  }

  export type SiblingEducationWhereUniqueInput = Prisma.AtLeast<{
    education_id?: number
    AND?: SiblingEducationWhereInput | SiblingEducationWhereInput[]
    OR?: SiblingEducationWhereInput[]
    NOT?: SiblingEducationWhereInput | SiblingEducationWhereInput[]
    student_id?: IntFilter<"SiblingEducation"> | number
    member_id?: IntFilter<"SiblingEducation"> | number
    institution?: StringFilter<"SiblingEducation"> | string
    year_grade?: StringFilter<"SiblingEducation"> | string
    registration_course?: StringFilter<"SiblingEducation"> | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    member?: XOR<FamilyMemberScalarRelationFilter, FamilyMemberWhereInput>
  }, "education_id">

  export type SiblingEducationOrderByWithAggregationInput = {
    education_id?: SortOrder
    student_id?: SortOrder
    member_id?: SortOrder
    institution?: SortOrder
    year_grade?: SortOrder
    registration_course?: SortOrder
    _count?: SiblingEducationCountOrderByAggregateInput
    _avg?: SiblingEducationAvgOrderByAggregateInput
    _max?: SiblingEducationMaxOrderByAggregateInput
    _min?: SiblingEducationMinOrderByAggregateInput
    _sum?: SiblingEducationSumOrderByAggregateInput
  }

  export type SiblingEducationScalarWhereWithAggregatesInput = {
    AND?: SiblingEducationScalarWhereWithAggregatesInput | SiblingEducationScalarWhereWithAggregatesInput[]
    OR?: SiblingEducationScalarWhereWithAggregatesInput[]
    NOT?: SiblingEducationScalarWhereWithAggregatesInput | SiblingEducationScalarWhereWithAggregatesInput[]
    education_id?: IntWithAggregatesFilter<"SiblingEducation"> | number
    student_id?: IntWithAggregatesFilter<"SiblingEducation"> | number
    member_id?: IntWithAggregatesFilter<"SiblingEducation"> | number
    institution?: StringWithAggregatesFilter<"SiblingEducation"> | string
    year_grade?: StringWithAggregatesFilter<"SiblingEducation"> | string
    registration_course?: StringWithAggregatesFilter<"SiblingEducation"> | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    notification_id?: IntFilter<"Notification"> | number
    user_id?: IntFilter<"Notification"> | number
    message?: StringFilter<"Notification"> | string
    created_at?: DateTimeFilter<"Notification"> | Date | string
    is_read?: BoolFilter<"Notification"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    notification_id?: SortOrder
    user_id?: SortOrder
    message?: SortOrder
    created_at?: SortOrder
    is_read?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: NotificationOrderByRelevanceInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    notification_id?: number
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    user_id?: IntFilter<"Notification"> | number
    message?: StringFilter<"Notification"> | string
    created_at?: DateTimeFilter<"Notification"> | Date | string
    is_read?: BoolFilter<"Notification"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "notification_id">

  export type NotificationOrderByWithAggregationInput = {
    notification_id?: SortOrder
    user_id?: SortOrder
    message?: SortOrder
    created_at?: SortOrder
    is_read?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _avg?: NotificationAvgOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
    _sum?: NotificationSumOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    notification_id?: IntWithAggregatesFilter<"Notification"> | number
    user_id?: IntWithAggregatesFilter<"Notification"> | number
    message?: StringWithAggregatesFilter<"Notification"> | string
    created_at?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    is_read?: BoolWithAggregatesFilter<"Notification"> | boolean
  }

  export type SettingWhereInput = {
    AND?: SettingWhereInput | SettingWhereInput[]
    OR?: SettingWhereInput[]
    NOT?: SettingWhereInput | SettingWhereInput[]
    key?: StringFilter<"Setting"> | string
    value?: StringFilter<"Setting"> | string
  }

  export type SettingOrderByWithRelationInput = {
    key?: SortOrder
    value?: SortOrder
    _relevance?: SettingOrderByRelevanceInput
  }

  export type SettingWhereUniqueInput = Prisma.AtLeast<{
    key?: string
    AND?: SettingWhereInput | SettingWhereInput[]
    OR?: SettingWhereInput[]
    NOT?: SettingWhereInput | SettingWhereInput[]
    value?: StringFilter<"Setting"> | string
  }, "key">

  export type SettingOrderByWithAggregationInput = {
    key?: SortOrder
    value?: SortOrder
    _count?: SettingCountOrderByAggregateInput
    _max?: SettingMaxOrderByAggregateInput
    _min?: SettingMinOrderByAggregateInput
  }

  export type SettingScalarWhereWithAggregatesInput = {
    AND?: SettingScalarWhereWithAggregatesInput | SettingScalarWhereWithAggregatesInput[]
    OR?: SettingScalarWhereWithAggregatesInput[]
    NOT?: SettingScalarWhereWithAggregatesInput | SettingScalarWhereWithAggregatesInput[]
    key?: StringWithAggregatesFilter<"Setting"> | string
    value?: StringWithAggregatesFilter<"Setting"> | string
  }

  export type UserCreateInput = {
    first_name: string
    last_name: string
    email: string
    username: string
    password: string
    role?: $Enums.Role
    created_at?: Date | string
    student?: StudentCreateNestedOneWithoutUserInput
    reviews?: CommitteeReviewCreateNestedManyWithoutReviewerInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    user_id?: number
    first_name: string
    last_name: string
    email: string
    username: string
    password: string
    role?: $Enums.Role
    created_at?: Date | string
    student?: StudentUncheckedCreateNestedOneWithoutUserInput
    reviews?: CommitteeReviewUncheckedCreateNestedManyWithoutReviewerInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneWithoutUserNestedInput
    reviews?: CommitteeReviewUpdateManyWithoutReviewerNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUncheckedUpdateOneWithoutUserNestedInput
    reviews?: CommitteeReviewUncheckedUpdateManyWithoutReviewerNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    user_id?: number
    first_name: string
    last_name: string
    email: string
    username: string
    password: string
    role?: $Enums.Role
    created_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCreateInput = {
    full_name: string
    registration_no: string
    date_of_birth: Date | string
    permanent_address: string
    admission_date: Date | string
    year_of_study: number
    gender: $Enums.Gender
    phone_number: string
    email: string
    school_name: string
    unmarried_siblings: number
    user: UserCreateNestedOneWithoutStudentInput
    applications?: ApplicationCreateNestedManyWithoutStudentInput
    familyMembers?: FamilyMemberCreateNestedManyWithoutStudentInput
    otherFunding?: OtherFundingCreateNestedManyWithoutStudentInput
    siblingEducation?: SiblingEducationCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    student_id?: number
    user_id: number
    full_name: string
    registration_no: string
    date_of_birth: Date | string
    permanent_address: string
    admission_date: Date | string
    year_of_study: number
    gender: $Enums.Gender
    phone_number: string
    email: string
    school_name: string
    unmarried_siblings: number
    applications?: ApplicationUncheckedCreateNestedManyWithoutStudentInput
    familyMembers?: FamilyMemberUncheckedCreateNestedManyWithoutStudentInput
    otherFunding?: OtherFundingUncheckedCreateNestedManyWithoutStudentInput
    siblingEducation?: SiblingEducationUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    registration_no?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    permanent_address?: StringFieldUpdateOperationsInput | string
    admission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    year_of_study?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    school_name?: StringFieldUpdateOperationsInput | string
    unmarried_siblings?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
    applications?: ApplicationUpdateManyWithoutStudentNestedInput
    familyMembers?: FamilyMemberUpdateManyWithoutStudentNestedInput
    otherFunding?: OtherFundingUpdateManyWithoutStudentNestedInput
    siblingEducation?: SiblingEducationUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    student_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    registration_no?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    permanent_address?: StringFieldUpdateOperationsInput | string
    admission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    year_of_study?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    school_name?: StringFieldUpdateOperationsInput | string
    unmarried_siblings?: IntFieldUpdateOperationsInput | number
    applications?: ApplicationUncheckedUpdateManyWithoutStudentNestedInput
    familyMembers?: FamilyMemberUncheckedUpdateManyWithoutStudentNestedInput
    otherFunding?: OtherFundingUncheckedUpdateManyWithoutStudentNestedInput
    siblingEducation?: SiblingEducationUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    student_id?: number
    user_id: number
    full_name: string
    registration_no: string
    date_of_birth: Date | string
    permanent_address: string
    admission_date: Date | string
    year_of_study: number
    gender: $Enums.Gender
    phone_number: string
    email: string
    school_name: string
    unmarried_siblings: number
  }

  export type StudentUpdateManyMutationInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    registration_no?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    permanent_address?: StringFieldUpdateOperationsInput | string
    admission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    year_of_study?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    school_name?: StringFieldUpdateOperationsInput | string
    unmarried_siblings?: IntFieldUpdateOperationsInput | number
  }

  export type StudentUncheckedUpdateManyInput = {
    student_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    registration_no?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    permanent_address?: StringFieldUpdateOperationsInput | string
    admission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    year_of_study?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    school_name?: StringFieldUpdateOperationsInput | string
    unmarried_siblings?: IntFieldUpdateOperationsInput | number
  }

  export type ScholarshipProviderCreateInput = {
    name: string
    contact_person: string
    phone: string
    email: string
    address: string
    scholarships?: ScholarshipCreateNestedManyWithoutProviderInput
  }

  export type ScholarshipProviderUncheckedCreateInput = {
    provider_id?: number
    name: string
    contact_person: string
    phone: string
    email: string
    address: string
    scholarships?: ScholarshipUncheckedCreateNestedManyWithoutProviderInput
  }

  export type ScholarshipProviderUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    contact_person?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    scholarships?: ScholarshipUpdateManyWithoutProviderNestedInput
  }

  export type ScholarshipProviderUncheckedUpdateInput = {
    provider_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    contact_person?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    scholarships?: ScholarshipUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type ScholarshipProviderCreateManyInput = {
    provider_id?: number
    name: string
    contact_person: string
    phone: string
    email: string
    address: string
  }

  export type ScholarshipProviderUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    contact_person?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type ScholarshipProviderUncheckedUpdateManyInput = {
    provider_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    contact_person?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type ScholarshipCreateInput = {
    name: string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    no_of_students: number
    application_deadline: Date | string
    start_date: Date | string
    end_date: Date | string
    is_active?: boolean
    provider: ScholarshipProviderCreateNestedOneWithoutScholarshipsInput
    criteria?: EligibilityCriteriaCreateNestedManyWithoutScholarshipInput
    applications?: ApplicationCreateNestedManyWithoutScholarshipInput
  }

  export type ScholarshipUncheckedCreateInput = {
    scholarship_id?: number
    name: string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    no_of_students: number
    application_deadline: Date | string
    start_date: Date | string
    end_date: Date | string
    provider_id: number
    is_active?: boolean
    criteria?: EligibilityCriteriaUncheckedCreateNestedManyWithoutScholarshipInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutScholarshipInput
  }

  export type ScholarshipUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    no_of_students?: IntFieldUpdateOperationsInput | number
    application_deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    provider?: ScholarshipProviderUpdateOneRequiredWithoutScholarshipsNestedInput
    criteria?: EligibilityCriteriaUpdateManyWithoutScholarshipNestedInput
    applications?: ApplicationUpdateManyWithoutScholarshipNestedInput
  }

  export type ScholarshipUncheckedUpdateInput = {
    scholarship_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    no_of_students?: IntFieldUpdateOperationsInput | number
    application_deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    provider_id?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    criteria?: EligibilityCriteriaUncheckedUpdateManyWithoutScholarshipNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutScholarshipNestedInput
  }

  export type ScholarshipCreateManyInput = {
    scholarship_id?: number
    name: string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    no_of_students: number
    application_deadline: Date | string
    start_date: Date | string
    end_date: Date | string
    provider_id: number
    is_active?: boolean
  }

  export type ScholarshipUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    no_of_students?: IntFieldUpdateOperationsInput | number
    application_deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ScholarshipUncheckedUpdateManyInput = {
    scholarship_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    no_of_students?: IntFieldUpdateOperationsInput | number
    application_deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    provider_id?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EligibilityCriteriaCreateInput = {
    criteria_name: string
    criteria_description: string
    min_value: Decimal | DecimalJsLike | number | string
    max_value: Decimal | DecimalJsLike | number | string
    weight: number
    scholarship: ScholarshipCreateNestedOneWithoutCriteriaInput
  }

  export type EligibilityCriteriaUncheckedCreateInput = {
    criteria_id?: number
    scholarship_id: number
    criteria_name: string
    criteria_description: string
    min_value: Decimal | DecimalJsLike | number | string
    max_value: Decimal | DecimalJsLike | number | string
    weight: number
  }

  export type EligibilityCriteriaUpdateInput = {
    criteria_name?: StringFieldUpdateOperationsInput | string
    criteria_description?: StringFieldUpdateOperationsInput | string
    min_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    max_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    weight?: IntFieldUpdateOperationsInput | number
    scholarship?: ScholarshipUpdateOneRequiredWithoutCriteriaNestedInput
  }

  export type EligibilityCriteriaUncheckedUpdateInput = {
    criteria_id?: IntFieldUpdateOperationsInput | number
    scholarship_id?: IntFieldUpdateOperationsInput | number
    criteria_name?: StringFieldUpdateOperationsInput | string
    criteria_description?: StringFieldUpdateOperationsInput | string
    min_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    max_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    weight?: IntFieldUpdateOperationsInput | number
  }

  export type EligibilityCriteriaCreateManyInput = {
    criteria_id?: number
    scholarship_id: number
    criteria_name: string
    criteria_description: string
    min_value: Decimal | DecimalJsLike | number | string
    max_value: Decimal | DecimalJsLike | number | string
    weight: number
  }

  export type EligibilityCriteriaUpdateManyMutationInput = {
    criteria_name?: StringFieldUpdateOperationsInput | string
    criteria_description?: StringFieldUpdateOperationsInput | string
    min_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    max_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    weight?: IntFieldUpdateOperationsInput | number
  }

  export type EligibilityCriteriaUncheckedUpdateManyInput = {
    criteria_id?: IntFieldUpdateOperationsInput | number
    scholarship_id?: IntFieldUpdateOperationsInput | number
    criteria_name?: StringFieldUpdateOperationsInput | string
    criteria_description?: StringFieldUpdateOperationsInput | string
    min_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    max_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    weight?: IntFieldUpdateOperationsInput | number
  }

  export type ApplicationCreateInput = {
    submission_date: Date | string
    status?: $Enums.ApplicationStatus
    total_points?: number | null
    reviewer_comments?: string | null
    review_date?: Date | string | null
    student: StudentCreateNestedOneWithoutApplicationsInput
    scholarship: ScholarshipCreateNestedOneWithoutApplicationsInput
    documents?: DocumentCreateNestedManyWithoutApplicationInput
    reviews?: CommitteeReviewCreateNestedManyWithoutApplicationInput
    payments?: PaymentCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateInput = {
    application_id?: number
    student_id: number
    scholarship_id: number
    submission_date: Date | string
    status?: $Enums.ApplicationStatus
    total_points?: number | null
    reviewer_comments?: string | null
    review_date?: Date | string | null
    documents?: DocumentUncheckedCreateNestedManyWithoutApplicationInput
    reviews?: CommitteeReviewUncheckedCreateNestedManyWithoutApplicationInput
    payments?: PaymentUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUpdateInput = {
    submission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    total_points?: NullableIntFieldUpdateOperationsInput | number | null
    reviewer_comments?: NullableStringFieldUpdateOperationsInput | string | null
    review_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student?: StudentUpdateOneRequiredWithoutApplicationsNestedInput
    scholarship?: ScholarshipUpdateOneRequiredWithoutApplicationsNestedInput
    documents?: DocumentUpdateManyWithoutApplicationNestedInput
    reviews?: CommitteeReviewUpdateManyWithoutApplicationNestedInput
    payments?: PaymentUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateInput = {
    application_id?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
    scholarship_id?: IntFieldUpdateOperationsInput | number
    submission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    total_points?: NullableIntFieldUpdateOperationsInput | number | null
    reviewer_comments?: NullableStringFieldUpdateOperationsInput | string | null
    review_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documents?: DocumentUncheckedUpdateManyWithoutApplicationNestedInput
    reviews?: CommitteeReviewUncheckedUpdateManyWithoutApplicationNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationCreateManyInput = {
    application_id?: number
    student_id: number
    scholarship_id: number
    submission_date: Date | string
    status?: $Enums.ApplicationStatus
    total_points?: number | null
    reviewer_comments?: string | null
    review_date?: Date | string | null
  }

  export type ApplicationUpdateManyMutationInput = {
    submission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    total_points?: NullableIntFieldUpdateOperationsInput | number | null
    reviewer_comments?: NullableStringFieldUpdateOperationsInput | string | null
    review_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ApplicationUncheckedUpdateManyInput = {
    application_id?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
    scholarship_id?: IntFieldUpdateOperationsInput | number
    submission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    total_points?: NullableIntFieldUpdateOperationsInput | number | null
    reviewer_comments?: NullableStringFieldUpdateOperationsInput | string | null
    review_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DocumentCreateInput = {
    document_type: string
    file_name: string
    file_path: string
    upload_date: Date | string
    verification_status?: $Enums.VerificationStatus
    application: ApplicationCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentUncheckedCreateInput = {
    document_id?: number
    application_id: number
    document_type: string
    file_name: string
    file_path: string
    upload_date: Date | string
    verification_status?: $Enums.VerificationStatus
  }

  export type DocumentUpdateInput = {
    document_type?: StringFieldUpdateOperationsInput | string
    file_name?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    upload_date?: DateTimeFieldUpdateOperationsInput | Date | string
    verification_status?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    application?: ApplicationUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type DocumentUncheckedUpdateInput = {
    document_id?: IntFieldUpdateOperationsInput | number
    application_id?: IntFieldUpdateOperationsInput | number
    document_type?: StringFieldUpdateOperationsInput | string
    file_name?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    upload_date?: DateTimeFieldUpdateOperationsInput | Date | string
    verification_status?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
  }

  export type DocumentCreateManyInput = {
    document_id?: number
    application_id: number
    document_type: string
    file_name: string
    file_path: string
    upload_date: Date | string
    verification_status?: $Enums.VerificationStatus
  }

  export type DocumentUpdateManyMutationInput = {
    document_type?: StringFieldUpdateOperationsInput | string
    file_name?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    upload_date?: DateTimeFieldUpdateOperationsInput | Date | string
    verification_status?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
  }

  export type DocumentUncheckedUpdateManyInput = {
    document_id?: IntFieldUpdateOperationsInput | number
    application_id?: IntFieldUpdateOperationsInput | number
    document_type?: StringFieldUpdateOperationsInput | string
    file_name?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    upload_date?: DateTimeFieldUpdateOperationsInput | Date | string
    verification_status?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
  }

  export type FamilyMemberCreateInput = {
    full_name: string
    age: number
    relationship: string
    designation: string
    annual_income: Decimal | DecimalJsLike | number | string
    workplace: string
    phone_number: string
    student: StudentCreateNestedOneWithoutFamilyMembersInput
    siblingEducation?: SiblingEducationCreateNestedManyWithoutMemberInput
  }

  export type FamilyMemberUncheckedCreateInput = {
    member_id?: number
    student_id: number
    full_name: string
    age: number
    relationship: string
    designation: string
    annual_income: Decimal | DecimalJsLike | number | string
    workplace: string
    phone_number: string
    siblingEducation?: SiblingEducationUncheckedCreateNestedManyWithoutMemberInput
  }

  export type FamilyMemberUpdateInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    relationship?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    annual_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    workplace?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    student?: StudentUpdateOneRequiredWithoutFamilyMembersNestedInput
    siblingEducation?: SiblingEducationUpdateManyWithoutMemberNestedInput
  }

  export type FamilyMemberUncheckedUpdateInput = {
    member_id?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    relationship?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    annual_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    workplace?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    siblingEducation?: SiblingEducationUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type FamilyMemberCreateManyInput = {
    member_id?: number
    student_id: number
    full_name: string
    age: number
    relationship: string
    designation: string
    annual_income: Decimal | DecimalJsLike | number | string
    workplace: string
    phone_number: string
  }

  export type FamilyMemberUpdateManyMutationInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    relationship?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    annual_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    workplace?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
  }

  export type FamilyMemberUncheckedUpdateManyInput = {
    member_id?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    relationship?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    annual_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    workplace?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
  }

  export type OtherFundingCreateInput = {
    funding_name: string
    organization: string
    annual_amount: Decimal | DecimalJsLike | number | string
    start_date: Date | string
    end_date: Date | string
    student: StudentCreateNestedOneWithoutOtherFundingInput
  }

  export type OtherFundingUncheckedCreateInput = {
    funding_id?: number
    student_id: number
    funding_name: string
    organization: string
    annual_amount: Decimal | DecimalJsLike | number | string
    start_date: Date | string
    end_date: Date | string
  }

  export type OtherFundingUpdateInput = {
    funding_name?: StringFieldUpdateOperationsInput | string
    organization?: StringFieldUpdateOperationsInput | string
    annual_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutOtherFundingNestedInput
  }

  export type OtherFundingUncheckedUpdateInput = {
    funding_id?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
    funding_name?: StringFieldUpdateOperationsInput | string
    organization?: StringFieldUpdateOperationsInput | string
    annual_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtherFundingCreateManyInput = {
    funding_id?: number
    student_id: number
    funding_name: string
    organization: string
    annual_amount: Decimal | DecimalJsLike | number | string
    start_date: Date | string
    end_date: Date | string
  }

  export type OtherFundingUpdateManyMutationInput = {
    funding_name?: StringFieldUpdateOperationsInput | string
    organization?: StringFieldUpdateOperationsInput | string
    annual_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtherFundingUncheckedUpdateManyInput = {
    funding_id?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
    funding_name?: StringFieldUpdateOperationsInput | string
    organization?: StringFieldUpdateOperationsInput | string
    annual_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommitteeReviewCreateInput = {
    review_date: Date | string
    points_awarded: number
    comments: string
    status?: $Enums.ReviewStatus
    is_read?: boolean
    application: ApplicationCreateNestedOneWithoutReviewsInput
    reviewer: UserCreateNestedOneWithoutReviewsInput
  }

  export type CommitteeReviewUncheckedCreateInput = {
    review_id?: number
    application_id: number
    reviewer_id: number
    review_date: Date | string
    points_awarded: number
    comments: string
    status?: $Enums.ReviewStatus
    is_read?: boolean
  }

  export type CommitteeReviewUpdateInput = {
    review_date?: DateTimeFieldUpdateOperationsInput | Date | string
    points_awarded?: IntFieldUpdateOperationsInput | number
    comments?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    is_read?: BoolFieldUpdateOperationsInput | boolean
    application?: ApplicationUpdateOneRequiredWithoutReviewsNestedInput
    reviewer?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type CommitteeReviewUncheckedUpdateInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    application_id?: IntFieldUpdateOperationsInput | number
    reviewer_id?: IntFieldUpdateOperationsInput | number
    review_date?: DateTimeFieldUpdateOperationsInput | Date | string
    points_awarded?: IntFieldUpdateOperationsInput | number
    comments?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    is_read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CommitteeReviewCreateManyInput = {
    review_id?: number
    application_id: number
    reviewer_id: number
    review_date: Date | string
    points_awarded: number
    comments: string
    status?: $Enums.ReviewStatus
    is_read?: boolean
  }

  export type CommitteeReviewUpdateManyMutationInput = {
    review_date?: DateTimeFieldUpdateOperationsInput | Date | string
    points_awarded?: IntFieldUpdateOperationsInput | number
    comments?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    is_read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CommitteeReviewUncheckedUpdateManyInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    application_id?: IntFieldUpdateOperationsInput | number
    reviewer_id?: IntFieldUpdateOperationsInput | number
    review_date?: DateTimeFieldUpdateOperationsInput | Date | string
    points_awarded?: IntFieldUpdateOperationsInput | number
    comments?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    is_read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PaymentCreateInput = {
    amount: Decimal | DecimalJsLike | number | string
    payment_date: Date | string
    payment_method: string
    transaction_id: string
    status?: $Enums.PaymentStatus
    application: ApplicationCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    payment_id?: number
    application_id: number
    amount: Decimal | DecimalJsLike | number | string
    payment_date: Date | string
    payment_method: string
    transaction_id: string
    status?: $Enums.PaymentStatus
  }

  export type PaymentUpdateInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_method?: StringFieldUpdateOperationsInput | string
    transaction_id?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    application?: ApplicationUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    application_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_method?: StringFieldUpdateOperationsInput | string
    transaction_id?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
  }

  export type PaymentCreateManyInput = {
    payment_id?: number
    application_id: number
    amount: Decimal | DecimalJsLike | number | string
    payment_date: Date | string
    payment_method: string
    transaction_id: string
    status?: $Enums.PaymentStatus
  }

  export type PaymentUpdateManyMutationInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_method?: StringFieldUpdateOperationsInput | string
    transaction_id?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
  }

  export type PaymentUncheckedUpdateManyInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    application_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_method?: StringFieldUpdateOperationsInput | string
    transaction_id?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
  }

  export type SiblingEducationCreateInput = {
    institution: string
    year_grade: string
    registration_course: string
    student: StudentCreateNestedOneWithoutSiblingEducationInput
    member: FamilyMemberCreateNestedOneWithoutSiblingEducationInput
  }

  export type SiblingEducationUncheckedCreateInput = {
    education_id?: number
    student_id: number
    member_id: number
    institution: string
    year_grade: string
    registration_course: string
  }

  export type SiblingEducationUpdateInput = {
    institution?: StringFieldUpdateOperationsInput | string
    year_grade?: StringFieldUpdateOperationsInput | string
    registration_course?: StringFieldUpdateOperationsInput | string
    student?: StudentUpdateOneRequiredWithoutSiblingEducationNestedInput
    member?: FamilyMemberUpdateOneRequiredWithoutSiblingEducationNestedInput
  }

  export type SiblingEducationUncheckedUpdateInput = {
    education_id?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
    member_id?: IntFieldUpdateOperationsInput | number
    institution?: StringFieldUpdateOperationsInput | string
    year_grade?: StringFieldUpdateOperationsInput | string
    registration_course?: StringFieldUpdateOperationsInput | string
  }

  export type SiblingEducationCreateManyInput = {
    education_id?: number
    student_id: number
    member_id: number
    institution: string
    year_grade: string
    registration_course: string
  }

  export type SiblingEducationUpdateManyMutationInput = {
    institution?: StringFieldUpdateOperationsInput | string
    year_grade?: StringFieldUpdateOperationsInput | string
    registration_course?: StringFieldUpdateOperationsInput | string
  }

  export type SiblingEducationUncheckedUpdateManyInput = {
    education_id?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
    member_id?: IntFieldUpdateOperationsInput | number
    institution?: StringFieldUpdateOperationsInput | string
    year_grade?: StringFieldUpdateOperationsInput | string
    registration_course?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationCreateInput = {
    message: string
    created_at?: Date | string
    is_read?: boolean
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    notification_id?: number
    user_id: number
    message: string
    created_at?: Date | string
    is_read?: boolean
  }

  export type NotificationUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    notification_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationCreateManyInput = {
    notification_id?: number
    user_id: number
    message: string
    created_at?: Date | string
    is_read?: boolean
  }

  export type NotificationUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationUncheckedUpdateManyInput = {
    notification_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SettingCreateInput = {
    key: string
    value: string
  }

  export type SettingUncheckedCreateInput = {
    key: string
    value: string
  }

  export type SettingUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type SettingUncheckedUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type SettingCreateManyInput = {
    key: string
    value: string
  }

  export type SettingUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type SettingUncheckedUpdateManyInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type StudentNullableScalarRelationFilter = {
    is?: StudentWhereInput | null
    isNot?: StudentWhereInput | null
  }

  export type CommitteeReviewListRelationFilter = {
    every?: CommitteeReviewWhereInput
    some?: CommitteeReviewWhereInput
    none?: CommitteeReviewWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type CommitteeReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    user_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    user_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    user_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    user_id?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[]
    notIn?: $Enums.Gender[]
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ApplicationListRelationFilter = {
    every?: ApplicationWhereInput
    some?: ApplicationWhereInput
    none?: ApplicationWhereInput
  }

  export type FamilyMemberListRelationFilter = {
    every?: FamilyMemberWhereInput
    some?: FamilyMemberWhereInput
    none?: FamilyMemberWhereInput
  }

  export type OtherFundingListRelationFilter = {
    every?: OtherFundingWhereInput
    some?: OtherFundingWhereInput
    none?: OtherFundingWhereInput
  }

  export type SiblingEducationListRelationFilter = {
    every?: SiblingEducationWhereInput
    some?: SiblingEducationWhereInput
    none?: SiblingEducationWhereInput
  }

  export type ApplicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FamilyMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OtherFundingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SiblingEducationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentOrderByRelevanceInput = {
    fields: StudentOrderByRelevanceFieldEnum | StudentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type StudentCountOrderByAggregateInput = {
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

  export type StudentAvgOrderByAggregateInput = {
    student_id?: SortOrder
    user_id?: SortOrder
    year_of_study?: SortOrder
    unmarried_siblings?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
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

  export type StudentMinOrderByAggregateInput = {
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

  export type StudentSumOrderByAggregateInput = {
    student_id?: SortOrder
    user_id?: SortOrder
    year_of_study?: SortOrder
    unmarried_siblings?: SortOrder
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[]
    notIn?: $Enums.Gender[]
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type ScholarshipListRelationFilter = {
    every?: ScholarshipWhereInput
    some?: ScholarshipWhereInput
    none?: ScholarshipWhereInput
  }

  export type ScholarshipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScholarshipProviderOrderByRelevanceInput = {
    fields: ScholarshipProviderOrderByRelevanceFieldEnum | ScholarshipProviderOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ScholarshipProviderCountOrderByAggregateInput = {
    provider_id?: SortOrder
    name?: SortOrder
    contact_person?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
  }

  export type ScholarshipProviderAvgOrderByAggregateInput = {
    provider_id?: SortOrder
  }

  export type ScholarshipProviderMaxOrderByAggregateInput = {
    provider_id?: SortOrder
    name?: SortOrder
    contact_person?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
  }

  export type ScholarshipProviderMinOrderByAggregateInput = {
    provider_id?: SortOrder
    name?: SortOrder
    contact_person?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
  }

  export type ScholarshipProviderSumOrderByAggregateInput = {
    provider_id?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ScholarshipProviderScalarRelationFilter = {
    is?: ScholarshipProviderWhereInput
    isNot?: ScholarshipProviderWhereInput
  }

  export type EligibilityCriteriaListRelationFilter = {
    every?: EligibilityCriteriaWhereInput
    some?: EligibilityCriteriaWhereInput
    none?: EligibilityCriteriaWhereInput
  }

  export type EligibilityCriteriaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScholarshipOrderByRelevanceInput = {
    fields: ScholarshipOrderByRelevanceFieldEnum | ScholarshipOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ScholarshipCountOrderByAggregateInput = {
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

  export type ScholarshipAvgOrderByAggregateInput = {
    scholarship_id?: SortOrder
    amount?: SortOrder
    no_of_students?: SortOrder
    provider_id?: SortOrder
  }

  export type ScholarshipMaxOrderByAggregateInput = {
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

  export type ScholarshipMinOrderByAggregateInput = {
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

  export type ScholarshipSumOrderByAggregateInput = {
    scholarship_id?: SortOrder
    amount?: SortOrder
    no_of_students?: SortOrder
    provider_id?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ScholarshipScalarRelationFilter = {
    is?: ScholarshipWhereInput
    isNot?: ScholarshipWhereInput
  }

  export type EligibilityCriteriaOrderByRelevanceInput = {
    fields: EligibilityCriteriaOrderByRelevanceFieldEnum | EligibilityCriteriaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EligibilityCriteriaCountOrderByAggregateInput = {
    criteria_id?: SortOrder
    scholarship_id?: SortOrder
    criteria_name?: SortOrder
    criteria_description?: SortOrder
    min_value?: SortOrder
    max_value?: SortOrder
    weight?: SortOrder
  }

  export type EligibilityCriteriaAvgOrderByAggregateInput = {
    criteria_id?: SortOrder
    scholarship_id?: SortOrder
    min_value?: SortOrder
    max_value?: SortOrder
    weight?: SortOrder
  }

  export type EligibilityCriteriaMaxOrderByAggregateInput = {
    criteria_id?: SortOrder
    scholarship_id?: SortOrder
    criteria_name?: SortOrder
    criteria_description?: SortOrder
    min_value?: SortOrder
    max_value?: SortOrder
    weight?: SortOrder
  }

  export type EligibilityCriteriaMinOrderByAggregateInput = {
    criteria_id?: SortOrder
    scholarship_id?: SortOrder
    criteria_name?: SortOrder
    criteria_description?: SortOrder
    min_value?: SortOrder
    max_value?: SortOrder
    weight?: SortOrder
  }

  export type EligibilityCriteriaSumOrderByAggregateInput = {
    criteria_id?: SortOrder
    scholarship_id?: SortOrder
    min_value?: SortOrder
    max_value?: SortOrder
    weight?: SortOrder
  }

  export type EnumApplicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[]
    notIn?: $Enums.ApplicationStatus[]
    not?: NestedEnumApplicationStatusFilter<$PrismaModel> | $Enums.ApplicationStatus
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

  export type StudentScalarRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type DocumentListRelationFilter = {
    every?: DocumentWhereInput
    some?: DocumentWhereInput
    none?: DocumentWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApplicationOrderByRelevanceInput = {
    fields: ApplicationOrderByRelevanceFieldEnum | ApplicationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ApplicationCountOrderByAggregateInput = {
    application_id?: SortOrder
    student_id?: SortOrder
    scholarship_id?: SortOrder
    submission_date?: SortOrder
    status?: SortOrder
    total_points?: SortOrder
    reviewer_comments?: SortOrder
    review_date?: SortOrder
  }

  export type ApplicationAvgOrderByAggregateInput = {
    application_id?: SortOrder
    student_id?: SortOrder
    scholarship_id?: SortOrder
    total_points?: SortOrder
  }

  export type ApplicationMaxOrderByAggregateInput = {
    application_id?: SortOrder
    student_id?: SortOrder
    scholarship_id?: SortOrder
    submission_date?: SortOrder
    status?: SortOrder
    total_points?: SortOrder
    reviewer_comments?: SortOrder
    review_date?: SortOrder
  }

  export type ApplicationMinOrderByAggregateInput = {
    application_id?: SortOrder
    student_id?: SortOrder
    scholarship_id?: SortOrder
    submission_date?: SortOrder
    status?: SortOrder
    total_points?: SortOrder
    reviewer_comments?: SortOrder
    review_date?: SortOrder
  }

  export type ApplicationSumOrderByAggregateInput = {
    application_id?: SortOrder
    student_id?: SortOrder
    scholarship_id?: SortOrder
    total_points?: SortOrder
  }

  export type EnumApplicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[]
    notIn?: $Enums.ApplicationStatus[]
    not?: NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApplicationStatusFilter<$PrismaModel>
    _max?: NestedEnumApplicationStatusFilter<$PrismaModel>
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

  export type EnumVerificationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationStatus | EnumVerificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationStatus[]
    notIn?: $Enums.VerificationStatus[]
    not?: NestedEnumVerificationStatusFilter<$PrismaModel> | $Enums.VerificationStatus
  }

  export type ApplicationScalarRelationFilter = {
    is?: ApplicationWhereInput
    isNot?: ApplicationWhereInput
  }

  export type DocumentOrderByRelevanceInput = {
    fields: DocumentOrderByRelevanceFieldEnum | DocumentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DocumentCountOrderByAggregateInput = {
    document_id?: SortOrder
    application_id?: SortOrder
    document_type?: SortOrder
    file_name?: SortOrder
    file_path?: SortOrder
    upload_date?: SortOrder
    verification_status?: SortOrder
  }

  export type DocumentAvgOrderByAggregateInput = {
    document_id?: SortOrder
    application_id?: SortOrder
  }

  export type DocumentMaxOrderByAggregateInput = {
    document_id?: SortOrder
    application_id?: SortOrder
    document_type?: SortOrder
    file_name?: SortOrder
    file_path?: SortOrder
    upload_date?: SortOrder
    verification_status?: SortOrder
  }

  export type DocumentMinOrderByAggregateInput = {
    document_id?: SortOrder
    application_id?: SortOrder
    document_type?: SortOrder
    file_name?: SortOrder
    file_path?: SortOrder
    upload_date?: SortOrder
    verification_status?: SortOrder
  }

  export type DocumentSumOrderByAggregateInput = {
    document_id?: SortOrder
    application_id?: SortOrder
  }

  export type EnumVerificationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationStatus | EnumVerificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationStatus[]
    notIn?: $Enums.VerificationStatus[]
    not?: NestedEnumVerificationStatusWithAggregatesFilter<$PrismaModel> | $Enums.VerificationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVerificationStatusFilter<$PrismaModel>
    _max?: NestedEnumVerificationStatusFilter<$PrismaModel>
  }

  export type FamilyMemberOrderByRelevanceInput = {
    fields: FamilyMemberOrderByRelevanceFieldEnum | FamilyMemberOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FamilyMemberCountOrderByAggregateInput = {
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

  export type FamilyMemberAvgOrderByAggregateInput = {
    member_id?: SortOrder
    student_id?: SortOrder
    age?: SortOrder
    annual_income?: SortOrder
  }

  export type FamilyMemberMaxOrderByAggregateInput = {
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

  export type FamilyMemberMinOrderByAggregateInput = {
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

  export type FamilyMemberSumOrderByAggregateInput = {
    member_id?: SortOrder
    student_id?: SortOrder
    age?: SortOrder
    annual_income?: SortOrder
  }

  export type OtherFundingOrderByRelevanceInput = {
    fields: OtherFundingOrderByRelevanceFieldEnum | OtherFundingOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type OtherFundingCountOrderByAggregateInput = {
    funding_id?: SortOrder
    student_id?: SortOrder
    funding_name?: SortOrder
    organization?: SortOrder
    annual_amount?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
  }

  export type OtherFundingAvgOrderByAggregateInput = {
    funding_id?: SortOrder
    student_id?: SortOrder
    annual_amount?: SortOrder
  }

  export type OtherFundingMaxOrderByAggregateInput = {
    funding_id?: SortOrder
    student_id?: SortOrder
    funding_name?: SortOrder
    organization?: SortOrder
    annual_amount?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
  }

  export type OtherFundingMinOrderByAggregateInput = {
    funding_id?: SortOrder
    student_id?: SortOrder
    funding_name?: SortOrder
    organization?: SortOrder
    annual_amount?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
  }

  export type OtherFundingSumOrderByAggregateInput = {
    funding_id?: SortOrder
    student_id?: SortOrder
    annual_amount?: SortOrder
  }

  export type EnumReviewStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewStatus | EnumReviewStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewStatus[]
    notIn?: $Enums.ReviewStatus[]
    not?: NestedEnumReviewStatusFilter<$PrismaModel> | $Enums.ReviewStatus
  }

  export type CommitteeReviewOrderByRelevanceInput = {
    fields: CommitteeReviewOrderByRelevanceFieldEnum | CommitteeReviewOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CommitteeReviewCountOrderByAggregateInput = {
    review_id?: SortOrder
    application_id?: SortOrder
    reviewer_id?: SortOrder
    review_date?: SortOrder
    points_awarded?: SortOrder
    comments?: SortOrder
    status?: SortOrder
    is_read?: SortOrder
  }

  export type CommitteeReviewAvgOrderByAggregateInput = {
    review_id?: SortOrder
    application_id?: SortOrder
    reviewer_id?: SortOrder
    points_awarded?: SortOrder
  }

  export type CommitteeReviewMaxOrderByAggregateInput = {
    review_id?: SortOrder
    application_id?: SortOrder
    reviewer_id?: SortOrder
    review_date?: SortOrder
    points_awarded?: SortOrder
    comments?: SortOrder
    status?: SortOrder
    is_read?: SortOrder
  }

  export type CommitteeReviewMinOrderByAggregateInput = {
    review_id?: SortOrder
    application_id?: SortOrder
    reviewer_id?: SortOrder
    review_date?: SortOrder
    points_awarded?: SortOrder
    comments?: SortOrder
    status?: SortOrder
    is_read?: SortOrder
  }

  export type CommitteeReviewSumOrderByAggregateInput = {
    review_id?: SortOrder
    application_id?: SortOrder
    reviewer_id?: SortOrder
    points_awarded?: SortOrder
  }

  export type EnumReviewStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewStatus | EnumReviewStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewStatus[]
    notIn?: $Enums.ReviewStatus[]
    not?: NestedEnumReviewStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReviewStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReviewStatusFilter<$PrismaModel>
    _max?: NestedEnumReviewStatusFilter<$PrismaModel>
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type PaymentOrderByRelevanceInput = {
    fields: PaymentOrderByRelevanceFieldEnum | PaymentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PaymentCountOrderByAggregateInput = {
    payment_id?: SortOrder
    application_id?: SortOrder
    amount?: SortOrder
    payment_date?: SortOrder
    payment_method?: SortOrder
    transaction_id?: SortOrder
    status?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    payment_id?: SortOrder
    application_id?: SortOrder
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    payment_id?: SortOrder
    application_id?: SortOrder
    amount?: SortOrder
    payment_date?: SortOrder
    payment_method?: SortOrder
    transaction_id?: SortOrder
    status?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    payment_id?: SortOrder
    application_id?: SortOrder
    amount?: SortOrder
    payment_date?: SortOrder
    payment_method?: SortOrder
    transaction_id?: SortOrder
    status?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    payment_id?: SortOrder
    application_id?: SortOrder
    amount?: SortOrder
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type FamilyMemberScalarRelationFilter = {
    is?: FamilyMemberWhereInput
    isNot?: FamilyMemberWhereInput
  }

  export type SiblingEducationOrderByRelevanceInput = {
    fields: SiblingEducationOrderByRelevanceFieldEnum | SiblingEducationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SiblingEducationCountOrderByAggregateInput = {
    education_id?: SortOrder
    student_id?: SortOrder
    member_id?: SortOrder
    institution?: SortOrder
    year_grade?: SortOrder
    registration_course?: SortOrder
  }

  export type SiblingEducationAvgOrderByAggregateInput = {
    education_id?: SortOrder
    student_id?: SortOrder
    member_id?: SortOrder
  }

  export type SiblingEducationMaxOrderByAggregateInput = {
    education_id?: SortOrder
    student_id?: SortOrder
    member_id?: SortOrder
    institution?: SortOrder
    year_grade?: SortOrder
    registration_course?: SortOrder
  }

  export type SiblingEducationMinOrderByAggregateInput = {
    education_id?: SortOrder
    student_id?: SortOrder
    member_id?: SortOrder
    institution?: SortOrder
    year_grade?: SortOrder
    registration_course?: SortOrder
  }

  export type SiblingEducationSumOrderByAggregateInput = {
    education_id?: SortOrder
    student_id?: SortOrder
    member_id?: SortOrder
  }

  export type NotificationOrderByRelevanceInput = {
    fields: NotificationOrderByRelevanceFieldEnum | NotificationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type NotificationCountOrderByAggregateInput = {
    notification_id?: SortOrder
    user_id?: SortOrder
    message?: SortOrder
    created_at?: SortOrder
    is_read?: SortOrder
  }

  export type NotificationAvgOrderByAggregateInput = {
    notification_id?: SortOrder
    user_id?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    notification_id?: SortOrder
    user_id?: SortOrder
    message?: SortOrder
    created_at?: SortOrder
    is_read?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    notification_id?: SortOrder
    user_id?: SortOrder
    message?: SortOrder
    created_at?: SortOrder
    is_read?: SortOrder
  }

  export type NotificationSumOrderByAggregateInput = {
    notification_id?: SortOrder
    user_id?: SortOrder
  }

  export type SettingOrderByRelevanceInput = {
    fields: SettingOrderByRelevanceFieldEnum | SettingOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SettingCountOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
  }

  export type SettingMaxOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
  }

  export type SettingMinOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
  }

  export type StudentCreateNestedOneWithoutUserInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    connect?: StudentWhereUniqueInput
  }

  export type CommitteeReviewCreateNestedManyWithoutReviewerInput = {
    create?: XOR<CommitteeReviewCreateWithoutReviewerInput, CommitteeReviewUncheckedCreateWithoutReviewerInput> | CommitteeReviewCreateWithoutReviewerInput[] | CommitteeReviewUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: CommitteeReviewCreateOrConnectWithoutReviewerInput | CommitteeReviewCreateOrConnectWithoutReviewerInput[]
    createMany?: CommitteeReviewCreateManyReviewerInputEnvelope
    connect?: CommitteeReviewWhereUniqueInput | CommitteeReviewWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    connect?: StudentWhereUniqueInput
  }

  export type CommitteeReviewUncheckedCreateNestedManyWithoutReviewerInput = {
    create?: XOR<CommitteeReviewCreateWithoutReviewerInput, CommitteeReviewUncheckedCreateWithoutReviewerInput> | CommitteeReviewCreateWithoutReviewerInput[] | CommitteeReviewUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: CommitteeReviewCreateOrConnectWithoutReviewerInput | CommitteeReviewCreateOrConnectWithoutReviewerInput[]
    createMany?: CommitteeReviewCreateManyReviewerInputEnvelope
    connect?: CommitteeReviewWhereUniqueInput | CommitteeReviewWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StudentUpdateOneWithoutUserNestedInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    upsert?: StudentUpsertWithoutUserInput
    disconnect?: StudentWhereInput | boolean
    delete?: StudentWhereInput | boolean
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutUserInput, StudentUpdateWithoutUserInput>, StudentUncheckedUpdateWithoutUserInput>
  }

  export type CommitteeReviewUpdateManyWithoutReviewerNestedInput = {
    create?: XOR<CommitteeReviewCreateWithoutReviewerInput, CommitteeReviewUncheckedCreateWithoutReviewerInput> | CommitteeReviewCreateWithoutReviewerInput[] | CommitteeReviewUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: CommitteeReviewCreateOrConnectWithoutReviewerInput | CommitteeReviewCreateOrConnectWithoutReviewerInput[]
    upsert?: CommitteeReviewUpsertWithWhereUniqueWithoutReviewerInput | CommitteeReviewUpsertWithWhereUniqueWithoutReviewerInput[]
    createMany?: CommitteeReviewCreateManyReviewerInputEnvelope
    set?: CommitteeReviewWhereUniqueInput | CommitteeReviewWhereUniqueInput[]
    disconnect?: CommitteeReviewWhereUniqueInput | CommitteeReviewWhereUniqueInput[]
    delete?: CommitteeReviewWhereUniqueInput | CommitteeReviewWhereUniqueInput[]
    connect?: CommitteeReviewWhereUniqueInput | CommitteeReviewWhereUniqueInput[]
    update?: CommitteeReviewUpdateWithWhereUniqueWithoutReviewerInput | CommitteeReviewUpdateWithWhereUniqueWithoutReviewerInput[]
    updateMany?: CommitteeReviewUpdateManyWithWhereWithoutReviewerInput | CommitteeReviewUpdateManyWithWhereWithoutReviewerInput[]
    deleteMany?: CommitteeReviewScalarWhereInput | CommitteeReviewScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StudentUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    upsert?: StudentUpsertWithoutUserInput
    disconnect?: StudentWhereInput | boolean
    delete?: StudentWhereInput | boolean
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutUserInput, StudentUpdateWithoutUserInput>, StudentUncheckedUpdateWithoutUserInput>
  }

  export type CommitteeReviewUncheckedUpdateManyWithoutReviewerNestedInput = {
    create?: XOR<CommitteeReviewCreateWithoutReviewerInput, CommitteeReviewUncheckedCreateWithoutReviewerInput> | CommitteeReviewCreateWithoutReviewerInput[] | CommitteeReviewUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: CommitteeReviewCreateOrConnectWithoutReviewerInput | CommitteeReviewCreateOrConnectWithoutReviewerInput[]
    upsert?: CommitteeReviewUpsertWithWhereUniqueWithoutReviewerInput | CommitteeReviewUpsertWithWhereUniqueWithoutReviewerInput[]
    createMany?: CommitteeReviewCreateManyReviewerInputEnvelope
    set?: CommitteeReviewWhereUniqueInput | CommitteeReviewWhereUniqueInput[]
    disconnect?: CommitteeReviewWhereUniqueInput | CommitteeReviewWhereUniqueInput[]
    delete?: CommitteeReviewWhereUniqueInput | CommitteeReviewWhereUniqueInput[]
    connect?: CommitteeReviewWhereUniqueInput | CommitteeReviewWhereUniqueInput[]
    update?: CommitteeReviewUpdateWithWhereUniqueWithoutReviewerInput | CommitteeReviewUpdateWithWhereUniqueWithoutReviewerInput[]
    updateMany?: CommitteeReviewUpdateManyWithWhereWithoutReviewerInput | CommitteeReviewUpdateManyWithWhereWithoutReviewerInput[]
    deleteMany?: CommitteeReviewScalarWhereInput | CommitteeReviewScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutStudentInput = {
    create?: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentInput
    connect?: UserWhereUniqueInput
  }

  export type ApplicationCreateNestedManyWithoutStudentInput = {
    create?: XOR<ApplicationCreateWithoutStudentInput, ApplicationUncheckedCreateWithoutStudentInput> | ApplicationCreateWithoutStudentInput[] | ApplicationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutStudentInput | ApplicationCreateOrConnectWithoutStudentInput[]
    createMany?: ApplicationCreateManyStudentInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type FamilyMemberCreateNestedManyWithoutStudentInput = {
    create?: XOR<FamilyMemberCreateWithoutStudentInput, FamilyMemberUncheckedCreateWithoutStudentInput> | FamilyMemberCreateWithoutStudentInput[] | FamilyMemberUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: FamilyMemberCreateOrConnectWithoutStudentInput | FamilyMemberCreateOrConnectWithoutStudentInput[]
    createMany?: FamilyMemberCreateManyStudentInputEnvelope
    connect?: FamilyMemberWhereUniqueInput | FamilyMemberWhereUniqueInput[]
  }

  export type OtherFundingCreateNestedManyWithoutStudentInput = {
    create?: XOR<OtherFundingCreateWithoutStudentInput, OtherFundingUncheckedCreateWithoutStudentInput> | OtherFundingCreateWithoutStudentInput[] | OtherFundingUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: OtherFundingCreateOrConnectWithoutStudentInput | OtherFundingCreateOrConnectWithoutStudentInput[]
    createMany?: OtherFundingCreateManyStudentInputEnvelope
    connect?: OtherFundingWhereUniqueInput | OtherFundingWhereUniqueInput[]
  }

  export type SiblingEducationCreateNestedManyWithoutStudentInput = {
    create?: XOR<SiblingEducationCreateWithoutStudentInput, SiblingEducationUncheckedCreateWithoutStudentInput> | SiblingEducationCreateWithoutStudentInput[] | SiblingEducationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: SiblingEducationCreateOrConnectWithoutStudentInput | SiblingEducationCreateOrConnectWithoutStudentInput[]
    createMany?: SiblingEducationCreateManyStudentInputEnvelope
    connect?: SiblingEducationWhereUniqueInput | SiblingEducationWhereUniqueInput[]
  }

  export type ApplicationUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<ApplicationCreateWithoutStudentInput, ApplicationUncheckedCreateWithoutStudentInput> | ApplicationCreateWithoutStudentInput[] | ApplicationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutStudentInput | ApplicationCreateOrConnectWithoutStudentInput[]
    createMany?: ApplicationCreateManyStudentInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type FamilyMemberUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<FamilyMemberCreateWithoutStudentInput, FamilyMemberUncheckedCreateWithoutStudentInput> | FamilyMemberCreateWithoutStudentInput[] | FamilyMemberUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: FamilyMemberCreateOrConnectWithoutStudentInput | FamilyMemberCreateOrConnectWithoutStudentInput[]
    createMany?: FamilyMemberCreateManyStudentInputEnvelope
    connect?: FamilyMemberWhereUniqueInput | FamilyMemberWhereUniqueInput[]
  }

  export type OtherFundingUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<OtherFundingCreateWithoutStudentInput, OtherFundingUncheckedCreateWithoutStudentInput> | OtherFundingCreateWithoutStudentInput[] | OtherFundingUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: OtherFundingCreateOrConnectWithoutStudentInput | OtherFundingCreateOrConnectWithoutStudentInput[]
    createMany?: OtherFundingCreateManyStudentInputEnvelope
    connect?: OtherFundingWhereUniqueInput | OtherFundingWhereUniqueInput[]
  }

  export type SiblingEducationUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<SiblingEducationCreateWithoutStudentInput, SiblingEducationUncheckedCreateWithoutStudentInput> | SiblingEducationCreateWithoutStudentInput[] | SiblingEducationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: SiblingEducationCreateOrConnectWithoutStudentInput | SiblingEducationCreateOrConnectWithoutStudentInput[]
    createMany?: SiblingEducationCreateManyStudentInputEnvelope
    connect?: SiblingEducationWhereUniqueInput | SiblingEducationWhereUniqueInput[]
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type UserUpdateOneRequiredWithoutStudentNestedInput = {
    create?: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentInput
    upsert?: UserUpsertWithoutStudentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStudentInput, UserUpdateWithoutStudentInput>, UserUncheckedUpdateWithoutStudentInput>
  }

  export type ApplicationUpdateManyWithoutStudentNestedInput = {
    create?: XOR<ApplicationCreateWithoutStudentInput, ApplicationUncheckedCreateWithoutStudentInput> | ApplicationCreateWithoutStudentInput[] | ApplicationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutStudentInput | ApplicationCreateOrConnectWithoutStudentInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutStudentInput | ApplicationUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: ApplicationCreateManyStudentInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutStudentInput | ApplicationUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutStudentInput | ApplicationUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type FamilyMemberUpdateManyWithoutStudentNestedInput = {
    create?: XOR<FamilyMemberCreateWithoutStudentInput, FamilyMemberUncheckedCreateWithoutStudentInput> | FamilyMemberCreateWithoutStudentInput[] | FamilyMemberUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: FamilyMemberCreateOrConnectWithoutStudentInput | FamilyMemberCreateOrConnectWithoutStudentInput[]
    upsert?: FamilyMemberUpsertWithWhereUniqueWithoutStudentInput | FamilyMemberUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: FamilyMemberCreateManyStudentInputEnvelope
    set?: FamilyMemberWhereUniqueInput | FamilyMemberWhereUniqueInput[]
    disconnect?: FamilyMemberWhereUniqueInput | FamilyMemberWhereUniqueInput[]
    delete?: FamilyMemberWhereUniqueInput | FamilyMemberWhereUniqueInput[]
    connect?: FamilyMemberWhereUniqueInput | FamilyMemberWhereUniqueInput[]
    update?: FamilyMemberUpdateWithWhereUniqueWithoutStudentInput | FamilyMemberUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: FamilyMemberUpdateManyWithWhereWithoutStudentInput | FamilyMemberUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: FamilyMemberScalarWhereInput | FamilyMemberScalarWhereInput[]
  }

  export type OtherFundingUpdateManyWithoutStudentNestedInput = {
    create?: XOR<OtherFundingCreateWithoutStudentInput, OtherFundingUncheckedCreateWithoutStudentInput> | OtherFundingCreateWithoutStudentInput[] | OtherFundingUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: OtherFundingCreateOrConnectWithoutStudentInput | OtherFundingCreateOrConnectWithoutStudentInput[]
    upsert?: OtherFundingUpsertWithWhereUniqueWithoutStudentInput | OtherFundingUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: OtherFundingCreateManyStudentInputEnvelope
    set?: OtherFundingWhereUniqueInput | OtherFundingWhereUniqueInput[]
    disconnect?: OtherFundingWhereUniqueInput | OtherFundingWhereUniqueInput[]
    delete?: OtherFundingWhereUniqueInput | OtherFundingWhereUniqueInput[]
    connect?: OtherFundingWhereUniqueInput | OtherFundingWhereUniqueInput[]
    update?: OtherFundingUpdateWithWhereUniqueWithoutStudentInput | OtherFundingUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: OtherFundingUpdateManyWithWhereWithoutStudentInput | OtherFundingUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: OtherFundingScalarWhereInput | OtherFundingScalarWhereInput[]
  }

  export type SiblingEducationUpdateManyWithoutStudentNestedInput = {
    create?: XOR<SiblingEducationCreateWithoutStudentInput, SiblingEducationUncheckedCreateWithoutStudentInput> | SiblingEducationCreateWithoutStudentInput[] | SiblingEducationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: SiblingEducationCreateOrConnectWithoutStudentInput | SiblingEducationCreateOrConnectWithoutStudentInput[]
    upsert?: SiblingEducationUpsertWithWhereUniqueWithoutStudentInput | SiblingEducationUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: SiblingEducationCreateManyStudentInputEnvelope
    set?: SiblingEducationWhereUniqueInput | SiblingEducationWhereUniqueInput[]
    disconnect?: SiblingEducationWhereUniqueInput | SiblingEducationWhereUniqueInput[]
    delete?: SiblingEducationWhereUniqueInput | SiblingEducationWhereUniqueInput[]
    connect?: SiblingEducationWhereUniqueInput | SiblingEducationWhereUniqueInput[]
    update?: SiblingEducationUpdateWithWhereUniqueWithoutStudentInput | SiblingEducationUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: SiblingEducationUpdateManyWithWhereWithoutStudentInput | SiblingEducationUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: SiblingEducationScalarWhereInput | SiblingEducationScalarWhereInput[]
  }

  export type ApplicationUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<ApplicationCreateWithoutStudentInput, ApplicationUncheckedCreateWithoutStudentInput> | ApplicationCreateWithoutStudentInput[] | ApplicationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutStudentInput | ApplicationCreateOrConnectWithoutStudentInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutStudentInput | ApplicationUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: ApplicationCreateManyStudentInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutStudentInput | ApplicationUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutStudentInput | ApplicationUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type FamilyMemberUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<FamilyMemberCreateWithoutStudentInput, FamilyMemberUncheckedCreateWithoutStudentInput> | FamilyMemberCreateWithoutStudentInput[] | FamilyMemberUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: FamilyMemberCreateOrConnectWithoutStudentInput | FamilyMemberCreateOrConnectWithoutStudentInput[]
    upsert?: FamilyMemberUpsertWithWhereUniqueWithoutStudentInput | FamilyMemberUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: FamilyMemberCreateManyStudentInputEnvelope
    set?: FamilyMemberWhereUniqueInput | FamilyMemberWhereUniqueInput[]
    disconnect?: FamilyMemberWhereUniqueInput | FamilyMemberWhereUniqueInput[]
    delete?: FamilyMemberWhereUniqueInput | FamilyMemberWhereUniqueInput[]
    connect?: FamilyMemberWhereUniqueInput | FamilyMemberWhereUniqueInput[]
    update?: FamilyMemberUpdateWithWhereUniqueWithoutStudentInput | FamilyMemberUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: FamilyMemberUpdateManyWithWhereWithoutStudentInput | FamilyMemberUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: FamilyMemberScalarWhereInput | FamilyMemberScalarWhereInput[]
  }

  export type OtherFundingUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<OtherFundingCreateWithoutStudentInput, OtherFundingUncheckedCreateWithoutStudentInput> | OtherFundingCreateWithoutStudentInput[] | OtherFundingUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: OtherFundingCreateOrConnectWithoutStudentInput | OtherFundingCreateOrConnectWithoutStudentInput[]
    upsert?: OtherFundingUpsertWithWhereUniqueWithoutStudentInput | OtherFundingUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: OtherFundingCreateManyStudentInputEnvelope
    set?: OtherFundingWhereUniqueInput | OtherFundingWhereUniqueInput[]
    disconnect?: OtherFundingWhereUniqueInput | OtherFundingWhereUniqueInput[]
    delete?: OtherFundingWhereUniqueInput | OtherFundingWhereUniqueInput[]
    connect?: OtherFundingWhereUniqueInput | OtherFundingWhereUniqueInput[]
    update?: OtherFundingUpdateWithWhereUniqueWithoutStudentInput | OtherFundingUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: OtherFundingUpdateManyWithWhereWithoutStudentInput | OtherFundingUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: OtherFundingScalarWhereInput | OtherFundingScalarWhereInput[]
  }

  export type SiblingEducationUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<SiblingEducationCreateWithoutStudentInput, SiblingEducationUncheckedCreateWithoutStudentInput> | SiblingEducationCreateWithoutStudentInput[] | SiblingEducationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: SiblingEducationCreateOrConnectWithoutStudentInput | SiblingEducationCreateOrConnectWithoutStudentInput[]
    upsert?: SiblingEducationUpsertWithWhereUniqueWithoutStudentInput | SiblingEducationUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: SiblingEducationCreateManyStudentInputEnvelope
    set?: SiblingEducationWhereUniqueInput | SiblingEducationWhereUniqueInput[]
    disconnect?: SiblingEducationWhereUniqueInput | SiblingEducationWhereUniqueInput[]
    delete?: SiblingEducationWhereUniqueInput | SiblingEducationWhereUniqueInput[]
    connect?: SiblingEducationWhereUniqueInput | SiblingEducationWhereUniqueInput[]
    update?: SiblingEducationUpdateWithWhereUniqueWithoutStudentInput | SiblingEducationUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: SiblingEducationUpdateManyWithWhereWithoutStudentInput | SiblingEducationUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: SiblingEducationScalarWhereInput | SiblingEducationScalarWhereInput[]
  }

  export type ScholarshipCreateNestedManyWithoutProviderInput = {
    create?: XOR<ScholarshipCreateWithoutProviderInput, ScholarshipUncheckedCreateWithoutProviderInput> | ScholarshipCreateWithoutProviderInput[] | ScholarshipUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ScholarshipCreateOrConnectWithoutProviderInput | ScholarshipCreateOrConnectWithoutProviderInput[]
    createMany?: ScholarshipCreateManyProviderInputEnvelope
    connect?: ScholarshipWhereUniqueInput | ScholarshipWhereUniqueInput[]
  }

  export type ScholarshipUncheckedCreateNestedManyWithoutProviderInput = {
    create?: XOR<ScholarshipCreateWithoutProviderInput, ScholarshipUncheckedCreateWithoutProviderInput> | ScholarshipCreateWithoutProviderInput[] | ScholarshipUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ScholarshipCreateOrConnectWithoutProviderInput | ScholarshipCreateOrConnectWithoutProviderInput[]
    createMany?: ScholarshipCreateManyProviderInputEnvelope
    connect?: ScholarshipWhereUniqueInput | ScholarshipWhereUniqueInput[]
  }

  export type ScholarshipUpdateManyWithoutProviderNestedInput = {
    create?: XOR<ScholarshipCreateWithoutProviderInput, ScholarshipUncheckedCreateWithoutProviderInput> | ScholarshipCreateWithoutProviderInput[] | ScholarshipUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ScholarshipCreateOrConnectWithoutProviderInput | ScholarshipCreateOrConnectWithoutProviderInput[]
    upsert?: ScholarshipUpsertWithWhereUniqueWithoutProviderInput | ScholarshipUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: ScholarshipCreateManyProviderInputEnvelope
    set?: ScholarshipWhereUniqueInput | ScholarshipWhereUniqueInput[]
    disconnect?: ScholarshipWhereUniqueInput | ScholarshipWhereUniqueInput[]
    delete?: ScholarshipWhereUniqueInput | ScholarshipWhereUniqueInput[]
    connect?: ScholarshipWhereUniqueInput | ScholarshipWhereUniqueInput[]
    update?: ScholarshipUpdateWithWhereUniqueWithoutProviderInput | ScholarshipUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: ScholarshipUpdateManyWithWhereWithoutProviderInput | ScholarshipUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: ScholarshipScalarWhereInput | ScholarshipScalarWhereInput[]
  }

  export type ScholarshipUncheckedUpdateManyWithoutProviderNestedInput = {
    create?: XOR<ScholarshipCreateWithoutProviderInput, ScholarshipUncheckedCreateWithoutProviderInput> | ScholarshipCreateWithoutProviderInput[] | ScholarshipUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ScholarshipCreateOrConnectWithoutProviderInput | ScholarshipCreateOrConnectWithoutProviderInput[]
    upsert?: ScholarshipUpsertWithWhereUniqueWithoutProviderInput | ScholarshipUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: ScholarshipCreateManyProviderInputEnvelope
    set?: ScholarshipWhereUniqueInput | ScholarshipWhereUniqueInput[]
    disconnect?: ScholarshipWhereUniqueInput | ScholarshipWhereUniqueInput[]
    delete?: ScholarshipWhereUniqueInput | ScholarshipWhereUniqueInput[]
    connect?: ScholarshipWhereUniqueInput | ScholarshipWhereUniqueInput[]
    update?: ScholarshipUpdateWithWhereUniqueWithoutProviderInput | ScholarshipUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: ScholarshipUpdateManyWithWhereWithoutProviderInput | ScholarshipUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: ScholarshipScalarWhereInput | ScholarshipScalarWhereInput[]
  }

  export type ScholarshipProviderCreateNestedOneWithoutScholarshipsInput = {
    create?: XOR<ScholarshipProviderCreateWithoutScholarshipsInput, ScholarshipProviderUncheckedCreateWithoutScholarshipsInput>
    connectOrCreate?: ScholarshipProviderCreateOrConnectWithoutScholarshipsInput
    connect?: ScholarshipProviderWhereUniqueInput
  }

  export type EligibilityCriteriaCreateNestedManyWithoutScholarshipInput = {
    create?: XOR<EligibilityCriteriaCreateWithoutScholarshipInput, EligibilityCriteriaUncheckedCreateWithoutScholarshipInput> | EligibilityCriteriaCreateWithoutScholarshipInput[] | EligibilityCriteriaUncheckedCreateWithoutScholarshipInput[]
    connectOrCreate?: EligibilityCriteriaCreateOrConnectWithoutScholarshipInput | EligibilityCriteriaCreateOrConnectWithoutScholarshipInput[]
    createMany?: EligibilityCriteriaCreateManyScholarshipInputEnvelope
    connect?: EligibilityCriteriaWhereUniqueInput | EligibilityCriteriaWhereUniqueInput[]
  }

  export type ApplicationCreateNestedManyWithoutScholarshipInput = {
    create?: XOR<ApplicationCreateWithoutScholarshipInput, ApplicationUncheckedCreateWithoutScholarshipInput> | ApplicationCreateWithoutScholarshipInput[] | ApplicationUncheckedCreateWithoutScholarshipInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutScholarshipInput | ApplicationCreateOrConnectWithoutScholarshipInput[]
    createMany?: ApplicationCreateManyScholarshipInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type EligibilityCriteriaUncheckedCreateNestedManyWithoutScholarshipInput = {
    create?: XOR<EligibilityCriteriaCreateWithoutScholarshipInput, EligibilityCriteriaUncheckedCreateWithoutScholarshipInput> | EligibilityCriteriaCreateWithoutScholarshipInput[] | EligibilityCriteriaUncheckedCreateWithoutScholarshipInput[]
    connectOrCreate?: EligibilityCriteriaCreateOrConnectWithoutScholarshipInput | EligibilityCriteriaCreateOrConnectWithoutScholarshipInput[]
    createMany?: EligibilityCriteriaCreateManyScholarshipInputEnvelope
    connect?: EligibilityCriteriaWhereUniqueInput | EligibilityCriteriaWhereUniqueInput[]
  }

  export type ApplicationUncheckedCreateNestedManyWithoutScholarshipInput = {
    create?: XOR<ApplicationCreateWithoutScholarshipInput, ApplicationUncheckedCreateWithoutScholarshipInput> | ApplicationCreateWithoutScholarshipInput[] | ApplicationUncheckedCreateWithoutScholarshipInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutScholarshipInput | ApplicationCreateOrConnectWithoutScholarshipInput[]
    createMany?: ApplicationCreateManyScholarshipInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ScholarshipProviderUpdateOneRequiredWithoutScholarshipsNestedInput = {
    create?: XOR<ScholarshipProviderCreateWithoutScholarshipsInput, ScholarshipProviderUncheckedCreateWithoutScholarshipsInput>
    connectOrCreate?: ScholarshipProviderCreateOrConnectWithoutScholarshipsInput
    upsert?: ScholarshipProviderUpsertWithoutScholarshipsInput
    connect?: ScholarshipProviderWhereUniqueInput
    update?: XOR<XOR<ScholarshipProviderUpdateToOneWithWhereWithoutScholarshipsInput, ScholarshipProviderUpdateWithoutScholarshipsInput>, ScholarshipProviderUncheckedUpdateWithoutScholarshipsInput>
  }

  export type EligibilityCriteriaUpdateManyWithoutScholarshipNestedInput = {
    create?: XOR<EligibilityCriteriaCreateWithoutScholarshipInput, EligibilityCriteriaUncheckedCreateWithoutScholarshipInput> | EligibilityCriteriaCreateWithoutScholarshipInput[] | EligibilityCriteriaUncheckedCreateWithoutScholarshipInput[]
    connectOrCreate?: EligibilityCriteriaCreateOrConnectWithoutScholarshipInput | EligibilityCriteriaCreateOrConnectWithoutScholarshipInput[]
    upsert?: EligibilityCriteriaUpsertWithWhereUniqueWithoutScholarshipInput | EligibilityCriteriaUpsertWithWhereUniqueWithoutScholarshipInput[]
    createMany?: EligibilityCriteriaCreateManyScholarshipInputEnvelope
    set?: EligibilityCriteriaWhereUniqueInput | EligibilityCriteriaWhereUniqueInput[]
    disconnect?: EligibilityCriteriaWhereUniqueInput | EligibilityCriteriaWhereUniqueInput[]
    delete?: EligibilityCriteriaWhereUniqueInput | EligibilityCriteriaWhereUniqueInput[]
    connect?: EligibilityCriteriaWhereUniqueInput | EligibilityCriteriaWhereUniqueInput[]
    update?: EligibilityCriteriaUpdateWithWhereUniqueWithoutScholarshipInput | EligibilityCriteriaUpdateWithWhereUniqueWithoutScholarshipInput[]
    updateMany?: EligibilityCriteriaUpdateManyWithWhereWithoutScholarshipInput | EligibilityCriteriaUpdateManyWithWhereWithoutScholarshipInput[]
    deleteMany?: EligibilityCriteriaScalarWhereInput | EligibilityCriteriaScalarWhereInput[]
  }

  export type ApplicationUpdateManyWithoutScholarshipNestedInput = {
    create?: XOR<ApplicationCreateWithoutScholarshipInput, ApplicationUncheckedCreateWithoutScholarshipInput> | ApplicationCreateWithoutScholarshipInput[] | ApplicationUncheckedCreateWithoutScholarshipInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutScholarshipInput | ApplicationCreateOrConnectWithoutScholarshipInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutScholarshipInput | ApplicationUpsertWithWhereUniqueWithoutScholarshipInput[]
    createMany?: ApplicationCreateManyScholarshipInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutScholarshipInput | ApplicationUpdateWithWhereUniqueWithoutScholarshipInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutScholarshipInput | ApplicationUpdateManyWithWhereWithoutScholarshipInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type EligibilityCriteriaUncheckedUpdateManyWithoutScholarshipNestedInput = {
    create?: XOR<EligibilityCriteriaCreateWithoutScholarshipInput, EligibilityCriteriaUncheckedCreateWithoutScholarshipInput> | EligibilityCriteriaCreateWithoutScholarshipInput[] | EligibilityCriteriaUncheckedCreateWithoutScholarshipInput[]
    connectOrCreate?: EligibilityCriteriaCreateOrConnectWithoutScholarshipInput | EligibilityCriteriaCreateOrConnectWithoutScholarshipInput[]
    upsert?: EligibilityCriteriaUpsertWithWhereUniqueWithoutScholarshipInput | EligibilityCriteriaUpsertWithWhereUniqueWithoutScholarshipInput[]
    createMany?: EligibilityCriteriaCreateManyScholarshipInputEnvelope
    set?: EligibilityCriteriaWhereUniqueInput | EligibilityCriteriaWhereUniqueInput[]
    disconnect?: EligibilityCriteriaWhereUniqueInput | EligibilityCriteriaWhereUniqueInput[]
    delete?: EligibilityCriteriaWhereUniqueInput | EligibilityCriteriaWhereUniqueInput[]
    connect?: EligibilityCriteriaWhereUniqueInput | EligibilityCriteriaWhereUniqueInput[]
    update?: EligibilityCriteriaUpdateWithWhereUniqueWithoutScholarshipInput | EligibilityCriteriaUpdateWithWhereUniqueWithoutScholarshipInput[]
    updateMany?: EligibilityCriteriaUpdateManyWithWhereWithoutScholarshipInput | EligibilityCriteriaUpdateManyWithWhereWithoutScholarshipInput[]
    deleteMany?: EligibilityCriteriaScalarWhereInput | EligibilityCriteriaScalarWhereInput[]
  }

  export type ApplicationUncheckedUpdateManyWithoutScholarshipNestedInput = {
    create?: XOR<ApplicationCreateWithoutScholarshipInput, ApplicationUncheckedCreateWithoutScholarshipInput> | ApplicationCreateWithoutScholarshipInput[] | ApplicationUncheckedCreateWithoutScholarshipInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutScholarshipInput | ApplicationCreateOrConnectWithoutScholarshipInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutScholarshipInput | ApplicationUpsertWithWhereUniqueWithoutScholarshipInput[]
    createMany?: ApplicationCreateManyScholarshipInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutScholarshipInput | ApplicationUpdateWithWhereUniqueWithoutScholarshipInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutScholarshipInput | ApplicationUpdateManyWithWhereWithoutScholarshipInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type ScholarshipCreateNestedOneWithoutCriteriaInput = {
    create?: XOR<ScholarshipCreateWithoutCriteriaInput, ScholarshipUncheckedCreateWithoutCriteriaInput>
    connectOrCreate?: ScholarshipCreateOrConnectWithoutCriteriaInput
    connect?: ScholarshipWhereUniqueInput
  }

  export type ScholarshipUpdateOneRequiredWithoutCriteriaNestedInput = {
    create?: XOR<ScholarshipCreateWithoutCriteriaInput, ScholarshipUncheckedCreateWithoutCriteriaInput>
    connectOrCreate?: ScholarshipCreateOrConnectWithoutCriteriaInput
    upsert?: ScholarshipUpsertWithoutCriteriaInput
    connect?: ScholarshipWhereUniqueInput
    update?: XOR<XOR<ScholarshipUpdateToOneWithWhereWithoutCriteriaInput, ScholarshipUpdateWithoutCriteriaInput>, ScholarshipUncheckedUpdateWithoutCriteriaInput>
  }

  export type StudentCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<StudentCreateWithoutApplicationsInput, StudentUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutApplicationsInput
    connect?: StudentWhereUniqueInput
  }

  export type ScholarshipCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<ScholarshipCreateWithoutApplicationsInput, ScholarshipUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: ScholarshipCreateOrConnectWithoutApplicationsInput
    connect?: ScholarshipWhereUniqueInput
  }

  export type DocumentCreateNestedManyWithoutApplicationInput = {
    create?: XOR<DocumentCreateWithoutApplicationInput, DocumentUncheckedCreateWithoutApplicationInput> | DocumentCreateWithoutApplicationInput[] | DocumentUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutApplicationInput | DocumentCreateOrConnectWithoutApplicationInput[]
    createMany?: DocumentCreateManyApplicationInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type CommitteeReviewCreateNestedManyWithoutApplicationInput = {
    create?: XOR<CommitteeReviewCreateWithoutApplicationInput, CommitteeReviewUncheckedCreateWithoutApplicationInput> | CommitteeReviewCreateWithoutApplicationInput[] | CommitteeReviewUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: CommitteeReviewCreateOrConnectWithoutApplicationInput | CommitteeReviewCreateOrConnectWithoutApplicationInput[]
    createMany?: CommitteeReviewCreateManyApplicationInputEnvelope
    connect?: CommitteeReviewWhereUniqueInput | CommitteeReviewWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutApplicationInput = {
    create?: XOR<PaymentCreateWithoutApplicationInput, PaymentUncheckedCreateWithoutApplicationInput> | PaymentCreateWithoutApplicationInput[] | PaymentUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutApplicationInput | PaymentCreateOrConnectWithoutApplicationInput[]
    createMany?: PaymentCreateManyApplicationInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type DocumentUncheckedCreateNestedManyWithoutApplicationInput = {
    create?: XOR<DocumentCreateWithoutApplicationInput, DocumentUncheckedCreateWithoutApplicationInput> | DocumentCreateWithoutApplicationInput[] | DocumentUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutApplicationInput | DocumentCreateOrConnectWithoutApplicationInput[]
    createMany?: DocumentCreateManyApplicationInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type CommitteeReviewUncheckedCreateNestedManyWithoutApplicationInput = {
    create?: XOR<CommitteeReviewCreateWithoutApplicationInput, CommitteeReviewUncheckedCreateWithoutApplicationInput> | CommitteeReviewCreateWithoutApplicationInput[] | CommitteeReviewUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: CommitteeReviewCreateOrConnectWithoutApplicationInput | CommitteeReviewCreateOrConnectWithoutApplicationInput[]
    createMany?: CommitteeReviewCreateManyApplicationInputEnvelope
    connect?: CommitteeReviewWhereUniqueInput | CommitteeReviewWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutApplicationInput = {
    create?: XOR<PaymentCreateWithoutApplicationInput, PaymentUncheckedCreateWithoutApplicationInput> | PaymentCreateWithoutApplicationInput[] | PaymentUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutApplicationInput | PaymentCreateOrConnectWithoutApplicationInput[]
    createMany?: PaymentCreateManyApplicationInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type EnumApplicationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ApplicationStatus
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

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type StudentUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<StudentCreateWithoutApplicationsInput, StudentUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutApplicationsInput
    upsert?: StudentUpsertWithoutApplicationsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutApplicationsInput, StudentUpdateWithoutApplicationsInput>, StudentUncheckedUpdateWithoutApplicationsInput>
  }

  export type ScholarshipUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<ScholarshipCreateWithoutApplicationsInput, ScholarshipUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: ScholarshipCreateOrConnectWithoutApplicationsInput
    upsert?: ScholarshipUpsertWithoutApplicationsInput
    connect?: ScholarshipWhereUniqueInput
    update?: XOR<XOR<ScholarshipUpdateToOneWithWhereWithoutApplicationsInput, ScholarshipUpdateWithoutApplicationsInput>, ScholarshipUncheckedUpdateWithoutApplicationsInput>
  }

  export type DocumentUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<DocumentCreateWithoutApplicationInput, DocumentUncheckedCreateWithoutApplicationInput> | DocumentCreateWithoutApplicationInput[] | DocumentUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutApplicationInput | DocumentCreateOrConnectWithoutApplicationInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutApplicationInput | DocumentUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: DocumentCreateManyApplicationInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutApplicationInput | DocumentUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutApplicationInput | DocumentUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type CommitteeReviewUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<CommitteeReviewCreateWithoutApplicationInput, CommitteeReviewUncheckedCreateWithoutApplicationInput> | CommitteeReviewCreateWithoutApplicationInput[] | CommitteeReviewUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: CommitteeReviewCreateOrConnectWithoutApplicationInput | CommitteeReviewCreateOrConnectWithoutApplicationInput[]
    upsert?: CommitteeReviewUpsertWithWhereUniqueWithoutApplicationInput | CommitteeReviewUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: CommitteeReviewCreateManyApplicationInputEnvelope
    set?: CommitteeReviewWhereUniqueInput | CommitteeReviewWhereUniqueInput[]
    disconnect?: CommitteeReviewWhereUniqueInput | CommitteeReviewWhereUniqueInput[]
    delete?: CommitteeReviewWhereUniqueInput | CommitteeReviewWhereUniqueInput[]
    connect?: CommitteeReviewWhereUniqueInput | CommitteeReviewWhereUniqueInput[]
    update?: CommitteeReviewUpdateWithWhereUniqueWithoutApplicationInput | CommitteeReviewUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: CommitteeReviewUpdateManyWithWhereWithoutApplicationInput | CommitteeReviewUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: CommitteeReviewScalarWhereInput | CommitteeReviewScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<PaymentCreateWithoutApplicationInput, PaymentUncheckedCreateWithoutApplicationInput> | PaymentCreateWithoutApplicationInput[] | PaymentUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutApplicationInput | PaymentCreateOrConnectWithoutApplicationInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutApplicationInput | PaymentUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: PaymentCreateManyApplicationInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutApplicationInput | PaymentUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutApplicationInput | PaymentUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type DocumentUncheckedUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<DocumentCreateWithoutApplicationInput, DocumentUncheckedCreateWithoutApplicationInput> | DocumentCreateWithoutApplicationInput[] | DocumentUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutApplicationInput | DocumentCreateOrConnectWithoutApplicationInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutApplicationInput | DocumentUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: DocumentCreateManyApplicationInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutApplicationInput | DocumentUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutApplicationInput | DocumentUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type CommitteeReviewUncheckedUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<CommitteeReviewCreateWithoutApplicationInput, CommitteeReviewUncheckedCreateWithoutApplicationInput> | CommitteeReviewCreateWithoutApplicationInput[] | CommitteeReviewUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: CommitteeReviewCreateOrConnectWithoutApplicationInput | CommitteeReviewCreateOrConnectWithoutApplicationInput[]
    upsert?: CommitteeReviewUpsertWithWhereUniqueWithoutApplicationInput | CommitteeReviewUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: CommitteeReviewCreateManyApplicationInputEnvelope
    set?: CommitteeReviewWhereUniqueInput | CommitteeReviewWhereUniqueInput[]
    disconnect?: CommitteeReviewWhereUniqueInput | CommitteeReviewWhereUniqueInput[]
    delete?: CommitteeReviewWhereUniqueInput | CommitteeReviewWhereUniqueInput[]
    connect?: CommitteeReviewWhereUniqueInput | CommitteeReviewWhereUniqueInput[]
    update?: CommitteeReviewUpdateWithWhereUniqueWithoutApplicationInput | CommitteeReviewUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: CommitteeReviewUpdateManyWithWhereWithoutApplicationInput | CommitteeReviewUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: CommitteeReviewScalarWhereInput | CommitteeReviewScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<PaymentCreateWithoutApplicationInput, PaymentUncheckedCreateWithoutApplicationInput> | PaymentCreateWithoutApplicationInput[] | PaymentUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutApplicationInput | PaymentCreateOrConnectWithoutApplicationInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutApplicationInput | PaymentUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: PaymentCreateManyApplicationInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutApplicationInput | PaymentUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutApplicationInput | PaymentUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type ApplicationCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<ApplicationCreateWithoutDocumentsInput, ApplicationUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutDocumentsInput
    connect?: ApplicationWhereUniqueInput
  }

  export type EnumVerificationStatusFieldUpdateOperationsInput = {
    set?: $Enums.VerificationStatus
  }

  export type ApplicationUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<ApplicationCreateWithoutDocumentsInput, ApplicationUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutDocumentsInput
    upsert?: ApplicationUpsertWithoutDocumentsInput
    connect?: ApplicationWhereUniqueInput
    update?: XOR<XOR<ApplicationUpdateToOneWithWhereWithoutDocumentsInput, ApplicationUpdateWithoutDocumentsInput>, ApplicationUncheckedUpdateWithoutDocumentsInput>
  }

  export type StudentCreateNestedOneWithoutFamilyMembersInput = {
    create?: XOR<StudentCreateWithoutFamilyMembersInput, StudentUncheckedCreateWithoutFamilyMembersInput>
    connectOrCreate?: StudentCreateOrConnectWithoutFamilyMembersInput
    connect?: StudentWhereUniqueInput
  }

  export type SiblingEducationCreateNestedManyWithoutMemberInput = {
    create?: XOR<SiblingEducationCreateWithoutMemberInput, SiblingEducationUncheckedCreateWithoutMemberInput> | SiblingEducationCreateWithoutMemberInput[] | SiblingEducationUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: SiblingEducationCreateOrConnectWithoutMemberInput | SiblingEducationCreateOrConnectWithoutMemberInput[]
    createMany?: SiblingEducationCreateManyMemberInputEnvelope
    connect?: SiblingEducationWhereUniqueInput | SiblingEducationWhereUniqueInput[]
  }

  export type SiblingEducationUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<SiblingEducationCreateWithoutMemberInput, SiblingEducationUncheckedCreateWithoutMemberInput> | SiblingEducationCreateWithoutMemberInput[] | SiblingEducationUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: SiblingEducationCreateOrConnectWithoutMemberInput | SiblingEducationCreateOrConnectWithoutMemberInput[]
    createMany?: SiblingEducationCreateManyMemberInputEnvelope
    connect?: SiblingEducationWhereUniqueInput | SiblingEducationWhereUniqueInput[]
  }

  export type StudentUpdateOneRequiredWithoutFamilyMembersNestedInput = {
    create?: XOR<StudentCreateWithoutFamilyMembersInput, StudentUncheckedCreateWithoutFamilyMembersInput>
    connectOrCreate?: StudentCreateOrConnectWithoutFamilyMembersInput
    upsert?: StudentUpsertWithoutFamilyMembersInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutFamilyMembersInput, StudentUpdateWithoutFamilyMembersInput>, StudentUncheckedUpdateWithoutFamilyMembersInput>
  }

  export type SiblingEducationUpdateManyWithoutMemberNestedInput = {
    create?: XOR<SiblingEducationCreateWithoutMemberInput, SiblingEducationUncheckedCreateWithoutMemberInput> | SiblingEducationCreateWithoutMemberInput[] | SiblingEducationUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: SiblingEducationCreateOrConnectWithoutMemberInput | SiblingEducationCreateOrConnectWithoutMemberInput[]
    upsert?: SiblingEducationUpsertWithWhereUniqueWithoutMemberInput | SiblingEducationUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: SiblingEducationCreateManyMemberInputEnvelope
    set?: SiblingEducationWhereUniqueInput | SiblingEducationWhereUniqueInput[]
    disconnect?: SiblingEducationWhereUniqueInput | SiblingEducationWhereUniqueInput[]
    delete?: SiblingEducationWhereUniqueInput | SiblingEducationWhereUniqueInput[]
    connect?: SiblingEducationWhereUniqueInput | SiblingEducationWhereUniqueInput[]
    update?: SiblingEducationUpdateWithWhereUniqueWithoutMemberInput | SiblingEducationUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: SiblingEducationUpdateManyWithWhereWithoutMemberInput | SiblingEducationUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: SiblingEducationScalarWhereInput | SiblingEducationScalarWhereInput[]
  }

  export type SiblingEducationUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<SiblingEducationCreateWithoutMemberInput, SiblingEducationUncheckedCreateWithoutMemberInput> | SiblingEducationCreateWithoutMemberInput[] | SiblingEducationUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: SiblingEducationCreateOrConnectWithoutMemberInput | SiblingEducationCreateOrConnectWithoutMemberInput[]
    upsert?: SiblingEducationUpsertWithWhereUniqueWithoutMemberInput | SiblingEducationUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: SiblingEducationCreateManyMemberInputEnvelope
    set?: SiblingEducationWhereUniqueInput | SiblingEducationWhereUniqueInput[]
    disconnect?: SiblingEducationWhereUniqueInput | SiblingEducationWhereUniqueInput[]
    delete?: SiblingEducationWhereUniqueInput | SiblingEducationWhereUniqueInput[]
    connect?: SiblingEducationWhereUniqueInput | SiblingEducationWhereUniqueInput[]
    update?: SiblingEducationUpdateWithWhereUniqueWithoutMemberInput | SiblingEducationUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: SiblingEducationUpdateManyWithWhereWithoutMemberInput | SiblingEducationUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: SiblingEducationScalarWhereInput | SiblingEducationScalarWhereInput[]
  }

  export type StudentCreateNestedOneWithoutOtherFundingInput = {
    create?: XOR<StudentCreateWithoutOtherFundingInput, StudentUncheckedCreateWithoutOtherFundingInput>
    connectOrCreate?: StudentCreateOrConnectWithoutOtherFundingInput
    connect?: StudentWhereUniqueInput
  }

  export type StudentUpdateOneRequiredWithoutOtherFundingNestedInput = {
    create?: XOR<StudentCreateWithoutOtherFundingInput, StudentUncheckedCreateWithoutOtherFundingInput>
    connectOrCreate?: StudentCreateOrConnectWithoutOtherFundingInput
    upsert?: StudentUpsertWithoutOtherFundingInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutOtherFundingInput, StudentUpdateWithoutOtherFundingInput>, StudentUncheckedUpdateWithoutOtherFundingInput>
  }

  export type ApplicationCreateNestedOneWithoutReviewsInput = {
    create?: XOR<ApplicationCreateWithoutReviewsInput, ApplicationUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutReviewsInput
    connect?: ApplicationWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumReviewStatusFieldUpdateOperationsInput = {
    set?: $Enums.ReviewStatus
  }

  export type ApplicationUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<ApplicationCreateWithoutReviewsInput, ApplicationUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutReviewsInput
    upsert?: ApplicationUpsertWithoutReviewsInput
    connect?: ApplicationWhereUniqueInput
    update?: XOR<XOR<ApplicationUpdateToOneWithWhereWithoutReviewsInput, ApplicationUpdateWithoutReviewsInput>, ApplicationUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsInput, UserUpdateWithoutReviewsInput>, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type ApplicationCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<ApplicationCreateWithoutPaymentsInput, ApplicationUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutPaymentsInput
    connect?: ApplicationWhereUniqueInput
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type ApplicationUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<ApplicationCreateWithoutPaymentsInput, ApplicationUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutPaymentsInput
    upsert?: ApplicationUpsertWithoutPaymentsInput
    connect?: ApplicationWhereUniqueInput
    update?: XOR<XOR<ApplicationUpdateToOneWithWhereWithoutPaymentsInput, ApplicationUpdateWithoutPaymentsInput>, ApplicationUncheckedUpdateWithoutPaymentsInput>
  }

  export type StudentCreateNestedOneWithoutSiblingEducationInput = {
    create?: XOR<StudentCreateWithoutSiblingEducationInput, StudentUncheckedCreateWithoutSiblingEducationInput>
    connectOrCreate?: StudentCreateOrConnectWithoutSiblingEducationInput
    connect?: StudentWhereUniqueInput
  }

  export type FamilyMemberCreateNestedOneWithoutSiblingEducationInput = {
    create?: XOR<FamilyMemberCreateWithoutSiblingEducationInput, FamilyMemberUncheckedCreateWithoutSiblingEducationInput>
    connectOrCreate?: FamilyMemberCreateOrConnectWithoutSiblingEducationInput
    connect?: FamilyMemberWhereUniqueInput
  }

  export type StudentUpdateOneRequiredWithoutSiblingEducationNestedInput = {
    create?: XOR<StudentCreateWithoutSiblingEducationInput, StudentUncheckedCreateWithoutSiblingEducationInput>
    connectOrCreate?: StudentCreateOrConnectWithoutSiblingEducationInput
    upsert?: StudentUpsertWithoutSiblingEducationInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutSiblingEducationInput, StudentUpdateWithoutSiblingEducationInput>, StudentUncheckedUpdateWithoutSiblingEducationInput>
  }

  export type FamilyMemberUpdateOneRequiredWithoutSiblingEducationNestedInput = {
    create?: XOR<FamilyMemberCreateWithoutSiblingEducationInput, FamilyMemberUncheckedCreateWithoutSiblingEducationInput>
    connectOrCreate?: FamilyMemberCreateOrConnectWithoutSiblingEducationInput
    upsert?: FamilyMemberUpsertWithoutSiblingEducationInput
    connect?: FamilyMemberWhereUniqueInput
    update?: XOR<XOR<FamilyMemberUpdateToOneWithWhereWithoutSiblingEducationInput, FamilyMemberUpdateWithoutSiblingEducationInput>, FamilyMemberUncheckedUpdateWithoutSiblingEducationInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[]
    notIn?: $Enums.Gender[]
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[]
    notIn?: $Enums.Gender[]
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumApplicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[]
    notIn?: $Enums.ApplicationStatus[]
    not?: NestedEnumApplicationStatusFilter<$PrismaModel> | $Enums.ApplicationStatus
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

  export type NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[]
    notIn?: $Enums.ApplicationStatus[]
    not?: NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApplicationStatusFilter<$PrismaModel>
    _max?: NestedEnumApplicationStatusFilter<$PrismaModel>
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

  export type NestedEnumVerificationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationStatus | EnumVerificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationStatus[]
    notIn?: $Enums.VerificationStatus[]
    not?: NestedEnumVerificationStatusFilter<$PrismaModel> | $Enums.VerificationStatus
  }

  export type NestedEnumVerificationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationStatus | EnumVerificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationStatus[]
    notIn?: $Enums.VerificationStatus[]
    not?: NestedEnumVerificationStatusWithAggregatesFilter<$PrismaModel> | $Enums.VerificationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVerificationStatusFilter<$PrismaModel>
    _max?: NestedEnumVerificationStatusFilter<$PrismaModel>
  }

  export type NestedEnumReviewStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewStatus | EnumReviewStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewStatus[]
    notIn?: $Enums.ReviewStatus[]
    not?: NestedEnumReviewStatusFilter<$PrismaModel> | $Enums.ReviewStatus
  }

  export type NestedEnumReviewStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewStatus | EnumReviewStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewStatus[]
    notIn?: $Enums.ReviewStatus[]
    not?: NestedEnumReviewStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReviewStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReviewStatusFilter<$PrismaModel>
    _max?: NestedEnumReviewStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type StudentCreateWithoutUserInput = {
    full_name: string
    registration_no: string
    date_of_birth: Date | string
    permanent_address: string
    admission_date: Date | string
    year_of_study: number
    gender: $Enums.Gender
    phone_number: string
    email: string
    school_name: string
    unmarried_siblings: number
    applications?: ApplicationCreateNestedManyWithoutStudentInput
    familyMembers?: FamilyMemberCreateNestedManyWithoutStudentInput
    otherFunding?: OtherFundingCreateNestedManyWithoutStudentInput
    siblingEducation?: SiblingEducationCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutUserInput = {
    student_id?: number
    full_name: string
    registration_no: string
    date_of_birth: Date | string
    permanent_address: string
    admission_date: Date | string
    year_of_study: number
    gender: $Enums.Gender
    phone_number: string
    email: string
    school_name: string
    unmarried_siblings: number
    applications?: ApplicationUncheckedCreateNestedManyWithoutStudentInput
    familyMembers?: FamilyMemberUncheckedCreateNestedManyWithoutStudentInput
    otherFunding?: OtherFundingUncheckedCreateNestedManyWithoutStudentInput
    siblingEducation?: SiblingEducationUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutUserInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
  }

  export type CommitteeReviewCreateWithoutReviewerInput = {
    review_date: Date | string
    points_awarded: number
    comments: string
    status?: $Enums.ReviewStatus
    is_read?: boolean
    application: ApplicationCreateNestedOneWithoutReviewsInput
  }

  export type CommitteeReviewUncheckedCreateWithoutReviewerInput = {
    review_id?: number
    application_id: number
    review_date: Date | string
    points_awarded: number
    comments: string
    status?: $Enums.ReviewStatus
    is_read?: boolean
  }

  export type CommitteeReviewCreateOrConnectWithoutReviewerInput = {
    where: CommitteeReviewWhereUniqueInput
    create: XOR<CommitteeReviewCreateWithoutReviewerInput, CommitteeReviewUncheckedCreateWithoutReviewerInput>
  }

  export type CommitteeReviewCreateManyReviewerInputEnvelope = {
    data: CommitteeReviewCreateManyReviewerInput | CommitteeReviewCreateManyReviewerInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    message: string
    created_at?: Date | string
    is_read?: boolean
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    notification_id?: number
    message: string
    created_at?: Date | string
    is_read?: boolean
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StudentUpsertWithoutUserInput = {
    update: XOR<StudentUpdateWithoutUserInput, StudentUncheckedUpdateWithoutUserInput>
    create: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutUserInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutUserInput, StudentUncheckedUpdateWithoutUserInput>
  }

  export type StudentUpdateWithoutUserInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    registration_no?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    permanent_address?: StringFieldUpdateOperationsInput | string
    admission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    year_of_study?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    school_name?: StringFieldUpdateOperationsInput | string
    unmarried_siblings?: IntFieldUpdateOperationsInput | number
    applications?: ApplicationUpdateManyWithoutStudentNestedInput
    familyMembers?: FamilyMemberUpdateManyWithoutStudentNestedInput
    otherFunding?: OtherFundingUpdateManyWithoutStudentNestedInput
    siblingEducation?: SiblingEducationUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutUserInput = {
    student_id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    registration_no?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    permanent_address?: StringFieldUpdateOperationsInput | string
    admission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    year_of_study?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    school_name?: StringFieldUpdateOperationsInput | string
    unmarried_siblings?: IntFieldUpdateOperationsInput | number
    applications?: ApplicationUncheckedUpdateManyWithoutStudentNestedInput
    familyMembers?: FamilyMemberUncheckedUpdateManyWithoutStudentNestedInput
    otherFunding?: OtherFundingUncheckedUpdateManyWithoutStudentNestedInput
    siblingEducation?: SiblingEducationUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type CommitteeReviewUpsertWithWhereUniqueWithoutReviewerInput = {
    where: CommitteeReviewWhereUniqueInput
    update: XOR<CommitteeReviewUpdateWithoutReviewerInput, CommitteeReviewUncheckedUpdateWithoutReviewerInput>
    create: XOR<CommitteeReviewCreateWithoutReviewerInput, CommitteeReviewUncheckedCreateWithoutReviewerInput>
  }

  export type CommitteeReviewUpdateWithWhereUniqueWithoutReviewerInput = {
    where: CommitteeReviewWhereUniqueInput
    data: XOR<CommitteeReviewUpdateWithoutReviewerInput, CommitteeReviewUncheckedUpdateWithoutReviewerInput>
  }

  export type CommitteeReviewUpdateManyWithWhereWithoutReviewerInput = {
    where: CommitteeReviewScalarWhereInput
    data: XOR<CommitteeReviewUpdateManyMutationInput, CommitteeReviewUncheckedUpdateManyWithoutReviewerInput>
  }

  export type CommitteeReviewScalarWhereInput = {
    AND?: CommitteeReviewScalarWhereInput | CommitteeReviewScalarWhereInput[]
    OR?: CommitteeReviewScalarWhereInput[]
    NOT?: CommitteeReviewScalarWhereInput | CommitteeReviewScalarWhereInput[]
    review_id?: IntFilter<"CommitteeReview"> | number
    application_id?: IntFilter<"CommitteeReview"> | number
    reviewer_id?: IntFilter<"CommitteeReview"> | number
    review_date?: DateTimeFilter<"CommitteeReview"> | Date | string
    points_awarded?: IntFilter<"CommitteeReview"> | number
    comments?: StringFilter<"CommitteeReview"> | string
    status?: EnumReviewStatusFilter<"CommitteeReview"> | $Enums.ReviewStatus
    is_read?: BoolFilter<"CommitteeReview"> | boolean
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    notification_id?: IntFilter<"Notification"> | number
    user_id?: IntFilter<"Notification"> | number
    message?: StringFilter<"Notification"> | string
    created_at?: DateTimeFilter<"Notification"> | Date | string
    is_read?: BoolFilter<"Notification"> | boolean
  }

  export type UserCreateWithoutStudentInput = {
    first_name: string
    last_name: string
    email: string
    username: string
    password: string
    role?: $Enums.Role
    created_at?: Date | string
    reviews?: CommitteeReviewCreateNestedManyWithoutReviewerInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStudentInput = {
    user_id?: number
    first_name: string
    last_name: string
    email: string
    username: string
    password: string
    role?: $Enums.Role
    created_at?: Date | string
    reviews?: CommitteeReviewUncheckedCreateNestedManyWithoutReviewerInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStudentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
  }

  export type ApplicationCreateWithoutStudentInput = {
    submission_date: Date | string
    status?: $Enums.ApplicationStatus
    total_points?: number | null
    reviewer_comments?: string | null
    review_date?: Date | string | null
    scholarship: ScholarshipCreateNestedOneWithoutApplicationsInput
    documents?: DocumentCreateNestedManyWithoutApplicationInput
    reviews?: CommitteeReviewCreateNestedManyWithoutApplicationInput
    payments?: PaymentCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateWithoutStudentInput = {
    application_id?: number
    scholarship_id: number
    submission_date: Date | string
    status?: $Enums.ApplicationStatus
    total_points?: number | null
    reviewer_comments?: string | null
    review_date?: Date | string | null
    documents?: DocumentUncheckedCreateNestedManyWithoutApplicationInput
    reviews?: CommitteeReviewUncheckedCreateNestedManyWithoutApplicationInput
    payments?: PaymentUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationCreateOrConnectWithoutStudentInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutStudentInput, ApplicationUncheckedCreateWithoutStudentInput>
  }

  export type ApplicationCreateManyStudentInputEnvelope = {
    data: ApplicationCreateManyStudentInput | ApplicationCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type FamilyMemberCreateWithoutStudentInput = {
    full_name: string
    age: number
    relationship: string
    designation: string
    annual_income: Decimal | DecimalJsLike | number | string
    workplace: string
    phone_number: string
    siblingEducation?: SiblingEducationCreateNestedManyWithoutMemberInput
  }

  export type FamilyMemberUncheckedCreateWithoutStudentInput = {
    member_id?: number
    full_name: string
    age: number
    relationship: string
    designation: string
    annual_income: Decimal | DecimalJsLike | number | string
    workplace: string
    phone_number: string
    siblingEducation?: SiblingEducationUncheckedCreateNestedManyWithoutMemberInput
  }

  export type FamilyMemberCreateOrConnectWithoutStudentInput = {
    where: FamilyMemberWhereUniqueInput
    create: XOR<FamilyMemberCreateWithoutStudentInput, FamilyMemberUncheckedCreateWithoutStudentInput>
  }

  export type FamilyMemberCreateManyStudentInputEnvelope = {
    data: FamilyMemberCreateManyStudentInput | FamilyMemberCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type OtherFundingCreateWithoutStudentInput = {
    funding_name: string
    organization: string
    annual_amount: Decimal | DecimalJsLike | number | string
    start_date: Date | string
    end_date: Date | string
  }

  export type OtherFundingUncheckedCreateWithoutStudentInput = {
    funding_id?: number
    funding_name: string
    organization: string
    annual_amount: Decimal | DecimalJsLike | number | string
    start_date: Date | string
    end_date: Date | string
  }

  export type OtherFundingCreateOrConnectWithoutStudentInput = {
    where: OtherFundingWhereUniqueInput
    create: XOR<OtherFundingCreateWithoutStudentInput, OtherFundingUncheckedCreateWithoutStudentInput>
  }

  export type OtherFundingCreateManyStudentInputEnvelope = {
    data: OtherFundingCreateManyStudentInput | OtherFundingCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type SiblingEducationCreateWithoutStudentInput = {
    institution: string
    year_grade: string
    registration_course: string
    member: FamilyMemberCreateNestedOneWithoutSiblingEducationInput
  }

  export type SiblingEducationUncheckedCreateWithoutStudentInput = {
    education_id?: number
    member_id: number
    institution: string
    year_grade: string
    registration_course: string
  }

  export type SiblingEducationCreateOrConnectWithoutStudentInput = {
    where: SiblingEducationWhereUniqueInput
    create: XOR<SiblingEducationCreateWithoutStudentInput, SiblingEducationUncheckedCreateWithoutStudentInput>
  }

  export type SiblingEducationCreateManyStudentInputEnvelope = {
    data: SiblingEducationCreateManyStudentInput | SiblingEducationCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutStudentInput = {
    update: XOR<UserUpdateWithoutStudentInput, UserUncheckedUpdateWithoutStudentInput>
    create: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStudentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStudentInput, UserUncheckedUpdateWithoutStudentInput>
  }

  export type UserUpdateWithoutStudentInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: CommitteeReviewUpdateManyWithoutReviewerNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStudentInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: CommitteeReviewUncheckedUpdateManyWithoutReviewerNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ApplicationUpsertWithWhereUniqueWithoutStudentInput = {
    where: ApplicationWhereUniqueInput
    update: XOR<ApplicationUpdateWithoutStudentInput, ApplicationUncheckedUpdateWithoutStudentInput>
    create: XOR<ApplicationCreateWithoutStudentInput, ApplicationUncheckedCreateWithoutStudentInput>
  }

  export type ApplicationUpdateWithWhereUniqueWithoutStudentInput = {
    where: ApplicationWhereUniqueInput
    data: XOR<ApplicationUpdateWithoutStudentInput, ApplicationUncheckedUpdateWithoutStudentInput>
  }

  export type ApplicationUpdateManyWithWhereWithoutStudentInput = {
    where: ApplicationScalarWhereInput
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyWithoutStudentInput>
  }

  export type ApplicationScalarWhereInput = {
    AND?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
    OR?: ApplicationScalarWhereInput[]
    NOT?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
    application_id?: IntFilter<"Application"> | number
    student_id?: IntFilter<"Application"> | number
    scholarship_id?: IntFilter<"Application"> | number
    submission_date?: DateTimeFilter<"Application"> | Date | string
    status?: EnumApplicationStatusFilter<"Application"> | $Enums.ApplicationStatus
    total_points?: IntNullableFilter<"Application"> | number | null
    reviewer_comments?: StringNullableFilter<"Application"> | string | null
    review_date?: DateTimeNullableFilter<"Application"> | Date | string | null
  }

  export type FamilyMemberUpsertWithWhereUniqueWithoutStudentInput = {
    where: FamilyMemberWhereUniqueInput
    update: XOR<FamilyMemberUpdateWithoutStudentInput, FamilyMemberUncheckedUpdateWithoutStudentInput>
    create: XOR<FamilyMemberCreateWithoutStudentInput, FamilyMemberUncheckedCreateWithoutStudentInput>
  }

  export type FamilyMemberUpdateWithWhereUniqueWithoutStudentInput = {
    where: FamilyMemberWhereUniqueInput
    data: XOR<FamilyMemberUpdateWithoutStudentInput, FamilyMemberUncheckedUpdateWithoutStudentInput>
  }

  export type FamilyMemberUpdateManyWithWhereWithoutStudentInput = {
    where: FamilyMemberScalarWhereInput
    data: XOR<FamilyMemberUpdateManyMutationInput, FamilyMemberUncheckedUpdateManyWithoutStudentInput>
  }

  export type FamilyMemberScalarWhereInput = {
    AND?: FamilyMemberScalarWhereInput | FamilyMemberScalarWhereInput[]
    OR?: FamilyMemberScalarWhereInput[]
    NOT?: FamilyMemberScalarWhereInput | FamilyMemberScalarWhereInput[]
    member_id?: IntFilter<"FamilyMember"> | number
    student_id?: IntFilter<"FamilyMember"> | number
    full_name?: StringFilter<"FamilyMember"> | string
    age?: IntFilter<"FamilyMember"> | number
    relationship?: StringFilter<"FamilyMember"> | string
    designation?: StringFilter<"FamilyMember"> | string
    annual_income?: DecimalFilter<"FamilyMember"> | Decimal | DecimalJsLike | number | string
    workplace?: StringFilter<"FamilyMember"> | string
    phone_number?: StringFilter<"FamilyMember"> | string
  }

  export type OtherFundingUpsertWithWhereUniqueWithoutStudentInput = {
    where: OtherFundingWhereUniqueInput
    update: XOR<OtherFundingUpdateWithoutStudentInput, OtherFundingUncheckedUpdateWithoutStudentInput>
    create: XOR<OtherFundingCreateWithoutStudentInput, OtherFundingUncheckedCreateWithoutStudentInput>
  }

  export type OtherFundingUpdateWithWhereUniqueWithoutStudentInput = {
    where: OtherFundingWhereUniqueInput
    data: XOR<OtherFundingUpdateWithoutStudentInput, OtherFundingUncheckedUpdateWithoutStudentInput>
  }

  export type OtherFundingUpdateManyWithWhereWithoutStudentInput = {
    where: OtherFundingScalarWhereInput
    data: XOR<OtherFundingUpdateManyMutationInput, OtherFundingUncheckedUpdateManyWithoutStudentInput>
  }

  export type OtherFundingScalarWhereInput = {
    AND?: OtherFundingScalarWhereInput | OtherFundingScalarWhereInput[]
    OR?: OtherFundingScalarWhereInput[]
    NOT?: OtherFundingScalarWhereInput | OtherFundingScalarWhereInput[]
    funding_id?: IntFilter<"OtherFunding"> | number
    student_id?: IntFilter<"OtherFunding"> | number
    funding_name?: StringFilter<"OtherFunding"> | string
    organization?: StringFilter<"OtherFunding"> | string
    annual_amount?: DecimalFilter<"OtherFunding"> | Decimal | DecimalJsLike | number | string
    start_date?: DateTimeFilter<"OtherFunding"> | Date | string
    end_date?: DateTimeFilter<"OtherFunding"> | Date | string
  }

  export type SiblingEducationUpsertWithWhereUniqueWithoutStudentInput = {
    where: SiblingEducationWhereUniqueInput
    update: XOR<SiblingEducationUpdateWithoutStudentInput, SiblingEducationUncheckedUpdateWithoutStudentInput>
    create: XOR<SiblingEducationCreateWithoutStudentInput, SiblingEducationUncheckedCreateWithoutStudentInput>
  }

  export type SiblingEducationUpdateWithWhereUniqueWithoutStudentInput = {
    where: SiblingEducationWhereUniqueInput
    data: XOR<SiblingEducationUpdateWithoutStudentInput, SiblingEducationUncheckedUpdateWithoutStudentInput>
  }

  export type SiblingEducationUpdateManyWithWhereWithoutStudentInput = {
    where: SiblingEducationScalarWhereInput
    data: XOR<SiblingEducationUpdateManyMutationInput, SiblingEducationUncheckedUpdateManyWithoutStudentInput>
  }

  export type SiblingEducationScalarWhereInput = {
    AND?: SiblingEducationScalarWhereInput | SiblingEducationScalarWhereInput[]
    OR?: SiblingEducationScalarWhereInput[]
    NOT?: SiblingEducationScalarWhereInput | SiblingEducationScalarWhereInput[]
    education_id?: IntFilter<"SiblingEducation"> | number
    student_id?: IntFilter<"SiblingEducation"> | number
    member_id?: IntFilter<"SiblingEducation"> | number
    institution?: StringFilter<"SiblingEducation"> | string
    year_grade?: StringFilter<"SiblingEducation"> | string
    registration_course?: StringFilter<"SiblingEducation"> | string
  }

  export type ScholarshipCreateWithoutProviderInput = {
    name: string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    no_of_students: number
    application_deadline: Date | string
    start_date: Date | string
    end_date: Date | string
    is_active?: boolean
    criteria?: EligibilityCriteriaCreateNestedManyWithoutScholarshipInput
    applications?: ApplicationCreateNestedManyWithoutScholarshipInput
  }

  export type ScholarshipUncheckedCreateWithoutProviderInput = {
    scholarship_id?: number
    name: string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    no_of_students: number
    application_deadline: Date | string
    start_date: Date | string
    end_date: Date | string
    is_active?: boolean
    criteria?: EligibilityCriteriaUncheckedCreateNestedManyWithoutScholarshipInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutScholarshipInput
  }

  export type ScholarshipCreateOrConnectWithoutProviderInput = {
    where: ScholarshipWhereUniqueInput
    create: XOR<ScholarshipCreateWithoutProviderInput, ScholarshipUncheckedCreateWithoutProviderInput>
  }

  export type ScholarshipCreateManyProviderInputEnvelope = {
    data: ScholarshipCreateManyProviderInput | ScholarshipCreateManyProviderInput[]
    skipDuplicates?: boolean
  }

  export type ScholarshipUpsertWithWhereUniqueWithoutProviderInput = {
    where: ScholarshipWhereUniqueInput
    update: XOR<ScholarshipUpdateWithoutProviderInput, ScholarshipUncheckedUpdateWithoutProviderInput>
    create: XOR<ScholarshipCreateWithoutProviderInput, ScholarshipUncheckedCreateWithoutProviderInput>
  }

  export type ScholarshipUpdateWithWhereUniqueWithoutProviderInput = {
    where: ScholarshipWhereUniqueInput
    data: XOR<ScholarshipUpdateWithoutProviderInput, ScholarshipUncheckedUpdateWithoutProviderInput>
  }

  export type ScholarshipUpdateManyWithWhereWithoutProviderInput = {
    where: ScholarshipScalarWhereInput
    data: XOR<ScholarshipUpdateManyMutationInput, ScholarshipUncheckedUpdateManyWithoutProviderInput>
  }

  export type ScholarshipScalarWhereInput = {
    AND?: ScholarshipScalarWhereInput | ScholarshipScalarWhereInput[]
    OR?: ScholarshipScalarWhereInput[]
    NOT?: ScholarshipScalarWhereInput | ScholarshipScalarWhereInput[]
    scholarship_id?: IntFilter<"Scholarship"> | number
    name?: StringFilter<"Scholarship"> | string
    description?: StringFilter<"Scholarship"> | string
    amount?: DecimalFilter<"Scholarship"> | Decimal | DecimalJsLike | number | string
    no_of_students?: IntFilter<"Scholarship"> | number
    application_deadline?: DateTimeFilter<"Scholarship"> | Date | string
    start_date?: DateTimeFilter<"Scholarship"> | Date | string
    end_date?: DateTimeFilter<"Scholarship"> | Date | string
    provider_id?: IntFilter<"Scholarship"> | number
    is_active?: BoolFilter<"Scholarship"> | boolean
  }

  export type ScholarshipProviderCreateWithoutScholarshipsInput = {
    name: string
    contact_person: string
    phone: string
    email: string
    address: string
  }

  export type ScholarshipProviderUncheckedCreateWithoutScholarshipsInput = {
    provider_id?: number
    name: string
    contact_person: string
    phone: string
    email: string
    address: string
  }

  export type ScholarshipProviderCreateOrConnectWithoutScholarshipsInput = {
    where: ScholarshipProviderWhereUniqueInput
    create: XOR<ScholarshipProviderCreateWithoutScholarshipsInput, ScholarshipProviderUncheckedCreateWithoutScholarshipsInput>
  }

  export type EligibilityCriteriaCreateWithoutScholarshipInput = {
    criteria_name: string
    criteria_description: string
    min_value: Decimal | DecimalJsLike | number | string
    max_value: Decimal | DecimalJsLike | number | string
    weight: number
  }

  export type EligibilityCriteriaUncheckedCreateWithoutScholarshipInput = {
    criteria_id?: number
    criteria_name: string
    criteria_description: string
    min_value: Decimal | DecimalJsLike | number | string
    max_value: Decimal | DecimalJsLike | number | string
    weight: number
  }

  export type EligibilityCriteriaCreateOrConnectWithoutScholarshipInput = {
    where: EligibilityCriteriaWhereUniqueInput
    create: XOR<EligibilityCriteriaCreateWithoutScholarshipInput, EligibilityCriteriaUncheckedCreateWithoutScholarshipInput>
  }

  export type EligibilityCriteriaCreateManyScholarshipInputEnvelope = {
    data: EligibilityCriteriaCreateManyScholarshipInput | EligibilityCriteriaCreateManyScholarshipInput[]
    skipDuplicates?: boolean
  }

  export type ApplicationCreateWithoutScholarshipInput = {
    submission_date: Date | string
    status?: $Enums.ApplicationStatus
    total_points?: number | null
    reviewer_comments?: string | null
    review_date?: Date | string | null
    student: StudentCreateNestedOneWithoutApplicationsInput
    documents?: DocumentCreateNestedManyWithoutApplicationInput
    reviews?: CommitteeReviewCreateNestedManyWithoutApplicationInput
    payments?: PaymentCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateWithoutScholarshipInput = {
    application_id?: number
    student_id: number
    submission_date: Date | string
    status?: $Enums.ApplicationStatus
    total_points?: number | null
    reviewer_comments?: string | null
    review_date?: Date | string | null
    documents?: DocumentUncheckedCreateNestedManyWithoutApplicationInput
    reviews?: CommitteeReviewUncheckedCreateNestedManyWithoutApplicationInput
    payments?: PaymentUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationCreateOrConnectWithoutScholarshipInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutScholarshipInput, ApplicationUncheckedCreateWithoutScholarshipInput>
  }

  export type ApplicationCreateManyScholarshipInputEnvelope = {
    data: ApplicationCreateManyScholarshipInput | ApplicationCreateManyScholarshipInput[]
    skipDuplicates?: boolean
  }

  export type ScholarshipProviderUpsertWithoutScholarshipsInput = {
    update: XOR<ScholarshipProviderUpdateWithoutScholarshipsInput, ScholarshipProviderUncheckedUpdateWithoutScholarshipsInput>
    create: XOR<ScholarshipProviderCreateWithoutScholarshipsInput, ScholarshipProviderUncheckedCreateWithoutScholarshipsInput>
    where?: ScholarshipProviderWhereInput
  }

  export type ScholarshipProviderUpdateToOneWithWhereWithoutScholarshipsInput = {
    where?: ScholarshipProviderWhereInput
    data: XOR<ScholarshipProviderUpdateWithoutScholarshipsInput, ScholarshipProviderUncheckedUpdateWithoutScholarshipsInput>
  }

  export type ScholarshipProviderUpdateWithoutScholarshipsInput = {
    name?: StringFieldUpdateOperationsInput | string
    contact_person?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type ScholarshipProviderUncheckedUpdateWithoutScholarshipsInput = {
    provider_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    contact_person?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type EligibilityCriteriaUpsertWithWhereUniqueWithoutScholarshipInput = {
    where: EligibilityCriteriaWhereUniqueInput
    update: XOR<EligibilityCriteriaUpdateWithoutScholarshipInput, EligibilityCriteriaUncheckedUpdateWithoutScholarshipInput>
    create: XOR<EligibilityCriteriaCreateWithoutScholarshipInput, EligibilityCriteriaUncheckedCreateWithoutScholarshipInput>
  }

  export type EligibilityCriteriaUpdateWithWhereUniqueWithoutScholarshipInput = {
    where: EligibilityCriteriaWhereUniqueInput
    data: XOR<EligibilityCriteriaUpdateWithoutScholarshipInput, EligibilityCriteriaUncheckedUpdateWithoutScholarshipInput>
  }

  export type EligibilityCriteriaUpdateManyWithWhereWithoutScholarshipInput = {
    where: EligibilityCriteriaScalarWhereInput
    data: XOR<EligibilityCriteriaUpdateManyMutationInput, EligibilityCriteriaUncheckedUpdateManyWithoutScholarshipInput>
  }

  export type EligibilityCriteriaScalarWhereInput = {
    AND?: EligibilityCriteriaScalarWhereInput | EligibilityCriteriaScalarWhereInput[]
    OR?: EligibilityCriteriaScalarWhereInput[]
    NOT?: EligibilityCriteriaScalarWhereInput | EligibilityCriteriaScalarWhereInput[]
    criteria_id?: IntFilter<"EligibilityCriteria"> | number
    scholarship_id?: IntFilter<"EligibilityCriteria"> | number
    criteria_name?: StringFilter<"EligibilityCriteria"> | string
    criteria_description?: StringFilter<"EligibilityCriteria"> | string
    min_value?: DecimalFilter<"EligibilityCriteria"> | Decimal | DecimalJsLike | number | string
    max_value?: DecimalFilter<"EligibilityCriteria"> | Decimal | DecimalJsLike | number | string
    weight?: IntFilter<"EligibilityCriteria"> | number
  }

  export type ApplicationUpsertWithWhereUniqueWithoutScholarshipInput = {
    where: ApplicationWhereUniqueInput
    update: XOR<ApplicationUpdateWithoutScholarshipInput, ApplicationUncheckedUpdateWithoutScholarshipInput>
    create: XOR<ApplicationCreateWithoutScholarshipInput, ApplicationUncheckedCreateWithoutScholarshipInput>
  }

  export type ApplicationUpdateWithWhereUniqueWithoutScholarshipInput = {
    where: ApplicationWhereUniqueInput
    data: XOR<ApplicationUpdateWithoutScholarshipInput, ApplicationUncheckedUpdateWithoutScholarshipInput>
  }

  export type ApplicationUpdateManyWithWhereWithoutScholarshipInput = {
    where: ApplicationScalarWhereInput
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyWithoutScholarshipInput>
  }

  export type ScholarshipCreateWithoutCriteriaInput = {
    name: string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    no_of_students: number
    application_deadline: Date | string
    start_date: Date | string
    end_date: Date | string
    is_active?: boolean
    provider: ScholarshipProviderCreateNestedOneWithoutScholarshipsInput
    applications?: ApplicationCreateNestedManyWithoutScholarshipInput
  }

  export type ScholarshipUncheckedCreateWithoutCriteriaInput = {
    scholarship_id?: number
    name: string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    no_of_students: number
    application_deadline: Date | string
    start_date: Date | string
    end_date: Date | string
    provider_id: number
    is_active?: boolean
    applications?: ApplicationUncheckedCreateNestedManyWithoutScholarshipInput
  }

  export type ScholarshipCreateOrConnectWithoutCriteriaInput = {
    where: ScholarshipWhereUniqueInput
    create: XOR<ScholarshipCreateWithoutCriteriaInput, ScholarshipUncheckedCreateWithoutCriteriaInput>
  }

  export type ScholarshipUpsertWithoutCriteriaInput = {
    update: XOR<ScholarshipUpdateWithoutCriteriaInput, ScholarshipUncheckedUpdateWithoutCriteriaInput>
    create: XOR<ScholarshipCreateWithoutCriteriaInput, ScholarshipUncheckedCreateWithoutCriteriaInput>
    where?: ScholarshipWhereInput
  }

  export type ScholarshipUpdateToOneWithWhereWithoutCriteriaInput = {
    where?: ScholarshipWhereInput
    data: XOR<ScholarshipUpdateWithoutCriteriaInput, ScholarshipUncheckedUpdateWithoutCriteriaInput>
  }

  export type ScholarshipUpdateWithoutCriteriaInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    no_of_students?: IntFieldUpdateOperationsInput | number
    application_deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    provider?: ScholarshipProviderUpdateOneRequiredWithoutScholarshipsNestedInput
    applications?: ApplicationUpdateManyWithoutScholarshipNestedInput
  }

  export type ScholarshipUncheckedUpdateWithoutCriteriaInput = {
    scholarship_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    no_of_students?: IntFieldUpdateOperationsInput | number
    application_deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    provider_id?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    applications?: ApplicationUncheckedUpdateManyWithoutScholarshipNestedInput
  }

  export type StudentCreateWithoutApplicationsInput = {
    full_name: string
    registration_no: string
    date_of_birth: Date | string
    permanent_address: string
    admission_date: Date | string
    year_of_study: number
    gender: $Enums.Gender
    phone_number: string
    email: string
    school_name: string
    unmarried_siblings: number
    user: UserCreateNestedOneWithoutStudentInput
    familyMembers?: FamilyMemberCreateNestedManyWithoutStudentInput
    otherFunding?: OtherFundingCreateNestedManyWithoutStudentInput
    siblingEducation?: SiblingEducationCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutApplicationsInput = {
    student_id?: number
    user_id: number
    full_name: string
    registration_no: string
    date_of_birth: Date | string
    permanent_address: string
    admission_date: Date | string
    year_of_study: number
    gender: $Enums.Gender
    phone_number: string
    email: string
    school_name: string
    unmarried_siblings: number
    familyMembers?: FamilyMemberUncheckedCreateNestedManyWithoutStudentInput
    otherFunding?: OtherFundingUncheckedCreateNestedManyWithoutStudentInput
    siblingEducation?: SiblingEducationUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutApplicationsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutApplicationsInput, StudentUncheckedCreateWithoutApplicationsInput>
  }

  export type ScholarshipCreateWithoutApplicationsInput = {
    name: string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    no_of_students: number
    application_deadline: Date | string
    start_date: Date | string
    end_date: Date | string
    is_active?: boolean
    provider: ScholarshipProviderCreateNestedOneWithoutScholarshipsInput
    criteria?: EligibilityCriteriaCreateNestedManyWithoutScholarshipInput
  }

  export type ScholarshipUncheckedCreateWithoutApplicationsInput = {
    scholarship_id?: number
    name: string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    no_of_students: number
    application_deadline: Date | string
    start_date: Date | string
    end_date: Date | string
    provider_id: number
    is_active?: boolean
    criteria?: EligibilityCriteriaUncheckedCreateNestedManyWithoutScholarshipInput
  }

  export type ScholarshipCreateOrConnectWithoutApplicationsInput = {
    where: ScholarshipWhereUniqueInput
    create: XOR<ScholarshipCreateWithoutApplicationsInput, ScholarshipUncheckedCreateWithoutApplicationsInput>
  }

  export type DocumentCreateWithoutApplicationInput = {
    document_type: string
    file_name: string
    file_path: string
    upload_date: Date | string
    verification_status?: $Enums.VerificationStatus
  }

  export type DocumentUncheckedCreateWithoutApplicationInput = {
    document_id?: number
    document_type: string
    file_name: string
    file_path: string
    upload_date: Date | string
    verification_status?: $Enums.VerificationStatus
  }

  export type DocumentCreateOrConnectWithoutApplicationInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutApplicationInput, DocumentUncheckedCreateWithoutApplicationInput>
  }

  export type DocumentCreateManyApplicationInputEnvelope = {
    data: DocumentCreateManyApplicationInput | DocumentCreateManyApplicationInput[]
    skipDuplicates?: boolean
  }

  export type CommitteeReviewCreateWithoutApplicationInput = {
    review_date: Date | string
    points_awarded: number
    comments: string
    status?: $Enums.ReviewStatus
    is_read?: boolean
    reviewer: UserCreateNestedOneWithoutReviewsInput
  }

  export type CommitteeReviewUncheckedCreateWithoutApplicationInput = {
    review_id?: number
    reviewer_id: number
    review_date: Date | string
    points_awarded: number
    comments: string
    status?: $Enums.ReviewStatus
    is_read?: boolean
  }

  export type CommitteeReviewCreateOrConnectWithoutApplicationInput = {
    where: CommitteeReviewWhereUniqueInput
    create: XOR<CommitteeReviewCreateWithoutApplicationInput, CommitteeReviewUncheckedCreateWithoutApplicationInput>
  }

  export type CommitteeReviewCreateManyApplicationInputEnvelope = {
    data: CommitteeReviewCreateManyApplicationInput | CommitteeReviewCreateManyApplicationInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutApplicationInput = {
    amount: Decimal | DecimalJsLike | number | string
    payment_date: Date | string
    payment_method: string
    transaction_id: string
    status?: $Enums.PaymentStatus
  }

  export type PaymentUncheckedCreateWithoutApplicationInput = {
    payment_id?: number
    amount: Decimal | DecimalJsLike | number | string
    payment_date: Date | string
    payment_method: string
    transaction_id: string
    status?: $Enums.PaymentStatus
  }

  export type PaymentCreateOrConnectWithoutApplicationInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutApplicationInput, PaymentUncheckedCreateWithoutApplicationInput>
  }

  export type PaymentCreateManyApplicationInputEnvelope = {
    data: PaymentCreateManyApplicationInput | PaymentCreateManyApplicationInput[]
    skipDuplicates?: boolean
  }

  export type StudentUpsertWithoutApplicationsInput = {
    update: XOR<StudentUpdateWithoutApplicationsInput, StudentUncheckedUpdateWithoutApplicationsInput>
    create: XOR<StudentCreateWithoutApplicationsInput, StudentUncheckedCreateWithoutApplicationsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutApplicationsInput, StudentUncheckedUpdateWithoutApplicationsInput>
  }

  export type StudentUpdateWithoutApplicationsInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    registration_no?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    permanent_address?: StringFieldUpdateOperationsInput | string
    admission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    year_of_study?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    school_name?: StringFieldUpdateOperationsInput | string
    unmarried_siblings?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
    familyMembers?: FamilyMemberUpdateManyWithoutStudentNestedInput
    otherFunding?: OtherFundingUpdateManyWithoutStudentNestedInput
    siblingEducation?: SiblingEducationUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutApplicationsInput = {
    student_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    registration_no?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    permanent_address?: StringFieldUpdateOperationsInput | string
    admission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    year_of_study?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    school_name?: StringFieldUpdateOperationsInput | string
    unmarried_siblings?: IntFieldUpdateOperationsInput | number
    familyMembers?: FamilyMemberUncheckedUpdateManyWithoutStudentNestedInput
    otherFunding?: OtherFundingUncheckedUpdateManyWithoutStudentNestedInput
    siblingEducation?: SiblingEducationUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type ScholarshipUpsertWithoutApplicationsInput = {
    update: XOR<ScholarshipUpdateWithoutApplicationsInput, ScholarshipUncheckedUpdateWithoutApplicationsInput>
    create: XOR<ScholarshipCreateWithoutApplicationsInput, ScholarshipUncheckedCreateWithoutApplicationsInput>
    where?: ScholarshipWhereInput
  }

  export type ScholarshipUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: ScholarshipWhereInput
    data: XOR<ScholarshipUpdateWithoutApplicationsInput, ScholarshipUncheckedUpdateWithoutApplicationsInput>
  }

  export type ScholarshipUpdateWithoutApplicationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    no_of_students?: IntFieldUpdateOperationsInput | number
    application_deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    provider?: ScholarshipProviderUpdateOneRequiredWithoutScholarshipsNestedInput
    criteria?: EligibilityCriteriaUpdateManyWithoutScholarshipNestedInput
  }

  export type ScholarshipUncheckedUpdateWithoutApplicationsInput = {
    scholarship_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    no_of_students?: IntFieldUpdateOperationsInput | number
    application_deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    provider_id?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    criteria?: EligibilityCriteriaUncheckedUpdateManyWithoutScholarshipNestedInput
  }

  export type DocumentUpsertWithWhereUniqueWithoutApplicationInput = {
    where: DocumentWhereUniqueInput
    update: XOR<DocumentUpdateWithoutApplicationInput, DocumentUncheckedUpdateWithoutApplicationInput>
    create: XOR<DocumentCreateWithoutApplicationInput, DocumentUncheckedCreateWithoutApplicationInput>
  }

  export type DocumentUpdateWithWhereUniqueWithoutApplicationInput = {
    where: DocumentWhereUniqueInput
    data: XOR<DocumentUpdateWithoutApplicationInput, DocumentUncheckedUpdateWithoutApplicationInput>
  }

  export type DocumentUpdateManyWithWhereWithoutApplicationInput = {
    where: DocumentScalarWhereInput
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyWithoutApplicationInput>
  }

  export type DocumentScalarWhereInput = {
    AND?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    OR?: DocumentScalarWhereInput[]
    NOT?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    document_id?: IntFilter<"Document"> | number
    application_id?: IntFilter<"Document"> | number
    document_type?: StringFilter<"Document"> | string
    file_name?: StringFilter<"Document"> | string
    file_path?: StringFilter<"Document"> | string
    upload_date?: DateTimeFilter<"Document"> | Date | string
    verification_status?: EnumVerificationStatusFilter<"Document"> | $Enums.VerificationStatus
  }

  export type CommitteeReviewUpsertWithWhereUniqueWithoutApplicationInput = {
    where: CommitteeReviewWhereUniqueInput
    update: XOR<CommitteeReviewUpdateWithoutApplicationInput, CommitteeReviewUncheckedUpdateWithoutApplicationInput>
    create: XOR<CommitteeReviewCreateWithoutApplicationInput, CommitteeReviewUncheckedCreateWithoutApplicationInput>
  }

  export type CommitteeReviewUpdateWithWhereUniqueWithoutApplicationInput = {
    where: CommitteeReviewWhereUniqueInput
    data: XOR<CommitteeReviewUpdateWithoutApplicationInput, CommitteeReviewUncheckedUpdateWithoutApplicationInput>
  }

  export type CommitteeReviewUpdateManyWithWhereWithoutApplicationInput = {
    where: CommitteeReviewScalarWhereInput
    data: XOR<CommitteeReviewUpdateManyMutationInput, CommitteeReviewUncheckedUpdateManyWithoutApplicationInput>
  }

  export type PaymentUpsertWithWhereUniqueWithoutApplicationInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutApplicationInput, PaymentUncheckedUpdateWithoutApplicationInput>
    create: XOR<PaymentCreateWithoutApplicationInput, PaymentUncheckedCreateWithoutApplicationInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutApplicationInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutApplicationInput, PaymentUncheckedUpdateWithoutApplicationInput>
  }

  export type PaymentUpdateManyWithWhereWithoutApplicationInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutApplicationInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    payment_id?: IntFilter<"Payment"> | number
    application_id?: IntFilter<"Payment"> | number
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    payment_date?: DateTimeFilter<"Payment"> | Date | string
    payment_method?: StringFilter<"Payment"> | string
    transaction_id?: StringFilter<"Payment"> | string
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
  }

  export type ApplicationCreateWithoutDocumentsInput = {
    submission_date: Date | string
    status?: $Enums.ApplicationStatus
    total_points?: number | null
    reviewer_comments?: string | null
    review_date?: Date | string | null
    student: StudentCreateNestedOneWithoutApplicationsInput
    scholarship: ScholarshipCreateNestedOneWithoutApplicationsInput
    reviews?: CommitteeReviewCreateNestedManyWithoutApplicationInput
    payments?: PaymentCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateWithoutDocumentsInput = {
    application_id?: number
    student_id: number
    scholarship_id: number
    submission_date: Date | string
    status?: $Enums.ApplicationStatus
    total_points?: number | null
    reviewer_comments?: string | null
    review_date?: Date | string | null
    reviews?: CommitteeReviewUncheckedCreateNestedManyWithoutApplicationInput
    payments?: PaymentUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationCreateOrConnectWithoutDocumentsInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutDocumentsInput, ApplicationUncheckedCreateWithoutDocumentsInput>
  }

  export type ApplicationUpsertWithoutDocumentsInput = {
    update: XOR<ApplicationUpdateWithoutDocumentsInput, ApplicationUncheckedUpdateWithoutDocumentsInput>
    create: XOR<ApplicationCreateWithoutDocumentsInput, ApplicationUncheckedCreateWithoutDocumentsInput>
    where?: ApplicationWhereInput
  }

  export type ApplicationUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: ApplicationWhereInput
    data: XOR<ApplicationUpdateWithoutDocumentsInput, ApplicationUncheckedUpdateWithoutDocumentsInput>
  }

  export type ApplicationUpdateWithoutDocumentsInput = {
    submission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    total_points?: NullableIntFieldUpdateOperationsInput | number | null
    reviewer_comments?: NullableStringFieldUpdateOperationsInput | string | null
    review_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student?: StudentUpdateOneRequiredWithoutApplicationsNestedInput
    scholarship?: ScholarshipUpdateOneRequiredWithoutApplicationsNestedInput
    reviews?: CommitteeReviewUpdateManyWithoutApplicationNestedInput
    payments?: PaymentUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutDocumentsInput = {
    application_id?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
    scholarship_id?: IntFieldUpdateOperationsInput | number
    submission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    total_points?: NullableIntFieldUpdateOperationsInput | number | null
    reviewer_comments?: NullableStringFieldUpdateOperationsInput | string | null
    review_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviews?: CommitteeReviewUncheckedUpdateManyWithoutApplicationNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type StudentCreateWithoutFamilyMembersInput = {
    full_name: string
    registration_no: string
    date_of_birth: Date | string
    permanent_address: string
    admission_date: Date | string
    year_of_study: number
    gender: $Enums.Gender
    phone_number: string
    email: string
    school_name: string
    unmarried_siblings: number
    user: UserCreateNestedOneWithoutStudentInput
    applications?: ApplicationCreateNestedManyWithoutStudentInput
    otherFunding?: OtherFundingCreateNestedManyWithoutStudentInput
    siblingEducation?: SiblingEducationCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutFamilyMembersInput = {
    student_id?: number
    user_id: number
    full_name: string
    registration_no: string
    date_of_birth: Date | string
    permanent_address: string
    admission_date: Date | string
    year_of_study: number
    gender: $Enums.Gender
    phone_number: string
    email: string
    school_name: string
    unmarried_siblings: number
    applications?: ApplicationUncheckedCreateNestedManyWithoutStudentInput
    otherFunding?: OtherFundingUncheckedCreateNestedManyWithoutStudentInput
    siblingEducation?: SiblingEducationUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutFamilyMembersInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutFamilyMembersInput, StudentUncheckedCreateWithoutFamilyMembersInput>
  }

  export type SiblingEducationCreateWithoutMemberInput = {
    institution: string
    year_grade: string
    registration_course: string
    student: StudentCreateNestedOneWithoutSiblingEducationInput
  }

  export type SiblingEducationUncheckedCreateWithoutMemberInput = {
    education_id?: number
    student_id: number
    institution: string
    year_grade: string
    registration_course: string
  }

  export type SiblingEducationCreateOrConnectWithoutMemberInput = {
    where: SiblingEducationWhereUniqueInput
    create: XOR<SiblingEducationCreateWithoutMemberInput, SiblingEducationUncheckedCreateWithoutMemberInput>
  }

  export type SiblingEducationCreateManyMemberInputEnvelope = {
    data: SiblingEducationCreateManyMemberInput | SiblingEducationCreateManyMemberInput[]
    skipDuplicates?: boolean
  }

  export type StudentUpsertWithoutFamilyMembersInput = {
    update: XOR<StudentUpdateWithoutFamilyMembersInput, StudentUncheckedUpdateWithoutFamilyMembersInput>
    create: XOR<StudentCreateWithoutFamilyMembersInput, StudentUncheckedCreateWithoutFamilyMembersInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutFamilyMembersInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutFamilyMembersInput, StudentUncheckedUpdateWithoutFamilyMembersInput>
  }

  export type StudentUpdateWithoutFamilyMembersInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    registration_no?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    permanent_address?: StringFieldUpdateOperationsInput | string
    admission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    year_of_study?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    school_name?: StringFieldUpdateOperationsInput | string
    unmarried_siblings?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
    applications?: ApplicationUpdateManyWithoutStudentNestedInput
    otherFunding?: OtherFundingUpdateManyWithoutStudentNestedInput
    siblingEducation?: SiblingEducationUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutFamilyMembersInput = {
    student_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    registration_no?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    permanent_address?: StringFieldUpdateOperationsInput | string
    admission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    year_of_study?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    school_name?: StringFieldUpdateOperationsInput | string
    unmarried_siblings?: IntFieldUpdateOperationsInput | number
    applications?: ApplicationUncheckedUpdateManyWithoutStudentNestedInput
    otherFunding?: OtherFundingUncheckedUpdateManyWithoutStudentNestedInput
    siblingEducation?: SiblingEducationUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type SiblingEducationUpsertWithWhereUniqueWithoutMemberInput = {
    where: SiblingEducationWhereUniqueInput
    update: XOR<SiblingEducationUpdateWithoutMemberInput, SiblingEducationUncheckedUpdateWithoutMemberInput>
    create: XOR<SiblingEducationCreateWithoutMemberInput, SiblingEducationUncheckedCreateWithoutMemberInput>
  }

  export type SiblingEducationUpdateWithWhereUniqueWithoutMemberInput = {
    where: SiblingEducationWhereUniqueInput
    data: XOR<SiblingEducationUpdateWithoutMemberInput, SiblingEducationUncheckedUpdateWithoutMemberInput>
  }

  export type SiblingEducationUpdateManyWithWhereWithoutMemberInput = {
    where: SiblingEducationScalarWhereInput
    data: XOR<SiblingEducationUpdateManyMutationInput, SiblingEducationUncheckedUpdateManyWithoutMemberInput>
  }

  export type StudentCreateWithoutOtherFundingInput = {
    full_name: string
    registration_no: string
    date_of_birth: Date | string
    permanent_address: string
    admission_date: Date | string
    year_of_study: number
    gender: $Enums.Gender
    phone_number: string
    email: string
    school_name: string
    unmarried_siblings: number
    user: UserCreateNestedOneWithoutStudentInput
    applications?: ApplicationCreateNestedManyWithoutStudentInput
    familyMembers?: FamilyMemberCreateNestedManyWithoutStudentInput
    siblingEducation?: SiblingEducationCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutOtherFundingInput = {
    student_id?: number
    user_id: number
    full_name: string
    registration_no: string
    date_of_birth: Date | string
    permanent_address: string
    admission_date: Date | string
    year_of_study: number
    gender: $Enums.Gender
    phone_number: string
    email: string
    school_name: string
    unmarried_siblings: number
    applications?: ApplicationUncheckedCreateNestedManyWithoutStudentInput
    familyMembers?: FamilyMemberUncheckedCreateNestedManyWithoutStudentInput
    siblingEducation?: SiblingEducationUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutOtherFundingInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutOtherFundingInput, StudentUncheckedCreateWithoutOtherFundingInput>
  }

  export type StudentUpsertWithoutOtherFundingInput = {
    update: XOR<StudentUpdateWithoutOtherFundingInput, StudentUncheckedUpdateWithoutOtherFundingInput>
    create: XOR<StudentCreateWithoutOtherFundingInput, StudentUncheckedCreateWithoutOtherFundingInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutOtherFundingInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutOtherFundingInput, StudentUncheckedUpdateWithoutOtherFundingInput>
  }

  export type StudentUpdateWithoutOtherFundingInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    registration_no?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    permanent_address?: StringFieldUpdateOperationsInput | string
    admission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    year_of_study?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    school_name?: StringFieldUpdateOperationsInput | string
    unmarried_siblings?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
    applications?: ApplicationUpdateManyWithoutStudentNestedInput
    familyMembers?: FamilyMemberUpdateManyWithoutStudentNestedInput
    siblingEducation?: SiblingEducationUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutOtherFundingInput = {
    student_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    registration_no?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    permanent_address?: StringFieldUpdateOperationsInput | string
    admission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    year_of_study?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    school_name?: StringFieldUpdateOperationsInput | string
    unmarried_siblings?: IntFieldUpdateOperationsInput | number
    applications?: ApplicationUncheckedUpdateManyWithoutStudentNestedInput
    familyMembers?: FamilyMemberUncheckedUpdateManyWithoutStudentNestedInput
    siblingEducation?: SiblingEducationUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type ApplicationCreateWithoutReviewsInput = {
    submission_date: Date | string
    status?: $Enums.ApplicationStatus
    total_points?: number | null
    reviewer_comments?: string | null
    review_date?: Date | string | null
    student: StudentCreateNestedOneWithoutApplicationsInput
    scholarship: ScholarshipCreateNestedOneWithoutApplicationsInput
    documents?: DocumentCreateNestedManyWithoutApplicationInput
    payments?: PaymentCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateWithoutReviewsInput = {
    application_id?: number
    student_id: number
    scholarship_id: number
    submission_date: Date | string
    status?: $Enums.ApplicationStatus
    total_points?: number | null
    reviewer_comments?: string | null
    review_date?: Date | string | null
    documents?: DocumentUncheckedCreateNestedManyWithoutApplicationInput
    payments?: PaymentUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationCreateOrConnectWithoutReviewsInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutReviewsInput, ApplicationUncheckedCreateWithoutReviewsInput>
  }

  export type UserCreateWithoutReviewsInput = {
    first_name: string
    last_name: string
    email: string
    username: string
    password: string
    role?: $Enums.Role
    created_at?: Date | string
    student?: StudentCreateNestedOneWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    user_id?: number
    first_name: string
    last_name: string
    email: string
    username: string
    password: string
    role?: $Enums.Role
    created_at?: Date | string
    student?: StudentUncheckedCreateNestedOneWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type ApplicationUpsertWithoutReviewsInput = {
    update: XOR<ApplicationUpdateWithoutReviewsInput, ApplicationUncheckedUpdateWithoutReviewsInput>
    create: XOR<ApplicationCreateWithoutReviewsInput, ApplicationUncheckedCreateWithoutReviewsInput>
    where?: ApplicationWhereInput
  }

  export type ApplicationUpdateToOneWithWhereWithoutReviewsInput = {
    where?: ApplicationWhereInput
    data: XOR<ApplicationUpdateWithoutReviewsInput, ApplicationUncheckedUpdateWithoutReviewsInput>
  }

  export type ApplicationUpdateWithoutReviewsInput = {
    submission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    total_points?: NullableIntFieldUpdateOperationsInput | number | null
    reviewer_comments?: NullableStringFieldUpdateOperationsInput | string | null
    review_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student?: StudentUpdateOneRequiredWithoutApplicationsNestedInput
    scholarship?: ScholarshipUpdateOneRequiredWithoutApplicationsNestedInput
    documents?: DocumentUpdateManyWithoutApplicationNestedInput
    payments?: PaymentUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutReviewsInput = {
    application_id?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
    scholarship_id?: IntFieldUpdateOperationsInput | number
    submission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    total_points?: NullableIntFieldUpdateOperationsInput | number | null
    reviewer_comments?: NullableStringFieldUpdateOperationsInput | string | null
    review_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documents?: DocumentUncheckedUpdateManyWithoutApplicationNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUncheckedUpdateOneWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ApplicationCreateWithoutPaymentsInput = {
    submission_date: Date | string
    status?: $Enums.ApplicationStatus
    total_points?: number | null
    reviewer_comments?: string | null
    review_date?: Date | string | null
    student: StudentCreateNestedOneWithoutApplicationsInput
    scholarship: ScholarshipCreateNestedOneWithoutApplicationsInput
    documents?: DocumentCreateNestedManyWithoutApplicationInput
    reviews?: CommitteeReviewCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateWithoutPaymentsInput = {
    application_id?: number
    student_id: number
    scholarship_id: number
    submission_date: Date | string
    status?: $Enums.ApplicationStatus
    total_points?: number | null
    reviewer_comments?: string | null
    review_date?: Date | string | null
    documents?: DocumentUncheckedCreateNestedManyWithoutApplicationInput
    reviews?: CommitteeReviewUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationCreateOrConnectWithoutPaymentsInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutPaymentsInput, ApplicationUncheckedCreateWithoutPaymentsInput>
  }

  export type ApplicationUpsertWithoutPaymentsInput = {
    update: XOR<ApplicationUpdateWithoutPaymentsInput, ApplicationUncheckedUpdateWithoutPaymentsInput>
    create: XOR<ApplicationCreateWithoutPaymentsInput, ApplicationUncheckedCreateWithoutPaymentsInput>
    where?: ApplicationWhereInput
  }

  export type ApplicationUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: ApplicationWhereInput
    data: XOR<ApplicationUpdateWithoutPaymentsInput, ApplicationUncheckedUpdateWithoutPaymentsInput>
  }

  export type ApplicationUpdateWithoutPaymentsInput = {
    submission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    total_points?: NullableIntFieldUpdateOperationsInput | number | null
    reviewer_comments?: NullableStringFieldUpdateOperationsInput | string | null
    review_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student?: StudentUpdateOneRequiredWithoutApplicationsNestedInput
    scholarship?: ScholarshipUpdateOneRequiredWithoutApplicationsNestedInput
    documents?: DocumentUpdateManyWithoutApplicationNestedInput
    reviews?: CommitteeReviewUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutPaymentsInput = {
    application_id?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
    scholarship_id?: IntFieldUpdateOperationsInput | number
    submission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    total_points?: NullableIntFieldUpdateOperationsInput | number | null
    reviewer_comments?: NullableStringFieldUpdateOperationsInput | string | null
    review_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documents?: DocumentUncheckedUpdateManyWithoutApplicationNestedInput
    reviews?: CommitteeReviewUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type StudentCreateWithoutSiblingEducationInput = {
    full_name: string
    registration_no: string
    date_of_birth: Date | string
    permanent_address: string
    admission_date: Date | string
    year_of_study: number
    gender: $Enums.Gender
    phone_number: string
    email: string
    school_name: string
    unmarried_siblings: number
    user: UserCreateNestedOneWithoutStudentInput
    applications?: ApplicationCreateNestedManyWithoutStudentInput
    familyMembers?: FamilyMemberCreateNestedManyWithoutStudentInput
    otherFunding?: OtherFundingCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutSiblingEducationInput = {
    student_id?: number
    user_id: number
    full_name: string
    registration_no: string
    date_of_birth: Date | string
    permanent_address: string
    admission_date: Date | string
    year_of_study: number
    gender: $Enums.Gender
    phone_number: string
    email: string
    school_name: string
    unmarried_siblings: number
    applications?: ApplicationUncheckedCreateNestedManyWithoutStudentInput
    familyMembers?: FamilyMemberUncheckedCreateNestedManyWithoutStudentInput
    otherFunding?: OtherFundingUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutSiblingEducationInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutSiblingEducationInput, StudentUncheckedCreateWithoutSiblingEducationInput>
  }

  export type FamilyMemberCreateWithoutSiblingEducationInput = {
    full_name: string
    age: number
    relationship: string
    designation: string
    annual_income: Decimal | DecimalJsLike | number | string
    workplace: string
    phone_number: string
    student: StudentCreateNestedOneWithoutFamilyMembersInput
  }

  export type FamilyMemberUncheckedCreateWithoutSiblingEducationInput = {
    member_id?: number
    student_id: number
    full_name: string
    age: number
    relationship: string
    designation: string
    annual_income: Decimal | DecimalJsLike | number | string
    workplace: string
    phone_number: string
  }

  export type FamilyMemberCreateOrConnectWithoutSiblingEducationInput = {
    where: FamilyMemberWhereUniqueInput
    create: XOR<FamilyMemberCreateWithoutSiblingEducationInput, FamilyMemberUncheckedCreateWithoutSiblingEducationInput>
  }

  export type StudentUpsertWithoutSiblingEducationInput = {
    update: XOR<StudentUpdateWithoutSiblingEducationInput, StudentUncheckedUpdateWithoutSiblingEducationInput>
    create: XOR<StudentCreateWithoutSiblingEducationInput, StudentUncheckedCreateWithoutSiblingEducationInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutSiblingEducationInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutSiblingEducationInput, StudentUncheckedUpdateWithoutSiblingEducationInput>
  }

  export type StudentUpdateWithoutSiblingEducationInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    registration_no?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    permanent_address?: StringFieldUpdateOperationsInput | string
    admission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    year_of_study?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    school_name?: StringFieldUpdateOperationsInput | string
    unmarried_siblings?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
    applications?: ApplicationUpdateManyWithoutStudentNestedInput
    familyMembers?: FamilyMemberUpdateManyWithoutStudentNestedInput
    otherFunding?: OtherFundingUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutSiblingEducationInput = {
    student_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    registration_no?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    permanent_address?: StringFieldUpdateOperationsInput | string
    admission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    year_of_study?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    school_name?: StringFieldUpdateOperationsInput | string
    unmarried_siblings?: IntFieldUpdateOperationsInput | number
    applications?: ApplicationUncheckedUpdateManyWithoutStudentNestedInput
    familyMembers?: FamilyMemberUncheckedUpdateManyWithoutStudentNestedInput
    otherFunding?: OtherFundingUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type FamilyMemberUpsertWithoutSiblingEducationInput = {
    update: XOR<FamilyMemberUpdateWithoutSiblingEducationInput, FamilyMemberUncheckedUpdateWithoutSiblingEducationInput>
    create: XOR<FamilyMemberCreateWithoutSiblingEducationInput, FamilyMemberUncheckedCreateWithoutSiblingEducationInput>
    where?: FamilyMemberWhereInput
  }

  export type FamilyMemberUpdateToOneWithWhereWithoutSiblingEducationInput = {
    where?: FamilyMemberWhereInput
    data: XOR<FamilyMemberUpdateWithoutSiblingEducationInput, FamilyMemberUncheckedUpdateWithoutSiblingEducationInput>
  }

  export type FamilyMemberUpdateWithoutSiblingEducationInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    relationship?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    annual_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    workplace?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    student?: StudentUpdateOneRequiredWithoutFamilyMembersNestedInput
  }

  export type FamilyMemberUncheckedUpdateWithoutSiblingEducationInput = {
    member_id?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    relationship?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    annual_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    workplace?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutNotificationsInput = {
    first_name: string
    last_name: string
    email: string
    username: string
    password: string
    role?: $Enums.Role
    created_at?: Date | string
    student?: StudentCreateNestedOneWithoutUserInput
    reviews?: CommitteeReviewCreateNestedManyWithoutReviewerInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    user_id?: number
    first_name: string
    last_name: string
    email: string
    username: string
    password: string
    role?: $Enums.Role
    created_at?: Date | string
    student?: StudentUncheckedCreateNestedOneWithoutUserInput
    reviews?: CommitteeReviewUncheckedCreateNestedManyWithoutReviewerInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneWithoutUserNestedInput
    reviews?: CommitteeReviewUpdateManyWithoutReviewerNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUncheckedUpdateOneWithoutUserNestedInput
    reviews?: CommitteeReviewUncheckedUpdateManyWithoutReviewerNestedInput
  }

  export type CommitteeReviewCreateManyReviewerInput = {
    review_id?: number
    application_id: number
    review_date: Date | string
    points_awarded: number
    comments: string
    status?: $Enums.ReviewStatus
    is_read?: boolean
  }

  export type NotificationCreateManyUserInput = {
    notification_id?: number
    message: string
    created_at?: Date | string
    is_read?: boolean
  }

  export type CommitteeReviewUpdateWithoutReviewerInput = {
    review_date?: DateTimeFieldUpdateOperationsInput | Date | string
    points_awarded?: IntFieldUpdateOperationsInput | number
    comments?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    is_read?: BoolFieldUpdateOperationsInput | boolean
    application?: ApplicationUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type CommitteeReviewUncheckedUpdateWithoutReviewerInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    application_id?: IntFieldUpdateOperationsInput | number
    review_date?: DateTimeFieldUpdateOperationsInput | Date | string
    points_awarded?: IntFieldUpdateOperationsInput | number
    comments?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    is_read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CommitteeReviewUncheckedUpdateManyWithoutReviewerInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    application_id?: IntFieldUpdateOperationsInput | number
    review_date?: DateTimeFieldUpdateOperationsInput | Date | string
    points_awarded?: IntFieldUpdateOperationsInput | number
    comments?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    is_read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationUpdateWithoutUserInput = {
    message?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    notification_id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    notification_id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ApplicationCreateManyStudentInput = {
    application_id?: number
    scholarship_id: number
    submission_date: Date | string
    status?: $Enums.ApplicationStatus
    total_points?: number | null
    reviewer_comments?: string | null
    review_date?: Date | string | null
  }

  export type FamilyMemberCreateManyStudentInput = {
    member_id?: number
    full_name: string
    age: number
    relationship: string
    designation: string
    annual_income: Decimal | DecimalJsLike | number | string
    workplace: string
    phone_number: string
  }

  export type OtherFundingCreateManyStudentInput = {
    funding_id?: number
    funding_name: string
    organization: string
    annual_amount: Decimal | DecimalJsLike | number | string
    start_date: Date | string
    end_date: Date | string
  }

  export type SiblingEducationCreateManyStudentInput = {
    education_id?: number
    member_id: number
    institution: string
    year_grade: string
    registration_course: string
  }

  export type ApplicationUpdateWithoutStudentInput = {
    submission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    total_points?: NullableIntFieldUpdateOperationsInput | number | null
    reviewer_comments?: NullableStringFieldUpdateOperationsInput | string | null
    review_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scholarship?: ScholarshipUpdateOneRequiredWithoutApplicationsNestedInput
    documents?: DocumentUpdateManyWithoutApplicationNestedInput
    reviews?: CommitteeReviewUpdateManyWithoutApplicationNestedInput
    payments?: PaymentUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutStudentInput = {
    application_id?: IntFieldUpdateOperationsInput | number
    scholarship_id?: IntFieldUpdateOperationsInput | number
    submission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    total_points?: NullableIntFieldUpdateOperationsInput | number | null
    reviewer_comments?: NullableStringFieldUpdateOperationsInput | string | null
    review_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documents?: DocumentUncheckedUpdateManyWithoutApplicationNestedInput
    reviews?: CommitteeReviewUncheckedUpdateManyWithoutApplicationNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateManyWithoutStudentInput = {
    application_id?: IntFieldUpdateOperationsInput | number
    scholarship_id?: IntFieldUpdateOperationsInput | number
    submission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    total_points?: NullableIntFieldUpdateOperationsInput | number | null
    reviewer_comments?: NullableStringFieldUpdateOperationsInput | string | null
    review_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FamilyMemberUpdateWithoutStudentInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    relationship?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    annual_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    workplace?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    siblingEducation?: SiblingEducationUpdateManyWithoutMemberNestedInput
  }

  export type FamilyMemberUncheckedUpdateWithoutStudentInput = {
    member_id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    relationship?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    annual_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    workplace?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    siblingEducation?: SiblingEducationUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type FamilyMemberUncheckedUpdateManyWithoutStudentInput = {
    member_id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    relationship?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    annual_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    workplace?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
  }

  export type OtherFundingUpdateWithoutStudentInput = {
    funding_name?: StringFieldUpdateOperationsInput | string
    organization?: StringFieldUpdateOperationsInput | string
    annual_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtherFundingUncheckedUpdateWithoutStudentInput = {
    funding_id?: IntFieldUpdateOperationsInput | number
    funding_name?: StringFieldUpdateOperationsInput | string
    organization?: StringFieldUpdateOperationsInput | string
    annual_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtherFundingUncheckedUpdateManyWithoutStudentInput = {
    funding_id?: IntFieldUpdateOperationsInput | number
    funding_name?: StringFieldUpdateOperationsInput | string
    organization?: StringFieldUpdateOperationsInput | string
    annual_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiblingEducationUpdateWithoutStudentInput = {
    institution?: StringFieldUpdateOperationsInput | string
    year_grade?: StringFieldUpdateOperationsInput | string
    registration_course?: StringFieldUpdateOperationsInput | string
    member?: FamilyMemberUpdateOneRequiredWithoutSiblingEducationNestedInput
  }

  export type SiblingEducationUncheckedUpdateWithoutStudentInput = {
    education_id?: IntFieldUpdateOperationsInput | number
    member_id?: IntFieldUpdateOperationsInput | number
    institution?: StringFieldUpdateOperationsInput | string
    year_grade?: StringFieldUpdateOperationsInput | string
    registration_course?: StringFieldUpdateOperationsInput | string
  }

  export type SiblingEducationUncheckedUpdateManyWithoutStudentInput = {
    education_id?: IntFieldUpdateOperationsInput | number
    member_id?: IntFieldUpdateOperationsInput | number
    institution?: StringFieldUpdateOperationsInput | string
    year_grade?: StringFieldUpdateOperationsInput | string
    registration_course?: StringFieldUpdateOperationsInput | string
  }

  export type ScholarshipCreateManyProviderInput = {
    scholarship_id?: number
    name: string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    no_of_students: number
    application_deadline: Date | string
    start_date: Date | string
    end_date: Date | string
    is_active?: boolean
  }

  export type ScholarshipUpdateWithoutProviderInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    no_of_students?: IntFieldUpdateOperationsInput | number
    application_deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    criteria?: EligibilityCriteriaUpdateManyWithoutScholarshipNestedInput
    applications?: ApplicationUpdateManyWithoutScholarshipNestedInput
  }

  export type ScholarshipUncheckedUpdateWithoutProviderInput = {
    scholarship_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    no_of_students?: IntFieldUpdateOperationsInput | number
    application_deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    criteria?: EligibilityCriteriaUncheckedUpdateManyWithoutScholarshipNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutScholarshipNestedInput
  }

  export type ScholarshipUncheckedUpdateManyWithoutProviderInput = {
    scholarship_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    no_of_students?: IntFieldUpdateOperationsInput | number
    application_deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EligibilityCriteriaCreateManyScholarshipInput = {
    criteria_id?: number
    criteria_name: string
    criteria_description: string
    min_value: Decimal | DecimalJsLike | number | string
    max_value: Decimal | DecimalJsLike | number | string
    weight: number
  }

  export type ApplicationCreateManyScholarshipInput = {
    application_id?: number
    student_id: number
    submission_date: Date | string
    status?: $Enums.ApplicationStatus
    total_points?: number | null
    reviewer_comments?: string | null
    review_date?: Date | string | null
  }

  export type EligibilityCriteriaUpdateWithoutScholarshipInput = {
    criteria_name?: StringFieldUpdateOperationsInput | string
    criteria_description?: StringFieldUpdateOperationsInput | string
    min_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    max_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    weight?: IntFieldUpdateOperationsInput | number
  }

  export type EligibilityCriteriaUncheckedUpdateWithoutScholarshipInput = {
    criteria_id?: IntFieldUpdateOperationsInput | number
    criteria_name?: StringFieldUpdateOperationsInput | string
    criteria_description?: StringFieldUpdateOperationsInput | string
    min_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    max_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    weight?: IntFieldUpdateOperationsInput | number
  }

  export type EligibilityCriteriaUncheckedUpdateManyWithoutScholarshipInput = {
    criteria_id?: IntFieldUpdateOperationsInput | number
    criteria_name?: StringFieldUpdateOperationsInput | string
    criteria_description?: StringFieldUpdateOperationsInput | string
    min_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    max_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    weight?: IntFieldUpdateOperationsInput | number
  }

  export type ApplicationUpdateWithoutScholarshipInput = {
    submission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    total_points?: NullableIntFieldUpdateOperationsInput | number | null
    reviewer_comments?: NullableStringFieldUpdateOperationsInput | string | null
    review_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student?: StudentUpdateOneRequiredWithoutApplicationsNestedInput
    documents?: DocumentUpdateManyWithoutApplicationNestedInput
    reviews?: CommitteeReviewUpdateManyWithoutApplicationNestedInput
    payments?: PaymentUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutScholarshipInput = {
    application_id?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
    submission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    total_points?: NullableIntFieldUpdateOperationsInput | number | null
    reviewer_comments?: NullableStringFieldUpdateOperationsInput | string | null
    review_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documents?: DocumentUncheckedUpdateManyWithoutApplicationNestedInput
    reviews?: CommitteeReviewUncheckedUpdateManyWithoutApplicationNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateManyWithoutScholarshipInput = {
    application_id?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
    submission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    total_points?: NullableIntFieldUpdateOperationsInput | number | null
    reviewer_comments?: NullableStringFieldUpdateOperationsInput | string | null
    review_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DocumentCreateManyApplicationInput = {
    document_id?: number
    document_type: string
    file_name: string
    file_path: string
    upload_date: Date | string
    verification_status?: $Enums.VerificationStatus
  }

  export type CommitteeReviewCreateManyApplicationInput = {
    review_id?: number
    reviewer_id: number
    review_date: Date | string
    points_awarded: number
    comments: string
    status?: $Enums.ReviewStatus
    is_read?: boolean
  }

  export type PaymentCreateManyApplicationInput = {
    payment_id?: number
    amount: Decimal | DecimalJsLike | number | string
    payment_date: Date | string
    payment_method: string
    transaction_id: string
    status?: $Enums.PaymentStatus
  }

  export type DocumentUpdateWithoutApplicationInput = {
    document_type?: StringFieldUpdateOperationsInput | string
    file_name?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    upload_date?: DateTimeFieldUpdateOperationsInput | Date | string
    verification_status?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
  }

  export type DocumentUncheckedUpdateWithoutApplicationInput = {
    document_id?: IntFieldUpdateOperationsInput | number
    document_type?: StringFieldUpdateOperationsInput | string
    file_name?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    upload_date?: DateTimeFieldUpdateOperationsInput | Date | string
    verification_status?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
  }

  export type DocumentUncheckedUpdateManyWithoutApplicationInput = {
    document_id?: IntFieldUpdateOperationsInput | number
    document_type?: StringFieldUpdateOperationsInput | string
    file_name?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    upload_date?: DateTimeFieldUpdateOperationsInput | Date | string
    verification_status?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
  }

  export type CommitteeReviewUpdateWithoutApplicationInput = {
    review_date?: DateTimeFieldUpdateOperationsInput | Date | string
    points_awarded?: IntFieldUpdateOperationsInput | number
    comments?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    is_read?: BoolFieldUpdateOperationsInput | boolean
    reviewer?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type CommitteeReviewUncheckedUpdateWithoutApplicationInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    reviewer_id?: IntFieldUpdateOperationsInput | number
    review_date?: DateTimeFieldUpdateOperationsInput | Date | string
    points_awarded?: IntFieldUpdateOperationsInput | number
    comments?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    is_read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CommitteeReviewUncheckedUpdateManyWithoutApplicationInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    reviewer_id?: IntFieldUpdateOperationsInput | number
    review_date?: DateTimeFieldUpdateOperationsInput | Date | string
    points_awarded?: IntFieldUpdateOperationsInput | number
    comments?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    is_read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PaymentUpdateWithoutApplicationInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_method?: StringFieldUpdateOperationsInput | string
    transaction_id?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
  }

  export type PaymentUncheckedUpdateWithoutApplicationInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_method?: StringFieldUpdateOperationsInput | string
    transaction_id?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
  }

  export type PaymentUncheckedUpdateManyWithoutApplicationInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_method?: StringFieldUpdateOperationsInput | string
    transaction_id?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
  }

  export type SiblingEducationCreateManyMemberInput = {
    education_id?: number
    student_id: number
    institution: string
    year_grade: string
    registration_course: string
  }

  export type SiblingEducationUpdateWithoutMemberInput = {
    institution?: StringFieldUpdateOperationsInput | string
    year_grade?: StringFieldUpdateOperationsInput | string
    registration_course?: StringFieldUpdateOperationsInput | string
    student?: StudentUpdateOneRequiredWithoutSiblingEducationNestedInput
  }

  export type SiblingEducationUncheckedUpdateWithoutMemberInput = {
    education_id?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
    institution?: StringFieldUpdateOperationsInput | string
    year_grade?: StringFieldUpdateOperationsInput | string
    registration_course?: StringFieldUpdateOperationsInput | string
  }

  export type SiblingEducationUncheckedUpdateManyWithoutMemberInput = {
    education_id?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
    institution?: StringFieldUpdateOperationsInput | string
    year_grade?: StringFieldUpdateOperationsInput | string
    registration_course?: StringFieldUpdateOperationsInput | string
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
/**
 * A utility type that makes all properties of a given type `Type` required
 * by removing the `undefined` modifier from each property.
 *
 * @template Type - The input type whose properties are to be made non-optional.
 *
 * @example
 * type Example = { a?: number; b?: string; };
 * type ConcreteExample = Concrete<Example>;
 * // Result: { a: number; b: string; }
 *
 * @example
 * type User = { id?: number; name?: string; };
 * const user: Concrete<User> = { id: 1, name: "John" }; // Valid
 */
export type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};

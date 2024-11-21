/**
 * Checks if all properties of an object have defined (non-undefined) values.
 *
 * @template T - The type of the object to check.
 * @param {T} obj - The object whose properties are to be checked.
 * @returns {boolean} `true` if all properties of the object have defined values, otherwise `false`.
 *
 * @example
 * hasAllProperties({ a: 1, b: 'test', c: true }) // true
 *
 * @example
 * hasAllProperties({ a: 1, b: undefined, c: true }) // false
 *
 * @example
 * hasAllProperties({}) // true (an empty object has no undefined values)
 */
export function hasAllProperties<T extends object>(obj: T): boolean {
  return Object.values(obj).every((value) => {
    if (value && typeof value === "object" && !Array.isArray(value)) {
      return hasAllProperties(value);
    }
    return value !== undefined;
  });
}

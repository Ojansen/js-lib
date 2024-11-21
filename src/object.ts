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

/**
 * Picks specified keys from an object, returning a new object with only those properties.
 *
 * @template T - The type of the input object.
 * @template K - The keys to pick from the object.
 * @param obj - The source object to pick properties from.
 * @param keys - An array of keys to pick from the object.
 * @returns {Pick<T, K>} A new object containing only the picked keys.
 *
 * @example
 * const obj = { a: 1, b: 2, c: 3 };
 * pick(obj, ['a', 'c']); // { a: 1, c: 3 }
 *
 * @example
 * const user = { id: 1, name: 'Alice', age: 30 };
 * pick(user, ['name', 'age']); // { name: 'Alice', age: 30 }
 */
export function pick<T extends object, K extends keyof T>(
  obj: T,
  keys: K[],
): Pick<T, K> {
  return keys.reduce(
    (result, key) => {
      if (key in obj) {
        result[key] = obj[key];
      }
      return result;
    },
    {} as Pick<T, K>,
  );
}

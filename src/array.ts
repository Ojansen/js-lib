import { isPrime } from "./guards";
/**
 * Removes duplicate values from an array, returning a new array with unique elements.
 *
 * @template T - The type of elements in the array.
 * @param {T[]} array - The array to remove duplicates from.
 * @returns {T[]} A new array containing only the unique elements from the input array.
 *
 * @example
 * unique([1, 2, 2, 3, 4, 4]) // [1, 2, 3, 4]
 *
 * @example
 * unique(['a', 'b', 'b', 'c']) // ['a', 'b', 'c']
 *
 * @example
 * unique([true, false, true]) // [true, false]
 */
export function unique<T>(array: T[]): T[] {
  return [...new Set(array)];
}

/**
 * Recursively flattens a nested array into a single-level array.
 *
 * @template T - The type of elements in the input and output arrays.
 * @param {(T | T[])[]} array - The array containing elements or nested arrays to be flattened.
 * @returns {T[]} A new array with all elements from the nested structure flattened into a single level.
 *
 * @example
 * deepFlatten([1, [2, [3, [4]], 5]]) // [1, 2, 3, 4, 5]
 *
 * @example
 * deepFlatten(['a', ['b', ['c', ['d']], 'e']]) // ['a', 'b', 'c', 'd', 'e']
 *
 * @example
 * deepFlatten([1, [2, [3, [4]], [5, 6]], 7]) // [1, 2, 3, 4, 5, 6, 7]
 */
export function deepFlatten<T>(array: (T | T[])[]): T[] {
  return array.reduce<T[]>((flat, item) => {
    return flat.concat(Array.isArray(item) ? deepFlatten(item) : item);
  }, []);
}

/**
 * Splits an array into smaller chunks of a specified size.
 *
 * @template T - The type of elements in the input array.
 * @param {T[]} array - The array to be divided into chunks.
 * @param {number} size - The size of each chunk. Must be greater than 0.
 * @returns {T[][]} An array of chunks, where each chunk is an array of size `size` (except possibly the last chunk).
 * @throws {Error} If `size` is less than or equal to 0.
 *
 * @example
 * chunk([1, 2, 3, 4, 5], 2) // [[1, 2], [3, 4], [5]]
 * chunk(['a', 'b', 'c', 'd'], 3) // [['a', 'b', 'c'], ['d']]
 * chunk([1, 2, 3], 1) // [[1], [2], [3]]
 */
export function chunk<T>(array: T[], size: number): T[][] {
  if (size <= 0) {
    throw new Error("Chunk size must be greater than 0");
  }

  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

/**
 * Filters an array of objects to include only those whose specified key's value matches
 * a value in the provided array, ensuring uniqueness in the output.
 *
 * @template T - The type of objects in the `objects` array.
 * @template K - The key of the objects used for matching.
 * @param {T[K][]} items - An array of values to match against. Duplicate values are ignored.
 * @param {T[]} objects - An array of objects to be filtered.
 * @param {K} key - The key in the objects whose values are compared to the `items` array.
 * @returns {T[]} An array of objects from `objects` whose `key`'s value exists in `items`,
 * ensuring each matched object is unique.
 *
 * @example
 * const items = [1, 2, 3];
 * const objects = [
 *   { id: 1, name: 'Alice' },
 *   { id: 2, name: 'Bob' },
 *   { id: 3, name: 'Charlie' },
 *   { id: 2, name: 'David' }
 * ];
 *
 * matchElements(items, objects, 'id');
 * // Output: [
 * //   { id: 1, name: 'Alice' },
 * //   { id: 2, name: 'Bob' },
 * //   { id: 3, name: 'Charlie' }
 * // ]
 *
 * @example
 * const items = ['a', 'b'];
 * const objects = [
 *   { key: 'a', value: 10 },
 *   { key: 'b', value: 20 },
 *   { key: 'c', value: 30 },
 *   { key: 'b', value: 40 }
 * ];
 *
 * matchElements(items, objects, 'key');
 * // Output: [
 * //   { key: 'a', value: 10 },
 * //   { key: 'b', value: 20 }
 * // ]
 */
export function matchElements<
  T extends Record<string, unknown>,
  K extends keyof T,
>(items: T[K][], objects: T[], key: K): T[] {
  const uniqueItems = new Set(items); // Remove duplicate elements from the input array
  const uniqueObjects: T[] = [];

  const seen = new Set<T[K]>(); // Track seen values to ensure uniqueness in the output

  for (const obj of objects) {
    const value = obj[key];
    if (uniqueItems.has(value) && !seen.has(value)) {
      uniqueObjects.push(obj);
      seen.add(value);
    }
  }

  return uniqueObjects;
}

/**
 * Generates a range of numbers from `start` to `end` with a given `step`.
 *
 * @param {number} start - The starting number of the range.
 * @param {number} end - The ending number of the range (inclusive or exclusive depending on `step`).
 * @param {number} step - The step size for each increment or decrement.
 * @returns {number[]} An array containing the range of numbers.
 *
 * @example
 * range(0, 10, 2) // [0, 2, 4, 6, 8]
 *
 * @example
 * range(5, 1, -1) // [5, 4, 3, 2, 1]
 *
 * @example
 * range(1, 5, 0.5) // [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5]
 */
export function range(start: number, end: number, step: number): number[] {
  if (step === 0) throw new Error("Step must not be zero.");
  const result: number[] = [];
  if (step > 0) {
    for (let i = start; i < end; i += step) {
      result.push(i);
    }
  } else {
    for (let i = start; i > end; i += step) {
      result.push(i);
    }
  }
  return result;
}

/**
 * Filters an array to include only prime numbers.
 *
 * @param numbers - An array of numbers to filter.
 * @returns {number[]} An array of prime numbers. Returns an empty array if no primes exist.
 *
 * @example
 * filterPrimes([1, 2, 3, 4, 5]); // [2, 3, 5]
 * filterPrimes([8, 9, 10]); // []
 * filterPrimes([13, 17, 19]); // [13, 17, 19]
 */
export function filterPrimes(numbers: number[]): number[] {
  return numbers.filter(isPrime);
}

/**
 * Checks if a value is `null` or `undefined`.
 *
 * @param value - The value to check.
 * @returns {boolean} `true` if the value is `null` or `undefined`, otherwise `false`.
 *
 * @example
 * isNull(null) // true
 * isNull(undefined) // true
 * isNull(0) // false
 * isNull('') // false
 */
export function isNull(value: unknown): boolean {
  return value === null || value === undefined;
}

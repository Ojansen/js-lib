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

/**
 * Checks if a number is even or odd.
 *
 * @param num - The number to check.
 * @returns {boolean} `true` if the number is `even`, otherwise `false`.
 *
 * @example
 * isEven(6) // true
 * isEven(1) // false
 */
export function isEven(num: number): boolean {
  return num % 2 === 0;
}

/**
 * Checks if a number is a prime number.
 *
 * @param num - The number to check.
 * @returns {boolean} True if the number is prime, otherwise false.
 */
export function isPrime(num: number): boolean {
  if (num <= 1) return false;
  if (num <= 3) return true; // 2 and 3 are prime
  if (isEven(num) || num % 3 === 0) return false;

  // Check divisors from 5 to √num
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

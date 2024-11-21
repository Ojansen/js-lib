/**
 * Computes the Rectified Linear Unit (ReLU) activation function for a given input.
 *
 * The ReLU function is defined as:
 *   `f(x) = max(0, x)`
 * It returns the input value if it is greater than or equal to 0, otherwise it returns 0.
 * ReLU is widely used in neural networks as an activation function.
 *
 * @param {number} x - The input value.
 * @returns {number} The computed ReLU value, which is `x` if `x >= 0`, or `0` otherwise.
 *
 * @example
 * relu(3); // 3
 * relu(-5); // 0
 * relu(0); // 0
 */
export function relu(x: number): number {
  return Math.max(0, x);
}

/**
 * Computes the sigmoid function for a given input.
 *
 * The sigmoid function is defined as:
 *   `f(x) = 1 / (1 + e^(-x))`
 * It maps any real number to a value between 0 and 1, making it useful
 * in machine learning, especially for binary classification problems.
 *
 * @param {number} x - The input value.
 * @returns {number} The computed sigmoid value, ranging between 0 and 1.
 *
 * @example
 * sigmoid(0); // 0.5
 * sigmoid(1); // ~0.731
 * sigmoid(-1); // ~0.268
 */
export function sigmoid(x: number): number {
  return 1 / (1 + Math.exp(-x));
}

/**
 * Restricts a number to be within a specified range.
 *
 * @param {number} value - The number to clamp.
 * @param {number} min - The lower bound of the range.
 * @param {number} max - The upper bound of the range.
 * @returns {number} The clamped value, which will be:
 *   - `min` if `value` is less than `min`.
 *   - `max` if `value` is greater than `max`.
 *   - `value` if it lies within the range `[min, max]`.
 *
 * @example
 * clamp(5, 1, 10); // 5 (within range)
 * clamp(-5, 1, 10); // 1 (clamped to lower bound)
 * clamp(15, 1, 10); // 10 (clamped to upper bound)
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

/**
 * Generates a random number within a specified range.
 *
 * @param {number} min - The lower bound of the range (inclusive).
 * @param {number} max - The upper bound of the range (exclusive).
 * @returns {number} A random number between `min` (inclusive) and `max` (exclusive).
 *
 * @example
 * randomInRange(1, 10); // A random number between 1 and 10, such as 3.456.
 * randomInRange(0, 1); // A random number between 0 and 1, such as 0.789.
 * randomInRange(-5, 5); // A random number between -5 and 5, such as -2.13.
 */
export function randomInRange(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

/**
 * Computes the greatest common divisor (GCD) of two numbers using the Euclidean algorithm.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The greatest common divisor of `a` and `b`.
 *
 * @example
 * gcd(24, 36); // 12
 * gcd(7, 3); // 1
 * gcd(0, 5); // 5
 * gcd(10, 0); // 10
 */
export function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

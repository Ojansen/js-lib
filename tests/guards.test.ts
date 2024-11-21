import { describe, expect, it } from "vitest";
import { isEven, isNull, isPrime } from "../src";

describe("guards", () => {
  it("isEven", () => {
    expect(isEven(4)).toBeTruthy();
    expect(isEven(3)).toBeFalsy();
    expect(isEven(2)).toBeTruthy();
    expect(isEven(1)).toBeFalsy();
  });

  it("isNull", () => {
    expect(isNull(null)).toBeTruthy();
    expect(isNull(undefined)).toBeTruthy();

    expect(isNull("null")).toBeFalsy();
    expect(isNull("")).toBeFalsy();
    expect(isNull(0)).toBeFalsy();
  });
});

describe("isPrime", () => {
  it("should return false for numbers less than or equal to 1", () => {
    expect(isPrime(-5)).toBeFalsy();
    expect(isPrime(0)).toBeFalsy();
    expect(isPrime(1)).toBeFalsy();
  });

  it("should return true for 2 and 3 (smallest primes)", () => {
    expect(isPrime(2)).toBeTruthy();
    expect(isPrime(3)).toBeTruthy();
  });

  it("should return false for even numbers greater than 2", () => {
    expect(isPrime(4)).toBeFalsy();
    expect(isPrime(10)).toBeFalsy();
    expect(isPrime(100)).toBeFalsy();
  });

  it("should return true for prime numbers", () => {
    expect(isPrime(5)).toBeTruthy();
    expect(isPrime(7)).toBeTruthy();
    expect(isPrime(13)).toBeTruthy();
    expect(isPrime(17)).toBeTruthy();
    expect(isPrime(19)).toBeTruthy();
    expect(isPrime(23)).toBeTruthy();
  });

  it("should return false for non-prime odd numbers", () => {
    expect(isPrime(9)).toBeFalsy();
    expect(isPrime(15)).toBeFalsy();
    expect(isPrime(21)).toBeFalsy();
    expect(isPrime(25)).toBeFalsy();
  });

  it("should handle very large prime and non-prime numbers", () => {
    expect(isPrime(104729)).toBeTruthy(); // Large prime number
    expect(isPrime(104728)).toBeFalsy(); // One less than a large prime
  });
});

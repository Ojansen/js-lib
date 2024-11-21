import { describe, expect, it } from "vitest";
import { clamp, gcd, randomInRange, relu, sigmoid } from "../src";

it("clamp", () => {
  expect(clamp(5, 1, 10)).toBe(5);
  expect(clamp(15, 1, 10)).toBe(10);
  expect(clamp(-15, 1, 10)).toBe(1);
});

it("relu", () => {
  expect(relu(5)).toBe(5);
  expect(relu(0)).toBe(0);
  expect(relu(-3)).toBe(0);
  expect(relu(1e6)).toBe(1e6);
  expect(relu(-1e6)).toBe(0);
});

it("randomInRange", () => {
  expect(randomInRange(1, 1)).toBe(1);
  expect(randomInRange(1, 2)).toBeGreaterThan(1);
  expect(randomInRange(2, 3)).toBeLessThanOrEqual(3);
});

it("gcd", () => {
  expect(gcd(24, 36)).toBe(12);
  expect(gcd(10, 15)).toBe(5);
  expect(gcd(4, 16)).toBe(4);
});

describe("sigmoid", () => {
  it("returns a value between 0 and 1", () => {
    const result = sigmoid(0);
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(1);
  });

  it("returns 0.5 for an input of 0", () => {
    expect(sigmoid(0)).toBeCloseTo(0.5, 5);
    expect(sigmoid(100)).toBeCloseTo(1, 5);
    expect(sigmoid(-100)).toBeCloseTo(0, 5);
  });

  it("returns correct values for small positive inputs", () => {
    expect(sigmoid(1)).toBeCloseTo(0.731, 3);
    expect(sigmoid(2)).toBeCloseTo(0.881, 3);
  });

  it("returns correct values for small negative inputs", () => {
    expect(sigmoid(-1)).toBeCloseTo(0.269, 3);
    expect(sigmoid(-2)).toBeCloseTo(0.119, 3);
  });
});

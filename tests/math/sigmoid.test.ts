import { describe, expect, it } from "vitest";
import { sigmoid } from "../../src/math";

describe("sigmoid", () => {
  it("returns a value between 0 and 1", () => {
    const result = sigmoid(0);
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(1);
  });

  it("returns 0.5 for an input of 0", () => {
    expect(sigmoid(0)).toBeCloseTo(0.5, 5);
  });

  it("returns a value close to 1 for a large positive input", () => {
    expect(sigmoid(100)).toBeCloseTo(1, 5);
  });

  it("returns a value close to 0 for a large negative input", () => {
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

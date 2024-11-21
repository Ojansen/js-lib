import { describe, expect, it } from "vitest";
import { range } from "../../src";

describe("range", () => {
  it("generates a range of numbers with a positive step", () => {
    expect(range(0, 10, 2)).toEqual([0, 2, 4, 6, 8]);
  });

  it("generates a range of numbers with a negative step", () => {
    expect(range(5, 0, -1)).toEqual([5, 4, 3, 2, 1]);
  });

  it("handles fractional steps", () => {
    expect(range(1, 5, 0.5)).toEqual([1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5]);
  });

  it("throws an error if step is zero", () => {
    expect(() => range(1, 5, 0)).toThrow("Step must not be zero.");
  });

  it("returns an empty array when no range exists", () => {
    expect(range(5, 5, 1)).toEqual([]);
    expect(range(5, 5, -1)).toEqual([]);
  });
});

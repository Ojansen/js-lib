import { describe, expect, it } from "vitest";
import { uniqueArray } from "../src/array";

describe("uniqueArray", () => {
  it("removes duplicate numbers", () => {
    const input = [1, 2, 2, 3, 4, 4, 5];
    const expected = [1, 2, 3, 4, 5];
    expect(uniqueArray(input)).toEqual(expected);
  });

  it("removes duplicate strings", () => {
    const input = ["a", "b", "b", "c", "a"];
    const expected = ["a", "b", "c"];
    expect(uniqueArray(input)).toEqual(expected);
  });

  it("handles an empty array", () => {
    const input: number[] = [];
    const expected: number[] = [];
    expect(uniqueArray(input)).toEqual(expected);
  });

  it("does not modify an already unique array", () => {
    const input = [1, 2, 3];
    const expected = [1, 2, 3];
    expect(uniqueArray(input)).toEqual(expected);
  });

  it("works with mixed data types", () => {
    const input = [1, "1", 2, "2", 1, "1"];
    const expected = [1, "1", 2, "2"];
    expect(uniqueArray(input)).toEqual(expected);
  });
});

import { describe, expect, it } from "vitest";
import { deepFlatten } from "../../src/array";

describe("deepFlatten", () => {
  it("flattens a nested array of numbers", () => {
    const input = [1, [2, [3, [4, 5]]], 6];
    const expected = [1, 2, 3, 4, 5, 6];
    expect(deepFlatten(input)).toEqual(expected);
  });

  it("flattens a nested array of strings", () => {
    const input = ["a", ["b", ["c", ["d"]]], "e"];
    const expected = ["a", "b", "c", "d", "e"];
    expect(deepFlatten(input)).toEqual(expected);
  });

  it("handles an already flat array", () => {
    const input = [1, 2, 3, 4];
    const expected = [1, 2, 3, 4];
    expect(deepFlatten(input)).toEqual(expected);
  });

  it("handles an empty array", () => {
    const input: number[] = [];
    const expected: number[] = [];
    expect(deepFlatten(input)).toEqual(expected);
  });

  it("handles mixed data types", () => {
    const input = [1, "a", [2, "b", [3, "c"]]];
    const expected = [1, "a", 2, "b", 3, "c"];
    expect(deepFlatten(input)).toEqual(expected);
  });
});

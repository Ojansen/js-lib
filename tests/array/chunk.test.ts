import { describe, expect, it } from "vitest";
import { chunk } from "../../src";

describe("chunk", () => {
  it("splits an array into chunks of the specified size", () => {
    const input = [1, 2, 3, 4, 5, 6];
    const size = 2;
    const expected = [
      [1, 2],
      [3, 4],
      [5, 6],
    ];
    expect(chunk(input, size)).toEqual(expected);
  });

  it("handles an array size that is not a multiple of the chunk size", () => {
    const input = [1, 2, 3, 4, 5];
    const size = 2;
    const expected = [[1, 2], [3, 4], [5]];
    expect(chunk(input, size)).toEqual(expected);
  });

  it("returns the whole array as a single chunk if the size is greater than the array length", () => {
    const input = [1, 2, 3];
    const size = 5;
    const expected = [[1, 2, 3]];
    expect(chunk(input, size)).toEqual(expected);
  });

  it("throws an error if the chunk size is 0 or less", () => {
    const input = [1, 2, 3];
    expect(() => chunk(input, 0)).toThrow("Chunk size must be greater than 0");
    expect(() => chunk(input, -1)).toThrow("Chunk size must be greater than 0");
  });

  it("handles an empty array", () => {
    const input: number[] = [];
    const size = 3;
    const expected: number[][] = [];
    expect(chunk(input, size)).toEqual(expected);
  });
});

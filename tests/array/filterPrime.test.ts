import { describe, expect, it } from "vitest";
import { filterPrimes } from "../../src";

describe("array", () => {
  it("should test partial primes", () => {
    expect(filterPrimes([1, 2, 3, 4, 5])).toStrictEqual([2, 3, 5]);
    expect(filterPrimes([8, 9, 10])).toStrictEqual([]);
  });
});

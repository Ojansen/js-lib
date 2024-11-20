import { describe, expect, it } from "vitest";
import { relu } from "../../src/math";

describe("relu performance", () => {
  it("runs efficiently for large inputs", () => {
    const input = Array.from({ length: 1_000_000 }, (_, i) =>
      i % 2 === 0 ? i : -i,
    );

    const start = performance.now();
    const result = input.map(relu);
    const end = performance.now();

    console.log(`ReLU processed 1,000,000 inputs in ${end - start} ms`);
    expect(result.length).toBe(1_000_000);
    expect(end - start).toBeLessThan(10);
  });
});

import { describe, expect, it } from "vitest";
import { chunk, deepFlatten, matchElements, unique } from "../../src";

describe("array performance", () => {
  it("matchElements processed 10,000 items", () => {
    const elements = Array.from({ length: 10_000 }, (_, i) => `item-${i}`);
    const objects = Array.from({ length: 10_000 }, (_, i) => ({
      id: i,
      fruit: `item-${i}`,
      color: "color",
    }));

    const start = performance.now();
    const result = matchElements(elements, objects, "fruit");
    const end = performance.now();

    console.log(`matchElements processed 10,000 items in ${end - start} ms`);
    expect(result.length).toBe(10_000);
    expect(end - start).toBeLessThan(10);
  });

  it("chunk processed 1,000,000 items", () => {
    const input = Array.from({ length: 1_000_000 }, (_, i) => i);
    const chunkSize = 100;

    const start = performance.now();
    const result = chunk(input, chunkSize);
    const end = performance.now();

    console.log(`chunk processed 1,000,000 items in ${end - start} ms`);
    expect(result.length).toBe(10_000);
    expect(end - start).toBeLessThan(20);
  });

  it("deepFlatten processed 10,000 nested arrays", () => {
    const input = Array.from({ length: 10_000 }, () => [1, [2, [3, [4, 5]]]]);

    const start = performance.now();
    const result = deepFlatten(input);
    const end = performance.now();

    console.log(
      `deepFlatten processed 10,000 nested arrays in ${end - start} ms`,
    );
    expect(result.length).toBe(500_00);
    expect(end - start).toBeLessThan(500);
  });

  it("unique processed 1,000,000 items", () => {
    const input = Array.from({ length: 1_000_000 }, (_, i) => i % 10_000); // Repeated elements

    const start = performance.now();
    const result = unique(input);
    const end = performance.now();

    console.log(`unique processed 1,000,000 items in ${end - start} ms`);
    expect(result.length).toBe(10_000);
    expect(end - start).toBeLessThan(20);
  });
});

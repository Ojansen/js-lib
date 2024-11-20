import { describe, expect, it } from "vitest";
import {
  chunkArray,
  deepFlatten,
  matchElements,
  uniqueArray,
} from "../../src/array";

describe("array performance", () => {
  it("matchElements handles large arrays efficiently", () => {
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

  it("chunkArray handles large arrays efficiently", () => {
    const input = Array.from({ length: 1_000_000 }, (_, i) => i);
    const chunkSize = 100;

    const start = performance.now();
    const result = chunkArray(input, chunkSize);
    const end = performance.now();

    console.log(`chunkArray processed 1,000,000 items in ${end - start} ms`);
    expect(result.length).toBe(10_000);
    expect(end - start).toBeLessThan(10);
  });

  it("flattens deeply nested arrays efficiently", () => {
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

  it("removes duplicates from large arrays efficiently", () => {
    const input = Array.from({ length: 1_000_000 }, (_, i) => i % 10_000); // Repeated elements

    const start = performance.now();
    const result = uniqueArray(input);
    const end = performance.now();

    console.log(`uniqueArray processed 1,000,000 items in ${end - start} ms`);
    expect(result.length).toBe(10_000);
    expect(end - start).toBeLessThan(20);
  });
});

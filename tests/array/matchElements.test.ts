import { describe, expect, it } from "vitest";
import { matchElements } from "../../src/array";

describe("matchElements", () => {
  const objects = [
    { id: 1, fruit: "apple", color: "red" },
    { id: 2, fruit: "banana", color: "yellow" },
    { id: 3, fruit: "orange", color: "orange" },
    { id: 4, fruit: "apple", color: "green" },
    { id: 5, fruit: "grape", color: "purple" },
  ];

  it("returns matching unique objects", () => {
    const elements = ["apple", "banana", "orange"];
    const result = matchElements(elements, objects, "fruit");
    expect(result).toEqual([
      { id: 1, fruit: "apple", color: "red" },
      { id: 2, fruit: "banana", color: "yellow" },
      { id: 3, fruit: "orange", color: "orange" },
    ]);
  });

  it("returns an empty array if no matches are found", () => {
    const elements = ["peach", "mango"];
    const result = matchElements(elements, objects, "fruit");
    expect(result).toEqual([]);
  });

  it("handles duplicate elements in the input array", () => {
    const elements = ["apple", "apple", "banana"];
    const result = matchElements(elements, objects, "fruit");
    expect(result).toEqual([
      { id: 1, fruit: "apple", color: "red" },
      { id: 2, fruit: "banana", color: "yellow" },
    ]);
  });

  it("handles an empty objects array", () => {
    const elements = ["apple", "banana"];
    const result = matchElements(elements, [], "fruit");
    expect(result).toEqual([]);
  });

  it("handles an empty items array", () => {
    const elements: string[] = [];
    const result = matchElements(elements, objects, "fruit");
    expect(result).toEqual([]);
  });
});

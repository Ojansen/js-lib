import { describe, expect, it } from "vitest";
import { hasAllProperties } from "../../src";

describe("hasAllProperties", () => {
  it("should return true when all properties are defined", () => {
    const obj = { id: "1", name: "Alice", age: 30 };
    expect(hasAllProperties(obj)).toBe(true);
  });

  it("should return false when one or more properties are undefined", () => {
    const obj = { id: "1", name: undefined, age: 30 };
    expect(hasAllProperties(obj)).toBe(false);
  });

  it("should return true for an empty object", () => {
    const obj = {};
    expect(hasAllProperties(obj)).toBe(true);
  });

  it("should handle objects with optional properties", () => {
    type MaybeUser = {
      id: string;
      name?: string;
      age?: number;
    };

    const obj: MaybeUser = { id: "1", name: "Bob" };
    expect(hasAllProperties(obj)).toBe(true);
  });

  it("should handle nested objects", () => {
    const obj = {
      id: "1",
      details: {
        age: 30,
        city: undefined, // Nested undefined property
      },
    };
    expect(hasAllProperties(obj)).toBe(false);
  });

  it("should handle deeply nested objects", () => {
    const obj = {
      id: "1",
      details: {
        personal: {
          name: "Alice",
          contact: {
            email: "alice@example.com",
            phone: undefined, // Deeply nested undefined property
          },
        },
      },
    };
    expect(hasAllProperties(obj)).toBe(false);
  });
});

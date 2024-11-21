import { describe, expect, it } from "vitest";
import type { Concrete } from "../../src/types";

describe("Concrete<Type>", () => {
  it("ensures all properties are required", () => {
    type Example = { a?: number; b?: string };
    type ConcreteExample = Concrete<Example>;

    // Valid assignment
    const validObject: ConcreteExample = { a: 42, b: "test" };
    expect(validObject.a).toBe(42);
    expect(validObject.b).toBe("test");

    // @ts-expect-error: Missing required properties
    const invalidObject: ConcreteExample = { a: 42 }; // Should throw a TypeScript error
  });

  it("works with already concrete types", () => {
    type AlreadyConcrete = { a: number; b: string };
    type ConcreteAlreadyConcrete = Concrete<AlreadyConcrete>;

    const validObject: ConcreteAlreadyConcrete = { a: 1, b: "hello" };
    expect(validObject.a).toBe(1);
    expect(validObject.b).toBe("hello");
  });
});

import { describe, expect, it } from "vitest";
import { pick } from "../../src";

describe("pick", () => {
  it("should pick specified keys from an object", () => {
    const obj = { a: 1, b: 2, c: 3 };
    const result = pick(obj, ["a", "c"]);
    expect(result).toEqual({ a: 1, c: 3 });
  });

  it("should return an empty object if no keys match", () => {
    const obj = { a: 1, b: 2, c: 3 };
    // @ts-expect-error: 'x' and 'y' are not valid keys for this object
    const result = pick(obj, ["x", "y"]);
    expect(result).toEqual({});
  });

  it("should ignore keys that do not exist in the object", () => {
    const obj = { a: 1, b: 2 };
    // @ts-expect-error: 'x' is not a valid key for this object
    const result = pick(obj, ["a", "x"]);
    expect(result).toEqual({ a: 1 });
  });

  it("should work with an empty object", () => {
    const obj = {};
    // @ts-expect-error: 'a' is not a key in an empty object
    const result = pick(obj, ["a"]);
    expect(result).toEqual({});
  });

  it("should pick all keys when all are specified", () => {
    const obj = { a: 1, b: 2, c: 3 };
    const result = pick(obj, ["a", "b", "c"]);
    expect(result).toEqual({ a: 1, b: 2, c: 3 });
  });

  it("should work with different value types", () => {
    const obj = { id: 1, name: "Alice", active: true };
    const result = pick(obj, ["name", "active"]);
    expect(result).toEqual({ name: "Alice", active: true });
  });
});

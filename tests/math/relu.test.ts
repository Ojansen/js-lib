import { describe, expect, it } from "vitest";
import { relu } from "../../src";

describe("relu", () => {
  it("returns the input when it is positive", () => {
    expect(relu(5)).toBe(5);
  });

  it("returns zero when the input is zero", () => {
    expect(relu(0)).toBe(0);
  });

  it("returns zero when the input is negative", () => {
    expect(relu(-3)).toBe(0);
  });

  it("handles large positive numbers", () => {
    expect(relu(1e6)).toBe(1e6);
  });

  it("handles large negative numbers", () => {
    expect(relu(-1e6)).toBe(0);
  });
});

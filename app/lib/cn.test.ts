import { describe, expect, it } from "vitest";

import { cn } from "./cn";

describe("cn can merge classNames", () => {
  it("should merge two classNames", () => {
    const result = cn("foo", "bar");
    expect(result).toBe("foo bar");
  });

  it("should merge classNames with arrays", () => {
    const result = cn("foo", ["bar", "baz"]);
    expect(result).toBe("foo bar baz");
  });

  it("should merge classNames with objects", () => {
    const result = cn("foo", { bar: true, baz: false });
    expect(result).toBe("foo bar");
  });

  it("should merge classNames including tailwindcss classes", () => {
    const result = cn("text-lg", "font-bold");
    expect(result).toBe("text-lg font-bold");
  });

  it("should prefer later tailwindcss classes", () => {
    const result = cn("text-lg", "text-xl");
    expect(result).toBe("text-xl");
  });
});

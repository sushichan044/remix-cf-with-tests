import { describe, expect, it } from "vitest";

import { isInternalLink } from "../utils/url";

describe("isInternalLink", () => {
  it('should return true for internal links starting with "/"', () => {
    expect(isInternalLink("/about")).toBe(true);
    expect(isInternalLink("/contact")).toBe(true);
    expect(isInternalLink("/#section")).toBe(true);
  });

  it('should return true for internal links starting with "#"', () => {
    expect(isInternalLink("#section")).toBe(true);
    expect(isInternalLink("#anchor")).toBe(true);
  });

  it("should return true for internal links with the same origin", () => {
    expect(
      isInternalLink("https://example.com/about", "https://example.com"),
    ).toBe(true);
    expect(
      isInternalLink("https://example.com/contact", "https://example.com"),
    ).toBe(true);
  });

  it("should return false for external links", () => {
    expect(
      isInternalLink("https://example.com/about", "https://example.org"),
    ).toBe(false);
    expect(
      isInternalLink("https://example.com/contact", "https://example.org"),
    ).toBe(false);
  });

  it("should return false for external links without origin", () => {
    expect(isInternalLink("https://example.com/about")).toBe(false);
    expect(isInternalLink("https://example.com/contact")).toBe(false);
  });
});

import { describe, expect, it } from "vitest";

import { formatProp } from "./formatProp";

describe("formatProp", () => {
  it("preserve rel and target values for internal links", () => {
    const props = {
      origin: "https://example.com",
      rel: "nofollow",
      target: "_self",
      to: "/internal-link",
    };

    const result = formatProp(props);

    expect(result).toEqual({
      rel: "nofollow",
      target: "_self",
    });
  });

  it("adds correct rel and target for external links", () => {
    const props = {
      origin: "https://example.com",
      to: "https://external-link.com",
    };

    const result = formatProp(props);

    expect(result).toEqual({
      rel: "noopener noreferrer",
      target: "_blank",
    });
  });

  it("preserve rel values for external links", () => {
    const props = {
      origin: "https://example.com",
      rel: "nofollow",
      target: "_self",
      to: "https://external-link.com",
    };

    const result = formatProp(props);

    expect(result).toEqual({
      rel: "noopener noreferrer nofollow",
      target: "_blank",
    });
  });
});

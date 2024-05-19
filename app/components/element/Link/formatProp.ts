import { isInternalLink } from "@/utils/url";

import type { LinkProps } from "./index";

type FormatPropArg = Pick<LinkProps, "origin" | "rel" | "target" | "to">;
type FormatPropReturn = Pick<LinkProps, "rel" | "target">;

const formatProp = ({
  origin,
  rel,
  target,
  to,
}: FormatPropArg): FormatPropReturn => {
  if (typeof to !== "string" || isInternalLink(to, origin))
    return { rel, target };

  return {
    rel: "noopener noreferrer" + (rel ?? "" ? ` ${rel}` : ""),
    target: "_blank",
  };
};

export { formatProp };

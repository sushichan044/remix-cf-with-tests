import { Link as RemixLink } from "@remix-run/react";
import React from "react";

import { formatProp } from "./formatProp";

export interface LinkProps
  extends React.ComponentPropsWithoutRef<typeof RemixLink> {
  origin?: string | undefined;
}

const Link: React.FC<LinkProps> = ({
  children,
  className,
  origin,
  rel: relProp,
  target: targetProp,
  to: toProp,
  ...rest
}) => {
  const { rel, target } = formatProp({
    origin,
    rel: relProp,
    target: targetProp,
    to: toProp,
  });

  return (
    <RemixLink
      className={className}
      rel={rel}
      target={target}
      to={toProp}
      {...rest}
    >
      {children}
    </RemixLink>
  );
};

export default Link;

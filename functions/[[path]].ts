import type { ServerBuild } from "@remix-run/cloudflare";

import { createPagesFunctionHandler } from "@remix-run/cloudflare-pages";

// @ts-expect-error not defined before build
import * as build from "../build/server";

export const onRequest = createPagesFunctionHandler({
  build: build as ServerBuild,
});

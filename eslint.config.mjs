// eslint.config.mjs
import jsxA11y from "@virtual-live-lab/eslint-config/addons/jsxA11y";
import tailwind from "@virtual-live-lab/eslint-config/addons/tailwind";
import react from "@virtual-live-lab/eslint-config/presets/react";

import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: ["*.config.{js,cjs,mjs}"],
  },
  {
    extends: [...react, ...jsxA11y, ...tailwind],
    languageOptions: {
      parser: tseslint.parser,
    },
  },
);

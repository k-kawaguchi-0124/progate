import eslint from "@eslint/js";
import globals from "globals";
import prettierConfig from "eslint-config-prettier";

export default [
  {
    ignores: [
      "jest-global-setup.js",
      "jest-global-teardown.js",
      "jest.config.js",
      ".progate/**",
    ],
  },
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
  },
  eslint.configs.recommended,
  prettierConfig,
];

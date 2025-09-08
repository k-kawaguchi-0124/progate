import eslint from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import globals from "globals";

export default [
  {
    ignores: ["jest.config.js", ".progate/**"],
  },
  eslint.configs.recommended,
  {
    rules: {
      "no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
        },
      ],
    },
  },
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
  },
  prettierConfig,
];

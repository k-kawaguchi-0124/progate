import js from "@eslint/js";
import globals from "globals"; // 1
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  js.configs.recommended,
  eslintConfigPrettier,
  {
    languageOptions: {
      globals: {
        ...globals.node // 2
      },
    },
    rules: {
      "no-unused-vars": "warn"
    }
  },
];

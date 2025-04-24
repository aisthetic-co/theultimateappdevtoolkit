import js from "@eslint/js";
import perfectionist from "eslint-plugin-perfectionist";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  {
    ignores: ["src/const/httpStatus.ts", "src/const/index.ts", "dist/**"],
  },
  {
    extends: ["js/recommended"],
    files: ["**/*.{js,mjs,cjs,ts}"],
    plugins: { js },
  },
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
  perfectionist.configs["recommended-natural"],
]);

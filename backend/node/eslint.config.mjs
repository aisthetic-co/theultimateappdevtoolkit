import vitest from "@vitest/eslint-plugin";
import perfectionist from "eslint-plugin-perfectionist";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default defineConfig([
  {
    ignores: ["**/*.js", "eslint.config.mjs", "prettier.config.mjs"],
  },
  // TypeScript rules
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  tseslint.configs.recommended,
  // tseslint.configs.strictTypeChecked,
  // tseslint.configs.stylisticTypeChecked,

  // Perfectionist rules
  {
    ...perfectionist.configs["recommended-natural"],
    ignores: ["src/const/httpStatus.ts", "src/const/index.ts"],
  },

  // Vitest rules
  {
    files: ["**/*.test.ts", "**/*.spec.ts"],
    plugins: {
      vitest,
    },
    rules: {
      ...vitest.configs.recommended.rules,
      "@typescript-eslint/unbound-method": "off",
    },
  },

  //Other
  eslintConfigPrettier,
]);

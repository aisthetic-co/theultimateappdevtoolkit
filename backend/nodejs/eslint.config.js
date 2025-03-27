const globals = require("globals");
const js = require("@eslint/js");


module.exports = [
  {
    ignores: ["node_modules/", "dist/"], // Replace .eslintignore
  },
  {
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        ...globals.node
      }
    },
    rules: {
      ...js.configs.recommended.rules
    }
  }
];

import { Linter } from "eslint"; // eslint-disable-line @typescript-eslint/no-unused-vars
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";

/** @type {Linter.Config[]} */
export default [
  {
    languageOptions: {
      parser: typescriptParser,
      sourceType: "module",
    },
    plugins: {
      "@typescript-eslint": typescriptPlugin,
    },
    files: ["**/*.js", "**/*.mjs", "**/*.ts", "**/*.tsx"],
    rules: {
      "semi": ["error", "always"],
      "quotes": ["error", "double"],
      "no-unused-vars": "off",
      "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
      "no-trailing-spaces": ["error"],
      "comma-dangle": ["error", "always-multiline"],
      "@typescript-eslint/no-unused-vars": ["error"],
      "@typescript-eslint/no-explicit-any": ["error"],
    },
    ignores: ["*/out/**", "*/.next/**", "*/cdk.out/**", "**/*.d.ts"],
  },
];
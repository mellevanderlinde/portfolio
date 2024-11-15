import _import from "eslint-plugin-import";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import prettier from "eslint-plugin-prettier";
import { fixupPluginRules } from "@eslint/compat";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ),
  {
    plugins: {
      import: fixupPluginRules(_import),
      "@typescript-eslint": typescriptEslint,
      prettier,
    },
    languageOptions: {
      parser: tsParser,
    },
    rules: {
      "prettier/prettier": ["error"],
      "capitalized-comments": ["error"],
      "spaced-comment": ["error"],
      "import/newline-after-import": ["error"],
    },
  },
];

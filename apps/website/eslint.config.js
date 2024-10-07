import { eslintConfig } from "@repo/eslint-config/eslint.config.js";

export default [
  ...eslintConfig,
  {
    ignores: ["**/.next/**", "**/out/**"],
  },
];

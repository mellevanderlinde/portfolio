import { eslintConfig } from "@repo/eslint-config/eslint.config.mjs";

export default [
  ...eslintConfig,
  { ignores: ["**/cdk.out/**", "src/index.js", "**/*.d.ts"] },
];

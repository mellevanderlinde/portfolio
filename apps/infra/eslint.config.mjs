import config from "@repo/eslint-config/eslint.config.mjs";

export default [
  ...config,
  { ignores: ["**/cdk.out/**", "src/index.js", "**/*.d.ts"] },
];

import config from "@repo/eslint-config/eslint.config.mjs";

export default [
  ...config,
  {
    ignores: ["**/.next/**", "**/out/**", "**/*.d.ts"],
  },
];

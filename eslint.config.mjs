import antfu from '@antfu/eslint-config'

export default antfu(
  {
    typescript: true,
    react: true,
    rules: { 'no-new': 'off' },
  },
  {
    ignores: ['**/cdk.out', 'apps/infra/**/*.js', 'apps/infra/**/*.d.ts', 'apps/website/out/**'],
  },
)

import antfu from '@antfu/eslint-config'

export default antfu(
  {
    typescript: true,
    rules: { 'no-new': 'off' },
    react: true,
  },
  {
    ignores: ['**/cdk.out', 'apps/infra/**/*.js', 'apps/infra/**/*.d.ts'],
  },
)

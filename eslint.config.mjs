import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: true,
  react: true,
  rules: { 'no-new': 'off' },
  ignores: ['**/cdk.out', '**/out', 'apps/infra/src/index.js'],
})

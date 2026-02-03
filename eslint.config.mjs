import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: true,
  react: true,
  rules: {
    'no-new': 'off',
    'curly': 'error',
    'import/first': ['error', 'absolute-first'],
    'ts/consistent-type-imports': ['error', { prefer: 'no-type-imports' }],
    'pnpm/yaml-enforce-settings': 'off',
  },
  ignores: ['**/cdk.out', '**/out', '**/*.js'],
})

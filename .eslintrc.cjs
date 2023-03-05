module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'prettier', 'plugin:node/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'commonjs',
  },
  rules: {
    'unicorn/no-array-reduce': 'off',
    'prettier/prettier': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'node/no-unsupported-features/es-syntax': ['error'],
    'unused-imports/no-unused-imports': 'error',
  },
  settings: {
    node: {
      tryExtensions: ['.js', '.json', '.node', '.ts'],
    },
  },

  plugins: ['prettier', 'unused-imports', 'simple-import-sort', 'import'],
}
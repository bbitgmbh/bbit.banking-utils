module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    '@typescript-eslint/no-parameter-properties': 0,
    '@typescript-eslint/no-explicit-any': 0,
    quotes: [2, 'single', 'avoid-escape'],
  },
};

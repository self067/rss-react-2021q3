module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'airbnb',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'react', 'prettier', 'react-hooks'],
  env: {
    browser: true,
    es2021: true,
    es6: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },

  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    'no-use-before-define': [
      'error',
      { functions: false, classes: false, variables: false },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

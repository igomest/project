module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:jest/recommended',
    'prettier',

  ],
  plugins: ['react-hooks', 'react-refresh'],
  "extends": ["plugin:import/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    "react-refresh/only-export-components": "warn",
    "no-unused-vars": "off",
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    curly: 'error',
    '@typescript-eslint/no-unused-vars': 'off', // Imports of interfaces throw this.
    'react/jsx-one-expression-per-line': 0,
  },
  settings: {
    react: {
      version: 'detect',
    },
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  ignorePatterns: ['node_modules/', 'src/registerServiceWorker.ts'],
};

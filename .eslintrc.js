module.exports = {
  root: true,
  env: {
    "browser": true,
  },
  parser: "babel-eslint",
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true,
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: '16.12.0'
    }
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  plugins: [
    "prettier",
    "react",
    "react-hooks"
  ],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    curly: [2, 'all'],
    camelcase: ['warn'],
    eqeqeq: ['warn'],
    'no-unused-vars': ['warn'],
    semi: ['error', 'always'],
    'prefer-const': 2,
    'react/display-name': ['warn'],
    'react/no-string-refs': ['warn'],
    'react/prop-types': 0,
    'no-tabs': ['warn'],
    indent: ['error', 2, { SwitchCase: 1 }],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'comma-dangle': ['error', 'never'],
    radix: ['warn', 'as-needed'],
    quotes: [
      'warn',
      'single',
      { allowTemplateLiterals: true, avoidEscape: true }
    ],
    'no-extra-semi': 'error',
    'no-shadow': 'off',
    indent: 'off',
    'react-native/no-inline-styles': 'off',
    'standard/computed-property-even-spacing': 'off',
    'standard/no-callback-literal': 'off'
  }
};

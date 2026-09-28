import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-config-prettier';

export default [
  { ignores: ['dist', 'dist-ssr', 'playwright-report', 'test-results'] },
  js.configs.recommended,
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  reactHooks.configs.flat.recommended,
  jsxA11y.flatConfigs.recommended,
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.browser },
    },
    settings: { react: { version: 'detect' } },
    rules: {
      'react/prop-types': 'off',
    },
  },
  // Build scripts and config files run in Node.
  {
    files: ['scripts/**/*.js', '*.config.js', 'tests/**/*.js'],
    languageOptions: { globals: { ...globals.node } },
  },
  // Turns off style rules that Prettier handles; keep last.
  prettier,
];

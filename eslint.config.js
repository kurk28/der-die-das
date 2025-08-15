import js from '@eslint/js';
import solid from 'eslint-plugin-solid/configs/recommended';
import html from '@html-eslint/eslint-plugin';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  js.configs.recommended,
  solid,
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    plugins: {
      html,
    },
    rules: {
      'no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
  },
  {
    files: ['**/*.html'],
    plugins: {
      html,
    },
    language: 'html/html',
    languageOptions: {
      templateEngineSyntax: {
        '{{': '}}',
      },
    },
    rules: {
      'html/require-img-alt': 'error',
    },
  },
]);

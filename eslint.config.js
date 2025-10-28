import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import css from '@eslint/css';
import html from '@html-eslint/eslint-plugin';
import json from '@eslint/json';
import markdown from '@eslint/markdown';

import { globalIgnores } from 'eslint/config';

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2024,
      globals: globals.browser,
    },
  },
  eslintConfigPrettier,
  {
    files: ['**/*.css'],
    plugins: {
      css,
    },
    language: 'css/css',
    rules: {
      ...css.configs.recommended.rules,
    },
  },
  {
    ...html.configs['flat/recommended'],
    files: ['**/*.html'],
    rules: {
      ...html.configs['flat/recommended'].rules,
      '@html-eslint/indent': 'off',
      '@html-eslint/attrs-newline': 'off',
      '@html-eslint/require-closing-tags': ['error', { selfClosing: 'always' }],
      '@html-eslint/no-extra-spacing-attrs': [
        'error',
        { enforceBeforeSelfClose: true },
      ],
    },
  },
  {
    files: ['**/*.json'],
    plugins: {
      json,
    },
    language: 'json/json',
    ignores: ['**/package-lock.json'],
    rules: {
      ...json.configs.recommended.rules,
    },
  },
  {
    files: ['**/tsconfig.json'],
    plugins: {
      json,
    },
    language: 'json/jsonc',
    rules: {
      ...json.configs.recommended.rules,
    },
  },
  {
    files: ['**/*.md'],
    plugins: {
      markdown,
    },
    language: 'markdown/gfm',
    rules: {
      ...markdown.configs.recommended.rules,
    },
  },
]);

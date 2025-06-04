import storybook from 'eslint-plugin-storybook';
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import nextPlugin from '@next/eslint-plugin-next';
import tseslint from 'typescript-eslint';
import tailwindcssPlugin from 'eslint-plugin-better-tailwindcss';

export default tseslint.config(
  {
    ignores: [
      'dist',
      'storybook-static',
    ],
  },
  {
    files: [
      '**/*.{js,mjs,ts,tsx}',
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@next/next': nextPlugin,
      'better-tailwindcss': tailwindcssPlugin,
    },
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
    ],
    rules: {
      ...reactHooks.configs.recommended.rules,
      semi: [
        'error',
        'always',
      ],
      'quotes': [
        'error',
        'single',
        {
          avoidEscape: true,
        },
      ],
      indent: [
        'error',
        2,
      ],
      'comma-dangle': [
        'error',
        'always-multiline',
      ],
      'no-multiple-empty-lines': [
        'error',
        {
          max: 1,
          maxEOF: 0,
        },
      ],
      'object-curly-newline': [
        'error',
        {
          ObjectExpression: {
            multiline: true,
            minProperties: 1,
          },
          ObjectPattern: {
            multiline: true,
            minProperties: 1,
          },
          ImportDeclaration: {
            multiline: true,
            minProperties: 1,
          },
          ExportDeclaration: {
            multiline: true,
            minProperties: 1,
          },
        },
      ],
      'object-property-newline': [
        'error',
        {
          allowAllPropertiesOnSameLine: false,
        },
      ],
      'function-paren-newline': [
        'error',
        'multiline-arguments',
      ],
      'array-element-newline': [
        'error',
        'always',
      ],
      'array-bracket-newline': [
        'error',
        'always',
      ],
      'no-trailing-spaces': 'error',
      'react-refresh/only-export-components': [
        'warn',
        {
          allowConstantExport: true,
        },
      ],
      'react-refresh/only-export-components': 'off',
      ...nextPlugin.configs['core-web-vitals'].rules,
      '@next/next/no-html-link-for-pages': 'off',
      ...tailwindcssPlugin.configs['recommended'].rules,
    },
    settings: {
      'better-tailwindcss': {
        'entryPoint': './src/index.css',
      },
    },
  },
  storybook.configs['flat/recommended'],
);

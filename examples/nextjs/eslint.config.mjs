import {
  dirname,
} from 'path';
import {
  fileURLToPath,
} from 'url';
import {
  FlatCompat,
} from '@eslint/eslintrc';
import tailwindcssPlugin from 'eslint-plugin-better-tailwindcss';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
  ),
  {
    plugins: {
      'better-tailwindcss': tailwindcssPlugin,
    },
    rules: {
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
      ...tailwindcssPlugin.configs['recommended'].rules,
    },
    settings: {
      'better-tailwindcss': {
        'entryPoint': 'eslint.css',
      },
    },
  },
];

export default eslintConfig;

import typescriptEslintParser from '@typescript-eslint/parser';
import typescriptEslint from '@typescript-eslint/eslint-plugin';

import typescriptRule from './rules/typescript.js';

export default [
  {
    files: ['**/*.@(ts|tsx|cts|mts)'],

    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        ecmaVersion: 2023,
        project: ['./**/tsconfig.json'],
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslint,
    },
  },
  /** Rules */
  typescriptRule,
];

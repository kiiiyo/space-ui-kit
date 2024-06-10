import js from '@eslint/js';
import globals from 'globals';

import bestPracticesRule from './rules/best-practices.js';

export default [
  {
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2020,
        ...globals.node,
      },
    },
  },

  js.configs.recommended,
  bestPracticesRule,
];

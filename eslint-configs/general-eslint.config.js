import js from '@eslint/js';
import globals from 'globals';

import bestPracticesRule from './rules/best-practices.js';
import errorsRule from './rules/errors.js';
import es6Rule from './rules/es6.js';
import importsRule from './rules/imports.js';
import nodeRule from './rules/node.js';
import styleRule from './rules/style.js';
import variablesRule from './rules/variables.js';

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
  errorsRule,
  es6Rule,
  importsRule,
  nodeRule,
  styleRule,
  variablesRule,
];

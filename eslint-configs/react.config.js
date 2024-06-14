import esLintPluginReact from 'eslint-plugin-react';
import esLintPluginReactRefresh from 'eslint-plugin-react-refresh';
import esLintPluginReactHooks from 'eslint-plugin-react-hooks';

import jsxA11yRule from './rules/jsx-a11y.js';
import reactHooksRule from './rules/react-hooks.js';
import reactRule from './rules/react.js';

export default [
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      react: esLintPluginReact,
      'react-refresh': esLintPluginReactRefresh,
      'react-hooks': esLintPluginReactHooks,
    },
    /** Rules */
    rules: {
      // FIXME:
      'react-refresh/only-export-components': ['off', { allowConstantExport: true }],
    },
    settings: {
      react: {
        pragma: 'React',
        version: 'detect',
      },
      propWrapperFunctions: [
        'forbidExtraProps', // https://www.npmjs.com/package/airbnb-prop-types
        'exact', // https://www.npmjs.com/package/prop-types-exact
        'Object.freeze', // https://tc39.github.io/ecma262/#sec-object.freeze
      ],
    },
  },

  reactRule,
  reactHooksRule,
  jsxA11yRule,
];

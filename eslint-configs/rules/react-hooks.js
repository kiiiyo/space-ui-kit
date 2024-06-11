// @ts-check

/**
 * Note: The following code is used as a reference.
 * @see {@link https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/rules/react-hooks.js}
 */

import reactHooks from 'eslint-plugin-react-hooks';

export default {
  plugins: {
    'react-hooks': reactHooks,
  },

  rules: {
    // Enforce Rules of Hooks
    // https://github.com/facebook/react/blob/c11015ff4f610ac2924d1fc6d569a17657a404fd/packages/eslint-plugin-react-hooks/src/RulesOfHooks.js
    'react-hooks/rules-of-hooks': 'error',

    // Verify the list of the dependencies for Hooks like useEffect and similar
    // https://github.com/facebook/react/blob/1204c789776cb01fbaf3e9f032e7e2ba85a44137/packages/eslint-plugin-react-hooks/src/ExhaustiveDeps.js
    'react-hooks/exhaustive-deps': 'error',
  },
};
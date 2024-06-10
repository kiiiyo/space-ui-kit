import esLintPluginReact from 'eslint-plugin-react';
import esLintPluginReactRefresh from 'eslint-plugin-react-refresh';
import esLintPluginReactHooks from 'eslint-plugin-react-hooks';

export default [
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      react: esLintPluginReact,
      'react-refresh': esLintPluginReactRefresh,
      'react-hooks': esLintPluginReactHooks,
    },
    rules: {
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
  },
];

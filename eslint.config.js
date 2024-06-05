import js from '@eslint/js';
import globals from 'globals';

import typescriptEslintParser from '@typescript-eslint/parser';

/* FIXME: Move eslint-configs directory */
import typescriptEslint from '@typescript-eslint/eslint-plugin';

/* FIXME: Move eslint-configs directory */
import esLintPluginReact from 'eslint-plugin-react';
import esLintPluginReactRefresh from 'eslint-plugin-react-refresh';
import esLintPluginReactHooks from 'eslint-plugin-react-hooks';

/* FIXME: Move eslint-configs directory */
import esLintPluginTailwindCss from 'eslint-plugin-tailwindcss';

export default [
  {
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2020,
        ...globals.node,
      },
      parser: typescriptEslintParser,
      parserOptions: {
        ecmaVersion: 2023,
        project: ['./**/tsconfig.json'],
      },
    },
  },

  /* Ignores */
  {
    ignores: [
      'dist',
      'eslint-configs/*',
      'eslint.config.js',
      'prettier.config.js',
      'lint-staged.config.cjs',
      'commitlint.config.cjs',
      'postcss.config.js',
      'tailwind.config.js',
      'stylelint.config.mjs',
      'vite.config.ts',
    ],
  },

  /* ESLint */
  js.configs.recommended,

  /* Typescript */
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      '@typescript-eslint': typescriptEslint,
    },
  },

  /* React */
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

  /* Tailwind CSS */
  ...esLintPluginTailwindCss.configs['flat/recommended'],
];

import {
  generalESLintConfig,
  typescriptConfig,
  reactConfig,
  tailwindCssConfig,
  storybookConfig,
} from './eslint-configs/index.js';

export default [
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
      '.storybook/*',
      'storybook-static/*',
      'vite.config.ts',
    ],
  },

  /* ESLint */
  ...generalESLintConfig,

  /* Typescript */
  ...typescriptConfig,

  /* React */
  ...reactConfig,

  /* Tailwind CSS */
  ...tailwindCssConfig,

  /* Storybook */
  ...storybookConfig,
];

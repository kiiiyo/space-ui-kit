// @ts-check
// @ts-ignore
import importPlugin from 'eslint-plugin-import';
import * as eslintPluginStorybook from 'eslint-plugin-storybook';

export default [
  {
    files: ['**/*.@(stories|story).@(ts|tsx|js|jsx|mjs|cjs)'],
    plugins: {
      storybook: eslintPluginStorybook,
      import: importPlugin,
    },
    rules: {
      ...eslintPluginStorybook.configs.recommended.overrides[0].rules,
      ...eslintPluginStorybook.configs['csf-strict'].rules,
      'import/no-default-export': ['off'],
      'storybook/no-title-property-in-meta': ['off'],
    },
  },

  {
    files: ['**/.storybook/**/*.@(ts|tsx|js|jsx|mjs|cjs)'],
    plugins: {
      storybook: eslintPluginStorybook,
      import: importPlugin,
    },
    rules: {
      ...eslintPluginStorybook.configs.recommended.overrides[1].rules,
      'import/no-default-export': ['off'],
    },
  },
];

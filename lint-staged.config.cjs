module.exports = {
  './**/*.{js,cjs,ts,tsx}': ['prettier -c', 'eslint'],
  './**/*.{ts,tsx}': ['stylelint --cache'],
  './**/*.md': ['prettier -c'],
};

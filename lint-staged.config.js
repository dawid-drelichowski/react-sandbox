/**
 * @type { import('lint-staged').Configuration }
 */
const config = {
  '*.{js,ts,tsx,css,json,md}': ['eslint --fix', 'prettier --write'],
  '*.yml': ['prettier --write'],
};

export default config;

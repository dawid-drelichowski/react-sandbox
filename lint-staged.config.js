//import type { Configuration } from 'lint-staged'

const config /*: Configuration*/ = {
  '*.{js,ts,tsx,css,json,md}': ['eslint --fix', 'prettier --write'],
  '*.{yml}': ['prettier --write'],
};

export default config;

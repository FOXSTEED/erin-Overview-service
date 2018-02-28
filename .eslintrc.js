/**
 * These rules enforce the Hack Reactor Style Guide
 *
 * Visit this repo for more information:
 *   https://github.com/reactorcore/eslint-config-hackreactor
 * './node_modules/eslint-config-hackreactor/index.js'
 */

module.exports = {
  extends: 'airbnb',
  rules: {
    'no-console': 'off',
    'import/extensions': 'always',
    'react/forbid-prop-types': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
  },
  env: {
    "browser": true,
    "node": true
  }
};
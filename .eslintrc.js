module.exports = {
  "parserOptions": {
    "parser": "@babel/eslint-parser",
    "requireConfigFile": false,
    "ecmaVersion": 6
  },
  "extends": ["plugin:vue/base"],
  "env": {
    "browser": true,
    "amd": true,
    "node": true
},
  "rules": {
    "no-undef": 1,
    "no-console": 1,
    "semi": [1, "always"],
    "comma-dangle": [1, "never"],
    "complexity": [1, 10],
    "max-statements": [1, 10],
    "max-depth": [1, 3],
    "max-len": [1, {
      "code": 100,
      "ignoreComments": true,
      "ignoreStrings": true,
      "ignoreTemplateLiterals": true,
      "ignoreTrailingComments": true,
      "ignoreUrls": true
    }],
    "no-param-reassign": [1, { "props": false }],
    "no-underscore-dangle": [1, {
      "allow": ["_svc", "_svd", "_sva", "_destroy"]
    }],
    "quote-props": 0,
    "brace-style": [1, "stroustrup"]
  }
};
module.exports = {
    env: {
      node: true,
    },
    extends: [
      "eslint:recommended",
      'plugin:react/recommended',
    ],
    parser: "@babel/eslint-parser",
    rules: {
      "react/react-in-jsx-scope": "off",
      "indent":["error", 4],
      "semi":["error", "never"],
      "react/no-unknown-property":"off",
      "no-undef":"off",
      "space-in-parens": ["error", "never"],
      "no-alert": "error",
      "react/prop-types": "off",
      "react/no-unescaped-entities": "off"
    }
  }
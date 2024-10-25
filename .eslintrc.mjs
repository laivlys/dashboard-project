export default {
  extends: ["eslint:recommended", "google"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  env: {
    browser: true,
    es6: true,
  },
  ignorePatterns: ["examples/**/*.js"],
  globals: {
    L: "readonly",
    d3: "readonly",
  },
  rules: {
    indent: ["error", 2, { VariableDeclarator: 1 }],
    "max-len": "off",
    "object-curly-spacing": "off",
    "operator-linebreak": [
      "error",
      "after",
      { overrides: { "?": "ignore", ":": "ignore" } },
    ],
    "require-jsdoc": "off",
  },
};

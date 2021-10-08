module.exports = {
  extends: [
    "plugin:@typescript-eslint/all",
    "plugin:functional/recommended",
    "prettier",
    "eslint-config-praneet/lib/common",
  ],
  plugins: [
    "@typescript-eslint",
    "functional",
    "prettier",
    "sort-imports-es6-autofix",
    "sort-keys-fix",
    "sort-destructure-keys",
  ],
  rules: {
    "no-unused-vars": [
      "error",
      { argsIgnorePattern: "impossible", varsIgnorePattern: "React" },
    ],
    "sort-keys-fix/sort-keys-fix": "error",
  },
};

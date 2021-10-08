module.exports = {
  extends: ["eslint-config-praneet/index"],
  rules: {
    "no-use-before-define": "off", // Handled by @typescript-eslint/no-use-before-define
    "arrow-parens": "off", // Handled by prettier
    "no-useless-constructor": "off", // Handled by @typescript-eslint/no-useless-constructor

    // Sorting
    "sort-imports-es6-autofix/sort-imports-es6": "error",
    "prefer-template": "error",
    "symbol-description": "error",
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "return" }, // replaces newline-before-return
      { blankLine: "never", prev: "import", next: "import" },
    ],
    // Sorting
    "sort-keys-fix/sort-keys-fix": "error",
    "sort-imports-es6-autofix/sort-imports-es6": "error",
    "sort-destructure-keys/sort-destructure-keys": "error",
    // TypeScript
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    "@typescript-eslint/consistent-type-imports": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-magic-numbers": "off",
    "@typescript-eslint/no-type-alias": "off",
    "@typescript-eslint/prefer-readonly-parameter-types": "off",
    "@typescript-eslint/promise-function-async": "off",
    "@typescript-eslint/strict-boolean-expressions": [
      "error",
      { allowString: false, allowNumber: false, allowNullableObject: false },
    ],
    // Functional
    "functional/functional-parameters": "off",
    "functional/no-conditional-statement": "off",
    "functional/no-expression-statement": "off",
    "functional/no-mixed-type": "off",
    "functional/no-return-void": "off",
    "functional/no-throw-statement": "off",
    "functional/no-try-statement": "off",
    // Prettier
    "prettier/prettier": "error",
  },
};

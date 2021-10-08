# ESLint (and Prettier) config

[![npm version](https://badge.fury.io/js/eslint-config-praneet.svg)](https://badge.fury.io/js/eslint-config-praneet) ![NPM downloads](https://img.shields.io/npm/dm/eslint-config-praneet)

## What it does

This setup lints your JavaScript code based on practices. Check the [.eslintrc.js](https://github.com/praneetc/eslint-config-merit/blob/main/.eslintrc.js) file to see what is included. Feel free to override the rules that make sense for you.

## Installing

1. In your project folder, run:

```
npx install-peerdeps --dev eslint-config-praneet
```

2. You will see several dependencies were installed. Now, create (or update) a `.eslintrc` file with the following content:

```js
{
  'extends': [
    'praneet'
  ]
}
```

This repository is inspired by [eslint-config-wesbos](https://github.com/wesbos/eslint-config-wesbos).

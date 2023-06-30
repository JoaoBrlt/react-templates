# React + TypeScript + Webpack + Babel + ts-loader

## Generate

### Skeleton

- Create the project directory:

```bash
mkdir [project-name] && cd [project-name]
```

- Initialize the project:

```bash
npm init
```

- Install React dependencies:

```bash
npm install react react-dom
```

- Install TypeScript dependencies:

```bash
npm install --save-dev typescript @types/react @types/react-dom
```

- Initialize the TypeScript configuration:

```bash
npx tsc --init
```

- Update the TypeScript configuration as desired:

```bash
nano tsconfig.json
```

### Testing

- Install Jest dependencies:

```bash
npm install --save-dev jest jest-environment-jsdom @types/jest ts-jest identity-obj-proxy jest-watch-typeahead
```

- Install React Testing Library dependencies:

```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

- Create a config folder for Jest:

```bash
mkdir -p config/jest
```

- Create a Jest transformer for stylesheets:

```bash
nano config/jest/cssTransform.js
```

```js
// This is a custom Jest transformer turning style imports into empty objects.
// See https://jestjs.io/docs/webpack

module.exports = {
  process() {
    return {
      code: `module.exports = {};`,
    };
  },
  getCacheKey() {
    // The output is always the same.
    return "cssTransform";
  },
};
```

- Create a Jest transformer for files:

```bash
nano config/jest/fileTransform.js
```

```js
const path = require("path");

// This is a custom Jest transformer turning file imports into filenames.
// See https://jestjs.io/docs/webpack

module.exports = {
  process(sourceText, sourcePath) {
    return {
      code: `module.exports = ${JSON.stringify(path.basename(sourcePath))};`,
    };
  },
};
```

- Create the Jest configuration:

```bash
nano jest.config.js
```

- Update the `package.json` file to add new scripts:

```bash
nano package.json
```

```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  }
}
```

### Bundling

- Install Webpack dependencies:

```bash
npm install --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin copy-webpack-plugin
```

- Install Webpack loaders and plugins for CSS / SCSS files:

```bash
npm install --save-dev style-loader css-loader sass-loader sass mini-css-extract-plugin css-minimizer-webpack-plugin
```

- Install the Babel loader and presets for JavaScript files:

```bash
npm install --save-dev babel-loader @babel/core @babel/preset-env @babel/preset-react
```

- Create the Babel configuration and enable the presets:

```bash
nano .babelrc.json
```

```json
{
  "presets": [
    "@babel/preset-env",
    [
      "@babel/preset-react",
      {
        "runtime": "automatic"
      }
    ]
  ]
}
```

- Install the TypeScript loader and a plugin to perform type checking
  asynchronously:

```bash
npm install --save-dev ts-loader fork-ts-checker-webpack-plugin
```

- Install the React Refresh Webpack plugin to enable Hot Module Replacement (
  HMR) for React:

```bash
npm install --save-dev @pmmmwh/react-refresh-webpack-plugin react-refresh
```

- Create the Webpack configuration:

```bash
nano webpack.config.js
```

- Install `rimraf` to build cross-platform compatible scripts:

```bash
npm install --save-dev rimraf
```

- Update the `package.json` file to add new scripts and the browserslist:

```bash
nano package.json
```

```json
{
  "scripts": {
    "clean": "rimraf dist/ coverage/",
    "start": "webpack serve",
    "watch": "webpack --watch",
    "build": "npm run build:prod",
    "build:dev": "webpack --mode=development",
    "build:prod": "webpack --mode=production --node-env=production"
  }
}
```

<!-- prettier-ignore -->
```json
{
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```

### Linting

#### Prettier

- Install Prettier to enforce code style:

```bash
npm install --save-dev prettier
```

- Create the Prettier configuration:

```bash
nano .prettierrc.json
```

```json
{
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": false
}
```

- Update the `package.json` file to add new scripts:

```bash
nano package.json
```

```json
{
  "scripts": {
    "prettier": "prettier --check .",
    "prettier:fix": "prettier --write ."
  }
}
```

#### ESLint

- Install ESLint to lint JavaScript / TypeScript files:

```bash
npm init @eslint/config
```

```bash
✔ How would you like to use ESLint? · [To check syntax and find problems]
✔ What type of modules does your project use? · [JavaScript modules (import/export)]
✔ Which framework does your project use? · [React]
✔ Does your project use TypeScript? · No / [Yes]
✔ Where does your code run? · [Browser]
✔ What format do you want your config file to be in? · [JSON]

The config that you've selected requires the following dependencies:
@typescript-eslint/eslint-plugin@latest eslint-plugin-react@latest @typescript-eslint/parser@latest eslint@latest

✔ Would you like to install them now? · No / [Yes]
✔ Which package manager do you want to use? · [npm]
```

- Integrate Prettier with ESLint:

```bash
npm install --save-dev eslint-config-prettier
```

- Install ESLint plugins for React:

```bash
npm install --save-dev eslint-plugin-react-hooks eslint-plugin-jsx-a11y
```

- Install ESLint plugins for Jest and Testing Library:

```bash
npm install --save-dev eslint-plugin-jest eslint-plugin-jest-dom eslint-plugin-testing-library
```

- Update the ESLint configuration to extend recommended configurations and
  enable the plugins:

```bash
nano .eslintrc.json
```

- Update the `package.json` file to add new scripts:

```bash
nano package.json
```

```json
{
  "scripts": {
    "eslint": "eslint .",
    "eslint:fix": "eslint --fix ."
  }
}
```

#### Stylelint

- Install Stylelint to lint stylesheets:

```bash
npm install --save-dev stylelint stylelint-config-standard-scss
```

- Create the Stylelint configuration:

```bash
nano .stylelintrc.json
```

```json
{
  "extends": ["stylelint-config-standard-scss"]
}
```

- Update the `package.json` file to add new scripts:

```bash
nano package.json
```

```json
{
  "scripts": {
    "stylelint": "stylelint **/*.{css,scss}",
    "stylelint:fix": "stylelint --fix **/*.{css,scss}"
  }
}
```

### _(Optional)_ Git Hooks

- Install `lint-staged` to lint staged files:

```bash
npm install --save-dev lint-staged
```

- Create the `lint-staged` configuration:

```json
{
  "*": "prettier --write --ignore-unknown",
  "*.{js,jsx,ts,tsx}": "eslint --fix",
  "*.{css,scss}": "stylelint --fix"
}
```

> This will run Prettier on all supported files, ESLint on JavaScript /
> TypeScript
> files and Stylelint on CSS / SCSS files.

- Install Husky to add git hooks:

```bash
npx husky-init && npm install
```

- Remove the default `pre-commit` hook:

```bash
rm .husky/pre-commit
```

- Add a `pre-commit` hook to run `lint-staged` every time you commit:

```bash
npx husky add .husky/pre-commit "npx lint-staged"
```

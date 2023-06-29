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
nano .babelrc
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

- Install the TypeScript loader and a plugin to perform type checking asynchronously:

```bash
npm install --save-dev ts-loader fork-ts-checker-webpack-plugin
```

- Install the React Refresh Webpack plugin to enable Hot Module Replacement (HMR) for React:

```bash
npm install --save-dev @pmmmwh/react-refresh-webpack-plugin react-refresh
```

- Create the Webpack configuration:

```bash
nano webpack.config.js
```

- Install `cross-env` to build cross-platform compatible scripts:

```bash
npm install --save-dev cross-env
```

- Update the `package.json` file to add new scripts and the browserslist:

```bash
nano package.json
```

```json
{
  "scripts": {
    "start": "cross-env NODE_ENV=development webpack serve",
    "build": "npm run build:prod",
    "build:dev": "cross-env NODE_ENV=development webpack",
    "build:prod": "cross-env NODE_ENV=production webpack"
  }
}
```

```json
{
  "browserslist": {
    "production": [">0.2%", "not dead", "not op_mini all"],
    "development": ["last 1 chrome version", "last 1 firefox version", "last 1 safari version"]
  }
}
```

### Linting

- Install ESLint to lint the code:

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

- Install additional ESLint plugins:

```bash
npm install --save-dev eslint-plugin-react-hooks
```

- Install Prettier to enforce code style:

```bash
npm install --save-dev prettier
```

- Initialize the Prettier configuration:

```bash
echo {} > .prettierrc
```

- Integrate Prettier with ESLint:

```bash
npm install --save-dev eslint-config-prettier
```

- Update the ESLint configuration to extend recommended configurations and enable the plugins:

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
    "lint": "eslint --ext .tsx,.ts,.jsx,.js src/",
    "lint:fix": "npm run lint -- --fix",
    "format": "prettier --check .",
    "format:fix": "prettier --write ."
  }
}
```

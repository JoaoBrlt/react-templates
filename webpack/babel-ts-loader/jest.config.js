module.exports = {
  roots: ["<rootDir>/src"],
  testEnvironment: "jsdom",
  testMatch: ["<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}", "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!src/**/*.d.ts"],
  transform: {
    // JavaScript
    "\\.(js|jsx)$": "babel-jest",

    // TypeScript
    "\\.(ts|tsx)$": "ts-jest",

    // CSS / SCSS
    "\\.(css|scss)$": "<rootDir>/config/jest/cssTransform.js",

    // Assets
    "^(?!.*.(js|jsx|ts|tsx|css|scss|json)$)": "<rootDir>/config/jest/fileTransform.js",
  },
  transformIgnorePatterns: ["/node_modules/", "\\.module\\.(css|scss)$"],
  modulePaths: [],
  moduleNameMapper: {
    // CSS / SCSS modules
    "\\.module\\.(css|scss)$": "identity-obj-proxy",
  },
  moduleFileExtensions: ["tsx", "ts", "jsx", "js", "json", "node"],
  watchPlugins: ["jest-watch-typeahead/filename", "jest-watch-typeahead/testname"],
  resetMocks: true,
};

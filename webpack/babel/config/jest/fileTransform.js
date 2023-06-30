"use strict";

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

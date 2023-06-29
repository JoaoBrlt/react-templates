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

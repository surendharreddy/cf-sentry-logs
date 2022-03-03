const { EnvironmentPlugin } = require("webpack");

module.exports = {
  target: "webworker",
  entry: "./index.js",
  plugins: [new EnvironmentPlugin(["ENVIRONMENT"])],
};

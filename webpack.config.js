const { EnvironmentPlugin } = require("webpack");
const SentryWebpackPlugin = require("@sentry/webpack-plugin");

module.exports = {
  target: "webworker",
  entry: "./index.js",
  devtool: "hidden-source-map",
  plugins: [
    new EnvironmentPlugin(["ENVIRONMENT", "SENTRY_DSN", "SENTRY_RELEASE"]),
    new SentryWebpackPlugin({
      authToken: process.env.SENTRY_AUTH_TOKEN,
      org: process.env.SENTRY_ORG,
      project: process.env.SENTRY_PROJECT,
      release: process.env.SENTRY_RELEASE,
      include: "./dist",
      urlPrefix: "/",
    }),
  ],
};

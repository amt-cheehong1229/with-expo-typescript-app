// @generated: @expo/next-adapter@2.1.9
// Learn more: https://github.com/expo/expo/blob/master/docs/pages/guides/using-nextjs.md

const { withExpo } = require("@expo/next-adapter");
const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")([
  // "moti",
  // "@motify/core",
  // "@motify/components",
]);

module.exports = withPlugins([
  withTM,
  [
    withExpo,
    {
      projectRoot: __dirname,
    },
  ],
]);
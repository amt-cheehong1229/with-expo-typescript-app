// @generated: @expo/next-adapter@2.1.9
// Learn more: https://github.com/expo/expo/blob/master/docs/pages/versions/unversioned/guides/using-nextjs.md#shared-steps

// module.exports = { presets: ['@expo/next-adapter/babel'] }

module.exports = function (api) {
    api.cache(true);
    return {
      presets: ["@expo/next-adapter/babel"],
      plugins: [
        // "react-native-reanimated/plugin",
        "@babel/plugin-proposal-class-properties",
      ],
    };
  };
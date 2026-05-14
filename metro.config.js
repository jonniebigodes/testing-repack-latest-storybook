const {
  withStorybook,
} = require('@storybook/react-native/withStorybook');

const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  //enabled: process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true",
  enabled: true, // Required for Chromatic, since it doesn't set the environment variable when building the app
};

module.exports = withStorybook(mergeConfig(getDefaultConfig(__dirname), config));

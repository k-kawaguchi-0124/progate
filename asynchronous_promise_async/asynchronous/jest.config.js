export default {
  testEnvironment: "node",
  testMatch: ["<rootDir>/__tests__/**/*.js"],
  watchman: false,
  globalSetup: "./jest-global-setup.js",
  globalTeardown: "./jest-global-teardown.js",
  globals: {
    PORT: process.env.PORT || 5555,
  },
};

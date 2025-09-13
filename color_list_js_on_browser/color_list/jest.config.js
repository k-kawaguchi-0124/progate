export default {
  preset: "jest-puppeteer",
  transform: {
    "^.+\\.tsx?$": ["ts-jest"],
  },
  testTimeout: 80000,
  watchman: false,
};

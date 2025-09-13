const port = process.env.PORT ?? 4444;
export default {
  server: {
    command: `npm start -- -p ${port}`,
    port: port,
    launchTimeout: 30000,
  },
  launch: {
    headless: "new",
  },
  browserContext: "incognito",
};

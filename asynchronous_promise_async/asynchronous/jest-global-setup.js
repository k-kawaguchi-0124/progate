import {setup as setupDevServer} from "jest-dev-server";

export default async function globalSetup(globalConfig, projectConfig) {
  process.env.PORT = projectConfig.globals.PORT;
  globalThis.servers = await setupDevServer([
    {
      command: `PORT=${projectConfig.globals.PORT} npm run start`,
      port: projectConfig.globals.PORT,
      launchTimeout: 30000,
    },
  ]);
}

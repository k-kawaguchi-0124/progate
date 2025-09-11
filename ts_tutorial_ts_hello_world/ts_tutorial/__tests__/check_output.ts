import { exec } from "child_process";

const execute = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    exec("node ./src/practice.js", (err, stdout) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(stdout);
    });
  });
};

describe("ts hello world", () => {
  test("output results", async () => {
    const out = await execute();
    const lines = out.split("\n");
    expect(lines[0]).toMatch(/^Hello$/);
    expect(lines[1]).toMatch(/^true$/);
    expect(lines[2]).toMatch(/^false$/);
    expect(lines[3]).toMatch(/^User:\sname:\sKen\sthe\sNinja,\sage:\s20$/);
  });
});

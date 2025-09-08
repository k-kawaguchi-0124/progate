import child_process from "child_process";

const execute = () => {
  return new Promise((resolve, reject) => {
    child_process.exec(
      `PORT=${process.env.PORT} node ./src/async_get_users.js`,
      (err, stdout, stderr) => {
        if (err) {
          reject(err);
          return;
        }
        resolve([stdout, stderr]);
      },
    );
  });
};

describe("async/await get users scenario", () => {
  test("output results", async () => {
    const result = await execute();
    const stdout = result[0].split("\n");
    const stderr = result[1].split("\n");

    expect(stdout[0]).toEqual("{ id: 1, name: 'John' }");
    expect(stdout[1]).toEqual("{ id: 2, name: 'Emma' }");
    expect(stdout[2]).toEqual("{ id: 3, name: 'Michael' }");
    expect(stdout[3]).toEqual("{ id: 4, name: 'Sophia' }");
    expect(stdout[4]).toEqual("{ id: 5, name: 'William' }");
    expect(stderr[0]).toEqual("User not found");
  });
});

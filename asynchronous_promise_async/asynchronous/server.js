import app from "./app.js";

const port = process.env.PORT ?? 8000;
app.listen(port, () => {
  if (process.env.CODESPACE_NAME) {
    console.log(`Server is running: https://${process.env.CODESPACE_NAME}-${port}.${process.env.GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN}`);
    console.log(`users/1: https://${process.env.CODESPACE_NAME}-${port}.${process.env.GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN}/users/1`);
  } else {
    console.log(`Server is running: http://localhost:${port}/`);
  }
});

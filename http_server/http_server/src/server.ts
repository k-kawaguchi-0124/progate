import http from "node:http";
import fs from "node:fs/promises";
import path from "node:path";

const server = http.createServer();

server.on("request", async (req, res) => {
  console.log("request url: ", req.url);
  try {
    if (!req.url) throw new Error("req.url is undefined");
    const filePath = req.url === "/" ? "/index.html" : req.url;
    const file = await fs.readFile(path.join(__dirname, 'public', filePath), 'utf-8');

    const mimeTypes: { [key: string]: string } = {
      ".html": "text/html",
      ".jpg": "image/jpeg",
      ".json": "text/json",
      ".ico": "image/x-icon",
    };
    const extname = path.extname(filePath).toLowerCase();
    const contentType: string = mimeTypes[extname] || 'application/octet-stream';

    res.writeHead(200, { "Content-Type": contentType });
    res.end(file);
  } catch (error) {
    console.error("error: ", error);
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

server.listen(process.env.PORT || 12345, () => {
  console.log(`listening on http://localhost:${process.env.PORT || 12345}/`);
});

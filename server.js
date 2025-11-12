import http from "node:http";
import { serveStatic } from "./utils/serveStatic.js";
import { handleGet, handlePost, handleNews } from "./handlers/routeHandlers.js";

const PORT = process.env.PORT || 8000;
const __dirname = import.meta.dirname;

const server = http.createServer(async (req, res) => {
  try {
    if (req.url === "/api") {
      if (req.method === "GET") {
        return await handleGet(res);
      } else if (req.method === "POST") {
        return await handlePost(req, res);
      } else {
        res.writeHead(405, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({ error: `Method ${req.method} not allowed on /api` })
        );
      }
    } else if (req.url === "/api/news") {
      if (req.method === "GET") {
        return await handleNews(req, res);
      } else {
        res.writeHead(405, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: `Only GET allowed on /api/news` }));
      }
    } else if (!req.url.startsWith("/api")) {
      return await serveStatic(req, res, __dirname);
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: `Route ${req.url} not found` }));
    }
  } catch (err) {
    console.error("Server error:", err);

    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({ error: "Internal Server Error", message: err.message })
    );
  }
});

server.listen(PORT, () => console.log(`connected on port: ${PORT}`));
server.listen(PORT, () => console.log(`server running...`));

import path from "node:path";
import fs from "node:fs/promises";
import { sendResponse } from "./sendResponse.js";
import { getContentType } from "./getContentType.js";

export async function serveStatic(req, res, baseDir) {
  const publicPath = path.join(baseDir, "public");
  const filePath = path.join(
    publicPath,
    req.url === "/" ? "index.html" : req.url
  );
  const ext = path.extname(filePath);
  const contentType = getContentType(ext);
  try {
    const content = await fs.readFile(filePath);
    sendResponse(res, content, 200, contentType);
  } catch (err) {
    if (err.code === "ENOENT") {
      const content = await fs.readFile(path.join(publicPath, "404.html"));
      sendResponse(res, content, 404, "text/html");
    } else {
      const content = `<html><h1>Server Error: ${err.code}</h1></html>`;
      sendResponse(res, content, 500, "text/html");
    }
  }
}

import { sanitizeInput } from "./sanitizeInput.js";

export async function parseJSONBody(req) {
  try {
    let body = "";
    for await (const chunk of req) {
      body += chunk;
    }

    const parsed = JSON.parse(body);
    return sanitizeInput(parsed);
  } catch (err) {
    throw new Error(`Invalid JSON format: ${err}`);
  }
}

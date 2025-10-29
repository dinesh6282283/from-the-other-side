import sanitizeHtml from "sanitize-html";
export function sanitizeInput(parsed) {
  for (let key in parsed) {
    if (typeof parsed[key] === "string") {
      parsed[key] = sanitizeHtml(parsed[key], {
        allowedTags: ["b"],
        allowedAttributes: {},
      });
    }
  }
  return parsed;
}

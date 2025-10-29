import { getData } from "../utils/getData.js";
import { sendResponse } from "../utils/sendResponse.js";
import { parseJSONBody } from "../utils/parseJSONBody.js";
import { addNewSighting } from "../utils/addNewSighting.js";
import { sightingEvents } from "../events/sightingEvents.js";
import { stories } from "../data/stories.js";

export async function handleGet(res) {
  const dataStr = JSON.stringify(await getData());
  sendResponse(res, dataStr, 200, "application/json");
}

export async function handlePost(req, res) {
  try {
    const parsedBody = await parseJSONBody(req);
    await addNewSighting(parsedBody);

    sightingEvents.emit("sighting-added", parsedBody);

    sendResponse(res, JSON.stringify(parsedBody), 201, "application/json");
  } catch (err) {
    sendResponse(res, JSON.stringify({ error: err }), 400, "application/json");
  }
}

export async function handleNews(req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  setInterval(() => {
    let randomIndex = Math.floor(Math.random() * stories.length);
    res.write(
      `data: ${JSON.stringify({
        event: "news-update",
        story: stories[randomIndex],
      })}\n\n`
    );
  }, 3000);
}

/*
use res.write() to send an object to the frontend
the object should include:
-an event property with a descriptive name.
-a story chosen at random from the stories array.
Remember, the object is contained in a string which starts with 'data: '
what do you need at the end of the string to signal the end of a message block?
*/

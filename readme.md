# 🕯️ From The Other Side

A real-time Node.js web application where people can **read paranormal sightings** and **share their own experiences**. Built entirely using **native Node.js**, without Express or any backend frameworks.

Live Demo 👉 [https://from-the-other-side-4om8.onrender.com/](https://from-the-other-side-4om8.onrender.com/)

---

## 👻 Overview

**From The Other Side** is a storytelling platform dedicated to eerie, unexplained, and paranormal encounters.
Users can:

- Browse existing supernatural stories
- Submit their own sightings
- Receive live “news” updates through **Server-Sent Events (SSE)**

The project focuses on understanding **core Node.js fundamentals** by building everything manually — routing, static file serving, JSON parsing, event emitters, and real-time functionality.

---

## 🚀 Features

### 🔹 **Pure Node.js HTTP Server**

No Express or frameworks.
All routes (`/api`, `/api/news`, `/`) are handled manually.

### 🔹 **User Story Submissions**

Users can submit paranormal experiences through a form.
Stories are:

- Sanitized to prevent XSS
- Assigned unique UUIDs
- Stored in `data.json` for persistence

### 🔹 **Real-Time Updates (SSE)**

Clients automatically receive new “breaking news” from the server without refreshing the page.

### 🔹 **Event-Driven Architecture**

Uses Node’s built-in `EventEmitter` to trigger notifications when a new sighting is added.

### 🔹 **Custom Static File Server**

Manually serves:

- HTML
- CSS
- JavaScript
- Images

Includes MIME detection and proper error handling.

### 🔹 **Full Deployment on Render**

Configured to run on Render using `process.env.PORT` for dynamic port binding.

---

## 🧩 Tech Stack

| Layer      | Tech                                         |
| ---------- | -------------------------------------------- |
| Backend    | Node.js (Native HTTP), EventEmitter, Streams |
| Frontend   | HTML, CSS, Vanilla JavaScript                |
| Storage    | JSON file (`data.json`)                      |
| Deployment | Render Web Services                          |

---

## 📁 Project Structure

```
from-the-other-side/
│
├── handlers/
│   ├── routeHandlers.js
│
├── utils/
│   ├── serveStatic.js
│   ├── sendResponse.js
│   ├── getData.js
│   ├── addNewSighting.js
│   ├── parseJSONBody.js
│   ├── sanitizeInput.js
│
├── events/
│   ├── sightingEvents.js
│
├── data/
│   ├── data.json
│
├── public/
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│
├── server.js
└── package.json
```

---

## ⚙️ Installation & Setup

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/from-the-other-side.git
cd from-the-other-side
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the server

```bash
npm start
```

### 4. Visit the app

```
http://localhost:8000
```

---

## ✨ API Endpoints

### **GET /api**

Returns all stored sightings.

**Example Response**

```json
[
  {
    "id": "uuid",
    "name": "Old Mill Shadow",
    "location": "Scotland",
    "description": "Tall dark figure near the water",
    "is_open_to_public": true
  }
]
```

---

### **POST /api**

Submit a new story.

**Body example**

```json
{
  "name": "Cemetery Light",
  "location": "Chennai",
  "description": "Saw a glowing orb near the entrance",
  "is_open_to_public": false
}
```

---

### **GET /api/news**

Real-time updates via Server-Sent Events.

---

## 🔐 Security

- Input sanitization using **sanitize-html**
- Prevents XSS and malicious HTML content
- Error handling for broken JSON and invalid submissions

---

## 🛠️ Challenges Explored

- Building a server without Express
- Understanding writable/readable streams
- Handling JSON parsing safely
- Working with EventEmitters
- Implementing SSE manually
- Deploying to Render with dynamic ports

---

## 📚 Learnings

This project reinforced core Node.js fundamentals:

- Event-driven architecture
- Streams & buffers
- Custom routing
- Real-time communication
- File-based storage
- Modular backend design

It’s a complete example of what Node can do **without relying on frameworks**.

---

## 👨‍💻 Author

**Lonewolf**
Full-stack developer exploring practical backend fundamentals through hands-on projects.

---

## ⭐ Show Your Support

If you found this interesting or helpful, feel free to star the repo or check out the live version!

👉 [https://from-the-other-side-4om8.onrender.com/](https://from-the-other-side-4om8.onrender.com/)

---

const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  const dir = path.join(__dirname, "photos");
  const files = fs.readdirSync(dir);
  const randomFile = files[Math.floor(Math.random() * files.length)];
  res.send(`
    <html>
      <head><title>Random Photo Portal</title></head>
      <body style="text-align:center; font-family:Arial;">
        <h1>Welcome to My Photo Portal</h1>
        <img src="/photos/${randomFile}" style="max-width:80%; border-radius:10px;">
      </body>
    </html>
  `);
});

app.use("/photos", express.static(path.join(__dirname, "photos")));

app.listen(3000, () => console.log("Server running on port 3000"));
var path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");
const cors = require("cors");
const app = express();

app.use(express.static("dist"));
app.use(
  cors({
    origin: "http://localhost:8080",
  })
);
app.get("/", function (req, res) {
  const options = { root: "../../dist" };
  res.sendFile("index.html", options);
});

// designates what port the app will listen to for incoming requests
app.listen(8082, function () {
  console.log("Example app listening on port 8082!");
});

app.get("/test", function (req, res) {
  res.json(mockAPIResponse);
});

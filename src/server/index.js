var path = require("path");
const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(express.static("../../dist"));
app.use(
  cors({
    origin: "http://localhost:8080",
  })
);
app.use(express.json());

// designates what port the app will listen to for incoming requests
app.listen(8082, function () {
  console.log("Example app listening on port 8082!");
});
app.get("/", function (req, res) {
  const root = { root: "../../dist" };
  res.sendFile("index.html", root);
});

app.get("/apiKey", (req, res) => {
  res.send(process.env.KEY);
});

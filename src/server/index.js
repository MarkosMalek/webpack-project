var path = require("path");
const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const FormData = require("form-data");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

app.use(express.static("../../dist"));
app.use(cors());
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

app.post("/answer", async (req, res) => {
  const formdata = new FormData();
  formdata.append("key", process.env.KEY);
  formdata.append("txt", req.body.input);

  const requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  const name = await fetch(
    "https://api.meaningcloud.com/lang-4.0/identification",
    requestOptions
  )
    .then((response) => ({
      body: response.json(),
    }))
    .then(({ body }) =>
      body.then((result) => {
        return result.language_list[0].name;
      })
    );
  res.send(name);
});

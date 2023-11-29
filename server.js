const express = require("express");
const { readFileSync } = require("fs");
const bodyParser = require('body-parser');
const webSocket = require("ws");
const http = require("http");
const app = express();
const httpPort = process.env.PORT || 8000;

app.use(bodyParser.text());

app.get("/", (req, resp) => {
    resp.status(200).send(readFileSync("./Google.html", {encoding: "utf-8"}));
});

app.post("/send", (req, resp) => {
    text = req.body;
    console.log(text);
    resp.status(200).send();
});

app.listen(httpPort, () => {
    console.log(`server running at port ${httpPort}`);
})
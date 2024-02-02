const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT;
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/contact", (req, res) => {
  res.send("<h1>Conatct us</h1>");
});
app.post("/post", (req, res) => {
  const requestData = req.body;
  res.json({ receivedData: requestData });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

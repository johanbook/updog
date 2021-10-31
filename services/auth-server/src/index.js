const express = require("express");
const logger = require("morgan");

const PORT = process.env.PORT || 80;

const app = express();
app.use(logger("tiny"));
app.get("/", async (req, res) => {
  const userId = "123";
  res.set("x-user-id", userId);
  res.sendStatus(200);
});

app.listen(PORT);

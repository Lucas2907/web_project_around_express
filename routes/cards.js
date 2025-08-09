const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const dataPath = path.join(__dirname, "../data/cards.json");

function getCards() {
  const data = fs.readFileSync(dataPath, "utf8");
  return JSON.parse(data);
}

router.get("/", (req, res) => {
  res.json(getCards());
});

module.exports = router;

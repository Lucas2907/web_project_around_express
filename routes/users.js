const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const dataPath = path.join(__dirname, "../data/users.json");

function getUsers() {
  const data = fs.readFileSync(dataPath, "utf8");
  return JSON.parse(data);
}

router.get("/", (req, res) => {
  res.json(getUsers());
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const user = getUsers().find((u) => u._id === id);

  if (!user) {
    return res.status(404).json({ error: "Usuário não encontrado" });
  }
  return res.json(user);
});

module.exports = router;

const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", (req, res) => {
  db.query("SELECT * FROM tasks", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

router.post("/", (req, res) => {
  const { title } = req.body;
  db.query("INSERT INTO tasks (title) VALUES (?)", [title], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Task created" });
  });
});

module.exports = router;

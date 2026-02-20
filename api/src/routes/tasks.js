const express = require("express");
const router = express.Router();
const db = require("../db");

// ➕ Add Task
router.post("/", (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }

  db.query("INSERT INTO tasks (title) VALUES (?)", [title], (err, result) => {
    if (err) return res.status(500).json(err);

    res.status(201).json({
      message: "Task created",
      id: result.insertId
    });
  });
});

// ➖ Remove Task
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM tasks WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).json(err);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.json({ message: "Task deleted" });
  });
});

module.exports = router;

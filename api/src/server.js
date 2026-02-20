const express = require("express");
const db = require("./db");
const tasks = require("./routes/tasks");

const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
  res.send("OK");
});


app.use("/api/tasks", tasks);

(async () => {
  try {
    await db.query(`
      CREATE TABLE IF NOT EXISTS tasks (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255)
      )
    `);

    app.listen(5000, "0.0.0.0", () => {
      console.log("Server running on port 5000");
    });

  } catch (err) {
    console.error("DB initialization failed:", err);
    process.exit(1);
  }
})();


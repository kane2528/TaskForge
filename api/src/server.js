const express = require("express");
const db = require("./db");
const tasks = require("./routes/tasks");

const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
  res.send("OK");
});


app.use("/api/tasks", tasks);

async function waitForDB(retries = 10) {
  while (retries) {
    try {
      await db.query("SELECT 1");
      console.log("DB connected");
      return;
    } catch (err) {
      console.log("Waiting for DB...");
      await new Promise(res => setTimeout(res, 3000));
      retries--;
    }
  }
  throw new Error("Database not reachable");
}

(async () => {
  try {
    await waitForDB();

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
    console.error("Startup failed:", err);
    process.exit(1);
  }
})();



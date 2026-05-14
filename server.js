require("dotenv").config();
const express = require("express");
const { Pool } = require("pg");
const path = require("path");

const app = express();
app.use(express.json());
const cors = require("cors");

const corsOptions = {
  origin: "https://shwballl.github.io",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(
  express.static(path.join(__dirname, "public"), {
    maxAge: "1d",
  }),
);

const pool = new Pool({
  connectionString: process.env.DB_URL,
  ssl: { rejectUnauthorized: false },
});

app.get("/api/movies", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM movies ORDER BY id ASC");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Помилка сервера" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущено на http://localhost:${PORT}`);
});

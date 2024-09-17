const pool = require("./pool");

async function getUsername(username, password) {
  const { user } = await pool.query(
    "SELECT * FROM users WHERE username= ($1) AND password= ($2)",
    username,
    password
  );
}

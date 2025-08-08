const db = require("../Config/db");

exports.create = async (req, res) => {
  try {
    console.log("Request body:", req.body);

    const { name, password, email } = req.body;

    if (!name || !password || !email) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const sql = "INSERT INTO users (name, password, email) VALUES (?, ?, ?)";
    const [result] = await db.query(sql, [name, password, email]);

    if (result.affectedRows === 1) {
      console.log("ບັນທຶກໄດ້"); // Saved successfully
      return res.json({ message: "User created successfully" });
    } else {
      console.log("ບັນທຶກບໍ່ໄດ້"); // Could not save
      return res.status(500).json({ error: "Failed to create user" });
    }
  } catch (err) {
    console.error("Create user error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// List users
exports.list = async (req, res) => {
  try {
    const sql = "SELECT id, name, email FROM users ORDER BY id DESC";
    const [rows] = await db.query(sql);

    return res.json(rows);
  } catch (err) {
    console.error("List users error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};   

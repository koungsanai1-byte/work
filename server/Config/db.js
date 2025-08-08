const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config(); // โหลดค่าจาก .env

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

const promiseDb = db.promise();

db.connect((err) => {
    if (err) {
        console.log("Failed connected...", err.stack);
    }
    console.log("Connected...", db.threadId);
});

module.exports = promiseDb;

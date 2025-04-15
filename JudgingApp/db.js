// db.js
const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 's9017203.',
  database: 'adjudicators_db'
});

module.exports = db;
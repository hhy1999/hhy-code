const mysql = require('mysql')

const db = mysql.createPool({
  host: '81.71.15.170',
  user: 'root',
  password: 'root',
  database: 'my_db_01',
})

module.exports = db

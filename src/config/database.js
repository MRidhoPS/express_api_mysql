const mysql = require('mysql2')
const dbpool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
})

module.exports = dbpool.promise();
const mysql = require("mysql2");


// Create a connection pool
// http://45.55.136.114/phpmyadmin

const pool = mysql.createPool({
    // host : 'localhost',
    host : '45.55.136.114',
    user : 'F2023_bsester01',
    // database : 'node-complete',
    database : 'F2023_bsester01',
    password: "RingedTailedPossum2023!"
});

module.exports = pool.promise();
const mysql = require('mysql');

const connect = {
    user: 'b58e10123715bb',
    password: '13b2911f',
    host: 'us-cdbr-iron-east-02.cleardb.net',
    port: 3306,
    database: 'heroku_583cf5f28fc60d7'
}

const db = mysql.createConnection(connect)


let query = db.query('select * from translate');

module.exports = query;
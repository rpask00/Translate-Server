const express = require('express');
const router = express.Router()
const mysql = require('mysql');

const connect = {
    user: 'b58e10123715bb',
    password: '13b2911f',
    host: 'us-cdbr-iron-east-02.cleardb.net',
    port: 3306,
    database: 'heroku_583cf5f28fc60d7'
}

const db = mysql.createConnection(connect)

const fancy = {
    type: 'knife',
    model: 'M9',
    skin: 'Doppler'
}

router.get('/api', (req, res, next) => {
    db.query('select * from translate', (err, response) => {
        if (err) throw err;
        console.log(response)
        res.json(response);
    });
})

router.get('/', (req, res, next) => {
    res.render('home')
})

module.exports = router;
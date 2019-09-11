const express = require('express');
const router = express.Router()
const query = require('../database/query')

const fancy = {
    type: 'knife',
    model: 'M9',
    skin: 'Doppler'
}

router.get('/api', (req, res, next) => {
    console.log(query)
    res.json(fancy)
})

router.get('/', (req, res, next) => {
    res.render('home')
})

module.exports = router;
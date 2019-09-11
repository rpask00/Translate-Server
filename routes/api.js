const express = require('express');
const router = express.Router()
const query = require('../database/query')

const fancy = {
    type: 'knife',
    model: 'M9',
    skin: 'Doppler'
}

router.get('/', (req, res, next) => {
    res.json(query)
})

module.exports = router;
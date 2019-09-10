const express = require('express');
const router = express.Router()

const fancy = {
    type: 'knife',
    model: 'M9',
    skin: 'Doppler'
}

router.get('/', (req, res, next) => {
    res.json(fancy)
})

module.exports = router;
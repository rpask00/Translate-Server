const express = require('express');
const router = express.Router()
const Word = require('../models/Word-schema')

router.get('/api', (req, res, next) => {
    res.json({
        message: 'hello'
    })
})

router.get('/', (req, res, next) => {
    res.redirect('/words')
})



router.get('/words', (req, res, next) => {
    console.log('words')
    Word.find()
        .exec()
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).json({
                error: err.message,
            })
        })
})

router.get('/word/:id', (req, res, next) => {
    Word.find({ _id: req.params.id })
        .exec()
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).json({
                error: err.message,
            })
        })
})

router.get('/words/:level', (req, res, next) => {
    const level = req.params.level;
    console.log(req.params)

    Word.find({ level })
        .exec()
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).json({
                error: err.message,
            })
        })
})


router.patch('/word/change-level', (req, res, next) => {
    console.log(req.body)
    Word.updateOne(
        { _id: req.body.id },
        { $set: { level: req.body.level } }
    ).exec()
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).json({
                error: err.message,
            })
        })
})

router.delete('/word/delete/:id', (req, res, next) => {
    Word.findByIdAndRemove(req.params.id)
        .exec()
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).json({
                error: err.message,
            })
        })
})

router.post('/load-words', (req, res, next) => {
    let increment = 0;
    req.body.forEach((word, i) => {
        const term = new Word({
            pl: word.polski,
            eng: word.angielski,
            level: word.level,
        })

        term.save()
            .then(result => {
                increment++;
                if (increment == req.body.lenght)
                    res.send(200).json({
                        message: 'Loading words completed',
                    })
            }).catch(err => {
                res.json({
                    error: 'error',
                })
            })

    })

})

router.get('/randomWords', (req, res, next) => {
    console.log(req.query)

    let randomWords = req.query.level.lenght ?
        Word.aggregate([
            { $match: { level: req.query.level } },
            { $sample: { size: parseInt(req.query.q) } }
        ]) :
        Word.aggregate([
            { $sample: { size: parseInt(req.query.q) } }
        ])


    randomWords.exec()
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).json({
                error: err.message,
            })
        })
})


module.exports = router;
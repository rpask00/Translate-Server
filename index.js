const express = require('express');
const app = express();
const apiRouter = require('./routes/api');
const path = require('path')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

let allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "*");
    next();
}
app.use(allowCrossDomain);


app.use('/api', apiRouter)
app.get('/', (req, res, next) => {
    res.render('home')



})

app.listen(3000, () => {
    console.log('Listening at 3000')
})


// git add .
// git commit -am "make it better"
// git push heroku master
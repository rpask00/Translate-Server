const express = require('express');
const app = express();
const router = require('./routes/api');
const path = require('path')

const favicon = require('serve-favicon')
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use('/', router)

app.listen(process.env.PORT || 3000, () => {
    console.log('Listening at 3000')
})


// git add .
// git commit -am "make it better"
// git push heroku master
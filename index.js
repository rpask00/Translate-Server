const express = require('express');
const app = express();
const router = require('./routes/api');
const path = require('path')
const cors = require('cors');
const favicon = require('serve-favicon')
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))


let allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT, POST,DELETE');
    next();
}
app.use(allowCrossDomain);

var whitelist = [
    'http://0.0.0.0:3000',
];
var corsOptions = {
    origin: function (origin, callback) {
        var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
        callback(null, originIsWhitelisted);
    },
    credentials: true
};
app.use(cors(corsOptions));


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
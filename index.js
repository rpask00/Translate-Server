const express = require('express');
const app = express();

let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "*");
    next();
  }
  app.use(allowCrossDomain);
  

const fancy = {
    type: 'knife',
    model: 'M9',
    skin: 'Doppler'
}

app.get('/', (req, res, next) => {
    res.json(fancy)
})

app.listen(3000, () => {
    console.log('Listening at 3000')
})
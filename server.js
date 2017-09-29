var express = require('express');
var app     = express();
var fetch = require('node-fetch');
var port = process.env.PORT || 5000;

app.get('/scrape', function(req, res){

  url = 'http://api.dronestre.am/data';

  fetch(url)
      .then(function(res) {
        return res.json();
    }).then(function(json) {
        console.log(json);
    }).catch(err => console.error(err));
})

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);
exports = module.exports = app;
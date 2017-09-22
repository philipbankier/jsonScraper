var express = require('express');
var app     = express();
var fetch = require('node-fetch');

app.get('/scrape', function(req, res){

  url = 'http://api.dronestre.am/data';

  fetch(url)
      .then(function(res) {
        return res.json();
    }).then(function(json) {
        console.log(json);
    }).catch(err => console.error(err));
})

app.listen('8081')
console.log('Magic happening on port 8081');
exports = module.exports = app;


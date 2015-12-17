
var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('index.ejs', {tasks : "html"});
});

app.get('/exo', function(req, res) {
    res.render('exo.ejs', {tasks : "html"});
});

app.get('/keyboarding', function(req, res) {
    res.render('keyboarding.ejs', {choiceLang : "html"});
});

app.get('/keyboarding/:choiceLang', function(req, res) {
	var choiceLang = req.params.choiceLang;
    res.render('keyboarding.ejs', {choiceLang : choiceLang});
});



app.listen(8080);
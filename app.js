// ====================== app.js


// ====================== Call modules and Get static files

//call modules
var express = require('express');
var choice = require('./check/choiceLang.js');

//start server
var app = express();

//Get port
var port = process.env.PORT || 8080;

//Get static files
app.use(express.static(__dirname + '/public'));
app.use("/keyboarding/:choiceLang", express.static(__dirname + '/public'));


// ====================== Routes

// Routers for Main Pages
app.get('/', function(req, res) {
    res.render('index.ejs', {tasks : "html"});
});

app.get('/help', function(req, res) {
    res.render('help.ejs', {tasks : "html"});
});

app.get('/about', function(req, res) {
    res.render('about.ejs', {tasks : "html"});
});
// End Routers Main Pages


// Routers for Keyboarding Pages
app.get('/keyboarding/:choiceLang', function(req, res) {
	var choiceLang = req.params.choiceLang;
    res.render('keyboarding.ejs', { lang : choice.language(choiceLang), 
    								mode : choice.modeUsed(choiceLang) });
});

app.get('/keyboarding', function(req, res) {
	var choiceLang = req.params.choiceLang;
    res.render('keyboarding.ejs', { lang : choice.language(choiceLang), 
    								mode : choice.modeUsed(choiceLang) });
});
// End Routes Keyboarding Pages


// Routes for Exercises Pages

app.get('/signUp', function(req, res) {
    res.render('signUp.ejs', {tasks : "html"});
});

app.get('/signIn', function(req, res) {
    res.render('signIn.ejs', {tasks : "html"});
});

app.get('/profile', function(req, res) {
    res.render('profile.ejs', {tasks : "html"});
});

app.get('/exo', function(req, res) {
    res.render('exo.ejs');
});

app.get('/listExo', function(req, res) {
    res.render('listExo.ejs', {tasks : "html"});
});

app.get('/giveExo', function(req, res) {
    res.render('giveExo.ejs', {tasks : "html"});
});

app.get('/userWork', function(req, res) {
    res.render('userWork.ejs', {tasks : "html"});
});

app.get('/sendWork', function(req, res) {
    res.render('sendWork.ejs', {tasks : "html"});
});

// End Routes Exercises Pages

app.listen(port);

console.log('Server started! At http://localhost:' + port);
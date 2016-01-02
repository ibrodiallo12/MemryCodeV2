var choice = require('./check/choiceLang.js');

// ====================== Routes

// Routers for Main Pages
module.exports.index = function(req, res) {
    res.render('index.ejs', {tasks : "html"});
};

module.exports.help = function(req, res) {
    res.render('help.ejs', {tasks : "html"});
};

module.exports.about = function(req, res) {
    res.render('about.ejs', {tasks : "html"});
};
// End Routers Main Pages


// Routers for Keyboarding Pages
module.exports.keyboarding = function(req, res) {
	var choiceLang = req.params.choiceLang;
    res.render('keyboarding.ejs', { lang : choice.language(choiceLang), 
    								mode : choice.modeUsed(choiceLang) });
};

// End Routes Keyboarding Pages


// Routes for Exercises Pages

module.exports.signUp = function(req, res) {
    res.render('signUp.ejs', {tasks : "html"});
};

module.exports.signIn = function(req, res) {
    res.render('signIn.ejs', {tasks : "html"});
};

module.exports.profile = function(req, res) {
    res.render('profile.ejs', {tasks : "html"});
};

module.exports.exo = function(req, res) {
    res.render('exo.ejs');
};

module.exports.listExo = function(req, res) {
    res.render('listExo.ejs', {tasks : "html"});
};

module.exports.giveExo = function(req, res) {
    res.render('giveExo.ejs', {tasks : "html"});
};

module.exports.userWork = function(req, res) {
    res.render('userWork.ejs', {tasks : "html"});
};

module.exports.sendWork = function(req, res) {
    res.render('sendWork.ejs', {tasks : "html"});
};

// End Routes Exercises Pages
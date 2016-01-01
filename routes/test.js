
var test = require('../check/test.js');
test.test(12);

module.exports.test = function(req, res) {
    res.render('test.ejs', {tasks : "html"})
}



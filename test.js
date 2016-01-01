// ====================== app.js


// ====================== Call modules and Get static files

//call modules
var express = require('express');

var routes = require('./routes/test.js');

//start server
var app = express();

//Get port
var port = process.env.PORT || 8080;

//Get static files
app.use(express.static(__dirname + '/public'));
app.use("/keyboarding/:choiceLang", express.static(__dirname + '/public'));


// ====================== Routers

// Routers for Main Pages
app.get('/', routes.test);

app.listen(port);

console.log('Server started! At http://localhost:' + port);
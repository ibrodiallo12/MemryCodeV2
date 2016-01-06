// ====================== app.js


// ====================== Call modules and Get static files

//call modules
var express = require('express');
var cookieParser = require('cookie-parser');
var route = require('./routes/mainRoutes.js');

//environement
var app = express();

app.use(cookieParser());

//Get port
var port = process.env.PORT || 8080;

//Get static files
app.use(express.static('public'));
app.use("/keyboarding/:choiceLang", express.static(__dirname + '/public'));



// ====================== Routes

// Routers for Main Pages
app.get('/', route.index);

app.get('/help', route.help);

app.get('/about', route.about);
// End Routers Main Pages


// Routers for Keyboarding Pages
app.get('/keyboarding/:choiceLang', route.keyboarding);

app.get('/keyboarding', route.keyboarding);
// End Routes Keyboarding Pages


// Routes for Exercises Pages

app.get('/signUp', route.signUp);

app.get('/profile', route.profile);

app.get('/exo', route.exo);

app.get('/listExo', route.listExo);

app.get('/giveExo', route.giveExo);

app.get('/userWork', route.userWork);

app.get('/sendWork', route.sendWork);

// End Routes Exercises Pages

app.listen(port);

console.log('Server started! At http://localhost:' + port);

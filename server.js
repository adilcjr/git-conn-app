//Install required modules
const express = require('express');
const path = require('path');
const bodyparser = require("body-parser");

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/git-conn-app'));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
});

var repositoriesAPI = require("./repository.controller");

app.use("/api/repositories", repositoriesAPI);

app.get('/*', function(req,res) {    
    res.sendFile(path.join(__dirname+'/dist/git-conn-app/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
console.log("App up and running on port 8080!");

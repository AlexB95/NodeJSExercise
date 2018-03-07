var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/businessDB'); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var routes = require('./api/routes/businessRoutes'); //importing route
routes(app); //register the route


app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
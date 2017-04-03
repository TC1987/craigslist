const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

// Config file with static values.
const config = require('./app/models/config');

// Check if development.
if (app.get('env') === 'development') app.locals.dev = true;

// Set view engine for template engine.
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'app', 'views'));

// Parse body data from forms.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Serve files from the public directory.
app.use(express.static(path.join(__dirname, 'public')));

// Log requests.
if (app.locals.dev) app.use(logger('dev'));

app.get('/', function(req, res, next) {
    res.send('Hello World');
})

// Create error object and set status.
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Development error handler.
if (app.locals.dev) {
    app.use(function(err, req, res, next) {
        console.log(err.message);
        res.status(err.status || 500).send();
    });
}

// Production error handler.
app.use(function(err, req, res, next) {
    res.status(err.status || 500).send();
});


var server = app.listen(config.port);
console.log(`Listening at http://localhost:${server.address().port} in ${app.get('env')} mode.`);

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require("mongoose");

// connect to the database
mongoose.connect("mongodb+srv://compass:REssWo1SRaG4go6o@capsol.hvzq4.mongodb.net/testing?authSource=admin&replicaSet=atlas-l6k0sn-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true", { useNewUrlParser: true })
.then(() => {
  console.log("Database connected.");
});


// create routers
let usersRouter = require('./routes/users');
let capsolRouter = require('./routes/capsols');
let entryRouter = require('./routes/entries');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

app.use('/v1/users', usersRouter);
app.use('/v1/capsols', capsolRouter);
app.use('/v1/entries', entryRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);

  res.send('An error occured.');
});

module.exports = app;

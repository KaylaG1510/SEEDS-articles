const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// const articles = require('.routes/api/articles');

const app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//BodyParser Middleware
app.use(bodyParser.json());

//DB config
const db = require('./config/keys').mongoURI;

//connect to mongo
mongoose
    .connect(db)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

const articlesRouter = require('./routes/api/articles');
const usersRouter = require('./routes/api/users');
const strengthRouter = require('./routes/api/strengths');

app.use('/articles', articlesRouter);
app.use('/users', usersRouter);
app.use('/strengths', strengthRouter);

// app.use('./routes/api/articles',  articles);

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});

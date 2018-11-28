const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Initialized Express App
app = express();

// Body Parser Middleware
app.use(bodyParser.json());

// MongoDB Config and Connection
const db = require('./configs/db_config').mongodb;
mongoose.connect(db.dbURI, db.dbOpt);
mongoose.connection
    .once('open', () => console.log('Connected to MongoDB...'))
    .on('error', err => console.log('MongoDb Connection Error: ', err));

// API Routes

// Port Listener
const port = process.env.PORT || 4000;
app.listen(port, () =>
    console.log(`Server connected successfully at port ${port}`)
);

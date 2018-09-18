const express = require('express');
const morgan = require('morgan');
const app = express();
const errorHandler = require('./util/error-handler');
require('./models/register-plugins');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('./public'));

const events = require('./routes/events');

app.use('/api/events', events);

app.use((req, res) => {
    res.sendFile('index.html', { root: './public' });
});

app.use(errorHandler());

module.exports = app;
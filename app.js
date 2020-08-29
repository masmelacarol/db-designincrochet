require('dotenv').config();
require('./configure/db');

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();
const routes = require('./network/routes');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors());

routes(app);

app.listen(3000, () => {
  console.log('La aplicacion esta escuchando en http://localhost:3000');
});

// module.exports = app;
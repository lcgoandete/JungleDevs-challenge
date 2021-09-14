require('dotenv').config();
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./api/routes');
const dbSetup = require('./database/db-setup');

dbSetup();

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(routes);

app.use((_req, _res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((error, _req, res, _next) => {
  return res.status(error.status || 500).json({ message: `${error.message}` });
});

app.listen(process.env.PORT || '8080');

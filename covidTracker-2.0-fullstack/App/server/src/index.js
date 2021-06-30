const express = require('express');
const cors = require('cors');
const chalk = require('chalk');
const debug = require('debug')('server');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();

const server = express();
const port = 2019;

try {
  mongoose.connect(
    process.env.DDBB_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => debug(' Mongoose is connected')
  );
} catch (e) {
  debug('could not connect');
}

server.use(express.json());

server.use(cors());
server.use(morgan('tiny'));

const continentRouter = require('./routes/continentRouter');

server.use('/covid', continentRouter);

server.listen(port,
  () => debug(`Server is running in ${chalk.magentaBright(port)}`));

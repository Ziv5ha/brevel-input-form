// import express from 'express';
const express = require('express');
// import cors from 'cors';
const cors = require('cors');
// import open from 'open';
const open = require('open');
// import favicon from 'serve-favicon';
const favicon = require('serve-favicon');
import { connectToDB } from './utils/db';
import log from './utils/log';
import insertRouter from './routers/R-insert';
import testRouter from './routers/R-test';
import idRouter from './routers/R-getIDs';
import verifyInsertBody from './middlewares/varifyInsertBody';
import errorHandler from './error/errorHandler';
import servePage from './controllers/C-servePage';
import * as path from 'path';
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use('/insert', verifyInsertBody, insertRouter);
app.use('/id', idRouter);
app.use('/test', testRouter);
app.get('/', servePage);

app.use(errorHandler);

const start = async () => {
  await connectToDB();
  app.listen(8081, () => {
    log('Running on post 8081');
  });
  open('http://localhost:8081');
};

start();

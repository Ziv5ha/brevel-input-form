import express from 'express';
import cors from 'cors';
import { sequelize } from './utils/db';
import log from './utils/log';
import insertRouter from './routers/R-insert';
import verifyInsertBody from './middlewares/varifyInsertBody';
import testRouter from './routers/R-test';
import idRouter from './routers/R-getIDs';
import errorHandler from './error/errorHandler';
const app = express();

app.use(cors());
app.use(express.json());

app.use('/insert', verifyInsertBody, insertRouter);
app.use('/id', idRouter);
app.use('/test', testRouter);
app.get('/', (_req, res) => {
  res.send('Hello there!');
});

app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate();
    log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  app.listen(8081, () => {
    log('Running on post 8081');
  });
};

start();

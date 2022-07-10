import express from 'express';
import { sequelize } from './utils/db';
import log from './utils/log';
const app = express();

app.get('/', (_req, res) => {
  res.send('Hello there!');
});

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

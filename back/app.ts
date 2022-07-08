import express from 'express';
const app = express();

app.get('/', (_req, res) => {
  res.send('Hello there!');
});

app.listen(8081, () => {
  console.log('Running on post 8081');
});

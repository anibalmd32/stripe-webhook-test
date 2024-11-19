import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app = express();

app.use(cors());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  console.log('Recibiendo evento de stripe');
  res.send('Hello World!');
});

app.post('/webhook', (req, res) => {
  console.log('Recibiendo evento de stripe');
  res.send('Hello World!');
});

app.listen(3001, () => {
  console.log('Example app listening on port 3000!');
});

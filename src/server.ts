import dotenv from 'dotenv';
dotenv.config();
import express from 'express';

const app = express();

app.use(express.json());
const port = process.env.PORT || 8000;

app.get('/api/hello', (_request, response) => {
  response.send('Hello API!');
});

app.use('/storybook', express.static('dist/storybook'));

app.use(express.static('dist/app'));

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

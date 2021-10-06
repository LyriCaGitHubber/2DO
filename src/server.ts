import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGO_URL);

async function run() {
  try {
    await client.connect();
    await client.db('TasksDB').command({ ping: 1 });
    console.log('DB Verbindung erfolgreich');
  } finally {
    await client.close();
  }
}
run().catch(console.dir);

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.get('/api/hello', (_request, response) => {
  response.send('Hello API!');
});

app.use('/storybook', express.static('dist/storybook'));

app.use(express.static('dist/app'));

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

import express from 'express';
import { config } from 'dotenv';

// Load only variables from .env file, not system variables
process.env = config({ processEnv: {} }).parsed || {};

const app = express();

app.use(express.json());

app.get('/ping', (req, res) => {
  res.send({ message: 'hello world' });
});

app.post('/ping', (req, res) => {
  res.send(req.body);
});

app.listen(process.env.PORT, () =>
  console.log(`application running on port ${process.env.PORT}`)
);

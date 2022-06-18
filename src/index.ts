import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
app.get('/ping', (req, res) => res.send({ message: 'hello world' }));
app.post('/ping', (req, res) => res.send(req.body));
app.listen(8000, () => console.log('application running on port 8000'));

import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 8000;
app.use(bodyParser.json());
app.get('/ping', (req, res) => res.send({ message: 'hello world' }));
app.post('/ping', (req, res) => res.send(req.body));
app.listen(port, () => console.log(`application running on port ${port}`));

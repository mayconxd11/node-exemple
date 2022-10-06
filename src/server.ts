// Express (instalar no terminal)
import * as express  from 'express';

const port = 3000;
const app = express();

app.get('/',(request, response) => {
    response.send('Hello world!');
});
app.get('/participantes',(request, response) => {
    response.send('Hello participator!');
});
app.get('/instrutor',(request, response) => {
    response.send('Hello instructor!');
});

app.listen(port , () => {
    console.log (port,`Serve is running at por port ${port}`);
});

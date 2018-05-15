import express from 'express';
import path from 'path';

const port = 3000;
const app = express();


app.use(express.static('files'));
app.use(express.static('dist'));

app.listen(port, function (error) {
    if(error) {
        console.log(error);
    }
});


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/home', function (req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});
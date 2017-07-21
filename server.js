const express = require('express');
const api = require('./api');
const app = express();

app.get('/api/courses/', (req, res) => {
    let courses = api.courses();

    courses.then( (result) => {
        console.log('Obteniendo cursos\nCantidad de Resultado:' + result.length);
        res.status(200).json(result);
    });
});

app.get('/api/users/', (req, res) => {
    let users = api.users();

    users.then( (result) => {
        console.log('Obteniendo usuarios\nCantidad de Resultado:' + result.length);
        res.status(200).json(result);
    });
});

app.use('/', express.static('public/'));

app.listen( process.env.PORT || 3000, () => {
    console.log('Listening on 3000');
});
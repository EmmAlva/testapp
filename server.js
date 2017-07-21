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
app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

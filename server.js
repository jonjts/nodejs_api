const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

//Iniciando a App
const app = express();
app.use(express.json());
//Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', 
    {useNewUrlParser: true}
);

requireDir('./src/models');

//Rotas
app.use('/api', require('./src/routes'));

app.use(cors());

app.listen(3001);
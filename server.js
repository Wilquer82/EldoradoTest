const connect = require('./db');
const Devices = require('./db');
const express = require('express');

const app = express();

app.use(express.json());
const port = 3001;

app.listen(port, async () => {
  console.log(`Servidor Rodando em ${port}`);

});

connect();
Devices();
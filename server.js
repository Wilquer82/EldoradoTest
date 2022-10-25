const connect = require('./db');
const express = require('express');

const app = express();

app.use(express.json());
const port = 3001;

app.listen(port, async () => {
  console.log(`Servidor Rodando em ${port}`);

  // O código abaixo é para testarmos a comunicação com o MySQL
  connect('show tables');
  // if (result) {
  //   console.log('MySQL connection OK');
  // }

});
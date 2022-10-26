const connect = require('./controllers/db');
const express = require('express');
const { GetAllDevices, AddDevice, DeleteDevice } = require('./controllers/devices');
// const { app } = require('express');

connect();
const port = process.env.PORT || 3001;
const app = express();

app.use(express.json());

app.listen(port, async () => {
  console.log(`Servidor Rodando em ${port}`);
});



app.get('/', GetAllDevices);
app.use('/devices', GetAllDevices);

app.post('/addDevices', AddDevice);
app.use('/addDevices', AddDevice);

app.delete('/delDevice', DeleteDevice);
app.use('/delDevice', DeleteDevice);

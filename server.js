const connect = require('./controllers/db');
const express = require('express');
const { GetAllDevices, AddDevice, DeleteDevice } = require('./controllers/devices');
const { GetCategories, DeleteCategory, AddCategory } = require('./controllers/categories');
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

app.get('/', GetCategories);
app.use('/categories', GetCategories);

app.post('/addCategory', AddCategory);
app.use('/addCategory', AddCategory);

app.delete('/delCategory', DeleteCategory);
app.use('/delCategory', DeleteCategory);
const connect = require('./controllers/db');
const express = require('express');
const { GetAllDevices, GetDevices, AddDevice, DeleteDevice } = require('./controllers/devices');
const { GetAllCategories, DeleteCategory, AddCategory } = require('./controllers/categories');

const cors = require('cors');

connect();

const port = process.env.PORT || 3001;
const app = express();

const options = {
    methods: ['GET', 'POST', 'DELETE'],
    origin:'*', 
    credentials: true,  
    optionSuccessStatus: 200,
}
  
app.use(cors(options));

app.use(express.json());

app.listen(port, async () => {
  console.log(`Servidor Rodando em ${port}`);
});

app.get('/devices', GetAllDevices);
app.use('/devices', GetAllDevices);

app.get('/categories', GetAllCategories);
app.use('/categories', GetAllCategories);

app.get('/:Id', GetDevices);
app.use('/:Id', GetDevices);

app.post('/addDevices', AddDevice);
app.use('/addDevices', AddDevice);

app.post('/addCategory', AddCategory);
app.use('/addCategory', AddCategory);

app.delete('/delDevice', DeleteDevice);
app.use('/delDevice', DeleteDevice);

app.delete('/delCategory', DeleteCategory);
app.use('/delCategory', DeleteCategory);
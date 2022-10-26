
const connect = require('./db');


async function GetAllDevices(_req, res) {
  const conn = await connect();
  try {
    const [rows] = await conn.query('SELECT * FROM Devices;');
    console.log(rows);
    return res.status(200).json(rows);
  }catch(error){
    console.log(error);
  }
}

async function AddDevice(req, res) {
  const conn = await connect();
   const sql = 'INSERT INTO Devices (CategoryId, Color, PartNumber, Category) VALUES (?,?,?,?)';
  console.log(req.body)
  try {
    const values = [req.body.CategoryId, req.body.Color, req.body.PartNumber, req.body.Category];
    await conn.query(sql, values);
  } catch (error){
    console.log(error);
  }
}

async function DeleteDevice(req,res) {
  const conn = await connect();
  console.log(req.body);
  try {
    const sql = 'DELETE FROM Devices WHERE Id =?';
    return await conn.query(sql, req.body.Id);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  AddDevice,
  DeleteDevice,
  GetAllDevices,
};

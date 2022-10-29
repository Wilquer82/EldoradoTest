const connect = require('./db');

async function GetAllDevices(_req, res) {
  const conn = await connect();
    try {
      const [rows] = await conn.query('SELECT * FROM Devices;');
      return res.status(200).json(rows);
    } catch (error) {
      throw error;
    }
  }

async function GetDevices(req, res) {
  const conn = await connect();
  const { Id } = req.params;
  
    try {
    
      const [rows] = await conn.query(`SELECT * FROM Devices WHERE CategoryId = ${Id}`);
      return res.status(200).json(rows);
  
    } catch (error) {
      throw error;
    }
  
  }



async function AddDevice(req,_res) {
  const conn = await connect();
  const sql = 'INSERT INTO Devices (CategoryId, Color, PartNumber, Category) VALUES (?,?,?,?)';
  try {
    const values = [req.body.CategoryId, req.body.Color, req.body.PartNumber, req.body.Category];
    await conn.query(sql, values);
  } catch (error){
    throw error;
  }
}

async function DeleteDevice(req,_res) {
  const conn = await connect();
  try {
    const sql = 'DELETE FROM Devices WHERE Id =?';
    return await conn.query(sql, req.body.Id);
  } catch (error) {
    throw error;
  }
}

module.exports = {
  AddDevice,
  DeleteDevice,
  GetAllDevices,
  GetDevices,
};


const conn = require('../db/connect');


async function GetAllDevices() {
  const conn = await connect();
  const [rows] = await conn.query('SELECT * FROM Devices;');
  console.log(rows);
  return rows;
}


async function AddDevice(device) {
  const conn = await connect();
  const sql = 'INSERT INTO Devices (CategoryId, Color, PartNumber, Category) VALUES (?,?,?,?)';
  const values = [device.CategoryId, device.Color, device.PartNumber, device.Category];
  await conn.query(sql, values);
}

async function DeleteDevice(id) {
  const conn = await connect();
  const sql = 'DELETE FROM Devices where id=?;';
  return await conn.query(sql, [id]);
}


module.exports = {
  AddDevice,
  DeleteDevice,
  GetAllDevices,
};

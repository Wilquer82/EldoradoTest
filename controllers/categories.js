const connect = require('./db');

async function GetAllCategories(_req, res) {
  const conn = await connect();
  try {
    const [rows] = await conn.query('SELECT * FROM Categories;');
    return res.status(200).json(rows);
  }catch (error){ 
    throw error;
  }
}


async function AddCategory(req, _res) {
  const conn = await connect();
  const sql = 'INSERT INTO Categories (Category) VALUES (?)';
  try {
    const values = [req.body.Category];
    await conn.query(sql, values);
  } catch (error) {
    throw error;
  } 
}

async function DeleteCategory(req, _res) {
  const conn = await connect();
  try {
    const sql = 'DELETE FROM Categories where id=?;';
    return await conn.query(sql, req.body.Id);
  } catch (error) {
    throw error;
  }
}


module.exports = {
  AddCategory,
  DeleteCategory,
  GetAllCategories,
};
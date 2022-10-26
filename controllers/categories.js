const conn = require('./db');

async function GetAllCategories(_req, res) {
  const conn = await connect();
  try {
    const [rows] = await conn.query('SELECT * FROM Categories;');
    console.log(rows);
    return rows;
  } catch (error) { 
    console.log(error);
  }
}


async function AddCategory(req, res) {
  const conn = await connect();
  const sql = 'INSERT INTO Categories (Category) VALUES (?)';
  try {
    const values = [req.body.category];
    await conn.query(sql, values);
  } catch (error) {
    console.log(error);
  } 
}

async function DeleteCategory(req, res) {
  const conn = await connect();
  try {
    const sql = 'DELETE FROM Categories where id=?;';
    return await conn.query(sql, [id]);
  } catch (error) {
    console.log(error);
  }
}


module.exports = {
  AddCategory,
  DeleteCategory,
  GetAllCategories,
};
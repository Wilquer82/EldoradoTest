
const conn = require('../db/connect');


async function GetAllCategories() {
  const conn = await connect();
  const [rows] = await conn.query('SELECT * FROM Categories;');
  console.log(rows);
  return rows;
}


async function AddCategory(category) {
  const conn = await connect();
  const sql = 'INSERT INTO Categories (Category) VALUES (?)';
  const values = [category];
  await conn.query(sql, values);
}

async function DeleteCategory(id) {
  const conn = await connect();
  const sql = 'DELETE FROM Categories where id=?;';
  return await conn.query(sql, [id]);
}


module.exports = {
  AddCategory,
  DeleteCategory,
  GetAllCategories,
};
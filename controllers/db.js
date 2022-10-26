  const mysql = require('mysql2/promise');
  
async function connect() {
  if(global.connection && global.connection.state !== 'disconnected')
      return global.connection;
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: 'Sonicfox3',
      database: 'EldoradoTest',
    });
    global.connection = connection;
    console.log("Conectou Sql");
  } catch {
    console.log(error);
  }
  return connection;
}

module.exports = connect;


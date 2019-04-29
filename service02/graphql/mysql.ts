import * as mysql from 'mysql';

const mysqlConnection = mysql.createConnection({
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  password: '888888',
  database: 'app',
});

mysqlConnection.connect(function(err) {
  if (err) {
    console.error('error: ' + err.stack);
    return;
  }
});

Object.defineProperty(mysqlConnection, 'pifySelect', {
  value: function(sql) {
    // console.log('mysqlCon=>', pify(mysqlCon.query)('SELECT * from  Tab_User_Info'));
    return new Promise((resolve, _) => {
      mysqlConnection.query(sql, function(error, results) {
        if (error) console.log('mysql select err:', error);
        resolve(results);
      });
    });
  },
});

export default mysqlConnection;

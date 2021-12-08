var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'iot_checkin_db_test.20211129_15h00_init',
});

connection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Success!');
    }
});

//connection.end();

module.exports = connection;

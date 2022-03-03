const pool = require('../../config/database');

module.exports = {
    createTable: (data, callback) => {
        let registration = `CREATE TABLE registration(
            user_id int auto_increment,
            first_name varchar(255) not null,
            last_name varchar(255) not null,
            user_name varchar(255) not null,
            user_email varchar(255) not null,
            user_password varchar(255) not null,
            PRIMARY KEY (user_id)
        )`;
        pool.query(registration, (err, results,fields) => {
            if (err) return callback(err);
            return callback(null, results);
        });
    },

    //data comes form the user controller
    create: (data, callback) => {
        pool.query(``)
    }
}
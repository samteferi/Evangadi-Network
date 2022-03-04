const pool = require('../../config/database');

module.exports = {
    createTable: (data, callback) => {
        let registration = `CREATE TABLE if not exists registration(
            user_id int auto_increment,
            first_name varchar(255) not null,
            last_name varchar(255) not null,
            user_name varchar(255) not null,
            user_email varchar(255) not null,
            user_password varchar(255) not null,
            PRIMARY KEY (user_id)
        )`;
        let question = `CREATE TABLE if not exists question(
            question_id int auto_increment,
            question varchar(255) not null,
            question_code_block varchar(255) not null,
            user_id int not null,
            PRIMARY KEY (question_id),
            FOREIGN KEY (user_id) REFERENCES registration(user_id)
        )`;

        pool.query(registration, (err, results, fields) => {
            if (err) return callback(err);


            pool.query(question, (err, results2, fields) => {
                if (err) return callback(err);
                return callback(null, { results, results2 });
            })
        })
    },

    //data comes form the user controller
    create: (data, callback) => {
        pool.query(``)
    }
}
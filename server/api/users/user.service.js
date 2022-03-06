const pool = require('../../config/database');

module.exports = {
    //data comes form the user controller
    create: (data, callback) => {
        pool.query(`INSERT INTO registration(first_name,last_name,user_name,user_email,user_password)VALUES(?,?,?,?,?)`,
            [
                data.firstName,
                data.lastName,
                data.userName,
                data.email,
                data.password
            ],
            (err, result) => {
                if (err) {
                    return callback(err);
                }
                return callback(null, result);
            }
        );
    }
}
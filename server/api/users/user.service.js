const pool = require('../../config/database');

module.exports = {
    //data comes form the user controller
    create: (data, callback) => {
        pool.query(`INSERT INTO registration(first_name,last_name,user_name,user_email,user_password)VALUES(?,?,?,?,?)`,
            [
                data.first_name,
                data.last_name,
                data.user_name,
                data.user_email,
                data.user_password
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
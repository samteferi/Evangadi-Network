const pool = require('../../config/database');

module.exports = {
    addQuestion: (data, callback) => {
        pool.query(`INSERT INTO question()VALUES`)
    },
    getAllQuestions: (callback) => {
        pool.query(`SELECT * FROM question`, [], (err, result) => {
            if (err) {
                return callback(err);
            }
            return callback(null, result);
        })
    },
    questionsById: (id, callback) => {
        pool.query(`SELECT * FROM question`, [id], (err, result) => {
            if (err) {
                return callback(err);
            }
            return callback(null, result);
        })
    }
}
const pool = require('../../config/database');

module.exports = {
    addQuestion: (data, callback) => {
        pool.query(`INSERT INTO question(question,question_code_block,user_id)VALUES(?,?,?)`,
            [
                data.question,
                data.questionCodeBlock,
                data.id
            ], (err, result) => {
                if (err) {
                    return callback(err);
                }
                return callback(null, result)
            }
        );
    },
    getAllQuestions: (callback) => {
        pool.query(`SELECT * FROM question`, [], (err, result) => {
            if (err) {
                return callback(err);
            }
            return callback(null, result);
        })
    },
    questionById: (id, callback) => {
        pool.query(`SELECT * FROM question WHERE question_id = ?`, [id], (err, result) => {
            if (err) {
                return callback(err);
            }
            return callback(null, result[0]);
        })
    }
}
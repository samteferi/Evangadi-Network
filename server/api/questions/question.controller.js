const bcrypt = require('bcryptjs');
const CryptoJS = require('crypto-js');
require("dotenv").config();
const { v4: uuidv4 } = require('uuid');
const { questionById, getAllQuestions, addQuestion } = require('./question.service');

module.exports = {
    createQuestion: (req, res) => {
        //id is user id
        const { question, id } = req.body;
        req.body.postId = CryptoJS.AES.encrypt('15', process.env.JWT_SECRET).toString();
        console.log(req.body.postId);

        //validation
        if (!question || !id) {
            return res.status(400).json({ msg: 'Not all fields have been provided!' })
        }



        //sending data to question table
        addQuestion(req.body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ msg: "database connection err" })
            }
            return res.status(200).json({
                msg: "New question was created successfully",
                data: results
            })
        })
    },
    getQuestions: (req, res) => {
        getAllQuestions((err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ msg: "database connection error" })
            }
            let post_id = results.map(item => item.post_id = item.post_id + 2);
            console.log(post_id);
            // results=results.map((item,i) =>object.assign(item,post_id[i]));
            console.log(results);
            return res.status(200).json({ data: results });
        })
    },
    getQuestionById: (req, res) => {
        console.log(req.params)
        let id = req.params.id;
        let bytes = CryptoJS.AES.decrypt(id, process.env.JWT_SECRET);
        id = bytes.toString(CryptoJS.enc.Utf8);
        console.log(id)
        questionById(id, (err, results) => {
            if (err) {
                console.log(err);
                return res
                    .status(500)
                    .json({ msg: "database connection error" })
            }
            if (!results) {
                return res.status(400).json({ msg: "Record not found" });
            }
            return res.status(200).json({ data: results });
        })
    }
}
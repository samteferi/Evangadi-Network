const { create } = require('./user.service');
const bcrypt = require('bcryptjs');
const pool = require('../../config/database');

module.exports = {
    createUser: (req, res) => {
        try {
            const { firstName, lastName, userName, email, password } = req.body;

            //validation 
            if (!firstName || !lastName || !userName || !email || !password)
                return res.status(400).json({ msg: 'Not all fields have been provided!' })
            if (password.length < 8)
                return res.status(400).json({ msg: 'Password must be at least 8 characters!' })
            pool.query('SELECT * FROM registration WHERE user_email = ?',
                [email],
                (err, results) => {
                    if (err) {
                        return res.status(err).json({ msg: "database connection error" })
                    }
                    if (results.length > 0) {
                        return res.status(400).json({ msg: "An account with this email already exists!" });
                    } else {
                        //password encryption
                        (async () => {
                            const salt = await bcrypt.genSalt();
                            req.body.password = await bcrypt.hash(password, salt);
                            console.log(req.body.password);
                        })()

                        //sending data to register
                        create(req.body, (err, results) => {
                            if (err) {
                                console.log(err);
                                return res.status(500).json({ msg: "database connection error" });
                            }
                            return res.status(200).json({
                                msg: "New user added successfully",
                                data: results
                            })
                        })
                    }
                })
        } catch (error) {
            res.status(500).json({
                error: error.message
            });
            console.log(error);
        }
    }
}
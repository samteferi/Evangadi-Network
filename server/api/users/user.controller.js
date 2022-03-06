const { create } = require('./user.service');
const bcrypt = require('bcryptjs');

module.exports = {
    createUser: async (req, res) => {
        try {
            req.body = {
                firstName: "Daniel",
                lastName: "Kebede",
                userName: "danny_gir",
                email: "admin@admin.com",
                password: "12345678"
            }
            console.log(req.body);
            const { firstName, lastName, userName, email, password } = req.body;

            //validation 
            if (!firstName || !lastName || !userName || !email || !password)
                return res.status(400).json({ msg: 'Not all fields have been provided!' })
            if (password.length < 8)
                return res.status(400).json({ msg: 'Password must be at least 8 characters!' })

            //password encryption
            const salt = await bcrypt.genSalt();
            req.body.password = await bcrypt.hash(password, salt);
            console.log(req.body.password);

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
        } catch (error) {
            res.status(500).json({ error: error.message });
        }

    }
}
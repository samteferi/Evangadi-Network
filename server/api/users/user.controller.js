const { createTable } = require('./user.service');

module.exports = {
    createRegistrationTable: (req, res) => {
        createTable(req, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ msg: "database connection error" });
            }
            return res.status(200).json({
                msg: "Tables Created",
                data: results
            })
        })
    }
}
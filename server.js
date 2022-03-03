require('dotenv').config();
const express = require("express");
const app = express();
const jwt = require('jsonwebtoken');
const port = process.env.PORT;


app.use("/api/users", require('./server/api/users/user.router'));
app.use(express.json());

app.get('/api', (req, res) => {
    res.json({
        success: 1,
        message: 'Connection established'
    });
})



app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
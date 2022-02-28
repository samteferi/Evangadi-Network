const express = require("express");
const mysql = require("mysql");
const app = express();
const port = process.env.port || 5000;

let connection = mysql.createConnection({
    host: 'localhost',
    user: '',
    password: '',
    database:''
})

connection.connect((error) => {
    if (error) throw error;
    console.log("mysql connection established")
})

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
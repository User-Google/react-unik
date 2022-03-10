const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "test_bd",
});

db.connect(function (err) {
    if (err) {
        return console.error('error: ' + err.message);
    }
    console.log('Connected to the MySQL server.');
})

app.get("/getList", (req, res) => {
    db.query("SELECT * FROM tea_catalog", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
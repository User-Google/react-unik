const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload');
// const FileType = require('file-type');

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

app.post("/create", (req, res) => {
    const photo = req.body.photo;
    const caption = req.body.caption;

    db.query(
        "INSERT INTO posttable (photo, caption) VALUES (?,?)",
        [photo, caption],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Values Inserted");
            }
        }
    );
});

app.get("/getFilms", (req, res) => {
    db.query("SELECT * FROM kino_table", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

// app.put("/update", (req, res) => {
//     const id = req.body.id;
//     const caption = req.body.caption;
//     db.query(
//         "UPDATE posttable SET caption = ? WHERE id = ?",
//         [caption, id],
//         (err, result) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 res.send(result);
//             }
//         }
//     );
// });


app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM posttable WHERE id = ?", id, (err, result) => {
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
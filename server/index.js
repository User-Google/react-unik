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
    database: "biathlon_cup",
});

db.connect(function (err) {
    if (err) {
        return console.error('error: ' + err.message);
    }
    console.log('Connected to the MySQL server.');
})

app.get("/getAllScores", (req, res) => {
    db.query("SELECT participants.surname as participant, race_types.type as race, genders.gender, countries.name as cup_country, scores.score, scores.place\n" +
        "\tFROM scores \n" +
        "    INNER JOIN participants \n" +
        "\tON scores.part_id = participants.id\n" +
        "    INNER JOIN race_types\n" +
        "    ON scores.race_id = race_types.id\n" +
        "    INNER JOIN countries\n" +
        "    ON scores.country_id = countries.id\n" +
        "    INNER JOIN genders\n" +
        "    ON scores.gender_id = genders.id;", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.get("/getPartInfo", (req, res) => {
    const part_name = req.query.part_name;

    db.query("SELECT participants.photo, participants.surname, participants.name, participants.age, participants.lastname, genders.gender, countries.name as country\n" +
        "\tFROM participants\n" +
        "\tINNER JOIN genders\n" +
        "    ON participants.gender_id = genders.id\n" +
        "    INNER JOIN countries\n" +
        "    ON participants.country = countries.id\n" +
        "    where surname = (?);", [part_name], (err, result) => {
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
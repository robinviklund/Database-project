var express = require("express");
var app = express();
var db = require("./database.js");
var md5 = require("md5");

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var HTTP_PORT = 8000;

// Start server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT));
});

app.use(express.static("public"));

app.get("/usercars", (req, res, next) => {
    var sql =
        "SELECT users_id.name, cars_id.make, cars_id.model FROM users_id INNER JOIN car_user_id ON users_id.id = car_user_id.user_id INNER JOIN cars_id ON cars_id.id = car_user_id.car_id";
    var params = [];
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: "success",
            data: rows
        });
    });
});

app.post("/add_usercar", function(req, res) {
    var user = req.body.UserName;
    var car = req.body.CarName;

    res.send(user + " " + car);
});

// Root path
app.get("/", (req, res, next) => {
    res.json({ message: "Ok" });
});

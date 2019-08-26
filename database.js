const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database("./Test.db", err => {
    if (err) {
        console.log(err.message);
    }
    console.log("Connection successful!");

    // db.close(err => {
    //     if (err) {
    //         console.log(err.message);
    //     }
    //     console.log("Disconnection successful!");
    // });
});

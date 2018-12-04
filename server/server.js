require('dotenv').config();
const mongoose = require("mongoose");

// import express from 'express';
const express = require("express");
const cors = require('cors');

// mongoose connection don't wait
mongoose.Promise = global.Promise;

let routes = require('./routes/svrRoutes');

const bodyParser = require("body-parser");
const logger = require("morgan");
const datamMdel = require("./models/svrDataModel");

const API_PORT = 3001;
const app = express();
const router = express.Router();

// this is our MongoDB database
const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const pass = process.env.DB_PASS;

const dbRoute = "mongodb://" + user + ":" + pass + "@" + host;
console.log(dbRoute);

// connects our back end code with the database
mongoose.connect(
    dbRoute,
    { useNewUrlParser: true }
);

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));
app.use(cors());
/*

// this is our get method
// this method fetches all available data in our database
router.get("/getData", (req, res) => {
    Data.find((err, data) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: data });
    });
});

// this is our update method
// this method overwrites existing data in our database
router.post("/updateData", (req, res) => {
    const { id, update } = req.body;
    Data.findOneAndUpdate(id, update, err => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});

// this is our delete method
// this method removes existing data in our database
router.delete("/deleteData", (req, res) => {
    const { id } = req.body;
    Data.findOneAndDelete(id, err => {
        if (err) return res.send(err);
        return res.json({ success: true });
    });
});

// this is our create methid
// this method adds new data in our database
router.post("/putData", (req, res) => {
    let data = new Data();

    const { id, message } = req.body;

    if ((!id && id !== 0) || !message) {
        return res.json({
            success: false,
            error: "INVALID INPUTS"
        });
    }
    data.message = message;
    data.id = id;
    data.save(err => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});
*/

// append /api for our http requests
app.use("/api", router);

//@api "adduser"

// @api "/registercompany"
// function registerCompany(data) {
//     if data.uid != null {
//         error;
//     }
//     db.insert(table_name, data);
// }

// run the routes
routes(app);

// serving static files
app.use(express.static('public'));

// app.get('/data', (req, res) =>
//     res.send(`Node and express server are running on port ${API_PORT}`)
// );

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));

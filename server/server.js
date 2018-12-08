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

// const dbRoute = "mongodb://stivens:1234567890a@ds037824.mlab.com:37824/edva";
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

// Connecting to mysql

const mysql = require('mysql2');

// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));
app.use(cors());


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
// sql connection

const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'dragon',
    database: 'employees'
});
try{
connection.connect((err) =>{
        if (err) throw err;
        console.time('mysql');
        console.log('Successfully connected to mysql');
    try{
        connection.query('SELECT * FROM employees LIMIT 100', (err, results, fields) =>{
        if (err) throw err;
        console.log(fields);
        console.log(results);
        })} catch (e) {
            console.log(err)
        }
        connection.end();
    })
} catch (e) {
    console.log(err)
    }
// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));


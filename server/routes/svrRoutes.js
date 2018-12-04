// import {addNewData} from "../controllers/svrController";

let {
    addNewData,
    getData,
    getDataByID,
//    getDataByManID,
    updateDataByID,
    deleteDataByID,
    addNewUser,
    getUserByID,
    getUser,
    updateUserByID,
    getDataByManID
} = require('../controllers/svrController');

let {
    getTweetData
} = require('../twitter');

const routes = (app) => {
    app.route('/data')
        .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);
            next();
        }, getData)

        // POST endpoint
        .post(addNewData);

    app.route('/data/twitter')
        .get((req, res) => {
            getTweetData(req, res);
        });

    app.route('/data/:dataId')
        // get specific data Item
        .get(getDataByID)
        // put request
        .put(updateDataByID)
        // delete request
        .delete(deleteDataByID);

//    app.route('/data/:dataManId')
        // get all field for that manager
//        .get(getDataByManID)
    // get specific data Item
    app.route('/user')
        .post(addNewUser)

        .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);
            next();
        }, getUser);
    app.route('/user/:userId')
        .get(getUserByID)
    // put request
        .put(updateUserByID);
    app.route('/man/:userId')
        .get(getDataByManID);
};

module.exports = routes;

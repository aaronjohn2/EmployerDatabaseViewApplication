// import {addNewData} from "../controllers/svrController";

let {
    addNewData,
    getData,
    getDataByID,
    updateDataByID,
    deleteDataByID
} = require('../controllers/svrController');
const routes = (app) => {
    app.route('/data')
        .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, getData)

        // POST endpoint
        .post(addNewData);
    app.route('/data/:dataId')
        // get specific data Item
        .get(getDataByID)
        // put request
        .put(updateDataByID)
        // delete request
        .delete(deleteDataByID);
};

module.exports = routes;

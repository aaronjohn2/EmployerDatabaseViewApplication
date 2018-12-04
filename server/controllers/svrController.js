const mongoose = require("mongoose");

const  { DataSchema } = require( '../models/svrDataModel');
const  { UsersSchema } = require( '../models/svrUsersModel');


const DataColl = mongoose.model('dataModel', DataSchema );

const UserColl = mongoose.model('userModel', UsersSchema );

module.exports.addNewData = (req, res) => {
    let newDataItem = new DataColl(req.body);
    newDataItem.save((err, dataItem) =>{
        if (err) {
            res.send(err);
        } else if (dataItem.length === 0) {
            res.send(404)
        } else {
            res.json(dataItem);
        }
    });
};

module.exports.addNewUser = (req, res) => {
    let newUserItem = new UserColl(req.body);

    UserColl.find({uid: newUserItem.uid}, (err, userItem) => {
        if (err) {
            res.send(err)
        } else if (userItem.length > 0) {
            res.send(409);
        } else {
            newUserItem.save((err, userItem) =>{
                if (err) {
                    res.send(err);
                } else if (userItem.length === 0) {
                    res.send(404);
                } else {
                    res.json(userItem);
                }
            });
        }
    });
};

module.exports.getData = (req, res) => {
    DataColl.find({}, (err, dataItem) =>{
        if (err) {
            res.send(err);
        } else if (dataItem.length === 0) {
            res.send(404)
        } else {
            res.json(dataItem);
        }
    });
};

module.exports.getUser = (req, res) => {
    UserColl.find({}, (err, userItem) =>{
        if (err) {
            res.send(err);
        } else if (userItem.length === 0) {
            res.send(404)
        } else {
            res.json(userItem);
        }
    });
};


module.exports.getDataByID = (req, res) => {
    DataColl.find({uid: req.params.dataId}, (err, dataItem) => {
        console.log(dataItem.length);
    if (err) {
        res.send(err);
    } else if (dataItem.length === 0) {
        res.send(404)
    } else {
        res.json(dataItem);
    }
    })
};

module.exports.getUserByID = (req, res) => {
    UserColl.find({uid: req.params.userId}, (err, userItem) => {
        if (err) {
            res.send(err)
        } else if (userItem.length === 0) {
            res.send(404)
        } else {
            res.json(userItem);
        }
    });
};


module.exports.getDataByManID = (req, res) => {
    UserColl.find({uid: req.params.userId}, (err, userItem) => {
        let obj = JSON.parse(userItem);
    console.log(userItem);
    console.log(obj["uid"]);

//    DataColl.findByManId(req.params.dataManId, (err, dataItem) => {
        if (err) {
            res.send(err);
        }
            res.json(userItem);
        }
    );
};

module.exports.updateDataByID = (req, res) => {
    DataColl.findOneAndUpdate({ _id: req.params.dataId}, req.body, {new: true}, (err, dataItem) => {
        if (err) {
            res.send(err);
        } else if (dataItem.length === 0) {
            res.send(404)
        } else {
            res.json(dataItem);
        }
    });
};

module.exports.updateUserByID = (req, res) => {
        let data = {
            "access_level": req.body["access_level"],
            "company": req.body["company"]
        };

        UserColl.findOneAndUpdate({ uid: req.params.userId}, data, {new: true}, (err, userItem) => {

        if (err) {
            res.send(err);
        } else if (userItem.length === 0) {
            res.send(404)
        } else {
            res.json(userItem);
        }
    });
};


module.exports.deleteDataByID = (req, res) => {
    DataColl.remove({ _id: req.params.dataId},  (err, dataItem) => {
        if (err) {
            res.send(err);
        }
        res.json({message: 'Successfully deleted contact'});
    });
};

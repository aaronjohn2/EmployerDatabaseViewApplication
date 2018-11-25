const mongoose = require("mongoose");

const  { DataSchema } = require( '../models/svrDataModel');

const DataColl = mongoose.model('dataModel', DataSchema );

module.exports.addNewData = (req, res) => {
    let newDataItem = new DataColl(req.body);

    newDataItem.save((err, dataItem) =>{
        if (err) {
            res.send(err);
        }
        res.json(dataItem);
    });
};

module.exports.getData = (req, res) => {
    DataColl.find({}, (err, dataItem) =>{
        if (err) {
            res.send(err);
        }
        res.json(dataItem);
    });
};

module.exports.getDataByID = (req, res) => {
    DataColl.findById(req.params.dataId, (err, dataItem) => {
    if (err) {
        res.send(err);
    }
    res.json(dataItem);
    });
};

module.exports.updateDataByID = (req, res) => {
    DataColl.findOneAndUpdate({ _id: req.params.dataId}, req.body, {new: true}, (err, dataItem) => {
        if (err) {
            res.send(err);
        }
        res.json(dataItem);
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

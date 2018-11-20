const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// this will be our data base's data structure
//var dataModel = mongoose.model('dataModel', schema);
//var usersModel = mongoose.model('usersModel', schema);

let dataModel = mongoose.model('dataModel', {
        uid: String,
        first_name: String,
        last_name: String,
        position: String,
        salary: Number,
        manager_id: String,
        company:String,
        access_level: Number
    });

let usersModel = mongoose.model('usersModel',{
        uid: String,
        access_type: Number,
        company: String
});

module.exports = {
    dataModel,
    usersModel
}

// const DataSchema = new Schema(
//     table_name: {
//     },
//     table_name2: {
//
//     },
//     { timestamps: true }
// );

// export the new Schema so we could modify it using Node.js
// module.exports = mongoose.model("Data", Schema);
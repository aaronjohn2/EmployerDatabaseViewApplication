const mongoose = require("mongoose"),
    Schema = mongoose.Schema;

Schema.exports = mongoose.model('userModel',{
    uid: String,
    email: String,
    access_level: Number,
    company: String,
    create_date: {
        type: Date,
        default: Date.now()
    }
});

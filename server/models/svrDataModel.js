const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

Schema.exports = mongoose.model('dataModel',{
    first_name: {
        type:String,
        required: 'Enter a first name'
    },
    last_name: {
        type:String,
        required: 'Enter a last name'
    },
    email: String,
    position: String,
    salary: Number,
    manager_id: String,
    company:String,
    storage: String,
    access_level: Number,
    create_date: {
        type: Date,
        default: Date.now()
    }
});

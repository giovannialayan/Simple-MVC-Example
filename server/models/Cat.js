const mongoose = require('mongoose');

//name, # of beds, date created
const CatSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    bedsOwned: {
        type: Number,
        min: 0,
        required: true,
    },
    createdDate: {
        type: Date,
        default: Date.now,
    },
});

let CatModel = mongoose.model('Cat', CatSchema);

module.exports = CatModel;
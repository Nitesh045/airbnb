const mongoose = require('mongoose');

let cartSchema = new mongoose.Schema({
    hotelId: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true,
    },
    country: {
        type: String,
        require: true,
    },
    hotelImg: {
        type: Array,
        require: true
    },
    city: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    nameOfhouse: {
        type: String,
        require: true,
    },

    hostName: {
        type: String,
        require: true,
    },

});

let cartCollection = mongoose.model('CartIteam',cartSchema);
module.exports= cartCollection;
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: {
        type:String,
        required: true
    },
    describtion:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Event', eventSchema);
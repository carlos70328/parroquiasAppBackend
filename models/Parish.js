const { Schema, model } = require('mongoose');

const ParishSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    timetables:{
        type: [String],
        required: false,
    },
    diocese: {
        type: Schema.Types.ObjectId,
        ref: 'Diocese',
        required: false,
    },
    location:{
        city: String,
        lat: Number,
        lon: Number
    }
});

module.exports = model('Parish', ParishSchema);
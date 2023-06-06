const { Schema, model } = require('mongoose');

const ChapelSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    timetables:{
        type: [String],
        required: false,
    },
    parish: {
        type: Schema.Types.ObjectId,
        ref: 'Parish',
        required: false,
    },
    location:{
        city: String,
        lat: Number,
        lon: Number
    }
});

module.exports = model('Chapel', ChapelSchema);
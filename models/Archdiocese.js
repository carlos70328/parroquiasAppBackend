const { Schema, model } = require('mongoose');

const ArchdioceseSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    fechaCreacion: {
        type: Date,
        required: true,
    },
    country: {
        type: Schema.Types.ObjectId,
        ref: 'Country',
        required: true,
    },

});

module.exports = model('Archdiocese', ArchdioceseSchema);

const { Schema, model } = require('mongoose');

const DioceseSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    fechaCreacion: {
        type: Date,
        required: true,
    },
    archdiocese: {
        type: Schema.Types.ObjectId,
        ref: 'Archdiocese',
        required: true,
    },
});

module.exports = model('Diocese', DioceseSchema);
const { Schema, model } = require('mongoose');

const CountrySchema = Schema({
    name: {
        type: String,
        required: true,
    },
    fechaCreacion: {
        type: Date,
        required: true,
    },
   
});

module.exports = model('Country', CountrySchema);

const { Schema, model } = require("mongoose");

const UsuarioSchema = Schema({
  nombre: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  rol: {
    type: String,
    required: true,
  },
  estado: {
    type: String,
    required: true,
    enum: ["Activo", "Inactivo"],
  },
  parish: {
    type: Schema.Types.ObjectId,
    ref: 'Parish',
    required: true,
},
});

module.exports = model("Usuario", UsuarioSchema);

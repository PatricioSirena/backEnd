/*
admin,firstName,lastName,email,password
*/
const { Schema, model } = require('mongoose');
const UsuarioSchema = Schema({
    usuario: {
        type: String,
    },
    correo: {
        type: String,
    },
    password: {
        type: String,
    },
    admin: {
        type: Boolean,
        default: false
    },
    activo: {
        type: Boolean,
        default: true
    }
})
UsuarioSchema.methods.toJSON = function () {
    const { __v, _id, ...usuario } = this.toObject();
    usuario.uid = _id;
    return usuario
};
module.exports = model("Usuario", UsuarioSchema);





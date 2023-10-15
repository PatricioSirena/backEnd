const {Schema,model} =require('mongoose');
const UsuarioSchema = Schema({
    // usuario:{
    //     type:String,
    //     required:[true, "El usuario es obligatorio"]
    // },
    nombre:{
        type:String,
        required:[true, "El nombre es obligatorio"]
    },
    apellido:{
        type:String,
        required:[true, "El apellido es obligatorio"]
    },
    correo:{
        type:String,
        required:[true, "El correo es obligatorio"]
    },
    password:{
        type:String,
        required:[true, "El Password es obligatorio"]
    },
    admin:{
        type:Boolean,
        default: false
    },
    activo:{
        type:Boolean,
        default: false
    }
})
UsuarioSchema.methods.toJSON = function () {
    const {__v,_id,...usuario} = this.toObject();
    usuario.uid = _id;
    return usuario
};
module.exports = model("Usuario",UsuarioSchema);

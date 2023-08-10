/*
admin,firstName,lastName,email,password
*/
const {Schema,model} =require('mongoose');
const UsuarioSchema = Schema({
    firstName:{
        type:String,
        required:[true, "El nombre es obligatorio"]
    },
    lastName:{
        type:String,
        required:[true, "El Apellido es obligatorio"]
    },
    email:{
        type:String,
        required:[true, "El Email es obligatorio"]
    },
    password:{
        type:String,
        required:[true, "El Password es obligatorio"]
    },
    admin:{
        type:Boolean,
        default:false
    },
    activo:{
        type:Boolean,
        default:false
    }
})

UsuarioSchema.methods.toJSON = function () {
    const {__v, password,_id,...usuario} = this.toObject();
    usuario.uid = _id;
    return usuario
};
module.exports = model("Usuario",UsuarioSchema);






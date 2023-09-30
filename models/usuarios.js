/*
admin,firstName,lastName,email,password
*/
const {Schema,model} =require('mongoose');
const UsuarioSchema = Schema({
    usuario:{
        type:String,
        required:[true, "El nombre es obligatorio"]
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
        default:true
    }
})
UsuarioSchema.methods.toJSON = function () {
    const {__v,_id,...usuario} = this.toObject();
    usuario.uid = _id;
    return usuario
};
module.exports = model("Usuario",UsuarioSchema);


   
    
  
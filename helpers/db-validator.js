const Usuario = require('../models/usuarios') // aca importamos nuestro modelo

const esAdmin = async()=>{
    const user = await Usuario.findOne({_id:id})
    if (!user.admid) {
        // throw new Error("El usuario no es administrador") // Si el usuario no es admin, manda error
        return "El usuario no es administrador"
    }else{
        return true
    }
}
const usuarioExiste = async(id) =>{
    const existeUsuario = await Usuario.findById(id)
    if (!existeUsuario){
        throw new Error (`El id ${id} no corresponde a un usuario registrado`)
    }
}
module.export={
    esAdmin,
    usuarioExiste
}
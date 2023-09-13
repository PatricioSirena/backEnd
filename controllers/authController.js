
// test

const bcryt = require('bcrypt');
const Usuario = require('../models/usuarios');
const {generarJWT} =require('../helpers/generar-jwt')
const login=async(req,res)=>{
    let {email,password}=req.body;
    try {
        const user = await Usuario.findOne({email:email})
        console.log(user);
        if(user){
            if(bcryt.compareSync(password,user.password)){
                console.log("Usuario autenticado!");
                const token = await generarJWT(user.uid);
                return res.status(200).json({
                    user,
                    token
                })
            }else{
                return res.status(401).json({msg:"datos incorrectos!"})
            }
        }else{
            return res.status(404).json({
                msg:"Usuario no existe!"
            })
        }
    } catch (error) {
        return res.status(500).json({
            msg:"Contacta al administrador"
        })
    }
    
}
module.exports={
    login
}
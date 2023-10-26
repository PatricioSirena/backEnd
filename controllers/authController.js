const bcrypt = require('bcrypt');
const Usuario = require('../models/usuarios');
const { generarJWT } = require('../helpers/generar-jwt')
const login = async (req, res) => {
    let { password, correo } = req.body;
    const datosIncorrectos = true;
    const usuarioInexistente = true;
    const contactaAdmin = true;
    try {
        const user = await Usuario.findOne({ correo: correo })
        if (user) {
            if (bcrypt.compareSync(password, user.password)) {
                console.log("Usuario autenticado!");
                const token = await generarJWT(user.uid);
                return res.status(200).json({
                    user,
                    token
                })
            } else {
                return res.status(401).json({ msg: "datos incorrectos!"}),
                datosIncorrectos
            }
        } else {
            return res.status(404).json({msg: "Usuario no existe!"}),
            usuarioInexistente
        }
    } catch (error) {
        return res.status(500).json({msg:"Contacta al administrador"}),
        contactaAdmin
    }
}
module.exports = {
    login
}
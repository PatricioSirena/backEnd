const jwt = require('jsonwebtoken')
const generarJWT = (uid) => {
    return new Promise((resolve, reject) => {
        const payload = ({ uid })
        jwt.sign(
            payload,
            process.env.SECRETO_PRIVADO_KEY,
            {
                expiresIn: "4hs"
            },
            (err, token) => {
                if (err) {
                    console.log(err);
                    reject("No se puede generar el token")
                } else {
                    console.log(token);
                    resolve(token)
                }
            }
        )
    })
}

module.export = {generarJWT}     
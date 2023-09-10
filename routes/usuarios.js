const { Router } = require("express")
const router = Router()
const usersControllers = require('../controllers/usersController')
const { validarCampos } = require('../middlewares/validar_campos')
const { check } = require('express-validator')
const { usuarioExiste } = require('../helpers/db-validator')

router.get("/getUsers", usersControllers.index)
router.get("/getOneUser/:id", [
    check("id", "No es un id Válido").isMongoId(),
    check("id").custom(usuarioExiste),
    validarCampos
], usersControllers.getOne)
router.put("/updateUser/:id", validarCampos, usersControllers.update)
router.post("/createUser/", [
    check("firstName","El nombre es obligatorio"),
    check("lastName","El apellido es obligatorio"),
    check("email","No es un correo valido").isEmail,
    check("password","La contraseña debe tener un minimo de 8 caracteres").isLength({min:8}),
    validarCampos
], usersControllers.create)
router.delete("/deleteUser/:id", [
    check("id", "No es un id Válido").isMongoId(),
    check("id").custom(usuarioExiste),
    validarCampos
], usersControllers.del)
router.put("/activeUser/:id", validarCampos, usersControllers.activeUser)

module.exports = router
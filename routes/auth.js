const { Router } = require("express")
const { check } = require('express')
const router = Router()
const authController = require('../controllers/authController') 

router.post("/login", [
    check("email", "El email no es valido").isEmail(),
    check("password", "La contraseña es obligatoria").notEmpty(),
    validarCampos 
], authController.login)

module.exports = router; 
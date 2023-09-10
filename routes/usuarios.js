const { Router } = require("express");
const router = Router();
const usersController = require('../controllers/usersController');
const { validarCampos } = require('../middlewares/validar_campos');
const { usuarioExiste, esAdmin } = require('../helpers/db-validator');
const { check } = require('express-validator');

router.get("/getUsers", usersController.index);

router.get("/getOneUser/:id", [
    check("id", "No es un id válido!").isMongoId(),
    check("id").custom(usuarioExiste),
    validarCampos
], usersController.getOne);

router.put("/updateUser/:id", [
    check("id", "No es un id válido!").isMongoId(),
    check("id").custom(usuarioExiste).isEmail(),
    validarCampos
], usersController.update);

router.post("/createUser", [
    check("firstName","El nombre es obligatorio"),
    check("lastName","El apellido es obligatorio"),
    check("email","No es un correo válido"),
    check("password","La contraseña debe tener un mímino de 8 caracteres").isLength({min:8}),
    validarCampos
], usersController.create);

router.delete("/deleteUser/:id", [
    check("id", "No es un id válido!").isMongoId(),
    check("id").custom(usuarioExiste),
    validarCampos
], usersController.del);

router.put("/activeUser/:id", validarCampos, usersController.activeUser);

module.exports = router;

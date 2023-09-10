const { Router } = require("express")
const router = Router()
const usersControllers = require('../controllers/usersController')
const {validarCampos} = require('../middlewares/validar_campos')
const {check} = require('express-validator')
const {usuarioExiste} = require('../helpers/db-validator')

router.get("/getUsers", usersControllers.index)
router.get("/getOneUser/:id", [
    check("id", "No es un id Válido").isMongoId(),
    check("id").custom(usuarioExiste),
    validarCampos
], usersControllers.getOne)
router.put("/updateUser/:id",validarCampos, usersControllers.update)
router.post("/createUser/",validarCampos, usersControllers.create)
router.delete("/deleteUser/:id", usersControllers.del)
router.put("/activeUser/:id",validarCampos, usersControllers.activeUser)

module.exports = router
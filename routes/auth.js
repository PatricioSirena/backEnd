const {Router} = require('express');
const {check} = require('express-validator');
const { validarCampos } = require('../middlewares/validar_campos');
const authController = require('../controllers/authController')
const router = Router();

router.post("/login",[
    check("email", "el email no es válido").isEmail(),
    check("password","La conreaseña es obligatoria").notEmpty(),
    validarCampos
],authController.login);

module.exports = router;
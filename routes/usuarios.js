const { Router } = require("express");
const router = Router();
const usersController = require('../controllers/usersController');
router.get("/getUsers", usersController.index);
router.get("/getOneUser/:id", usersController.getOne);
router.put("/updateUser/:id", usersController.update);
router.post("/createUser", usersController.create);
router.delete("/deleteUser/:id", usersController.del);

module.exports = router;
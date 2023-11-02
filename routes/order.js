const {Router} = require("express")
const router = Router()
const orderController = require('../controllers/orderController')

router.get("/getOrders", orderController.index)
router.get("/getOneOrder/:id", orderController.getOne)
router.put("/updateOrder/:id", orderController.update)
router.post("/createOrder/", orderController.create)

module.exports = router

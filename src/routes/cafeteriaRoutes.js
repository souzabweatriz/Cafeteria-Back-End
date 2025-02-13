const express = require("express");
const router = express.Router();
const itemController = require("../controllers/itemController");
const orderController = require("../controllers/orderController");

router.get("/menu", itemController.getMenu);
router.post("/order", orderController.addOrder);
router.get("/order/:id", orderController.getOrderById);
router.delete("/order/:id", orderController.deleteOrder);

module.exports = router;
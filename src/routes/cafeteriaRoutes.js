const express = require("express");
const router = express.Router();
const itemController = require("../controllers/itemController");
const orderController = require("../controllers/orderController");

router.get("/orders", orderController.getAllOrders);
router.get("/menu", itemController.getMenu);
router.post("/orders", orderController.addOrder);
router.delete("/orders/:id", orderController.deleteOrder);
router.get("/orders/:id", orderController.getOrderbyId);

module.exports = router;
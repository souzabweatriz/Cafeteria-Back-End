const express = require("express");
const router = express.Router();
const itemController = require("../controllers/itemController");
const orderController = require("../controllers/orderController");

router.get("/menu", itemController.getMenu);
router.post("/orders", orderController.addOrder);
router.get("/orders/:id", orderController.getOrderbyId);
router.delete("/orders/:id", orderController.deleteOrder);

module.exports = router;
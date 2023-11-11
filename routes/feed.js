const express = require('express');
const feedController = require("../controllers/feed");

const router = express.Router();

router.get("/customers", feedController.getCustomers);
router.get("/topcustomers", feedController.getTopCustomers);
router.get("/items", feedController.getItems);
router.get("/topitems", feedController.getTopItems);
router.get("/sales", feedController.getSales);
router.get("/topmonths", feedController.getTopMonths);


module.exports = router;
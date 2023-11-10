const express = require('express');
const feedController = require("../controllers/feed");

const router = express.Router();

router.get("/customers", feedController.getCustomers);
// router.post("/post", feedController.createPost);
// router.get("/products", feedController.getProducts);


module.exports = router;
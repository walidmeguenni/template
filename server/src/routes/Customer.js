const express = require("express");
const router = express.Router();

const checkAuth = require("../middleware/checkAuth");
const customerControllers = require("../controllers/customer");

router.get("/", checkAuth, customerControllers.GetAllcustomers);

router.post("/", checkAuth, customerControllers.Postcustomers);

router.patch("/:id", checkAuth, customerControllers.Updatecustomer);

router.delete("/:id", checkAuth, customerControllers.Deletecustomer);

module.exports = router;
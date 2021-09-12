const express = require("express");
const router = express.Router();

const checkAuth = require("../middleware/checkAuth");
const supplierControllers = require("../controllers/supplier");

router.get("/", checkAuth, supplierControllers.GetAllsuppliers);

router.post("/", checkAuth, supplierControllers.Postsuppliers);

router.patch("/:id", checkAuth, supplierControllers.Updatesupplier);

router.delete("/:id", checkAuth, supplierControllers.Deletesupplier);

module.exports = router;

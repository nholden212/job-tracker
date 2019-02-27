const express = require("express");
const router = express.Router();
const staticController = require("../controllers/staticController");

router.get("/example", staticController.example);

module.exports = router;

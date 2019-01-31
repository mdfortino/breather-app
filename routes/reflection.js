const express = require("express");
const router = express.Router();
const reflectionController = require("../controllers/reflection");


router.get("/:id", reflectionController.show);



module.exports = router;
const express = require("express");
const router = express.Router();
const reflectionController = require("../controllers/reflection");
// const Timer = require('easytimer.js').Timer;

router.get("/:id", reflectionController.show);
router.post("/", reflectionController.create);
router.get("/new", reflectionController.new);
router.get("/:id", reflectionController.show);
router.delete("/:id", reflectionController.delete)

module.exports = router;
const express = require("express");
const router = express.Router();
const reflectionController = require("../controllers/reflection");

router.get('/show', reflectionController.requireAuth, reflectionController.index)
router.get('/new', reflectionController.requireAuth, reflectionController.new)
router.post('/show', reflectionController.requireAuth, reflectionController.create)
router.get('/edit/:id', reflectionController.requireAuth, reflectionController.edit)
router.put('/edit/:id', reflectionController.requireAuth, reflectionController.update)
router.delete("/edit/:id", reflectionController.requireAuth, reflectionController.delete)

module.exports = router;
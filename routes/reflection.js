const express = require("express");
const router = express.Router();
const reflectionController = require("../controllers/reflection");

router.get('/show', reflectionController.requireAuth, reflectionController.index)
router.get('/new', reflectionController.requireAuth, reflectionController.new)
router.post('/', reflectionController.requireAuth, reflectionController.create)
// router.get("/:id", reflectionController.show);
router.put("/:id", reflectionController.requireAuth, reflectionController.update);
router.delete("/:id", reflectionController.requireAuth, reflectionController.delete)


module.exports = router;
const express = require("express");
const router = express.Router();
const reflectionController = require("../controllers/reflection");

// router.post("/", intentionController.requireAuth, intentionController.create);
// router.get("/new", intentionController.requireAuth, intentionController.new);
// router.get("/:id", intentionController.show);
// router.put("/:id", intentionController.requireAuth, intentionController.update);
// router.delete("/:id", intentionController.requireAuth, intentionController.delete)


router.get('/show', reflectionController.requireAuth, reflectionController.index)
router.get('/new', reflectionController.requireAuth, reflectionController.new)
router.post('/show', reflectionController.requireAuth, reflectionController.create)
router.get('/edit/:id', reflectionController.requireAuth, reflectionController.edit)
router.put('/edit/:id', reflectionController.requireAuth, reflectionController.update)
router.delete("/edit/:id", reflectionController.requireAuth, reflectionController.delete)

module.exports = router;
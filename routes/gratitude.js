const express = require("express");
const router = express.Router();
const gratitudeController = require("../controllers/gratitude")

router.post("/", gratitudeController.create);
router.get("/new", gratitudeController.new);
router.get("/:id", gratitudeController.show);
router.put("/:id", gratitudeController.update);
router.delete("/:id", gratitudeController.delete)
module.exports = router;


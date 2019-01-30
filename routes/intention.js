const express = require("express");
const router = express.Router();
const intentionController = require("../controllers/intention");

router.post("/", intentionController.requireAuth, intentionController.create);
router.get("/new", intentionController.requireAuth, intentionController.new);
router.get("/:id", intentionController.show);
router.put("/:id", intentionController.requireAuth, intentionController.update);
router.delete("/:id", intentionController.requireAuth, intentionController.delete)


module.exports = router;
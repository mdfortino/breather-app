const express = require("express");
const router = express.Router();
const awarenessController = require("../controllers/awareness");

router.post("/", awarenessController.create);
router.get("/new", awarenessController.new);
router.get("/:id", awarenessController.show);
router.put("/:id", awarenessController.update);
router.delete("/:id", awarenessController.delete)
module.exports = router;
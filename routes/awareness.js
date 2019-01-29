const express = require("express");
const router = express.Router();
const awarenessController = require("../controllers/awareness");



router.post("/", awarenessController.requireAuth, awarenessController.create);
router.get("/new", awarenessController.requireAuth, awarenessController.new);
router.get("/:id", awarenessController.requireAuth, awarenessController.show);
router.put("/:id", awarenessController.requireAuth, awarenessController.update);
router.delete("/:id", awarenessController.requireAuth, awarenessController.delete)

module.exports = router;
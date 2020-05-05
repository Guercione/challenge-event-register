const express = require("express");
const router = express.Router();

// CONTROLLERS
const EventController = require("./controllers/EventController");

// EVENT CONTROLLER
router.get("/event", EventController.index);
router.get("/event/:id", EventController.get);
router.post("/event", EventController.create);
router.delete("/event/:id", EventController.delete);

module.exports = router;

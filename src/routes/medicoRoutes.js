
const express = require("express");
const router = express.Router();
const medicoController = require("../controllers/medicoController");

router.post("/", medicoController.createMedico);
router.get("/:id", medicoController.getMedicoById);
router.get("/", medicoController.getAllMedicos);

module.exports = router;


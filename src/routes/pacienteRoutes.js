const express = require("express");
const router = express.Router();
const pacienteController = require("../controllers/pacienteController");

// Rotas mais específicas primeiro
router.get("/:id", pacienteController.getPacienteById);
router.delete("/:id", pacienteController.deletePaciente);

// Rota mais genérica por último
router.get("/", pacienteController.getAllPacientes);
router.post("/", pacienteController.createPaciente);

module.exports = router;


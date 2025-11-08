
const express = require("express");
const router = express.Router();
const consultaController = require("../controllers/consultaController");

router.post("/", consultaController.createConsulta);
router.get("/:id", consultaController.getConsultaById);
router.get("/medico/:medicoId", consultaController.getConsultasByMedicoId);
router.get("/", consultaController.getAllConsultas);

module.exports = router;


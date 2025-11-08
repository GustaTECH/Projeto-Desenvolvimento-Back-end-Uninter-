const medicoService = require("../services/medicoService");

exports.createMedico = (req, res) => {
  medicoService.createMedico(req.body, (err, medico) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    res.status(201).json(medico);
  });
};

exports.getMedicoById = (req, res) => {
  medicoService.getMedicoById(req.params.id, (err, medico) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!medico) {
      return res.status(404).json({ message: "Médico não encontrado." });
    }
    res.status(200).json(medico);
  });
};

exports.getAllMedicos = (req, res) => {
  medicoService.getAllMedicos((err, medicos) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json(medicos);
  });
};


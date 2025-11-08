const consultaService = require("../services/consultaService");

exports.createConsulta = (req, res) => {
  consultaService.createConsulta(req.body, (err, consulta) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    res.status(201).json(consulta);
  });
};

exports.getConsultaById = (req, res) => {
  consultaService.getConsultaById(req.params.id, (err, consulta) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!consulta) {
      return res.status(404).json({ message: "Consulta não encontrada." });
    }
    res.status(200).json(consulta);
  });
};

exports.getAllConsultas = (req, res) => {
  consultaService.getAllConsultas((err, consultas) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json(consultas);
  });
};

exports.getConsultasByMedicoId = (req, res) => {
  consultaService.getConsultasByMedicoId(req.params.medicoId, (err, consultas) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json(consultas);
  });
};


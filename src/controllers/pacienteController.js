
const pacienteService = require("../services/pacienteService");

exports.createPaciente = (req, res) => {
  pacienteService.createPaciente(req.body, (err, paciente) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    res.status(201).json(paciente);
  });
};

exports.getPacienteById = (req, res) => {
  pacienteService.getPacienteById(req.params.id, (err, paciente) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!paciente) {
      return res.status(404).json({ message: "Paciente não encontrado." });
    }
    res.status(200).json(paciente);
  });
};

exports.getAllPacientes = (req, res) => {
  pacienteService.getAllPacientes((err, pacientes) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json(pacientes);
  });
};

exports.deletePaciente = (req, res) => {
  pacienteService.deletePaciente(req.params.id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (result.changes === 0) {
      return res.status(404).json({ message: "Paciente não encontrado." });
    }
    res.status(204).send(); // 204 No Content para exclusão bem-sucedida
  });
};


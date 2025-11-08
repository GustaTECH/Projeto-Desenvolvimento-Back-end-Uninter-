
const pacienteRepository = require("../repositories/pacienteRepository");

exports.createPaciente = (paciente, callback) => {
  // Validações básicas
  if (!paciente.nome || !paciente.cpf || !paciente.dataNascimento) {
    return callback(new Error("Todos os campos são obrigatórios."));
  }
  pacienteRepository.createPaciente(paciente, callback);
};

exports.getPacienteById = (id, callback) => {
  pacienteRepository.getPacienteById(id, callback);
};

exports.getAllPacientes = (callback) => {
  pacienteRepository.getAllPacientes(callback);
};

exports.deletePaciente = (id, callback) => {
  pacienteRepository.deletePaciente(id, callback);
};


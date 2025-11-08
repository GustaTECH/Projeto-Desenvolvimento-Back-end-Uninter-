
const medicoRepository = require("../repositories/medicoRepository");

exports.createMedico = (medico, callback) => {
  if (!medico.nome || !medico.crm || !medico.especialidade) {
    return callback(new Error("Todos os campos são obrigatórios."));
  }
  medicoRepository.createMedico(medico, callback);
};

exports.getMedicoById = (id, callback) => {
  medicoRepository.getMedicoById(id, callback);
};

exports.getAllMedicos = (callback) => {
  medicoRepository.getAllMedicos(callback);
};


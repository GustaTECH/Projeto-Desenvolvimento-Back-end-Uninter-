
const consultaRepository = require("../repositories/consultaRepository");

exports.createConsulta = (consulta, callback) => {
  if (!consulta.pacienteId || !consulta.medicoId || !consulta.dataHora) {
    return callback(new Error("Todos os campos são obrigatórios."));
  }

  // Verificar se já existe uma consulta para o mesmo médico no mesmo horário
  consultaRepository.getConsultaByMedicoAndDateTime(
    consulta.medicoId,
    consulta.dataHora,
    (err, existingConsulta) => {
      if (err) {
        return callback(err);
      }
      if (existingConsulta) {
        return callback(new Error("Já existe uma consulta agendada para este médico neste horário."));
      }
      consultaRepository.createConsulta(consulta, callback);
    }
  );
};

exports.getConsultaById = (id, callback) => {
  consultaRepository.getConsultaById(id, callback);
};

exports.getAllConsultas = (callback) => {
  consultaRepository.getAllConsultas(callback);
};

exports.getConsultasByMedicoId = (medicoId, callback) => {
  consultaRepository.getConsultasByMedicoId(medicoId, callback);
};


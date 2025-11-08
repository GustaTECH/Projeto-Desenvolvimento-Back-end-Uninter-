
const db = require("../database/database");

exports.createConsulta = (consulta, callback) => {
  const { pacienteId, medicoId, dataHora } = consulta;
  db.run(
    "INSERT INTO Consultas (pacienteId, medicoId, dataHora) VALUES (?, ?, ?)",
    [pacienteId, medicoId, dataHora],
    function (err) {
      callback(err, { id: this.lastID, ...consulta });
    }
  );
};

exports.getConsultaById = (id, callback) => {
  db.get("SELECT * FROM Consultas WHERE id = ?", [id], (err, row) => {
    callback(err, row);
  });
};

exports.getAllConsultas = (callback) => {
  db.all("SELECT * FROM Consultas", [], (err, rows) => {
    callback(err, rows);
  });
};

exports.getConsultasByMedicoId = (medicoId, callback) => {
  db.all("SELECT * FROM Consultas WHERE medicoId = ?", [medicoId], (err, rows) => {
    callback(err, rows);
  });
};

exports.getConsultaByMedicoAndDateTime = (medicoId, dataHora, callback) => {
  db.get("SELECT * FROM Consultas WHERE medicoId = ? AND dataHora = ?", [medicoId, dataHora], (err, row) => {
    callback(err, row);
  });
};


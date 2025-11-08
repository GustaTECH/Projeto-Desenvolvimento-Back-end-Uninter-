
const db = require("../database/database");

exports.createPaciente = (paciente, callback) => {
  const { nome, cpf, dataNascimento } = paciente;
  db.run(
    "INSERT INTO Pacientes (nome, cpf, dataNascimento) VALUES (?, ?, ?)",
    [nome, cpf, dataNascimento],
    function (err) {
      callback(err, { id: this.lastID, ...paciente });
    }
  );
};

exports.getPacienteById = (id, callback) => {
  db.get("SELECT * FROM Pacientes WHERE id = ?", [id], (err, row) => {
    callback(err, row);
  });
};

exports.getAllPacientes = (callback) => {
  db.all("SELECT * FROM Pacientes", [], (err, rows) => {
    callback(err, rows);
  });
};

exports.deletePaciente = (id, callback) => {
  db.run("DELETE FROM Pacientes WHERE id = ?", [id], function (err) {
    callback(err, { changes: this.changes });
  });
};


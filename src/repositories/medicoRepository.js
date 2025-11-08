
const db = require("../database/database");

exports.createMedico = (medico, callback) => {
  const { nome, crm, especialidade } = medico;
  db.run(
    "INSERT INTO Medicos (nome, crm, especialidade) VALUES (?, ?, ?)",
    [nome, crm, especialidade],
    function (err) {
      callback(err, { id: this.lastID, ...medico });
    }
  );
};

exports.getMedicoById = (id, callback) => {
  db.get("SELECT * FROM Medicos WHERE id = ?", [id], (err, row) => {
    callback(err, row);
  });
};

exports.getAllMedicos = (callback) => {
  db.all("SELECT * FROM Medicos", [], (err, rows) => {
    callback(err, rows);
  });
};



const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./src/database/sghss.db', (err) => {
    if (err) {
        console.error('Erro ao abrir o banco de dados:', err.message);
    } else {
        console.log('Conectado ao banco de dados SQLite.');
        db.run(`CREATE TABLE IF NOT EXISTS Pacientes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            cpf TEXT UNIQUE NOT NULL,
            dataNascimento TEXT NOT NULL
        )`);
        db.run(`CREATE TABLE IF NOT EXISTS Medicos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            crm TEXT UNIQUE NOT NULL,
            especialidade TEXT NOT NULL
        )`);
        db.run(`CREATE TABLE IF NOT EXISTS Consultas (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            pacienteId INTEGER NOT NULL,
            medicoId INTEGER NOT NULL,
            dataHora TEXT NOT NULL UNIQUE,
            FOREIGN KEY (pacienteId) REFERENCES Pacientes(id),
            FOREIGN KEY (medicoId) REFERENCES Medicos(id)
        )`
        );
    }
});

module.exports = db;


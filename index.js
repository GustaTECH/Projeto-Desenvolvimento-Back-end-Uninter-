
const express = require("express");
const bodyParser = require("body-parser");
const db = require("./src/database/database"); // Inicializa o banco de dados

const pacienteRoutes = require("./src/routes/pacienteRoutes");
const medicoRoutes = require("./src/routes/medicoRoutes");
const consultaRoutes = require("./src/routes/consultaRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use("/pacientes", pacienteRoutes);
app.use("/medicos", medicoRoutes);
app.use("/consultas", consultaRoutes);

app.get("/", (req, res) => {
  res.send("API SGHSS - Módulo de Agendamento de Consultas");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});


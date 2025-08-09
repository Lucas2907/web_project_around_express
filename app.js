const express = require("express");

const app = express();

const { PORT = 3000 } = process.env;

const userRoutes = require("./routes/users");
const cardRoutes = require("./routes/cards");

app.use("/cards", cardRoutes);

app.use("/users", userRoutes);

app.use((req, res) => {
  res.status(404).json({ error: "Endereço não encontrado" });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

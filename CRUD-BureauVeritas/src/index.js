const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const produtoRoutes = require("./routes/produtoRoutes");

app.use(cors());
app.use(express.json());

const path = require('path');
app.use(express.static(path.join(__dirname, '../public')));

app.use("/produtos", produtoRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

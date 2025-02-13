const express = require("express");
const cors = require("cors");
const cafeteriaRoutes = require("../src/routes/cafeteriaRoutes");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());
app.use ("/api", cafeteriaRoutes);

app.get("/", (req, res) =>{
    res.send("Vai Corinthians!!")
});

app.listen(PORT, () =>{
    console.log(`Servidor rodando na porta ${PORT}`)
});
import express from "express";
import conectaNaDataBase from "./config/dbconnect.js";
import routes from "./routes/index.js";

const conexao = await conectaNaDataBase();
conexao.on("error", (erro) => {
  console.error("erro de conexão", erro);
});
conexao.once("open", () => {
  console.log("conexão com banco feita com sucesso");
});

const app = express();
routes(app);

export default app;

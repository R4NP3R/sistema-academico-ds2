import http from "node:http";
import { enviarJson } from "./utils/http.js";
import { tratarRotas } from "./routes/aluno-routes.js";

const PORTA = Number(process.env.PORT) || 3000;

const HOST = "0.0.0.0";

const servidor = http.createServer(async (req, res) => {
  try {

    const rotaEncontrada = await tratarRotas(req, res);

    if (!rotaEncontrada) {
      enviarJson(res, 404, {
        sucesso: false,
        mensagem: "Rota não encontrada."
      });
    }
  } catch (err) {
    console.error("Erro interno do servidor: ", err);

    enviarJson(res, 500, {
      sucesso: false,
      mensagem: "Erro interno do servidor."
    })
  }
})

servidor.listen(PORTA, HOST, () => {

  console.log(
    `Servidor disponível em http://localhost:${PORTA}`
  );
})

import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controller = new NegociacaoController();
const form = document.querySelector(".form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    controller.adiciona();
  });
} else {
  throw Error(
    "Não foi possível inicializar a aplicação. Verifique se o form existe."
  );
}

const botaoImporta = document.querySelector("#botao-importa");

if (botaoImporta) {
  botaoImporta.addEventListener("click", () => {
    controller.importarDados();
  });
} else {
  throw Error("Esse botão não existe ou não conseguiu ser encontrado");
}

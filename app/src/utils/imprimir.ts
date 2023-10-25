import { imprimivel } from "./imprimivel.js";

export function imprimir(...objetos: Array<imprimivel>) {
  for (let objeto of objetos) {
    console.log(objeto.paraTexto());
  }
}

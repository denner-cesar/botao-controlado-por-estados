import { ESTADOS } from "./estados.js"
import { EVENTOS } from "./eventos.js"
import { TRANSICOES } from "./motor.js"
import { renderizar } from "./interface.js"


let estadoAtual = ESTADOS.PARADO

renderizar(estadoAtual)

function dispararEvento(evento) {
  estadoAtual =
    TRANSICOES[estadoAtual]?.[evento] ?? estadoAtual

  renderizar(estadoAtual)
}

document.querySelector("#botao").addEventListener("click", () => {


  if (estadoAtual === ESTADOS.ERRO) {
    dispararEvento(EVENTOS.RESERTAR)
    return
  }

  
  dispararEvento(EVENTOS.CLICAR)

  setTimeout(() => {
    const deuCerto = Math.random() > 0.5
    dispararEvento(deuCerto ? EVENTOS.SUCESSO : EVENTOS.ERRO)
  }, 2000)
})
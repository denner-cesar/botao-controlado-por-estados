import { ESTADOS } from "./estados.js"
import { EVENTOS } from "./eventos.js"

export const TRANSICOES = {
  [ESTADOS.PARADO]: {
    [EVENTOS.CLICAR]: ESTADOS.CARREGANDO
  },

  [ESTADOS.CARREGANDO]: {
    [EVENTOS.SUCESSO]: ESTADOS.SUCESSO,
    [EVENTOS.ERRO]: ESTADOS.ERRO
  },

  [ESTADOS.ERRO]: {
    [EVENTOS.RESERTAR]: ESTADOS.PARADO
  }
}

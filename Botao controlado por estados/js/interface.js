const botao = document.querySelector("#botao")


export function renderizar(estadoAtual) {
  botao.className = "botao"

  const visuais = {
    PARADO: () => {
      botao.textContent = "Enviar"
      botao.disabled = false
    },

    CARREGANDO: () => {
      botao.textContent = "Carregando..."
      botao.disabled = true
    },

    SUCESSO: () => {
      botao.textContent = "Enviado ✔"
      botao.classList.add("sucesso")
      botao.disabled = true
    },

    ERRO: () => {
      botao.textContent = "Tentar novamente"
      botao.classList.add("erro")
      botao.disabled = false
    }
  }

  visuais[estadoAtual]?.()
}

/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    
console.log("Boas vindas ao jogo de Blackjack!")

const carta = comprarCarta()
   let usuario1 = comprarCarta()
   let usuario2 = comprarCarta()
   let computador1 = comprarCarta()
   let computador2 = comprarCarta()
   let pontuacaoUsuario = usuario1.valor + usuario2.valor
   let pontuacaoComputador = computador1.valor + computador2.valor

if(confirm("Quer iniciar uma nova rodada?")) {
   console.log("Usuário - cartas: ", usuario1.texto, usuario2.texto,"- pontuação:", pontuacaoUsuario)
   console.log("Computador - cartas: ", computador1.texto, computador2.texto,"- pontuação:", pontuacaoComputador)
} else {
	console.log("O jogo acabou") 
}

if (pontuacaoUsuario > pontuacaoComputador) {
   console.log("O usuário ganhou!")
} else if (pontuacaoComputador > pontuacaoUsuario){
   console.log("O computador ganhou!")
} else {
   console.log("Empate!")
}
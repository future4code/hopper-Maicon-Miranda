// Exercícios de interpretação de código

/*
EXERCÍCIO 1

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

//a) Testa se o inteiro restante da divisão dos dois operandos (numero e 2) será igual a zero. 
//b) Números pares.
//c) Númeors ímpares.

*/


/*
EXERCÍCIO 2

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)


a) Para informar o preço de uma fruta.
b)"O preço da fruta , "maçã",  é , R$ , 2.25"
c) Informaria o preço do case seguinte. Nesse caso, 5.
*/

/*
EXERCÍCIO 3

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

a) Está solicitando que o usário digite um número, e armazenando o valor informado dentro da variável numero.
b) Se o valor informado for 10: "Esse número passou no teste". Se o valor informado for -10: 


*/



//Exercícios de escrita de código

/*
EXERCÍCIO 1

const idade = Number(prompt("Digite a sua idade."))

if(idade >= 18) {
  console.log("Você pode dirigir")
  }
  else { console.log("Você não pode diirigir")
}
*/

/*
EXERCÍCIO 2


const turno = prompt("Qual turno você estuda?")

if(turno === "M") {
  console.log("Bom dia!")
  }
  else if (turno === "V") {
  console.log("Boa tarde!")
  }
  else if (turno === "N") {
  console.log("Boa noite!")

  }
*/


/*
EXERCÍCIO 3


const turno = prompt("Qual turno você estuda?")

switch (turno) {
	case 'M':
  console.log("Bom Dia!")
  break
  case 'V':
  console.log("Boa Tarde!")
  break
  case 'N':
  console.log("Boa Noite!")
}  
 
*/

/*
EXERCÍCIO 4

const genero = prompt("O filme que verão é de fantasia? Responda sim ou não") === "sim"
const preco = prompt("O preço do ingresso é menor que R$15? Responda sim ou não") === "sim"

if (genero && preco){
console.log("Bom filme.")
}
if (!preco) {
console.log("Escolha outro filme :(")
}

*/



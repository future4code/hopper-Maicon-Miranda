//Exercícios de interpretação de código

/*EXERCÍCIO 1

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2)) // 10
console.log(minhaFuncao(10)) // 50

minhaFuncao(2) // não apareceria nada no console
minhaFuncao(10) // não apareceria nada no console
*/

/*EXERCÍCIO 2

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

//Avalia se no texto informado pelo usuário consta a palavra "cenoura", retornando em true/false

Eu gosto de cenoura // true
CENOURA é bom pra vista // true
Cenouras crescem na terra // true
*/



//Exercícios de escrita de código

/*EXERCÍCIO 1

//A

function imprimirMensagem(){

console.log(`Eu sou Maicon, tenho 32 anos, moro em Brasília e sou estudante`)
}

imprimirMensagem()

//B

const nome = prompt("Digite o seu nome")
const idade = prompt("Digite a sua idade")
const cidade = prompt("Digite a sua cidade")
const profissao = prompt("Digite a sua profissão")

function imprimirMensagem(nome, idade, cidade, profissao){

console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`)
}

imprimirMensagem(nome, idade, cidade, profissao)
*/

/*EXERCÍCIO 2

//A
function soma(numero1, numero2){
    const resultado = numero1 + numero2
    console.log(resultado)
    }
    soma(5,5)

//B
function comparacao(numero1, numero2){
   console.log(numero1 >= numero2)
}

comparacao(10,5)


//C

//D
function funcaoFrase(frase){
frase = ("bla bla bla")
console.log(frase.length, frase.toUpperCase()) 
}

funcaoFrase()
*/

/*
EXERCÍCIO 3


function somar(numero1, numero2){
    return numero1 + numero2
}
function subtrair(numero1, numero2){
    return numero1 - numero2
}
function multiplicar(numero1, numero2){
    return numero1 * numero2
}
function dividir(numero1, numero2){
    return numero1 / numero2
}

const numUser = Number(prompt("Insira um número: "))
const numUser2 = Number(prompt("Insira outro número"))

console.log("Números inseridos: ", numUser, "e", numUser2)
console.log("Soma:", somar(numUser, numUser2))
console.log("Diferença:", subtrair(numUser, numUser2))
console.log("Multiplicação:", multiplicar(numUser, numUser2))
console.log("Divisão:", dividir(numUser, numUser2))

*/

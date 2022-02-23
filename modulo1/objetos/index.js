//Exercícios de interpretação de código


/*
EXERCÍCIO 1

const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0]) // Matheus Nachtergaele
console.log(filme.elenco[filme.elenco.length - 1]) // Virginia Cavendish
console.log(filme.transmissoesHoje[2]) // canal: "Globo", horario: "14h"

*/

/*
EXERCÍCIO 2

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro) 
  idade: 3,
  nome: "Juca",
  raca: "SRD"

console.log(gato) 
  idade: 3,
  nome: "Juba",
  raca: "SRD"

console.log(tartaruga) // Jubo, 3, SRD
  idade: 3,
  nome: "Jubo",
  raca: "SRD"

// b) copia o objeto

*/


/*
EXERCICIO 3

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender")) // false
console.log(minhaFuncao(pessoa, "altura")) // undefined

// b) Porque a altura não foi declarada


*/


// Exercícios de escrita de código

/*

EXERCÍCIO 1

//a)

const pessoa = {
	nome: "Maicon" ,
  apelido: ["Grunge", "Branca de Neve", "Thor"]
}

function chamaApelido(pessoa) {
 console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelido[0]}, ${pessoa.apelido[1]} ou ${pessoa.apelido[2]}.`)
}

chamaApelido(pessoa)



//b

const pessoa = {
	nome: "Maicon" ,
  apelido: ["Grunge", "Branca de Neve", "Thor"]
}

function chamaApelido(pessoa) {
 console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelido[0]}, ${pessoa.apelido[1]} ou ${pessoa.apelido[2]}.`)
}

chamaApelido(pessoa)

const novaPessoa = {...pessoa, apelido: ["Miranda", "Ma-ma", "Kurt"]}

chamaApelido(novaPessoa)

*/

/*
EXERCÍCIO 2

const pessoa = {
	nome: "Maicon" ,
	idade: 32, 
	função: "Suporte de TI"
}

const pessoa2 = {
	nome: "Gisela",
  idade: 30 , 
  função: "Servidora Pública"
}

function dadosUsuario(pessoa, pessoa2){
  const nome = (pessoa.nome)
  const idade = (pessoa.idade)
  const função = (pessoa.função)
  const array = [nome, nome.length, idade, função, função.length]
  console.log("Retorno: ", array)
}

dadosUsuario(pessoa)
dadosUsuario(pessoa2)

*/

/*
EXERCÍCIO 3

const carrinho = []
const fruta1 = {nome: "Abacaxi", disponibilidade: true}
const fruta2 = {nome: "Pêssego", disponibilidade: true}
const fruta3 = {nome: "Ameixa", disponibilidade: true}

function sacola(fruta){
 carrinho.push(fruta)
}
sacola([fruta1, fruta2, fruta3])
console.log(carrinho)

*/







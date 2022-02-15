// EXERCÍCIOS DE INTERPRETAÇÃO

/* Exercício 1
let array
console.log('a. ', array) // undefined

array = null
console.log('b. ', array) // null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // 11

let i = 0
console.log('d. ', array[i]) // 3

array[i+1] = 19
console.log('e. ', array) // [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor) // 9  
*/

/* Exercício 2
const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) // "SUBI NUM ÔNIBUS EM MIRROCOS", 27
*/

// EXERCÍCIO DE ESCRITA

/* Exercício 1
const nome = prompt("Qual o seu nome?")
const email = prompt("Qual o seu e-mail?")
console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vindo(a), ${nome}`)
*/

/* Exercício 2
const comidasFavoritas = ["Abacate", "Bacon", "Costela", "Danone", "Espinafre"]
console.log(comidasFavoritas)

const comidasFavoritas = ["\nAbacate\nBacon\nCostela\nDanone\nEspinafre"]
console.log("Essas são as minhas comidas preferidas: ", comidasFavoritas)
*/

/* Exercício 3
let listaDeTarefas = []

const tarefa1 = prompt("Qual a primeira tarefa?")
listaDeTarefas.push(tarefa1)
const tarefa2 = prompt("Qual a segunda tarefa?")
listaDeTarefas.push(tarefa2) 
const tarefa3 = prompt("Qual a terceira tarefa?")
listaDeTarefas.push(tarefa3)

console.log(listaDeTarefas)

const indice = prompt("Digite o índice de uma tarefa que já realizou: 0, 1 ou 2: ")
listaDeTarefas.splice(indice, 1)
console.log(listaDeTarefas)
*/
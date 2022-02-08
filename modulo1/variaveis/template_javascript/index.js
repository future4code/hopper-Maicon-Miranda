

//1. 

let a = 10
let b = 10

console.log(b) //será apresentado no console 10

b = 5
console.log(a, b) //será apresentado no console 10 5

//2.

let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c) //será apresentado no console 10 10 10

//3.

let p = prompt("Quantas horas você trabalha por dia?") // horaDia
let t = prompt("Quanto você recebe por dia?") //remuneracaoDia
alert(`Voce recebe ${t/p} por hora`)



//1.

let nome
let idade
console.log(typeof nome , typeof idade) 

//O console imprimiu os tipos undefined e undefined. Esse tipo foi 
//impresso pq as variáveis nome e idade não receberam valor.

let nome = prompt("Qual o seu nome?")
let idade = prompt("Qual a sua idade?")
                            
console.log(typeof nome , typeof idade)
//O console imprimiu os tipos string e string. Esse tipo foi 
//impresso pq agora as variáveis nome e idade receberam valor.

console.log("Olá", nome, ", você tem", idade, "anos.")

//2.

let souEstudante = true
let oculos = true
let estouDePreto = false

console.log("Você é estudande?", souEstudante)
console.log("Você usa óculos?", oculos)
console.log("Você está de preto hoje?", estouDePreto) 


let a = 10
let b = 25

c = a
a = b
b = c

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)

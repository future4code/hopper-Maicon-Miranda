// EXERCÍCIO 1

/*
const nome :string = process.argv[2]
const dataNascimento :string = process.argv[3]

const dataFormatada :Array<string> = dataNascimento.split("/")

console.log(`Olá me chamo ${nome}, nasci no dia ${dataFormatada[0]} do mês de ${dataFormatada[1]} do ano de ${dataFormatada[2]}`)

*/

//EXERCÍCIO 2

/*
function tipoVariavel(input: any) :void {
	console.log(typeof input)
}

tipoVariavel("Olá")

*/

//EXERCÍCIO 03

/*
enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

function fichaTecnicaFilme (nome: string, ano: number, genero: GENERO, potuancao?: number) :any {
	const filme = {
		nome: nome,
		ano: ano,
		genero: genero,
		potuancao: potuancao
	}
	return filme
}

console.log(fichaTecnicaFilme("Matrix", 1999, GENERO.ACAO, 73))

*/

//EXERCÍCIO 04

/*
type colaborador = {
	nome: string,
	salário: number,
	setor: SETOR,
	presencial: boolean
}

enum SETOR {
	MARKETING = "marketing",
	VENDAS = "vendas",
	FINANCEIRO = "financeiro",
}

const funcionarios: colaborador[] = [

	{ nome: "Marcos", salário: 2500, setor: SETOR.MARKETING, presencial: true },
	{ nome: "Maria", salário: 1500, setor: SETOR.VENDAS, presencial: false },
	{ nome: "Salete", salário: 2200, setor: SETOR.FINANCEIRO, presencial: true },
	{ nome: "João", salário: 2800, setor: SETOR.MARKETING, presencial: false },
	{ nome: "Josué", salário: 5500, setor: SETOR.FINANCEIRO, presencial: true },
	{ nome: "Natalia", salário: 4700, setor: SETOR.VENDAS, presencial: true },
	{ nome: "Paola", salário: 3500, setor: SETOR.MARKETING, presencial: true }

]

const filtraColaborador = funcionarios.filter((func) => {
	return func.setor === "marketing" && func.presencial === true;
})

console.log(filtraColaborador)

*/

//EXERCÍCIO 05

/*
type usuario = {
	name :string, 
	email :string,
	role: string
}

const usuarios :usuario[] = [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 


const filtraUsuario = usuarios.filter(function(user){
	return user.email && user.role ==="admin"
 })


const filtraEmail = filtraUsuario.map(function(e){
	return e.email;
 });

 console.log(filtraEmail)

 */

 //EXERCÍCIO 6
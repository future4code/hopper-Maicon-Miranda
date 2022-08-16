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


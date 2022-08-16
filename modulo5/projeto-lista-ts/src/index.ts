// EXERCÍCIO 1

const nome :string = process.argv[2]
const dataNascimento :string = process.argv[3]

const dataFormatada :Array<string> = dataNascimento.split("/")

console.log(`Olá me chamo ${nome}, nasci no dia ${dataFormatada[0]} do mês de ${dataFormatada[1]} do ano de ${dataFormatada[2]}`)
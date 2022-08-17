//EXERCÍCIO 4

//a)

type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}



//b) terminal -> comando tsc + nomeDoArquivo.ts;
//c) teríamos que definir o caminho do arquivo. Semelhante ao comando CD;
//d) podemos colocar vários arquivos no mesmo comando tsc ou configurar o arquivo tsconfig.json

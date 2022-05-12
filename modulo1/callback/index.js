//Exercícios de interpretação de código

/*
EXERCÍCIO 1

//a)

Vai imprimir o apelido, o nome e a posição dos usuários.

EXERCÍCIO 2

//a)

Vai imprimir o nome dos usuários.

//EXERCÍCIO 3

//a)

Vai imprir o apelido, o nome e a posição dos usuários, com excessão da Chijo.

*/

// Exercícios de escrita de código

/*
//EXERCÍCIO 1

//a)

const pets = [
   { nome: "Lupin", raca: "Salsicha"},
   { nome: "Polly", raca: "Lhasa Apso"},
   { nome: "Madame", raca: "Poodle"},
   { nome: "Quentinho", raca: "Salsicha"},
   { nome: "Fluffy", raca: "Poodle"},
   { nome: "Caramelo", raca: "Vira-lata"},
]

const nomesPets = pets.map((item, index, array) => {
   return item.nome
   })
   
console.log(nomesPets)

//b)

const pets = [
   { nome: "Lupin", raca: "Salsicha"},
   { nome: "Polly", raca: "Lhasa Apso"},
   { nome: "Madame", raca: "Poodle"},
   { nome: "Quentinho", raca: "Salsicha"},
   { nome: "Fluffy", raca: "Poodle"},
   { nome: "Caramelo", raca: "Vira-lata"},
]

const racaPets = pets.filter((item, index, array) => {
   return item.raca === "Salsicha"
   })
   
console.log(racaPets)

//c)


const pets = [
   { nome: "Lupin", raca: "Salsicha"},
   { nome: "Polly", raca: "Lhasa Apso"},
   { nome: "Madame", raca: "Poodle"},
   { nome: "Quentinho", raca: "Salsicha"},
   { nome: "Fluffy", raca: "Poodle"},
   { nome: "Caramelo", raca: "Vira-lata"},
]

const selecionarRaca = pets.filter((titulo) => {
   return titulo.raca === "Salsicha"
   })
const selecionarNomes = selecionarRaca.map((titulo) => {
   console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${titulo.nome}`)
   
})

*/

//EXERCÍCIO 2

/*
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

const selecionarNomes = produtos.filter((titulo) =>{ //a
    console.log(titulo.nome)
})

const ProdutosDesconto = produtos.map((titulo) =>{ //b
    const desconto = (titulo.preco * 5) / 100
    const novoPreco = titulo.preco - desconto
    const objeto = {
  	    nome: titulo.nome,
        preco: novoPreco.toFixed(2)
  }
  return objeto
})
console.log(ProdutosDesconto)


const selecionarBebidas = produtos.filter((titulo) =>{ //c
    return titulo.categoria === "Bebidas"
})
console.log(selecionarBebidas)


const selecionarProdutosYpe = produtos.filter((titulo) =>{ //d
	return titulo.nome.includes("Ypê")

})
console.log(selecionarProdutosYpe)

//e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter 
//frases apenas dos itens cujo nome contenha a palavra "Ypê"

*/
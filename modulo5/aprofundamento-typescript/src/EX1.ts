//EXERCÍCIO 1

//a)

const minhaString :string = "Olá"

const minhaString :string = 77

//erro: Type 'number' is not assignable to type 'string'.

//b)

const meuNumero :number = 77

const minhaString :string | number = 77

//c)

type pessoa = {
    nome :string,
    idade :number,
    corFavorita :CoresDpArcoIris
}

enum CoresDpArcoIris {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    AZULESCURO = "Azul-Escuro",
    VIOLETA = "Violeta"
    }

const person :pessoa = {
    nome: "Maicon",
    idade: 32,
    corFavorita: CoresDpArcoIris.AZULESCURO

}
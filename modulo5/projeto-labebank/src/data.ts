
//1

export type Usuario = {
    nome: string,
    cpf: number,
    idade: number
    // extrato: {
    //     valor: number,
    //     data: number | string,
    //     descricao: string
    // }
}

//2

export let usuarios :Usuario[] = [
    {
        nome: "Maicon Miranda",
        cpf: 12345678900,
        idade: 32,
    },
    {
        nome: "Gisela Miranda",
        cpf: 98765432100,
        idade: 30
    },
    {
        nome: "Catarina Miranda",
        cpf: 12345987600,
        idade: 18
    },

]


export type Extrato = {
    valor: number,
    data: number,
    descricao: string
}

//3

export type Transacao = {
    extrato: number,
    deposito: number,
    pagamento: number,
    transferencia: number
}
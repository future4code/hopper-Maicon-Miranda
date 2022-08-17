//EXERCÍCIO 2

//a) b) c)


function obterEstatisticas(numeros :Array<number>) {

    const numerosOrdenados :Array<number> = numeros.sort(
        (a :number, b :number) => a - b
    )

    let soma :number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas :object = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}



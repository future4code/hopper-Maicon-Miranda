// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   
   return array.length
 }

// EXERCÍCIO 02
function retornaArrayInvertido(array) {

    let novoArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
      novoArray.push(array[i]);
    }
    return novoArray;
  
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
   let novoArray = array.sort((a,b) => {
   if (a < b) {
     return -1
   }
   if (a > b) {
     return 1
   }
   return 0
})
   return novoArray
   
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  const numerosPares = (numeroPar) =>{
    return numeroPar % 2 === 0
  }
  return array.filter(numerosPares)
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  return array.filter((numeroPar) => numeroPar % 2 === 0).map((numPar) =>
  numPar ** 2)
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  return Math.max.apply(null, array)
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  const maiorNumero2 = Math.max(num1, num2)
  const menorNumero2 = Math.min(num1, num2)
  
  const resultado = ((maiorNumero2 % menorNumero2) === 0)
  
  let diferenca2 = maiorNumero2 - menorNumero2

   return objeto = {
    maiorNumero: maiorNumero2 ,
    maiorDivisivelPorMenor: resultado ,
    diferenca: diferenca2
  }
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  let numerosPares = [];
    for (let i = 0; numerosPares.length < n; i++) {
        if (i % 2 === 0) {
            numerosPares.push(i);
        }
    }
    return numerosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if ((ladoA === ladoB) && ladoA === ladoC){
    return "Equilátero"
  } 
  if ((ladoA === ladoB) && ladoA !== ladoC){
    return "Isósceles"
  }
  if ((ladoA === ladoC) && ladoA !== ladoB){
    return "Isósceles"
  }
  if ((ladoB === ladoC) && ladoB !== ladoA){
    return "Isósceles"
  }
  if ((ladoA !== ladoB) && (ladoA !== ladoC) && (ladoB !== ladoC)){
    return "Escaleno"
  }    
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(", ")}.`

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   const novaPessoa = {
     ...pessoa,
     nome: "ANÔNIMO"
   }
   return novaPessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  consultas.sort(function(a,b) {
    return (a.nome > b.nome) ? 1 : ((b.nome > a.nome) ? -1 : 0) ;
});

return consultas
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
 result = consultas.reduce((a, b) => a.dataDaConsulta > b.dataDaConsulta ? a : b) 
 return consultas
}



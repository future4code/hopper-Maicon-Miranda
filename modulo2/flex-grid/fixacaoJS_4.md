Exercícios de Fixação de Javascript - Treino 4 

```function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
 let quantOcorrencias = arrayDeNumeros.filter(x => x === numeroEscolhido).length;
  if (quantOcorrencias !== 0){
  return "O número " + numeroEscolhido + " aparece " + quantOcorrencias + "x"
  } else if (quantOcorrencias === 0){
    return "Número não encontrado"
  }
}```

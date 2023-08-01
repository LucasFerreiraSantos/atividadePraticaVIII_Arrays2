function verificarNumeroInt(){
  const numInteiros = [1, 2, 3, 4, 5, 6, 7]
  const num = 10
  if(numInteiros.find(e => e > num)){
    return true
  }else{
    return false
  }
}

document.write(verificarNumeroInt())

// 5. Crie uma função que recebe um vetor de inteiros e um número
// inteiro e retorne verdadeiro se o número faz parte do vetor ou falso
// se não faz parte.
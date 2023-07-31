const numInteiros = []
let contador = 1
  for(let i = 0; i < 15; i++){
    numInteiros.push(contador)
    if(contador % 2 !== 0){
      document.write(`${contador} `)
    }
    contador++
  }
  
// 1. Desenvolva um algoritmo para percorrer um vetor de 15 elementos
// inteiros já preenchido e imprima todos os valores pares.
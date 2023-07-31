const numInteiros = []
let contador = 1
let soma = 0
  for(let i = 0; i < 20; i++){
    numInteiros.push(contador)
    soma += contador
    contador++
  }
  document.write(numInteiros)
  document.write(`<br>A soma dos elementos do Array é ${soma}.`)

// 2. Desenvolva um algoritmo para percorrer um vetor de 20 elementos
// inteiros e no final mostre a soma de todos os elementos.
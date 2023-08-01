const numerosPerfeitos = []
let limite = 4
let num = 2

function verificarNumPrimo(num){
  let divisores = 0

  for(let i=1; i<=num; i++)
    if(num % i === 0) divisores++

    if(divisores==2){
      numPrimo = true
      return numPrimo
    }
    else{
      numPrimo = false
    }
}

while (numerosPerfeitos.length < limite) {
  if (verificarNumPrimo(num)){
    const perfeito = (2 ** (num - 1)) * (2 ** num - 1)
    numerosPerfeitos.push(perfeito)
  }
  num++
}

document.write(`${numerosPerfeitos.join(' ')}`)

// 3. Desenvolva um algoritmo que preenche um vetor com os 4
// primeiros números perfeitos.
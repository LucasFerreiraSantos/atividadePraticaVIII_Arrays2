const nomes = []
while(nomes.length < 5){
  const entrada = prompt('Digite um nome: ')
  nomes.push(entrada)
}

document.write(nomes.join(', '))
document.write(`<p>${nomes.reverse()}</p>`)

// 6. Escreva um algoritmo que solicite ao usuário a entrada de 5 nomes,
// e que exiba a lista desses nomes na tela. Após exibir essa lista, o
// programa deve mostrar também os nomes na ordem inversa em
// que o usuário os digitou.

// Ex:
// Entrada: Édson, Marcelo, Letícia, Ju, Thobias
// Saída: Thobias, Ju, Letícia, Marcelo, Édson
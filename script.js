/* Dessa forma aparece o número 3 ao lado da mensagem informando que ela foi executada 3 vezes.*/

for (let i = 0; i < 3; i++) {
    console.log( "Conexão feita com sucesso!")
}

/* Desta outra forma a mensagem aparece 3 vezes em linhas separadas porém com o valor de i */

for (let i = 0; i < 3; i++) {
    console.log( "Conexão feita com sucesso!" + i)
}

/* Desta outra forma a mensagem aparece 3 vezes em linhas separadas sem o valor de i */

console.log( "Conexão feita com sucesso!")
console.log( "Conexão feita com sucesso!")
console.log( "Conexão feita com sucesso!")
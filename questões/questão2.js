const readline = require("readline")

const question2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})


 question2.question("Digite o valor a ser fatorado: ", (numero) => {
    var fatorial = numero
    var resultado = fatorial;
    for (var i = 1; i < fatorial; i++){
        resultado *= i;
    }
    console.log("Resultado é: "+ resultado)
}) 

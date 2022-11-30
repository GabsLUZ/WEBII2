const readline = require("readline")

const question1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

question1.question("Digite o valor da Base: ", (base) => {
    question1.question("Digite o valor da Altura: ", (altura) => {
        var area = (base) * (altura)
        if (base == altura){
            console.log("A área do quadrado é: "+ area)
        }
        else {console.log("A área do retângulo é: "+ area)}       
    })
})
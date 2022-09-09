function somar(a,b){
    return a+b;
}

console.log(somar(4,3));

// funcao anônima - não precisa dar nome a ela (tem que usar o ; para finalizar)
(function (x, y) {
    console.log(x+y);
})(2,2); // IIFE - invocação imediata de function expression

// Function Expression - muito similar e tem quase a msm sintaxe de uma declaração de função
// O nome da função pode ser omitido - função anônima e atribui a uma variavel

//var - variavel global
//let - variavel do escopo local 
//const - constante (não vai ser alterada)

//obs: ctrl+; - comenta algo aqui no VSCode

const soma = function(a,b){
    return a+b;
}

let resultado = soma(2,5);
console.log(resultado);

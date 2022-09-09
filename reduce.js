// reduce - execute funcao redutora que sõ aplicadas a todos os elementos do array e retorna um resultado

numeros = [1, 2, 3, 4, 5]

// function somaNumeros(total, i) {
//     return total+i
// }

const somaNumeros = (total, i) => total+i
var resultadoSoma = numeros.reduce(somaNumeros);
console.log(resultadoSoma);

notas = [5.7, 6.4, 7.5, 5.9, 5.75]

const somatorio = (total, i) => total+i

var n = notas.length;

var media = notas.reduce(somatorio)/n;
console.log("A média de notas é: " + media);

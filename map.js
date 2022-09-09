//map() - permite que dado um determinado array, você aplique uma função a cada elemento do array e isto vai retornar um array de msm tamanho

var estudantes = [
    {nome: "José", nota: 5.6},
    {nome: "Diego", nota: 4.8},
    {nome: "Maria", nota: 7.5},
    {nome: "Paula", nota: 6.4}
]

// normalizar: maior nota passa a ser 10

let notas = []

for(i of estudantes) {
    notas.push(i.nota);
}

var maiorNota = Math.max(...notas);

let notasNormalizadas = estudantes.map(estudantes => (estudantes.nota*10/maiorNota).toFixed(2));

// console.log(`Notas antigas: ${notas}`);
// console.log(`Notas novas: ${notasNormalizadas}`);

function normaliza(x){
    return (x*10/maiorNota).toFixed(2);
}

console.log("Novas notas:" 
                + estudantes
                .map(i => i.nota)
                .map(normaliza))

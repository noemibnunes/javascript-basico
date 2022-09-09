// arrow function - não precisa declarar Function quando estar criando uma função

const soma = (x,y) => { // (=>) substitui a palavra Function
    return x+y;
}

console.log(soma(2,3));

const somar = (x,y) => x+y //quando tem uma unica linha não precisa do return e nem das chaves
console.log(somar(4,3));


// spread - ex: Digamos que precisamos fazer uma função de soma sem saber quantos num iremos receber

const soma = (...num) => {
    let sum = 0;
    for(i of num) {
        sum += i;
    }
    return sum;
};

console.log(soma(2, 4, 2));

const somar = (x,y,z) => x+y+z;
console.log(somar(2,2,2));

// const somar = (x,y,z) => x+y+z;
// console.log(somar(2,2,2,3)) - se a funcao espera 3 numero e envio 4, como o js não é altamente tipado, ele ignora o 4 numero enviado.

// const somar = (x,y,z) => x+y+z;
// console.log(somar(2,2)) - o resultado é NaN (valor não definido)


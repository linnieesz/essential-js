function triplo(n) {
    return n * 3
};

const numeros = [1, 2, 3, 4];

// const triplos = [];

// for (const numero of numeros) {
//     triplos.push(triplo(numero))
// }

const triplos = numeros.map(triplo)
console.log(triplos)
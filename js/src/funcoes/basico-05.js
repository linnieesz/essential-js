function somarTodos(...numeros) {
    let total = 0;
    for (let n of numeros) {
        total += n;
    }
    return total
}

console.log(somarTodos(5, 10, 15))

let somar = function (a, b) {
    return a + b;
}

console.log(somar(10, 5))

const subtrair = ( a, b ) => {
    return a - b;
}
console.log(subtrair(10, 5))
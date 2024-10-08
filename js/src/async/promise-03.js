const promessaComTimeout = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promessa resolvida depois de 2 segundos!');
    }, 2000);
})

console.log('Antes da promessa');
promessaComTimeout.then((resultado) => console.log(resultado))
console.log('Depois da promessa');
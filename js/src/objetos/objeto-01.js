// const pessoa = Object.freeze(
//     {
//        nome: 'Ana',
//        idade: 28,
//        cidade: 'Rio de Janeiro',
//    })

const pessoa = {
    nome: 'Ana',
    idade: 28,
    cidade: 'Rio de Janeiro',
};

console.log(`Nome: ${pessoa.nome}`)
console.log(`Idade: ${pessoa.idade}`)
console.log(`Cidade: ${pessoa.cidade}`)

console.log(`Nome: ${pessoa.nome}`)
pessoa.nome = 'Maria'
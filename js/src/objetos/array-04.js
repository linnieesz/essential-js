const produtos = [
    { nome: 'Camisa', preco: 50 },
    { nome: 'Calça', preco: 120 },
    { nome: 'Tenis', preco: 200 },
    { nome: 'Boné', preco: 30 },
    { nome: 'Relogio', preco: 80 },
];

const maisBaratos = produtos.filter((produto) => produto.preco < 100);

console.log('Produtos com preço menor que 100 reais:');

maisBaratos.forEach((produto) => {
    console.log(`Nome: ${produto.nome}, Preço: ${produto.preco}`)
})
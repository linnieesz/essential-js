const livro = {
    titulo: 'O Senhor dos Aneis',
    autor: {
        nome: 'J.R.R. Tolkien',
        idade: 81,
    },
    generos: ['Fantasia', 'Aventura', 'Ficção'],
    publicado: true,
    anoPublicacao: 1954,
}

console.log('Titulo:', livro.titulo);
console.log(`Autor: ${livro.autor.nome}`);
console.log(`Livro publicado? ${livro.publicado ? 'Sim' : 'Não'}`);

if (livro.publicado) {
    console.log(`Ano da publicação: ${livro.anoPublicacao}`)
    console.log(`Gêneros: ${livro.generos.join(', ')}`)
}

// console.log(JSON.stringify(livro))
console.log(JSON.stringify(livro, null, 2))
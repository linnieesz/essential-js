// operadores logicos

// AND
const planejamentoConcluido = true;
const estaSol = true;

const temPicnic = planejamentoConcluido && estaSol;

console.log('Vamos fazer um picnic? ', temPicnic);

// OR
const estudei = false;
const liUmLivro = true;

const diaProdutivo = estudei || liUmLivro;
console.log('Foi um dia produtivo? ', diaProdutivo)

//NOT
const estouCansado = true;
console.log('Vou para academia? ', !estouCansado);

// XOR
const usandoCalca = true;
const usandoBermuda = false;

const vestidoCorretamente = usandoCalca !== usandoBermuda;

console.log('Estou vestido corretamente? ', vestidoCorretamente);

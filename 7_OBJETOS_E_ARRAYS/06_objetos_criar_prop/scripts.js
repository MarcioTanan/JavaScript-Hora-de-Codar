let pessoa = {
    nome: 'Marcio',
    idade: 36,
    profissão: 'programador'
}

console.log(pessoa.nome)

delete pessoa.nome

console.log(pessoa.nome)

console.log(pessoa)

pessoa.casado = false

console.log(pessoa)
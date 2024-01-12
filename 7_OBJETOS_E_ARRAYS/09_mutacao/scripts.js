let objetoA = {
    pontos: 10
}

objetoB = objetoA

let objetoC = {
    pontos: 10
}

console.log(objetoA == objetoB)
console.log(objetoA == objetoC)


let pessoa = {
    nome: 'Marcio'
}

console.log(pessoa)

let pessoa2 = pessoa

console.log(pessoa == pessoa2)

pessoa2.nome = 'Pedro'

console.log(pessoa.nome)

pessoa.nome = 'Maria'

console.log(pessoa2.nome)
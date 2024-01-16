let pessoa = {
    maos: 4,
}

let pessoaNova = Object.create(pessoa)

console.log(pessoaNova.maos)
console.log(Object.getPrototypeOf(pessoaNova) == pessoa)

console.log(pessoaNova.hasOwnProperty('maos'))



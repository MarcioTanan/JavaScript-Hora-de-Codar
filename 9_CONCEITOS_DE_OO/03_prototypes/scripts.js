let pessoa = {
    maos:2
}

console.log(Object.getPrototypeOf(pessoa))
console.log(Object.getPrototypeOf(pessoa) == Object.prototype)

const pessoa2 = {
    maos: 2,
}

console.log(Object.getPrototypeOf(pessoa))
console.log(Object.getPrototypeOf(pessoa) === Object.prototype)

console.log(pessoa.hasOwnProperty('maos'))
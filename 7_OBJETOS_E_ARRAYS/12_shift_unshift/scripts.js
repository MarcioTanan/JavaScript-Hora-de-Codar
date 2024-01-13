let frutas = ['Maçã','Melão','Uva']
console.log(frutas)

let frutaRemovida = frutas.shift()
console.log(frutas)

console.log(frutaRemovida)


let carros = ['BMW','Audi','VW','Fiat']
console.log(carros)

let removerPrimeiroCarro = carros.shift()

console.log(removerPrimeiroCarro)
console.log(carros)

carros.unshift('Gurgel')
console.log(carros)
console.log(carros[0])
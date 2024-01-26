const maior = /[A-Z]/

console.log(maior.test("marcio"))
console.log(maior.test("MARCIO"))
console.log(maior.test("Marcio"))
console.log(maior.test("1234"))
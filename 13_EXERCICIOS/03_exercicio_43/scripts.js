const reg = /Marca: (Nike|Puma|Adidas|Asics)/

console.log(reg.test("Marca: Nike"))
console.log(reg.test("Marca: Puma"))
console.log(reg.test("Marca: Rebook"))
console.log(reg.test("Marca: Adidas"))
console.log(reg.test("Asics"))

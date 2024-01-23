const cep = /\d{5}-\d{3}/

console.log(cep.test("88117-500"))
console.log(cep.test("88117-asd"))
console.log(cep.test("88117-50"))
console.log(cep.test("99999-999"))

const tel = /\(\d{2}\)\d{4,5}-\d{4}/

console.log(tel.test('(13)99142-3249'))
console.log(tel.test('(13)9142-3249'))
console.log(tel.test('(13)9142-249'))
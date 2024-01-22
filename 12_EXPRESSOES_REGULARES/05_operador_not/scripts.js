const notab = /[^ab]/

console.log(notab.test('a'))
console.log(notab.test('Aqui tem a'))

const nottoaz = /[^a-z]/

console.log(nottoaz.test('asfafvdvd'))
console.log(nottoaz.test('123 as'))
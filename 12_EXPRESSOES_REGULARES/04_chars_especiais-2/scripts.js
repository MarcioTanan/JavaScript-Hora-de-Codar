const dia = /\d\d/

console.log(dia.test('2024') && '2019'.length == 2)
console.log(dia.test('asd'))
console.log(dia.test('05') && '05'.length == 2)
console.log(dia.test('5asd'))

const palavrasPeloMenosTresLetras = /\w\w\w/

console.log(palavrasPeloMenosTresLetras.test('asd'))
console.log(palavrasPeloMenosTresLetras.test('asdd'))
console.log(palavrasPeloMenosTresLetras.test('as'))
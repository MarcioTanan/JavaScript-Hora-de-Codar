const pontoRegex = /./

console.log('/./')
console.log(pontoRegex.test('asd'))
console.log(pontoRegex.test(' '))
console.log(pontoRegex.test('123'))
console.log(pontoRegex.test('123asd'))

const dRegex = /\d/

console.log('/\d/')
console.log(dRegex.test('asd'))
console.log(dRegex.test(' '))
console.log(dRegex.test('123'))
console.log(dRegex.test('123asd'))

const dRegex2 = /\D/

console.log('/\D/')
console.log(dRegex2.test('asd'))
console.log(dRegex2.test(' '))
console.log(dRegex2.test('123'))
console.log(dRegex2.test('123asd'))

const sRegex = /\s/

console.log('/\s/')
console.log(sRegex.test('asd'))
console.log(sRegex.test(' '))
console.log(sRegex.test('123'))
console.log(sRegex.test('123asd'))

const sRegex2 = /\S/

console.log('/\s/')
console.log(sRegex2.test('asd'))
console.log(sRegex2.test(' '))
console.log(sRegex2.test('123'))
console.log(sRegex2.test('123asd'))

const wRegex = /\w/

console.log('/\w/')
console.log(wRegex.test('asd'))
console.log(wRegex.test(' '))
console.log(wRegex.test('123'))
console.log(wRegex.test('123asd'))

const wRegex2 = /\W/

console.log('/\W/')
console.log(wRegex2.test('asd'))
console.log(wRegex2.test(' '))
console.log(wRegex2.test('123'))
console.log(wRegex2.test('123asd'))
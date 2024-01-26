const validarData = /^[0-9]{2}[/][0-9]{2}[/][0-9]{4}/

console.log(validarData.test('16/11/1987'))
console.log(validarData.test('16/11/87'))
console.log(validarData.test('16-11-1987'))
console.log(validarData.test('5/10/1987'))
console.log(validarData.test('01/08/1988'))

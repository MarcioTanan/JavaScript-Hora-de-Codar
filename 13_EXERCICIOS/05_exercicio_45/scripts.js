const validarNomeUsuario = /^(?=.{3,16}$)[a-z 0-9-_]/

console.log(validarNomeUsuario.test("marcio_123"))
console.log(validarNomeUsuario.test("as"))
console.log(validarNomeUsuario.test("11111111111111111"))
console.log(validarNomeUsuario.test(""))
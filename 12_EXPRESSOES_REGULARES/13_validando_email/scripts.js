const validarEmail = /\w+@\w+\.\w+/

console.log(validarEmail.test("marcio-tanan@hotmail.com"))
console.log(validarEmail.test("marcio@gmail"))
console.log(validarEmail.test("gmail.com"))
console.log(validarEmail.test("marcio-tanan@hotmail.com.br"))


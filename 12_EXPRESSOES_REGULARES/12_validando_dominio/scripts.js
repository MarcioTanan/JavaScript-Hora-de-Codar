const validaDominio = /[?www.]\w+\.com.br|.com/

console.log(validaDominio.test("www.marcio.com.br"))
console.log(validaDominio.test("www.marcio.com"))
console.log(validaDominio.test("www.marcio.net"))
console.log(validaDominio.test("marcio.com"))
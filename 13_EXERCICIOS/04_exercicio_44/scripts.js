const validarIp = /^[0-9]{1,3}[.][0-9]{1,3}[.][0-9]{1,3}[.][0-9]{1,3}/

console.log(validarIp.test("127.0.0.1"))
console.log(validarIp.test("158.1.8.9"))
console.log(validarIp.test("23.5.6.12"))
console.log(validarIp.test("0.0.0.0"))
console.log(validarIp.test("fsdfasf"))
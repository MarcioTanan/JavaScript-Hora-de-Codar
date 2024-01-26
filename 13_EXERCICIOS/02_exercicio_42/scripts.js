const validarId = /\d+ID\b/

console.log(validarId.test("3165135ID"))
console.log(validarId.test("65416516816"))
console.log(validarId.test("fewqfjoifio"))
console.log(validarId.test("fqwefwqefID"))
console.log(validarId.test("ID"))
console.log(validarId.test("8416841651ID"))
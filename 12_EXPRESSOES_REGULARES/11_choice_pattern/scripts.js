const reg = /\w+: (Marcio)|(Monica)|(Renato)/


console.log(reg.test("Nome: Marcio"))
console.log(reg.test("Nome: Monica"))
console.log(reg.test("Nome: Cid"))
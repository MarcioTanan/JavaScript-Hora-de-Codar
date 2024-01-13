const person = {
    name: 'Jhon',
    lastname: 'Doe'
}

const {name: fname, lastname:lname} = person;

console.log(fname)
console.log(lname)

let obj = {
    rodas: 4,
    portas: 4,
    tetosolar:true,
    motor: '2.0'
}

const {rodas:vRodas, portas:vPortas, tetosolar:vTetosola, motor:vMotor} = obj

console.log(vRodas)
console.log(vPortas)
console.log(vTetosola)
console.log(vMotor)
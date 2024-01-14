let onibus = {
    rodas:8,
    passageiros: 40,
    portas:2
}

let onibusB = {
    janelas:20
}

Object.assign(onibus,onibusB)

delete onibus.rodas

console.log(onibus)
console.log(onibus.rodas)
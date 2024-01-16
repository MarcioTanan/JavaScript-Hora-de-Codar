function criarCachorro(raca) {
    let cachorro = Object.create({})
    cachorro.raca = raca
    return cachorro
}

let doberman = criarCachorro('Doberman')

console.log(doberman.raca)


function criarCachorro2(raca,patas,cor){
    let cachorro2 = Object.create({})
    cachorro2.raca = raca 
    cachorro2.patas = patas 
    cachorro2.cor = cor
    cachorro2.latir = function(){
        console.log("Au Au Au")
    }
    return cachorro2
}

let labrador = criarCachorro2('Labrador', 4, 'castanho')

console.log(labrador)

console.log(labrador.raca)
console.log(labrador.patas)
console.log(labrador.cor)
labrador.latir()

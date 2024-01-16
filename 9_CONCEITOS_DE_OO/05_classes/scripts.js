let cachorro = {
    raca: 'SRD',
}

let pastorAlemao = Object.create(cachorro)

pastorAlemao.raca = 'Pastor Alemão'

console.log(pastorAlemao.raca)

let cachorro2 = {
    patas: 4,
    raca: 'SRD',
    latir: function(){
        console.log("Au Au Au")
    }
}

let labrador = Object.create(cachorro2)

labrador.latir()

labrador.raca = "Labrador"

console.log(labrador.raca)
console.log(cachorro2.raca)

let pastor = Object.create(cachorro2)

pastor.raca = "Pastor Alemão"

console.log(pastor.raca)
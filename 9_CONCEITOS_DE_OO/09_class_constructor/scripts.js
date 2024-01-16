class Cachorro {
    constructor(raca){
        this.raca = raca
    }
}

let labrador = new Cachorro('Labrador')

console.log(labrador.raca)

class Cachorro2 {
    constructor(raca, patas, cor){
        this.raca = raca
        this.patas = patas
        this.cor = cor
    }
}

let doberman = new Cachorro2('Doberman', 4, 'preto')

console.log(doberman)
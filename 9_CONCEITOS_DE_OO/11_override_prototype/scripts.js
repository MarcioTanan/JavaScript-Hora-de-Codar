class Cachorro2 {
    constructor(raca,cor){
        this.raca = raca
        this.cor = cor
    }
    latir(){
        console.log("Au Au Au")
    }
}

Cachorro2.prototype.raca = 'SRD'
Cachorro2.prototype.patas = 4

let doberman = new Cachorro2('Doberman','preto')

console.log(doberman)
console.log(doberman.patas)
doberman.latir()

console.log(Cachorro2.prototype.raca)
console.log(doberman.raca)
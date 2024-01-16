function Cachorro(raca){
    this.raca = raca
}

let husky = new Cachorro('Husky')
console.log(husky.raca)

function Cachorro2(raca, patas, cor){
    this.raca = raca
    this.patas = patas
    this.cor = cor
    this.uivar = function(){
        console.log("AUuuuuuu")
    }
}

let labrador = new Cachorro2('Labrador', 4, 'preto')

labrador.uivar()
console.log(labrador)
console.log(labrador.raca)
console.log(labrador.patas)
console.log(labrador.cor)
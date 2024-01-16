function Cachorro(raca){
    this.raca = raca
}

Cachorro.prototype.uivar = function(){
    console.log('Auuuuuuu')
}

let pug = new Cachorro('Pug')

console.log(pug.raca)
pug.uivar()


function Cachorro2(raca, patas, cor){
    this.raca = raca
    this.patas = patas
    this.cor = cor
    
}

Cachorro2.prototype.uivar = function(){
    console.log("AUuuuuuu")
}
Cachorro2.prototype.latir = function(){
    console.log("Au Au Au")
}

let labrador = new Cachorro2('Labrador', 4, 'preto')

labrador.uivar()
labrador.latir()
console.log(labrador)
console.log(labrador.raca)
console.log(labrador.patas)
console.log(labrador.cor)
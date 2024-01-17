class Mamifero {
    constructor(patas){
        this.patas = patas
    }
}

let coyote = new Mamifero(4)

console.log(coyote.patas)

class Cachorro extends Mamifero{
    constructor(patas, raca){
        super(patas,patas)
        this.raca = raca
    }

    latir(){
        console.log('Au Au Au')
    }
}

let pug = new Cachorro(4, "Pug")

console.log(pug.patas)

pug.latir()
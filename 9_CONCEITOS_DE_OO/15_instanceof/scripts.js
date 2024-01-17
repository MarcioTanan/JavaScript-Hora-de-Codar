class Mamifero {
    constructor(patas){
        this.patas = patas
    }
}

let coyote = new Mamifero(4)


class Cachorro extends Mamifero{
    constructor(patas, raca){
        super(patas,patas)
        this.raca = raca
    }
}

console.log(new Cachorro instanceof Mamifero)

console.log(coyote instanceof Mamifero)
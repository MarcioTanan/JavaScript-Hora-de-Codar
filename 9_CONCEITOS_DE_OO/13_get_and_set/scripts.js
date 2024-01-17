class Cachorro {
    constructor(raca){
        this.raca = raca
    }

get verRaca(){
    return 'A raça é ' + this.raca
}

set novaRaca(value){
    this.raca = value
}
}

let golden = new Cachorro('Golden')

console.log(golden.verRaca)

golden.novaRaca = 'Pastor Alemão'

console.log(golden.verRaca)


class Cachorro2 {
    constructor(raca, cor){
        this.raca = raca
        this.cor = cor
    }
    latir(){
        console.log('Au Au Au')
    }

    get getCor() {
        return this.cor
    }
    set setCor(cor) {
        this.cor = cor
    }
}

let pastor = new Cachorro2('Pastor Alemão', 'Sem cor')

console.log(pastor)

pastor.setCor = 'Marrom'

console.log(pastor.getCor)


let pessoa = {
    nome:'',
    setNome: function(novoNome){
        this.nome = novoNome
    },
    getNome: function(){
        return this.nome
    }
}

pessoa.setNome("Marcio")
console.log(pessoa.getNome())


const cachorro = {
    raca:'SRD',
    uivar: function(){
        console.log("Auuuuuuuu")
    },
    rosnar: function(){
        console.log("grrrrrr")
    },
    setRaca: function(raca){
        this.raca = raca
    },
    getRaca: function(){
        return "A raça é " + this.raca
    }
}

console.log(cachorro.raca)

cachorro.setRaca('Yorkshire')

console.log(cachorro.raca)

console.log(cachorro.getRaca())

class Endereco {
    constructor(rua, bairro,cidade,estado){
        this.rua = rua
        this.bairro = bairro
        this.cidade = cidade
        this.estado = estado
    }
   
    

    set setRua(setRua) {
        this.rua = setRua
    }
    set setBairro(setBairro) {
        this.bairro = setBairro
    }
    set setCidade(setCidade) {
        this.cidade = setCidade
    }
    set setEstado(setEstado) {
        this.estado = setEstado
    }
}

let endereco = new Endereco('Alves Arantes', 'Jardim Castelo','Santos','SP')

console.log(endereco)

endereco.setRua = 'Santa Cecilia'

console.log(endereco.getRua)
console.log(endereco)

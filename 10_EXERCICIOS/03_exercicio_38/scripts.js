class Endereco {
    constructor(rua, bairro,cidade,estado){
        this.rua = rua
        this.bairro = bairro
        this.cidade = cidade
        this.estado = estado
    }
   
    get getRua() {
        return this.rua
    }
    get getBairro() {
        return this.bairro
    }
    get getCidade() {
        return this.cidade
    }
    get getEstado() {
        return this.estado
    }


    set setRua(rua) {
        this.rua = rua
    }
    set setBairro(bairro) {
        this.bairro = bairro
    }
    set setCidade(cidade) {
        this.cidade = cidade
    }
    set setEstado(estado) {
        this.estado = estado
    }
}

let endereco = new Endereco('Alves Arantes', 'Jardim Castelo','Santos','SP')

console.log(endereco)

endereco.setRua = 'Santa Cecilia'

console.log(endereco.getRua)
console.log(endereco)

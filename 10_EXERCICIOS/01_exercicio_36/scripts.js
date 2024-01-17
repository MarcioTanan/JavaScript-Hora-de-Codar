class Banco {
    constructor(saldo){
        this.saldo = saldo
    }
    deposito(valor){
        this.saldo += valor
    }
    saque(valor){
        this.saldo -= valor
    }
}

let cliente = new Banco(100)

console.log(cliente.saldo)

cliente.deposito(50)

console.log(cliente.saldo)

cliente.saque(80)

console.log(cliente.saldo)



   

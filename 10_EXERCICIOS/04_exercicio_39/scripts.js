class Carro{
    constructor(marca, cor, gasolina, consumo){
        this.marca = marca
        this.cor = cor
        this.gasolina = gasolina
        this.consumo = consumo
    }

    dirigir(km){

        let litrosConsumidos = km / this.consumo
        this.gasolina -= litrosConsumidos
    }

    abastecer(litros){
        this.gasolina += litros
    }
    
}


let carro = new Carro('Fiat', 'preto', 200, 14) 

console.log(carro)

carro.dirigir(100)

console.log(carro)

carro.abastecer(50)

console.log(carro)


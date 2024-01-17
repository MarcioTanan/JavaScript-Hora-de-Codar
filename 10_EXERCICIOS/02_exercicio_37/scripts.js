class Compras {
    constructor(items, qtd, valor ){
        this.items = items
        this.qtd = qtd
        this.valor = valor
    }

    adicionar(valor){
        this.items += valor
    }
    remover(valor){
        this.items -= valor
    }
}

let compras = new Compras([
    {
        id: 1,
        nome: "Camisa",
        qtd: 1,
        preco: 20
    },
    {
        id: 2,
        nome: "Calça",
        qtd: 2,
        preco: 50
    }
], 3, 120)

console.log(compras)
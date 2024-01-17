class Compras {
    constructor(items, qtd, valor ){
        this.items = items
        this.qtd = qtd
        this.valor = valor
    }

    adicionar(item){

        let contador = 0

        for(let itemCarrinho in this.items){
            if(this.items[itemCarrinho].id == item.id){
                this.items[itemCarrinho].qtd += item.qtd
            }
        }


        if(contador == 0){
           this.items.push(item) 
        }

        this.qtd += item.qtd
        this.valor += item.preco * item.qtd
    }


    remover(item){
        for(let itemCarrinho in this.items){
            if(this.items[itemCarrinho].id == item.id){
               
                let obj = this.items[itemCarrinho]
                let index = this.items.findIndex(function(obj) {return obj.id == item.id})

                this.qtd -= this.items[itemCarrinho].qtd
                this.valor -= this.items[itemCarrinho].preco * this.items[itemCarrinho].qtd

                this.items.splice(index, 1)

            }
        }
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

compras.adicionar({id:1, nome:"Camisa", qtd: 2, preco: 20})

console.log(compras)

compras.adicionar({id:3, nome:"Boné", qtd: 1, preco: 15})

console.log(compras)

compras.remover({id:1, nome:"Camisa", qtd: 1, preco: 20})

console.log(compras)
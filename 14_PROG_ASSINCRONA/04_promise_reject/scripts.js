function verificarNumero(num){
    return new Promise((resolve, reject) => {
        if(num == 2){
            resolve(console.log(`O número é ${num}`))
        } else {
            reject(new Error(console.log(`Falhou: o número é ${num}` )))
        }
    })
    
}

verificarNumero(2)
verificarNumero(3)
verificarNumero(21)
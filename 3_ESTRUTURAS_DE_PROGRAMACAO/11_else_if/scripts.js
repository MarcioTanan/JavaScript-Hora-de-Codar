let nome = prompt('Qual é seu nome?')

if(nome != undefined && nome == 'Pedro'){
  console.log("Nome esta definido")
}else if(nome == 'Marcio' && nome.length > 5 ){
  console.log('O nome é Marcio')
}else {
  console.log('Não é Marcio!')
}

if(1 > 2){
  console.log('Teste')
} else if(1 == 1){
  console.log('Testando')
}
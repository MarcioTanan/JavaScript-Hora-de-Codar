let idade = prompt('Qual sua idade?')


if(idade >= 18){
  console.log('A idade é maior que 18')
}else{
  console.log('A idade é menor que 18')
}

let nome = prompt('Qual seu nome?')

if(nome == 'Marcio' && idade >= 18){
  console.log('Liberado!')
}else{
  console.log('Não liberado!')
}
function nomeComIdade(nome, idade){
  if(idade == undefined ){
      console.log("Seu nome é " + nome)
}else {
      console.log("Seu nome é " + nome + " e você tem " + idade + " anos")
}
}

nomeComIdade("João")
nomeComIdade("João", 42)

function soma(a,b){
  if(a === undefined || b === undefined ){
      console.log("Esta função precisa de 2 números")
}else {
  return a + b
}
}

console.log(soma(1))
console.log(soma(1,2))

function saudacao(nome,idade){
  if(idade === undefined){
    console.log("Olá " + nome)
  }else{
    console.log("Olá " + nome + ", você tem " + idade + " anos")
  }
}

saudacao("Marcio", 35)
saudacao("Marcio")
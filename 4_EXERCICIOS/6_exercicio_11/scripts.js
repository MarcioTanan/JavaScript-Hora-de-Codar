let idade = prompt("Qual sua idade?")
let cnh = prompt("Tem CNH?")

if(idade >= 18 && cnh == "sim"){
  console.log("pode dirigir")
  alert("pode dirigir")
}else if(idade >= 18 && cnh != "sim"){
  console.log("Não pode dirigir")
  alert("Não pode dirigir")
}else{
  console.log("Não pode dirigir")
  alert("Não pode dirigir")
}
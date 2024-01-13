let pessoa = {
    "nome": "Marcio",
    "idade": 36,
    "profissao": "developer",
    "Hobbies": ["Games", "Leitura", "Filmes"]
}

let pessoaTexto = JSON.stringify(pessoa)

console.log(pessoaTexto)

let pessoaJSON = JSON.parse(pessoaTexto)
console.log(pessoaJSON)
console.log(pessoaJSON.nome)
console.log(pessoaJSON.Hobbies[1])
    let res = document.getElementById('res')
    let nome_cidade = []

function inserir(){
    let cidade = document.getElementById('cidade').value
    nome_cidade.push(cidade)
}
function excluir(){
    let cidade = document.getElementById('cidade').value
    nome_cidade.pop(cidade)
}
const form = document.getElementById('form-atividade')
//constante para emoji
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji Celebrando"/>'
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji decepcionado"/>'
//array´s
const atividades = []
const notas = []
// criação do span
const spanAprovado = '<span class = "resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class = "resultado reprovado">Reprovado</span>'
const notaMinima = (Number(prompt("Digite a nota mínima:")))

let linhas = " "

//evento para atualizar a tela
form.addEventListener('submit', function(e){
    e.preventDefault()
5
    adicionaLinha()
    atualizaTabela()
    atualizaMediaFinal()
})

function adicionaLinha(){
    const inputNomeAtividade = document.getElementById('nome-atividade')
    const inputNotaAtividade = document.getElementById('nota-atividade')

    if (atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade: ${inputNomeAtividade.value} já foi inserida.`)
    }else{
        atividades.push(inputNomeAtividade.value)
        notas.push(Number(inputNotaAtividade.value))

        let linha = '<tr>' // variável para linhas da tabela
        linha += `<td>${inputNomeAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`//ternário
        linha += '</tr>'

        linhas += linha
    }

    //para limpar o campo
    inputNomeAtividade.value = ''
    inputNotaAtividade.value = ''
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody') //para colocar o conteúdo acima dentro da tabela
    corpoTabela.innerHTML = linhas
}

function atualizaMediaFinal(){
    const mediaFinal = calculaMediaFinal()

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2)
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMediaFinal(){
    let somaDasNotas = 0

    for (let i = 0; i < notas.length; i++){
        somaDasNotas += notas[i]
    }

    return somaDasNotas / notas.length
}
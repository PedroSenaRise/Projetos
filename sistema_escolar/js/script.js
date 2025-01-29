//DOM
const unidade1 = document.querySelector('#uni1')
const unidade2 = document.querySelector('#uni2')
const unidade3 = document.querySelector('#uni3')
const  butao = document.querySelector('#butao')
const resultado = document.querySelector('#fundo')
//EVENTO
butao.addEventListener('click', calculo)
//FUNÇÂO
function calculo(){
    n1= Number(unidade1.value)
    n2= Number(unidade2.value)
    n3= Number(unidade3.value)

    media = (n1+n2+n3)/3
    if (media>=5){
        mensagem = 'Aprovado'
    }
    else{
        mensagem= 'Reprovado'
    }

    resultado.textContent = `A sua média foi ${media.toFixed(1)},voce foi ${mensagem}.`
}
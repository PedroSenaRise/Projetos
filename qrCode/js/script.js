//DOM
const texto = document.querySelector('#texto')
const buton = document.querySelector('#buton')
const area = document.querySelector('#qrcode')
//EVENTO
buton.addEventListener('click', gerar)
//FUNÇÃO
function gerar(){
    area.innerHTML = ''
    new QRCode(area,{
        text:texto.value, 
        width: 350,
        height:350,
        colorLight:'transparent',
        colorDark: 'rgba(209, 160, 69, 0.808)',
    })
}
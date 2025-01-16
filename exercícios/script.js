var horario = new Date()
var dia = horario.getHours()
var mensagem = document.getElementById('mensagem')
var foto = document.getElementById('imagem')

 function carregar(){
    mensagem.innerHTML = `Agora são ${dia} horas`
    if(dia < 12){
        document.body.style.background= '#a5a47a'
        foto.src = '/Curso-JS/exercícios/manha.png'
    }else if(dia < 18){
        document.body.style.background = '#6f444e'
        foto.scr = '/Curso-JS/exercícios/tarde.png'
    }else {
        document.body.style.background = '#664867'
        foto.src = '/Curso-JS/exercícios/noite.png'
    }
 }


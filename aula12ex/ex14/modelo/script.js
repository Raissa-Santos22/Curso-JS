function carregar (){
     var msg = document.getElementById('msg')
     var img = document.getElementById('imagem')
     var data = new Date ()
     var hora =  data.getHours ()
     msg.innerHTML = `Agora são ${hora} horas`

     if ( hora < 12){
        // BOM DIA !!
        img.src = "/aula12ex/ex14/manha.png"
        document.body.style.background ='#e5e4db'
     }
     else if ( hora < 18){
        // BOA TARDE
        document.body.style.background ="#9b6f5f"
        img.src = '/aula12ex/ex14/tarde.png'
     }
     else{
        // BOA NOITE
        img.src = "/aula12ex/ex14/noite.png"
        document.body.style.background ="#66496b"
     }
}

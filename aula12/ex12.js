var agora = new Date()
var horario = agora.getHours()

console.log(`Agora são ${horario} horas`)

if(horario < 12){
    console.log(`BOM DIA!`)
}else if(horario < 18){
    console.log('BOA TARDE')
}else{
    console.log('BOA NOITE')
}
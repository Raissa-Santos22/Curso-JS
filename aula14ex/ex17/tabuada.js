function tabuada(){
    var caixa1 = document.getElementById('caixa1')
    var numero =  Number(caixa1.value)
    var resposta = document.getElementById('res')

    if(numero == ''){
        alert('Por favor, digite um numero!')
    }else{
        var c = 1
        while(c <= 10){
          resposta.innerText = `${numero} x ${c} = ${c*numero} `
          c++
        }
    }

    }
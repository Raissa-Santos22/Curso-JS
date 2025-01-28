let num = [5, 8, 2, 9, 3]

/*Vetores chamados de ARRAY em JavaScript , são variáveis que tem vários elementos , cada
um composto por um valor e uma identificação
A indentifação dos vetores começa sempre no zero  */


num.sort() /* Esse comando é responsável por colocar os elementos em ordem */
num.push(1) /* Esse comando é resposável por acrescentar um valor no vetor na ultima posição, independente de qual
ela seja */
console.log(num)
console.log(`O vetor tem ${num.length} posições`) /* O comando num.length serve para contar 
quantas posições tem o vetor*/
console.log(`O primeiro valor do vetor é ${num[0]}` /*O comando num[0] vai mostrar o valor da 
posição escolhida no vetor */)

let pos = num.indexOf(3)
if(pos == - 1){
    console.log('Valor não encontrado!')
}
else{
    console.log(`O valor 8 está na posicão ${pos}`)
    /*Vai procurar o valor dentro do vetor e mostrar a chave
    de indentificação */
}







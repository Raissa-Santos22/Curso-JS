let valores = [8,1,7,4,2,9]
valores.sort()

 /*Vai procurar o valor dentro do vetor e mostrar a chave
de indentificação */
for(let pos = 0; pos < valores.length ;pos++){
    console.log(`A posiçao ${pos} tem os valor ${valores[pos]}`)
}
/*Essa primeira versão serve para mostrar todos os valores que tem dentro do vetor valores 
utilizando a estrutura for */

for(let pos in valores){
    console.log(`A posiçao ${pos} tem os valor ${valores[pos]}`)
}
/*Essa segunda versão traz o mesmo resultado porém é uma versão simplicada,lida da seguinte maneira :
Para cada pos no vetor valor ele mostra o valor desse vetor */

console.log(`O valor 8 está na posicão ${pos}`)
/*Vai procurar o valor dentro do vetor e mostrar a chave
de indentificação */
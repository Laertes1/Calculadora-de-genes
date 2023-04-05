 function enviar(){

 const idPai = document.querySelector('.idPai').value;
 const idMae = document.querySelector('.idMae').value;

 const input = document.getElementById('table');
 const genePai1 = [idPai.substring(0,1), idPai.substring(1,2)]
 const genePai2 = [idPai.substring(2,3), idPai.substring(3,4)]
 const genePai3 = [idPai.substring(4,5), idPai.substring(5,6)]

 const geneMae1 = [idMae.substring(0,1), idMae.substring(1,2)]
 const geneMae2 = [idMae.substring(2,3), idMae.substring(3,4)]
 const geneMae3 = [idMae.substring(4,5), idMae.substring(5,6)]


const linhaGene = [genePai1[0] + genePai2[0] + genePai3[0] ,
                   genePai1[0] + genePai2[0] + genePai3[1] ,
                   genePai1[0] + genePai2[1] + genePai3[0] , 
                   genePai1[0] + genePai2[1] + genePai3[1] , 
                   genePai1[1] + genePai2[0] + genePai3[0] ,
                   genePai1[1] + genePai2[0] + genePai3[1] ,
                   genePai1[1] + genePai2[1] + genePai3[0] , 
                   genePai1[1] + genePai2[1] + genePai3[1] , ]
                   
const colunaGene = [geneMae1[0] + geneMae2[0] + geneMae3[0] ,
                   geneMae1[0] + geneMae2[0] + geneMae3[1] ,
                   geneMae1[0] + geneMae2[1] + geneMae3[0] , 
                   geneMae1[0] + geneMae2[1] + geneMae3[1] , 
                   geneMae1[1] + geneMae2[0] + geneMae3[0] ,
                   geneMae1[1] + geneMae2[0] + geneMae3[1] ,
                   geneMae1[1] + geneMae2[1] + geneMae3[0] , 
                   geneMae1[1] + geneMae2[1] + geneMae3[1] , ]
const tabela=[]

const linha1 =[]

linha1.push(linhaGene)

tabela.push(linha1)




for (let m = 0; m < tabela.length; m++) {
  const linha = tabela.insertRow();
  for (let z = 0; z < table[m].length; z++) {
    const celula = linha.insertCell();
    celula.textContent = table[m][z];
  }
}
}
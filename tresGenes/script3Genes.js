 function enviar(){
 const idPai = document.querySelector('.idPai').value;
 const idMae = document.querySelector('.idMae').value;

 const input = document.getElementById('table');

const tabela=[]

 const genePai1 = [idPai.substring(0,1), idPai.substring(1,2)]
 const genePai2 = [idPai.substring(2,3), idPai.substring(3,4)]
 const genePai3 = [idPai.substring(4,5), idPai.substring(5,6)]

 const geneMae1 = [idMae.substring(0,1), idMae.substring(1,2)]
 const geneMae2 = [idMae.substring(2,3), idMae.substring(3,4)]
 const geneMae3 = [idMae.substring(4,5), idMae.substring(5,6)]


const linhaGene = ["⠀⠀",genePai1[0] + genePai2[0] + genePai3[0] ,
                   genePai1[0] + genePai2[0] + genePai3[1] ,
                   genePai1[0] + genePai2[1] + genePai3[0] , 
                   genePai1[0] + genePai2[1] + genePai3[1] , 
                   genePai1[1] + genePai2[0] + genePai3[0] ,
                   genePai1[1] + genePai2[0] + genePai3[1] ,
                   genePai1[1] + genePai2[1] + genePai3[0] , 
                   genePai1[1] + genePai2[1] + genePai3[1] , ]


                   
const colunaGene1 = [geneMae1[0] + geneMae2[0] + geneMae3[0],] 
const colunaGene2  = [geneMae1[0] + geneMae2[0] + geneMae3[1] ,]
const colunaGene3  = [geneMae1[0] + geneMae2[1] + geneMae3[0] ,] 
const colunaGene4  =  [geneMae1[0] + geneMae2[1] + geneMae3[1] ,] 
const colunaGene5  = [geneMae1[1] + geneMae2[0] + geneMae3[0] ,]
const colunaGene6  = [geneMae1[1] + geneMae2[0] + geneMae3[1] ,]
const colunaGene7 = [geneMae1[1] + geneMae2[1] + geneMae3[0] , ]
const colunaGene8 = [geneMae1[1] + geneMae2[1] + geneMae3[1] , ]


for (let i=0;i<genePai1.length;i++){
  const linha1 = []
  const linha2 = []
  const linha3 = []
  for(let j=0;j<geneMae1.lenght;j++){
    const geneFormacao1 = genePai1[i] + geneMae1[j];
      for(let k=0; k<genePai2.lenght;k++){
        const formacaoGene2 = genePai2[k]+ geneMae2[k];
          for(let f=0; f<genePai3.lenght;f++){
            const formacaoGene3 = genePai3[f] + geneMae3[f];

            linha1.push(geneFormacao1)
            linha2.push(formacaoGene2)
            linha3.push(formacaoGene3)
          
          }
      }
    }
  tabela.push(linhaGene, colunaGene1, colunaGene2, colunaGene3, colunaGene4, colunaGene5, colunaGene6, colunaGene7, colunaGene8)


}





for (let m = 0; m < tabela.length; m++) {
  const linha = input.insertRow();
  for (let z = 0; z < tabela[m].length; z++) {
    const celula = linha.insertCell();
    celula.textContent = tabela[m][z];
  }
}


}
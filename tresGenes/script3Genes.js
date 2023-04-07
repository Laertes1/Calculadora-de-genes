 function enviar(){
const input = document.getElementById('table');
const idPai = document.querySelector('.idPai').value;
const idMae = document.querySelector('.idMae').value;

const genePai1 = [idPai.substring(0,1), idPai.substring(1,2)]
const genePai2 = [idPai.substring(2,3), idPai.substring(3,4)]
const genePai3 = [idPai.substring(4,5), idPai.substring(5,6)]

const geneMae1 = [idMae.substring(0,1), idMae.substring(1,2)]
const geneMae2 = [idMae.substring(2,3), idMae.substring(3,4)]
const geneMae3 = [idMae.substring(4,5), idMae.substring(5,6)]

const tabela=[]



const linhaGene1 = [
 
  genePai1[0] + genePai2[0] + genePai3[0],
  genePai1[0] + genePai2[0] + genePai3[1],
  genePai1[0] + genePai2[1] + genePai3[0],
  genePai1[0] + genePai2[1] + genePai3[1],
  genePai1[1] + genePai2[0] + genePai3[0],
  genePai1[1] + genePai2[0] + genePai3[1],
  genePai1[1] + genePai2[1] + genePai3[0],
  genePai1[1] + genePai2[1] + genePai3[1],
];
const linhaGene2 = [
  "⠀⠀",
  genePai1[0] + genePai2[0] + genePai3[0],
  genePai1[0] + genePai2[0] + genePai3[1],
  genePai1[0] + genePai2[1] + genePai3[0],
  genePai1[0] + genePai2[1] + genePai3[1],
  genePai1[1] + genePai2[0] + genePai3[0],
  genePai1[1] + genePai2[0] + genePai3[1],
  genePai1[1] + genePai2[1] + genePai3[0],
  genePai1[1] + genePai2[1] + genePai3[1],
];

const colunaGene = [
  geneMae1[0] + geneMae2[0] + geneMae3[0],
  geneMae1[0] + geneMae2[0] + geneMae3[1],
  geneMae1[0] + geneMae2[1] + geneMae3[0],
  geneMae1[0] + geneMae2[1] + geneMae3[1],
  geneMae1[1] + geneMae2[0] + geneMae3[0],
  geneMae1[1] + geneMae2[0] + geneMae3[1],
  geneMae1[1] + geneMae2[1] + geneMae3[0],
  geneMae1[1] + geneMae2[1] + geneMae3[1],
];
                  
                   
const colunaGene1 = [geneMae1[0] + geneMae2[0] + geneMae3[0],] 
const colunaGene2  = [geneMae1[0] + geneMae2[0] + geneMae3[1] ,]
const colunaGene3  = [geneMae1[0] + geneMae2[1] + geneMae3[0] ,] 
const colunaGene4  =  [geneMae1[0] + geneMae2[1] + geneMae3[1] ,] 
const colunaGene5  = [geneMae1[1] + geneMae2[0] + geneMae3[0] ,]
const colunaGene6  = [geneMae1[1] + geneMae2[0] + geneMae3[1] ,]
const colunaGene7 = [geneMae1[1] + geneMae2[1] + geneMae3[0] , ]
const colunaGene8 = [geneMae1[1] + geneMae2[1] + geneMae3[1] , ]

const linha1 =[]
const linha2 =[]
const linha3 =[]
const linha4 =[]
const linha5 =[]
const linha6 =[]
const linha7 =[]
const linha8 =[]

const test1 =[]
for( let b=0;b<colunaGene.length;b++){
  for(let t=0; t<linhaGene1.length;t++){
    const te1 = linhaGene1[t].substring(0,1) + colunaGene[b].substring(0,1)
    const te2 = linhaGene1[t].substring(1,2) + colunaGene[b].substring(1,2)
    const te3 = linhaGene1[t].substring(2,3) + colunaGene[b].substring(2,3)
      
    const te4 = te1+te2+te3  
    test1.push(te4)
    
  }
}


const [ar1,ar2,ar3,ar4,ar5,ar6,ar7,ar8,ar9,ar10,ar11,ar12,ar13,ar14,ar15,ar16,ar17,ar18,ar19,ar20,ar21,ar22,ar23,ar24,ar25,ar26,ar27,ar28,ar29,ar30,ar31,ar32,ar33,ar34,ar35,ar36,ar37,ar38,ar39,ar40,ar41,ar42,ar43,ar44,ar45,ar46,ar47,ar48,ar49,ar50,ar51,ar52,ar53,ar54,ar55,ar56,ar57,ar58,ar59,ar60,ar61,ar62,ar63,ar64,] = test1


linha1.push(colunaGene1,ar1,ar2,ar3,ar4,ar5,ar6,ar7,ar8,)
linha2.push(colunaGene2,ar9,ar10,ar11,ar12,ar13,ar14,ar15,ar16,)
linha3.push(colunaGene3,ar17,ar18,ar19,ar20,ar21,ar22,ar23,ar24,)
linha4.push(colunaGene4,ar25,ar26,ar27,ar28,ar29,ar30,ar31,ar32,)
linha5.push(colunaGene5,ar33,ar34,ar35,ar36,ar37,ar38,ar39,ar40,)
linha6.push(colunaGene6,ar41,ar42,ar43,ar44,ar45,ar46,ar47,ar48,)
linha7.push(colunaGene7,ar49,ar50,ar51,ar52,ar53,ar54,ar55,ar56,)
linha8.push(colunaGene8,ar57,ar58,ar59,ar60,ar61,ar62,ar63,ar64,)

tabela.push(linhaGene2 ,linha1,linha2,linha3,linha4,linha5,linha6,linha7,linha8)

for (let m = 0; m < tabela.length; m++) {
  const linha = input.insertRow();
  for (let z = 0; z < tabela[m].length; z++) {
    const celula = linha.insertCell();
    celula.textContent = tabela[m][z];
  }
}

}
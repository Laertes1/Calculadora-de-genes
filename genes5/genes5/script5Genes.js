
function enviar(){
  const idPai = document.querySelector('.idPai').value;
  const idMae = document.querySelector('.idMae').value;
if(idPai.length == 10 && idMae.length ==10){

  const input = document.getElementById('table');

  const genePai1 = [idPai.substring(0,1), idPai.substring(1,2)]
  const genePai2 = [idPai.substring(2,3), idPai.substring(3,4)]
  const genePai3 = [idPai.substring(4,5), idPai.substring(5,6)]
  const genePai4 = [idPai.substring(6,7), idPai.substring(7,8)]
  const genePai5 = [idPai.substring(8,9), idPai.substring(9,10)]
  
  const geneMae1 = [idMae.substring(0,1), idMae.substring(1,2)]
  const geneMae2 = [idMae.substring(2,3), idMae.substring(3,4)]
  const geneMae3 = [idMae.substring(4,5), idMae.substring(5,6)]
  const geneMae4 = [idMae.substring(6,7), idMae.substring(7,8)]
  const geneMae5 = [idMae.substring(8,9), idMae.substring(9,10)]
  
  const tabela=[]
  
  
  
  const linhaGene1 = [
   
    genePai1[0] + genePai2[0] + genePai3[0] + genePai4[0] + genePai5[0],
    genePai1[0] + genePai2[0] + genePai3[0] + genePai4[0] + genePai5[1],
    genePai1[0] + genePai2[0] + genePai3[0] + genePai4[1] + genePai5[0],
    genePai1[0] + genePai2[0] + genePai3[0] + genePai4[1] + genePai5[1],
    genePai1[0] + genePai2[0] + genePai3[1] + genePai4[0] + genePai5[0],
    genePai1[0] + genePai2[0] + genePai3[1] + genePai4[0] + genePai5[1],
    genePai1[0] + genePai2[0] + genePai3[1] + genePai4[1] + genePai5[0],
    genePai1[0] + genePai2[0] + genePai3[1] + genePai4[1] + genePai5[1],
    genePai1[0] + genePai2[1] + genePai3[0] + genePai4[0] + genePai5[0],
    genePai1[0] + genePai2[1] + genePai3[0] + genePai4[0] + genePai5[1],
    genePai1[0] + genePai2[1] + genePai3[0] + genePai4[1] + genePai5[0],
    genePai1[0] + genePai2[1] + genePai3[0] + genePai4[1] + genePai5[1],
    genePai1[0] + genePai2[1] + genePai3[1] + genePai4[0] + genePai5[0],
    genePai1[0] + genePai2[1] + genePai3[1] + genePai4[0] + genePai5[1],
    genePai1[0] + genePai2[1] + genePai3[1] + genePai4[1] + genePai5[0],
    genePai1[0] + genePai2[1] + genePai3[1] + genePai4[1] + genePai5[1],
    genePai1[1] + genePai2[0] + genePai3[0] + genePai4[0] + genePai5[0],
    genePai1[1] + genePai2[0] + genePai3[0] + genePai4[0] + genePai5[1],
    genePai1[1] + genePai2[0] + genePai3[0] + genePai4[1] + genePai5[0],
    genePai1[1] + genePai2[0] + genePai3[0] + genePai4[1] + genePai5[1],
    genePai1[1] + genePai2[0] + genePai3[1] + genePai4[0] + genePai5[0],
    genePai1[1] + genePai2[0] + genePai3[1] + genePai4[0] + genePai5[1],
    genePai1[1] + genePai2[0] + genePai3[1] + genePai4[1] + genePai5[0],
    genePai1[1] + genePai2[0] + genePai3[1] + genePai4[1] + genePai5[1],
    genePai1[1] + genePai2[1] + genePai3[0] + genePai4[0] + genePai5[0],
    genePai1[1] + genePai2[1] + genePai3[0] + genePai4[0] + genePai5[1],
    genePai1[1] + genePai2[1] + genePai3[0] + genePai4[1] + genePai5[0],
    genePai1[1] + genePai2[1] + genePai3[0] + genePai4[1] + genePai5[1],
    genePai1[1] + genePai2[1] + genePai3[1] + genePai4[0] + genePai5[0],
    genePai1[1] + genePai2[1] + genePai3[1] + genePai4[0] + genePai5[1],
    genePai1[1] + genePai2[1] + genePai3[1] + genePai4[1] + genePai5[0],
    genePai1[1] + genePai2[1] + genePai3[1] + genePai4[1] + genePai5[1],
  ];
  const linhaGene2 = [
    "⠀⠀",
    genePai1[0] + genePai2[0] + genePai3[0] + genePai4[0] + genePai5[0],
    genePai1[0] + genePai2[0] + genePai3[0] + genePai4[0] + genePai5[1],
    genePai1[0] + genePai2[0] + genePai3[0] + genePai4[1] + genePai5[0],
    genePai1[0] + genePai2[0] + genePai3[0] + genePai4[1] + genePai5[1],
    genePai1[0] + genePai2[0] + genePai3[1] + genePai4[0] + genePai5[0],
    genePai1[0] + genePai2[0] + genePai3[1] + genePai4[0] + genePai5[1],
    genePai1[0] + genePai2[0] + genePai3[1] + genePai4[1] + genePai5[0],
    genePai1[0] + genePai2[0] + genePai3[1] + genePai4[1] + genePai5[1],
    genePai1[0] + genePai2[1] + genePai3[0] + genePai4[0] + genePai5[0],
    genePai1[0] + genePai2[1] + genePai3[0] + genePai4[0] + genePai5[1],
    genePai1[0] + genePai2[1] + genePai3[0] + genePai4[1] + genePai5[0],
    genePai1[0] + genePai2[1] + genePai3[0] + genePai4[1] + genePai5[1],
    genePai1[0] + genePai2[1] + genePai3[1] + genePai4[0] + genePai5[0],
    genePai1[0] + genePai2[1] + genePai3[1] + genePai4[0] + genePai5[1],
    genePai1[0] + genePai2[1] + genePai3[1] + genePai4[1] + genePai5[0],
    genePai1[0] + genePai2[1] + genePai3[1] + genePai4[1] + genePai5[1],
    genePai1[1] + genePai2[0] + genePai3[0] + genePai4[0] + genePai5[0],
    genePai1[1] + genePai2[0] + genePai3[0] + genePai4[0] + genePai5[1],
    genePai1[1] + genePai2[0] + genePai3[0] + genePai4[1] + genePai5[0],
    genePai1[1] + genePai2[0] + genePai3[0] + genePai4[1] + genePai5[1],
    genePai1[1] + genePai2[0] + genePai3[1] + genePai4[0] + genePai5[0],
    genePai1[1] + genePai2[0] + genePai3[1] + genePai4[0] + genePai5[1],
    genePai1[1] + genePai2[0] + genePai3[1] + genePai4[1] + genePai5[0],
    genePai1[1] + genePai2[0] + genePai3[1] + genePai4[1] + genePai5[1],
    genePai1[1] + genePai2[1] + genePai3[0] + genePai4[0] + genePai5[0],
    genePai1[1] + genePai2[1] + genePai3[0] + genePai4[0] + genePai5[1],
    genePai1[1] + genePai2[1] + genePai3[0] + genePai4[1] + genePai5[0],
    genePai1[1] + genePai2[1] + genePai3[0] + genePai4[1] + genePai5[1],
    genePai1[1] + genePai2[1] + genePai3[1] + genePai4[0] + genePai5[0],
    genePai1[1] + genePai2[1] + genePai3[1] + genePai4[0] + genePai5[1],
    genePai1[1] + genePai2[1] + genePai3[1] + genePai4[1] + genePai5[0],
    genePai1[1] + genePai2[1] + genePai3[1] + genePai4[1] + genePai5[1],
  ];
  
  const colunaGene = [
    geneMae1[0] + geneMae2[0] + geneMae3[0] + geneMae4[0] + geneMae5[0],
    geneMae1[0] + geneMae2[0] + geneMae3[0] + geneMae4[0] + geneMae5[1],
    geneMae1[0] + geneMae2[0] + geneMae3[0] + geneMae4[1] + geneMae5[0],
    geneMae1[0] + geneMae2[0] + geneMae3[0] + geneMae4[1] + geneMae5[1],
    geneMae1[0] + geneMae2[0] + geneMae3[1] + geneMae4[0] + geneMae5[0],
    geneMae1[0] + geneMae2[0] + geneMae3[1] + geneMae4[0] + geneMae5[1],
    geneMae1[0] + geneMae2[0] + geneMae3[1] + geneMae4[1] + geneMae5[0],
    geneMae1[0] + geneMae2[0] + geneMae3[1] + geneMae4[1] + geneMae5[1],
    geneMae1[0] + geneMae2[1] + geneMae3[0] + geneMae4[0] + geneMae5[0],
    geneMae1[0] + geneMae2[1] + geneMae3[0] + geneMae4[0] + geneMae5[1],
    geneMae1[0] + geneMae2[1] + geneMae3[0] + geneMae4[1] + geneMae5[0],
    geneMae1[0] + geneMae2[1] + geneMae3[0] + geneMae4[1] + geneMae5[1],
    geneMae1[0] + geneMae2[1] + geneMae3[1] + geneMae4[0] + geneMae5[0],
    geneMae1[0] + geneMae2[1] + geneMae3[1] + geneMae4[0] + geneMae5[1],
    geneMae1[0] + geneMae2[1] + geneMae3[1] + geneMae4[1] + geneMae5[0],
    geneMae1[0] + geneMae2[1] + geneMae3[1] + geneMae4[1] + geneMae5[1],
    geneMae1[1] + geneMae2[0] + geneMae3[0] + geneMae4[0] + geneMae5[0],
    geneMae1[1] + geneMae2[0] + geneMae3[0] + geneMae4[0] + geneMae5[1],
    geneMae1[1] + geneMae2[0] + geneMae3[0] + geneMae4[1] + geneMae5[0],
    geneMae1[1] + geneMae2[0] + geneMae3[0] + geneMae4[1] + geneMae5[1],
    geneMae1[1] + geneMae2[0] + geneMae3[1] + geneMae4[0] + geneMae5[0],
    geneMae1[1] + geneMae2[0] + geneMae3[1] + geneMae4[0] + geneMae5[1],
    geneMae1[1] + geneMae2[0] + geneMae3[1] + geneMae4[1] + geneMae5[0],
    geneMae1[1] + geneMae2[0] + geneMae3[1] + geneMae4[1] + geneMae5[1],
    geneMae1[1] + geneMae2[1] + geneMae3[0] + geneMae4[0] + geneMae5[0],
    geneMae1[1] + geneMae2[1] + geneMae3[0] + geneMae4[0] + geneMae5[1],
    geneMae1[1] + geneMae2[1] + geneMae3[0] + geneMae4[1] + geneMae5[0],
    geneMae1[1] + geneMae2[1] + geneMae3[0] + geneMae4[1] + geneMae5[1],
    geneMae1[1] + geneMae2[1] + geneMae3[1] + geneMae4[0] + geneMae5[0],
    geneMae1[1] + geneMae2[1] + geneMae3[1] + geneMae4[0] + geneMae5[1],
    geneMae1[1] + geneMae2[1] + geneMae3[1] + geneMae4[1] + geneMae5[0],
    geneMae1[1] + geneMae2[1] + geneMae3[1] + geneMae4[1] + geneMae5[1],
  ];
                    
                     
  const colunaGene1 =  [geneMae1[0] + geneMae2[0] + geneMae3[0] + geneMae4[0] + geneMae5[0],] 
  const colunaGene2 =  [geneMae1[0] + geneMae2[0] + geneMae3[0] + geneMae4[0] + geneMae5[1],]
  const colunaGene3 =  [geneMae1[0] + geneMae2[0] + geneMae3[0] + geneMae4[1] + geneMae5[0],] 
  const colunaGene4 =  [geneMae1[0] + geneMae2[0] + geneMae3[0] + geneMae4[1] + geneMae5[1],] 
  const colunaGene5 =  [geneMae1[0] + geneMae2[0] + geneMae3[1] + geneMae4[0] + geneMae5[0],]
  const colunaGene6 =  [geneMae1[0] + geneMae2[0] + geneMae3[1] + geneMae4[0] + geneMae5[1],]
  const colunaGene7 =  [geneMae1[0] + geneMae2[0] + geneMae3[1] + geneMae4[1] + geneMae5[0],]
  const colunaGene8 =  [geneMae1[0] + geneMae2[0] + geneMae3[1] + geneMae4[1] + geneMae5[1],]
  const colunaGene9 =  [geneMae1[0] + geneMae2[1] + geneMae3[0] + geneMae4[0] + geneMae5[0],] 
  const colunaGene10 = [geneMae1[0] + geneMae2[1] + geneMae3[0] + geneMae4[0] + geneMae5[1],]
  const colunaGene11 = [geneMae1[0] + geneMae2[1] + geneMae3[0] + geneMae4[1] + geneMae5[0],] 
  const colunaGene12 = [geneMae1[0] + geneMae2[1] + geneMae3[0] + geneMae4[1] + geneMae5[1],] 
  const colunaGene13 = [geneMae1[0] + geneMae2[1] + geneMae3[1] + geneMae4[0] + geneMae5[0],]
  const colunaGene14 = [geneMae1[0] + geneMae2[1] + geneMae3[1] + geneMae4[0] + geneMae5[1],]
  const colunaGene15 = [geneMae1[0] + geneMae2[1] + geneMae3[1] + geneMae4[1] + geneMae5[0],]
  const colunaGene16 = [geneMae1[0] + geneMae2[1] + geneMae3[1] + geneMae4[1] + geneMae5[1],]
  const colunaGene17 = [geneMae1[1] + geneMae2[0] + geneMae3[0] + geneMae4[0] + geneMae5[0],]
  const colunaGene18 = [geneMae1[1] + geneMae2[0] + geneMae3[0] + geneMae4[0] + geneMae5[1],]
  const colunaGene19 = [geneMae1[1] + geneMae2[0] + geneMae3[0] + geneMae4[1] + geneMae5[0],]
  const colunaGene20 = [geneMae1[1] + geneMae2[0] + geneMae3[0] + geneMae4[1] + geneMae5[1],]
  const colunaGene21 = [geneMae1[1] + geneMae2[0] + geneMae3[1] + geneMae4[0] + geneMae5[0],]
  const colunaGene22 = [geneMae1[1] + geneMae2[0] + geneMae3[1] + geneMae4[0] + geneMae5[1],]
  const colunaGene23 = [geneMae1[1] + geneMae2[0] + geneMae3[1] + geneMae4[1] + geneMae5[0],]
  const colunaGene24 = [geneMae1[1] + geneMae2[0] + geneMae3[1] + geneMae4[1] + geneMae5[1],]
  const colunaGene25 = [geneMae1[1] + geneMae2[1] + geneMae3[0] + geneMae4[0] + geneMae5[0],]
  const colunaGene26 = [geneMae1[1] + geneMae2[1] + geneMae3[0] + geneMae4[0] + geneMae5[1],]
  const colunaGene27 = [geneMae1[1] + geneMae2[1] + geneMae3[0] + geneMae4[1] + geneMae5[0],]
  const colunaGene28 = [geneMae1[1] + geneMae2[1] + geneMae3[0] + geneMae4[1] + geneMae5[1],]
  const colunaGene29 = [geneMae1[1] + geneMae2[1] + geneMae3[1] + geneMae4[0] + geneMae5[0],]
  const colunaGene30 = [geneMae1[1] + geneMae2[1] + geneMae3[1] + geneMae4[0] + geneMae5[1],]
  const colunaGene31 = [geneMae1[1] + geneMae2[1] + geneMae3[1] + geneMae4[1] + geneMae5[0],]
  const colunaGene32 = [geneMae1[1] + geneMae2[1] + geneMae3[1] + geneMae4[1] + geneMae5[1],]
  
  const linha1  =[geneMae1[0] + geneMae2[0] + geneMae3[0] + geneMae4[0] + geneMae5[0],]
  const linha2  =[geneMae1[0] + geneMae2[0] + geneMae3[0] + geneMae4[0] + geneMae5[1],]
  const linha3  =[geneMae1[0] + geneMae2[0] + geneMae3[0] + geneMae4[1] + geneMae5[0],]
  const linha4  =[geneMae1[0] + geneMae2[0] + geneMae3[0] + geneMae4[1] + geneMae5[1],]
  const linha5  =[geneMae1[0] + geneMae2[0] + geneMae3[1] + geneMae4[0] + geneMae5[0],]
  const linha6  =[geneMae1[0] + geneMae2[0] + geneMae3[1] + geneMae4[0] + geneMae5[1],]
  const linha7  =[geneMae1[0] + geneMae2[0] + geneMae3[1] + geneMae4[1] + geneMae5[0],]
  const linha8  =[geneMae1[0] + geneMae2[0] + geneMae3[1] + geneMae4[1] + geneMae5[1],]
  const linha9  =[geneMae1[0] + geneMae2[1] + geneMae3[0] + geneMae4[0] + geneMae5[0],]
  const linha10 =[geneMae1[0] + geneMae2[1] + geneMae3[0] + geneMae4[0] + geneMae5[1],]
  const linha11 =[geneMae1[0] + geneMae2[1] + geneMae3[0] + geneMae4[1] + geneMae5[0],]
  const linha12 =[geneMae1[0] + geneMae2[1] + geneMae3[0] + geneMae4[1] + geneMae5[1],]
  const linha13 =[geneMae1[0] + geneMae2[1] + geneMae3[1] + geneMae4[0] + geneMae5[0],]
  const linha14 =[geneMae1[0] + geneMae2[1] + geneMae3[1] + geneMae4[0] + geneMae5[1],]
  const linha15 =[geneMae1[0] + geneMae2[1] + geneMae3[1] + geneMae4[1] + geneMae5[0],]
  const linha16 =[geneMae1[0] + geneMae2[1] + geneMae3[1] + geneMae4[1] + geneMae5[1],]
  const linha17 =[geneMae1[1] + geneMae2[0] + geneMae3[0] + geneMae4[0] + geneMae5[0],]
  const linha18 =[geneMae1[1] + geneMae2[0] + geneMae3[0] + geneMae4[0] + geneMae5[1],]
  const linha19 =[geneMae1[1] + geneMae2[0] + geneMae3[0] + geneMae4[1] + geneMae5[0],]
  const linha20 =[geneMae1[1] + geneMae2[0] + geneMae3[0] + geneMae4[1] + geneMae5[1],]
  const linha21 =[geneMae1[1] + geneMae2[0] + geneMae3[1] + geneMae4[0] + geneMae5[0],]
  const linha22 =[geneMae1[1] + geneMae2[0] + geneMae3[1] + geneMae4[0] + geneMae5[1],]
  const linha23 =[geneMae1[1] + geneMae2[0] + geneMae3[1] + geneMae4[1] + geneMae5[0],]
  const linha24 =[geneMae1[1] + geneMae2[0] + geneMae3[1] + geneMae4[1] + geneMae5[1],]
  const linha25 =[geneMae1[1] + geneMae2[1] + geneMae3[0] + geneMae4[0] + geneMae5[0],]
  const linha26 =[geneMae1[1] + geneMae2[1] + geneMae3[0] + geneMae4[0] + geneMae5[1],]
  const linha27 =[geneMae1[1] + geneMae2[1] + geneMae3[0] + geneMae4[1] + geneMae5[0],]
  const linha28 =[geneMae1[1] + geneMae2[1] + geneMae3[0] + geneMae4[1] + geneMae5[1],]
  const linha29 =[geneMae1[1] + geneMae2[1] + geneMae3[1] + geneMae4[0] + geneMae5[0],]
  const linha30 =[geneMae1[1] + geneMae2[1] + geneMae3[1] + geneMae4[0] + geneMae5[1],]
  const linha31 =[geneMae1[1] + geneMae2[1] + geneMae3[1] + geneMae4[1] + geneMae5[0],]
  const linha32 =[geneMae1[1] + geneMae2[1] + geneMae3[1] + geneMae4[1] + geneMae5[1],]
  



  const test1 =[]
  for( let b=0;b<colunaGene.length;b++){
    for(let t=0; t<linhaGene1.length;t++){
      const te1 = linhaGene1[t].substring(0,1) + colunaGene[b].substring(0,1)
      const te2 = linhaGene1[t].substring(1,2) + colunaGene[b].substring(1,2)
      const te3 = linhaGene1[t].substring(2,3) + colunaGene[b].substring(2,3)
      const te4 = linhaGene1[t].substring(3,4) + colunaGene[b].substring(3,4)
      const te5 = linhaGene1[t].substring(4,5) + colunaGene[b].substring(4,5)
      
      const te6 = te1+te2+te3+te4+te5
      
      test1.push(te6)
  
    }
  }
  
  
const [ar1,ar2,ar3,ar4,ar5,ar6,ar7,ar8,ar9,ar10,ar11,ar12,ar13,ar14,ar15,ar16,ar17,ar18,ar19,ar20,ar21,ar22,ar23,ar24,ar25,ar26,ar27,ar28,ar29,ar30,ar31,ar32,ar33,ar34,ar35,ar36,ar37,ar38,ar39,ar40,ar41,ar42,ar43,ar44,ar45,ar46,ar47,ar48,ar49,ar50,ar51,ar52,ar53,ar54,ar55,ar56,ar57,ar58,ar59,ar60,ar61,ar62,ar63,ar64,ar65,ar66,ar67,ar68,ar69,ar70,ar71,ar72,ar73,ar74,ar75,ar76,ar77,ar78,ar79,ar80,ar81,ar82,ar83,ar84,ar85,ar86,ar87,ar88,ar89,ar90,ar91,ar92,ar93,ar94,ar95,ar96,ar97,ar98,ar99,ar100,ar101,ar102,ar103,ar104,ar105,ar106,ar107,ar108,ar109,ar110,ar111,ar112,ar113,ar114,ar115,ar116,ar117,ar118,ar119,ar120,ar121,ar122,ar123,ar124,ar125,ar126,ar127,ar128,ar129,ar130,ar131,ar132,ar133,ar134,ar135,ar136,ar137,ar138,ar139,ar140,ar141,ar142,ar143,ar144,ar145,ar146,ar147,ar148,ar149,ar150,ar151,ar152,ar153,ar154,ar155,ar156,ar157,ar158,ar159,ar160,ar161,ar162,ar163,ar164,ar165,ar166,ar167,ar168,ar169,ar170,ar171,ar172,ar173,ar174,ar175,ar176,ar177,ar178,ar179,ar180,ar181,ar182,ar183,ar184,ar185,ar186,ar187,ar188,ar189,ar190,ar191,ar192,ar193,ar194,ar195,ar196,ar197,ar198,ar199,ar200,ar201,ar202,ar203,ar204,ar205,ar206,ar207,ar208,ar209,ar210,ar211,ar212,ar213,ar214,ar215,ar216,ar217,ar218,ar219,ar220,ar221,ar222,ar223,ar224,ar225,ar226,ar227,ar228,ar229,ar230,ar231,ar232,ar233,ar234,ar235,ar236,ar237,ar238,ar239,ar240,ar241,ar242,ar243,ar244,ar245,ar246,ar247,ar248,ar249,ar250,ar251,ar252,ar253,ar254,ar255,ar256,ar257,ar258,ar259,ar260,ar261,ar262,ar263,ar264,ar265,ar266,ar267,ar268,ar269,ar270,ar271,ar272,ar273,ar274,ar275,ar276,ar277,ar278,ar279,ar280,ar281,ar282,ar283,ar284,ar285,ar286,ar287,ar288,ar289,ar290,ar291,ar292,ar293,ar294,ar295,ar296,ar297,ar298,ar299,ar300,ar301,ar302,ar303,ar304,ar305,ar306,ar307,ar308,ar309,ar310,ar311,ar312,ar313,ar314,ar315,ar316,ar317,ar318,ar319,ar320,ar321,ar322,ar323,ar324,ar325,ar326,ar327,ar328,ar329,ar330,ar331,ar332,ar333,ar334,ar335,ar336,ar337,ar338,ar339,ar340,ar341,ar342,ar343,ar344,ar345,ar346,ar347,ar348,ar349,ar350,ar351,ar352,ar353,ar354,ar355,ar356,ar357,ar358,ar359,ar360,ar361,ar362,ar363,ar364,ar365,ar366,ar367,ar368,ar369,ar370,ar371,ar372,ar373,ar374,ar375,ar376,ar377,ar378,ar379,ar380,ar381,ar382,ar383,ar384,ar385,ar386,ar387,ar388,ar389,ar390,ar391,ar392,ar393,ar394,ar395,ar396,ar397,ar398,ar399,ar400,ar401,ar402,ar403,ar404,ar405,ar406,ar407,ar408,ar409,ar410,ar411,ar412,ar413,ar414,ar415,ar416,ar417,ar418,ar419,ar420,ar421,ar422,ar423,ar424,ar425,ar426,ar427,ar428,ar429,ar430,ar431,ar432,ar433,ar434,ar435,ar436,ar437,ar438,ar439,ar440,ar441,ar442,ar443,ar444,ar445,ar446,ar447,ar448,ar449,ar450,ar451,ar452,ar453,ar454,ar455,ar456,ar457,ar458,ar459,ar460,ar461,ar462,ar463,ar464,ar465,ar466,ar467,ar468,ar469,ar470,ar471,ar472,ar473,ar474,ar475,ar476,ar477,ar478,ar479,ar480,ar481,ar482,ar483,ar484,ar485,ar486,ar487,ar488,ar489,ar490,ar491,ar492,ar493,ar494,ar495,ar496,ar497,ar498,ar499,ar500,ar501,ar502,ar503,ar504,ar505,ar506,ar507,ar508,ar509,ar510,ar511,ar512,ar513,ar514,ar515,ar516,ar517,ar518,ar519,ar520,ar521,ar522,ar523,ar524,ar525,ar526,ar527,ar528,ar529,ar530,ar531,ar532,ar533,ar534,ar535,ar536,ar537,ar538,ar539,ar540,ar541,ar542,ar543,ar544,ar545,ar546,ar547,ar548,ar549,ar550,ar551,ar552,ar553,ar554,ar555,ar556,ar557,ar558,ar559,ar560,ar561,ar562,ar563,ar564,ar565,ar566,ar567,ar568,ar569,ar570,ar571,ar572,ar573,ar574,ar575,ar576,ar577,ar578,ar579,ar580,ar581,ar582,ar583,ar584,ar585,ar586,ar587,ar588,ar589,ar590,ar591,ar592,ar593,ar594,ar595,ar596,ar597,ar598,ar599,ar600,ar601,ar602,ar603,ar604,ar605,ar606,ar607,ar608,ar609,ar610,ar611,ar612,ar613,ar614,ar615,ar616,ar617,ar618,ar619,ar620,ar621,ar622,ar623,ar624,ar625,ar626,ar627,ar628,ar629,ar630,ar631,ar632,ar633,ar634,ar635,ar636,ar637,ar638,ar639,ar640,ar641,ar642,ar643,ar644,ar645,ar646,ar647,ar648,ar649,ar650,ar651,ar652,ar653,ar654,ar655,ar656,ar657,ar658,ar659,ar660,ar661,ar662,ar663,ar664,ar665,ar666,ar667,ar668,ar669,ar670,ar671,ar672,ar673,ar674,ar675,ar676,ar677,ar678,ar679,ar680,ar681,ar682,ar683,ar684,ar685,ar686,ar687,ar688,ar689,ar690,ar691,ar692,ar693,ar694,ar695,ar696,ar697,ar698,ar699,ar700,ar701,ar702,ar703,ar704,ar705,ar706,ar707,ar708,ar709,ar710,ar711,ar712,ar713,ar714,ar715,ar716,ar717,ar718,ar719,ar720,ar721,ar722,ar723,ar724,ar725,ar726,ar727,ar728,ar729,ar730,ar731,ar732,ar733,ar734,ar735,ar736,ar737,ar738,ar739,ar740,ar741,ar742,ar743,ar744,ar745,ar746,ar747,ar748,ar749,ar750,ar751,ar752,ar753,ar754,ar755,ar756,ar757,ar758,ar759,ar760,ar761,ar762,ar763,ar764,ar765,ar766,ar767,ar768,ar769,ar770,ar771,ar772,ar773,ar774,ar775,ar776,ar777,ar778,ar779,ar780,ar781,ar782,ar783,ar784,ar785,ar786,ar787,ar788,ar789,ar790,ar791,ar792,ar793,ar794,ar795,ar796,ar797,ar798,ar799,ar800,ar801,ar802,ar803,ar804,ar805,ar806,ar807,ar808,ar809,ar810,ar811,ar812,ar813,ar814,ar815,ar816,ar817,ar818,ar819,ar820,ar821,ar822,ar823,ar824,ar825,ar826,ar827,ar828,ar829,ar830,ar831,ar832,ar833,ar834,ar835,ar836,ar837,ar838,ar839,ar840,ar841,ar842,ar843,ar844,ar845,ar846,ar847,ar848,ar849,ar850,ar851,ar852,ar853,ar854,ar855,ar856,ar857,ar858,ar859,ar860,ar861,ar862,ar863,ar864,ar865,ar866,ar867,ar868,ar869,ar870,ar871,ar872,ar873,ar874,ar875,ar876,ar877,ar878,ar879,ar880,ar881,ar882,ar883,ar884,ar885,ar886,ar887,ar888,ar889,ar890,ar891,ar892,ar893,ar894,ar895,ar896,ar897,ar898,ar899,ar900,ar901,ar902,ar903,ar904,ar905,ar906,ar907,ar908,ar909,ar910,ar911,ar912,ar913,ar914,ar915,ar916,ar917,ar918,ar919,ar920,ar921,ar922,ar923,ar924,ar925,ar926,ar927,ar928,ar929,ar930,ar931,ar932,ar933,ar934,ar935,ar936,ar937,ar938,ar939,ar940,ar941,ar942,ar943,ar944,ar945,ar946,ar947,ar948,ar949,ar950,ar951,ar952,ar953,ar954,ar955,ar956,ar957,ar958,ar959,ar960,ar961,ar962,ar963,ar964,ar965,ar966,ar967,ar968,ar969,ar970,ar971,ar972,ar973,ar974,ar975,ar976,ar977,ar978,ar979,ar980,ar981,ar982,ar983,ar984,ar985,ar986,ar987,ar988,ar989,ar990,ar991,ar992,ar993,ar994,ar995,ar996,ar997,ar998,ar999,ar1000,ar1001,ar1002,ar1003,ar1004,ar1005,ar1006,ar1007,ar1008,ar1009,ar1010,ar1011,ar1012,ar1013,ar1014,ar1015,ar1016,ar1017,ar1018,ar1019,ar1020,ar1021,ar1022,ar1023,ar1024,] = test1
  
  
  linha1.push(colunaGene1,ar1,ar2,ar3,ar4,ar5,ar6,ar7,ar8,ar9,ar10,ar11,ar12,ar13,ar14,ar15,ar16,ar17,ar18,ar19,ar20,ar21,ar22,ar23,ar24,ar25,ar26,ar27,ar28,ar29,ar30,ar31,ar32,)
  linha2.push(colunaGene2,ar33,ar34,ar35,ar36,ar37,ar38,ar39,ar40,ar41,ar42,ar43,ar44,ar45,ar46,ar47,ar48,ar49,ar50,ar51,ar52,ar53,ar54,ar55,ar56,ar57,ar58,ar59,ar60,ar61,ar62,ar63,ar64,)
  linha3.push(colunaGene3,ar65,ar66,ar67,ar68,ar69,ar70,ar71,ar72,ar73,ar74,ar75,ar76,ar77,ar78,ar79,ar80,ar81,ar82,ar83,ar84,ar85,ar86,ar87,ar88,ar89,ar90,ar91,ar92,ar93,ar94,ar95,ar96,)
  linha4.push(colunaGene4,ar97,ar98,ar99,ar100,ar101,ar102,ar103,ar104,ar105,ar106,ar107,ar108,ar109,ar110,ar111,ar112,ar113,ar114,ar115,ar116,ar117,ar118,ar119,ar120,ar121,ar122,ar123,ar124,ar125,ar126,ar127,ar128,)
  linha5.push(colunaGene5,ar129,ar130,ar131,ar132,ar133,ar134,ar135,ar136,ar137,ar138,ar139,ar140,ar141,ar142,ar143,ar144,ar145,ar146,ar147,ar148,ar149,ar150,ar151,ar152,ar153,ar154,ar155,ar156,ar157,ar158,ar159,ar160,)
  linha6.push(colunaGene6,ar161,ar162,ar163,ar164,ar165,ar166,ar167,ar168,ar169,ar170,ar171,ar172,ar173,ar174,ar175,ar176,ar177,ar178,ar179,ar180,ar181,ar182,ar183,ar184,ar185,ar186,ar187,ar188,ar189,ar190,ar191,ar192,)
  linha7.push(colunaGene7,ar193,ar194,ar195,ar196,ar197,ar198,ar199,ar200,ar201,ar202,ar203,ar204,ar205,ar206,ar207,ar208,ar209,ar210,ar211,ar212,ar213,ar214,ar215,ar216,ar217,ar218,ar219,ar220,ar221,ar222,ar223,ar224,)
  linha8.push(colunaGene8,ar225,ar226,ar227,ar228,ar229,ar230,ar231,ar232,ar233,ar234,ar235,ar236,ar237,ar238,ar239,ar240,ar241,ar242,ar243,ar244,ar245,ar246,ar247,ar248,ar249,ar250,ar251,ar252,ar253,ar254,ar255,ar256,)
  linha9.push(colunaGene9,ar257,ar258,ar259,ar260,ar261,ar262,ar263,ar264,ar265,ar266,ar267,ar268,ar269,ar270,ar271,ar272,ar273,ar274,ar275,ar276,ar277,ar278,ar279,ar280,ar281,ar282,ar283,ar284,ar285,ar286,ar287,ar288,)
  linha10.push(colunaGene10,ar289,ar290,ar291,ar292,ar293,ar294,ar295,ar296,ar297,ar298,ar299,ar300,ar301,ar302,ar303,ar304,ar305,ar306,ar307,ar308,ar309,ar310,ar311,ar312,ar313,ar314,ar315,ar316,ar317,ar318,ar319,ar320,)
  linha11.push(colunaGene11,ar321,ar322,ar323,ar324,ar325,ar326,ar327,ar328,ar329,ar330,ar331,ar332,ar333,ar334,ar335,ar336,ar337,ar338,ar339,ar340,ar341,ar342,ar343,ar344,ar345,ar346,ar347,ar348,ar349,ar350,ar351,ar352,)
  linha12.push(colunaGene12,ar353,ar354,ar355,ar356,ar357,ar358,ar359,ar360,ar361,ar362,ar363,ar364,ar365,ar366,ar367,ar368,ar369,ar370,ar371,ar372,ar373,ar374,ar375,ar376,ar377,ar378,ar379,ar380,ar381,ar382,ar383,ar384,)
  linha13.push(colunaGene13,ar385,ar386,ar387,ar388,ar389,ar390,ar391,ar392,ar393,ar394,ar395,ar396,ar397,ar398,ar399,ar400,ar401,ar402,ar403,ar404,ar405,ar406,ar407,ar408,ar409,ar410,ar411,ar412,ar413,ar414,ar415,ar416,)
  linha14.push(colunaGene14,ar417,ar418,ar419,ar420,ar421,ar422,ar423,ar424,ar425,ar426,ar427,ar428,ar429,ar430,ar431,ar432,ar433,ar434,ar435,ar436,ar437,ar438,ar439,ar440,ar441,ar442,ar443,ar444,ar445,ar446,ar447,ar448,)
  linha15.push(colunaGene15,ar449,ar450,ar451,ar452,ar453,ar454,ar455,ar456,ar457,ar458,ar459,ar460,ar461,ar462,ar463,ar464,ar465,ar466,ar467,ar468,ar469,ar470,ar471,ar472,ar473,ar474,ar475,ar476,ar477,ar478,ar479,ar480,)
  linha16.push(colunaGene16,ar481,ar482,ar483,ar484,ar485,ar486,ar487,ar488,ar489,ar490,ar491,ar492,ar493,ar494,ar495,ar496,ar497,ar498,ar499,ar500,ar501,ar502,ar503,ar504,ar505,ar506,ar507,ar508,ar509,ar510,ar511,ar512,)
  linha17.push(colunaGene17,ar513,ar514,ar515,ar516,ar517,ar518,ar519,ar520,ar521,ar522,ar523,ar524,ar525,ar526,ar527,ar528,ar529,ar530,ar531,ar532,ar533,ar534,ar535,ar536,ar537,ar538,ar539,ar540,ar541,ar542,ar543,ar544,)
  linha18.push(colunaGene18,ar545,ar546,ar547,ar548,ar549,ar550,ar551,ar552,ar553,ar554,ar555,ar556,ar557,ar558,ar559,ar560,ar561,ar562,ar563,ar564,ar565,ar566,ar567,ar568,ar569,ar570,ar571,ar572,ar573,ar574,ar575,ar576,)
  linha19.push(colunaGene19,ar577,ar578,ar579,ar580,ar581,ar582,ar583,ar584,ar585,ar586,ar587,ar588,ar589,ar590,ar591,ar592,ar593,ar594,ar595,ar596,ar597,ar598,ar599,ar600,ar601,ar602,ar603,ar604,ar605,ar606,ar607,ar608,)
  linha20.push(colunaGene20,ar609,ar610,ar611,ar612,ar613,ar614,ar615,ar616,ar617,ar618,ar619,ar620,ar621,ar622,ar623,ar624,ar625,ar626,ar627,ar628,ar629,ar630,ar631,ar632,ar633,ar634,ar635,ar636,ar637,ar638,ar639,ar640,)
  linha21.push(colunaGene21,ar641,ar642,ar643,ar644,ar645,ar646,ar647,ar648,ar649,ar650,ar651,ar652,ar653,ar654,ar655,ar656,ar657,ar658,ar659,ar660,ar661,ar662,ar663,ar664,ar665,ar666,ar667,ar668,ar669,ar670,ar671,ar672,)
  linha22.push(colunaGene22,ar673,ar674,ar675,ar676,ar677,ar678,ar679,ar680,ar681,ar682,ar683,ar684,ar685,ar686,ar687,ar688,ar689,ar690,ar691,ar692,ar693,ar694,ar695,ar696,ar697,ar698,ar699,ar700,ar701,ar702,ar703,ar704,)
  linha23.push(colunaGene23,ar705,ar706,ar707,ar708,ar709,ar710,ar711,ar712,ar713,ar714,ar715,ar716,ar717,ar718,ar719,ar720,ar721,ar722,ar723,ar724,ar725,ar726,ar727,ar728,ar729,ar730,ar731,ar732,ar733,ar734,ar735,ar736,)
  linha24.push(colunaGene24,ar737,ar738,ar739,ar740,ar741,ar742,ar743,ar744,ar745,ar746,ar747,ar748,ar749,ar750,ar751,ar752,ar753,ar754,ar755,ar756,ar757,ar758,ar759,ar760,ar761,ar762,ar763,ar764,ar765,ar766,ar767,ar768,)
  linha25.push(colunaGene25,ar769,ar770,ar771,ar772,ar773,ar774,ar775,ar776,ar777,ar778,ar779,ar780,ar781,ar782,ar783,ar784,ar785,ar786,ar787,ar788,ar789,ar790,ar791,ar792,ar793,ar794,ar795,ar796,ar797,ar798,ar799,ar800,)
  linha26.push(colunaGene26,ar801,ar802,ar803,ar804,ar805,ar806,ar807,ar808,ar809,ar810,ar811,ar812,ar813,ar814,ar815,ar816,ar817,ar818,ar819,ar820,ar821,ar822,ar823,ar824,ar825,ar826,ar827,ar828,ar829,ar830,ar831,ar832,)
  linha27.push(colunaGene27,ar833,ar834,ar835,ar836,ar837,ar838,ar839,ar840,ar841,ar842,ar843,ar844,ar845,ar846,ar847,ar848,ar849,ar850,ar851,ar852,ar853,ar854,ar855,ar856,ar857,ar858,ar859,ar860,ar861,ar862,ar863,ar864,)
  linha28.push(colunaGene28,ar865,ar866,ar867,ar868,ar869,ar870,ar871,ar872,ar873,ar874,ar875,ar876,ar877,ar878,ar879,ar880,ar881,ar882,ar883,ar884,ar885,ar886,ar887,ar888,ar889,ar890,ar891,ar892,ar893,ar894,ar895,ar896,)
  linha29.push(colunaGene29,ar897,ar898,ar899,ar900,ar901,ar902,ar903,ar904,ar905,ar906,ar907,ar908,ar909,ar910,ar911,ar912,ar913,ar914,ar915,ar916,ar917,ar918,ar919,ar920,ar921,ar922,ar923,ar924,ar925,ar926,ar927,ar928,)
  linha30.push(colunaGene30,ar929,ar930,ar931,ar932,ar933,ar934,ar935,ar936,ar937,ar938,ar939,ar940,ar941,ar942,ar943,ar944,ar945,ar946,ar947,ar948,ar949,ar950,ar951,ar952,ar953,ar954,ar955,ar956,ar957,ar958,ar959,ar960,)
  linha31.push(colunaGene31,ar961,ar962,ar963,ar964,ar965,ar966,ar967,ar968,ar969,ar970,ar971,ar972,ar973,ar974,ar975,ar976,ar977,ar978,ar979,ar980,ar981,ar982,ar983,ar984,ar985,ar986,ar987,ar988,ar989,ar990,ar991,ar992,)
  linha32.push(colunaGene32,ar993,ar994,ar995,ar996,ar997,ar998,ar999,ar1000,ar1001,ar1002,ar1003,ar1004,ar1005,ar1006,ar1007,ar1008,ar1009,ar1010,ar1011,ar1012,ar1013,ar1014,ar1015,ar1016,ar1017,ar1018,ar1019,ar1020,ar1021,ar1022,ar1023,ar1024,)


  
  console.log(ar1)
  tabela.push(linhaGene2 ,linha1,linha2,linha3,linha4,linha5,linha6,linha7,linha8,linha9,linha10,linha11,linha12,linha13,linha14,linha15,linha16,linha17,linha18,linha19,linha20,linha21,linha22,linha23,linha24,linha25,linha26,linha27,linha28,linha29,linha30,linha31,linha32,)
  
  for (let m = 0; m < tabela.length; m++) {
    const linha = input.insertRow();
    for (let z = 0; z < tabela[m].length; z++) {
      const celula = linha.insertCell();
      celula.textContent = tabela[m][z];
    }
  }
  
  

  } 
  else{
    alert("digite os genes corretamente")
  }
} 
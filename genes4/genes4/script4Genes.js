function enviar(){
  const idPai = document.querySelector('.idPai').value;
  const idMae = document.querySelector('.idMae').value;
  if(idPai.length == 8 && idMae.length==8){
    const input = document.getElementById('table');

    const genePai1 = [idPai.substring(0,1), idPai.substring(1,2)]
    const genePai2 = [idPai.substring(2,3), idPai.substring(3,4)]
    const genePai3 = [idPai.substring(4,5), idPai.substring(5,6)]
    const genePai4 = [idPai.substring(6,7), idPai.substring(7,8)]
    
    const geneMae1 = [idMae.substring(0,1), idMae.substring(1,2)]
    const geneMae2 = [idMae.substring(2,3), idMae.substring(3,4)]
    const geneMae3 = [idMae.substring(4,5), idMae.substring(5,6)]
    const geneMae4 = [idMae.substring(6,7), idMae.substring(7,8)]
    
    const tabela=[]
    
    
    
    const linhaGene1 = [
     
      genePai1[0] + genePai2[0] + genePai3[0] + genePai4[0],
      genePai1[0] + genePai2[0] + genePai3[0] + genePai4[1],
      genePai1[0] + genePai2[0] + genePai3[1] + genePai4[0],
      genePai1[0] + genePai2[0] + genePai3[1] + genePai4[1],
      genePai1[0] + genePai2[1] + genePai3[0] + genePai4[0],
      genePai1[0] + genePai2[1] + genePai3[0] + genePai4[1],
      genePai1[0] + genePai2[1] + genePai3[1] + genePai4[0],
      genePai1[0] + genePai2[1] + genePai3[1] + genePai4[1],
      genePai1[1] + genePai2[0] + genePai3[0] + genePai4[0],
      genePai1[1] + genePai2[0] + genePai3[0] + genePai4[1],
      genePai1[1] + genePai2[0] + genePai3[1] + genePai4[0],
      genePai1[1] + genePai2[0] + genePai3[1] + genePai4[1],
      genePai1[1] + genePai2[1] + genePai3[0] + genePai4[0],
      genePai1[1] + genePai2[1] + genePai3[0] + genePai4[1],
      genePai1[1] + genePai2[1] + genePai3[1] + genePai4[0],
      genePai1[1] + genePai2[1] + genePai3[1] + genePai4[1],
    ];
    const linhaGene2 = [
      "⠀⠀",
      genePai1[0] + genePai2[0] + genePai3[0] + genePai4[0],
      genePai1[0] + genePai2[0] + genePai3[0] + genePai4[1],
      genePai1[0] + genePai2[0] + genePai3[1] + genePai4[0],
      genePai1[0] + genePai2[0] + genePai3[1] + genePai4[1],
      genePai1[0] + genePai2[1] + genePai3[0] + genePai4[0],
      genePai1[0] + genePai2[1] + genePai3[0] + genePai4[1],
      genePai1[0] + genePai2[1] + genePai3[1] + genePai4[0],
      genePai1[0] + genePai2[1] + genePai3[1] + genePai4[1],
      genePai1[1] + genePai2[0] + genePai3[0] + genePai4[0],
      genePai1[1] + genePai2[0] + genePai3[0] + genePai4[1],
      genePai1[1] + genePai2[0] + genePai3[1] + genePai4[0],
      genePai1[1] + genePai2[0] + genePai3[1] + genePai4[1],
      genePai1[1] + genePai2[1] + genePai3[0] + genePai4[0],
      genePai1[1] + genePai2[1] + genePai3[0] + genePai4[1],
      genePai1[1] + genePai2[1] + genePai3[1] + genePai4[0],
      genePai1[1] + genePai2[1] + genePai3[1] + genePai4[1],
    ];
    
    const colunaGene = [
      geneMae1[0] + geneMae2[0] + geneMae3[0] + geneMae4[0],
      geneMae1[0] + geneMae2[0] + geneMae3[0] + geneMae4[1],
      geneMae1[0] + geneMae2[0] + geneMae3[1] + geneMae4[0],
      geneMae1[0] + geneMae2[0] + geneMae3[1] + geneMae4[1],
      geneMae1[0] + geneMae2[1] + geneMae3[0] + geneMae4[0],
      geneMae1[0] + geneMae2[1] + geneMae3[0] + geneMae4[1],
      geneMae1[0] + geneMae2[1] + geneMae3[1] + geneMae4[0],
      geneMae1[0] + geneMae2[1] + geneMae3[1] + geneMae4[1],
      geneMae1[1] + geneMae2[0] + geneMae3[0] + geneMae4[0],
      geneMae1[1] + geneMae2[0] + geneMae3[0] + geneMae4[1],
      geneMae1[1] + geneMae2[0] + geneMae3[1] + geneMae4[0],
      geneMae1[1] + geneMae2[0] + geneMae3[1] + geneMae4[1],
      geneMae1[1] + geneMae2[1] + geneMae3[0] + geneMae4[0],
      geneMae1[1] + geneMae2[1] + geneMae3[0] + geneMae4[1],
      geneMae1[1] + geneMae2[1] + geneMae3[1] + geneMae4[0],
      geneMae1[1] + geneMae2[1] + geneMae3[1] + geneMae4[1],
    ];
                      
                       
    const colunaGene1 =  [geneMae1[0] + geneMae2[0] + geneMae3[0] + geneMae4[0],] 
    const colunaGene2 =  [geneMae1[0] + geneMae2[0] + geneMae3[0] + geneMae4[1],]
    const colunaGene3 =  [geneMae1[0] + geneMae2[0] + geneMae3[1] + geneMae4[0],] 
    const colunaGene4 =  [geneMae1[0] + geneMae2[0] + geneMae3[1] + geneMae4[1],] 
    const colunaGene5 =  [geneMae1[0] + geneMae2[1] + geneMae3[0] + geneMae4[0],]
    const colunaGene6 =  [geneMae1[0] + geneMae2[1] + geneMae3[0] + geneMae4[1],]
    const colunaGene7 =  [geneMae1[0] + geneMae2[1] + geneMae3[1] + geneMae4[0],]
    const colunaGene8 =  [geneMae1[0] + geneMae2[1] + geneMae3[1] + geneMae4[1],]
    const colunaGene9 =  [geneMae1[1] + geneMae2[0] + geneMae3[0] + geneMae4[0],] 
    const colunaGene10 = [geneMae1[1] + geneMae2[0] + geneMae3[0] + geneMae4[1],]
    const colunaGene11 = [geneMae1[1] + geneMae2[0] + geneMae3[1] + geneMae4[0],] 
    const colunaGene12 = [geneMae1[1] + geneMae2[0] + geneMae3[1] + geneMae4[1],] 
    const colunaGene13 = [geneMae1[1] + geneMae2[1] + geneMae3[0] + geneMae4[0],]
    const colunaGene14 = [geneMae1[1] + geneMae2[1] + geneMae3[0] + geneMae4[1],]
    const colunaGene15 = [geneMae1[1] + geneMae2[1] + geneMae3[1] + geneMae4[0],]
    const colunaGene16 = [geneMae1[1] + geneMae2[1] + geneMae3[1] + geneMae4[1],]
    
    const linha1 =[]
    const linha2 =[]
    const linha3 =[]
    const linha4 =[]
    const linha5 =[]
    const linha6 =[]
    const linha7 =[]
    const linha8 =[]
    const linha9 =[]
    const linha10 =[]
    const linha11 =[]
    const linha12 =[]
    const linha13 =[]
    const linha14 =[]
    const linha15 =[]
    const linha16 =[]
    const opa = document.querySelector('tr');
    const test1 =[]
    for( let b=0;b<colunaGene.length;b++){
      for(let t=0; t<linhaGene1.length;t++){
        const te1 = linhaGene1[t].substring(0,1) + colunaGene[b].substring(0,1)
        const te2 = linhaGene1[t].substring(1,2) + colunaGene[b].substring(1,2)
        const te3 = linhaGene1[t].substring(2,3) + colunaGene[b].substring(2,3)
        const te4 = linhaGene1[t].substring(3,4) + colunaGene[b].substring(3,4)
        
        const te5 = te1+te2+te3+te4
        
        test1.push(te5)
    
      }
    }
    
    
  const [ar1,ar2,ar3,ar4,ar5,ar6,ar7,ar8,ar9,ar10,ar11,ar12,ar13,ar14,ar15,ar16,ar17,ar18,ar19,ar20,ar21,ar22,ar23,ar24,ar25,ar26,ar27,ar28,ar29,ar30,ar31,ar32,ar33,ar34,ar35,ar36,ar37,ar38,ar39,ar40,ar41,ar42,ar43,ar44,ar45,ar46,ar47,ar48,ar49,ar50,ar51,ar52,ar53,ar54,ar55,ar56,ar57,ar58,ar59,ar60,ar61,ar62,ar63,ar64,ar65,ar66,ar67,ar68,ar69,ar70,ar71,ar72,ar73,ar74,ar75,ar76,ar77,ar78,ar79,ar80,ar81,ar82,ar83,ar84,ar85,ar86,ar87,ar88,ar89,ar90,ar91,ar92,ar93,ar94,ar95,ar96,ar97,ar98,ar99,ar100,ar101,ar102,ar103,ar104,ar105,ar106,ar107,ar108,ar109,ar110,ar111,ar112,ar113,ar114,ar115,ar116,ar117,ar118,ar119,ar120,ar121,ar122,ar123,ar124,ar125,ar126,ar127,ar128,ar129,ar130,ar131,ar132,ar133,ar134,ar135,ar136,ar137,ar138,ar139,ar140,ar141,ar142,ar143,ar144,ar145,ar146,ar147,ar148,ar149,ar150,ar151,ar152,ar153,ar154,ar155,ar156,ar157,ar158,ar159,ar160,ar161,ar162,ar163,ar164,ar165,ar166,ar167,ar168,ar169,ar170,ar171,ar172,ar173,ar174,ar175,ar176,ar177,ar178,ar179,ar180,ar181,ar182,ar183,ar184,ar185,ar186,ar187,ar188,ar189,ar190,ar191,ar192,ar193,ar194,ar195,ar196,ar197,ar198,ar199,ar200,ar201,ar202,ar203,ar204,ar205,ar206,ar207,ar208,ar209,ar210,ar211,ar212,ar213,ar214,ar215,ar216,ar217,ar218,ar219,ar220,ar221,ar222,ar223,ar224,ar225,ar226,ar227,ar228,ar229,ar230,ar231,ar232,ar233,ar234,ar235,ar236,ar237,ar238,ar239,ar240,ar241,ar242,ar243,ar244,ar245,ar246,ar247,ar248,ar249,ar250,ar251,ar252,ar253,ar254,ar255,ar256,] = test1
    
    
    linha1.push(colunaGene1,ar1,ar2,ar3,ar4,ar5,ar6,ar7,ar8,ar9,ar10,ar11,ar12,ar13,ar14,ar15,ar16,)
    linha2.push(colunaGene2,ar17,ar18,ar19,ar20,ar21,ar22,ar23,ar24,ar25,ar26,ar27,ar28,ar29,ar30,ar31,ar32,)
    linha3.push(colunaGene3,ar33,ar34,ar35,ar36,ar37,ar38,ar39,ar40,ar41,ar42,ar43,ar44,ar45,ar46,ar47,ar48,)
    linha4.push(colunaGene4,ar49,ar50,ar51,ar52,ar53,ar54,ar55,ar56,ar57,ar58,ar59,ar60,ar61,ar62,ar63,ar64,)
    linha5.push(colunaGene5,ar65,ar66,ar67,ar68,ar69,ar70,ar71,ar72,ar73,ar74,ar75,ar76,ar77,ar78,ar79,ar80,)
    linha6.push(colunaGene6,ar81,ar82,ar83,ar84,ar85,ar86,ar87,ar88,ar89,ar90,ar91,ar92,ar93,ar94,ar95,ar96,)
    linha7.push(colunaGene7,ar97,ar98,ar99,ar100,ar101,ar102,ar103,ar104,ar105,ar106,ar107,ar108,ar109,ar110,ar111,ar112,)
    linha8.push(colunaGene8,ar113,ar114,ar115,ar116,ar117,ar118,ar119,ar120,ar121,ar122,ar123,ar124,ar125,ar126,ar127,ar128,)
    linha9.push(colunaGene9,ar129,ar130,ar131,ar132,ar133,ar134,ar135,ar136,ar137,ar138,ar139,ar140,ar141,ar142,ar143,ar144,)
    linha10.push(colunaGene10,ar145,ar146,ar147,ar148,ar149,ar150,ar151,ar152,ar153,ar154,ar155,ar156,ar157,ar158,ar159,ar160,)
    linha11.push(colunaGene11,ar161,ar162,ar163,ar164,ar165,ar166,ar167,ar168,ar169,ar170,ar171,ar172,ar173,ar174,ar175,ar176,)
    linha12.push(colunaGene12,ar177,ar178,ar179,ar180,ar181,ar182,ar183,ar184,ar185,ar186,ar187,ar188,ar189,ar190,ar191,ar192,)
    linha13.push(colunaGene13,ar193,ar194,ar195,ar196,ar197,ar198,ar199,ar200,ar201,ar202,ar203,ar204,ar205,ar206,ar207,ar208,)
    linha14.push(colunaGene14,ar209,ar210,ar211,ar212,ar213,ar214,ar215,ar216,ar217,ar218,ar219,ar220,ar221,ar222,ar223,ar224,)
    linha15.push(colunaGene15,ar225,ar226,ar227,ar228,ar229,ar230,ar231,ar232,ar233,ar234,ar235,ar236,ar237,ar238,ar239,ar240,)
    linha16.push(colunaGene16,ar241,ar242,ar243,ar244,ar245,ar246,ar247,ar248,ar249,ar250,ar251,ar252,ar253,ar254,ar255,ar256,)

    
    console.log(ar1)
    tabela.push(linhaGene2 ,linha1,linha2,linha3,linha4,linha5,linha6,linha7,linha8,linha9,linha10,linha11,linha12,linha13,linha14,linha15,linha16)
    
    for (let m = 0; m < tabela.length; m++) {
      const linha = input.insertRow();
      for (let z = 0; z < tabela[m].length; z++) {
        const celula = linha.insertCell();
        celula.textContent = tabela[m][z];
      }
    }
    
    
  }else{
    alert("Digite os genes corretamente");
  }
    }
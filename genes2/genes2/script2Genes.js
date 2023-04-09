


function enviar(){
  const idPai = document.querySelector('.idPai').value;
  const idMae = document.querySelector('.idMae').value;

  if(idPai.length == 4 && idMae.length == 4){
    
    const input = document.getElementById('table');
  
    document.querySelector(".sec1").style.opacity = "0";
    document.querySelector(".btt").style.opacity = "0";
    document.querySelector("h1").style.opacity = "0";

    const genePai1 = [idPai.substring(0,1), idPai.substring(1,2)]
    const genePai2 = [idPai.substring(2,3), idPai.substring(3,4)]
    
    const geneMae1 = [idMae.substring(0,1), idMae.substring(1,2)]
    const geneMae2 = [idMae.substring(2,3), idMae.substring(3,4)]
    
    const tabela=[]
    
    
    
    const linhaGene1 = [
     
      genePai1[0] + genePai2[0],
      genePai1[0] + genePai2[1],
      genePai1[1] + genePai2[0],
      genePai1[1] + genePai2[1],
     
    ];
    const linhaGene2 = [
      "⠀⠀",
      genePai1[0] + genePai2[0],
      genePai1[0] + genePai2[1],
      genePai1[1] + genePai2[0],
      genePai1[1] + genePai2[1],
    ];
    
    const colunaGene = [
      geneMae1[0] + geneMae2[0],
      geneMae1[0] + geneMae2[1],
      geneMae1[1] + geneMae2[0],
      geneMae1[1] + geneMae2[1],
    ];
                      
                       
    const colunaGene1 = [geneMae1[0] + geneMae2[0],] 
    const colunaGene2 = [geneMae1[0] + geneMae2[1],] 
    const colunaGene3 = [geneMae1[1] + geneMae2[0],]
    const colunaGene4 = [geneMae1[1] + geneMae2[1],]
    
    const linha1 =[]
    const linha2 =[]
    const linha3 =[]
    const linha4 =[]
    const opa = document.querySelector('tr');
    const test1 =[]
    for( let b=0;b<colunaGene.length;b++){
      for(let t=0; t<linhaGene1.length;t++){
        const te1 = linhaGene1[t].substring(0,1) + colunaGene[b].substring(0,1)
        const te2 = linhaGene1[t].substring(1,2) + colunaGene[b].substring(1,2)
        
        const te4 = te1+te2
        test1.push(te4)
    
      }
    }
    
    const [ar1,ar2,ar3,ar4,ar5,ar6,ar7,ar8,ar9,ar10,ar11,ar12,ar13,ar14,ar15,ar16,] = test1
    
    linha1.push(colunaGene1,ar1,ar2,ar3,ar4,)
    linha2.push(colunaGene2,ar5,ar6,ar7,ar8,)
    linha3.push(colunaGene3,ar9,ar10,ar11,ar12,)
    linha4.push(colunaGene4,ar13,ar14,ar15,ar16,)
    
    tabela.push(linhaGene2 ,linha1,linha2,linha3,linha4)
    
    for (let m = 0; m < tabela.length; m++) {
      const linha = input.insertRow();
      for (let z = 0; z < tabela[m].length; z++) {
        const celula = linha.insertCell();
        celula.textContent = tabela[m][z];
      }
    }
  } else{
    alert("Digite os genes corretamente")
  }
  }
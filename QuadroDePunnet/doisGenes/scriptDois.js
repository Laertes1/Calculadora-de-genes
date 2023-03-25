'use strict'


function escolha(){
    const gene1 ="ARFT"       //document.getElementById('gene1').value
                //AF AT RF RT
    const gene2 = "GHUI"//document.getElementById('gene2').value
                //GU GI HU HI
    // document.querySelector('.genesSection').style.opacity="0"
   

// const pai = ["A", "a", "B", "a"];
// const mae = ["a", "a", "s", "o"];


const pai = [document.getElementById('genePai1').value,document.getElementById('genePai2').value,document.getElementById('genePai3').value,document.getElementById('genePai4').value,]

const mae =[document.getElementById('geneMae1').value,document.getElementById('geneMae2').value,document.getElementById('geneMae3').value,document.getElementById('geneMae4').value,]

const grade = [];
for (let i = 0; i < pai.length; i++) {
  const linha = [];
  for (let j = 0; j < mae.length; j++) {
    linha.push(pai[i] + mae[j]);

    
    const opaio1 = pai[0] + pai[2]
    const opaio2 = pai[0] + pai[3]
    const opaio3 = pai[1] + pai[2]
    const opaio4 = pai[1] + pai[3]

    const omaeo1 = mae[0] + mae[2]
    const  omaeo2 = mae[0] + mae[3]
    const  omaeo3 = mae[1] + mae[2]
    const  omaeo4 = mae[1] + mae[3]
    console.log(opaio1 + opaio2)
  }
  grade.push(linha);
}

console.table(grade);


        
    }    

 // document.querySelector('..genesSection-divTabela').style.opacity="1"
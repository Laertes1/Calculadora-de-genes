

function enter(){

  document.querySelector('.addGenes').style.opacity="0";

  document.querySelector('.secPrinc-inicio').style.opacity="1"

const tabela = document.getElementById("tbody");

const idPai = document.getElementById('idPai').value
const idMae = document.getElementById('idMae').value


const paiGene1 = [idPai.substring(0,1),idPai.substring(1,2)];
const paiGene2 = [idPai.substring(2,3),idPai.substring(3,4)];
const paiGene3 = [idPai.substring(4,5),idPai.substring(5,6)];
const paiGene4 = [idPai.substring(6,7),idPai.substring(7,8)];
const paiGene5 = [idPai.substring(8,9),idPai.substring(9,10)];


const maeGene1 = [idMae.substring(0,1),idMae.substring(1,2)];
const maeGene2 = [idMae.substring(2,3),idMae.substring(3,4)];
const maeGene3 = [idMae.substring(4,5),idMae.substring(5,6)];
const maeGene4 = [idMae.substring(6,7),idMae.substring(7,8)];
const maeGene5 = [idMae.substring(8,9),idMae.substring(9,10)];

const table = [];
for (let i = 0; i < paiGene1.length; i++) {
  const linha1 = [];
  const linha2 = [];
  const linha3 = [];
  const linha4 = [];
  const linha5 = [];
  for (let j = 0; j < maeGene1.length; j++) {
    const formacaoGene1 = paiGene1[i] + maeGene1[j];
    for (let k = 0; k < paiGene2.length; k++) {
      const formacaoGene2 = paiGene2[k] + maeGene2[k];
      for (let l = 0; l < paiGene3.length; l++) {
        const formacaoGene3 = paiGene3[l] + maeGene3[l];
        for (let m = 0; m < paiGene4.length; m++) {
          const formacaoGene4 = paiGene4[m] + maeGene4[m];
          for (let n = 0; n < paiGene5.length; n++) {
            const formacaoGene5 = paiGene5[n] + maeGene5[n];
          

            linha1.push(formacaoGene1);
            linha2.push(formacaoGene2);
            linha3.push(formacaoGene3);
            linha4.push(formacaoGene4);
            linha5.push(formacaoGene5);
          }
        }
      }
    }
  }
  table.push(linha1, linha2, linha3, linha4, linha5);
}

console.table(table);



for (let m = 0; m < table.length; m++) {
  const linha = tabela.insertRow();
  for (let z = 0; z < table[m].length; z++) {
    const celula = linha.insertCell();
    celula.textContent = table[m][z];
  }
}

}

//AaBbCcDdEe

//FfGgHhIiJj
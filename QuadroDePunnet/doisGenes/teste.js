const paiGene1 = [document.getElementById('genePai1').value, document.getElementById('genePai3').value,];
const maeGene1 = ["A", "a"];
const paiGene2 = ["B", "b"];
const maeGene2 = [document.getElementById('genePai1').value,, "b"];

const grade = [];
for (let i = 0; i < paiGene1.length; i++) {
  const linha = [];
  for (let j = 0; j < maeGene1.length; j++) {
    const gene1 = paiGene1[i] + maeGene1[j];
    const celula = [];
    for (let k = 0; k < paiGene2.length; k++) {
      for (let l = 0; l < maeGene2.length; l++) {
        const gene2 = paiGene2[k] + maeGene2[l];
        celula.push(gene1 + gene2);
      }
    }
    linha.push(celula);
  }
  grade.push(linha);
}

console.table(grade);

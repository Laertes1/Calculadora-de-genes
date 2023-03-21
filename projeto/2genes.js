

var gene1="AaBb"
var gene2="AAbb"


var geneTotal1 =[gene1.substring(0,1),gene1.substring(1,2),gene1.substring(2,3),gene1.substring(3,4),]
var geneTotal2 =[gene2.substring(0,1),gene2.substring(1,2),gene2.substring(2,3),gene2.substring(3,4),]

for(var i=0; i<4;i++){
    console.log(`${geneTotal1[i]}${geneTotal2[0]}`)
    console.log(`${geneTotal1[i]}${geneTotal2[1]}`)
    console.log(`${geneTotal1[i]}${geneTotal2[2]}`)
    console.log(`${geneTotal1[i]}${geneTotal2[3]}`)
   
    console.log(`${geneTotal2[i]}${geneTotal2[0]}`)
    console.log(`${geneTotal2[i]}${geneTotal2[1]}`)
    console.log(`${geneTotal2[i]}${geneTotal2[2]}`)
    console.log(`${geneTotal2[i]}${geneTotal2[3]}`)
  
}
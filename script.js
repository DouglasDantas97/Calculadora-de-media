var nome = "Douglas"
var notaDoPrimeiroBimestre = 9
var notaDoSegundoBimestre = 7
var notaDoTerceiroBimestre = 4
var notaDoQuartoBimestre = 2

var notaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4

var notaFixada = notaFinal.toFixed(1)

function Calcular() {
  var notaElemento1 = document.getElementById("nota1");
  var nota1 = notaElemento1.value;
  var notaE1 = parseFloat(nota1);
  var notaElemento2 = document.getElementById("nota2");
  var nota2 = notaElemento2.value;
  var notaE2 = parseFloat(nota2);
  var notaElemento3 = document.getElementById("nota3");
  var nota3 = notaElemento3.value;
  var notaE3 = parseFloat(nota3);
  var notaElemento4 = document.getElementById("nota4");
  var nota4 = notaElemento4.value;
  var notaE4 = parseFloat(nota4);
  
  var media = notaE1 + notaE2 + notaE3 + notaE4 / 4;
  console.log(media);
  
  var calculoMediaElemento = document.getElementById("calculoMedia");
  
  var calculoMedia = "A média é " + media;
  calculoMediaElemento.innerHTML = calculoMedia;
}



// Aula da Imersao dev
// console.log("Bem vindo " + nome)
// console.log("Nota do Primeiro Bimestre: " + notaDoPrimeiroBimestre)
// console.log("Nota do Segundo Bimestre: " + notaDoSegundoBimestre)
// console.log("Nota do Terceiro Bimestre: " + notaDoTerceiroBimestre)
// console.log("Nota do Quarto Bimestre: " + notaDoQuartoBimestre)
// console.log("Nota Final: " + notaFixada)

// Revisão
// variáveis, strings, console.log, toFixed, operações matemáticas e concatenação.
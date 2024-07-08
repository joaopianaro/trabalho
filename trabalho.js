const prompt = require('prompt-sync')({sigint:true})
let primeiroNumero = prompt("digite o primeiro numero :");
let operaçao = prompt("digite a operaçao (+,-,x,/,%) :");
let segundoNumero = prompt("digite o segundo numero :");
let resultado;
if (isNaN(primeiroNumero) || isNaN(segundoNumero)) {
  console.log("voce deve digitar numeros validos");
} else {
  switch (operaçao) {
    case "+":
      resultado = primeiroNumero + segundoNumero;
      break;
    case "-":
      resultado = primeiroNumero - segundoNumero;
      break;
    case "x":
      resultado = primeiroNumero * segundoNumero;
      break;
    case "/":
      if (primeiroNumero == 0 || segundoNumero == 0) {
        resultado = "divisao por zero nao é permitida";
      } else {
        resultado = primeiroNumero / segundoNumero;
      }
      break;
    case "%":
      resultado = (primeiroNumero * segundoNumero) / 100;
      break;
    default:
      resultado = "operaçao invalida";
  }
}
console.log(resultado);

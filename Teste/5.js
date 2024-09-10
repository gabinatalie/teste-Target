const prompt = require("readline-sync"); // biblioteca para uso do prompt
/* 5) Escreva um programa que inverta os caracteres de um string. */

const minhaString = prompt.question("Digite uma palavra para ser invertida: ");
function inverterString(str) {
  let invertida = ""; // variável para armazenar a string invertida

  //loop que começa no último caractere da string (str.length -1) e vai até o primeiro caractere (índice 0)
  for (let i = str.length - 1; i >= 0; i--) {
    invertida += str[i]; // adiciona cada caractere a string 'invertida'
  }

  return invertida;
}
console.log("Original:", minhaString);
console.log("Invertida:", inverterString(minhaString));

const prompt = require("readline-sync");

/*  2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência. */

function isFibonacci(num) {
  let a = 0,
    b = 1,
    temp;

  if (num === a || num === b) return true;

  while (b < num) {
    temp = a;
    a = b;
    b = temp + b;
  }

  return b == num;
}

const numero = Number(prompt.question("Digite um numero: "));

if (isFibonacci(numero)) {
  console.log(numero + " pertence à sequência de Fibonacci");
} else {
  console.log(numero + " não pertence à sequência de Fibonacci");
}

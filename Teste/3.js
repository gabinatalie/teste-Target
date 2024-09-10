/* 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal. */

const faturamento = require('./faturamento.json').faturamento; // chamando a propriedade 'faturamento' do arquivo Json

function calcularFaturamento(faturamento) {
  let soma = 0; // para somar os valores dos dias de faturamento
  let count = 0; // para contar quantos dias tiveram faturamento
  let min = Infinity; // inicialmente definido como infinito para garantir que qualquer valor seja menor
  let max = -Infinity; // inicialmente definido como menos infinito para garantir que qualquer valor de faturamento seja maior
  let acimaDaMedia = 0; // para contar quantos dias o faturamento foi acima da média

  // Primeiro, vamos calcular a soma e encontrar o valor min e max
  for (let i = 0; i < faturamento.length; i++) {
    let valor = faturamento[i].valor; 

    if (valor !== null && valor > 0) {
      soma += valor; // adiciona o valor ao total da soma
      count++; // incrementa o contador de dias com faturamento

      if (valor < min) min = valor; // atualiza o valor mínimo se o valor atual for menor
      if (valor > max) max = valor; // atualiza o valor máximo se o valor atual for maior
    }
  }

  // Calcula a média dos valores de faturamento
  let media = soma / count;

  // Agora, verificar quantos dias o faturamento foi superior à média
  for (let i = 0; i < faturamento.length; i++) {
    let valor = faturamento[i].valor;

    // Verifica se o valor não é null e é acima da média
    if (valor !== null && valor > media) {
      acimaDaMedia++; // incrementa o contador de dias com faturamento acima da média
    }
  }

  // Retorna um objeto com o menor e maior faturamento e o número de dias com faturamento acima da média
  return {
    menor: min,
    maior: max,
    acimaDaMedia: acimaDaMedia,
  };
}

// Chama a função calcularFaturamento com o array de faturamento e armazena o resultado na variável resultado.
let resultado = calcularFaturamento(faturamento);

console.log("Menor faturamento: ", resultado.menor);
console.log("Maior faturamento: ", resultado.maior);
console.log("Dias acima da média: ", resultado.acimaDaMedia);

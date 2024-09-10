/* 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
• SP – R$67.836,43
• RJ – R$36.678,66
• MG – R$29.229,88
• ES – R$27.165,48
• Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.  */

let faturamentosEstados = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 2922988,
  ES: 27165.48,
  Outros: 19849.53,
}; // objeto que armazena o valor de cada estado

let totalFaturamento = 0; //armazena a soma de todos os faturamentos

// calcula o faturamento total
for (let estado in faturamentosEstados) {
  totalFaturamento += faturamentosEstados[estado]
}


//calcular o pernceltual
for (let estado in faturamentosEstados) {
  let percentual = (faturamentosEstados[estado] / totalFaturamento) * 100;
  console.log(`${estado}: ${percentual.toFixed(2)}%`);
}

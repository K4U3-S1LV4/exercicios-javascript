//Exercício 1 Bolo de pote (calculo de lucro)


// Variaveis que definem: Valor do Bolo, Custo do bolo, Bolos comprados
const ValorBoloPote = 12.00
const CustoBoloPote = 5.50
const BolosComprados = 30

//Concatenação em Strings das constantes
console.log("O lucro por unidade é o valor de " + ValorBoloPote + " Menos o valor de " + CustoBoloPote);

//Variavel Lucro de cada unidade, aqui temos o resultado do lucro de cada uma
var LucroUnidade = ValorBoloPote - CustoBoloPote

console.log("O lucro por cada unidade é " + LucroUnidade);

//Concatenação de Strings das constantes
console.log("O lucro total é o valor de " + LucroUnidade + " Vezes o valor de unidades vendidas: " + BolosComprados);

//Variavel Lucro Total, aqui é o resultado do lucro de cada bolo x a quuantidade de bolos compradas
var LucroTotal = LucroUnidade * BolosComprados

console.log("O lucro total é " + LucroTotal);

//Exercício 2 Confeitaria(desconto)

var ValorBolo = 150.00;

console.log("O valor do desconto, equivale ao valor do Bolo: " + ValorBolo + " Divido por 10, (10%)");

var desconto = ValorBolo / 10;

console.log("O resultado será um desconto de", (desconto), "reais");

console.log("Com isso em mente o valor atual ficara com o valor do bolo de " + ValorBolo + " Menos o valor do desconto que é " + desconto);

var ValorBolo = 135.00;

console.log("O valor do bolo agora com o desconto é de:", ValorBolo);



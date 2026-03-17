/* Exercício 1 - Bolo de Pote */

// Quantidade de bolos vendidos
const bolosVendidos = 35;

// Meta diária
const meta = 30;

// Verificação
console.log("Atingiu a meta? " + (bolosVendidos >= meta));
console.log("Superou a meta? " + (bolosVendidos > meta));


/* Exercício 2 - Confeitaria */

// Valor do pedido
const valorPedido = 180;

// Cliente VIP
const clienteVip = true;

// Verificação
console.log("Tem frete grátis? " + (valorPedido > 200 || clienteVip));


/* Exercício 3 - Ateliê de Costura */

// Valor do serviço
const valorServico = 650;

// Cliente antigo
const clienteAntigo = true;

// Verificação
console.log("Tem desconto? " + (valorServico >= 500 && clienteAntigo));


/* Exercício 4 - Psicólogo */

// Horário disponível
const horarioDisponivel = true;

// Paciente cadastrado
const pacienteCadastrado = false;

// Verificação
console.log("Consulta pode ser agendada? " + (horarioDisponivel && pacienteCadastrado));


/* Exercício 5 - Produção diária */

// Produção de 10 bolos
for (let i = 1; i <= 10; i++) {
    console.log("Bolo produzido número " + i);
}


/* Exercício 6 - Lista de sabores */

// Lista de sabores
const sabores = ["Chocolate", "Morango", "Baunilha", "Red Velvet"];

// Percorrendo sabores
for (let i = 0; i < sabores.length; i++) {
    console.log("Sabor disponível: " + sabores[i]);
}


/* Exercício 7 - Faturamento do ateliê */

// Variável de soma
let faturamento = 0;

// Soma dos serviços
for (let i = 1; i <= 5; i++) {
    faturamento = faturamento + 200;
}

// Resultado
console.log("Faturamento total: R$ " + faturamento);


/* Exercício 8 - Lista de pacientes */

// Lista de pacientes
const pacientes = ["Ana", "Carlos", "Juliana", "Pedro"];

// Percorrendo pacientes
for (let i = 0; i < pacientes.length; i++) {
    console.log("Paciente atendido: " + pacientes[i]);
}
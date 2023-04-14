function simularCompra(e) {
  e.preventDefault();

  const valorDoCarroInput = document.getElementById("valorCarro");
  const salarioInput = document.getElementById("salarioLiquido");
  const prazoDeFinanciamentoInput = document.getElementById("prazoFinanciamento");

  const valorDoCarro = Number(valorDoCarroInput.value);
  const salario = Number(salarioInput.value);
  const prazoDeFinanciamento = Number(prazoDeFinanciamentoInput.value);

  if (isNaN(valorDoCarro) || valorDoCarro <= 0 || isNaN(salario) || salario <= 0 || isNaN(prazoDeFinanciamento) || prazoDeFinanciamento <= 0 || !Number.isInteger(prazoDeFinanciamento)) {
    alert("Por favor, insira valores válidos para o valor do carro, salário e prazo de financiamento (deve ser um número inteiro positivo).");
    return;
  }

  const entrada = valorDoCarro * 0.2;
  const valorDaParcela = (valorDoCarro - entrada) / prazoDeFinanciamento;
  const dezPorCentoRenda = salario * 0.1;

  let mensagem;

  if (valorDaParcela > dezPorCentoRenda) {
    mensagem = "Esse carro não é para você!";
  } else {
    mensagem = "Esse carro é para você!";
  }

  const resultadoCarro = document.querySelector(".resultadoCarro");
  resultadoCarro.textContent = mensagem;

  valorDoCarroInput.value = "";
  salarioInput.value = "";
  prazoDeFinanciamentoInput.value = "";
}

const botaoCalcular = document.getElementById("calcularCompra");
botaoCalcular.addEventListener("click", simularCompra);

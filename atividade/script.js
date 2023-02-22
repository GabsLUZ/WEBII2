// Obtém os elementos HTML que serão usados na página
const precoGasolinaInput = document.getElementById("precoGasolina");
const precoAlcoolInput = document.getElementById("precoAlcool");
const resultado = document.getElementById("resultado");

// Adiciona um listener de evento ao botão calcular
document.getElementById("botaoCalcular").addEventListener("click", function() {
  // Obtém os preços dos combustíveis a partir dos campos de input HTML
  const precoGasolina = parseFloat(precoGasolinaInput.value);
  const precoAlcool = parseFloat(precoAlcoolInput.value);

  // Calcula a relação entre os preços do álcool e da gasolina
  const relacao = precoAlcool / precoGasolina;

  // Define qual combustível é mais vantajoso com base na relação calculada
  let melhorCombustivel;
  if (relacao > 0.7) {
    melhorCombustivel = "gasolina";
  } else {
    melhorCombustivel = "álcool";
  }

  // Exibe o resultado na página da web
  resultado.textContent = `É melhor abastecer com ${melhorCombustivel}.`;
});

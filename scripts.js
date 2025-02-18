// Cotação de moedas do dia.
const USD = 5.7;
const EUR = 5.9;
const GBP = 7.1;
// Obs* é importante sempre escrever constantes com letra maiúscula.

// Obtendo os elementos do formulário.
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");

// Manipulando o input amount para receber somente números.
amount.addEventListener("input", () => {
  // console.log(amount.value);

  const hasCharactersRegex = /\D+/g; // Encontra apenas texto.
  amount.value = amount.value.replace(hasCharactersRegex, ""); /* Uma vez
  encontrado esse padrão, ele é substituído por nada. */
});

// Capturando o evento de submit (enviar) do formulário.
form.onsubmit = (event) => {
  event.preventDefault();
  // console.log(currency.value);

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$");
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€");
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£");
      break;
  }
};

// Função para converter a moeda.
function convertCurrency(amount, price, symbol) {
  // console.log(amount, price, symbol);
  try {
   description.textContent = `1 ${symbol} = R$ ${price}`
    
    // Aplica a classe que exibe o footer para mostrar o resultado.
    footer.classList.add("show-result");
  } catch (error) {
    // Remove a classe do footer, removendo ele da tela.
    footer.classList.remove("show-result");

    console.log(error);
    alert("Não foi possível converter. Tente novamente mais tarde.");
  }
}

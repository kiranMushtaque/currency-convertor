function convertCurrency() {
  const amount = document.getElementById("amount").value;
  const fromCurrency = document.getElementById("fromCurrency").value;
  const toCurrency = document.getElementById("toCurrency").value;

  if (amount === "") {
    alert("Please enter an amount");
    return;
  }

  // Currency exchange rates (static values for demo purposes)
  const rates = {
    USD: { EUR: 0.93, INR: 82.01, GBP: 0.75 },
    EUR: { USD: 1.08, INR: 88.26, GBP: 0.81 },
    INR: { USD: 0.012, EUR: 0.011, GBP: 0.0091 },
    GBP: { USD: 1.33, EUR: 1.24, INR: 109.12 },
  };

  const rate = rates[fromCurrency][toCurrency];
  const result = amount * rate;

  document.getElementById(
    "result"
  ).innerText = `${amount} ${fromCurrency} = ${result.toFixed(
    2
  )} ${toCurrency}`;
}

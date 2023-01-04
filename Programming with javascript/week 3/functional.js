var currencyOne = 100;
var currencyTwo = 0;
var exchangeRate = 1.2;
function covnertCurrency(amount, rate) {
  return amount * rate;
}
currencyTwo = covnertCurrency(currencyOne, exchangeRate);
console.log(currencyTwo);

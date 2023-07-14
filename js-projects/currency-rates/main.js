//Elementleri seçelim

let amountInput = document.querySelector("#amount");
let firstOption = document.querySelector("#firstCurrencyOption");
let secondOption = document.querySelector("#secondCurrencyOption");
let resultInput = document.querySelector("#result");

const currency = new Currency();

runEventListeners();

function runEventListeners(){
    amountInput.addEventListener("input",exchange);
}

function exchange(){
   let amount = Number(amountInput.value.trim());
   let firstOptionValue = firstOption.options[firstOption.selectedIndex].textContent;
   let secondOptionValue = secondOption.options[secondOption.selectedIndex].textContent;
  
   currency.exchange(amount, firstOptionValue, secondOptionValue)
   .then((result) => {
        resultInput.value = result.toFixed(3);//noktadan sonra 3 basamak gelsin istiyorsak 
   })
}
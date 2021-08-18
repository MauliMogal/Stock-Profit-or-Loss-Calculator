let initialPrice = document.querySelector("#initial-price");
let stockQuantity = document.querySelector("#stock-quantity");
let currentPrice = document.querySelector("#current-price");
let submitBtn = document.querySelector("#submit-btn");
let outputBox = document.querySelector("#output-box");

submitBtn.addEventListener("click", submitHandler);

function submitHandler() {
  let ip = Number(initialPrice.value);
  let qty = Number(stockQuantity.value);
  let curr = Number(currentPrice.value);

  calculateProfitAndLoss(ip, qty, curr);
}

function calculateProfitAndLoss(initial, quantity, current) {
  if (current > initial) {
    let profit = ((current - initial) * quantity).toFixed(2);
    let profitPercentage = ((current - initial) / (initial / 100)).toFixed(2);
    outputBox.innerHTML =
      "You gained " + profitPercentage + "%. Your total profit is ₹ " + profit;
  } else if (initial > current) {
    let loss = ((initial - current) * quantity).toFixed(2);
    let lossPercentage = ((initial - current) / (initial / 100)).toFixed(2);
    outputBox.innerHTML =
      "You lost " + lossPercentage + "%. Your total loss is ₹ " + loss;
  } else {
    outputBox.innerHTML = "Even Steven";
  }
}

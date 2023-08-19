document.getElementById("deposit-btn").addEventListener("click", function () {
  // Take the input field value and turn it into a floating number
  const depositField = document.getElementById("deposit-field");
  const newDepositString = depositField.value;
  const newDeposit = parseFloat(newDepositString);

  depositField.value = "";
  if (Number.isNaN(newDeposit)) {
    alert("Please Provide Valid  Number");
    return;
  }

  const depositAmountElement = document.getElementById("deposit-amount");
  const previousDepositAmountString = depositAmountElement.innerText;
  const previousDepositAmount = parseFloat(previousDepositAmountString);
  depositAmountElement.innerText = newDeposit;

  const currentDeposit = previousDepositAmount + newDeposit;
  depositAmountElement.innerText = currentDeposit;

  const balanceTotalAmount = document.getElementById("balance-amount");
  const previousTotalBalanceString = balanceTotalAmount.innerText;
  const previousTotalBalance = parseFloat(previousTotalBalanceString);

  const currentBalance = previousTotalBalance + newDeposit;
  balanceTotalAmount.innerText = currentBalance;
});

document.getElementById("deposit-btn").addEventListener("click", function () {
  const depositField = document.getElementById("deposit-field");
  const newDepositString = depositField.value;

  const depositAmountElement = document.getElementById("deposit-amount");
  const previousDepositAmountString = depositAmountElement.innerText;
  const previousDepositAmount = parseFloat(previousDepositAmountString);
  depositAmountElement.innerText = newDepositString;
  const newDeposit = parseFloat(newDepositString);

  const currentDeposit = previousDepositAmount + newDeposit;
  depositAmountElement.innerText = currentDeposit;

  const balanceTotalAmount = document.getElementById("balance-amount");
  const previousTotalBalanceString = balanceTotalAmount.innerText;
  const previousTotalBalance = parseFloat(previousTotalBalanceString);
  const currentBalance = previousTotalBalance + newDeposit;
  balanceTotalAmount.innerText = currentBalance;

  if (Number.isNaN(newDeposit)) {
    alert("Please Provide Valid  Number");
  }

  depositField.value = "";
});

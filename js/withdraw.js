document.getElementById("Withdraw-btn").addEventListener("click", function () {
  const withdrawField = document.getElementById("Withdraw-field");
  const newWithdrawString = withdrawField.value;
  withdrawField.value = "";

  const withdrawAmountElement = document.getElementById("withdraw-amount");
  const previousWithdrawAmountString = withdrawAmountElement.innerText;
  const previousWithdrawAmount = parseFloat(previousWithdrawAmountString);
  const newWithdraw = parseFloat(newWithdrawString);
  if (Number.isNaN(newWithdraw)) {
    alert("Please Provide a Valid Number");
  } else {
    const balanceTotalAmount = document.getElementById("balance-amount");
    const previousTotalBalanceString = balanceTotalAmount.innerText;
    const previousTotalBalance = parseFloat(previousTotalBalanceString);

    if (newWithdraw <= previousTotalBalance) {
      const currentWithdraw = previousWithdrawAmount + newWithdraw;
      withdrawAmountElement.innerText = currentWithdraw;
      const currentBalance = previousTotalBalance - newWithdraw;
      balanceTotalAmount.innerText = currentBalance;
    } else {
      alert("Insufficient Balance");
    }
  }
});

const transferMoney = document.getElementById("transferMoney");
transferMoney.addEventListener("click", function(){
    showOnly("transfer-money");
})


const transferBtn = document.getElementById("transfer-btn");

transferBtn.addEventListener("click", function () {
    // 1. Get the agent number, validate and verify
    const number = getValueFromInput("transfer-number");
    if (number.length !== 11) {
        alert("Please enter a valid 11 digit number");
        return;
    }

    // 2. Get the amount
    const amount = getValueFromInput("transfer-amount");
    
    // 3. Get the current balance
    const currentBalance = getBalance();

    // 4. Check if the amount is greater than the balance, if so, show error message
    if (amount > currentBalance) {
        alert("Insufficient balance");
        return;
        }
    // 5. If the amount is less than or equal to the balance, check if the pin is correct, if not, show error message
    const pin = getValueFromInput("transfer-pin");
    if (pin !== "4351") {
      alert("Incorrect PIN");
      return;
    }
    // 6. If the pin is correct, deduct the amount from the balance and show success message
    const newBalance = currentBalance - amount;
    setBalance(newBalance);
    alert(`Sent $${amount} to ${number} successfully!`);
    
});
document.getElementById("cashOut").addEventListener("click", function(){
    showOnly("cashout");
});

const cashOutEvent = document.getElementById("cashout-btn");

cashOutEvent.addEventListener("click", function () {

    // 1. Get the agent number, validate and verify
    // const number = document.getElementById("cashout-number").value;
    const number = getValueFromInput("cashout-number");
    
    if (number.length !== 11) {
        alert("Please enter a valid 11 digit number");
        return;
    }

    // 2. Get the amount
    // const amountNumber = document.getElementById("cashout-amount").value;
    const amountNumber = getValueFromInput("cashout-amount");

    // 3. Get the current balance, convert to number
    const currentBalance = getBalance();

    // 4. Check if the amount is greater than the balance, if so, show error message
    if (amountNumber > currentBalance) {
        alert("Insufficient balance");
        return;
        }

    // 5. If the amount is less than or equal to the balance, check if the pin is correct, if not, show error message
    // const pin = document.getElementById("cashout-pin").value;
    const pin = getValueFromInput("cashout-pin");
    
    if (pin !== "4351") {
      alert("Incorrect PIN");
      return;
    }
    // 6. If the pin is correct, deduct the amount from the balance and show success message
    const newBalance = currentBalance - amountNumber;
    setBalance(newBalance);
    alert("Cashout successful!");



});
document.getElementById("addMoney").addEventListener("click", function(){
    showOnly("add-money");
});

const addMoneybtn = document.getElementById("add-money-btn");

addMoneybtn.addEventListener("click", function(){

    // Get the Bank name
    const bankName = getValueFromInput("add-money-bank");
    if(bankName === "Select Bank") {
        alert("Please select a bank");
        return;
    }
    // 1. Get the agent number, validate and verify
    const accountNumber = getValueFromInput("add-money-account-number");
    
    if (accountNumber.length !== 11) {
        alert("Please enter a valid 11 digit account number");
        return;
    }

    // 2. Get the amount
    const amount = getValueFromInput("add-money-amount");

    // 3. Get the current balance, convert to number
    const currentBalance = getBalance();

    // 4. Check if the pin is correct, if not, show error message
    const pin = getValueFromInput("add-money-pin");
    
    if (pin !== "4351") {
      alert("Incorrect PIN");
      return;
    }
    // 5. If the pin is correct, add the amount to the balance and show success message
    const newBalance = currentBalance + Number(amount);
    setBalance(newBalance);
    console.log("New balance after adding money:", newBalance);
    alert(`Add money successful from ${bankName} 
    at ${new Date()}.
    Your new balance is ${newBalance}`);
});
const transferMoney = document.getElementById("transferMoney");
transferMoney.addEventListener("click", function(){
    showOnly("transfer-money");
});


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
    // Get the parent
    const historyContainer = document.getElementById("history-container");

    // Create a new div element
    const transactionDiv = document.createElement("div");

    // Update the innerHTML of the div element with the transaction details
    transactionDiv.innerHTML = `
        <div class="transaction-card px-4 py-3 bg-base-100 mb-4 w-full flex items-center">
            
                <div class="flex items-center gap-2">
                    <div class="wrapper w-[45px] h-[45px] rounded-full bg-[#080808]/10 flex items-center justify-center"> <img src="assets/opt-1.png" alt="" /> </div>
                    <div class="details">
                        <h3 class="font-semibold text-base text-neutral/70"> Money Transferred </h3>
                        <p class="text-xs font-normal text-neutral/70"> Today at ${new Date().toLocaleTimeString()} </p>
                    </div>
                </div>
            
                <div class="ml-auto h-6 w-6 flex items-center justify-center text-neutral/50">
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
            </div>
    `;
    // Append the transaction div to the history container
    historyContainer.appendChild(transactionDiv);

    // 6. If the pin is correct, deduct the amount from the balance and show success message
    const newBalance = currentBalance - amount;
    setBalance(newBalance);
    alert(`Sent $${amount} to ${number} successfully!`);
    
});
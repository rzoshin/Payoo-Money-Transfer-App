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

    // Select the history-container
    const historyContainer = document.getElementById("history-container");

    // Create a new div element
    const transactionDiv = document.createElement("div");
    
    // Add the transaction details to the div element
    transactionDiv.innerHTML = `
        <div class="transaction-card px-4 py-3 bg-base-100 mb-4 w-full flex items-center">
            
                <div class="flex items-center gap-2">
                    <div class="wrapper w-[45px] h-[45px] rounded-full bg-[#080808]/10 flex items-center justify-center"> <img src="assets/opt-1.png" alt="" /> </div>
                    <div class="details">
                        <h3 class="font-semibold text-base text-neutral/70"> Bank Deposit </h3>
                        <p class="text-xs font-normal text-neutral/70"> Today at ${new Date().toLocaleTimeString()} </p>
                    </div>
                </div>
            
                <div class="ml-auto h-6 w-6 flex items-center justify-center text-neutral/50">
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
            </div>
    `;

    // Append the div element to the history-container
    historyContainer.appendChild(transactionDiv);

    console.log("New balance after adding money:", newBalance);
    alert(`Add money successful from ${bankName} 
    at ${new Date()}.
    Your new balance is ${newBalance}`);
});
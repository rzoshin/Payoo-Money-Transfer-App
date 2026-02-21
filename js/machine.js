function getValueFromInput(id) {
    const inputElement = document.getElementById(id);
    return inputElement.value;
}

function  getBalance() {
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    console.log("Current balance:", Number(balance));
    return Number(balance);
}

function setBalance(newBalance) {
    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = newBalance;
    console.log("Updated balance:", newBalance);
}

function showOnly(id) {
    const addMoney = document.getElementById("add-money");
    const cashOut = document.getElementById("cashout");
    const transferMoney = document.getElementById("transfer-money");
    const getBonus = document.getElementById("get-bonus");
    const payBill = document.getElementById("pay-bill");
    const transactionHistory = document.getElementById("transactions");

    cashOut.classList.add("hidden");
    addMoney.classList.add("hidden");
    transferMoney.classList.add("hidden")
    getBonus.classList.add("hidden");
    payBill.classList.add("hidden");
    transactionHistory.classList.add("hidden");

    const selected = document.getElementById(id);
    selected.classList.remove("hidden");
    
}
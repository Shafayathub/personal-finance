// Getting input
function getInput(inputID) {
    const input = document.getElementById(inputID);
    const inputNumber = parseFloat(input.value);
    return inputNumber;
}
// Calculating expenses and balances 
function calculate() {
    const income = getInput('income');
    const food = getInput('food');
    const rent = getInput('rent');
    const clothes = getInput('clothes');
    let expenses = 0;
    let balance = 0;
    if (food >= 0 && rent >= 0 && clothes >= 0) {
        expenses = food + rent + clothes;
        if (expenses <= income) {
            document.getElementById('total-expense').innerText = expenses;
        }
        else {
            document.getElementById('input-error').style.display = 'block';
            document.getElementById('balance-error').style.display = 'none';
            document.getElementById('input-error-2').style.display = 'block';
            document.getElementById('balance-error-2').style.display = 'none';
        }
        if (income >= expenses) {
            balance = income - expenses;
            document.getElementById('balance').innerText = balance;
            document.getElementById('balance-error').style.display = 'none';
            document.getElementById('input-error').style.display = 'none';
            document.getElementById('balance-error-2').style.display = 'none';
            document.getElementById('input-error-2').style.display = 'none';
            return balance;
        }
        else {
            document.getElementById('balance-error').style.display = 'block';
            document.getElementById('input-error').style.display = 'none';
            document.getElementById('balance-error-2').style.display = 'block';
            document.getElementById('input-error-2').style.display = 'none';
            document.getElementById('balance').innerText = 0;
        }
    }
    else {
        document.getElementById('input-error').style.display = 'block';
        document.getElementById('balance-error').style.display = 'none';
        document.getElementById('input-error-2').style.display = 'block';
        document.getElementById('balance-error-2').style.display = 'none';
    }
}
// Calculating savings and remaining balance
function calculateSavings() {
    const income = getInput('income');
    const savings = getInput('savings');
    const savingAmount = income * (savings / 100);
    const balance = calculate();
    if (balance >= savingAmount) {
        document.getElementById('saving-amount').innerText = savingAmount;
        document.getElementById('remaining-balance').innerText = balance - savingAmount;
        document.getElementById('balance-error').style.display = 'none';
        document.getElementById('input-error').style.display = 'none';
        document.getElementById('balance-error-2').style.display = 'none';
        document.getElementById('input-error-2').style.display = 'none';
    }
    else {
        document.getElementById('balance-error').style.display = 'block';
        document.getElementById('balance-error-2').style.display = 'block';
        document.getElementById('input-error').style.display = 'none';
        document.getElementById('input-error-2').style.display = 'none';
        document.getElementById('saving-amount').innerText = 0;
        document.getElementById('remaining-balance').innerText = 0;
    }
}

// BUttons clicking event
document.getElementById('calculate').addEventListener('click', function () {
    calculate();
})
document.getElementById('save').addEventListener('click', function () {
    calculateSavings();
})
function getInput(inputID) {
    const input = document.getElementById(inputID);
    const inputNumber = parseFloat(input.value);
    return inputNumber;
}
function calculate() {
    const income = getInput('income');
    const food = getInput('food');
    const rent = getInput('rent');
    const clothes = getInput('clothes');
    let expenses = 0;
    let balance = 0;
    if (food > 0 && rent > 0 && clothes > 0) {
        expenses = food + rent + clothes;
        if (income > expenses) {
            balance = income - expenses;
            console.log(balance);
        }
        else {
            document.getElementById('balance-error').style.display = 'block';
            document.getElementById('input-error').style.display = 'none';
        }
    }
    else {
        document.getElementById('input-error').style.display = 'block';
        document.getElementById('balance-error').style.display = 'none';
    }
}

document.getElementById('calculate').addEventListener('click', function () {
    calculate();
})
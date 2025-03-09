function getNumbers() {
    let num1 = parseFloat(document.getElementById("first-number").value);
    let num2 = parseFloat(document.getElementById("second-number").value);
    return { num1, num2 };
}

function displayResult(result) {
    let outputElement = document.getElementById("output");
    outputElement.innerHTML = `Result: ${result}`;
    outputElement.style.color = result < 0 ? "red" : "black"; 
}

function addition() {
    let { num1, num2 } = getNumbers();
    displayResult(num1 + num2);
}

function subtraction() {
    let { num1, num2 } = getNumbers();
    displayResult(num1 - num2);
}

function multiplication() {
    let { num1, num2 } = getNumbers();
    displayResult(num1 * num2);
}

function division() {
    let { num1, num2 } = getNumbers();
    if (num2 === 0) {
        alert("Division by zero is not allowed.");
        return;
    }
    displayResult(num1 / num2);
}

function power() {
    let { num1, num2 } = getNumbers();
    let result = 1;
    for (let i = 0; i < num2; i++) {
        result *= num1;
    }
    displayResult(result);
}

function clearFields() {
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";
    document.getElementById("output").innerHTML = "";
}

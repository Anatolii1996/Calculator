const add = (x, y) => (+x) + (+y);
const subtract = (x, y) => (+x) - (+y);
const multiply = (x, y) => (+x) * (+y);
const divide = (x, y) => (+x) / (+y);

function collectData() {
    let arg1 = Number(document.getElementById('first-arg').value);
    let arg2 = Number(document.getElementById("second-arg").value);
    let action = String(document.getElementById("math").value);
    return { arg1, arg2, action }
}

function showResult(result) {
    let resultArr = document.getElementById('result');
    resultArr.innerHTML = `${result} `;
}

function calc({ arg1, arg2, action }) {
    switch (action) {
        case "+":
            return add(arg1, arg2);
        case "-":
            return subtract(arg1, arg2);
        case "*":
            return multiply(arg1, arg2);
        case "/":
            return divide(arg1, arg2);

    }

}
function processCalc() {
    let collectedData = collectData();
    let calculatedData = calc(collectedData);
    showResult(calculatedData);
}


module.exports = { calc, add, subtract, multiply, divide, processCalc };


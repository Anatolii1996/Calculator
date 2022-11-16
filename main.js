let result = document.getElementById('result');
let res = 0;

const add = (x, y) => (+x) + (+y);
const subtract = (x, y) => (+x) - (+y);
const multiply = (x, y) => (+x) * (+y);
const divide = (x, y) => (+x) / (+y);


function calc() {
    let arg1 = Number(document.getElementById('first-arg').value);
    let arg2 = Number(document.getElementById("second-arg").value);
    let action = String(document.getElementById("math").value);

    switch (action) {
        case "+":
            res = add(arg1, arg2);
            break;
        case "-":
            res = subtract(arg1, arg2);
            break;
        case "*":
            res = multiply(arg1, arg2);
            break;
        case "/":
            res = divide(arg1, arg2);
            break;

    }

    result.innerHTML = `${res} `;
}


module.exports = { calc, add, subtract, multiply, divide };


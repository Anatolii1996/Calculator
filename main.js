let result = document.getElementById('result');
let res = 0;

function calc() {
    let arg1 = Number(document.getElementById('first-arg').value);
    let arg2 = Number(document.getElementById("second-arg").value);
    let action = String(document.getElementById("math").value);

    switch (action) {
        case "+":
            res = arg1 + arg2;
            break;
        case "-":
            res = arg1 - arg2;
            break;
        case "*":
            res = arg1 * arg2;
            break;
        case "/":
            res = arg1 / arg2;
            break;

    }

    result.innerHTML = `${res} `;
}




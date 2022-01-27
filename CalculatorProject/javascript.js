const add = function(number1,number2) {
    return number1 + number2;
};
  
const subtract = function(number1,number2) {
    return number1 - number2;
};

const multiply = function(number1,number2) {
    return number1 * number2;
};

const divide = function(number1,number2) {
    return number1 / number2;
};

const operate = function(number1,operator,number2) {

    if (operator === "+") {
        return add(number1,number2);
    } else if (operator === "-") {
        return subtract(number1,number2);
    } else if (operator === "*") {
        return multiply(number1,number2);
    } else if (operator === "/") {
        return divide(number1,number2);
    }
};


let buttons = document.getElementsByTagName("button");
let number1 = '';
let number2 = '';
let numberCounter = 0;
let operator = '';
let operationValue = 0;
let total = 0;
let divideByZero = ``;

for (i=0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        let displayValue = document.querySelector("input");

        if (displayValue.value == "ERROR DIVIDED BY 0") {
            displayValue.value = ``;
            number1 = '';
            number2 = '';
            operator = '';
            numberCounter = 0;
            operationValue = 0;
            total = 0;
            divideByZero = ``;
        } else if (displayValue.value == total) {
            displayValue.value = ``;
            total = 0;
        };

        if (this.id <= 9) {
            displayValue.value += this.id;

            if (numberCounter == 0) {
                number1 += this.id;
            } else if (numberCounter == 1) {
                number2 += this.id;
            };

        } else if (this.id == "+" || this.id == "-" || this.id == "*" || this.id == "/") {
            numberCounter += 1;

            if (number2 === `0` && divideByZero == `/`) {
                displayValue.value = "ERROR DIVIDED BY 0";
                numberCounter = 0;
                divideByZero = ``;
            } else if (numberCounter == 2) {
                number1 = Number(number1);
                number2 = Number(number2);

                operationValue = operate(number1,operator,number2);
                total = operationValue;
                total = Math.round((total + Number.EPSILON) * 1000) / 1000;
                displayValue.value = total;

                number1 = total;
                number2 = '';
                numberCounter = 1;
            };

            if (displayValue.value !== "ERROR DIVIDED BY 0") {
                displayValue.value += ` ${this.id} `;
                divideByZero = this.id;
                operator = this.id;
            }

        } else if (this.id == "clear") {
            displayValue.value = ``;
            number1 = '';
            number2 = '';
            operator = '';
            numberCounter = 0;
            operationValue = 0;
            total = 0;
            divideByZero = ``;

        } else if (this.id == "=") {
            numberCounter = 2;
            
            if (number1 === '' || operator === '' || number2 === '') {
                displayValue.value = ``;
                number1 = '';
                number2 = '';
                operator = '';
                numberCounter = 0;
                operationValue = 0;
                total = 0;
                divideByZero = ``;

            } else if (number2 === `0` && divideByZero == `/`) {
                displayValue.value = "ERROR DIVIDED BY 0";
                numberCounter = 0;
                divideByZero = ``;

            } else if (numberCounter == 2) {
                number1 = Number(number1);
                number2 = Number(number2);

                operationValue = operate(number1,operator,number2);
                total = operationValue;
                total = Math.round((total + Number.EPSILON) * 1000) / 1000;
                displayValue.value = total;

                number1 = '';
                number2 = '';
                operator = '';
                numberCounter = 0;
                operationValue = 0;
                divideByZero = ``;
            };

        };
    });
};
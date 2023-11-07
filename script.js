function operate(num1, operator, num2){
    switch (operator){
        case "+":
            return add(num1, num2);

        case "-":
            return subtract(num1, num2);

        case "x":
            return multiply(num1, num2);

        case "÷":
            return divide(num1, num2);
            
    }


}

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

const numBtns = document.querySelectorAll(".nums");
const opBtns = document.querySelectorAll(".ops");
const display = document.getElementById("display");

function displayValues(){
    let value = "";
    let operator = "";
    let equation = [];
    let temp;
    let result;

    numBtns.forEach(btn => {
        btn.addEventListener("click",()=> {
            value += btn.value;
            console.log(value);
            console.log(equation);
            if (equation.length == 2){
                result = (operate(Number(equation[0]), equation[1], Number(value)));
                display.textContent = result
                equation.pop();
                equation.pop();
                equation.push(result);
                
            }
        });
    }); 
    
    opBtns.forEach(btn => {
        btn.addEventListener("click",()=> {
            temp = value;
            value = "";
            operator = btn.value;
            console.log(operator);
            if (!result){
                equation.push(temp);
            }
            equation.push(operator);
            console.log(equation);

        });
    }); 
}

displayValues();

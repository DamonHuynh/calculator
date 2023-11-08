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




let equation = [];
let result;

function displayValues(){
    const numBtns = document.querySelectorAll(".nums");
    const opBtns = document.querySelectorAll(".ops");
    const display = document.getElementById("display");
    let value = "";

    numBtns.forEach(btn => {
        btn.addEventListener("click",()=> {
            value += btn.value;
            display.textContent = value;
            console.log(equation);
            
        });
    }); 
    
    opBtns.forEach(btn => {
        btn.addEventListener("click",()=> {
            
            equation.push(value);
            value = "";
            equation.push(btn.value);
            
            if(btn.value == "="){
                calculateFromArray();
                equation.pop();
                equation.pop();
                value = result;

            }
            if(equation.length === 4){
               calculateFromArray();
            }
            console.log(equation);
        });
    }); 
}
function calculateFromArray(){
    result = operate(Number(equation[0]), equation[1] ,Number(equation[2]));
    display.textContent = result;
    console.log(result);
    //clears out equation[] so its just the last operator
    equation = equation.slice(equation.length - 1, equation.length);
    equation.unshift(result);
    
}

displayValues();

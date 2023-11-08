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
    const clearBtn = document.getElementById("clear");
    const removeBtn = document.getElementById("delete");
    const decimalBtn = document.getElementById("decimal");
    const display = document.getElementById("display");
    let value = "";

    numBtns.forEach(btn => {
        btn.addEventListener("click",()=> {
            if(!value){
                value = "";
                value += btn.value;
            }
            else{
                value += btn.value;
            }
            display.textContent = value;
            
            
            console.log(equation);
            
        });
    }); 
    
    opBtns.forEach(btn => {
        btn.addEventListener("click",()=> {
            if(value){
                equation.push(value);
                value = "";
                equation.push(btn.value);
            
                //make sure that "num = " is inputted
                if(btn.value == "=" && equation.length > 1){
                    calculateFromArray();
                    equation.pop();
                    equation.pop();
                    value = result;

                }
            }
            if(equation.length === 4){
               calculateFromArray();
            }
            console.log(equation);
        });
    }); 

    clearBtn.addEventListener("click", () => {
        value = "";
        display.textContent = value;
        equation = [];
    });

    removeBtn.addEventListener("click", () => {
        value = value.slice(0, value.length - 1);
        display.textContent = value;
        
    });

    decimalBtn.addEventListener("click", () => {
        if(!value.includes(".")){
            value += decimalBtn.value;
            display.textContent = value;
        }
        
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

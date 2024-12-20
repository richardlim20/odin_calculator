const add = (num1, num2) => {
    result = num1 + num2;
    return result;
}

const subtract = (num1, num2) => {
    result = num1 - num2;
    return result;
}

const multiply = (num1, num2) => {
    result = num1 * num2;
    return result;
}

const divide = (num1, num2) => {
    result = num1 / num2;
    return result;
}

const Operations = {
    Add: "+",
    Subtract: "-",
    Multiply: "*",
    Divide: "/"
}

const operate = (operation, num1, num2) => {
    switch(operation){
        case Operations.Add:
            return add(num1, num2);
        case Operations.Subtract:
            return subtract(num1, num2);
        case Operations.Multiply:
            return multiply(num1, num2);
        case Operations.Divide:
            return divide(num1, num2);
    }
}

const results = document.getElementById("results");
let currentNumber = "";
let previousNumber = "";
let operation = "";
let activeOperation = null;

const calculatorContainer = document.getElementById("calculator-container");
calculatorContainer.addEventListener("click", (e)=>{
    const target = e.target;
    if (target.classList.contains("number")){
        if(target.textContent === "." && currentNumber.includes(".")||
        target.textContent === "." && currentNumber === ""){}
        else {
            currentNumber += target.textContent;
            results.textContent = currentNumber;
        }
    }

    if(target.classList.contains("operator")){
        if (currentNumber != ""){
            operation = target.textContent;
            target.classList.add("active");
            activeOperation = target;
            previousNumber = currentNumber;
            currentNumber = "";
        }
        
    }

    if (target.classList.contains("action")){
        const action = target.textContent;

        if (action === "AC") {
            currentNumber = "";
            previousNumber = "";
            operation = null;
            results.textContent = "0";
            activeOperation.classList.remove("active")
        } 
        else if (action === "DEL") {
            currentNumber = currentNumber.slice(0, -1);
            results.textContent = currentNumber || "0";
        } 
        else if (action === "=") {
            if (currentNumber && previousNumber){
                console.log(parseFloat(previousNumber), parseFloat(currentNumber), operation)
                result = operate(operation, parseFloat(previousNumber), parseFloat(currentNumber));
                currentNumber = result;
                results.textContent = currentNumber;
                activeOperation.classList.remove("active")
            }
        }
    }
})
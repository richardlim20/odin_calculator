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

console.log(operate(Operations.Divide, 5, 3));   
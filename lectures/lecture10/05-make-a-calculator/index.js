const addNumbers = (ev) => {
    // Your job: 
    // 1. Access the first number that the user typed in and store it
    //    as a variable.
    let firstNumber = document.querySelector("#num1").value;
    firstNumber = Number(firstNumber);
    let secondNumber = document.querySelector("#num2").value;
    secondNumber = Number(secondNumber);
    let result = firstNumber + secondNumber;


    document.querySelector("#answer").innerHTML = result;
    // 2. Access the first number that the user typed in and store it
    //    as a variable.
    // 3. Convert the values stored inside of the two variables to a 
    //    number (so that you can do math)!
    // 4. Add the two numbers together.
    // 5. Write the result to the #answer section
}

const subtractNumbers = (ev) => {
    // Same as above but subtract!
    let firstNumber = document.querySelector("#num1").value;
    firstNumber = Number(firstNumber);
    let secondNumber = document.querySelector("#num2").value;
    secondNumber = Number(secondNumber);
    let result = firstNumber - secondNumber;


    document.querySelector("#answer").innerHTML = result;
}

const multiplyNumbers = (ev) => {
    // Same as above but multiply!
}

const divideNumbers = (ev) => {
    // Same as above but divide!
}


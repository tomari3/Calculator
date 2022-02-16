let add = (...theArgs) => {
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
};
// Add
// console.log("add ", add(1, 2, 3, 4));

// Subtract
let subtract = (...theArgs) => {
  return theArgs.reduce((previous, current) => {
    return previous - current;
  });
};
// console.log("subtract ", subtract(1, 2, 3, 4));

// Multiply
let multiply = (...theArgs) => {
  return theArgs.reduce((previous, current) => {
    return previous * current;
  }, 1);
};
// console.log("multiply ", multiply(1, 2, 3, 4));

// Divide
let divide = (...theArgs) => {
  return theArgs.reduce((previous, current) => {
    return previous / current;
  });
};
// console.log("divide ", divide(10, 2));

// Percentage - having issues
let percentage = (num1, num2) => {};
// console.log("percentage ", percentage(100));

// Parenthesis

// Factorial
let factorial = (num) => {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
};
// console.log("factorial ", factorial(5));

// Power2
let power2 = (num) => {
  return num * num;
};
// console.log("power2 ", power2(2));

// Power3
let power3 = (num) => {
  return num * num * num;
};
// console.log("power3 ", power3(2));

// Power*num
let power = (initialNum, powerNum) => {
  return Math.pow(initialNum, powerNum);
};

// if power when powerNum then initialNum ^ powerNum*newPowerNum;

// console.log("power ", power(2, 5));
// Power recursion

// Root
let squareRoot = (a) => Math.sqrt(a);
// console.log("square root ", squareRoot(9));

// Square root
let cubicRoot = (a) => Math.cbrt(a);
// console.log("cubic root ", cubicRoot(1000));

// Pie
const pi = Math.PI;
// console.log("pie ", pi);

// Dot
const dot = ".";
// Equal
// Backspace
// AC

function doOperation(func, a, b) {
  sum = func(+a, +b);
  return sum;
}

// Setting front
// output doc
const mainDisplayDoc = document.getElementById("main-display");
const upperDisplayDoc = document.getElementById("upper-display");

// global operations doc
const acDoc = document.getElementById("AC");

// global operations function

// main operations doc
const addDoc = document.getElementById("add");
const subtractDoc = document.getElementById("subtract");
const multiplyDoc = document.getElementById("multiply");
const divideDoc = document.getElementById("divide");
const equalDoc = document.getElementById("equal");
const mainOpsDoc = document.querySelectorAll("#main-operations button");

const operationSigns = ["+", "-", "*", "/"];
let beforeOperand = "";
let afterOperand = 0;
let onDisplay = "";
let onUpperDisplay = "";
let lastOperator = "";
let onOperator;

// numbers
const numbersDoc = [...document.getElementsByClassName("number")];

for (let i = 0; i < numbersDoc.length; i++) {
  numbersDoc[i].addEventListener("click", (e) => {
    let inputNumber;
    let sum;

    inputNumber = numbersDoc[i].id;
    if (isLastOperation(operationSigns, onDisplay)) {
      afterOperand = inputNumber;
      sum = doOperation(mainOpsArr[lastOperator], beforeOperand, afterOperand);
      onUpperDisplay = sum;
      upperDisplayDoc.textContent = sum;
      onDisplay += inputNumber;
      mainDisplayDoc.textContent = onDisplay;
      console.log("operation", beforeOperand);
      console.log("operation", afterOperand);
      return;
    }
    if (afterOperand) {
      afterOperand += inputNumber;
      onDisplay += inputNumber;
      sum = doOperation(mainOpsArr[lastOperator], beforeOperand, afterOperand);
      mainDisplayDoc.textContent = onDisplay;
      upperDisplayDoc.textContent = sum;
      console.log("number", beforeOperand);
      console.log("number", afterOperand);
      return;
    }
    beforeOperand += inputNumber;
    onDisplay += inputNumber;
    mainDisplayDoc.textContent = onDisplay;
  });
}

for (let i = 0; i < mainOpsDoc.length - 1; i++) {
  mainOpsDoc[i].addEventListener("click", (e) => {
    if (isLastOperation(operationSigns, onDisplay)) {
      return;
    }
    if (
      (mainOpsDoc[i].id == "multiply" || mainOpsDoc[i].id == "divide") &&
      afterOperand == 0
    ) {
      afterOperand = 1;
    }
    lastOperator = i;
    console.log("+ before", beforeOperand);
    console.log("+ after", afterOperand);
    let operation;
    let operationSign;
    operation = `${mainOpsDoc[i].id}()`;
    operationSign = mainOpsDoc[i].textContent;
    onDisplay += operationSign;
    mainDisplayDoc.textContent += operationSign;
    beforeOperand = doOperation(
      mainOpsArr[lastOperator],
      beforeOperand,
      afterOperand
    );
  });
}

let isLastOperation = (substring, string) => {
  if (substring.some((sign) => string.charAt(string.length - 1) == sign)) {
    return true;
  }
};
let isIncludeOperation = (substring, string) => {
  if (substring.some((sign) => string.includes(sign))) {
    return true;
  }
};

acDoc.addEventListener("click", (e) => {
  AC();
});
let AC = () => {
  beforeOperand = "";
  afterOperand = 0;
  onDisplay = "";
  onUpperDisplay = "";
  lastOperator = "";
  onOperator = "";
  mainDisplayDoc.textContent = 0;
  upperDisplayDoc.textContent = "waiting";
};
let mainOpsArr = [add, subtract, multiply, divide];

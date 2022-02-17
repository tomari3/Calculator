// Main Operations
let add = (...theArgs) => {
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
};

let subtract = (...theArgs) => {
  return theArgs.reduce((previous, current) => {
    return previous - current;
  });
};

let multiply = (...theArgs) => {
  return theArgs.reduce((previous, current) => {
    return previous * current;
  }, 1);
};

let divide = (...theArgs) => {
  return theArgs.reduce((previous, current) => {
    return previous / current;
  });
};

let percentage = (num1, num2) => {
  let sum = (num1 / 100) * num2;
  return sum;
};

let factorial = (num) => {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
};

let power2 = (num) => {
  return num * num;
};

let power3 = (num) => {
  return num * num * num;
};

let power = (initialNum, powerNum) => {
  return Math.pow(initialNum, powerNum);
};

let squareRoot = (num) => Math.sqrt(num);

let cubicRoot = (num) => Math.cbrt(num);

let PI = (num) => {
  num * Math.PI;
};
const dot = ".";

function doOperation(func, a, b) {
  sum = func(+a, +b);
  return sum;
}

// Setting front

// output doc
const mainDisplayDoc = document.getElementById("main-display");
const upperDisplayDoc = document.getElementById("upper-display-num");

// global operations doc
const acDoc = document.getElementById("AC");
const percentageDoc = document.getElementById("percentage");

// global operations function
const history = document.getElementById("history");
const historyBox = document.getElementById("history-container");
const historyList = document.getElementById("history-list");
const historyHeader = document.querySelector("#history-list h1");
const historyText = document.createElement("p");

// main operations doc
const addDoc = document.getElementById("add");
const subtractDoc = document.getElementById("subtract");
const multiplyDoc = document.getElementById("multiply");
const divideDoc = document.getElementById("divide");
const equalDoc = document.getElementById("equal");
const mainOpsDoc = document.querySelectorAll("#main-operations button");

// Operands list
let beforeOperand = "";
let afterOperand = 0;
let lastOperator = "";
let pastCalc = [];

// Display List
let onDisplay = "";
let onUpperDisplay = "";
let pastCalcDisplay = "";

const operationSigns = ["+", "-", "*", "/"];

// numbers
const numbersDoc = [...document.getElementsByClassName("number")];

for (let i = 0; i < numbersDoc.length; i++) {
  numbersDoc[i].addEventListener("click", (e) => {
    let inputNumber;
    let currSum;
    let sum;

    inputNumber = numbersDoc[i].id;
    if (isLastOperation(operationSigns, onDisplay)) {
      onDisplay += inputNumber; // log on display
      mainDisplayDoc.textContent += inputNumber; // show on display
      afterOperand = inputNumber; // log on after operand
      currSum = doOperation(
        //get current sum
        mainOpsArr[lastOperator],
        beforeOperand,
        afterOperand
      );
      onUpperDisplay = currSum; // log current sum to upper display
      upperDisplayDoc.textContent = onUpperDisplay; // show upper display
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

    onDisplay += inputNumber; // log on display
    mainDisplayDoc.textContent = onDisplay; // show on display
    beforeOperand += inputNumber; // log on beforeOperand
    onUpperDisplay += inputNumber; // log on upperDisplay
  });
}
// Main Operations
for (let i = 0; i < mainOpsDoc.length - 1; i++) {
  mainOpsDoc[i].addEventListener("click", (e) => {
    if (isLastOperation(operationSigns, toString(onDisplay))) {
      return;
    }
    let operationSign;
    operationSign = mainOpsDoc[i].textContent;
    if (isIncludeOperation(operationSigns, toString(onDisplay))) {
      beforeOperand = doOperation(
        mainOpsArr[lastOperator],
        beforeOperand,
        afterOperand
      );
      onDisplay += operationSign;
      mainDisplayDoc.textContent += operationSign;
      afterOperand = 0;
      lastOperator = i;
      return;
    }
    onDisplay += operationSign;
    mainDisplayDoc.textContent += operationSign;
    lastOperator = i;
  });
}

percentageDoc.addEventListener("click", (e) => {
  if (isLastOperation(operationSigns, toString(onDisplay))) {
    return;
  }
  let operationSign;
  operationSign = "%";
  if (isIncludeOperation(operationSigns, toString(onDisplay))) {
    beforeOperand = doOperation(
      mainOpsArr[lastOperator],
      beforeOperand,
      afterOperand
    );
    onDisplay += operationSign;
    mainDisplayDoc.textContent += operationSign;
    afterOperand = 0;
    lastOperator = 3;
    return;
  }
  onDisplay += operationSign;
  mainDisplayDoc.textContent += operationSign;
  lastOperator = 3;
});

let isLastOperation = (substring, string) => {
  if (substring.some((sign) => string.charAt(string.length - 1) == sign)) {
    return true;
  }
};
let isIncludeOperation = (substring, string) => {
  string = toString(string);
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
  upperDisplayDoc.textContent = "result";
};

let printPast = (solution) => {
  let a = document.createElement("p");
  a.textContent = solution;
  historyList.appendChild(a);
};

mainOpsDoc[4].addEventListener("click", (e) => {
  let sum;
  sum = doOperation(mainOpsArr[lastOperator], beforeOperand, afterOperand);
  historyHeader.textContent = "history";
  pastCalcEquation = `${onDisplay} = ${sum}`;
  pastCalc.push(pastCalcEquation);
  printPast(pastCalcEquation);
  onUpperDisplay = onDisplay;
  onDisplay = sum;
  mainDisplayDoc.textContent = onDisplay;
  upperDisplayDoc.textContent = onUpperDisplay;
  beforeOperand = sum;
  afterOperand = 0;
});

function toggleStyle(el, prop, style1, style2) {
  el.style[prop] = el.style[prop] === style1 ? style2 : style1;
}

history.addEventListener("click", (e) => {
  console.log("hey");
  toggleStyle(historyBox, "width", "15rem", "0");
  toggleStyle(historyBox, "opacity", "100", "0");
});

let debug = () => {
  document.body.addEventListener("click", (e) => {
    console.log("action start");
    console.log("before ", beforeOperand);
    console.log("after ", afterOperand);
    console.log("onDisplay ", onDisplay);
    console.log("lastOp ", mainOpsArr[lastOperator]);
    console.log("action end");
  });
};

let mainOpsArr = [add, subtract, multiply, divide];

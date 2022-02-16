// Add
let add = (...theArgs) => {
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
};
console.log("add ", add(1, 2, 3, 4));

// Subtract
let subtract = (...theArgs) => {
  return theArgs.reduce((previous, current) => {
    return previous - current;
  });
};
console.log("subtract ", subtract(1, 2, 3, 4));

// Multiply
let multiply = (...theArgs) => {
  return theArgs.reduce((previous, current) => {
    return previous * current;
  });
};
console.log("multiply ", multiply(1, 2, 3, 4));

// Divide
let divide = (...theArgs) => {
  return theArgs.reduce((previous, current) => {
    return previous / current;
  });
};
console.log("divide ", divide(10, 2));

// Percentage - having issues
let percentage = (num1, num2) => {};
console.log("percentage ", percentage(100));

// Parenthesis

// Factorial
let factorial = (num) => {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
};
console.log("factorial ", factorial(5));

// Power2
let power2 = (num) => {
  return num * num;
};
console.log("power2 ", power2(2));

// Power3
let power3 = (num) => {
  return num * num * num;
};
console.log("power3 ", power3(2));

// Power*num
let power = (initialNum, powerNum) => {
  return Math.pow(initialNum, powerNum);
};

// if power when powerNum then initialNum ^ powerNum*newPowerNum;

console.log("power ", power(2, 5));
// Power recursion

// Root
let squareRoot = (a) => Math.sqrt(a);
console.log("square root ", squareRoot(9));

// Square root
let cubicRoot = (a) => Math.cbrt(a);
console.log("cubic root ", cubicRoot(1000));

// Pie
const pi = Math.PI;
console.log("pie ", pi);

// Dot
const dot = ".";
// Equal
// Backspace
// AC

// Setting front
// output doc
const mainDisplayDoc = document.getElementById("main-display");
const upperDisplayDoc = document.getElementById("upper-display");

// global operations doc
const acDoc = document.getElementById("AC");

// global operations function
acDoc.addEventListener("click", (e) => {
  userInput = 0;
  mainDisplayDoc.textContent = userInput;
});

// main operations doc
const addDoc = document.getElementById("add");
const subtractDoc = document.getElementById("subtract");
const multiplyDoc = document.getElementById("multiply");
const divideDoc = document.getElementById("divide");
const equalDoc = document.getElementById("equal");

// numbers
const numbersDoc = [...document.getElementsByClassName("number")];
let userInput = 0;
mainDisplayDoc.textContent = userInput;

for (let i = 0; i < numbersDoc.length; i++) {
  userInput = "";
  numbersDoc[i].addEventListener("click", (e) => {
    userInput += numbersDoc[i].id;
    mainDisplayDoc.textContent = userInput;
  });
}
// main operations event

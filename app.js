const display = document.querySelector(".display");
let current = "";
let previous = "";
let operator = null;

//pressing numbers
document.addEventListener("click", (e) => {
  if (current.length > 15) {
    alert("this number is too big!");
    return;
  }
  if (e.target.classList.contains("number")) {
    if (current.length == 0 && e.target.innerText == "0") {
      return;
    }
    current += e.target.innerText;
    display.innerText = current;
  }
});
//pressing dot
const dotBtn = document.querySelector("#dot");
dotBtn.addEventListener("click", () => {
  let index = current.indexOf(".");
  if (index == -1) {
    current += ".";
    display.innerText = current;
  } else {
    alert("this number is already a double");
  }
});
//pressing clear
const clearBtn = document.querySelector("#clear__btn");
clearBtn.addEventListener("click", () => {
  current = "";
  previous = "";
  operator = null;
  display.innerText = current;
});
//pressing delete

const deleteBtn = document.querySelector("#dlt__btn");
deleteBtn.addEventListener("click", () => {
  if (current.length >= 1) {
    current = current.slice(0, -1);
    display.innerText = current;
  }
});

const multiply = (a, b) => {
  return a * b;
};
const sum = (a, b) => {
  return a + b;
};
const minus = (a, b) => {
  return a - b;
};

const divide = (a, b) => {
  return a / b;
};

// const calculate = (a, b, operator) => {};

// calculate(10, 5, "+");
const processOperator = (e) => {
  if (operator == null) {
    operator = e.target.innerText;
    previous = current;
    current = "";
    display.innerHTML = operator;
  } else {
    operator = e.target.innerHTML;
    display.innerHTML = operator;
  }
};

const processOperation = () => {
  if (current == "" || previous == "") {
    return;
  }

  let result;
  let a = parseFloat(previous);
  let b = parseFloat(current);
  switch (operator) {
    case "-":
      result = minus(a, b);
      break;
    case "+":
      result = sum(a, b);
      break;
    case "x":
      result = multiply(a, b);
      break;
    case "*":
      result = multiply(a, b);
      break;
    default:
      result = divide(a, b);
      break;
  }
  console.log("from result");
  previous = current;
  current = result.toString();
  display.innerHTML = current.length >= 15 ? "error" : current;
};
// keypress event listeners
document.addEventListener("keypress", (e) => {
  if (current.length > 15) {
    alert("this number is too big!");
    return;
  }
  let input = e.key;
  if (!isNaN(input)) {
    if (current.length == 0 && input == "0") {
      return;
    }
    current += input;
    display.innerHTML = current;
  } else if (input == ".") {
    console.log("here");
    let index = current.indexOf(".");
    if (index == -1) {
      current += ".";
      display.innerText = current;
    } else {
      alert("this number is already a double");
    }
  } else if (
    input == "-" ||
    input == "x" ||
    input == "*" ||
    input == "/" ||
    input == "+"
  ) {
    operator = input == "*" ? "x" : e.key;
    previous = current;
    current = "";
    display.innerHTML = operator;
  } else if ((input = "Enter")) {
    console.log(previous);
    console.log(current);
    console.log(operator);
    processOperation();
  }
});

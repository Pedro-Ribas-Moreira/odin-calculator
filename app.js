const display = document.querySelector(".display");
let current = "";
let previous = "";
let operator = null;

//pressing numbers
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("number")) {
    current += e.target.innerText;
    if (current.length > 15) {
      alert("this number is too big!");
      return;
    }
    display.innerText = current;
  }
});
//pressing operators
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("operator")) {
    if (operator == null) {
      operator = e.target.innerText;
      previous = current;
      current = "";
    } else {
      let result;
      let a = parseFloat(previous);
      let b = parseFloat(current);

      if (operator == "-") {
        result = minus(a, b);
      } else if (operator == "x") {
        result = multiply(a, b);
      } else if (operator == "+") {
        result = sum(a, b);
      } else {
        result = divide(a, b);
      }
      previous = result;
      current = "";
      display.innerHTML = result.toString();
    }
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
    default:
      result = divide(a, b);
      break;
  }
  operator = null;
  previous = current;
  current = result.toString();
  display.innerHTML = current;
};

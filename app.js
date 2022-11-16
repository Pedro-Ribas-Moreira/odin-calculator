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
// document.addEventListener("click", (e) => {
//   if (e.target.classList.contains("operator")) {
//   }
// });
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

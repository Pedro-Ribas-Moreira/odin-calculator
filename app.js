const result = document.querySelector(".result");
let current = [];
let previous = [];
let operator = null;

//pressing numbers
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("number")) {
    current.push(e.target.innerText);
    if (current.length > 15) {
      alert("this number is too big!");
      return;
    }
    result.innerText = current.join("");
  }
});
//pressing operators
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("operator")) {
      if
    operator = e.target.innerText;
    previous = [...current].join("");
    current.length = 0;
    result.innerText = current.join("");
  }
});
//pressing dot
const dotBtn = document.querySelector("#dot");
dotBtn.addEventListener("click", () => {
  let index = current.indexOf(".");
  if (index == -1) {
    const dot = ".";
    current.push(dot);
    result.innerText = current.join("");
  } else {
    alert("this number is already a double");
  }
});
//pressing clear
const clearBtn = document.querySelector("#clear__btn");
clearBtn.addEventListener("click", () => {
  current.length = 0;
  result.innerText = current.join("");
});
//pressing delete

const deleteBtn = document.querySelector("#dlt__btn");
deleteBtn.addEventListener("click", () => {
  if (current.length >= 1) {
    current.pop();
    result.innerText = current.join("");
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

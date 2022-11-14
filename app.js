const result = document.querySelector(".result");
let current = [];
let previous = [];

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
//pressing dot
//pressing clear
const clearBtn = document.querySelector("#clear__btn");

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

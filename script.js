"use strict";
// ? VARIABLES //
const tipAmount = document.querySelector(".tip");
const totalAmount = document.querySelector(".total");
const bill = document.querySelector("#bill");
const people = document.querySelector("#people");
const label = document.querySelector(".label");
const btn = document.querySelectorAll(".btn");
const custom = document.querySelector("#custom");
const btn2 = document.querySelector(".btn2");

// * Function used below * //
const peopleWarning = function () {
  people.classList.add("wrong");
  label.classList.remove("hidden");
};
const showTips = function (tip) {
  let tipFinal = tip / Number(people.value);
  let totalFinal = (Number(bill.value) + tip) / Number(people.value);
  tipAmount.textContent = "$" + tipFinal.toFixed(2);
  totalAmount.textContent = "$" + totalFinal.toFixed(2);
};

// ! Calculator mechanism with normal buttons ! //
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function calculateTips() {
    if (people.value > 0) {
      let tip = Number(bill.value) * (parseFloat(btn[i].textContent) / 100);
      showTips(tip);
    }
    // ! Not giving correct amount of people --> show warning ! //
    else {
      peopleWarning();
    }
  });
}
// ! Calculator mechanism with *** custom input ***  ! //
custom.addEventListener("input", function () {
  if (people.value > 0) {
    let tip = Number(bill.value) * Number(custom.value / 100);
    showTips(tip);
  } else {
    peopleWarning();
  }
});

// * Number of people restoring styling when changed over 0 *
people.addEventListener("input", function () {
  if (people.value > 0) {
    people.classList.remove("wrong");
    label.classList.add("hidden");
  }
});
// ! RESET BUTTON ! //
btn2.addEventListener("click", function () {
  bill.value = "";
  custom.value = "";
  people.value = "";
  tipAmount.textContent = "$0.00";
  totalAmount.textContent = "$0.00";
  people.classList.remove("wrong");
  label.classList.add("hidden");
});

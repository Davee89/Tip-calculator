"use strict";
// ? VARIABLES //
const tipAmount = document.querySelector(".tip");
const totalAmount = document.querySelector(".total");
const bill = document.querySelector("#bill");
const people = document.querySelector("#people");
const label = document.querySelector(".label");
const btn = document.querySelectorAll(".btn");
const custom = document.querySelector("#custom");

// * Function used below * //
const peopleWarning = function () {
  people.classList.add("wrong");
  label.classList.remove("hidden");
};
const showTips = function (tip) {
  tipAmount.textContent = tip / Number(people.value);
  totalAmount.textContent = (Number(bill.value) + tip) / Number(people.value);
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

"use strict";
// ? VARIABLES //
const tipAmount = document.querySelector(".tip");
const totalAmount = document.querySelector(".total");
const bill = document.querySelector("#bill");
const people = document.querySelector("#people");
const label = document.querySelector(".label");
let tipPercentage;
const btn = document.querySelectorAll(".btn");

// ! Calculator mechanism ! //
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    if (people.value > 0) {
      let tip = Number(bill.value) * (parseFloat(btn[i].textContent) / 100);
      tipAmount.textContent = tip / Number(people.value);
      totalAmount.textContent = (Number(bill.value) + tip) / Number(people.value);
    }
    // ! Not giving correct amount of people cause warning ! //
    else {
      people.classList.add("wrong");
      label.classList.remove("hidden");
    }
  });
}

// * Number of people restoring styling when changed over 0 *
people.addEventListener("input", function () {
  if (people.value > 0) {
    people.classList.remove("wrong");
    label.classList.add("hidden");
  }
});

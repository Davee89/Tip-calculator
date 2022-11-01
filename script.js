"use strict";
const tipAmount = document.querySelector(".tip");
const totalAmount = document.querySelector(".total");
const bill = document.querySelector("#bill");
const people = document.querySelector("#people");
const label = document.querySelector(".label");
let tipPercentage;
const btn = document.querySelectorAll(".btn");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("active", givePrecentage);
}
people.addEventListener("input", function () {
  if (people.value > 0) {
    people.classList.remove("wrong");
    label.classList.add("hidden");
  } else {
    totalAmount.textContent = "";
    tipAmount.textContent = "";
  }
});

bill.addEventListener("input", function (e) {
  let tot = Number(e.target.value) + Number(tipAmount.textContent);
  let tip = Number(e.target.value) * tipPercentage;
  if (people.value > 0) {
    totalAmount.textContent = tot;
  } else {
    totalAmount.textContent = "";
    tipAmount.textContent = "";
    people.classList.add("wrong");
    label.classList.remove("hidden");
  }
});

function givePrecentage(e) {
  return (tipPercentage = e.target.textContent);
}

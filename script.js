"use strict";
// ? VARIABLES //
const tipAmount = document.querySelector(".tip");
const totalAmount = document.querySelector(".total");
const billInput = document.querySelector("#bill");
const peopleInput = document.querySelector("#people");
const label = document.querySelector(".label");
const buttons = document.querySelectorAll(".btn");
const customInput = document.querySelector("#custom");
const buttonReset = document.querySelector(".btn2");
const dollarSign = document.querySelector(".calculator__amount span");

/// * Function used below * ///
const peopleWarning = () => {
  peopleInput.classList.add("wrong");
  label.classList.remove("hidden");
};
const showTips = (tip) => {
  let tipFinal = tip / peopleInput.valueAsNumber;
  let totalFinal = billInput.valueAsNumber + tip / peopleInput.valueAsNumber;
  tipAmount.innerText = "$" + tipFinal.toFixed(2);
  totalAmount.innerText = "$" + totalFinal.toFixed(2);
};

// ! Calculator mechanism with normal buttons ! //
buttons.forEach((button) =>
  button.addEventListener("click", function () {
    if (peopleInput.value) {
      let tip = billInput.valueAsNumber * (parseFloat(button.textContent) / 100);
      showTips(tip);
    }
    // ! Not giving correct amount of people --> show warning ! //
    else {
      peopleWarning();
    }
  })
);

// ! Calculator mechanism with *** custom input ***  ! //
customInput.addEventListener("input", function () {
  if (peopleInput.value) {
    let tip = (billInput.valueAsNumber * customInput.valueAsNumber) / 100;
    showTips(tip);
  } else {
    peopleWarning();
  }
});

// * Number of people restoring styling when changed over 0 *
peopleInput.addEventListener("input", function () {
  if (peopleInput.value) {
    peopleInput.classList.remove("wrong");
    label.classList.add("hidden");
  }
});
// ! RESET BUTTON ! //
buttonReset.addEventListener("click", function () {
  billInput.value = "";
  customInput.value = "";
  peopleInput.value = "";
  tipAmount.textContent = "$0.00";
  totalAmount.textContent = "$0.00";
  peopleInput.classList.remove("wrong");
  label.classList.add("hidden");
});

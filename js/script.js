/*! Copyright © 2026 Midnight Developer (Tiffany Schuman) All Rights Reserved. 
Licensed under the Midnight Developer Proprietary License. 
See LICENSE for details */

const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");

checkBtn.addEventListener("click", () => {
  const value = textInput.value;
  if (textInput.value === "") {
    alert("Please input a value");
    return;
  }

  const clean = value.toLowerCase().replace(/[^a-z0-9]/gi, "");

  const reversed = clean.split("").reverse().join("");

  if (clean === reversed) {
    result.innerText = `${value} is a palindrome`;
  } else {
    result.innerText = `${value} is not a palindrome`;
  }
});
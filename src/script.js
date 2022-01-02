import nConversion from "./helpers/nConversion.js";

const inputForm = document.getElementById("inputContainer");
const inputValue = document.getElementById("inputValue");
const numberConverted = document.getElementById("numberConverted");

inputForm.onsubmit = (e) => {
  e.preventDefault();
  const number = inputValue.value
  inputValue.value = ''
  return (numberConverted.innerHTML = `<p>${number}</p>
    <h2>${nConversion(number)}</h2>`);
};

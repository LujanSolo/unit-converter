const convertBtn = document.getElementById("convert-btn");
const userInput = document.getElementById("user-input");
const lengthReadout = document.getElementById("lengths");
const volumeReadout = document.getElementById("volume");
const massReadout = document.getElementById("mass");

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


convertBtn.addEventListener("click", () => {
  let lengthResult = "";
  let volumeResult = "";
  let massResult = "";
  
  lengthResult = `<p class="result-fields">${userInput.value} meters = ${(userInput.value * 3.281).toFixed(3)} feet | ${userInput.value} feet = ${(userInput.value / 3.281).toFixed(3)} meters</p>`;

  volumeResult = `<p class="result-fields">${userInput.value} liters = ${(userInput.value * 0.264).toFixed(3)} gallons | ${userInput.value} gallons = ${(userInput.value / 0.264).toFixed(3)} liters</p>`;

  massResult = `<p class="result-fields">${userInput.value} kilos = ${(userInput.value * 2.204).toFixed(3)} pounds | ${userInput.value} pounds = ${(userInput.value / 2.204).toFixed(3)} kilos</p>`;



  lengthReadout.innerHTML += lengthResult;
  volumeReadout.innerHTML += volumeResult;
  massReadout.innerHTML += massResult;
})
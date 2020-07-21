console.log("Witam, amator front-end zgłasza się :)");

let heightElement = document.querySelector(".js-height");
let weightElement = document.querySelector(".js-weight");
let formElement = document.querySelector(".js-form");
let bmiElement = document.querySelector(".js-bmi");

formElement.addEventListener("submit", (event) => {
      event.preventDefault();

      let weight = weightElement.value;
      let height = heightElement.value;
      
      let bmi = weight / ((height / 100) ** 2);

      bmiElement.innerText = bmi.toFixed(3);
})
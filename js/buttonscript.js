let body = document.querySelector(".body");
let buttonChangeBackground = document.querySelector(".js-button__changeBackground");
let buttonChangeFont = document.querySelector(".js-button__changeFont");
let buttonRemove = document.querySelector(".js-button__removeEvrything");

buttonChangeBackground.addEventListener("click", () => {
      body.classList.toggle("js-body__changeBackground")

});

buttonChangeFont.addEventListener("click", () => {
      body.classList.toggle("js-body__changeFont")
});

buttonRemove.addEventListener("click", () => {
      body.remove();
})


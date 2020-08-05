{
      {
            const buttonChangeBackground = document.querySelector(".js-button__changeBackground");
            const body = document.querySelector(".body");

            buttonChangeBackground.addEventListener("click", () => {
                  body.classList.toggle("js-body__changeBackground");

                  if (body.classList.contains("js-body__changeBackground")) {

                        buttonChangeBackground.innerText = "Usun obramowanie"
                  }

                  else {
                        buttonChangeBackground.innerText = "Dodaj obramowanie"
                  }
            });
      };

      {
            const buttonChangeFont = document.querySelector(".js-button__changeFont");
            const body = document.querySelector(".body");

            buttonChangeFont.addEventListener("click", () => {
                  body.classList.toggle("js-body__changeFont");

                  if (body.classList.contains("js-body__changeFont")) {

                        buttonChangeFont.innerText = "Stary Font"
                  }

                  else {
                        buttonChangeFont.innerText = "Nowy Font"
                  }
            });
      };

      {
            const buttonRemove = document.querySelector(".js-button__removeEvrything");
            const body = document.querySelector(".body");

            buttonRemove.addEventListener("click", () => {
                  body.remove();
            })
      };


}





/*
      OldCode

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

*/
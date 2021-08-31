/* ---- FORM ---- */
const formContact = document.getElementById("formContact");

const inputs = document.querySelectorAll("#formContact input");
const textarea = document.getElementById("message");

const errorName = document.getElementById("errorName");
const errorEmail = document.getElementById("errorEmail");
const errorMessage = document.getElementById("errorMessage");

const camps = {
  name: false,
  email: false,
  message: false,
};

function validarEmail(email) {
  let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email) ? true : false;
}

const validateCamp = (e) => {
  switch (e.target.name) {
    case "name":
      if (e.target.value == "") {
        errorName.textContent = "Debes ingresar un nombre";
        e.target.style.border = "1px solid red";
        camps.name = false;
      } else if (e.target.value.length < 3) {
        errorName.textContent = "Ingresa un nombre válido";
        e.target.style.border = "1px solid red";
        camps.name = false;
      } else {
        errorName.textContent = "";
        e.target.style.border = "none";
        camps.name = true;
      }
      break;

    case "email":
      if (e.target.value == "") {
        errorEmail.textContent = "Debes ingresar un email";
        e.target.style.border = "1px solid red";
        camps.email = false;
      } else if (validarEmail(e.target.value) == false) {
        errorEmail.textContent = "Ingresar un email válido";
        e.target.style.border = "1px solid red";
        camps.email = false;
      } else {
        errorEmail.textContent = "";
        e.target.style.border = "none";
        camps.email = true;
      }
      break;

    case "message":
      if (e.target.value == "") {
        errorMessage.textContent = "Agrega el motivo de tu contacto";
        e.target.style.border = "1px solid red";
        camps.message = false;
      } else if (e.target.value.length < 30) {
        errorMessage.textContent = "Por favor sea mas descriptivo";
        e.target.style.border = "1px solid red";
        camps.message = false;
      } else {
        errorMessage.textContent = "";
        e.target.style.border = "none";
        camps.message = true;
      }
      break;
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", validateCamp);
  input.addEventListener("blur", validateCamp);
});
textarea.addEventListener("keyup", validateCamp);
textarea.addEventListener("blur", validateCamp);

formContact.addEventListener("submit", (e) => {
  if (!camps.name) {
    errorName.textContent = "Debes completar con un nombre";
    e.preventDefault();
  }
  if (!camps.email) {
    errorEmail.textContent = "Debes ingresar un email";
    e.preventDefault();
  }
  if (!camps.message) {
    errorMessage.textContent = "Ingresa el motivo de tu contacto";
    e.preventDefault();
  }
});

formContact.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();
  const form = new FormData(this);
  const response = await fetch(this.action, {
    method: this.method,
    body: form,
    headers: {
      Accept: "application/json",
    },
  });
  if (response.ok) {
    this.reset();
    showMessage();
  }
}

let xCloseMessage = document.querySelector(".ok-message__close");
let message = document.querySelector(".ok-message");

xCloseMessage.addEventListener("click", function () {
  message.classList.toggle("show-message");
});

function showMessage() {
  message.classList.toggle("show-message");
}

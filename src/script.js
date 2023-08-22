const email = document.querySelector("#email");
const form = document.querySelector("form");
const errorMsg = document.querySelector("div.error");
const dismissButton = document.querySelector(".success-message button");

const signUpPage = document.querySelector(".newsletter-sign-up");
const successPage = document.querySelector(".success-message");

const displayEmail = document.querySelector(".display-email");

const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!checkEmailValidity(email.value)) {
    displayEmailError();
  } else {
    displaySuccessPage(email.value);
  }
});

email.addEventListener("input", (e) => {
  if (errorMsg.style.visibility === "hidden") return;
  if (!checkEmailValidity(e.target.value)) return;

  removeEmailError();
});

dismissButton.addEventListener("click", (e) => {
  displaySignUpPage();
});

function checkEmailValidity(email) {
  if (email.match(emailRegex)) {
    return true;
  }
  return false;
}

/* Display the error state  */
function displayEmailError() {
  errorMsg.style.visibility = "visible";
  email.classList.add("error");
}

function removeEmailError() {
  errorMsg.style.visibility = "hidden";
  email.classList.remove("error");
}

function displaySuccessPage(email) {
  displayEmail.textContent = email;
  signUpPage.classList.add("hidden");
  successPage.classList.remove("hidden");
}

function displaySignUpPage() {
  email.value = "";
  signUpPage.classList.remove("hidden");
  successPage.classList.add("hidden");
}

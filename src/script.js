const email = document.querySelector("#email");
const form = document.querySelector("form");
const errorMsg = document.querySelector("div.error");
const signUpPage = document.querySelector(".newsletter-sign-up");
const successPage = document.querySelector(".success-message");
const displayEmail = document.querySelector(".display-email");

const emailRegex = /\w+@\w+\.\w+/;

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

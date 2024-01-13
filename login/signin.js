var usernameInput = document.querySelector(".signup-username");
var passwordInput = document.querySelector(".signup-password");
var emailInput = document.querySelector(".signup-email");
var telInput = document.querySelector(".signup-tel");
var btnSignUp = document.getElementById("signupBtn");

btnSignUp.addEventListener("click", function (e) {
  e.preventDefault();
  localStorage.setItem("username", usernameInput.value);
  localStorage.setItem("password", passwordInput.value);
  localStorage.setItem("tel", telInput.value);
  localStorage.setItem("email", emailInput.value);
  if (
    usernameInput.value &&
    passwordInput.value &&
    telInput.value &&
    emailInput.value
  )
    location.href = "/service.html";
});

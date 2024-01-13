$(document).ready(function () {
  $("#register-link").click(function () {
    window.location.href = "./signin.html";
  });
});

$(document).ready(function () {
  $(".smooth-button").click(function () {
    window.location.href = "./service.html";
  });
});
//// util functions begin
// function each(array, func) {
//   for (var i = 0; i < array.length; i++) {
//     func(array[i], i);
//   }
// }

// function map(array, f) {
//   var acc = [];
//   each(array, function (element, i) {
//     acc.push(f(element, i));
//   });
//   return acc;
// }

// function filter(array, predicate) {
//   var acc = [];
//   each(array, function (element, index) {
//     // notice we added the index here
//     if (predicate(element, index)) {
//       // notice we added the index here
//       acc.push(element);
//     }
//   });
//   return acc;
// }

// function reduce(array, f, acc) {
//   if (acc === undefined) {
//     acc = array[0];
//     array = array.slice(1);
//   }
//   each(array, function (element, i) {
//     acc = f(acc, element, i);
//   });
//   return acc;
// }

//// util functions end

var signInBtn = document.querySelector(".sign-in-btn");
var usernameInput = document.querySelector(".username");
var passwordInput = document.querySelector(".password");

var lockIocn = document.querySelector(".bxs-lock-alt");
lockIocn.addEventListener("click", function (e) {
  if (passwordInput.type === "text") {
    passwordInput.type = "password";
  } else {
    passwordInput.type = "text";
  }
});

signInBtn.addEventListener("click", function (e) {
  e.preventDefault();

  var usernameErrorPara = document.querySelector(".username-error");
  var passwordErrorPara = document.querySelector(".password-error");
  var usernameErrorMessage = "";
  var passwordErrorMessage = "";
  var password = passwordInput.value;
  var specialCharacters = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "+",
    "=",
    "[",
    "]",
    "{",
    "}",
    "|",
    ";",
    ":",
    ",",
    ".",
    "<",
    ">",
    "/",
    "?",
  ];

  var lowercaseCondition = /^(?=.*[a-z])/;
  var uppercaseCondition = /^(?=.*[A-Z])/;
  var digitCondition = /^(?=.*\d)/;
  var specialCharacterCondition = /^(?=.*[@$!%*?&])/;
  var lengthCondition = /^[A-Za-z\d@$!%*?&]{8,}$/;

  if (usernameInput.value.includes(" ")) {
    usernameErrorMessage = "username shouldn't contain espace";
    usernameErrorPara.innerHTML = usernameErrorMessage;
  }
  if (
    specialCharacters.some(function (specialCharacter) {
      return usernameInput.value.includes(specialCharacter);
    })
  ) {
    usernameErrorMessage = "username shouldn't have a special character";

    usernameErrorPara.innerHTML = usernameErrorMessage;
  }

  var errors = [];

  if (!lowercaseCondition.test(password)) {
    errors.push("Password must contain at least one lowercase letter.");
  }

  if (!uppercaseCondition.test(password)) {
    errors.push("Password must contain at least one uppercase letter.");
  }

  if (!digitCondition.test(password)) {
    errors.push("Password must contain at least one digit.");
  }

  if (!specialCharacterCondition.test(password)) {
    errors.push("Password must contain at least one special character.");
  }

  if (!lengthCondition.test(password)) {
    errors.push("Password must be at least 8 characters long.");
  }

  if (errors.length === 0) {
    console.log("yassine");
    if (
      localStorage.getItem("username") === usernameInput.value &&
      localStorage.getItem("password") === passwordInput.value
    ) {
      window.location.href = "/service.html";
    } else {
      alert("incorrect username or password");
    }
  } else {
    var passwordErrorMessage = errors.reduce(function (
      errorMessage,
      currError
    ) {
      return (errorMessage += "-" + currError);
    },
    "");
    console.log(passwordErrorMessage);
    alert(passwordErrorMessage);
    // return false;
  }
});

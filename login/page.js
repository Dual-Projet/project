const nav = document.querySelector(".nav");

window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}

class LocalStorageHandler {
  constructor(storageKey) {
    this.storageKey = storageKey;
  }

  saveObject(obj) {
    localStorage.setItem(this.storageKey, obj.toString());
  }

  retrieveObject() {
    const objectString = localStorage.getItem(this.storageKey);
    return objectString;
  }
}

const localStorageHandler = new LocalStorageHandler("myObject");

var myButton = document.getElementById("myButton");

myButton.addEventListener("click", function () {
  var myObject = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
  };

  localStorageHandler.saveObject(myObject);

  alert("Object has been stored in local storage!");
});



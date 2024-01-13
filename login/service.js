var emailProfile = document.querySelector(".email-profile");
var telProfile = document.querySelector(".tel-profile");

emailProfile.innerHTML = localStorage.getItem("email");
telProfile.innerHTML = localStorage.getItem("tel");
var cardsWrapper = document.querySelector(".main-content-grid");
var cards = document.querySelectorAll(".stacked");
var searchInput = document.querySelector(".search-input");

searchInput.addEventListener("input", function (e) {
  //   console.log(cards);
  //   var newCards = [...cards].map(function (card) {
  //     return card.dataset.search;
  //   });
  //   var cardsToDisplay = newCards.filter(function (newCard) {
  //     return newCard.includes(e.target.value);
  //   });
  //   console.log(cardsToDisplay);

  var cardsToDisplay = [...cards].filter(function (card) {
    return card.dataset.search.includes(e.target.value);
  });
  // Clear existing content in cardsWrapper
  cardsWrapper.innerHTML = "";

  // Append the filtered cards to cardsWrapper
  cardsToDisplay.forEach(function (card) {
    cardsWrapper.appendChild(card.cloneNode(true));
  });
});

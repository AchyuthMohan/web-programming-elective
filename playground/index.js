document.addEventListener("DOMContentLoaded", function () {
  var message = document.getElementById("message");
  var buttonClick = document.getElementById("buttonClick");
  var clearButton = document.getElementById("clearButton");
  function greeting() {
    message.innerHTML = "Hello Welcome Achyuth";
  }
  function clear() {
    message.innerHTML = "";
  }
  buttonClick.addEventListener("click", greeting);
  clearButton.addEventListener("click", clear);
});

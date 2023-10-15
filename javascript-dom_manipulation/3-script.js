document.addEventListener("DOMContentLoaded", function() {
    // Select the element with id "toggle_header"
    var toggleHeaderElement = document.getElementById("toggle_header");
  
    // Select the item <header>
    var headerElement = document.querySelector("header");
  
    // Add a click event to the element "toggle_header"
    toggleHeaderElement.addEventListener("click", function() {
      // Checks if the current class is "red" or "green" and changes it accordingly
      if (headerElement.classList.contains("red")) {
        headerElement.classList.remove("red");
        headerElement.classList.add("green");
      } else {
        headerElement.classList.remove("green");
        headerElement.classList.add("red");
      }
      console.log(headerElement);
    });
  });
  
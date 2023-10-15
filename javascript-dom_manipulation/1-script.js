document.addEventListener("DOMContentLoaded", function() {
    // Select the element with id "red_header"
    var redHeaderElement = document.getElementById("red_header");
  
    // Add a click event to the element "red_header"
    redHeaderElement.addEventListener("click", function() {
      // Select the item <header>
      var headerElement = document.querySelector("header");
  
      // Update the text color to red (#FF0000)
      headerElement.style.color = "#FF0000";
    });
  });
  
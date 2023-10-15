document.addEventListener("DOMContentLoaded", function() {
    // Select the element with id "red_header"
    var redHeaderElement = document.getElementById("red_header");
  
    // Add a click event to the element "red_header"
    redHeaderElement.addEventListener("click", function() {
      // Select the item <header>
      var headerElement = document.querySelector("header");
  
      // Add the "red" class to the <header> element
      headerElement.classList = 'red';
      
      // Checking that the class was added from the console
      console.log(headerElement);
    });
  });
  
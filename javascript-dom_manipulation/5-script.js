document.addEventListener("DOMContentLoaded", function() {
    // Select the element with id "update_header"
    var updateHeaderElement = document.getElementById("update_header");
  
    // Select the <header> element
    var headerElement = document.querySelector("header");
  
    // Add a click event to the "update_header" element
    updateHeaderElement.addEventListener("click", function() {
      // Updates the text of the <header> element to "New Header!!!"
      headerElement.textContent = "New Header!!!";
    });
  });

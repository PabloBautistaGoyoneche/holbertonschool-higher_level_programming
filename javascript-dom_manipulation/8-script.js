document.addEventListener("DOMContentLoaded", function() {
    // Select the element with id "hello"
    var helloElement = document.getElementById("hello");
  
    // URL to get the translation of "hello" in French
    var apiUrl = "https://hellosalut.stefanbohacek.dev/?lang=fr";
  
    // Make a Fetch request to get the translation
    fetch(apiUrl)
      .then(response => response.text()) // Get the response as text
      .then(data => {
        // Update the content of the "hello" element with the translation
        helloElement.textContent = data;
      })
      .catch(error => {
        console.error("Error al obtener la traducción:", error);
      });
  });
  
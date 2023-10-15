document.addEventListener("DOMContentLoaded", function() {
    // Select relevant elements
    var languageSelect = document.getElementById("language_code");
    var translateButton = document.getElementById("btn_translate");
    var helloElement = document.getElementById("hello");
  
    // Add a click event to the translation button
    translateButton.addEventListener("click", function() {
      // Gets the value selected in the selection box
      var selectedLanguage = languageSelect.value;
  
      // If a language is selected, make a Fetch request to get the translation
      if (selectedLanguage) {
        var apiUrl = `https://hellosalut.stefanbohacek.dev/?lang=${selectedLanguage}`;
        
        fetch(apiUrl)
          .then(response => response.text()) // Get the response as text
          .then(data => {
            // Show the translation in the "hello" element
            helloElement.textContent = data;
          })
          .catch(error => {
            console.error("Error al obtener la traducción:", error);
          });
      }
    });
  });

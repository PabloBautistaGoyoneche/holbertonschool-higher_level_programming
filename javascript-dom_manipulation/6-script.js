document.addEventListener("DOMContentLoaded", function() {
    // Select the element with id "character"
    var characterElement = document.getElementById("character");
  
    // SWAPI service URL to get character data
    var apiUrl = "https://swapi-api.hbtn.io/api/people/5/?format=json";
  
    // Make a Fetch request to get character data
    fetch(apiUrl)
      .then(response => response.json()) // Parse the response as JSON
      .then(data => {
        // Get character name from data
        var characterName = data.name;
  
        // Updates the content of the "character" element with the character's name
        characterElement.textContent = characterName;
      })
      .catch(error => {
        console.error("Error al obtener datos:", error);
      });
  });
     
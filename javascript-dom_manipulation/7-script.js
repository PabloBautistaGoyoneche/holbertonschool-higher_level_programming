document.addEventListener("DOMContentLoaded", function() {
    // Select the <ul> element with id "list_movies"
    var listMoviesElement = document.getElementById("list_movies");
  
    // SWAPI service URL to get movie data
    var apiUrl = "https://swapi-api.hbtn.io/api/films/?format=json";
  
    // Make a Fetch request to get movie data
    fetch(apiUrl)
      .then(response => response.json()) // Parse the response as JSON
      .then(data => {
        // Iterate through the movies and add their titles to the list
        data.results.forEach(movie => {
          var movieTitle = movie.title;
          var listItem = document.createElement("li");
          listItem.textContent = movieTitle;
          listMoviesElement.appendChild(listItem);
        });
      })
      .catch(error => {
        console.error("Error al obtener datos:", error);
      });
  });

  
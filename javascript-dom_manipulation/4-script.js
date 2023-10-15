document.addEventListener("DOMContentLoaded", function() {
    // Select the element with id "add_item"
    var addItemElement = document.getElementById("add_item");

    // Select list <ul> with class "my_list"
    var myList = document.querySelector(".my_list");

    // Agrega un evento de clic al elemento "add_item"
    addItemElement.addEventListener("click", function() {
      // Crea un nuevo elemento <li>
      var newItem = document.createElement("li");

      // Asigna el contenido "Item" al nuevo elemento <li>
      newItem.textContent = "Item";

      // Agrega el nuevo elemento <li> a la lista <ul>
      myList.appendChild(newItem);
    });
  });


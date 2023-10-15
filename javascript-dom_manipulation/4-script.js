document.addEventListener("DOMContentLoaded", function() {
    // Select the element with id "add_item"
    var addItemElement = document.getElementById("add_item");

    // Select list <ul> with class "my_list"
    var myList = document.querySelector(".my_list");

    // Add a click event to the "add_item" element
    addItemElement.addEventListener("click", function() {
      // Create a new <li> element
      var newItem = document.createElement("li");

      // Assigns the "Item" content to the new <li> element
      newItem.textContent = "Item";

      // Adds the new element <li> to the list <ul>
      myList.appendChild(newItem);
    });
  });


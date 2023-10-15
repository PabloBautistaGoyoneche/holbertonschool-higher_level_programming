document.addEventListener("DOMContentLoaded", function() {
  // Select relevant elements
  var addElement = document.getElementById("add_item");
  var removeElement = document.getElementById("remove_item");
  var clearElement = document.getElementById("clear_list");
  var myList = document.querySelector(".my_list");

  // Add a new <li> element to the list
  addElement.addEventListener("click", function() {
    var newItem = document.createElement("li");
    newItem.textContent = "Item";
    myList.appendChild(newItem);
  });

  // Remove the last <li> element from the list
  removeElement.addEventListener("click", function() {
    var listItems = myList.getElementsByTagName("li");
    if (listItems.length > 0) {
      myList.removeChild(listItems[listItems.length - 1]);
    }
  });

  // Remove the last <li> element from the list
  clearElement.addEventListener("click", function() {
    myList.innerHTML = "";
  });
});

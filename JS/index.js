document.addEventListener("DOMContentLoaded", function() {


  document.getElementById("submit-button").addEventListener("click", function(event){
    event.preventDefault();
    var todo = document.getElementById("hero");
    todo.style.color = "#3655ff";
    todo.style.background = "pink";
    todo.style.textDecoration = "line-through";

    var userContent = document.getElementById("new-item").value;
    var newLi = document.createElement("li");
    var addContent = document.createTextNode(userContent);
    newLi.appendChild(addContent);
    document.getElementById("to-do-list").appendChild(newLi);

    // document.getElementById("to-do-list").appendChild(li);

    console.log(userContent);
  });











});

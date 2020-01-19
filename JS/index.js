document.addEventListener("DOMContentLoaded", function() {


  document.getElementById("submit-button").addEventListener("click", function(event){
    event.preventDefault();
    var todo = document.getElementById("hero");
    todo.style.color = "#3655ff";
    todo.style.background = "pink";
    todo.style.textDecoration = "line-through";

    // var removeBox = document.createElement("span");
    // removeBox.className = "ex";
    // removeBox.innerHTML = "&#10005";
    // console.log(removeBox);

    var userContent = document.getElementById("new-item").value;
    var newLi = document.createElement("li");
    // var addContent = document.createTextNode(userContent);
    newLi.innerHTML = "<span class='check'>&#10003</span>" + userContent + "<span class='ex'>&#10005</span>";
    newLi.id = "item";
    // newLi.appendChild(addContent);







    document.getElementById("to-do-list").appendChild(newLi);
// document.getElementById("item").appendChild(removeBox);

    document.getElementById("new-item").value="";


    console.log(userContent);
  });











});

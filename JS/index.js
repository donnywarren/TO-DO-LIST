document.addEventListener("DOMContentLoaded", function() {

  var task = ["Laundry","Pay Bills"];
  var item = task[1];




  task.forEach(function(item, index) {
  var number = index + 1;
  });



  document.getElementById("submit-button").addEventListener("click", function(event){
    event.preventDefault();

    var userContent = document.getElementById("new-item").value;

    task.push(userContent);

          console.log(task[task.length - 1]);


    var newLi = document.createElement("li");




    newLi.innerHTML = "<span id='check'>&#10003</span>" + "  " + userContent + "<span class='ex'>&#10005</span>";
    newLi.className = "item";
    // newLi.appendChild(addContent);


    document.getElementById("to-do-list").appendChild(newLi);

    // REMOVE USER CONTENT
    document.getElementById("new-item").value="";










    var todo = document.getElementById("hero");
    todo.style.color = "#3655ff";
    todo.style.background = "pink";
    todo.style.textDecoration = "line-through";

    // var removeBox = document.createElement("span");
    // removeBox.className = "ex";
    // removeBox.innerHTML = "&#10005";
    // console.log(removeBox);


// document.getElementById("item").appendChild(removeBox);


      document.getElementById("check").addEventListener("click", markBlack);

      function markBlack() {
        document.getElementById("check").style.color="#111";


      }


    //
    // console.log(userContent);
  });








});

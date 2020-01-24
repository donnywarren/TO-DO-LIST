document.addEventListener("DOMContentLoaded", function() {


  var task = ["Laundry","Pay Bills"];


  // ON PAGE LOAD DISPLAYS PERMINENT LIST ITEMS
  task.forEach(function(item, index) {

  var checkSpan = document.createElement("span");
  checkSpan.className = "check";
  checkSpan.innerHTML = "&#10004";
  var removeDiv = document.createElement("button");
  removeDiv.className = "ex";
  removeDiv.innerHTML = "&#10007";
  var newLi = document.createElement("li");
  newLi.innerHTML = " " + item;
  newLi.prepend(checkSpan);
  newLi.appendChild(removeDiv);

  document.getElementById("to-do-list").appendChild(newLi);

  // REMOVE LINE WHEN X CLICKED
    removeDiv.addEventListener('click', function() {
      newLi.remove();

    });


    // STRIKEOUT LIST ITEM WHEN CHECKED
    checkSpan.addEventListener("click", function(){

      if(newLi.classList.contains("strike")){
        newLi.classList.remove("strike");
      } else {
        newLi.classList.add("strike");
      }

      if(checkSpan.classList.contains("show")){
        checkSpan.classList.remove("show");
      } else {
        checkSpan.classList.add("show");
      }

    });

  });


  // WHEN USER ADDS CONTENT
  document.getElementById("add").addEventListener("click", function(event){
    event.preventDefault();

    var userContent = document.getElementById("new-item").value;
    task.push(userContent);

    var newItem = task[task.length - 1];
    var checkSpan = document.createElement("span");
    checkSpan.className = "check";
    checkSpan.innerHTML = "&#10004";
    var removeDiv = document.createElement("button");
    removeDiv.className = "ex";
    removeDiv.innerHTML = "&#10007";
    var newLi = document.createElement("li");
    newLi.innerHTML = " " + newItem;
    newLi.prepend(checkSpan);
    newLi.appendChild(removeDiv);

    // WARNING WHEN FORM IS EMPTY
    if (userContent === '') {
    alert("Please write something to do.");
    } else {
      document.getElementById("to-do-list").appendChild(newLi);
    }

    // REMOVE USER CONTENT INSIDE FORM
    document.getElementById("new-item").value="";

    // REMOVE LINE WHEN X CLICKED
    removeDiv.addEventListener('click', function() {
      console.log('remove button was clicked');
      newLi.remove();
    });


    // STRIKEOUT LIST ITEM WHEN CHECKED
    checkSpan.addEventListener("click", function(){

      if(newLi.classList.contains("strike")){
        newLi.classList.remove("strike");
      } else {
        newLi.classList.add("strike");
      }

      if(checkSpan.classList.contains("show")){
        checkSpan.classList.remove("show");
      } else {
        checkSpan.classList.add("show");
      }

    });



      });

    });

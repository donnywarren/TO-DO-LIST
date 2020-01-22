document.addEventListener("DOMContentLoaded", function() {


  var task = ["Laundry","Pay Bills"];


  task.forEach(function(item, index) {

  var checkSpan = document.createElement("span");
  checkSpan.id = "s" + [index];
  checkSpan.className = "check";
  checkSpan.innerHTML = "&#10004";
  checkSpan.style.marginRight = "1px";
  var removeDiv = document.createElement("button");
  removeDiv.id = "d" + [index];
  removeDiv.className = "ex";
  removeDiv.innerHTML = "&#10007";
  removeDiv.style.padding = 0;
  var newLi = document.createElement("li");
  newLi.id = "l" + [index];
  newLi.innerHTML = " " + item;
  newLi.prepend(checkSpan);
  newLi.appendChild(removeDiv);

  document.getElementById("to-do-list").appendChild(newLi);

  // REMOVE LINE WHEN X CLICKED
    removeDiv.addEventListener('click', function() {
      console.log('remove button was clicked');
      newLi.remove();
      // this.closest('li').remove();
    });


    // STRIKEOUT LIST ITEM WHEN CHECKED
    checkSpan.addEventListener("click", function(){
      if(newLi.style.textDecoration !== "line-through") {
        newLi.style.textDecoration = "line-through";
      } else {
        newLi.style.textDecoration = "none";
      }

      if(checkSpan.style.color !== "rgb(17, 17, 17)"){
        checkSpan.style.color = "rgb(17, 17, 17)";
      } else {
        checkSpan.style.color = "transparent";
      }

    });

  });

  document.getElementById("add").addEventListener("click", function(event){
    event.preventDefault();

    var userContent = document.getElementById("new-item").value;
    task.push(userContent);

    var newItem = task[task.length - 1];
    var checkSpan = document.createElement("span");
    checkSpan.id = "s" + [task.length - 1];
    checkSpan.className = "check";
    checkSpan.innerHTML = "&#10004";
    checkSpan.style.marginRight = "1px";
    var removeDiv = document.createElement("button");
    removeDiv.id = "d" + [task.length - 1];
    removeDiv.className = "ex";
    removeDiv.innerHTML = "&#10007";
    removeDiv.style.padding = 0;
    var newLi = document.createElement("li");
    newLi.id = "l" + [task.length - 1];
    newLi.innerHTML = " " + newItem;
    newLi.prepend(checkSpan);
    newLi.appendChild(removeDiv);

    // WARNING WHEN NO FORM IS EMPTY
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
      // this.closest('li').remove();
    });


    // STRIKEOUT LIST ITEM WHEN CHECKED
    checkSpan.addEventListener("click", function(){
      if(newLi.style.textDecoration !== "line-through") {
        newLi.style.textDecoration = "line-through";
      } else {
        newLi.style.textDecoration = "none";
      }

      if(checkSpan.style.color !== "rgb(17, 17, 17)"){
        checkSpan.style.color = "rgb(17, 17, 17)";
      } else {
        checkSpan.style.color = "transparent";
      }

    });



      });

    });

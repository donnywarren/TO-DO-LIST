document.addEventListener("DOMContentLoaded", function() {


  var task = ["Laundry","Pay Bills"];


  // ON PAGE LOAD DISPLAYS PERMINENT LIST ITEMS
  task.forEach(function(item, index) {
    createNewLine(item);
  });


  function createNewLine(content){
    var checkSpan = document.createElement("span");
    checkSpan.className = "check";
    checkSpan.innerHTML = "&#10004";
    var newText = document.createElement("p");
    newText.innerHTML = (content);
    var editBtn = document.createElement("button");
    editBtn.title = "edit";
    editBtn.className = "edit";
    editBtn.innerHTML = "&#9998";
    var removeDiv = document.createElement("button");
    removeDiv.title = "delete";
    removeDiv.className = "ex";
    removeDiv.innerHTML = "&#10007";
    var newLi = document.createElement("li");
    newLi.className = "new-line";
    newLi.prepend(checkSpan);
    newLi.appendChild(newText);
    newLi.appendChild(removeDiv);
    newLi.appendChild(editBtn);
    document.getElementById("to-do-list").appendChild(newLi);


    // REMOVE LINE WHEN X CLICKED
    removeDiv.addEventListener('click', function() {
      newLi.remove();
    });


    // STRIKEOUT LIST ITEM WHEN CHECKED
    checkSpan.addEventListener("click", function(){

      if(newText.classList.contains("strike")){
        newText.classList.remove("strike");
      } else {
        newText.classList.add("strike");
      }

      if(checkSpan.classList.contains("show")){
        checkSpan.classList.remove("show");
      } else {
        checkSpan.classList.add("show");
      }
    });

    // OPEN AND CLOSE EDIT MODAL
    editBtn.addEventListener("click", function(event){
      event.preventDefault();
      newLi.classList.add("active");
      var currentText = newText.innerHTML;
      document.getElementById("edit-window").value = currentText;
      document.getElementById("modal").style.display = "flex";
    });
  };


  function removeActive(){
    document.querySelector(".new-line.active").classList.remove(".active");
  }


  document.getElementById("edit").addEventListener("click", function() {
    var editText = document.getElementById("edit-window").value;
    document.querySelector(".new-line.active p").innerHTML = editText;
    document.getElementById("modal").style.display = "none";
    removeActive();
  });


  document.getElementById("close").addEventListener("click", function() {
    document.getElementById("modal").style.display = "none";
  });

  // WHEN USER ADDS CONTENT
  document.getElementById("add").addEventListener("click", function(event){
    event.preventDefault();
    var userContent = document.getElementById("new-item").value;

    // WARNING WHEN FORM IS EMPTY
    if (userContent === '') {
    alert("Please write something to do.");
    } else {
      createNewLine(" " + userContent);
    }
    // REMOVE USER CONTENT INSIDE FORM
    document.getElementById("new-item").value="";
  });

});

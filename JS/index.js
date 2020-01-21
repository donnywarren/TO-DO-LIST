document.addEventListener("DOMContentLoaded", function() {


  var task = ["Laundry","Pay Bills"];


  task.forEach(function(item, index) {

  var checkSpan = document.createElement("span");
  checkSpan.id = "s" + [index];
  checkSpan.className = "check";
  checkSpan.innerHTML = "&#10004";
  var removeDiv = document.createElement("div");
  removeDiv.id = "d" + [index];
  removeDiv.className = "ex";
  removeDiv.innerHTML = "&#10007";
  var newLi = document.createElement("li");
  newLi.id = "l" + [index];
  newLi.innerHTML = "  " + item;
  newLi.prepend(checkSpan);
  newLi.appendChild(removeDiv);

  document.getElementById("to-do-list").appendChild(newLi);

  });

  document.getElementById("submit-button").addEventListener("click", function(event){
    event.preventDefault();

    var userContent = document.getElementById("new-item").value;
    task.push(userContent);

    var newItem = task[task.length - 1];
    var checkSpan = document.createElement("span");
    checkSpan.id = "s" + [task.length - 1];
    checkSpan.className = "check";
    checkSpan.innerHTML = "&#10004";
    var removeDiv = document.createElement("div");
    removeDiv.id = "d" + [task.length - 1];
    removeDiv.className = "ex";
    removeDiv.innerHTML = "&#10007";
    var newLi = document.createElement("li");
    newLi.id = "l" + [task.length - 1];
    newLi.innerHTML = "  " + newItem;
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
      var closeButtons = document.querySelectorAll('.ex');

      closeButtons.forEach(function(closeButton){
        closebutton.addEventListener("click", function(){

        });
    
      });






    });









  // REMOVE LINE WHEN X CLICKED
    // var checkMarks = document.querySelectorAll('.check');
    //
    // checkMarks.addEventListener("click", function(){
    //   var
    //   .style.color = "#111";
    // });


    // STRIKEOUT TEXT WHEN CHECK IS CLICKED




    //
    //
    //
    // todo.style.textDecoration = "line-through";
    //
    //

      // document.getElementById("check").addEventListener("click", markBlack);
      //
      // function markBlack() {
      //   document.getElementById("check").style.color="#111";
      //
      //
      // }









});

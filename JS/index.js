document.addEventListener("DOMContentLoaded", function() {


  var task = ["Laundry","Pay Bills"];


  task.forEach(function(item, index) {

  var checkSpan = document.createElement("span");
  checkSpan.id = "s" + [index];
  checkSpan.className = "check";
  checkSpan.innerHTML = "&#10003";
  var removeDiv = document.createElement("div");
  removeDiv.id = "d" + [index];
  removeDiv.className = "ex";
  removeDiv.innerHTML = "&#10005";
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
    checkSpan.innerHTML = "&#10003";
    var removeDiv = document.createElement("div");
    removeDiv.id = "d" + [task.length - 1];
    removeDiv.className = "ex";
    removeDiv.innerHTML = "&#10005";
    var newLi = document.createElement("li");
    newLi.id = "l" + [task.length - 1];
    newLi.innerHTML = "  " + newItem;
    newLi.prepend(checkSpan);
    newLi.appendChild(removeDiv);
    document.getElementById("to-do-list").appendChild(newLi);

    // REMOVE USER CONTENT
    document.getElementById("new-item").value="";

    console.log(task);
  });



  // document.getElementById("submit-button").addEventListener("click", function(event){
  //   event.preventDefault();
  //
  //   var userContent = document.getElementById("new-item").value;
  //
  //   task.push(userContent);


    // var newLi = document.createElement("li");
    //
    //
    //
    //
    // newLi.innerHTML = "<span id='check'>&#10003</span>" + "  " + userContent + "<span class='ex'>&#10005</span>";
    // newLi.className = "item";
    // // newLi.appendChild(addContent);
    //
    //
    // document.getElementById("to-do-list").appendChild(newLi);


    //
    // var todo = document.getElementById("hero");
    // todo.style.color = "#3655ff";
    // todo.style.background = "pink";
    // todo.style.textDecoration = "line-through";

    // var removeBox = document.createElement("span");
    // removeBox.className = "ex";
    // removeBox.innerHTML = "&#10005";
    // console.log(removeBox);


// document.getElementById("item").appendChild(removeBox);


      // document.getElementById("check").addEventListener("click", markBlack);
      //
      // function markBlack() {
      //   document.getElementById("check").style.color="#111";
      //
      //
      // }


    //
    // console.log(userContent);









});

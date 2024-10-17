function addItem(item) {
  let ele = document.getElementById(item.value); // Makes the value into a element id
  let check = window.getComputedStyle(ele); // Gets the ids CSS data
  let displayType = check.display; // Checks what the display is and then puts it into the variable

  if (displayType === "flex") {
    let popUp = document.createElement("p"); // Makes a P element
    popUp.textContent = 'this item is already in your cart'; // Sets what will be inside P 
    popUp.classList.add('pop-up'); // Adds the CSS element to the tag
    document.body.appendChild(popUp); // Puts message onto screen
    
    let close = document.createElement('button');
    close.textContent ='X';
    close.classList.add('close');
    close.onclick = function() {closePopUp()};
    document.body.appendChild(close);
    
  } else {
    // '$' gets the location in the CSS file, gets the id in the file and then sets the display to flex
    $("#" + item.value).css("display", "flex"); 
  }
}

function removeItem(item) {
  $("#" + item.value).css("display", "none");
}

function closePopUp() {
  $(".close").css("display", "none");
  $(".pop-up").css("display", "none");
}
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
    close.onclick = function() {closePopUp()}; // JS version of onclick
    document.body.appendChild(close);
    
  } else {
    $("#" + item.value).css("display", "flex"); // '$' gets the location in the CSS file, gets the id in the file and then sets the display to flex
    let data = document.querySelector("#" + item.id); // Gets the id of item along with all data inside of it
    let basePrice = Number(data.dataset.price);
  }
}

function removeItem(item) {
  $("#" + item.value).css("display", "none");
}

function closePopUp() {
  $(".close").css("display", "none");
  $(".pop-up").css("display", "none");
}

function getPrice(price, numQuantity) {
  let quantity = numQuantity.value;
  let total = Number(quantity * price);
}
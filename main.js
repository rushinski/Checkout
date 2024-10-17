emptyCart();

function addItem(item) {
  let ele = document.getElementById(item.value); // Makes the value into a element id
  let check = window.getComputedStyle(ele); // Gets the ids CSS data
  let displayType = check.display; // Checks what the display is and then puts it into the variable

  if (displayType === "flex") {
    let popUp = document.createElement("p"); // Makes a P element
    popUp.textContent = 'This item is already in your cart'; // Sets what will be inside P 
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
  emptyCart();
}

function removeItem(item) {
  $("#" + item.value).css("display", "none");
  emptyCart();
}

function emptyCart() {
  // Nothing in cart check
  let one = document.getElementById("album1");
  let two = document.getElementById("album2");
  let three = document.getElementById("album3");
  let four = document.getElementById("album4");
  let shirt = document.getElementById("tshirt");
  let mug = document.getElementById("coffee-mug");
  let arr = [one, two, three, four, shirt, mug];
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let getEle = arr[i]; 
    let checkEmpty = window.getComputedStyle(getEle);
    let blank = checkEmpty.display;
    newArr.push(blank);
  }
  if (newArr[0] !== "flex" && newArr[1] !== "flex" && newArr[2] !== "flex" && newArr[3] !== "flex" && newArr[4] !== "flex" && newArr[5] !== "flex") {
    $("#head-margin").css("margin-bottom", "100px");
    $(".cart-head").css("display", "none");
    $(".btn-purchase").css("display", "none");
    $(".cart-total-title").css("display", "none");

    let eCartH3 = document.createElement("h3");
    eCartH3.textContent = 'Your cart is currently empty!'; 
    eCartH3.classList.add('empty-cart'); 
    document.body.appendChild(eCartH3); 
  } else {
    $("#head-margin").css("margin-bottom", "33.20px");
    $(".cart-head").css("display", "flex");
    $(".btn-purchase").css("display", "block");
    $(".cart-total-title").css("display", "block");

    let removeECart = document.getElementsByClassName("empty-cart");
    removeECart[0].remove(); // index is 0 because it looks at all things with the removeECart class so if there is multiple and wanna remove the second your index would be 1
  }
}

function closePopUp() {
  $(".close").css("display", "none");
  $(".pop-up").css("display", "none");
}

function getPrice(price, numQuantity) {
  let quantity = numQuantity.value;
  let total = Number(quantity * price);
}
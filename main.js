function addItem(item) {
  $("#" + item.value).css("display", "flex");
}

function removeItem(item) {
  $("#" + item.value).css("display", "none");
}
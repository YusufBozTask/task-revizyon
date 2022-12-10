function hideShow() {
  var getElement = document.getElementById("right-sidebar");
  if (getElement.style.display === "none") {
    getElement.style.display = "flex";
  } else {
    getElement.style.display = "none";
  }
}

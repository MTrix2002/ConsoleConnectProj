var elements = document.querySelectorAll(".single-line-name");

var tabsClick = function() {
  var tab = this.getAttribute("tab");
  var element = document.querySelector("#" + tab);
  disableStyle();
  hideSection(["#publish", "#igtv", "#save", "#marked"]);
  element.style.display = "block";
  this.children[0].style.display = "block";
  this.children[1].style.fontWeight = "bold";
};

var hideSection = function(elementList = []) {
  for (var i = 0; i < elementList.length; i++) {
    document.querySelector(elementList[i]).style.display = "none";
  }
};

var disableStyle = function() {
  for (var i = 0; i < elements.length; i++) {
    elements[i].children[0].style.display = "none";
    elements[i].children[1].style.fontWeight = "normal";
  }
};

var init = function() {
  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", tabsClick, false);
  }
};

init();

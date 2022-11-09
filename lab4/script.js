function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeColor() {
  var element = document.getElementById("first");
  element.style.background = getRandomColor();
  element.style.color = getRandomColor();
}

function changeColorQuery() {
  var element = document.querySelector("li.select");
  element.style.background = getRandomColor();
  element.style.color = getRandomColor();
}

function deleteImage() {
  var element = document.getElementById("image");
  element.style.display = "none";
}

function addImage() {
  var element = document.getElementById("image");
  element.style.display = "block";
}

function enlargeImage() {
  var element = document.getElementById("image");
  element.style.width = "80%";
}

function reduceImage() {
  var element = document.getElementById("image");
  element.style.width = "40%";
}

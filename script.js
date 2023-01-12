var coloridvalue;
var chair;
var price;
var price = document.getElementById("price");
function removeselection() {
  document.getElementById("red").classList.remove("selected");
  document.getElementById("yellow").classList.remove("selected");
  document.getElementById("blue").classList.remove("selected");
  document.getElementById("beige").classList.remove("selected");
}


document.getElementById("red").addEventListener('mouseover', chairchangeRed);
document.getElementById("yellow").addEventListener('mouseover', chairchangeYellow);
document.getElementById("blue").addEventListener('mouseover', chairchangeBlue);
document.getElementById("beige").addEventListener('mouseover', chairchangeBeige);

function chairchangeRed() {
  coloridvalue = "red";
  chair = 'img/chair-' + coloridvalue + '@2x.jpg';
  document.getElementById("product-photo").src = chair;
  console.log(chair);
  console.log(coloridvalue);
  removeselection();
  document.getElementById("red").classList.add("selected");
  document.getElementById("price").style.color = "red";
  document.getElementById("price").innerHTML = "$49.99" + "!";
}

function chairchangeYellow() {
  coloridvalue = "yellow";
  chair = 'img/chair-' + coloridvalue + '@2x.jpg';
  document.getElementById("product-photo").src = chair;
  console.log(chair);
  console.log(coloridvalue);
  removeselection();
  document.getElementById("yellow").classList.add("selected");
  document.getElementById("price").style.color = "green";
  document.getElementById("price").innerHTML = "$74.99" + "!";
}

function chairchangeBlue() {
  coloridvalue = "blue";
  chair = 'img/chair-' + coloridvalue + '@2x.jpg';
  document.getElementById("product-photo").src = chair;
  console.log(chair);
  console.log(coloridvalue);
  removeselection();
  document.getElementById("blue").classList.add("selected");
  document.getElementById("price").style.color = "black";
  document.getElementById("price").innerHTML = "$89.99";
}

function chairchangeBeige() {
  coloridvalue = "beige";
  chair = 'img/chair-' + coloridvalue + '@2x.jpg';
  document.getElementById("product-photo").src = chair;
  console.log(chair);
  console.log(coloridvalue);
  removeselection();
  document.getElementById("beige").classList.add("selected");
  document.getElementById("price").style.color = "red";
  document.getElementById("price").innerHTML = "$49.99" + "!";
}

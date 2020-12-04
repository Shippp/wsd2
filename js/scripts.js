var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};
mybutton.onclick = function() {topFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var clickBtn = document.getElementById("revealBtn");
function revealFunction() {
  var x = document.getElementById("contactInfo");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

var darkClick = document.getElementById("darkmodeBtn");

darkClick.onclick = function() {darkFunction()};

function darkFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}
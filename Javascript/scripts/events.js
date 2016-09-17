var num1   = document.getElementById("num-one");
var num2   = document.getElementById("num-two");
var addSum = document.getElementById("add-sum");

num1.addEventListener("input", add);
num2.addEventListener("input", add);
  function add(){
    var one = parseFloat(num1.value) || 0;
    var two = parseFloat(num2.value) || 0;
    var sum = one + two;
    addSum.innerHTML = "Ergebnis: " + sum;
};

var katze     = document.getElementById("katze");
var hund      = document.getElementById("hund");
var vogel     = document.getElementById("vogel");

katze.addEventListener("click", picLink);
hund.addEventListener("click", picLink);
vogel.addEventListener("click", picLink);

function picLink() {
  var allImages = document.querySelectorAll("img");

  for (var i = 0; i < allImages.length; i++){
    allImages[i].className = "hide";
  }

  var picId = this.attributes["data-img"].value;
  var pic = document.getElementById(picId);
  if (pic.className == "hide"){
    pic.className   = "";
  } else {
    pic.className   ="hide";
  }
}

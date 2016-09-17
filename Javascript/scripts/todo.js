var checklist = document.getElementById("checkliste");

var items = checkliste.querySelectorAll("li");
var inputs = checkliste.querySelectorAll("input");

for (var i = 0; i < items.length; i++){
  items[i].addEventListener("click", editItem);
  inputs[i].addEventListener("blur", updateItem);
  inputs[i].addEventListener("keypress", ItemKeypress);
}

function editItem() {
  this.className = "edit";
  var input = this.querySelector("input");
  input.focus();
  input.setSelectionRange(0, input.value.length);
}

function updateItem() {
  this.previousElementSibling.innerHTML = this.value;
  this.parentNode.className = "";
}

function ItemKeypress(event) {
  if (event.which === 13) {
    updateItem.call(this);
  }
}

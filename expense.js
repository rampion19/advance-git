var form = document.getElementById("addForm");
var items= document.getElementById("items");

form.addEventListener('submit', addItems)

function addItems(e){
    e.preventDefault();
    console.log(1);
}
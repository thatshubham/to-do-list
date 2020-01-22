function addItem() {

var ul = document.getElementById("myList");
var candidate = document.getElementById("listInput");

var li = document.createElement("li");
li.setAttribute('id', candidate.value);  // This one is adding id to the li element . 
li.appendChild(document.createTextNode(candidate.value)); //This is just creating text node, to add text to li element

var span = document.createElement("span");
var txt = document.createTextNode("ⓧ");
span.className = "close";
span.appendChild(txt);

span.addEventListener('click', () => {
li.remove();
});

li.appendChild(span);
ul.appendChild(li);
} 
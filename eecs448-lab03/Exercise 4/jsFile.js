//JS file
function changeColor() {


var border = document.getElementById("par");
rBorder = document.getElementById('red-border').value;
gBorder = document.getElementById('green-border').value;
bBorder = document.getElementById('blue-border').value;
width = document.getElementById('width').value;

rBackground = document.getElementById('red-Background').value;
gBackground = document.getElementById('green-Background').value;
bBackground = document.getElementById('blue-Background').value;

//Change the style attribute

document.body.style.backgroundColor = "rgb("+rBackground+","+gBackground+","+bBackground+")";
document.getElementById('par').style.border = width + "px dotted black"
document.getElementById('par').style.borderColor = "rgb("+rBorder+","+gBorder+","+bBorder+")";

}

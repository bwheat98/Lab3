//JS file
var x = 0
function prev(){
  if(x>1){
    x--
  document.getElementById("slide").src = x + ".jpeg"
}else{
  x=5
  document.getElementById("slide").src = x + ".jpeg"
  }
}
function next(){
  if(x<5){
    x++
    document.getElementById("slide").src = x + ".jpeg"
  }else{
    x=1
    document.getElementById("slide").src = x + ".jpeg"
  }
}

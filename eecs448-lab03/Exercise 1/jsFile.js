//JS file
function checkValid(){
  var pwd = document.getElementById("pwd").value
  var check = document.getElementById("check").value
  if(pwd.length < 8){
    alert("Password too short, must be at least 8 characters!")
  }else if(pwd == check){
    alert("Password verification successful!")
  }else{
    alert("Passwords do no match!")
  }

}

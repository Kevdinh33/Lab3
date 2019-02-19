function checkPassword(){
  document.getElementById("input1");
  if (document.getElementById("input1").value != document.getElementById("input2").value){
    alert("The passwords don't match!");
  }
  else if(document.getElementById("input1").value.length <= 7){
    alert("Password is not long enough.  Minimum length is 8 characters!")
  }
  else{
    alert("Welcome!")
  }
}

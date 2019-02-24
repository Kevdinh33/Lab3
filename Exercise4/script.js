let text = document.getElementById("txt");

function changer(){
  let r = document.getElementById("rValue").value;
  let g = document.getElementById("gValue").value;
  let b = document.getElementById("bValue").value;
  let w = document.getElementById("width")
  text.style.backgroundColor = "rgb("+r+", "+g+", "+b+")";
  text.style.borderWidth = w;
}

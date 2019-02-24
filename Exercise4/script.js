let text = document.getElementById("txt");

function changer(){
  let r = document.getElementById("rValue").value;
  let g = document.getElementById("gValue").value;
  let b = document.getElementById("bValue").value;
  let r2 = document.getElementById("r2Value").value;
  let g2 = document.getElementById("g2Value").value;
  let b2 = document.getElementById("b2Value").value;
  let w = document.getElementById("width").value;
  text.style.borderColor = "rgb("+r+", "+g+", "+b+")";
  text.style.backgroundColor = "rgb("+r2+", "+g2+", "+b2+")";
  text.style.borderWidth = w += "px";
}

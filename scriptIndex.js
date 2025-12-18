const movingText = document.getElementById("moveA");

function randomRGB() {
  const r = Math.floor(Math.random() * 150);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
function textChange (randomRGB) {
   movingText.innerHTML = "You clicked me";
   movingText.style.fontSize = "6rem";
   movingText.style.color = "randomRGB()";
   movingText.style.backgroundColor = "grey";
}

movingText.addEventListener("click", textChange);
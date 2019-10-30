/*--- Write Javascript Here ---*/
// Get UI Elements
const img = document.querySelector("img");
const body = document.querySelector("body");
const p = document.querySelector("p");
const container = document.querySelector(".container");
 
// Add Event Listener
container.addEventListener("mousemove", moveImg);
 
// Move Image Function
function moveImg(e) {
  console.log(e.target);
  p.innerHTML = `Position X: ${e.clientX} <br/> Position Y: ${e.clientY}`;
  img.style.left = `${e.clientX}px`;
  img.style.top = `${e.clientY}px`;
}
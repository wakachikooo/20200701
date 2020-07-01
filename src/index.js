import "./styles.css";

const canvas = document.querySelector("#draw-area");
const context = canvas.getContext("2d");
//var color = "#000000";

canvas.addEventListener("mousemove", event => {
  draw(event.layerX, event.layerY);
});
canvas.addEventListener("touchmove", event => {
  draw(event.layerX, event.layerY);
});

canvas.addEventListener("mousedown", () => {
  context.beginPath();
  isDrag = true;
  // color = document.form.text.value;
});
canvas.addEventListener("mouseup", () => {
  context.closePath();
  isDrag = false;
});

canvas.addEventListener("touchstart", () => {
  context.beginPath();
  isDrag = true;
});
canvas.addEventListener("touchend", () => {
  context.closePath();
  isDrag = false;
});

const clearButton = document.querySelector("#clear-button");
clearButton.addEventListener("click", () => {
  context.strokeStyle = "#000000";
  canvas.style["background-color"] = "#FFFFFF";
  context.clearRect(0, 0, canvas.width, canvas.height);
});

let isDrag = false;

function draw(x, y) {
  if (!isDrag) {
    return;
  }
  // console.log(context.strokeStyle);
  context.lineWidth = 5;
  context.lineTo(x, y);
  context.stroke();
}

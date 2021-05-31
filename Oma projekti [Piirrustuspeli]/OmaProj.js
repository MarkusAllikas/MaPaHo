
const canvas = document.getElementById('piirra');
canvas.width = window.innerwidth - 60
canvas.height = 400;

let context = canvas.getContext("2d");
context.fillStyle = "white";
context.fillRect(0, 0, canvas.width, canvas.height);

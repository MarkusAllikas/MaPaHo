/*
<<<<<<< HEAD
const canvas = document.getElementById('piirra');
canvas.width = window.innerwidth - 60
canvas.height = 400;

let context = canvas.getContext("2d");
context.fillStyle = "white";
context.fillRect(0, 0, canvas.width, canvas.height);


=======


var canvas = document.getElementById('piirrustusAla');
var ctx = canvas.getContext('2d');
var parametrit = {
  target: '#Function',
  data: [{
    funktio: '',
    vari: ''
  }],
  grid: true,
  yAxis: {
    väli: [-1, 1]
  },
  xAxis: {
    väli: [0, 2 * Math.PI]
  }
};

function plot() {
  var f = document.querySelector("#function").value;
  var xMin = document.querySelector("#xMin").value;
  var xMax = document.querySelector("#xMax").value;
  var yMin = document.querySelector("#yMin").value;
  var yMax = document.querySelector("#yMax").value;
  var color = document.querySelector("#color").value;

  parametrit.data[0].fn = f;
  parametrit.xAxis.väli = [xMin, xMax];
  parametrit.yAxis.väli = [yMin, yMax];
  parametrit.data[0].color = color;


  functionPlot(parametrit);
}
>>>>>>> 75a8d7a8e548504ae5bcc45fa89828afc82692d7
*/

const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth - 60;
canvas.height = 400;

let context = canvas.getContext("2d");
let start_background_color = "white";
context.fillStyle = start_background_color;
context.fillRect(0, 0, canvas.width, canvas.height);

let draw_color = "black";
let draw_width = "2";
let is_drawing = false;

let restore_array = [];
let index = -1;

function change_color(element) {
  draw_color = element.style.background;
}


canvas.addEventListener("touchstart", start, false);
canvas.addEventListener("touchmove", draw, false);
canvas.addEventListener("mousedown", start, false);
canvas.addEventListener("mousemove", draw, false);

canvas.addEventListener("touchend", stop, false);
canvas.addEventListener("mouseup", stop, false);
canvas.addEventListener("mouseout", stop, false);


function start(event) {
  is_drawing = true;
  context.beginPath();
  context.moveTo(event.clientX - canvas.offsetLeft,
                 event.clientY - canvas.offsetTop);
  event.preventDefault();
}


function draw(event) {
  if (is_drawing) {
    context.lineTo(event.clientX - canvas.offsetLeft,
                   event.clientY - canvas.offsetTop);
    context.strokeStyle = draw_color;
    context.linewidth = draw_width;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.stroke();
  }
}

function stop(event) {
  if (is_drawing) {
    context.stroke();
    context.closePath();
    is_drawing = false;
  }
  event.preventDefault();

  if (event.type != 'mouseout') {

  restore_array.push(context.getImageData(0, 0, canvas.width, canvas.height));
  index += 1;
  }
}

function clear_canvas() {
  context.fillStyle = start_background_color;
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillRect(0, 0, canvas.width, canvas.height);

  restore_array = [];
  index = -1;
}

function undo_last() {
  if (index <= 0) {
    clear_canvas();
  } else {
    index -= 1;
    restore_array.pop();
    context.putImageData(restore_array[index], 0, 0);
  }
}

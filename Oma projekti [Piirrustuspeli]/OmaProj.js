
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

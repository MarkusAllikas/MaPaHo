window.addEventListener('load', () => {
  const canvas = document.getElementById('piirra');
  const ctx = canvas.getContext("2d");



  /*canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;*/

  let painting = false;

  function change_color(e) {
    draw = e.style.background;
  }

  function startPosition(e){
    painting = true;
    draw(e);
  }

  function finishedPosition() {
    painting = false;
    ctx.beginPath();
  }

  function draw(e) {
    if (!painting) return;
      ctx.lineWidth = 3;
      ctx.lineCap = "round";

      ctx.lineTo(e.clientX, e.clientY);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(e.clientX, e.clientY);
  }

  canvas.addEventListener('mousedown', startPosition);
  canvas.addEventListener('mouseup', finishedPosition);
  canvas.addEventListener('mousemove', draw);
});

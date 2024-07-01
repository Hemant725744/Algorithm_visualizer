function drawLine() {
  const x1 = parseInt(document.getElementById('x1').value);
  const y1 = parseInt(document.getElementById('y1').value);
  const x2 = parseInt(document.getElementById('x2').value);
  const y2 = parseInt(document.getElementById('y2').value);

  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Bresenham's line algorithm
  let dx = Math.abs(x2 - x1);
  let dy = Math.abs(y2 - y1);
  let sx = (x1 < x2) ? 1 : -1;
  let sy = (y1 < y2) ? 1 : -1;
  let err = dx - dy;

  let x = x1;
  let y = y1;

  ctx.beginPath();
  ctx.moveTo(x, y);

  while (true) {
      ctx.lineTo(x, y);
      if (x === x2 && y === y2) break;
      let e2 = 2 * err;
      if (e2 > -dy) {
          err -= dy;
          x += sx;
      }
      if (e2 < dx) {
          err += dx;
          y += sy;
      }
  }

  ctx.stroke();
}

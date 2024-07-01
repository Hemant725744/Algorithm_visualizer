function drawLine() {
    const x1 = parseInt(document.getElementById('x1').value);
    const y1 = parseInt(document.getElementById('y1').value);
    const x2 = parseInt(document.getElementById('x2').value);
    const y2 = parseInt(document.getElementById('y2').value);
  
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
  
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(x1, y1);
  
    const dx = x2 - x1;
    const dy = y2 - y1;
  
    // Determine the number of steps based on the longer axis (x or y)
    const steps = Math.abs(dx) > Math.abs(dy) ? Math.abs(dx) : Math.abs(dy);
  
    // Calculate the increment values for x and y
    const xIncrement = dx / steps;
    const yIncrement = dy / steps;
  
    let x = x1;
    let y = y1;
  
    for (let i = 0; i < steps; i++) {
      x += xIncrement;
      y += yIncrement;
      ctx.lineTo(Math.round(x), Math.round(y));
    }
  
    ctx.stroke();
  }
  
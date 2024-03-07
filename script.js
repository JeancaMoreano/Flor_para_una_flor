document.getElementById('openGiftButton').addEventListener('click', function() {
    this.style.display = 'none'; // Ocultar el botón
    const canvas = document.getElementById('flowerCanvas');
    canvas.style.display = 'block'; // Mostrar el lienzo

    const ctx = canvas.getContext('2d');
    drawFlower(ctx);
});

function drawFlower(ctx) {
    ctx.fillStyle = 'yellow'; // Color del centro de la flor
    ctx.beginPath();
    ctx.arc(200, 200, 10, 0, Math.PI * 2); // Dibuja un círculo para el centro
    ctx.fill();
    ctx.closePath();

    ctx.fillStyle = 'red'; // Color de los pétalos
    for (let i = 0; i < 5; i++) { // Dibuja 5 pétalos
        ctx.beginPath();
        ctx.ellipse(200, 200, 50, 20, Math.PI / 5 * i, 0, Math.PI * 2); // Dibuja un pétalo
        ctx.fill();
        ctx.closePath();
    }
}


document.getElementById('openGiftButton').addEventListener('click', function() {
    this.style.display = 'none'; // Ocultar el botón
    const canvas = document.getElementById('flowerCanvas');
    canvas.style.display = 'block'; // Mostrar el lienzo

    const ctx = canvas.getContext('2d');
    drawFlower(ctx);
});

function drawFlower(ctx) {
    const centerX = 200;
    const centerY = 200;
    const petals = 8;
    const petalRadius = 60;

    // Dibuja pétalos
    ctx.fillStyle = 'pink';
    for (let i = 0; i < petals; i++) {
        const angle = i * (Math.PI * 2 / petals);
        const x = centerX + petalRadius * Math.sin(angle);
        const y = centerY - petalRadius * Math.cos(angle);
        ctx.beginPath();
        ctx.ellipse(x, y, 20, 40, Math.PI / 2 - angle, 0, Math.PI * 2);
        ctx.fill();
    }

    // Dibuja el centro de la flor
    ctx.fillStyle = 'yellow';
    ctx.beginPath();
    ctx.arc(centerX, centerY, 20, 0, Math.PI * 2);
    ctx.fill();
}



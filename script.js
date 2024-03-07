document.getElementById('openGiftButton').addEventListener('click', function() {
    const canvas = document.getElementById('flowerCanvas');
    const ctx = canvas.getContext('2d');

    // Ocultar el botón
    this.style.display = 'none';

    // Mostrar el canvas con animación
    canvas.classList.add('show');

    // Comenzar a dibujar la flor después de que inicie la animación
    setTimeout(function() {
        drawFlower(ctx);
    }, 100); // Pequeña demora para sincronizar con la animación CSS
});

function drawFlower(ctx) {
    const centerX = 200;
    const centerY = 200;
    const petals = 8;
    const petalRadius = 60;
    const petalColor = 'pink';
    const centerColor = 'yellow';
    const stemColor = 'green';
    const stemLength = 150;

    // Dibuja pétalos
    ctx.fillStyle = petalColor;
    for (let i = 0; i < petals; i++) {
        const angle = i * (Math.PI * 2 / petals);
        const x = centerX + petalRadius * Math.cos(angle);
        const y = centerY + petalRadius * Math.sin(angle);
        ctx.beginPath();
        ctx.ellipse(x, y, 20, 40, Math.PI / 2 + angle, 0, Math.PI * 2);
        ctx.fill();
    }

    // Dibuja el centro de la flor
    ctx.fillStyle = centerColor;
    ctx.beginPath();
    ctx.arc(centerX, centerY, 20, 0, Math.PI * 2);
    ctx.fill();

    // Dibuja el tallo
    ctx.fillStyle = stemColor;
    ctx.beginPath();
    ctx.rect(centerX - 5, centerY, 10, stemLength);
    ctx.fill();

    // Añade el texto
    ctx.font = '24px "Brush Script MT", cursive'; // Asegúrate de que esta fuente está disponible o elige una similar
    ctx.textAlign = 'center';
    ctx.fillStyle = 'darkslategray';
    ctx.fillText('Una flor para otra flor', centerX, centerY + stemLength + 30);
}

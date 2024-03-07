document.getElementById('openGiftButton').addEventListener('click', function() {
    const canvas = document.getElementById('flowerCanvas');
    const ctx = canvas.getContext('2d');

    // Ocultar el botón
    this.style.display = 'none';

    // Mostrar el canvas con animación
    canvas.classList.add('show');

    // Comenzar la animación de dibujar la flor
    drawStem(ctx); // Primero dibuja el tallo
});

function drawStem(ctx) {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const stemLength = 120;
    const stemWidth = 10;
    const stemColor = 'green';

    // Dibuja el tallo
    ctx.beginPath();
    ctx.rect(centerX - stemWidth / 2, centerY + 20, stemWidth, stemLength);
    ctx.fillStyle = stemColor;
    ctx.fill();

    // Comienza a dibujar los pétalos
    drawPetals(ctx, 0);
}

function drawPetals(ctx, petalNumber) {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const petals = 8;
    const petalRadius = 60;
    const petalColor = ctx.createRadialGradient(centerX, centerY, 20, centerX, centerY, petalRadius);
    petalColor.addColorStop(0, 'pink');
    petalColor.addColorStop(1, 'palevioletred'); // Da un efecto degradado a los pétalos

    // Dibuja pétalos
    const angle = petalNumber * (Math.PI * 2 / petals);
    const x = centerX + petalRadius * Math.cos(angle);
    const y = centerY + petalRadius * Math.sin(angle);

    ctx.fillStyle = petalColor;
    ctx.beginPath();
    ctx.ellipse(x, y, 20, 40, Math.PI / 2 + angle, 0, Math.PI * 2);
    ctx.fill();

    if (petalNumber < petals) {
        requestAnimationFrame(function() {
            drawPetals(ctx, petalNumber + 1); // Dibuja el siguiente pétalo
        });
    } else {
        drawCenter(ctx);
        drawText(ctx);
    }
}

function drawCenter(ctx) {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const centerRadius = 20;
    const centerColor = 'yellow';

    // Dibuja el centro de la flor
    ctx.beginPath();
    ctx.arc(centerX, centerY, centerRadius, 0, Math.PI * 2);
    ctx.fillStyle = centerColor;
    ctx.fill();
}

function drawText(ctx) {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const stemLength = 120;

    // Añade el texto
    ctx.font = 'italic 20px Arial';
    ctx.fillStyle = 'darkslategray';
    ctx.textAlign = 'center';
    ctx.fillText('Una flor para otra flor', centerX, centerY + stemLength + 70);
}



function generarBingo() {
    const numerosSeleccionados = new Set();
    const tarjeta = [];

    while (tarjeta.length < 5) {
        const fila = [];
        while (fila.length < 5) {
            let numero;
            do {
                numero = Math.floor(Math.random() * 90) + 1;
            } while (numerosSeleccionados.has(numero));
            numerosSeleccionados.add(numero);
            fila.push(numero);
        }
        tarjeta.push(fila); 
    }

    tarjeta[2][2] = 'FREE'; // Posición del espacio libre
    return tarjeta;
}  

function crearTarjeta(tarjeta) {
    const contenedor = document.createElement('div');
    contenedor.className = 'tarjeta';
    contenedor.innerHTML = '<h2>Cㅤ Aㅤ Bㅤ Lㅤ E</h2>';
    const grid = document.createElement('div');
    grid.className = 'grid';

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            const numero = tarjeta[j][i];
            const cell = document.createElement('div');
            cell.className = 'numero';
            if (numero === 'FREE') {
                const img = document.createElement('img');
                img.src = 'image/logo.jpg'; // Cambia esto a la ruta de tu logo
                img.alt = 'Logo';
                img.style.width = '60px'; // Ajusta el tamaño según sea necesario
                img.style.height = '60px';
                img.style.display = 'block';
                img.style.margin = 'auto';
                cell.classList.add('free'); // Clase para aplicar estilos
                cell.appendChild(img);
            } else {
                cell.textContent = numero;
            }
            grid.appendChild(cell);
        }
    }

    contenedor.appendChild(grid);

    // Añadir la palabra "BINGO" en la parte inferior
    const bingoTexto = document.createElement('h4');
    bingoTexto.textContent = 'Tㅤ Aㅤ Cㅤ Nㅤ A';   
    contenedor.appendChild(bingoTexto);

    // Añadir imágenes publicitarias   
    const imagenesContenedor = document.createElement('div');
    imagenesContenedor.className = 'imagenes-publicitarias';
    const rutasImagenes = ['image/kr.png', 'image/leon.png', 'image/heineken.png']; // Rutas de las imágenes
    rutasImagenes.forEach((ruta, index) => { 
        const img = document.createElement('img');
        img.src = ruta; // Cambia esta línea para usar las rutas correctas
        img.alt = `Publicidad ${index + 1}`;
        imagenesContenedor.appendChild(img);
    });
}
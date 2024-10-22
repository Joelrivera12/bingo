<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generador de Bingo</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
            color: #333;
            text-align: center;
            padding: 20px;
        }

        h1 {
            color: #4CAF50;
        }

        button {
            padding: 10px 20px;
            font-size: 16px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        button:hover {
            background-color: #45a049;
        }

        .bingo-card {
            display: inline-block;
            border: 2px solid #4CAF50;
            border-radius: 10px;
            margin: 10px;
            padding: 10px;
            background-color: white;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        }

        .bingo-card h3 {
            color: #4CAF50;
            margin: 0 0 10px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 5px;
        }

        .bingo-card div {
            text-align: center;
            font-size: 18px;
            font-weight: bold;
            border: 1px dashed #4CAF50;
            padding: 15px;
            border-radius: 5px;
            background-color: #e7f3e7;
        }

        .bingo-card .free-space {
            background-color: #ffeeba;
            font-weight: normal;
            color: #4CAF50;
        }
    </style>
</head>
<body>

<h1>Generador de Cartones de Bingo</h1>
<button onclick="generarBingos()">Generar 500 Cartones</button>
<div id="cartones"></div>

<script>
    function generarBingo() {
        const numeros = Array.from({ length: 24 }, (_, i) => i + 1); // 24 números
        const seleccionados = [];
        while (seleccionados.length < 24) {
            const num = numeros.splice(Math.floor(Math.random() * numeros.length), 1)[0];
            seleccionados.push(num);
        }
        seleccionados.splice(12, 0, ".es"); // Insertar .es en el centro
        return seleccionados;
    }

    function generar500Bingos() {
        const bingos = new Set();
        // Generar un cartón ganador
        const cartónGanador = generarBingo();
        bingos.add(cartónGanador.join(","));

        // Generar 499 cartones únicos que no repitan el ganador
        while (bingos.size < 500) {
            const tarjeta = generarBingo();
            if (!bingos.has(tarjeta.join(","))) {
                bingos.add(tarjeta.join(","));
            }
        }
        return Array.from(bingos).map(b => b.split(","));
    }

    function mostrarBingos() {
        const contenedor = document.getElementById('cartones');
        contenedor.innerHTML = ''; 
        const bingosUnicos = generar500Bingos();

        bingosUnicos.forEach((bingo, index) => {
            const cardDiv = document.createElement('div');
            cardDiv.className = 'bingo-card';
            cardDiv.innerHTML = `<h3>Cartón ${index + 1}</h3>`;
            const gridDiv = document.createElement('div');
            gridDiv.className = 'grid';

            for (let i = 0; i < 5; i++) {
                for (let j = 0; j < 5; j++) {
                    const cell = document.createElement('div');
                    if (i === 2 && j === 2) {
                        cell.className = 'free-space'; // Espacio libre
                        cell.textContent = ".es"; // Espacio libre en el medio
                    } else {
                        cell.textContent = bingo[i * 5 + j];
                    }
                    gridDiv.appendChild(cell);  
                }
            }

            cardDiv.appendChild(gridDiv);
            contenedor.appendChild(cardDiv);
        });
    }

    function generarBingos() {
        mostrarBingos();
    }
</script>

</body>
</html>

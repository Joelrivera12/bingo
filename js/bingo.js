$(function () {
    var bingo = {
        selectedNumbers: [],
        generateRandom: function () {
            var min = 1;
            var max = 75; // Usamos números del 1 al 75
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        generateNextRandom: function () {
            if (bingo.selectedNumbers.length >= 24) {
                alert("Todos los números han sido generados");
                return 0;
            }
            var random = bingo.generateRandom();
            while ($.inArray(random, bingo.selectedNumbers) > -1) {
                random = bingo.generateRandom();
            }
            bingo.selectedNumbers.push(random);
            return random;
        }
    };

    // Llenar las 24 celdas con números aleatorios del 1 al 75, excepto la celda del medio
    var cells = $('td').not('#middle'); // Excluir la celda del medio
    var index = 0;

    $('#btnGenerate').click(function () {
        if (index >= 24) {
            alert("Se han llenado todas las celdas.");
            return;
        }

        var random = bingo.generateNextRandom().toString();
        $(cells[index]).text(random);
        $(cells[index]).addClass('selected');
        index++;
        // Actualizar el número mostrado en el span dentro de bigNumberDisplay
        $('#displayNumber').text(random); 
    });
});

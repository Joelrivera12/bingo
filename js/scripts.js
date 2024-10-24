$(window).on('load', function() {
    // Ocultar el loader una vez que la página se ha cargado completamente
    $(".loader_bg").fadeOut(); // Esto ocultará el loader gradualmente
});

// Función para refrescar la página
$('#btnRefresh').click(function() {
    location.reload(); // Refresca la página al hacer clic en el botón
});

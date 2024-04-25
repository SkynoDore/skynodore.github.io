document.addEventListener("DOMContentLoaded", function() {

    // Crear un array de temporizadores
    var temporizadores = [];

    // Obtener todas las cajas
    var cajas = document.querySelectorAll(".cajas");

    // Manejar el evento mouseover y mouseleave para cada caja
    cajas.forEach(function(caja, index) {
        caja.addEventListener("mouseenter", function() {
            // Detener el temporizador correspondiente a la caja actual, si existe
            clearTimeout(temporizadores[index]);

            // Animar la caja actual
            var img = caja.querySelector("img");
            var div = caja.querySelector("div");
            img.style.transition = "height 0.1s";
            div.style.transition = "height 0.1s";
            img.style.height = "0px";
            div.style.height = "260px";
        });

        caja.addEventListener("mouseleave", function() {
            // Configurar un temporizador para la caja actual
            temporizadores[index] = setTimeout(function() {
                // Animar la caja actual para volver a su estado original
                var img = caja.querySelector("img");
                var div = caja.querySelector("div");
                img.style.transition = "height 0.1s";
                div.style.transition = "height 0.1s";
                img.style.height = "235px";
                div.style.height = "55px";
            }, 2000); // Retraso de 2000 ms (2 segundos)
        });
    });
});


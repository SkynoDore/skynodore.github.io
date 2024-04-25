document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita el envío del formulario por defecto

        // Verifica si el formulario es válido
        if (form.checkValidity()) {
            // Muestra una alerta indicando que los datos son correctos y se enviarán
            alert("¡Los datos son correctos y se enviarán!");
            // Aquí podrías enviar los datos del formulario a través de AJAX o realizar cualquier otra acción necesaria
        }
    });
});
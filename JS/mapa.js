// Esta función se llamará automáticamente cuando se cargue la API de Google Maps
function cargarmapa() {
// Coordenadas de MasterD
var masterdCoords = new google.maps.LatLng(40.44132135975042, -3.697454529931839);

// Opciones para configurar el mapa
var opciones = {
    zoom: 16,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};

// Crear el mapa con las opciones especificadas
var mapa = new google.maps.Map(document.getElementById("mapa"), opciones);

// Intentar obtener la ubicación del usuario
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        // Coordenadas del usuario
        var userCoords = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

        // Centrar el mapa en la ubicación del usuario
        mapa.setCenter(userCoords);

        // Crear un marcador en la ubicación del usuario
        var marcador = new google.maps.Marker({
            position: userCoords,
            map: mapa
        });
    }, function() {
        // En caso de error al obtener la ubicación del usuario, centrar el mapa en MasterD
        mapa.setCenter(masterdCoords);
    });
} else {
    // Si el navegador no soporta la geolocalización, centrar el mapa en MasterD
    mapa.setCenter(masterdCoords);
}

// Crear un marcador en las coordenadas de MasterD
var marcadorMasterD = new google.maps.Marker({
    position: masterdCoords,
    map: mapa
});
}
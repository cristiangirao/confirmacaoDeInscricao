var text = document.getElementById("localization");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        text.innerHTML = "Seu browser não suporta o serviço de geolocalização.";
    }
}
function showPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    if ((latitude > -3.872706 && latitude < -3.871893) && (longitude > -38.612541 && longitude < -38.612237)) {
        text.innerHTML = "Saudações livres! Sua inscrição foi confirmada no COMSOLID...";
    } else {
        text.innerHTML = "Você não está dentro do bloco da telemática!";
    }
}

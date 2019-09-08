var map;
function initMap() {
    var position = {lat: 30.2266256, lng: -93.3511792};
    map = new google.maps.Map(document.getElementById('map'), {
        center: position,
        zoom: 18
    });
    var marker = new google.maps.Marker({position: position, map: map});
}

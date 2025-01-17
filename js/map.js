$(function initMap() {
	var coord = {lat: 54.203261, lng: 37.639989};
	var image = {
		path: 'M17.5,0A17.5,17.5,0,0,0,0,17.5,16.14,16.14,0,0,0,.89,23C4.79,33.85,17.5,50,17.5,50S30.21,33.85,34.11,23A16.14,16.14,0,0,0,35,17.5,17.5,17.5,0,0,0,17.5,0Zm0,11.67a5.83,5.83,0,0,1,5.83,5.83h0a5.83,5.83,0,0,1-5.83,5.83h0a5.83,5.83,0,0,1-5.83-5.83h0a5.83,5.83,0,0,1,5.83-5.83Z',
		fillColor: '#51b051',
		strokeColor: '#51b051',
	    strokeOpacity: 1,
	    strokeWeight: 1,
	    fillOpacity: 1,
	    rotation: 0,
	    scale: 1.0,
        anchor: new google.maps.Point(17, 50)
	}
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 54.203261, lng: 37.539989},
		zoom: 13,
		disableDefaultUI: true,
		zoomControl: true,
		streetViewControl: true,
		styles: [
			{"elementType": "geometry","stylers": [{"color": "#f5f5f5"}]},
			{"elementType": "labels.icon","stylers": [{"visibility": "off"}]},
			{"elementType": "labels.text.fill","stylers": [{"color": "#616161"}]},
			{"elementType": "labels.text.stroke","stylers": [{"color": "#f5f5f5"}]},
			{"featureType": "administrative.land_parcel","elementType": "labels.text.fill","stylers": [{"color": "#a0a0a0"}]},
			{"featureType": "poi","elementType": "geometry","stylers": [{"color": "#eeeeee"}]},
			{"featureType": "poi","elementType": "labels.text.fill","stylers": [{"color": "#757575"}]},
			{"featureType": "poi.park","elementType": "geometry","stylers": [{"color": "#e5e5e5"}]},
			{"featureType": "poi.park","elementType": "labels.text.fill","stylers": [{"color": "#9e9e9e"}]},
			{"featureType": "road","elementType": "geometry","stylers": [{"color": "#a0a0a0"}]},
			{"featureType": "road.arterial","elementType": "labels.text.fill","stylers": [{"color": "#757575"}]},
			{"featureType": "road.highway","elementType": "geometry","stylers": [{"color": "#dadada"}]},
			{"featureType": "road.highway","elementType": "labels.text.fill","stylers": [{"color": "#616161"}]},
			{"featureType": "road.local","elementType": "labels.text.fill","stylers": [{"color": "#9e9e9e"}]},
			{"featureType": "transit.line","elementType": "geometry","stylers": [{"color": "#a0a0a0"}]},
			{"featureType": "transit.station","elementType": "geometry","stylers": [{"color": "#eeeeee"}]},
			{"featureType": "water","elementType": "geometry","stylers": [{"color": "#a0a0a0"}]},
			{"featureType": "water","elementType": "labels.text.fill","stylers": [{"color": "#a0a0a0"}]}
		]
	});
	var marker = new google.maps.Marker({
    	position: coord,
    	map: map,
    	icon: image
    });
    var infowindow = new google.maps.InfoWindow({
		content: 'Первый юридический центр<br>г. Тула, ул. test, 11'
	});
	marker.addListener('click', function() {
	    infowindow.open(map, marker);
	});
});
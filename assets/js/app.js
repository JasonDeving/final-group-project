function initMap() {

	var locations = [];

	// the ajax call to restcountries api
	$.ajax({
		url: "https://restcountries.eu/rest/v1/all", 
		method: 'GET' 
	}).done(function (response) {

		// diplay the whole map on screen
		var map = new google.maps.Map(document.getElementById('map'), {
			zoom: 2,
			center: new google.maps.LatLng(0, 0),
			mapTypeId: google.maps.MapTypeId.ROADMAP
		});



		// push array of country information to locations array
		for (var i = 0; response.length > i; i++) {
			locations.push([
				response[i].name, 
				response[i].latlng[0], 
				response[i].latlng[1], 
				i, 
				response[i], 
				response[i].capital
			]);
		}


		

		// user input & creating search box
		var input = document.getElementById('search-input');
		var searchBox = new google.maps.places.SearchBox(input);
		map.controls[google.maps.ControlPosition.TOP_CENTER].push(input);

		// Bias the SearchBox results towards current map's viewport.
		map.addListener('bounds_changed', function () {
			searchBox.setBounds(map.getBounds());
		});

		




		// Listen for the event fired when the user selects a prediction and retrieve
		// more details for that place.
		searchBox.addListener('places_changed', function () {
			var places = searchBox.getPlaces();

			if (places.length == 0) {
				return;
			}

			// For each place, get the icon, name and location.
			var bounds = new google.maps.LatLngBounds();
			places.forEach(function (place) {
				
				// viewport is the visual of the current state of the website
				if (place.geometry.viewport) {
					// geometry viewport indicates lat and lng
					bounds.union(place.geometry.viewport);
				} else {
					bounds.extend(place.geometry.location);
				}
			});

			map.fitBounds(bounds);
		});





		var infowindow = new google.maps.InfoWindow({});







		// this is code for infobox
		for (var i = 0; i < locations.length; i++) {
			var marker;
			// if(input === locations[i][0]){
				marker = new google.maps.Marker({
					position: new google.maps.LatLng(locations[i][1], locations[i][2]),
					map: map
				});
			// }

			google.maps.event.addListener(marker, 'click', (function (marker, i) {
				return function () {
					console.log(locations);
					//
					var img = 'http://jasonchan.website/assets/images/png/' + locations[i][4].alpha2Code.toLowerCase() + '.png';
					var wiki = "https://en.wikipedia.org/wiki/" + locations[i][0].replace(/ /g,"_");
					//
					var contentString = '<div id="content"> ' +  
					   '<img src="' + img + '" alt="Smiley face" width="60" height="45">' +
					   '<h1 id="firstHeading" class="firstHeading">'+locations[i][0]+'</h1>' +
					   '<div id="bodyContent">' +

							'<p><b>Capital City</b> :  ' + locations[i][5] + '</p>' +
							'<p><b>Population</b> :  ' + locations[i][4].population + '</p>' +
							'<p><b>Native Name</b> :  ' + locations[i][4].nativeName + '</p>' +


					   '<p><i>About</i> : <a target="_blank" href="' + wiki + '">' + locations[i][0] + '</a></p>' +
					   '</div>' +
					   '</div>';


					infowindow.setContent(contentString);
					infowindow.open(map, marker);
				}
			})(marker, i));
		}
	});

// end of initMap function
} 




  
    
// END FUNCTION

